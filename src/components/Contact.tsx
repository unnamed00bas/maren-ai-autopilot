import { Mail, MessageCircle, Video } from 'lucide-react';
import { Button } from './ui/button';

export const Contact = () => {
  return (
    <section id="contact" className="section-container bg-gradient-to-br from-graphite to-pitch text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
          Готовы вернуть своё время?
        </h2>
        <p className="text-base md:text-xl opacity-90 mb-8 md:mb-12">
          Свяжитесь с нами любым удобным способом
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          <a 
            href="https://t.me/Marinochcin" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 hover:bg-white/20 transition-all border border-white/10 hover:border-accent group"
          >
            <MessageCircle className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-accent group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2">Telegram</h3>
            <p className="text-xs md:text-sm opacity-75">@Marinochcin</p>
          </a>

          <a 
            href="mailto:Marina.Y.Pogodina@yandex.ru"
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 hover:bg-white/20 transition-all border border-white/10 hover:border-accent group"
          >
            <Mail className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-accent group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2">Email</h3>
            <p className="text-xs md:text-sm opacity-75">Marina.Y.Pogodina@yandex.ru</p>
          </a>

          <a 
            href="https://zoom.us" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 hover:bg-white/20 transition-all border border-white/10 hover:border-accent group"
          >
            <Video className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-accent group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2">Zoom</h3>
            <p className="text-xs md:text-sm opacity-75">Созвон онлайн</p>
          </a>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 text-left">
            <div>
              <h3 className="font-bold mb-1 md:mb-2 text-accent text-sm md:text-base">Марина Погодина</h3>
              <p className="text-xs md:text-sm opacity-75">Основатель MAREN</p>
            </div>
            <div>
              <h3 className="font-bold mb-1 md:mb-2 text-accent text-sm md:text-base">Самозанятая</h3>
              <p className="text-xs md:text-sm opacity-75">Погодина Марина Юрьевна</p>
              <p className="text-xs md:text-sm opacity-75">ИНН 615427582507</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
