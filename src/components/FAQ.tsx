import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: 'Что такое «пайплайн» и чем он отличается от «бота»?',
    answer: 'Пайплайн — это связка шагов «идея → генерация → адаптация → публикация → отчёт». Бот — только интерфейс (выполнил команду и забыл). У нас ассистент с памятью + пайплайны, которые доводят идею до публикации и метрик.'
  },
  {
    question: 'STT и TTS — что это и зачем?',
    answer: 'STT (Speech-to-Text) — распознаёт вашу голосовую заметку в текст, чтобы ассистент мог сразу работать. TTS (Text-to-Speech) — озвучивает текст, если нужен ролик/озвучка. Обе технологии включаются по запросу.'
  },
  {
    question: 'Какие площадки поддерживает автопостинг?',
    answer: 'Telegram, VK, Meta (Instagram + Threads + Facebook), Pinterest, Одноклассники, Telegra.ph, Дзен, YouTube, TikTok. Плюс — блог на WordPress.'
  },
  {
    question: 'Как считаем эффект и KPI?',
    answer: 'Смотрим экономию времени (часы/день), % автопостинга, CTR, заявки/неделю, время до контакта. Выводим в дашборд (Sheets/Notion/Looker Studio).'
  },
  {
    question: 'Насколько это «белые» методы роста?',
    answer: 'GrowthOps работает в рамках правил площадок. Никаких агрессивных рассылок и спама. Лимиты и сегменты согласуем заранее.'
  },
  {
    question: 'Храните ли вы персональные данные?',
    answer: 'По умолчанию — нет. Если вы добровольно оставляете контакт для связи/демо, используем только для ответа и оказания услуги. Храним на территории РФ с ограниченным доступом. Подробно — в «Политике обработки данных» ниже.'
  }
];

export const FAQ = () => {
  return (
    <section id="faq" className="section-container">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-base md:text-xl text-muted-foreground">
            Ответы на популярные вопросы о MAREN
          </p>
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
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
