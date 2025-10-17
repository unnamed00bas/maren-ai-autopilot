import { Users, Clock, FileText, BarChart3 } from 'lucide-react';

export const Target = () => {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="bg-muted/30 rounded-3xl p-8 md:p-12 shadow-lg">
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
              <div className="bg-card backdrop-blur-sm rounded-3xl p-6 md:p-8 border-2 border-border hover:border-accent/50 transition-all">
                <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-accent/10 mb-4">
                  <Clock className="w-6 h-6 md:w-7 md:h-7 text-accent" />
                </div>
                <div className="text-xs md:text-sm font-semibold text-accent mb-2 uppercase tracking-wider">Время</div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">eCom</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  тратят часы на постинг — <span className="text-accent font-semibold">MAREN публикует сам</span>
                </p>
              </div>

              <div className="bg-card backdrop-blur-sm rounded-3xl p-6 md:p-8 border-2 border-border hover:border-accent/50 transition-all">
                <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-cyan/10 mb-4">
                  <FileText className="w-6 h-6 md:w-7 md:h-7 text-cyan" />
                </div>
                <div className="text-xs md:text-sm font-semibold text-cyan mb-2 uppercase tracking-wider">Контент</div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Продюсеры и эксперты</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  нужен контент без команды — <span className="text-accent font-semibold">MAREN пишет и планирует</span>
                </p>
              </div>

              <div className="bg-card backdrop-blur-sm rounded-3xl p-6 md:p-8 border-2 border-border hover:border-accent/50 transition-all">
                <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-accent/10 mb-4">
                  <BarChart3 className="w-6 h-6 md:w-7 md:h-7 text-accent" />
                </div>
                <div className="text-xs md:text-sm font-semibold text-accent mb-2 uppercase tracking-wider">Контроль</div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">SMM</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  управление каналами и отчетами — <span className="text-accent font-semibold">всё в одном дашборде</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
