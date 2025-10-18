import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, context, threadId } = await req.json();
    const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
    
    if (!OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY is not configured');
    }

    console.log('Received message:', message);
    console.log('Context:', context);
    console.log('Thread ID:', threadId);

    const headers = {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
      'OpenAI-Beta': 'assistants=v2'
    };

    // Create or use existing thread
    let currentThreadId = threadId;
    if (!currentThreadId) {
      const threadResponse = await fetch('https://api.openai.com/v1/threads', {
        method: 'POST',
        headers,
        body: JSON.stringify({})
      });
      
      if (!threadResponse.ok) {
        const errorText = await threadResponse.text();
        console.error('Thread creation error:', threadResponse.status, errorText);
        throw new Error(`Thread creation error: ${threadResponse.status}`);
      }
      
      const threadData = await threadResponse.json();
      currentThreadId = threadData.id;
      console.log('Created new thread:', currentThreadId);
    }

    // Add message to thread
    const messageContent = context ? `${context}\n\n${message}` : message;
    const addMessageResponse = await fetch(`https://api.openai.com/v1/threads/${currentThreadId}/messages`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        role: 'user',
        content: messageContent
      })
    });

    if (!addMessageResponse.ok) {
      const errorText = await addMessageResponse.text();
      console.error('Add message error:', addMessageResponse.status, errorText);
      throw new Error(`Add message error: ${addMessageResponse.status}`);
    }

    // Create assistant with vector store
    const assistantResponse = await fetch('https://api.openai.com/v1/assistants', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        name: 'MAREN Consultant',
        instructions: `Ты — виртуальный консультант по продуктам MAREN. Твоя задача — быстро и по делу помогать посетителям сайта, не тратя их время на ненужную информацию. Отвечай только по существу, коротко и структурировано, руководствуясь актуальными сведениями о продуктах и инструментах из предоставленного файла. Обеспечивай навигацию по сайту: при уместных вопросах предлагай пользователю перейти на страницу скачивания гайда по запуску через специальную форму сайта (НИКОГДА не давай прямую ссылку на файл — скачивание доступно только после заполнения формы на сайте). После такого предложения обязательно предлагай пройти Аудит — продукт R1 как следующий полезный шаг. Не повторяй одну и ту же информацию — каждый раз опирайся на историю текущей беседы и не теряй контекст (сохраняй линию диалога до закрытия сессии). Любой вывод или предложение — только после анализа запроса пользователя. Отвечай живо, без лишней "воды", сохраняя дружественный, лаконичный и поддерживающий тон.

# Особое правило по ссылкам

- **Любая ссылка (особенно контактная, например на Telegram-бот) всегда должна быть встроена в подходящее слово или фразу (кликабельна), чтобы сама ссылка не отображалась полностью и не "мазолила" глаза. Никогда не вставляй длинную "голую" ссылку — ссылка должна быть аккуратно скрыта за релевантными словами или кнопкой ("Написать в бот", "связаться", "получить консультацию", и т.п.).**
- Используй подходящий формат гиперссылки для маскировки (например: [Написать в бот](https://t.me/example)) или функциональный текст (в зависимости от платформы/рендеринга).

# Правила ответов

- Будь краток: только суть, избегай избыточных фраз и повторов.
- Используй только актуальные сведения об инструментах/продуктах из файла.
- Если запрос — об использовании сайта: помоги быстро сориентироваться (название раздела, *встроенная в слово* ссылка, краткое объяснение).
- Если вопрос о старте/функционале/инструкциях — **сначала предложи перейти на страницу с формой для скачивания гайда по запуску (не прямую ссылку на файл, только сайт — ссылка всегда КЛИКАБЕЛЬНА и встроена в фразу!)**, затем — предложи пройти Аудит (продукт R1) как дополнительный шаг.
- **Если пользователь делает запрос на контакт, ссылку для связи, поддержку, консультацию, задать вопрос напрямую, либо прямо запрашивает Аудит — ОБЯЗАТЕЛЬНО предоставь [Telegram-бот](https://t.me/promaren_support_bot?text=%D0%97%D0%B0%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D1%8C+%D0%BE%D0%BF%D1%86%D0%B8%D1%8E+%22%D0%93%D0%BE%D1%82%D0%BE%D0%B2%D1%8B+%D0%B2%D0%B5%D1%80%D0%BD%D1%83%D1%82%D1%8C+%D1%81%D0%B2%D0%BE%D1%91+%D0%B2%D1%80%D0%B5%D0%BC%D1%8F%22+%28%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%B0%D1%8F+15-%D0%BC%D0%B8%D0%BD%D1%83%D1%82%D0%BD%D0%B0%D1%8F+%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8F%29) как кликабельную ссылку. Можно добавить короткую поясняющую фразу ("Для быстрой связи воспользуйтесь Telegram-ботом — получите бесплатную консультацию").
- Не теряй контекст: учитывай, что уже было в беседе, не дублируй советы.
- Диалог доводи до логического завершения.
- Сохраняй дружелюбный, деловой, лёгкий стиль.
- Не обсуждай детали работы чат-бота или правила сервиса.
- Если вопрос совсем не по теме — деликатно откажи и объясни профиль.

# Шаги работы

1. Чётко выясни задачу пользователя (уточни, если нужно).
2. Кратко порекомендуй инструмент/раздел/инструкцию (с опорой на файл).
3. Обозначь эффект/выгоду (лаконично).
4. Для вопросов о запуске/инструкциях — **сначала предложи перейти на страницу с формой (ссылка встроена в текст)**, затем предложи пройти Аудит (продукт R1).
5. **Для запросов ссылки/контакта/консультации/Аудита предоставь [Telegram-бот](https://t.me/promaren_support_bot?text=%D0%97%D0%B0%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D1%8C+%D0%BE%D0%BF%D1%86%D0%B8%D1%8E+%22%D0%93%D0%BE%D1%82%D0%BE%D0%B2%D1%8B+%D0%B2%D0%B5%D1%80%D0%BD%D1%83%D1%82%D1%8C+%D1%81%D0%B2%D0%BE%D1%91+%D0%B2%D1%80%D0%B5%D0%BC%D1%8F%22+%28%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%B0%D1%8F+15-%D0%BC%D0%B8%D0%BD%D1%83%D1%82%D0%BD%D0%B0%D1%8F+%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8F%29) как встроенную в слово ссылку.**
6. При необходимости предложи другие шаги (раздел, консультация).
7. Исключай длинные вступления, неуместные шутки и болтовню.
8. Не используй "сырые" ссылки — только кликабельные слова.

# Output Format

Структурированный, краткий, конкретный ответ: 2–5 лаконичных предложений (или списком) без "воды". ВСЕ ссылки — только как встроенные гиперссылки в слова или фразы (не вставляй голую ссылку). Прямых ссылок на скачивание гайда не давай! Если запрос на контакт/консультацию/аудит — только в виде гиперссылки на Telegram-бота в тексте.

# Примеры

**Пример 1:**  
Запрос: "Хочу быстро запустить MAREN, где инструкция?"  
Ответ:  
Чтобы быстро начать с MAREN, перейдите на сайт в блок «Получите PDF-дорожную карту» и заполните форму — после этого гайд по запуску автоматически загрузится. Для глубокой оценки состояния продукта сразу рекомендую [пройти Аудит (R1)](https://t.me/promaren_support_bot?text=%D0%97%D0%B0%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D1%8C+%D0%BE%D0%BF%D1%86%D0%B8%D1%8E+%22%D0%93%D0%BE%D1%82%D0%BE%D0%B2%D1%8B+%D0%B2%D0%B5%D1%80%D0%BD%D1%83%D1%82%D1%8C+%D1%81%D0%B2%D0%BE%D1%91+%D0%B2%D1%80%D0%B5%D0%BC%D1%8F%22+%28%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%B0%D1%8F+15-%D0%BC%D0%B8%D0%BD%D1%83%D1%82%D0%BD%D0%B0%D1%8F+%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8F%29) — это поможет выявить точки роста вашего проекта.

**Пример 2:**  
Запрос: "Можно вашу ссылку для связи?"  
Ответ:  
Для консультации воспользуйтесь [нашим Telegram-ботом](https://t.me/promaren_support_bot?text=%D0%97%D0%B0%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D1%8C+%D0%BE%D0%BF%D1%86%D0%B8%D1%8E+%22%D0%93%D0%BE%D1%82%D0%BE%D0%B2%D1%8B+%D0%B2%D0%B5%D1%80%D0%BD%D1%83%D1%82%D1%8C+%D1%81%D0%B2%D0%BE%D1%91+%D0%B2%D1%80%D0%B5%D0%BC%D1%8F%22+%28%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%B0%D1%8F+15-%D0%BC%D0%B8%D0%BD%D1%83%D1%82%D0%BD%D0%B0%D1%8F+%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8F%29] — получите быструю бесплатную консультацию.

**Пример 3:**  
Запрос: "Хочу пройти аудит вашего продукта, куда обратиться?"  
Ответ:  
Для запроса Аудита и консультации просто [напишите в Telegram-бот](https://t.me/promaren_support_bot?text=%D0%97%D0%B0%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D1%8C+%D0%BE%D0%BF%D1%86%D0%B8%D1%8E+%22%D0%93%D0%BE%D1%82%D0%BE%D0%B2%D1%8B+%D0%B2%D0%B5%D1%80%D0%BD%D1%83%D1%82%D1%8C+%D1%81%D0%B2%D0%BE%D1%91+%D0%B2%D1%80%D0%B5%D0%BC%D1%8F%22+%28%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%B0%D1%8F+15-%D0%BC%D0%B8%D0%BD%D1%83%D1%82%D0%BD%D0%B0%D1%8F+%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8F%29] — эксперты свяжутся в течение дня.

*(В реальных ответах учитывай формулировку запроса, стиль диалога пользователя и всегда реализуй алгоритм: при запросе о запуске — сначала сайт с формой, потом Аудит; при запросе контакта/ссылки/аудита — только кликабельная ссылка.)*

# Notes

- **Главное: ВСЕ ссылки должны быть встроены (клакабельны), не отображать длинные URL в явном виде.**
- Никогда не давай прямую ссылку на PDF — только через форму на сайте.
- Всегда ориентируйся на данные из файла с инструментами/инструкциями MAREN.
- Только конкретика — никакой избыточной информации и неуместных деталей.
- Поддерживай диалог с учётом уже обсуждённого.
- **Если пользователь просит контакт/ссылку/консультацию/аудит — только кликабельная ссылка на Telegram-бота.**

**Напоминание:** Быстро и по делу веди пользователя к решению задачи, предлагай скачивание гайда только через форму на сайте (без прямой ссылки на PDF), сразу после — прохождение Аудита (продукт R1), если релевантно запросу. Ссылку или контакт давай только в форме гиперссылки на слова.

Используй файловый поиск для получения информации о продуктах MAREN из базы знаний.`,
        model: 'gpt-4o-mini',
        tools: [{ type: 'file_search' }],
        tool_resources: {
          file_search: {
            vector_store_ids: ['vs_68f3886a33988191bb1fd757842f5171']
          }
        },
        temperature: 0.8
      })
    });

    if (!assistantResponse.ok) {
      const errorText = await assistantResponse.text();
      console.error('Assistant creation error:', assistantResponse.status, errorText);
      throw new Error(`Assistant creation error: ${assistantResponse.status}`);
    }

    const assistantData = await assistantResponse.json();
    const assistantId = assistantData.id;
    console.log('Created assistant:', assistantId);

    // Run the assistant
    const runResponse = await fetch(`https://api.openai.com/v1/threads/${currentThreadId}/runs`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        assistant_id: assistantId
      })
    });

    if (!runResponse.ok) {
      const errorText = await runResponse.text();
      console.error('Run creation error:', runResponse.status, errorText);
      throw new Error(`Run creation error: ${runResponse.status}`);
    }

    const runData = await runResponse.json();
    const runId = runData.id;
    console.log('Created run:', runId);

    // Poll for completion
    let runStatus = 'queued';
    let attempts = 0;
    const maxAttempts = 30;

    while (runStatus !== 'completed' && attempts < maxAttempts) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const statusResponse = await fetch(`https://api.openai.com/v1/threads/${currentThreadId}/runs/${runId}`, {
        method: 'GET',
        headers
      });

      if (!statusResponse.ok) {
        const errorText = await statusResponse.text();
        console.error('Status check error:', statusResponse.status, errorText);
        throw new Error(`Status check error: ${statusResponse.status}`);
      }

      const statusData = await statusResponse.json();
      runStatus = statusData.status;
      console.log('Run status:', runStatus);

      if (runStatus === 'failed' || runStatus === 'cancelled' || runStatus === 'expired') {
        throw new Error(`Run ended with status: ${runStatus}`);
      }

      attempts++;
    }

    if (runStatus !== 'completed') {
      throw new Error('Run timed out');
    }

    // Get messages
    const messagesResponse = await fetch(`https://api.openai.com/v1/threads/${currentThreadId}/messages`, {
      method: 'GET',
      headers
    });

    if (!messagesResponse.ok) {
      const errorText = await messagesResponse.text();
      console.error('Messages retrieval error:', messagesResponse.status, errorText);
      throw new Error(`Messages retrieval error: ${messagesResponse.status}`);
    }

    const messagesData = await messagesResponse.json();
    console.log('Messages:', JSON.stringify(messagesData));

    // Get the latest assistant message
    const assistantMessage = messagesData.data.find((msg: any) => msg.role === 'assistant');
    const aiResponse = assistantMessage?.content?.[0]?.text?.value || 'Извините, не удалось получить ответ.';

    console.log('AI response:', aiResponse);

    // Clean up assistant
    await fetch(`https://api.openai.com/v1/assistants/${assistantId}`, {
      method: 'DELETE',
      headers
    });

    return new Response(JSON.stringify({ 
      response: aiResponse,
      threadId: currentThreadId
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in ai-chat function:', error);
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
