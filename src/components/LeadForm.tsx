import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';
import { FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface LeadFormProps {}

export const LeadForm = ({}: LeadFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreedToPolicy, setAgreedToPolicy] = useState(false);
  const [policyOpen, setPolicyOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreedToPolicy) {
      toast({
        title: "Требуется согласие",
        description: "Пожалуйста, согласитесь с Политикой обработки данных",
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

              <div className="flex items-start gap-3 mb-4">
                <Checkbox
                  id="policy-consent"
                  checked={agreedToPolicy}
                  onCheckedChange={(checked) => setAgreedToPolicy(checked as boolean)}
                />
                <Label
                  htmlFor="policy-consent"
                  className="text-sm leading-relaxed cursor-pointer"
                >
                  Согласен с{' '}
                  <button
                    type="button"
                    onClick={() => setPolicyOpen(true)}
                    className="text-accent hover:text-accent/80 underline transition-colors"
                  >
                    Политикой обработки данных
                  </button>
                </Label>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-hero h-auto min-h-[48px] text-sm sm:text-base md:text-lg py-3"
              >
                {isSubmitting ? 'Отправка...' : 'Получить PDF-дорожную карту'}
              </Button>
            </form>
          </div>
        </div>
      </div>

      <Dialog open={policyOpen} onOpenChange={setPolicyOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh]">
          <DialogHeader>
            <DialogTitle className="text-2xl">Политика обработки персональных данных</DialogTitle>
            <DialogDescription>
              Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="h-[60vh] pr-4">
            <div className="space-y-6 text-sm">
              <section>
                <h3 className="font-semibold text-base mb-2">1. Общие положения</h3>
                <p className="text-muted-foreground">
                  Настоящая Политика определяет порядок обработки и защиты персональных данных пользователей сервиса MAREN. 
                  Мы обрабатываем данные в соответствии с Федеральным законом от 27.07.2006 N 152-ФЗ "О персональных данных".
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-base mb-2">2. Цели обработки персональных данных</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Предоставление доступа к продуктам и услугам MAREN</li>
                  <li>Улучшение качества обслуживания</li>
                  <li>Отправка информационных материалов</li>
                  <li>Обратная связь с пользователями</li>
                </ul>
              </section>

              <section>
                <h3 className="font-semibold text-base mb-2">3. Состав персональных данных</h3>
                <p className="text-muted-foreground mb-2">Мы собираем следующие данные:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Имя и фамилия</li>
                  <li>Адрес электронной почты</li>
                  <li>Название компании</li>
                  <li>Данные об использовании сервиса</li>
                </ul>
              </section>

              <section>
                <h3 className="font-semibold text-base mb-2">4. Правовые основания обработки</h3>
                <p className="text-muted-foreground">
                  Обработка персональных данных осуществляется на основании согласия субъекта персональных данных, 
                  а также для исполнения договорных обязательств.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-base mb-2">5. Принципы обработки данных</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Законность и справедливость обработки</li>
                  <li>Ограничение обработки достижением конкретных целей</li>
                  <li>Недопустимость избыточной обработки</li>
                  <li>Обеспечение точности и актуальности данных</li>
                  <li>Хранение данных не дольше необходимого срока</li>
                  <li>Обеспечение безопасности данных</li>
                </ul>
              </section>

              <section>
                <h3 className="font-semibold text-base mb-2">6. Права субъекта персональных данных</h3>
                <p className="text-muted-foreground mb-2">Вы имеете право:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Получать информацию об обработке ваших данных</li>
                  <li>Требовать уточнения, блокирования или удаления данных</li>
                  <li>Отозвать согласие на обработку данных</li>
                  <li>Обжаловать действия или бездействие оператора</li>
                </ul>
              </section>

              <section>
                <h3 className="font-semibold text-base mb-2">7. Передача данных третьим лицам</h3>
                <p className="text-muted-foreground">
                  Мы не передаем ваши персональные данные третьим лицам, за исключением случаев, предусмотренных 
                  законодательством или с вашего согласия.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-base mb-2">8. Изменение политики</h3>
                <p className="text-muted-foreground">
                  Мы оставляем за собой право вносить изменения в настоящую Политику. Актуальная версия всегда 
                  доступна на нашем сайте.
                </p>
              </section>

              <section className="pt-4 border-t">
                <p className="text-muted-foreground">
                  По вопросам обработки персональных данных обращайтесь:{' '}
                  <a href="mailto:hello@promaren.ru" className="text-accent hover:underline">
                    hello@promaren.ru
                  </a>
                </p>
              </section>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </section>
  );
};
