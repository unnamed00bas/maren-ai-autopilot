import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ExternalLink, Clock } from 'lucide-react';

interface DemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const DemoModal = ({ open, onOpenChange }: DemoModalProps) => {
  const handleDemo24 = () => {
    window.open('https://t.me/promaren_bot?start=demo24', '_blank');
  };

  const handleBook15 = () => {
    window.open('https://t.me/promaren_bot?start=book', '_blank');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            Попробовать <span className="text-accent">MAREN</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-6">
          <div className="bg-card border border-accent/30 rounded-xl p-6 space-y-4">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-xl">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2">Демо-доступ 24 часа</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Полный доступ к ассистенту на сутки. Проверьте возможности на реальных задачах.
                </p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-black text-accent">999 ₽</span>
                  <span className="text-muted-foreground">за 24 часа</span>
                </div>
                <Button 
                  onClick={handleDemo24}
                  className="w-full btn-hero"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
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

          <div className="bg-muted/50 rounded-xl p-6 space-y-4">
            <h3 className="font-bold text-lg">Консультация 15 минут</h3>
            <p className="text-sm text-muted-foreground">
              Обсудим ваши задачи и подберём оптимальное решение. Бесплатно.
            </p>
            <Button 
              onClick={handleBook15}
              variant="outline"
              className="w-full"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Записаться на созвон
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
