import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-background/95 backdrop-blur-lg border-t border-border shadow-lg animate-in slide-in-from-bottom duration-500">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
          <div className="flex-1">
            <h3 className="font-bold text-base md:text-lg mb-2">Мы используем 🍪</h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              Этот сайт использует cookies для улучшения пользовательского опыта и аналитики.
            </p>
          </div>
          
          <div className="flex gap-3 w-full md:w-auto min-w-[240px]">
            <Button
              onClick={handleAccept}
              className="flex-1 btn-hero h-8"
              size="sm"
            >
              Принять
            </Button>
            <Button
              onClick={handleDecline}
              variant="outline"
              className="flex-1 h-9"
              size="sm"
            >
              Отклонить
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
