import { Quote, TrendingDown, Clock, Target } from 'lucide-react';
import { Button } from './ui/button';

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
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="bg-muted/30 rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent/10 mb-4 md:mb-6">
              <Quote className="w-6 h-6 md:w-8 md:h-8 text-accent" />
            </div>
            
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
                    alt={testimonial.name}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-accent/20"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-base md:text-lg">{testimonial.name}</h4>
                    <p className="text-xs md:text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                  <img 
                    src={testimonial.logo} 
                    alt={testimonial.company}
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
                onClick={() => window.open('https://t.me/promaren_support_bot?text=Хочу+подробный+разбор+кейса', '_blank')}
              >
                Получить подробный разбор кейса
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
