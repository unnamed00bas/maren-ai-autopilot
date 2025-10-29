import { Logo } from './Logo';
import { Button } from './ui/button';
import { Clock, Zap, TrendingUp, Play, ArrowRight } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';
import { useState, useEffect } from 'react';

interface HeroProps {
  onCalcClick: () => void;
  onDemoClick: () => void;
}

export const Hero = ({ onCalcClick, onDemoClick }: HeroProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/5 rounded-full blur-2xl animate-pulse delay-500" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="space-y-6 md:space-y-8">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-tight">
                <span className="block text-foreground uppercase">AI-АССИСТЕНТ</span>
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-secondary)] bg-clip-text text-transparent">
                  общается как живой человек
                </span>
              </h1>
              
              {/* Animated stats */}
              <div className="mt-6 flex flex-wrap gap-4 md:gap-6">
                <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm rounded-xl px-4 py-2 border border-border/50">
                  <span className="text-2xl md:text-3xl font-bold text-accent">
                    <AnimatedCounter end={4} suffix="ч" />
                  </span>
                  <span className="text-sm text-muted-foreground">экономии в день</span>
                </div>
                <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm rounded-xl px-4 py-2 border border-border/50">
                  <span className="text-2xl md:text-3xl font-bold text-cyan">
                    <AnimatedCounter end={10} suffix="сек" />
                  </span>
                  <span className="text-sm text-muted-foreground">время ответа</span>
                </div>
                <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm rounded-xl px-4 py-2 border border-border/50">
                  <span className="text-2xl md:text-3xl font-bold text-accent">
                    <AnimatedCounter end={24} suffix="/7" />
                  </span>
                  <span className="text-sm text-muted-foreground">работает</span>
                </div>
              </div>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
              <span className="bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-secondary)] bg-clip-text text-transparent font-bold">AI-автоматизированный блог</span> генерирует статьи и короткие видео с аватаром: автопостинг по расписанию и репост в соцсети.
            </p>

            {/* Enhanced key benefits with animations */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 py-4 md:py-6">
                {[
                  {
                    icon: Clock,
                    title: "−2–4 часа",
                    subtitle: "рутины ежедневно",
                    color: "text-accent",
                    bgColor: "bg-accent/10",
                    borderColor: "border-accent/30"
                  },
                  {
                    icon: Zap,
                    title: "≤10 секунд",
                    subtitle: "время ответа ассистента",
                    color: "text-cyan",
                    bgColor: "bg-cyan/10",
                    borderColor: "border-cyan/30"
                  },
                  {
                    icon: TrendingUp,
                    title: "Идея → контент → публикация",
                    subtitle: "UTM, расписание, отчёт",
                    color: "text-accent",
                    bgColor: "bg-accent/10",
                    borderColor: "border-accent/30"
                  }
                ].map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={index}
                      className={`flex items-center gap-2 md:gap-3 ${benefit.bgColor} backdrop-blur-sm rounded-xl p-3 md:p-4 border ${benefit.borderColor} transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer group`}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div className={`p-2 rounded-lg transition-all duration-300 ${hoveredCard === index ? 'scale-110' : ''}`}>
                        <Icon className={`w-6 h-6 md:w-8 md:h-8 ${benefit.color} flex-shrink-0`} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className={`font-bold text-xs sm:text-sm md:text-base lg:text-lg break-words ${benefit.color}`}>
                          {benefit.title}
                        </div>
                        <div className="text-xs md:text-sm text-muted-foreground break-words">
                          {benefit.subtitle}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Enhanced CTAs with animations */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex flex-col gap-3 md:gap-4 pt-2 md:pt-4">
                <Button 
                  onClick={onDemoClick} 
                  className="btn-hero text-sm md:text-base lg:text-lg w-full h-auto min-h-[48px] py-4 group relative overflow-hidden"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Play className="w-4 h-4" />
                    Получить демо 24 часа
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                <Button 
                  onClick={onCalcClick} 
                  variant="outline" 
                  size="lg" 
                  className="text-sm md:text-base lg:text-lg w-full h-auto min-h-[48px] py-4 whitespace-normal break-words leading-tight border-2 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group"
                >
                  <span className="flex items-center justify-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Посчитать экономию времени (бесплатно)
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>
            </div>

            {/* Trust badges */}
            <div className="pt-6 md:pt-8 border-t border-border/50">
              <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">Работаем с:</p>
              <div className="flex flex-wrap gap-4 md:gap-6 items-center opacity-70">
                {[
                  { name: 'n8n', logo: '/assets/brands/n8n.svg' },
                  { name: 'Make', logo: '/assets/brands/make.svg' },
                  { name: 'OpenAI', logo: '/assets/brands/openai.svg' },
                  { name: 'Claude', logo: '/assets/brands/claude.svg' },
                  { name: 'Gemini', logo: '/assets/brands/gemini.svg' },
                  { name: 'Perplexity', logo: '/assets/brands/perplexity.svg' },
                  { name: 'Telegram', logo: '/assets/brands/telegram.svg' },
                  { name: 'Notion', logo: '/assets/brands/notion.svg' },
                  { name: 'Google Sheets', logo: '/assets/brands/sheets.svg' },
                  { name: 'Google Docs', logo: '/assets/brands/docs.svg' },
                ].map((tech) => (
                  <img 
                    key={tech.name} 
                    src={tech.logo} 
                    alt={tech.name}
                    className="h-6 md:h-8 grayscale hover:grayscale-0 transition-all duration-300"
                    title={tech.name}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced right column - Visual */}
          <div className={`hidden lg:flex items-center justify-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative w-full max-w-md aspect-square">
              {/* Enhanced animated rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-full h-full border-2 border-accent/20 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
                <div className="absolute w-4/5 h-4/5 border-2 border-cyan/20 rounded-full animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
                <div className="absolute w-3/5 h-3/5 border-2 border-accent/30 rounded-full animate-ping" style={{ animationDuration: '2s', animationDelay: '1s' }} />
                <div className="absolute w-2/5 h-2/5 border-2 border-cyan/40 rounded-full animate-ping" style={{ animationDuration: '1.5s', animationDelay: '1.5s' }} />
              </div>
              
              {/* Enhanced center logo with glow effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full group-hover:bg-accent/30 transition-all duration-500" />
                  <div className="absolute inset-0 bg-cyan/10 blur-2xl rounded-full group-hover:bg-cyan/20 transition-all duration-500" />
                  <div className="relative z-10 group-hover:scale-110 transition-transform duration-500">
                    <Logo variant="neon" size="lg" />
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-accent/60 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
              <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-cyan/60 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-accent/40 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
