import { Tag } from 'lucide-react';

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
    price: '10 000 ₽ / мес.',
    type: 'subscription'
  },
  {
    id: 'P3',
    title: 'MAREN Flow',
    description: '100% авто: по плану генерит форматы, ставит UTM и публикует сам + SEO Блог под ключ.',
    price: '100 000 ₽',
    note: 'опционально — современный ai-лэндинг — 30 000 ₽',
    type: 'one-time'
  },
  {
    id: 'P4',
    title: 'MAREN GrowthOps',
    description: 'этичный «холод»: масслайк/коммент, рост охватов.',
    price: 'лист ожидания',
    type: 'waitlist',
    inDevelopment: true
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
    description: 'авто-протоколы ВКС',
    price: '5 000 ₽ / мес.',
    type: 'subscription',
    inDevelopment: true,
    pilotBadge: true
  }
];

export const Pricing = () => {
  return (
    <section className="section-container bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent/10 mb-4 md:mb-6">
            <Tag className="w-6 h-6 md:w-8 md:h-8 text-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Цены
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите подходящее решение для вашего бизнеса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pricingData.map((item) => (
            <div key={item.id} className={`card-product flex flex-col ${item.inDevelopment ? 'relative overflow-hidden bg-muted/50' : ''}`}>
              {item.inDevelopment && (
                <div className="absolute top-0 right-0 bg-gradient-to-br from-accent/20 to-accent/5 px-2 md:px-3 py-1 md:py-1.5 rounded-bl-lg border-l border-b border-accent/30">
                  <div className="flex items-center gap-1.5 md:gap-2">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-accent rounded-full animate-pulse" />
                    <span className="text-[10px] md:text-xs font-bold text-accent uppercase tracking-wide">
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
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {item.description}
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
                <div className={`text-2xl md:text-3xl font-bold ${
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
    </section>
  );
};
