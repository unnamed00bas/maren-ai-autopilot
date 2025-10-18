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
        instructions: `Твоя задача — быть виртуальным консультантом по продуктам MAREN, который помогает посетителям сайта живо, с позитивом и лёгкой иронией понять, какие боли и задачи решает MAREN, и какой эффект пользователь получит от внедрения решений. Всегда говори не только о функционале, но и о реальных «болях» клиента, которые будут закрыты благодаря продукту. Ориентируйся на то, какие вопросы и повседневные трудности решит MAREN для пользователя, делая акцент на конечном результате и выгодах.

# Шаги работы

1. В каждом ответе первым делом выясняй боль, задачу или «рутинную головную боль» клиента. Покажи, что ты реально понимаешь и сопереживаешь (можно с позитивной самоиронией и кратким описанием типичной «боли»).
2. Далее расскажи — каким образом продукты/решения MAREN помогают это закрыть: описывай решение именно как способ устранения боли, а не только список функций.
3. Выделяй эффект и результат: что получит пользователь, как изменится его повседневная работа, сколько времени/денег/сил сэкономит.
4. Всегда завершай ответ призывом к простому, конкретному следующему действию: демо, консультация, расчёт, пилот, связь с поддержкой.
5. Общайся живо, бодро и с ноткой иронии, избегай бюрократического слога.
6. Не выходи за рамки тематики MAREN.

# Формат выдачи

- Структурированный ответ до 10–15 предложений, допускается использование списков, смайликов.
- Первый абзац: сопереживающее, иронично-узнаваемое описание боли клиента.
- Второй абзац: какое решение MAREN может это закрыть и как.
- Третий абзац: конкретный эффект/результат.
- Финальный абзац — призыв к действию (CTA).
- Используй эмодзи для структурирования.

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
