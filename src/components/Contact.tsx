import { Mail, MessageCircle, Phone } from 'lucide-react';
import { Button } from './ui/button';

export const Contact = () => {
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
            <a 
              href="https://t.me/Marinochcin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:bg-accent/10 transition-all border border-border hover:border-accent hover:shadow-[0_0_20px_hsl(var(--lime)/0.2)] hover:-translate-y-1 duration-300 w-full sm:w-auto sm:min-w-[180px] sm:max-w-[200px] text-center"
            >
              <MessageCircle className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 text-accent group-hover:scale-110 group-hover:animate-[wiggle_0.5s_ease-in-out_infinite] transition-transform" />
              <h3 className="font-bold text-xl md:text-2xl">Telegram</h3>
            </a>

            <a 
              href="mailto:Marina.Y.Pogodina@yandex.ru"
              className="group bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:bg-cyan/10 transition-all border border-border hover:border-cyan hover:shadow-[0_0_20px_hsl(var(--cyan)/0.2)] hover:-translate-y-1 duration-300 w-full sm:w-auto sm:min-w-[180px] sm:max-w-[200px] text-center"
            >
              <Mail className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 text-cyan group-hover:scale-110 group-hover:animate-[wiggle_0.5s_ease-in-out_infinite] transition-transform" />
              <h3 className="font-bold text-xl md:text-2xl">Email</h3>
            </a>

            <a 
              href="tel:+79032355551"
              className="group bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:bg-accent/10 transition-all border border-border hover:border-accent hover:shadow-[0_0_20px_hsl(var(--lime)/0.2)] hover:-translate-y-1 duration-300 w-full sm:w-auto sm:min-w-[180px] sm:max-w-[200px] text-center"
            >
              <Phone className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 text-accent group-hover:scale-110 group-hover:animate-[wiggle_0.5s_ease-in-out_infinite] transition-transform" />
              <h3 className="font-bold text-xl md:text-2xl">Телефон</h3>
            </a>
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
