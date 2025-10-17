import { Calculator, Rocket, Settings, TrendingUp, Repeat, FileText, Video } from 'lucide-react';
import { Button } from './ui/button';

interface ProcessProps {
  onCalcClick: () => void;
}

const steps = [
  {
    icon: Calculator,
    title: 'Калькулятор времени',
    description: 'Считаем, сколько часов вернём и где автоматизировать сильнее.',
    cta: 'Посчитать',
    action: 'calc'
  },
  {
    icon: Rocket,
    title: 'Демо Assistant (P2) · 24 ч / 999 ₽',
    description: 'Проверяете на своих задачах: план, посты/тексты, письмо, поиск с источниками.',
    cta: 'Запросить демо',
    action: 'link',
    link: 'https://t.me/promaren_support_bot?start=demo24'
  },
  {
    icon: Settings,
    title: 'Онбординг',
    description: 'Подключим доступы: почта/календарь/каналы, быстрый сетап. Настраиваем память и правила бренда.'
  },
  {
    icon: TrendingUp,
    title: 'Пилот 7 дней',
    description: 'Запускаем 1–2 ключевых пайплайна Flow (P3) в режиме Zero-Touch. Даём первый отчёт и ссылки.'
  },
  {
    icon: Repeat,
    title: 'Ретейнер',
    description: 'Поддержка, масштабирование: больше каналов, GrowthOps (P4), Cards (P5), новые пайплайны.',
    cta: 'Забронировать 15 минут',
    action: 'link',
    link: 'https://t.me/promaren_support_bot?start=book'
  }
];

const options = [
  {
    icon: FileText,
    title: 'Дорожная карта Audit (P1)',
    description: 'За 10 дней: что именно купить из P2–P6, риски ИТ/ИБ, чек-лист 152-ФЗ, карта 30–60–90, политика/оферта.',
    cta: 'Запросить аудит',
    link: 'https://t.me/promaren_support_bot?start=audit',
    badge: 'Опция A'
  },
  {
    icon: Video,
    title: 'Minutes (P6)',
    description: 'Включаем авто-протоколы созвонов (протокол ≤2 мин, задачи, письма).',
    cta: 'Пилот 1 встреча / 499 ₽',
    link: 'https://t.me/promaren_support_bot?start=minutes',
    badge: 'Опция B'
  }
];

export const Process = ({ onCalcClick }: ProcessProps) => {
  return (
    <section className="section-container bg-muted/30">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
          Как мы работаем
        </h2>
        <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Прозрачный процесс от первого контакта до масштабирования
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="relative">
          {/* Connection line - only on desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/20 via-accent to-accent/20 transform -translate-x-1/2" />

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index}>
                  <div 
                    className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-8 ${isEven ? '' : 'lg:flex-row-reverse'}`}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className={`bg-card border border-border rounded-2xl p-4 md:p-6 hover:border-accent transition-colors ${isEven ? 'lg:ml-auto' : ''} max-w-md`}>
                        <div className="flex items-start gap-3 md:gap-4 mb-2 md:mb-3">
                          <div className="p-2 md:p-3 bg-accent/10 rounded-xl flex-shrink-0">
                            <Icon className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                          </div>
                          <div className="flex-1">
                            <div className="text-xs md:text-sm font-bold text-accent mb-0.5 md:mb-1">Шаг {index + 1}</div>
                            <h3 className="text-base md:text-xl font-bold mb-2">{step.title}</h3>
                            <p className="text-sm md:text-base text-muted-foreground mb-3">{step.description}</p>
                            {step.cta && (
                              <Button 
                                size="sm"
                                onClick={() => {
                                  if (step.action === 'calc') {
                                    onCalcClick();
                                  } else if (step.action === 'link' && step.link) {
                                    window.open(step.link, '_blank');
                                  }
                                }}
                                className="w-full sm:w-auto"
                              >
                                {step.cta}
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Icon circle - desktop only */}
                    <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 p-3 md:p-4 bg-background border-4 border-accent rounded-full z-10">
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-accent" />
                    </div>

                    {/* Spacer for other side */}
                    <div className="hidden lg:block flex-1" />
                  </div>

                  {/* Insert options after step 2 */}
                  {index === 1 && (
                    <div className="mt-8 md:mt-12 mb-8 md:mb-12">
                      <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
                        {options.map((option, optionIndex) => {
                          const OptionIcon = option.icon;
                          return (
                            <div 
                              key={optionIndex}
                              className="bg-card/50 border border-dashed border-accent/50 rounded-2xl p-4 md:p-6 hover:border-accent hover:bg-card transition-all"
                            >
                              <div className="flex items-start gap-3 mb-3">
                                <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0">
                                  <OptionIcon className="w-5 h-5 text-accent" />
                                </div>
                                <div className="flex-1">
                                  <span className="text-xs font-bold text-accent/70 mb-1 block">{option.badge}</span>
                                  <h4 className="text-base md:text-lg font-bold mb-2">{option.title}</h4>
                                </div>
                              </div>
                              <p className="text-sm text-muted-foreground mb-4">{option.description}</p>
                              <Button 
                                variant="outline"
                                size="sm"
                                onClick={() => window.open(option.link, '_blank')}
                                className="w-full"
                              >
                                {option.cta}
                              </Button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
