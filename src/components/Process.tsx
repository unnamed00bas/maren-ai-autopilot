import { Calculator, Rocket, Settings, TrendingUp, Repeat } from 'lucide-react';

const steps = [
  {
    icon: Calculator,
    title: 'Диагностика',
    description: 'Разбираем, как сейчас рождается контент: кто пишет, где затыки, какие данные крутятся. Находим узкие места, измеряем потери времени и оцениваем, какие продукты MAREN могут ускорить цикл. → Опционально подключается Р1 — аудит процессов и карта автоматизации.'
  },
  {
    icon: Rocket,
    title: 'Архитектура',
    description: 'Проектируем структуру: источники данных, сценарии, инструменты, роли. Настраиваем white-data-зону и комплаенс под 152-ФЗ. → Опционально P1 — настройка AI Governance и политик данных.'
  },
  {
    icon: Settings,
    title: 'Онбординг',
    description: 'Настраиваем связки на n8n или Make.com, обучаем модели, собираем визуалы и тексты, докручиваем промпты. Проверяем качество и воспроизводимость на реальных сценариях.'
  },
  {
    icon: TrendingUp,
    title: 'Автоматизация',
    description: 'Добавляем метрики, уведомления, контроль версий и логи. После этого процесс начинает жить сам: контент генерируется, блог ведется, статьи пишутся.'
  },
  {
    icon: Repeat,
    title: 'Сопровождение',
    description: '2 недели после внедрения помогаем адаптировать сценарии, обновляем промпты, расширяем экосистему. → Опционально — при необходимости добавляем новые модули или API; поддержка white-data и версия процессов в реестре изменений.'
  }
];

export const Process = () => {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="bg-muted/30 rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
              Как работает MAREN
            </h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
              Без хайпа. По процессу. С прозрачным результатом.<br />
              Мы проектируем цепочки, где контент создаётся сам — от брифа до публикации, а люди возвращают себе часы.<br />
              Вместо «сделаем красиво» — пошаговая архитектура, метрики и контроль качества.
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
                          <div className={`bg-card border border-border rounded-2xl p-4 md:p-6 hover:border-accent transition-colors ${isEven ? 'lg:ml-auto' : ''} max-w-lg`}>
                            <div className="flex items-start gap-3 md:gap-4">
                              <div className="p-2 md:p-3 bg-accent/10 rounded-xl flex-shrink-0">
                                <Icon className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                              </div>
                              <div className="flex-1">
                                <div className="text-xs md:text-sm font-bold text-accent mb-0.5 md:mb-1">Шаг {index + 1}</div>
                                <h3 className="text-base md:text-xl font-bold mb-2">{step.title}</h3>
                                <p className="text-sm md:text-base text-muted-foreground">{step.description}</p>
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
                    </div>
                  );
                })}
              </div>

              {/* Final message */}
              <div className="mt-12 text-center">
                <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Принцип MAREN: никакой магии — только инженерия, данные и уважение ко времени.<br />
                  <span className="font-bold text-foreground">Контент сам. Время — вам.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
