import { Logo } from './Logo';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Play, ArrowRight, Sparkles, Star, Zap, Clock, Shield, Brain, MessageCircle, Rocket } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';
import { useState, useEffect } from 'react';

interface HeroProps {
  onCalcClick: () => void;
  onDemoClick: () => void;
}

export const Hero = ({ onCalcClick, onDemoClick }: HeroProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Dynamic gradient background that follows mouse */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            hsl(var(--theme-primary) / 0.1) 0%, 
            transparent 50%),
            linear-gradient(135deg, 
              hsl(var(--background)) 0%, 
              hsl(var(--muted) / 0.3) 100%)`
        }}
      />
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-[var(--theme-primary)]/20 to-[var(--theme-secondary)]/20 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-gradient-to-r from-[var(--theme-secondary)]/15 to-[var(--theme-primary)]/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-[var(--theme-primary)]/10 to-[var(--theme-secondary)]/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="section-container relative z-10">
        <div className="text-center space-y-12">
          {/* Main content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[var(--theme-primary)]/10 to-[var(--theme-secondary)]/10 border border-[var(--theme-primary)]/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[var(--theme-primary)]" />
              <span className="text-sm font-semibold text-[var(--theme-primary)]">Новое поколение AI</span>
            </div>

            {/* Main headline */}
            <div className="space-y-6 max-w-4xl mx-auto">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.85] tracking-tight">
                <span className="block text-foreground mb-2">AI-ассистент</span>
                <span className="block bg-gradient-to-r from-[var(--theme-primary)] via-[var(--theme-secondary)] to-[var(--theme-primary)] bg-clip-text text-transparent animate-shimmer">
                  с памятью
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                <span className="font-semibold text-foreground">Экономьте 4 часа ежедневно</span> с помощью ИИ, 
                который понимает ваш стиль и работает как живой человек
              </p>
            </div>

            {/* Key benefits - minimal and impactful */}
            <div className="flex flex-wrap justify-center gap-8 max-w-2xl mx-auto">
              <div className="flex items-center gap-3 text-lg">
                <div className="w-2 h-2 rounded-full bg-[var(--theme-primary)] animate-pulse" />
                <span className="text-muted-foreground">Экономия времени</span>
              </div>
              <div className="flex items-center gap-3 text-lg">
                <div className="w-2 h-2 rounded-full bg-[var(--theme-secondary)] animate-pulse" style={{ animationDelay: '0.5s' }} />
                <span className="text-muted-foreground">Работает 24/7</span>
              </div>
              <div className="flex items-center gap-3 text-lg">
                <div className="w-2 h-2 rounded-full bg-[var(--theme-primary)] animate-pulse" style={{ animationDelay: '1s' }} />
                <span className="text-muted-foreground">С памятью</span>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={onDemoClick} 
                size="lg"
                className="group relative px-8 py-4 text-lg font-semibold bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-secondary)] hover:from-[var(--theme-primary)]/90 hover:to-[var(--theme-secondary)]/90 text-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center justify-center gap-3">
                  <Play className="w-5 h-5" />
                  Получить демо 24 часа
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              
              <Button 
                onClick={onCalcClick} 
                variant="outline" 
                size="lg"
                className="group px-8 py-4 text-lg font-semibold border-2 border-[var(--theme-primary)]/30 hover:border-[var(--theme-primary)]/60 hover:bg-[var(--theme-primary)]/5 transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center justify-center gap-3">
                  <Brain className="w-5 h-5" />
                  Рассчитать экономию
                </span>
              </Button>
            </div>

            {/* Social proof - minimal */}
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-secondary)] border-2 border-background" />
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

          {/* Central visual - floating AI brain */}
          <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative w-80 h-80 mx-auto">
              {/* Main floating container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative group">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--theme-primary)]/30 to-[var(--theme-secondary)]/30 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-1000" />
                  
                  {/* Main glass container */}
                  <div className="relative z-10 w-64 h-64 bg-background/20 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl flex items-center justify-center group-hover:scale-105 transition-all duration-500">
                    {/* AI Brain icon */}
                    <div className="relative">
                      <Brain className="w-24 h-24 text-[var(--theme-primary)] group-hover:text-[var(--theme-secondary)] transition-colors duration-500" />
                      
                      {/* Floating particles around brain */}
                      <div className="absolute inset-0">
                        <div className="absolute top-2 left-2 w-2 h-2 bg-[var(--theme-primary)] rounded-full animate-ping" />
                        <div className="absolute top-4 right-3 w-1.5 h-1.5 bg-[var(--theme-secondary)] rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
                        <div className="absolute bottom-3 left-4 w-1 h-1 bg-[var(--theme-primary)] rounded-full animate-ping" style={{ animationDelay: '1s' }} />
                        <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-[var(--theme-secondary)] rounded-full animate-ping" style={{ animationDelay: '1.5s' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Orbiting elements */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '30s' }}>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                  <div className="w-8 h-8 bg-[var(--theme-primary)]/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-[var(--theme-primary)]/30">
                    <MessageCircle className="w-4 h-4 text-[var(--theme-primary)]" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2">
                  <div className="w-8 h-8 bg-[var(--theme-secondary)]/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-[var(--theme-secondary)]/30">
                    <Rocket className="w-4 h-4 text-[var(--theme-secondary)]" />
                  </div>
                </div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2">
                  <div className="w-8 h-8 bg-[var(--theme-primary)]/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-[var(--theme-primary)]/30">
                    <Zap className="w-4 h-4 text-[var(--theme-primary)]" />
                  </div>
                </div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2">
                  <div className="w-8 h-8 bg-[var(--theme-secondary)]/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-[var(--theme-secondary)]/30">
                    <Shield className="w-4 h-4 text-[var(--theme-secondary)]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stats */}
            <div className="absolute -top-8 -right-8 bg-background/80 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--theme-primary)]">
                  <AnimatedCounter end={4} suffix="ч" />
                </div>
                <div className="text-xs text-muted-foreground">экономии</div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 bg-background/80 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--theme-secondary)]">
                  <AnimatedCounter end={24} suffix="/7" />
                </div>
                <div className="text-xs text-muted-foreground">работает</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
