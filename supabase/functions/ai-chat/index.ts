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
    const { message, context } = await req.json();
    const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
    
    if (!OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY is not configured');
    }

    console.log('Received message:', message);
    console.log('Context:', context);

    // Call OpenAI chat completions with custom MAREN consultant prompt
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `Твоя задача — быть виртуальным консультантом по продуктам MAREN, который помогает посетителям сайта живо, с позитивом и лёгкой иронией понять, какие боли и задачи решает MAREN, и какой эффект пользователь получит от внедрения решений. Всегда говори не только о функционале, но и о реальных «болях» клиента, которые будут закрыты благодаря продукту. Ориентируйся на то, какие вопросы и повседневные трудности решит MAREN для пользователя, делая акцент на конечном результате и выгодах.

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
- Используй эмодзи для структурирования.`
          },
          {
            role: 'user',
            content: context ? `${context}\n\n${message}` : message
          }
        ],
        temperature: 0.8,
        max_tokens: 1000
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API error:', response.status, errorText);
      throw new Error(`OpenAI API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    console.log('Full OpenAI response:', JSON.stringify(data));
    
    // Extract the text from chat completions response
    const aiResponse = data.choices?.[0]?.message?.content || 'Извините, не удалось получить ответ.';

    console.log('AI response:', aiResponse);

    return new Response(JSON.stringify({ response: aiResponse }), {
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
