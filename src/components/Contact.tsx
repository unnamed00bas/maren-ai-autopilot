import { Mail, MessageCircle, Phone } from 'lucide-react';

export const Contact = () => {
  const handleExternalLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="section-container">
      <div className="max-w-6xl mx-auto">
        <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 md:p-16 border border-border shadow-lg">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
              Готовы <span className="bg-gradient-to-r from-[hsl(var(--lime))] to-[hsl(var(--cyan))] bg-clip-text text-transparent">вернуть</span> своё время?
            </h2>
            <p className="text-base md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12 md:mb-16 max-w-4xl mx-auto">
            <button
              onClick={() => handleExternalLink('https://t.me/promaren_support_bot?text=Заказать+опцию+%22Готовы+вернуть+своё+время%22+%28бесплатная+15-минутная+консультация%29')}
              className="group bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:bg-accent/10 transition-all border border-border hover:border-accent hover:shadow-[0_0_20px_hsl(var(--lime)/0.2)] hover:-translate-y-1 duration-300 w-full sm:w-auto flex items-center gap-4"
            >
              <MessageCircle className="w-10 h-10 md:w-12 md:h-12 text-accent group-hover:scale-110 group-hover:animate-[wiggle_0.5s_ease-in-out_infinite] transition-transform shrink-0" />
              <h3 className="font-bold text-xl md:text-2xl">Telegram</h3>
            </button>

            <button
              onClick={() => handleExternalLink('mailto:Marina.Y.Pogodina@yandex.ru')}
              className="group bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:bg-cyan/10 transition-all border border-border hover:border-cyan hover:shadow-[0_0_20px_hsl(var(--cyan)/0.2)] hover:-translate-y-1 duration-300 w-full sm:w-auto flex items-center gap-4"
            >
              <Mail className="w-10 h-10 md:w-12 md:h-12 text-cyan group-hover:scale-110 group-hover:animate-[wiggle_0.5s_ease-in-out_infinite] transition-transform shrink-0" />
              <h3 className="font-bold text-xl md:text-2xl">Email</h3>
            </button>

            <button
              onClick={() => handleExternalLink('tel:+79032355551')}
              className="group bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:bg-accent/10 transition-all border border-border hover:border-accent hover:shadow-[0_0_20px_hsl(var(--lime)/0.2)] hover:-translate-y-1 duration-300 w-full sm:w-auto flex items-center gap-4"
            >
              <Phone className="w-10 h-10 md:w-12 md:h-12 text-accent group-hover:scale-110 group-hover:animate-[wiggle_0.5s_ease-in-out_infinite] transition-transform shrink-0" />
              <h3 className="font-bold text-xl md:text-2xl">Телефон</h3>
            </button>
          </div>

          <div className="bg-muted/30 backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-border/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
              <div className="text-center md:text-left">
                <h3 className="font-bold mb-2 text-accent text-lg md:text-xl">Марина Погодина</h3>
                <p className="text-sm md:text-base text-muted-foreground">Основатель MAREN</p>
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-bold mb-2 text-accent text-lg md:text-xl">Самозанятая</h3>
                <p className="text-sm md:text-base text-muted-foreground">Погодина Марина Юрьевна</p>
                <p className="text-sm md:text-base text-muted-foreground">ИНН 615427582507</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
