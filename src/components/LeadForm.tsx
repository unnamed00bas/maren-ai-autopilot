import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { ConsentCheckbox } from './ConsentCheckbox';

interface LeadFormProps {
  onPrivacyClick: () => void;
  onOfferClick: () => void;
}

export const LeadForm = ({ onPrivacyClick, onOfferClick }: LeadFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });
  const [consentChecked, setConsentChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!consentChecked) {
      toast({
        title: "Требуется согласие",
        description: "Пожалуйста, подтвердите согласие на обработку персональных данных",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "✅ Готово!",
        description: "Проверьте почту — ссылка на материал уже там.",
        duration: 5000,
      });
      
      setFormData({ name: '', email: '', company: '' });
      setConsentChecked(false);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="bg-cyan/5 rounded-3xl p-8 md:p-12 shadow-lg border-2 border-cyan/20 relative overflow-hidden">
          <div className="absolute top-3 right-3 md:top-4 md:right-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-cyan/10 border border-cyan/20">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse"></span>
              <span className="text-xs md:text-sm font-medium text-cyan">ИДЕТ ПИЛОТ</span>
            </div>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8 md:mb-10">
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-cyan/10 mb-4 md:mb-6">
                <FileText className="w-6 h-6 md:w-8 md:h-8 text-cyan" />
              </div>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
                Получите PDF-дорожную карту
              </h2>
              <p className="text-sm md:text-base text-muted-foreground">
                Узнайте, как внедрить MAREN за 30–60–90 дней
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm md:text-base">Имя *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-10 md:h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-sm md:text-base">Компания</Label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Название компании"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="h-10 md:h-11"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm md:text-base">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-10 md:h-11"
                />
              </div>

              <div className="pl-10">
                <ConsentCheckbox
                  checked={consentChecked}
                  onCheckedChange={setConsentChecked}
                  onPrivacyClick={onPrivacyClick}
                  onOfferClick={onOfferClick}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || !consentChecked}
                className="w-full btn-hero h-11 md:h-12 text-base md:text-lg"
              >
                {isSubmitting ? 'Отправка...' : 'Получить PDF-дорожную карту'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
