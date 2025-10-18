import { Mail, MessageCircle, Phone } from 'lucide-react';

export const Contact = () => {
  const handleExternalLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="section-container section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-card/90 to-card/50 backdrop-blur-xl border border-border/50 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-cyan/5 pointer-events-none" />
          
          <div className="relative z-10 p-8 md:p-16">
            <div className="text-center mb-12 md:mb-14">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                Готовы <span className="bg-gradient-to-r from-[hsl(var(--lime))] to-[hsl(var(--cyan))] bg-clip-text text-transparent">вернуть</span> своё время?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Выберите удобный способ связи
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mb-12">
              <button
                onClick={() => handleExternalLink('https://t.me/promaren_support_bot?text=Заказать+опцию+%22Готовы+вернуть+своё+время%22+%28бесплатная+15-минутная+консультация%29')}
                className="group relative overflow-hidden bg-gradient-to-br from-card to-card/80 rounded-2xl p-6 border border-border/50 hover:border-accent/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-accent/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex flex-col items-center gap-3">
                  <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                    <MessageCircle className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg">Telegram</h3>
                </div>
              </button>

              <button
                onClick={() => handleExternalLink('mailto:Marina.Y.Pogodina@yandex.ru')}
                className="group relative overflow-hidden bg-gradient-to-br from-card to-card/80 rounded-2xl p-6 border border-border/50 hover:border-cyan/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan/0 to-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex flex-col items-center gap-3">
                  <div className="p-3 bg-cyan/10 rounded-xl group-hover:bg-cyan/20 transition-colors">
                    <Mail className="w-8 h-8 text-cyan" />
                  </div>
                  <h3 className="font-semibold text-lg">Email</h3>
                </div>
              </button>

              <button
                onClick={() => handleExternalLink('tel:+79032355551')}
                className="group relative overflow-hidden bg-gradient-to-br from-card to-card/80 rounded-2xl p-6 border border-border/50 hover:border-accent/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-accent/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex flex-col items-center gap-3">
                  <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                    <Phone className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg">Телефон</h3>
                </div>
              </button>
            </div>

            <div className="text-center">
              <div className="max-w-3xl mx-auto px-6 py-6 rounded-2xl bg-muted/30 backdrop-blur-sm border border-border/30">
                <p className="text-sm md:text-base leading-relaxed">
                  <span className="font-semibold text-accent">Марина Погодина, основатель MAREN</span>
                  <span className="text-muted-foreground">, благодарит вас за интерес к продуктам MAREN.</span>
                  <br />
                  <span className="text-muted-foreground">В знак благодарности дарю </span>
                  <span className="font-semibold text-accent">PDF-гайд-дорожную карту</span>
                  <span className="text-muted-foreground"> — как за </span>
                  <span className="font-semibold text-cyan">7 шагов</span>
                  <span className="text-muted-foreground"> прийти к </span>
                  <span className="font-semibold text-accent">росту метрик, охватов и освобождению личного времени</span>
                  <span className="text-muted-foreground">.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
