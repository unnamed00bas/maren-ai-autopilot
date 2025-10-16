import { Bot, Workflow, TrendingUp, Package, Gauge } from 'lucide-react';

const products = [
  {
    id: 'P1',
    icon: Bot,
    title: 'MAREN Assistant',
    subtitle: 'личный креатор с памятью',
    description: 'Понимает контекст, ищет материалы, конспектирует, генерит планы/тексты/сценарии, пишет письма в Gmail, ставит слоты в Calendar, ведёт переписку «как человек» (история и память). STT/TTS для видео.',
    effect: 'Минус 2–4 часа рутины/день; скорость креатива ↑, ошибок от забывчивости ↓.',
    demo: 'По запросу — 24 ч / 999 ₽ через бота.',
    stack: ['LLM (OpenAI/Claude/Gemini)', 'Perplexity', 'Notion', 'Gmail/Calendar', 'STT/TTS', 'Telegram Bot'],
  },
  {
    id: 'P2',
    icon: Workflow,
    title: 'MAREN Flow',
    subtitle: 'пайплайны генерации и автопостинга',
    description: 'Из одной идеи собирает: карусель, обложку, видео/шорт; ставит UTM, публикует по расписанию в Telegram, VK, Meta (Instagram + Threads + Facebook), Pinterest, ОК, Telegra.ph, Дзен, YouTube, TikTok. Ведёт логи и отчёты.',
    effect: '70–90% публикаций без ручного труда; стабильный график, рост охватов.',
    stack: ['n8n/Make', 'Telegram/VK/Meta API', 'YouTube/TikTok API', 'Notion/Sheets', 'LLM адаптация'],
  },
  {
    id: 'P3',
    icon: TrendingUp,
    title: 'MAREN GrowthOps',
    subtitle: 'этичный рост из «холода»',
    description: 'Масслайкинг, масскомментинг, тёплые DM и email-рассылки на релевантные сегменты. Скрипты касаний, трекинг ответов, передача лидов в диалоги/слоты.',
    effect: 'Рост аудитории и входящих без агрессии; первые касания превращаются в запросы.',
    note: 'Работаем в рамках правил площадок. Скорости и лимиты согласовываем индивидуально.',
    stack: ['Telegram/VK/Email', 'n8n/Make', 'CRM/таблицы'],
  },
  {
    id: 'P4',
    icon: Package,
    title: 'MAREN Cards',
    subtitle: 'eCom-контент для карточек',
    description: 'Генерит описание товара, 3 варианта заголовков/блоков, обложку/галерею под маркетплейс. Проверка/утверждение — на стороне клиента (полуручно).',
    effect: 'Быстрее заполняете карточки, получаете консистентные тексты в тоне бренда.',
    stack: ['LLM + шаблоны', 'Notion/Sheets', 'Облачные редакторы'],
  },
  {
    id: 'P5',
    icon: Gauge,
    title: 'MAREN Audit',
    subtitle: '7-дневный спринт + план 30–60–90',
    description: 'За 7 дней: подключаем ассистента, собираем один-два ключевых пайплайна, настраиваем отчётность. План 30–60–90: эскалация — новые форматы, каналы, автоматизация откликов.',
    effect: 'Быстрый запуск и понятная дорожная карта без «чёрных ящиков».',
    stack: ['Комплексная настройка', 'Дашборды', 'Документация'],
  },
];

export const Products = () => {
  return (
    <section id="products" className="section-container bg-muted/30">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">
          Продукты <span className="text-accent">P1–P5</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          От ассистента с памятью до полной автоматизации контент-производства
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {products.map((product) => {
          const Icon = product.icon;
          return (
            <div key={product.id} className="card-product group">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold text-accent mb-1">{product.id}</div>
                  <h3 className="text-xl font-bold mb-1">{product.title}</h3>
                  <p className="text-sm text-muted-foreground">{product.subtitle}</p>
                </div>
              </div>

              <p className="text-sm leading-relaxed mb-4">{product.description}</p>

              <div className="space-y-3 pt-4 border-t border-border/50">
                <div>
                  <div className="text-xs font-semibold text-accent mb-1">ЭФФЕКТ:</div>
                  <p className="text-sm text-muted-foreground">{product.effect}</p>
                </div>

                {product.demo && (
                  <div>
                    <div className="text-xs font-semibold text-accent mb-1">ДЕМО:</div>
                    <p className="text-sm text-muted-foreground">{product.demo}</p>
                  </div>
                )}

                {product.note && (
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-xs text-muted-foreground italic">{product.note}</p>
                  </div>
                )}

                <div>
                  <div className="text-xs font-semibold text-muted-foreground mb-2">СТЕК:</div>
                  <div className="flex flex-wrap gap-1">
                    {product.stack.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
