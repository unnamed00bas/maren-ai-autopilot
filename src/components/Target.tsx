import { Users } from 'lucide-react';

export const Target = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent/10 mb-4 md:mb-6">
              <Users className="w-6 h-6 md:w-8 md:h-8 text-accent" />
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Для кого
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-card backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border hover:border-accent/50 transition-all shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">eCom</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                тратят часы на постинг — <span className="text-accent font-semibold">MAREN публикует сам</span>
              </p>
            </div>

            <div className="bg-card backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border hover:border-accent/50 transition-all shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Продюсеры и эксперты</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                нужен контент без команды — <span className="text-accent font-semibold">MAREN пишет и планирует</span>
              </p>
            </div>

            <div className="bg-card backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border hover:border-accent/50 transition-all shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">SMM</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                управление каналами и отчетами — <span className="text-accent font-semibold">всё в одном дашборде</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
