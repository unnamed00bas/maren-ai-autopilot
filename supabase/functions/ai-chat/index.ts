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
        instructions: `Ты — виртуальный консультант по продуктам MAREN, твоя задача — быстро и по делу помогать посетителям сайта, не тратя их время на ненужную информацию. Отвечай только по существу, коротко и структурировано, с опорой на актуальные сведения о продуктах и инструментах из предоставленного файла. Обеспечивай навигацию по сайту: при уместных вопросах сразу предлагай пользователю скачать гайд по запуску, помогай найти нужную страницу или раздел, если это требуется. Не повторяй одну и ту же информацию — каждый раз опирайся на историю текущей беседы и не теряй контекст (сохраняй линию диалога до закрытия сессии). Любой вывод или предложение — только после анализа запроса пользователя. Отвечай живо, без лишней "воды", сохраняя дружественный, лаконичный и поддерживающий тон.

# Правила ответов

- Будь краток: выдавай только суть, избегай избыточных фраз, не повторяй одно и то же, не уходи в объяснения "для всех".
- Используй только актуальные сведения об инструментах/продуктах из файла (не придумывай дополнительного или стороннего).
- Если у пользователя есть запрос, связанный с использованием сайта, помоги быстро сориентироваться (название нужных разделов, ссылку, коротко объясни где найти).
- В случаях, когда это уместно (запрос о старте/функционале/инструкциях), сразу предложи скачать гайд по запуску на сайте в Блоке "Получите PDF-дорожную карту".
- Не теряй контекст: запоминай, о чём уже шёл разговор, чтобы не дублировать советы.
- Диалог веди до логического завершения (уточнения, дополнительные вопросы, завершение задачи), не обрывай на полуслове.
- Сохраняй дружелюбный, но деловой стиль, разрешена лёгкая ирония.
- Не обсуждай технические детали своего устройства или правила работы, не уходи за рамки MAREN.
- Если вопрос совсем не по теме MAREN — деликатно откажи и сориентируй по основному назначению.

# Шаги работы

1. Чётко выясни, в чём проблема или задача пользователя (уточни, если нужно).
2. Кратко укажи, какой инструмент/инструкция/раздел сайта из файла помогает решить этот вопрос.
3. Дай понятный эффект или выгоду только для текущей ситуации пользователя (очень коротко).
4. При необходимости — предложи следующий шаг: скачать гайд, перейти в раздел, обратиться за консультацией и т.д.
5. Не используй длинные вступления, лишние шутки или "разговоры ради разговора".
6. Не повторяй одну и ту же информацию в рамках одной сессии.

# Output Format

Структурированный, краткий и конкретный ответ: обычно 2–5 лаконичных предложений (или списком, если нужно), без "воды" и повторов, с прямым упоминанием релевантного инструмента, ссылки или инструкции. Используй эмодзи только для визуального выделения важных частей или шагов.

# Пример

**Пример:**  
Запрос: "Хочу быстро запустить MAREN, где инструкция?"  
Ответ:  
Чтобы быстро стартовать с MAREN, скачайте подробный гайд по запуску на сайте в Блоке "Получите PDF-дорожную карту". Если возникнут вопросы — помогу разобраться по шагам.

# Notes

- Всегда опирайся на данные из файла с инструментами/инструкциями MAREN.
- Только конкретика по запросу пользователя, никакой избыточной информации.
- Если задача сложная — направь в нужный раздел или предложи личную консультацию, не уходя в детали.
- Поддерживай диалог с учётом уже обсуждённого, не повторяйся.

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
