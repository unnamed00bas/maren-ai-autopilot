import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

const products = [
  {
    id: 'P1',
    icon: '/assets/icons/assistant.svg',
    title: 'MAREN Assistant',
    subtitle: 'личный креатор с памятью',
    description: 'Понимает контекст, ищет материалы, конспектирует, генерит планы/тексты/сценарии, пишет письма в Gmail, ставит слоты в Calendar, ведёт переписку «как человек» (история и память). STT/TTS для видео.',
    effect: 'Минус 2–4 часа рутины/день; скорость креатива ↑, ошибок от забывчивости ↓.',
    demo: 'По запросу — 24 ч / 999 ₽ через бота.',
    stack: ['LLM (OpenAI/Claude/Gemini)', 'Perplexity', 'Gmail/Calendar/Drive', 'Notion', 'STT/TTS', 'n8n/Make', 'Telegram Bot API'],
  },
  {
    id: 'P2',
    icon: '/assets/icons/flow.svg',
    title: 'MAREN Flow',
    subtitle: 'пайплайны генерации и автопостинга',
    description: 'По подготовленному контент-плану сам собирает форматы (карусель/пост/обложка/шорт с TTS), ставит UTM и публикует по расписанию в TG, VK, Meta* (Instagram/Threads/Facebook), Pinterest, OK, Telegra.ph, Дзен, YouTube, TikTok, WordPress. Ведёт логи и отчёт в Sheets/Notion.',
    effect: 'Ежедневные выходы без касаний, стабильная сетка, прозрачные ссылки-отчёты.',
    demos: [
      {
        category: 'Видео контент',
        links: [
          { text: 'рекламный ролик VK', url: 'https://vk.com/wall-232352420_9' },
          { text: 'аватар Дзен', url: 'https://dzen.ru/shorts/68dbccc99f3b6c54d7e8480e?share_to=link' },
        ],
      },
      {
        category: 'Текстовой контент',
        links: [
          { text: 'лонгрид', url: 'https://dzen.ru/a/aPIAxiSR60Svf9hS' },
          { text: 'Telegra.ph', url: 'https://telegra.ph/Gipsovyj-podnos-master-klass-po-osennej-rezbe-09-25' },
          { text: 'LinkedIn-статья', url: 'https://www.linkedin.com/posts/marinapogodina_ai-digitaltrust-audit-activity-7383786246701076480-ZY2k?utm_source=share&utm_medium=member_desktop&rcm=ACoAABvY4jMBmJCqQ_rwViRCLTr8z5-1I5zNtM8' },
          { text: 'Pinterest-пин', url: 'https://pin.it/4EjQ0CHbz' },
        ],
      },
      {
        category: 'Блог',
        links: [
          { text: 'полностью автоматизированный блог на WordPress', url: 'https://blog.ecogift.site/' },
        ],
      },
    ],
    stack: ['n8n/Make', 'LLM (OpenAI/Claude/Gemini)', 'Perplexity', 'STT/TTS', 'API площадок', 'Sheets/Notion'],
  },
  {
    id: 'P3',
    icon: '/assets/icons/growthops.svg',
    title: 'MAREN GrowthOps',
    subtitle: 'этичный рост из «холода»',
    description: 'Масслайкинг, масскомментинг, тёплые DM и email-рассылки на релевантные сегменты. Скрипты касаний, трекинг ответов, передача лидов в диалоги/слоты.',
    effect: 'Рост аудитории и входящих без агрессии; первые касания превращаются в запросы.',
    note: 'Работаем в рамках правил площадок. Скорости и лимиты согласовываем индивидуально.',
    stack: ['Telegram/VK/Email', 'n8n/Make', 'CRM/таблицы'],
  },
  {
    id: 'P4',
    icon: '/assets/icons/cards.svg',
    title: 'MAREN Cards',
    subtitle: 'eCom-контент для карточек',
    description: 'Генерит описание товара, 3 варианта заголовков/блоков, обложку/галерею под маркетплейс. Проверка/утверждение — на стороне клиента (полуручно).',
    effect: 'Быстрее заполняете карточки, получаете консистентные тексты в тоне бренда.',
    stack: ['LLM + шаблоны', 'Notion/Sheets', 'Облачные редакторы'],
  },
  {
    id: 'P5',
    icon: '/assets/icons/audit.svg',
    title: 'MAREN Audit',
    subtitle: '7-дневный спринт + план 30–60–90',
    description: 'За 7 дней: подключаем ассистента, собираем один-два ключевых пайплайна, настраиваем отчётность. План 30–60–90: эскалация — новые форматы, каналы, автоматизация откликов.',
    effect: 'Быстрый запуск и понятная дорожная карта без «чёрных ящиков».',
    stack: ['Комплексная настройка', 'Дашборды', 'Документация'],
  },
];

export const Products = () => {
  const renderDescription = (text: string) => {
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
          return (
            <div key={product.id} className="card-product group">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                  <img src={product.icon} alt={product.title} className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold text-accent mb-1">{product.id}</div>
                  <h3 className="text-xl font-bold mb-1">{product.title}</h3>
                  <p className="text-sm text-muted-foreground">{product.subtitle}</p>
                </div>
              </div>

              <p className="text-sm leading-relaxed mb-4">{renderDescription(product.description)}</p>

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

                {product.demos && (
                  <div>
                    <div className="text-xs font-semibold text-accent mb-2">ДЕМО-ПРИМЕРЫ (автопостинг):</div>
                    <div className="space-y-2">
                      {product.demos.map((demo, idx) => (
                        <div key={idx}>
                          <div className="text-xs font-semibold text-muted-foreground mb-1">{demo.category}:</div>
                          <ul className="space-y-1 ml-2">
                            {demo.links.map((link, linkIdx) => (
                              <li key={linkIdx}>
                                <a 
                                  href={link.url} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-xs font-bold text-cyan underline decoration-2 hover:text-accent transition-colors"
                                >
                                  — {link.text} (ссылка ↗)
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
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
