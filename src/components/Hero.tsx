import { Logo } from './Logo';
import { Button } from './ui/button';
import { Clock, Zap, TrendingUp } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <Logo variant="dark" size="lg" />
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              <span className="block text-foreground">MAREN: время</span>
              <span className="block bg-gradient-to-r from-[hsl(var(--lime))] to-[hsl(var(--cyan))] bg-clip-text text-transparent">
                назад с ИИ
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
              Ассистент думает и помнит, Flow публикует, GrowthOps приводит аудиторию. 
              Лиды — за минуты, KPI — в дашборде.
            </p>

            {/* Key benefits */}
            <div className="grid sm:grid-cols-3 gap-4 py-6">
              <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50">
                <Clock className="w-8 h-8 text-accent flex-shrink-0" />
                <div>
                  <div className="font-bold text-lg">−2–4 часа</div>
                  <div className="text-sm text-muted-foreground">рутины в день</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50">
                <Zap className="w-8 h-8 text-accent flex-shrink-0" />
                <div>
                  <div className="font-bold text-lg">≤10 сек</div>
                  <div className="text-sm text-muted-foreground">ответ ИИ</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50">
                <TrendingUp className="w-8 h-8 text-accent flex-shrink-0" />
                <div>
                  <div className="font-bold text-lg">24/7</div>
                  <div className="text-sm text-muted-foreground">без перерывов</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#calc">
                <Button className="btn-hero text-lg">
                  Посчитать экономию времени
                </Button>
              </a>
              <a href="#demo">
                <Button variant="outline" size="lg" className="text-lg">
                  Посмотреть демо
                </Button>
              </a>
            </div>

            {/* Trust badges */}
            <div className="pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-4">Работаем с:</p>
              <div className="flex flex-wrap gap-4 items-center opacity-60">
                {['n8n', 'Make', 'OpenAI', 'Claude', 'Gemini', 'Perplexity', 'Telegram', 'Notion'].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-muted rounded-lg text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Visual */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Animated rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-full h-full border-2 border-accent/20 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
                <div className="absolute w-4/5 h-4/5 border-2 border-cyan/20 rounded-full animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
                <div className="absolute w-3/5 h-3/5 border-2 border-accent/30 rounded-full animate-ping" style={{ animationDuration: '2s', animationDelay: '1s' }} />
              </div>
              
              {/* Center logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full" />
                  <Logo variant="neon" size="lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
