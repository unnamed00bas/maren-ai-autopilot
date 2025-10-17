import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { Button } from './ui/button';

const products = [
  {
    id: 'P1',
    icon: '/assets/icons/audit.svg',
    title: 'MAREN Audit',
    subtitle: 'аудит и дорожная карта за 10 дней',
    description: 'Понять, что именно купить/внедрить из MAREN (P2–P5), где сэкономим часы и как сделать это безопасно по 152-ФЗ.',
    effect: '• Чёткий понимание что внедрить из P2–P5 и сколько времени сэкономим.\n• Дорожная карта 30–60–90 с приоритетами «сейчас / дальше».\n• Матрица рисков ИТ/ИБ + рекомендации по 152-ФЗ (ПДн, хранение в РФ, политика/оферта).\n• ROI-оценка: часы → деньги, % автопостинга, TTM, CTR/заявки.',
    demoPrice: 'Консультация / 2000 ₽',
    demo: 'Диагностика 30 мин (видео zoom) → выдаю мини-резюме: 3 быстрые победы, 1 риск, 1 пример пайплайна.',
    demoAction: { label: 'Записаться на Демо консультацию за 2000 р', url: 'https://t.me/promaren_support_bot' },
    stack: ['Документы: Notion / Google Docs & Sheets', 'Комплаенс: чек-лист 152-ФЗ (ПДн, хранение в РФ, минимизация, сроки, удаление), базовые ИБ-контроли, политика/оферта'],
  },
  {
    id: 'P2',
    icon: '/assets/icons/assistant.svg',
    title: 'MAREN Assistant',
    subtitle: 'личный креатор с памятью',
    description: 'Понимает контекст, ищет материалы, конспектирует, генерит планы/тексты/сценарии, пишет письма в Gmail, ставит слоты в Calendar, ведёт переписку «как человек» (история и память). STT/TTS для видео.',
    effect: 'Минус 2–4 часа рутины/день; скорость креатива ↑, ошибок от забывчивости ↓.',
    demoPrice: 'Ассистент на 24 часа / 999 ₽',
    demo: 'Что вы получаете?\n• Ассистент с памятью (общается как человек), работает в Telegram.\n• Мультимодально: текст, голос (STT), изображения/видео (TTS), ссылки.\n• Контент под вас: мини-план на несколько дней, посты, статьи, официальные письма, тезисы для видео, хэштеги и др.\n• Поиск с проверкой фактов: агрегируем ответы из нескольких LLM + источники/ссылки.\n• (опционально) доступ к Gmail и Google Calendar через OAuth — чтобы ассистент сам отправил письмо и поставил встречу\n• Без автопубликации (это P3 Flow). Здесь — генерация и подготовка.',
    demoAction: { label: 'Заказать Демо Ассистента на 24 ч за 999 р', url: 'https://t.me/promaren_support_bot' },
    stack: ['LLM (OpenAI/Claude/Gemini)', 'Perplexity', 'Gmail/Calendar/Drive', 'Notion', 'STT/TTS', 'n8n/Make', 'Telegram Bot API'],
  },
  {
    id: 'P3',
    icon: '/assets/icons/flow.svg',
    title: 'MAREN Flow',
    subtitle: 'пайплайны генерации и автопостинга',
    description: 'По подготовленному контент-плану сам собирает форматы (карусель/пост/обложка/шорт с TTS), ставит UTM и публикует по расписанию в TG, VK, Meta* (Instagram/Threads/Facebook), Pinterest, OK, Telegra.ph, Дзен, YouTube, TikTok, WordPress. Ведёт логи и отчёт в Sheets/Notion. + полностью автоматизированный SEO Блог под ключ',
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
    id: 'P4',
    icon: '/assets/icons/growthops.svg',
    title: 'MAREN GrowthOps',
    subtitle: 'этичный рост из «холода»',
    description: 'Масслайкинг, масскомментинг, тёплые DM и email-рассылки на релевантные сегменты. Скрипты касаний, трекинг ответов, передача лидов в диалоги/слоты.',
    effect: 'Рост аудитории и входящих без агрессии; первые касания превращаются в запросы.',
    note: 'Работаем в рамках правил площадок. Скорости и лимиты согласовываем индивидуально.',
    stack: ['Telegram/VK/Email', 'n8n/Make', 'CRM/таблицы'],
    inDevelopment: true,
  },
  {
    id: 'P5',
    icon: '/assets/icons/cards.svg',
    title: 'MAREN Cards',
    subtitle: 'eCom-контент для карточек',
    description: 'Генерит описание товара, 3 варианта заголовков/блоков, обложку/галерею под маркетплейс. Проверка/утверждение — на стороне клиента (полуручно).',
    effect: 'Быстрее заполняете карточки, получаете консистентные тексты в тоне бренда.',
    stack: ['LLM + шаблоны', 'Notion/Sheets', 'Облачные редакторы'],
    inDevelopment: true,
  },
  {
    id: 'P6',
    icon: '/assets/icons/minutes.svg',
    title: 'MAREN Minutes',
    subtitle: 'авто-протоколы и follow-up после созвонов',
    description: 'Автоматизация протоколов встреч, создание чек-листов задач и follow-up коммуникаций после видеозвонков.',
    effect: '• −30–60 мин на конспект каждой встречи.\n• Итоги «5–7 буллетов» и таймлайн через ≤2 мин после звонка.\n• Авто-follow-up: письмо/ТГ-сообщение + задачи и напоминания.\n• Лёгкая аналитика: соблюдение скрипта, возражения, следующий шаг.\n• Архив встреч с поиском по содержимому.',
    demoPrice: 'Пилот «1 встреча» / 499 ₽',
    demo: 'Подключаем Zoom → после звонка в Telegram прилетают: протокол, чек-лист задач, черновик письма клиенту и краткий скоринг звонка.',
    demoAction: { label: 'Заказать видео-встречу за 499 р', url: 'https://t.me/promaren_support_bot' },
    stack: ['n8n', 'Zoom', 'LLM + поиск: OpenAI / Claude / Gemini + Perplexity', 'Telegram Bot API', 'Google Docs/Sheets'],
    inDevelopment: true,
    pilotBadge: true,
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

  const renderEffect = (text: string) => {
    // Check if text contains bullet points
    if (text.includes('•')) {
      const items = text.split('\n').filter(item => item.trim());
      return (
        <ul className="space-y-2">
          {items.map((item, idx) => (
            <li key={idx} className="text-sm text-muted-foreground">
              {item}
            </li>
          ))}
        </ul>
      );
    }
    return <p className="text-sm text-muted-foreground whitespace-pre-line">{text}</p>;
  };

  const renderDemo = (text: string) => {
    // Check if text contains bullet points
    if (text.includes('•')) {
      const items = text.split('\n').filter(item => item.trim());
      return (
        <ul className="space-y-2">
          {items.map((item, idx) => (
            <li key={idx} className="text-sm text-muted-foreground">
              {item}
            </li>
          ))}
        </ul>
      );
    }
    return <p className="text-sm text-muted-foreground whitespace-pre-line">{text}</p>;
  };

  return (
    <section id="products" className="section-container bg-muted/30">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Продукты <span className="text-accent">P1–P6</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
            От ассистента с памятью до полной автоматизации контент-производства
          </p>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
        {products.map((product) => {
          return (
            <div key={product.id} className={`card-product group ${product.inDevelopment ? 'relative overflow-hidden bg-muted/50' : ''}`}>
              {product.inDevelopment && (
                <div className="absolute top-0 right-0 bg-gradient-to-br from-accent/20 to-accent/5 px-2 md:px-3 py-1 md:py-1.5 rounded-bl-lg border-l border-b border-accent/30">
                  <div className="flex items-center gap-1.5 md:gap-2">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-accent rounded-full animate-pulse" />
                    <span className="text-[10px] md:text-xs font-bold text-accent uppercase tracking-wide">
                      {product.pilotBadge ? 'Идет пилот' : 'В разработке'}
                    </span>
                  </div>
                </div>
              )}
              <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="p-2 md:p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors flex-shrink-0">
                  <img src={product.icon} alt={product.title} className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs md:text-sm font-bold text-accent mb-0.5 md:mb-1">{product.id}</div>
                  <h3 className="text-lg md:text-xl font-bold mb-0.5 md:mb-1">{product.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{product.subtitle}</p>
                </div>
              </div>

              <p className="text-sm leading-relaxed mb-4">{renderDescription(product.description)}</p>

              <div className="space-y-3 pt-4 border-t border-border/50">
                <div>
                  <div className="text-xs font-semibold text-accent mb-1">ЭФФЕКТ:</div>
                  {renderEffect(product.effect)}
                </div>

                {product.demo && (
                  <div>
                    <div className="text-xs font-semibold text-accent mb-1">ДЕМО:</div>
                    {product.demoPrice && (
                      <p className="text-base font-bold text-accent mb-2">{product.demoPrice}</p>
                    )}
                    {renderDemo(product.demo)}
                    {product.demoAction && (
                      <Button 
                        asChild 
                        className="mt-3 w-full bg-accent text-accent-foreground hover:bg-accent/90 hover:border-accent"
                        variant="outline"
                      >
                        <a 
                          href={product.demoAction.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          {product.demoAction.label}
                        </a>
                      </Button>
                    )}
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
