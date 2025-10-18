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

    try {
      // Send data to server
      const response = await fetch('https://writer.promaren.ru/clients.csv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || ''
        })
      });

      if (!response.ok) {
        throw new Error('Ошибка отправки данных');
      }

      // Save user data to localStorage
      const timestamp = new Date().toISOString();
      const userData = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        timestamp
      };
      
      // Get existing leads from localStorage
      const existingLeads = localStorage.getItem('maren_leads');
      const leads = existingLeads ? JSON.parse(existingLeads) : [];
      leads.push(userData);
      localStorage.setItem('maren_leads', JSON.stringify(leads));
      
      console.log('Данные отправлены на сервер и сохранены локально:', userData);

      // Trigger PDF download
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = '/assets/MAREN_Zero-Touch-avtomatizirovannyj-kontent.pdf';
        link.download = 'MAREN_Zero-Touch-avtomatizirovannyj-kontent.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        toast({
          title: "✅ Готово!",
          description: "Скачивание файла запущено. Спасибо за Ваш интерес к MAREN.",
          duration: 5000,
        });
        
        setFormData({ name: '', email: '', company: '' });
        setConsentChecked(false);
        setIsSubmitting(false);
      }, 500);
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
      toast({
        title: "Ошибка",
        description: "Не удалось отправить данные. Попробуйте еще раз.",
        variant: "destructive"
      });
      setIsSubmitting(false);
    }
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
