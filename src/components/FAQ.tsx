import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

const faqs = [
  {
    question: 'Что такое MAREN и чем отличается от «просто бота»?',
    answer: 'MAREN — это связка Ассистент с памятью (P2) + пайплайны публикации (P3) + опции роста (P4), карточки eCom (P5), протоколы встреч (P6) и аудит-дорожная карта (P1). Бот — лишь интерфейс. У MAREN есть память, правила, расписания и отчётность, поэтому идея доходит до публикации и метрик без ручных касаний.'
  },
  {
    question: 'Что я получу в демо P2 (Ассистент)?',
    answer: 'Доступ в TG, мини-план, посты/тексты, 1 письмо, тезисы для видео, поиск с источниками из нескольких LLM. Опционально — письмо и слот через Gmail/Calendar. Публикаций нет (это P3).'
  },
  {
    question: 'Как работает «Zero-Touch» в P3 (Flow)? Это реально без людей?',
    answer: 'Да. По подготовленному контент-плану: форматы → UTM → публикации по расписанию в TG, VK, Meta* (Instagram/Threads/Facebook), Pinterest, OK, Telegra.ph, Дзен, YouTube, TikTok, WordPress. Логи/отчёты — в Sheets/Notion.'
  },
  {
    question: 'Какие площадки покрываете?',
    answer: 'Telegram, VK, Meta* (Instagram/Threads/Facebook), Pinterest, Одноклассники, Telegra.ph, Дзен, YouTube, TikTok, WordPress.'
  },
  {
    question: 'Что входит в P1 (Audit/Roadmap) и зачем он нужен?',
    answer: 'Аудит процессов/данных, рисков ИТ/ИБ и 152-ФЗ, дорожная карта 30–60–90 и расчёт ROI/экономии часов — решает, что купить из P2–P6 и как внедрить.'
  },
  {
    question: 'P4 (GrowthOps) — это «холодные» рассылки? Это законно?',
    answer: 'Только этичные касания в рамках правил площадок: масслайк/масскомментинг, тёплые DM/email по релевантным сегментам. Без спама. Лимиты и тексты согласуем.'
  },
  {
    question: 'P5 (Cards) — полностью автомат?',
    answer: 'Генерация автоматическая; утверждение — на вашей стороне. Публикацию и валидаторы не обещаем.'
  },
  {
    question: 'P6 (Minutes) — чем отличается от автозаписи звонка?',
    answer: 'Структурированный протокол, таймлайн, follow-up-письмо/сообщение, задачи и краткая аналитика в ≤ 2 минуты после созвона. Хранение в Docs/Sheets + поиск.'
  },
  {
    question: 'Данные и комплаенс в РФ (152-ФЗ): как храните?',
    answer: 'По умолчанию ПДн не собираем. Если оставили контакт — используем для связи/услуги. Храним в РФ или локально; доступ ограничен. Полная политика на странице.'
  },
  {
    question: 'Можно без передачи доступов к почте/календарю/соцсетям?',
    answer: 'Да. Тогда P2 отдаёт тексты/черновики, P3 — предпросмотры и логи. Публикации вручную. При OAuth-доступах всё идёт автоматически.'
  },
  {
    question: 'Кто владеет контентом?',
    answer: 'Вы. Все материалы, черновики, логи и исходники — ваши.'
  },
  {
    question: 'Сколько времени запускается?',
    answer: 'P2 — в день оплаты; P3 — 3–7 дней после онбординга; P1 — 7–10 дней; P6 — 1 день; P4/P5 — по согласованию.'
  },
  {
    question: 'Как оцениваете эффект?',
    answer: 'Экономия часов/день, % автопостинга, TTM, CTR, заявки/неделю — в Sheets/Looker/Notion.'
  },
  {
    question: 'Какие технологии используете?',
    answer: 'n8n/Make; LLM (OpenAI/Claude/Gemini); Perplexity; STT/TTS; API площадок; учёт — Sheets/Notion.'
  },
  {
    question: 'Что если площадка изменила правила/лимиты?',
    answer: 'Поддерживаем только «белые» сценарии. При изменениях обновляем пайплайн, корректируем частоты/форматы, сообщаем в отчёте.'
  },
  {
    question: 'Служба поддержки и отмена',
    answer: 'Поддержка в рабочие часы (TG/почта). Отмена — без штрафов с конца оплаченного периода.'
  }
];

export const FAQ = () => {
  const renderAnswer = (text: string) => {
    const parts = text.split('Meta*');
    if (parts.length === 1) return text;
    
    return (
      <>
        {parts[0]}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="underline decoration-dotted cursor-help">Meta*</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-xs">Meta Platforms Inc. — экстремистская организация, запрещена в РФ; WhatsApp не затронут. Реклама на ресурсах Meta в РФ запрещена. Упоминание — только в информационных целях; мы не аффилированы.</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        {parts[1]}
      </>
    );
  };

  return (
    <section id="faq" className="section-container">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            FAQ — ответы на частые вопросы
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-xl px-4 md:px-6 bg-card"
            >
              <AccordionTrigger className="text-left hover:no-underline py-4 md:py-6">
                <span className="font-semibold text-sm md:text-base lg:text-lg pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-muted-foreground pb-4 md:pb-6 leading-relaxed">
                {renderAnswer(faq.answer)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
