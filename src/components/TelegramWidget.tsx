import { useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

export const TelegramWidget = () => {
  useEffect(() => {
    // Load Telegram Widget script
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.async = true;
    script.setAttribute('data-telegram-post', 'promaren/latest');
    script.setAttribute('data-width', '100%');
    document.getElementById('telegram-widget-container')?.appendChild(script);
  }, []);

  const handleJoinChannel = () => {
    window.open('https://t.me/promaren', '_blank');
  };

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="bg-gradient-to-br from-card/90 to-card/50 backdrop-blur-xl border border-border/50 rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Header */}
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Новости и обновления MAREN
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Следите за последними новостями в нашем Telegram-канале
              </p>
            </div>

            {/* Telegram posts grid */}
            <div id="telegram-widget-container" className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Telegram widgets will be injected here */}
            </div>

            {/* Join button */}
            <div className="text-center pt-4">
              <button
                onClick={handleJoinChannel}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0088cc] to-[#0088cc]/80 hover:from-[#0088cc]/90 hover:to-[#0088cc]/70 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                <MessageCircle className="w-6 h-6" />
                Присоединиться к Telegram-каналу MAREN
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
