import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calculator, ExternalLink } from 'lucide-react';

interface CalcModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CalcModal = ({ open, onOpenChange }: CalcModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    niche: '',
    postsPerMonth: '',
    minutesPerPost: '',
    dialogsPerMonth: ''
  });
  
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const posts = parseInt(formData.postsPerMonth) || 0;
    const minutes = parseInt(formData.minutesPerPost) || 0;
    const dialogs = parseInt(formData.dialogsPerMonth) || 0;
    
    const hoursFromPosts = (posts * minutes) / 60;
    const hoursFromDialogs = dialogs * 0.25; // Предполагаем 15 мин на диалог
    
    const totalHoursPerMonth = hoursFromPosts + hoursFromDialogs;
    const savedPercentage = 0.75; // MAREN экономит 75%
    const hoursSaved = totalHoursPerMonth * savedPercentage;
    
    setResult(Math.round(hoursSaved));
  };

  const handleDemo = () => {
    window.open('https://t.me/promaren_bot', '_blank');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl md:text-2xl">
            <Calculator className="w-5 h-5 md:w-6 md:h-6 text-accent" />
            Калькулятор времени
          </DialogTitle>
        </DialogHeader>

        {result === null ? (
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Имя / Компания</Label>
              <Input 
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ваше имя"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="niche">Ниша</Label>
              <Input 
                id="niche"
                value={formData.niche}
                onChange={(e) => setFormData({ ...formData, niche: e.target.value })}
                placeholder="eCom, эксперт, агентство..."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="posts">Постов в месяц</Label>
              <Input 
                id="posts"
                type="number"
                value={formData.postsPerMonth}
                onChange={(e) => setFormData({ ...formData, postsPerMonth: e.target.value })}
                placeholder="30"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="minutes">Минут на пост</Label>
              <Input 
                id="minutes"
                type="number"
                value={formData.minutesPerPost}
                onChange={(e) => setFormData({ ...formData, minutesPerPost: e.target.value })}
                placeholder="45"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="dialogs">Диалогов в месяц (опционально)</Label>
              <Input 
                id="dialogs"
                type="number"
                value={formData.dialogsPerMonth}
                onChange={(e) => setFormData({ ...formData, dialogsPerMonth: e.target.value })}
                placeholder="50"
              />
            </div>

            <Button 
              onClick={calculate} 
              className="w-full btn-hero"
              disabled={!formData.name || !formData.postsPerMonth || !formData.minutesPerPost}
            >
              Посчитать
            </Button>
          </div>
        ) : (
          <div className="py-8 text-center space-y-6">
            <div className="space-y-2">
              <div className="text-6xl font-black text-accent">
                {result}
              </div>
              <div className="text-2xl font-bold">
                часов в месяц
              </div>
              <p className="text-muted-foreground">
                вы сможете вернуть с MAREN
              </p>
            </div>

            <div className="bg-muted/50 rounded-xl p-4 space-y-2">
              <div className="text-sm text-muted-foreground">
                Это примерно <span className="font-bold text-foreground">{Math.round(result / 20)} рабочих дней</span> в месяц!
              </div>
            </div>

            <div className="space-y-3">
              <Button 
                onClick={handleDemo}
                className="w-full btn-hero"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Запросить демо
              </Button>
              <Button 
                variant="outline"
                onClick={() => {
                  setResult(null);
                  setFormData({
                    name: '',
                    niche: '',
                    postsPerMonth: '',
                    minutesPerPost: '',
                    dialogsPerMonth: ''
                  });
                }}
                className="w-full"
              >
                Пересчитать
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
