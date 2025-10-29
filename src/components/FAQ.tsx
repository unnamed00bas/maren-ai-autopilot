import React, { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

type FAQItem = { question: string; answer: string };
type FAQSection = { id: string; title: string; items: FAQItem[] };

const faqSections: FAQSection[] = [
  {
    id: 'general',
    title: 'Общие вопросы',
    items: [
      {
        question: 'Что такое MAREN и чем отличается от «просто бота»?',
        answer:
          'MAREN — это связка Ассистент с памятью (P2) + пайплайны публикации (P3) + опции роста (P4), карточки eCom (P5), протоколы встреч (P6) и аудит-дорожная карта (P1). Бот — лишь интерфейс. У MAREN есть память, правила, расписания и отчётность, поэтому идея доходит до публикации и метрик без ручных касаний.',
      },
      {
        question: 'Кто владеет контентом?',
        answer: 'Вы. Все материалы, черновики, логи и исходники — ваши.',
      },
      {
        question: 'Сколько времени запускается?',
        answer:
          'P2 — в день оплаты; P3 — 3–7 дней после онбординга; P1 — 7–10 дней; P6 — 1 день; P4/P5 — по согласованию.',
      },
      {
        question: 'Как оцениваете эффект?',
        answer:
          'Экономия часов/день, % автопостинга, TTM, CTR, заявки/неделю — в Sheets/Looker/Notion.',
      },
      {
        question: 'Какие технологии используете?',
        answer:
          'n8n/Make; LLM (OpenAI/Claude/Gemini); Perplexity; STT/TTS; API площадок; учёт — Sheets/Notion.',
      },
    ],
  },
  {
    id: 'products',
    title: 'Продукты и функциональность',
    items: [
      {
        question: 'Что я получу в демо P2 (Ассистент)?',
        answer:
          'Доступ в TG, мини-план, посты/тексты, 1 письмо, тезисы для видео, поиск с источниками из нескольких LLM. Опционально — письмо и слот через Gmail/Calendar. Публикаций нет (это P3).',
      },
      {
        question: 'Как работает «Zero-Touch» в P3 (Flow)? Это реально без людей?',
        answer:
          'Да. По подготовленному контент-плану: форматы → UTM → публикации по расписанию в TG, VK, Meta* (Instagram/Threads/Facebook), Pinterest, OK, Telegra.ph, Дзен, YouTube, TikTok, WordPress. Логи/отчёты — в Sheets/Notion.',
      },
      {
        question: 'P4 (GrowthOps) — это «холодные» рассылки? Это законно?',
        answer:
          'Только этичные касания в рамках правил площадок: масслайк/масскомментинг, тёплые DM/email по релевантным сегментам. Без спама. Лимиты и тексты согласуем.',
      },
      {
        question: 'P5 (Cards) — полностью автомат?',
        answer:
          'Генерация автоматическая; утверждение — на вашей стороне. Публикацию и валидаторы не обещаем.',
      },
      {
        question: 'P6 (Minutes) — чем отличается от автозаписи звонка?',
        answer:
          'Структурированный протокол, таймлайн, follow-up-письмо/сообщение, задачи и краткая аналитика в ≤ 2 минуты после созвона. Хранение в Docs/Sheets + поиск.',
      },
      {
        question: 'Что входит в P1 (Audit/Roadmap) и зачем он нужен?',
        answer:
          'Аудит процессов/данных, рисков ИТ/ИБ и 152-ФЗ, дорожная карта 30–60–90 и расчёт ROI/экономии часов — решает, что купить из P2–P6 и как внедрить.',
      },
    ],
  },
  {
    id: 'platforms',
    title: 'Площадки и комплаенс',
    items: [
      {
        question: 'Какие площадки покрываете?',
        answer:
          'Telegram, VK, Meta* (Instagram/Threads/Facebook), Pinterest, Одноклассники, Telegra.ph, Дзен, YouTube, TikTok, WordPress.',
      },
      {
        question: 'Данные и комплаенс в РФ (152-ФЗ): как храните?',
        answer:
          'По умолчанию ПДн не собираем. Если оставили контакт — используем для связи/услуги. Храним в РФ или локально; доступ ограничен. Полная политика на странице.',
      },
      {
        question: 'Что если площадка изменила правила/лимиты?',
        answer:
          'Поддерживаем только «белые» сценарии. При изменениях обновляем пайплайн, корректируем частоты/форматы, сообщаем в отчёте.',
      },
      {
        question: 'Можно без передачи доступов к почте/календарю/соцсетям?',
        answer:
          'Да. Тогда P2 отдаёт тексты/черновики, P3 — предпросмотры и логи. Публикации вручную. При OAuth-доступах всё идёт автоматически.',
      },
    ],
  },
  {
    id: 'support',
    title: 'Поддержка и условия',
    items: [
      {
        question: 'Служба поддержки и отмена',
        answer:
          'Поддержка в рабочие часы (TG/почта). Отмена — без штрафов с конца оплаченного периода.',
      },
    ],
  },
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

  // Active filter state (section tabs)
  const [activeSectionId, setActiveSectionId] = useState<string>(faqSections[0]?.id ?? "");
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const el = tabRefs.current[activeSectionId];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }, [activeSectionId]);

  return (
    <section id="faq" className="section-container">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3">
            FAQ — ответы на частые вопросы
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">Собрали по темам для удобной навигации</p>
        </div>

        {/* Быстрая навигация по разделам (фильтры) */}
        <nav aria-label="Навигация по разделам FAQ" className="mb-8">
          <ul className="flex gap-2 md:gap-3 overflow-x-auto no-scrollbar py-1" role="tablist">
            {faqSections.map((section) => {
              const isActive = section.id === activeSectionId;
              return (
                <li key={section.id} className="shrink-0">
                  <button
                    ref={(el) => (tabRefs.current[section.id] = el)}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`panel-${section.id}`}
                    onClick={() => setActiveSectionId(section.id)}
                    className={
                      `inline-flex items-center rounded-full border px-3 py-1.5 text-xs md:text-sm transition-all focus-visible:outline-none focus-visible:ring-2 ` +
                      (isActive
                        ? `bg-accent text-accent-foreground border-transparent shadow-sm ring-[hsl(var(--ring))]`
                        : `bg-card text-foreground/80 border-border hover:bg-accent hover:text-accent-foreground ring-transparent`)
                    }
                  >
                    {section.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="space-y-8 md:space-y-10">
          {(() => {
            const section = faqSections.find((s) => s.id === activeSectionId) ?? faqSections[0];
            if (!section) return null;
            return (
              <section id={`faq-${section.id}`} aria-labelledby={`tab-${section.id}`} role="tabpanel" aria-live="polite" className="scroll-mt-24" >
                <header className="mb-3 md:mb-4">
                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                    {section.title}
                  </h3>
                </header>
              <Accordion type="multiple" className="space-y-3 md:space-y-4">
                  {section.items.map((faq, index) => (
                    <AccordionItem
                      key={`${section.id}-${index}`}
                      value={`${section.id}-item-${index}`}
                    className="group border border-border/60 rounded-2xl px-4 md:px-6 bg-card/70 supports-[backdrop-filter]:backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-[1px]"
                    >
                    <AccordionTrigger className="relative text-left hover:no-underline py-4 md:py-5 rounded-xl transition-colors data-[state=open]:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background before:absolute before:left-0 before:top-2 before:bottom-2 before:w-1 before:rounded-full before:bg-transparent data-[state=open]:before:bg-[hsl(var(--accent))]">
                      <span className="font-semibold text-sm md:text-base lg:text-lg pr-4 leading-snug text-foreground/90">
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                    <AccordionContent className="text-sm md:text-base text-muted-foreground pb-4 md:pb-5 leading-relaxed transition-all duration-300">
                        {renderAnswer(faq.answer)}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            );
          })()}
        </div>
      </div>
    </section>
  );
};
