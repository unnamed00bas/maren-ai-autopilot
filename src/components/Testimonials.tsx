import { Quote, TrendingDown, Clock, Target } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Алексей Морозов',
    position: 'CEO',
    company: 'EcoGift',
    logo: '/assets/brands/sheets.svg',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    text: 'MAREN полностью автоматизировал наш блог и соцсети. Теперь контент публикуется сам, а я фокусируюсь на продажах.',
    caseId: 'ecogift'
  },
  {
    name: 'Марина Петрова',
    position: 'Продюсер',
    company: 'Digital Pro',
    logo: '/assets/brands/notion.svg',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    text: 'Ассистент с памятью — это прорыв. Он помнит все детали проектов, пишет посты в моём стиле и экономит 3 часа каждый день.',
    caseId: 'digitalpro'
  },
  {
    name: 'Дмитрий Соколов',
    position: 'SMM-менеджер',
    company: 'Tech Solutions',
    logo: '/assets/brands/telegram.svg',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    text: 'Управляю 5 каналами через один дашборд.',
    caseId: 'techsolutions'
  }
];

const caseSteps = [
  {
    icon: Clock,
    title: 'Проблема',
    description: 'Команда тратила 4+ часа ежедневно на создание и публикацию контента в 7 каналов',
    color: 'text-red-500'
  },
  {
    icon: Target,
    title: 'Решение',
    description: 'Внедрили MAREN Assistant (P2) + Flow (P3) с автопостингом и контент-планом на месяц',
    color: 'text-cyan'
  },
  {
    icon: TrendingDown,
    title: 'Результат',
    description: '4 часа → 30 минут в день. Команда перешла к стратегии вместо рутинных операций',
    color: 'text-accent'
  }
];

export const Testimonials = () => {
  const [caseModalOpen, setCaseModalOpen] = useState(false);

  return (
    <>
      <section className="section-padding">
      <div className="section-container">
        <div className="bg-muted/30 rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Отзывы клиентов
            </h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Реальные истории бизнеса, который вернул своё время
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-3xl p-6 md:p-8 border-2 border-border hover:border-accent/50 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <img 
                    src={testimonial.photo} 
                    alt={`Фото ${testimonial.name}, ${testimonial.position} в ${testimonial.company}`}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-accent/20"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-base md:text-lg">{testimonial.name}</h4>
                    <p className="text-xs md:text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                  <img 
                    src={testimonial.logo} 
                    alt={`Логотип компании ${testimonial.company}`}
                    className="h-6 md:h-8 opacity-70"
                  />
                </div>

                <div className="mb-4">
                  <Quote className="w-5 h-5 text-accent/30 mb-2" />
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Case Study */}
          <div className="bg-gradient-to-br from-accent/5 to-cyan/5 rounded-3xl p-6 md:p-10 border-2 border-accent/20">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
                Кейс: как MAREN сократил подготовку контента на 4 часа в день
              </h3>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                История eCom-компании, которая автоматизировала контент-производство
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {caseSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">
                    {index < caseSteps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-accent/30 to-transparent -translate-x-1/2" />
                    )}
                    
                    <div className="bg-card rounded-2xl p-6 border-2 border-border hover:border-accent/50 transition-all relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-accent/10 rounded-xl">
                          <Icon className={`w-6 h-6 ${step.color}`} />
                        </div>
                        <div className="text-xs font-bold text-accent">Шаг {index + 1}</div>
                      </div>
                      
                      <h4 className="text-lg md:text-xl font-bold mb-2">{step.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 md:mt-10 text-center">
              <Button 
                className="btn-hero"
                onClick={() => setCaseModalOpen(true)}
              >
                Разобрать кейс
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Dialog open={caseModalOpen} onOpenChange={setCaseModalOpen}>
      <DialogContent className="max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl">
            Кейс: как MAREN сократил подготовку контента на 4 часа в день
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[70vh] pr-4">
          <div className="space-y-6 text-sm md:text-base">
            <div className="bg-muted/50 rounded-xl p-4 md:p-6">
              <p className="font-semibold mb-2">Клиент: локальный бренд косметики (eCom, Telegram)</p>
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Проблема:</span> ручная подготовка постов, сторис и карточек товаров занимала у команды 5–6 часов в день, публикации выходили с задержками, а отчёты делались вручную в Excel.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-accent">Решение MAREN</h3>
              
              <div className="space-y-6">
                <div className="bg-card rounded-xl p-4 md:p-6 border-2 border-border">
                  <h4 className="font-bold text-lg mb-3">Шаг 1. Аудит и внедрение пайплайна (P1 + P3)</h4>
                  <ul className="space-y-2 text-muted-foreground mb-4">
                    <li>• Провели аудит рабочих процессов: выявлено 27 ручных операций в контент-цикле.</li>
                    <li>• Внедрён Zero-Touch пайплайн MAREN Flow: генерация текстов, визуалов и автопостинг в Telegram и ВК.</li>
                    <li>• Настроена интеграция с Google Sheets → автоматический статус «опубликовано».</li>
                  </ul>
                  <div className="bg-accent/10 rounded-lg p-3 border-l-4 border-accent">
                    <p className="font-semibold text-accent">Результат: подготовка 1 поста — вместо 45 минут → 12 минут.</p>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-4 md:p-6 border-2 border-border">
                  <h4 className="font-bold text-lg mb-3">Шаг 2. Обучение ассистента (P2 MAREN Assistant)</h4>
                  <ul className="space-y-2 text-muted-foreground mb-4">
                    <li>• Загружены бренд-гайд, тональность и 10 примеров постов.</li>
                    <li>• Ассистент научился писать тексты в стиле клиента и сам подбирать хэштеги и описания карточек.</li>
                    <li>• Добавлена модерация: финальное утверждение перед публикацией.</li>
                  </ul>
                  <div className="bg-cyan/10 rounded-lg p-3 border-l-4 border-cyan">
                    <p className="font-semibold text-cyan">Результат: экономия ≈ 2 часов в день на копирайтинге и редактировании.</p>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-4 md:p-6 border-2 border-border">
                  <h4 className="font-bold text-lg mb-3">Шаг 3. GrowthOps и дашборд (P4 MAREN GrowthOps)</h4>
                  <ul className="space-y-2 text-muted-foreground mb-4">
                    <li>• Установлен KPI: частота публикаций, охваты, вовлечённость.</li>
                    <li>• Автоматические отчёты каждую пятницу → PDF на почту.</li>
                    <li>• Данные хранятся в white-зоне (152-ФЗ): аудит логов, шифрование TLS.</li>
                  </ul>
                  <div className="bg-accent/10 rounded-lg p-3 border-l-4 border-accent">
                    <p className="font-semibold text-accent">Результат: рост вовлечённости + 31 % за 2 недели, без найма доп. SMM-менеджера.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">Инфографика</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-accent/10">
                      <th className="border border-border p-3 text-left font-bold">Метрика</th>
                      <th className="border border-border p-3 text-left font-bold">До MAREN</th>
                      <th className="border border-border p-3 text-left font-bold text-accent">После MAREN</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3">Время на 1 пост</td>
                      <td className="border border-border p-3 text-muted-foreground">45 мин</td>
                      <td className="border border-border p-3 font-semibold text-accent">12 мин</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="border border-border p-3">Ежедневное время на контент</td>
                      <td className="border border-border p-3 text-muted-foreground">~5,5 ч</td>
                      <td className="border border-border p-3 font-semibold text-accent">1,5 ч</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">Срок утверждения поста</td>
                      <td className="border border-border p-3 text-muted-foreground">1 день</td>
                      <td className="border border-border p-3 font-semibold text-accent">30 мин</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="border border-border p-3">Вовлечённость аудитории</td>
                      <td className="border border-border p-3 text-muted-foreground">—</td>
                      <td className="border border-border p-3 font-semibold text-accent">+31 %</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">Экономия бюджета</td>
                      <td className="border border-border p-3 text-muted-foreground">—</td>
                      <td className="border border-border p-3 font-semibold text-accent">≈ 38 000 ₽ в месяц</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-cyan/10 rounded-xl p-6 md:p-8 border-2 border-accent/30">
              <Quote className="w-8 h-8 text-accent/30 mb-4" />
              <p className="text-base md:text-lg leading-relaxed mb-4">
                «Мы реально вернули себе 4 часа в день. Теперь MAREN сам пишет, публикует и отчитывается. А я наконец занимаюсь продуктом, а не постами.»
              </p>
              <p className="font-semibold">— Анна Иванова, основатель бренда</p>
            </div>

            <div className="text-center pt-4">
              <Button 
                className="btn-hero w-full md:w-auto"
                onClick={() => window.open('https://t.me/promaren_support_bot?text=Хочу+демо+7+дней', '_blank')}
              >
                Хочу так же
              </Button>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  </>
  );
};
