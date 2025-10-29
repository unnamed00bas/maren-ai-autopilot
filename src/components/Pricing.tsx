import { useState } from 'react';
import { PricingCard } from './PricingCard';
import { ROICalculator } from './ROICalculator';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Calculator, TrendingUp, Star } from 'lucide-react';
 

const pricingData = [
  {
    id: 'P1',
    title: 'MAREN Audit',
    description: 'дорожная карта 30–60–90, что внедрять и сколько времени вернёт.',
    price: '25 000 ₽',
    type: 'one-time',
    features: [
      'Аудит процессов и данных',
      'Анализ рисков ИТ/ИБ и 152-ФЗ',
      'Дорожная карта 30–60–90',
      'Расчёт ROI и экономии часов',
      'Чек-лист комплаенса'
    ],
    benefits: [
      'Чёткое понимание что внедрить',
      'Приоритизация задач',
      'Минимизация рисков',
      'Прозрачный ROI'
    ]
  },
  {
    id: 'P2',
    title: 'MAREN Assistant',
    description: 'личный креатор контента (фото/видео) с памятью, минус 2–4 часа рутины в день.',
    price: '40 000 ₽',
    note: 'опционально: подписка за 10 000 ₽/мес.',
    type: 'one-time',
    features: [
      'Ассистент с памятью в Telegram',
      'Мультимодальная работа (текст, голос, изображения)',
      'Генерация контента под ваш стиль',
      'Поиск с проверкой фактов',
      'Интеграция с Gmail и Calendar'
    ],
    benefits: [
      'Экономия 2–4 часа в день',
      'Контент в вашем стиле',
      'Быстрые ответы (≤10 сек)',
      'Работает 24/7'
    ]
  },
  {
    id: 'P3',
    title: 'MAREN Flow',
    description: 'управляемый автопостинг через Assistant (Р2): генерит форматы, ставит UTM и публикует в соцсеть, которая будет задана.',
    price: '30 000 ₽ / мес.',
    type: 'subscription',
    inDevelopment: true,
    pilotBadge: true,
    features: [
      'Автопостинг в 10+ соцсетей',
      'Генерация форматов контента',
      'Автоматические UTM-метки',
      'Отчёты и аналитика',
      'Расписание публикаций'
    ],
    benefits: [
      'Zero-Touch публикации',
      'Стабильная сетка контента',
      'Прозрачные отчёты',
      'Экономия времени команды'
    ]
  },
  {
    id: 'P4',
    title: 'MAREN GrowthOps',
    description: 'полностью автоматизированный SEO Блог под ключ с автопостингом в канал Дзен и репост в соцсети (Telegram, VK, Meta* Instagram/Threads/Facebook, Pinterest, OK, Telegra.ph, Linkedin, YouTube, TikTok и др.).',
    price: 'от 100 000 ₽',
    note: 'стоимость указана за работы под ключ в базе: SEO-блог-Дзен-Telegram. Подключение дополнительных соцсетей — +5 000 ₽ за каждую. Опционально: workflow support за 5 000 ₽/мес после реализации.',
    type: 'one-time',
    features: [
      'SEO-блог на WordPress',
      'Автопостинг в Дзен',
      'Репост в соцсети',
      'SEO-оптимизация',
      'Аналитика и отчёты'
    ],
    benefits: [
      'Рост органического трафика',
      'Автоматизация контент-маркетинга',
      'Масштабируемость',
      'Этичный рост аудитории'
    ]
  },
  {
    id: 'P5',
    title: 'MAREN Cards',
    description: 'eCom-описания, заголовки и обложки для карточек.',
    price: 'лист ожидания',
    type: 'waitlist',
    inDevelopment: true,
    features: [
      'Генерация описаний товаров',
      '3 варианта заголовков',
      'Создание обложек',
      'Проверка и утверждение',
      'Консистентный стиль'
    ],
    benefits: [
      'Быстрое заполнение карточек',
      'Единый стиль бренда',
      'Экономия времени',
      'Повышение конверсии'
    ]
  },
  {
    id: 'P6',
    title: 'MAREN Minutes',
    description: 'авто-протоколы встреч zoom/google meet.',
    price: '2 000 ₽ / мес.',
    type: 'subscription',
    inDevelopment: true,
    pilotBadge: true,
    features: [
      'Автоматические протоколы',
      'Структурированные итоги',
      'Follow-up письма',
      'Чек-листы задач',
      'Аналитика встреч'
    ],
    benefits: [
      'Экономия 30–60 мин на встречу',
      'Итоги за 2 минуты',
      'Автоматический follow-up',
      'Архив с поиском'
    ]
  }
];

export const Pricing = () => {
  const [roiModalOpen, setRoiModalOpen] = useState(false);

  return (
    <section id="pricing" className="section-padding">
      <div className="section-container">
        <div className="bg-muted/30 rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Цены и тарифы
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                Выберите подходящее решение для вашего бизнеса
              </p>
              
              {/* ROI Calculator CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Dialog open={roiModalOpen} onOpenChange={setRoiModalOpen}>
                  <DialogTrigger asChild>
                    <Button className="btn-hero">
                      <Calculator className="w-4 h-4 mr-2" />
                      Рассчитать ROI
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Калькулятор возврата инвестиций</DialogTitle>
                    </DialogHeader>
                    <ROICalculator onClose={() => setRoiModalOpen(false)} />
                  </DialogContent>
                </Dialog>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>P2 — самый популярный выбор</span>
                </div>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {pricingData.map((item, index) => (
                <PricingCard
                  key={item.id}
                  product={item}
                  isPopular={item.id === 'P2'} // P2 is most popular
                  onCalculateROI={() => setRoiModalOpen(true)}
                />
              ))}
            </div>

            {/* Comparison Table */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center mb-8">Сравнение продуктов</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="border border-border p-4 text-left font-semibold">Продукт</th>
                      <th className="border border-border p-4 text-center font-semibold">Стоимость</th>
                      <th className="border border-border p-4 text-center font-semibold">Экономия времени</th>
                      <th className="border border-border p-4 text-center font-semibold">Статус</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingData.map((item) => (
                      <tr key={item.id} className="hover:bg-muted/30 transition-colors">
                        <td className="border border-border p-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-accent/10 rounded-lg">
                              <TrendingUp className="w-4 h-4 text-accent" />
                            </div>
                            <div>
                              <div className="font-semibold">{item.title}</div>
                              <div className="text-sm text-muted-foreground">{item.id}</div>
                            </div>
                          </div>
                        </td>
                        <td className="border border-border p-4 text-center font-semibold">
                          {item.price}
                        </td>
                        <td className="border border-border p-4 text-center">
                          {item.benefits?.[0] || 'Индивидуально'}
                        </td>
                        <td className="border border-border p-4 text-center">
                          {item.pilotBadge ? (
                            <span className="px-2 py-1 bg-cyan/10 text-cyan rounded-full text-xs font-semibold">
                              Пилот
                            </span>
                          ) : item.inDevelopment ? (
                            <span className="px-2 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold">
                              В разработке
                            </span>
                          ) : (
                            <span className="px-2 py-1 bg-green/10 text-green rounded-full text-xs font-semibold">
                              Доступно
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-16 bg-muted/30 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6 text-center">Частые вопросы о ценах</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Можно ли изменить тариф?</h4>
                  <p className="text-sm text-muted-foreground">
                    Да, вы можете перейти на другой тариф в любое время. При переходе на более дорогой тариф доплачиваете разницу, на более дешёвый — получаете кредит.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Есть ли скидки?</h4>
                  <p className="text-sm text-muted-foreground">
                    При покупке нескольких продуктов предоставляем скидку до 20%. Также действуют скидки для образовательных учреждений и НКО.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Как происходит оплата?</h4>
                  <p className="text-sm text-muted-foreground">
                    Принимаем оплату через Robokassa, банковские переводы и криптовалюту. Для юридических лиц работаем по договору с НДС.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Есть ли гарантия возврата?</h4>
                  <p className="text-sm text-muted-foreground">
                    Предоставляем 30 дней на тестирование. Если продукт не подошёл — возвращаем полную стоимость.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
