import { Mail, MessageCircle, Video } from 'lucide-react';
import { Button } from './ui/button';

export const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-accent/10 via-primary/5 to-cyan/10 rounded-3xl p-8 md:p-16 border border-accent/20 shadow-2xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-accent via-primary to-cyan bg-clip-text text-transparent">
              Готовы вернуть своё время?
            </h2>
            <p className="text-base md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <a 
              href="https://t.me/Marinochcin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:bg-accent/10 transition-all border border-border hover:border-accent hover:shadow-xl hover:-translate-y-1 duration-300"
            >
              <MessageCircle className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 text-accent group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-xl md:text-2xl">Telegram</h3>
            </a>

            <a 
              href="mailto:Marina.Y.Pogodina@yandex.ru"
              className="group bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:bg-primary/10 transition-all border border-border hover:border-primary hover:shadow-xl hover:-translate-y-1 duration-300"
            >
              <Mail className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-xl md:text-2xl">Email</h3>
            </a>

            <a 
              href="https://t.me/promaren_support_bot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:bg-cyan/10 transition-all border border-border hover:border-cyan hover:shadow-xl hover:-translate-y-1 duration-300"
            >
              <Video className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 text-cyan group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-xl md:text-2xl">Zoom</h3>
            </a>
          </div>

          <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-border/50">
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
