import { Calculator, Rocket, Settings, TrendingUp, Repeat } from 'lucide-react';

const steps = [
  {
    icon: Calculator,
    title: 'Калькулятор времени',
    description: 'Оценим вашу экономию времени и потенциал автоматизации'
  },
  {
    icon: Rocket,
    title: 'Демо 24 ч / 999 ₽',
    description: 'Протестируете на реальных задачах, проверите fit'
  },
  {
    icon: Settings,
    title: 'Онбординг',
    description: 'Подключим доступы: почта/календарь/каналы, быстрый сетап'
  },
  {
    icon: TrendingUp,
    title: 'Пилот 7 дней',
    description: 'Запустим 1–2 пайплайна + предоставим первый отчёт'
  },
  {
    icon: Repeat,
    title: 'Ретейнер',
    description: 'Поддержка, масштабирование, добавление новых пайплайнов'
  }
];

export const Process = () => {
  return (
    <section className="section-container bg-muted/30">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">
          Как мы работаем
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Прозрачный процесс от первого контакта до масштабирования
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/20 via-accent to-accent/20 transform -translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={index}
                  className={`relative flex items-center gap-8 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className={`inline-block bg-card border border-border rounded-2xl p-6 hover:border-accent transition-colors ${isEven ? 'lg:ml-auto' : ''} max-w-md`}>
                      <div className="flex items-center gap-4 mb-3">
                        {isEven && (
                          <>
                            <div>
                              <div className="text-sm font-bold text-accent mb-1">Шаг {index + 1}</div>
                              <h3 className="text-xl font-bold">{step.title}</h3>
                            </div>
                            <div className="lg:hidden p-3 bg-accent/10 rounded-xl flex-shrink-0">
                              <Icon className="w-6 h-6 text-accent" />
                            </div>
                          </>
                        )}
                        {!isEven && (
                          <>
                            <div className="lg:hidden p-3 bg-accent/10 rounded-xl flex-shrink-0">
                              <Icon className="w-6 h-6 text-accent" />
                            </div>
                            <div>
                              <div className="text-sm font-bold text-accent mb-1">Шаг {index + 1}</div>
                              <h3 className="text-xl font-bold">{step.title}</h3>
                            </div>
                          </>
                        )}
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>

                  {/* Icon circle */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 p-4 bg-background border-4 border-accent rounded-full z-10">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden lg:block flex-1" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
