import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ExternalLink, Clock } from 'lucide-react';

interface DemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const DemoModal = ({ open, onOpenChange }: DemoModalProps) => {
  const handleDemo24 = () => {
    window.open('https://t.me/promaren_support_bot?text=Заказать+Демо+Ассистента+на+24+ч+за+999+р', '_blank');
  };

  const handleBook15 = () => {
    window.open('https://t.me/promaren_support_bot?text=Записаться+на+15-минутный+созвон+бесплатно', '_blank');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl">
            Попробовать <span className="text-accent">MAREN</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-4 md:py-6">
          <div className="bg-card border border-accent/30 rounded-xl p-4 md:p-6 space-y-3 md:space-y-4">
            <div className="flex items-start gap-3 md:gap-4">
              <div className="p-2 md:p-3 bg-accent/10 rounded-xl flex-shrink-0">
                <Clock className="w-5 h-5 md:w-6 md:h-6 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2">Демо-доступ 24 часа</h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                  Полный доступ к ассистенту на сутки. Проверьте возможности на реальных задачах.
                </p>
                <div className="flex items-baseline gap-2 mb-3 md:mb-4">
                  <span className="text-2xl md:text-3xl font-black text-accent">999 ₽</span>
                  <span className="text-sm md:text-base text-muted-foreground">за 24 часа</span>
                </div>
                <Button 
                  onClick={handleDemo24}
                  className="w-full btn-hero text-sm md:text-base"
                >
                  <ExternalLink className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                  Активировать через бота
                </Button>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">или</span>
            </div>
          </div>

          <div className="bg-muted/50 rounded-xl p-4 md:p-6 space-y-3 md:space-y-4">
            <h3 className="font-bold text-base md:text-lg">Консультация 15 минут</h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              Обсудим ваши задачи и подберём оптимальное решение. Бесплатно.
            </p>
            <Button 
              onClick={handleBook15}
              variant="outline"
              className="w-full text-sm md:text-base"
            >
              <ExternalLink className="w-3 h-3 md:w-4 md:h-4 mr-2" />
              Записаться на созвон
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
