import { Logo } from './Logo';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Clock, Zap, TrendingUp, Play, ArrowRight, Sparkles, CheckCircle, Star, Users, Timer, Shield } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';
import { useState, useEffect } from 'react';

interface HeroProps {
  onCalcClick: () => void;
  onDemoClick: () => void;
}

export const Hero = ({ onCalcClick, onDemoClick }: HeroProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate features
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 3);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Clock,
      title: "Экономия времени",
      description: "До 4 часов ежедневно",
      value: "4ч",
      color: "accent"
    },
    {
      icon: Zap,
      title: "Скорость ответа",
      description: "Мгновенные ответы",
      value: "≤10с",
      color: "cyan"
    },
    {
      icon: Shield,
      title: "Надежность",
      description: "Работает 24/7",
      value: "24/7",
      color: "accent"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />
      
      {/* Subtle geometric patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-2xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left column - Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Новое поколение AI-ассистентов</span>
            </div>

            {/* Main headline */}
            <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tight">
                <span className="block text-foreground">AI-ассистент</span>
                <span className="block bg-gradient-to-r from-[var(--theme-primary)] via-[var(--theme-secondary)] to-[var(--theme-primary)] bg-clip-text text-transparent">
                  с памятью
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                Автоматизируйте создание контента, публикации и коммуникации. 
                <span className="font-semibold text-foreground"> Экономьте до 4 часов ежедневно</span> с помощью ИИ, который понимает ваш стиль.
              </p>
            </div>

            {/* Interactive features showcase */}
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="grid grid-cols-3 gap-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  const isActive = activeFeature === index;
                  
                  return (
                    <div
                      key={index}
                      className={`group cursor-pointer transition-all duration-500 ${
                        isActive ? 'scale-105' : 'hover:scale-102'
                      }`}
                      onClick={() => setActiveFeature(index)}
                    >
                      <div className={`p-6 rounded-2xl border-2 transition-all duration-500 ${
                        isActive 
                          ? `bg-${feature.color}/10 border-${feature.color}/30 shadow-lg` 
                          : 'bg-card/50 border-border/50 hover:border-accent/30'
                      }`}>
                        <div className="flex flex-col items-center text-center space-y-3">
                          <div className={`p-3 rounded-xl transition-all duration-500 ${
                            isActive ? `bg-${feature.color}/20` : 'bg-muted'
                          }`}>
                            <Icon className={`w-6 h-6 transition-colors duration-500 ${
                              isActive ? `text-${feature.color}` : 'text-muted-foreground'
                            }`} />
                          </div>
                          <div className="space-y-1">
                            <div className={`text-2xl font-bold transition-colors duration-500 ${
                              isActive ? `text-${feature.color}` : 'text-foreground'
                            }`}>
                              <AnimatedCounter end={parseInt(feature.value.replace(/[^\d]/g, '')) || 0} suffix={feature.value.replace(/\d/g, '')} />
                            </div>
                            <div className="text-sm font-medium text-muted-foreground">
                              {feature.title}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA Section */}
            <div className={`space-y-6 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={onDemoClick} 
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-secondary)] hover:from-[var(--theme-primary)]/90 hover:to-[var(--theme-secondary)]/90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Play className="w-5 h-5" />
                    Получить демо 24 часа
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                
                <Button 
                  onClick={onCalcClick} 
                  variant="outline" 
                  size="lg"
                  className="group border-2 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
                >
                  <span className="flex items-center justify-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Рассчитать экономию
                  </span>
                </Button>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-accent to-cyan border-2 border-background" />
                    ))}
                  </div>
                  <span>500+ клиентов</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span>4.9/5 рейтинг</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Visual */}
          <div className={`lg:col-span-5 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative">
              {/* Main visual container */}
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--theme-primary)]/10 via-transparent to-[var(--theme-secondary)]/10 rounded-3xl" />
                
                {/* Floating cards */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-80 h-80">
                    {/* Central logo */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--theme-primary)]/20 to-[var(--theme-secondary)]/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500" />
                        <div className="relative z-10 p-8 bg-background/80 backdrop-blur-sm rounded-2xl border border-border/50 shadow-xl group-hover:scale-105 transition-transform duration-500">
                          <Logo variant="neon" size="lg" />
                        </div>
                      </div>
                    </div>

                    {/* Orbiting elements */}
                    <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                        <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-accent/30">
                          <Zap className="w-6 h-6 text-accent" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4">
                        <div className="w-12 h-12 bg-cyan/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-cyan/30">
                          <Clock className="w-6 h-6 text-cyan" />
                        </div>
                      </div>
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4">
                        <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-accent/30">
                          <TrendingUp className="w-6 h-6 text-accent" />
                        </div>
                      </div>
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4">
                        <div className="w-12 h-12 bg-cyan/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-cyan/30">
                          <Shield className="w-6 h-6 text-cyan" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating stats */}
              <div className="absolute -top-4 -right-4 bg-background/80 backdrop-blur-sm rounded-2xl p-4 border border-border/50 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">
                    <AnimatedCounter end={99} suffix="%" />
                  </div>
                  <div className="text-xs text-muted-foreground">точность</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-background/80 backdrop-blur-sm rounded-2xl p-4 border border-border/50 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan">
                    <AnimatedCounter end={24} suffix="/7" />
                  </div>
                  <div className="text-xs text-muted-foreground">работает</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
