import { Tag } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

const pricingData = [
  {
    id: 'P1',
    title: 'MAREN Audit',
    description: 'дорожная карта 30–60–90, что внедрять и сколько времени вернёт.',
    price: '25 000 ₽',
    type: 'one-time'
  },
  {
    id: 'P2',
    title: 'MAREN Assistant',
    description: 'личный креатор контента (фото/видео) с памятью, минус 2–4 часа рутины в день.',
    price: '40 000 ₽',
    note: 'опционально: подписка за 10 000 ₽/мес.',
    type: 'one-time'
  },
  {
    id: 'P3',
    title: 'MAREN Flow',
    description: 'управляемый автопостинг через Assistant (Р2): генерит форматы, ставит UTM и публикует в соцсеть, которая будет задана.',
    price: '30 000 ₽ / мес.',
    type: 'subscription',
    inDevelopment: true,
    pilotBadge: true
  },
  {
    id: 'P4',
    title: 'MAREN GrowthOps',
    description: 'полностью автоматизированный SEO Блог под ключ с автопостингом в канал Дзен и репост в соцсети (Telegram, VK, Meta* Instagram/Threads/Facebook, Pinterest, OK, Telegra.ph, Linkedin, YouTube, TikTok и др.).',
    price: 'от 100 000 ₽',
    note: 'стоимость указана за работы под ключ в базе: SEO-блог-Дзен-Telegram. Подключение дополнительных соцсетей — +5 000 ₽ за каждую. Опционально: workflow support за 5 000 ₽/мес после реализации.',
    type: 'one-time'
  },
  {
    id: 'P5',
    title: 'MAREN Cards',
    description: 'eCom-описания, заголовки и обложки для карточек.',
    price: 'лист ожидания',
    type: 'waitlist',
    inDevelopment: true
  },
  {
    id: 'P6',
    title: 'MAREN Minutes',
    description: 'авто-протоколы встреч zoom/google meet.',
    price: '2 000 ₽ / мес.',
    type: 'subscription',
    inDevelopment: true,
    pilotBadge: true
  }
];

export const Pricing = () => {
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
    <section id="pricing" className="section-padding">
      <div className="section-container">
        <div className="bg-muted/30 rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Цены
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Выберите подходящее решение для вашего бизнеса
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {pricingData.map((item) => (
                <div key={item.id} className={`card-product flex flex-col ${item.inDevelopment && !item.pilotBadge ? 'relative overflow-hidden bg-muted/50' : item.pilotBadge ? 'relative overflow-hidden bg-cyan/5' : ''}`}>
                  {item.inDevelopment && (
                    <div className={`absolute top-0 right-0 px-2 md:px-3 py-1 md:py-1.5 rounded-bl-lg border-l border-b ${
                      item.pilotBadge 
                        ? 'bg-gradient-to-br from-cyan/20 to-cyan/5 border-cyan/30' 
                        : 'bg-gradient-to-br from-accent/20 to-accent/5 border-accent/30'
                    }`}>
                      <div className="flex items-center gap-1.5 md:gap-2">
                        <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full animate-pulse ${item.pilotBadge ? 'bg-cyan' : 'bg-accent'}`} />
                        <span className={`text-[10px] md:text-xs font-bold uppercase tracking-wide ${item.pilotBadge ? 'text-cyan' : 'text-accent'}`}>
                          {item.pilotBadge ? 'Идет пилот' : 'В разработке'}
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="mb-4">
                    <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-lg text-sm font-semibold mb-3">
                      {item.id}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      {renderDescription(item.description)}
                    </p>
                  </div>

                  {item.note && (
                    <div className="mb-4 p-3 bg-muted/50 rounded-lg border border-border">
                      <p className="text-xs md:text-sm text-muted-foreground">
                        {item.note}
                      </p>
                    </div>
                  )}

                  <div className="mt-auto pt-4 border-t border-border">
                    <div className={`text-lg md:text-xl font-bold ${
                      item.type === 'waitlist' || item.type === 'custom' 
                        ? 'text-muted-foreground' 
                        : 'text-accent'
                    }`}>
                      {item.price}
                    </div>
                    {item.type === 'subscription' && (
                      <div className="text-xs md:text-sm text-muted-foreground mt-1">
                        подписка
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
