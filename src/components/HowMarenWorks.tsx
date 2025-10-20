import { useState } from 'react';
import { Shield, Mail, MessageCircle, Phone, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';
import { useToast } from '@/hooks/use-toast';
import marinaPogodina from '@/assets/marina-pogodina.jpg';

export const HowMarenWorks = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreedToPolicy, setAgreedToPolicy] = useState(false);
  const [policyOpen, setPolicyOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [offerOpen, setOfferOpen] = useState(false);

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

      const timestamp = new Date().toISOString();
      const userData = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        timestamp
      };
      
      const existingLeads = localStorage.getItem('maren_leads');
      const leads = existingLeads ? JSON.parse(existingLeads) : [];
      leads.push(userData);
      localStorage.setItem('maren_leads', JSON.stringify(leads));

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
      toast({
        title: "Ошибка",
        description: "Не удалось отправить данные. Попробуйте еще раз.",
        variant: "destructive"
      });
      setIsSubmitting(false);
    }
  };

  const handleExternalLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <>
      <section className="section-padding">
        <div className="section-container">
          <div className="bg-gradient-to-br from-card/90 to-card/50 backdrop-blur-xl border border-border/50 rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">
              
              {/* Main title */}
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Как работает MAREN
                </h2>
              </div>

              {/* AI под контролем */}
              <div className="bg-muted/30 rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                  AI под контролем. Люди под защитой.
                </h3>
                <div className="grid gap-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">1</span>
                    <p className="pt-1">MAREN работает в white-data-зоне.</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">2</span>
                    <p className="pt-1">Все процессы соответствуют требованиям 152-ФЗ, ISO/IEC 27001 и принципам прозрачного AI Governance.</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">3</span>
                    <p className="pt-1">Мы не используем «серые» данные и ведём аудит логов всех действий ассистента.</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">4</span>
                    <p className="pt-1">Каждое решение можно проверить, каждое действие — восстановить.</p>
                  </div>
                </div>
              </div>

              {/* Кто стоит за MAREN */}
              <div className="bg-muted/30 rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                  Кто стоит за MAREN
                </h3>
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
                  <div className="flex-shrink-0 flex flex-col items-center gap-3">
                    <img 
                      src={marinaPogodina} 
                      alt="Марина Погодина" 
                      className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-accent/20"
                    />
                    <a 
                      href="https://www.linkedin.com/in/marinapogodina" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 px-4 py-2 bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 border border-[#0A66C2]/30 hover:border-[#0A66C2]/50 rounded-lg transition-all duration-300"
                      aria-label="LinkedIn профиль Марины Погодиной"
                    >
                      <Linkedin className="w-6 h-6 text-[#0A66C2]" />
                      <span className="text-sm font-semibold text-[#0A66C2]">LinkedIn</span>
                    </a>
                  </div>
                  <div className="flex-1 space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                    <p>
                      <span className="font-semibold text-foreground">Марина Погодина</span>, основатель MAREN и AI Governance & Automation Lead.
                    </p>
                    <div className="space-y-2">
                      <div className="flex gap-3">
                        <span className="text-accent mt-1">•</span>
                        <p>16+ лет в управлении ИТ- и ИБ-рисками, внутреннем аудите, комплаенсе и автоматизации</p>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-accent mt-1">•</span>
                        <p>Проводила аудиты по стандартам SOX, COBIT 2019, COSO, ISO/IEC 27001 и 152-ФЗ</p>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-accent mt-1">•</span>
                        <p>Внедряла BI-дашборды, Python-скрипты и «one-click» отчётность для Набсовета и топ-менеджмента</p>
                      </div>
                    </div>
                    <p className="pt-2">
                      Сегодня соединяю опыт аудита и AI-технологий, чтобы бизнес возвращал себе время и контроль — без хаоса и «чёрных ящиков».
                    </p>
                    <p className="font-bold text-lg md:text-xl text-accent pt-2">
                      MAREN — это этичная автоматизация, где AI работает на людей, а не вместо них.
                    </p>
                  </div>
                </div>
              </div>

              {/* Гарантии и прозрачность */}
              <div className="bg-muted/30 rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                  Гарантии и прозрачность
                </h3>
                <div className="space-y-3 text-base md:text-lg text-muted-foreground leading-relaxed">
                  <div className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <p><span className="font-semibold text-foreground">White-data-архитектура:</span> все данные обрабатываются и хранятся в РФ.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <p><span className="font-semibold text-foreground">Полный аудит логов:</span> каждый пайплайн прозрачен и контролируем.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <p><span className="font-semibold text-foreground">152-ФЗ и GDPR-совместимость:</span> только согласованные данные и минимизация рисков.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <p><span className="font-semibold text-foreground">Этичная автоматизация:</span> человек — в центре контроля, AI — в роли инструмента.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <p><span className="font-semibold text-foreground">Безопасность по стандартам:</span> ISO/IEC 27001, COBIT 2019, COSO.</p>
                  </div>
                  <p className="pt-4">
                    Ознакомьтесь с{' '}
                    <button
                      onClick={() => setPrivacyOpen(true)}
                      className="text-accent hover:text-accent/80 underline decoration-accent/30 hover:decoration-accent/60 underline-offset-2 transition-all font-semibold"
                    >
                      Политикой обработки данных
                    </button>
                    {' '}и{' '}
                    <button
                      onClick={() => setOfferOpen(true)}
                      className="text-accent hover:text-accent/80 underline decoration-accent/30 hover:decoration-accent/60 underline-offset-2 transition-all font-semibold"
                    >
                      Публичной офертой
                    </button>
                    .
                  </p>
                </div>
              </div>

              {/* LeadForm integration */}
              <div className="bg-cyan/5 rounded-2xl p-6 md:p-8 border border-cyan/20">
                <div className="max-w-2xl mx-auto">
                  <div className="text-center mb-6 md:mb-8">
                    <p className="text-xl md:text-2xl font-semibold mb-4">
                      В знак благодарности за интерес к MAREN —
                    </p>
                    <p className="text-lg md:text-xl text-muted-foreground">
                      забирайте PDF-гайд-дорожную карту по росту метрик, охватов и освобождению личного времени. Узнайте, как внедрить MAREN за 30–60–90 дней.
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

                    <div className="flex items-start gap-2 md:gap-3">
                      <Checkbox
                        id="policy"
                        checked={agreedToPolicy}
                        onCheckedChange={(checked) => setAgreedToPolicy(checked as boolean)}
                        className="mt-1"
                      />
                      <label
                        htmlFor="policy"
                        className="text-xs md:text-sm text-muted-foreground leading-tight cursor-pointer"
                      >
                        Согласен с{' '}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            setPolicyOpen(true);
                          }}
                          className="text-accent hover:text-accent/80 underline underline-offset-2"
                        >
                          Политикой обработки данных
                        </button>
                      </label>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-auto min-h-[48px] text-sm sm:text-base md:text-lg py-3"
                    >
                      {isSubmitting ? 'Отправка...' : 'Получить дорожную карту'}
                    </Button>
                  </form>
                </div>
              </div>

              {/* Contact buttons */}
              <div id="contact" className="bg-muted/30 rounded-2xl p-6 md:p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    Готовы <span className="bg-gradient-to-r from-[hsl(var(--lime))] to-[hsl(var(--cyan))] bg-clip-text text-transparent">ВЕРНУТЬ</span> своё время?
                  </h3>
                  <p className="text-lg md:text-xl text-muted-foreground mt-4">
                    Выберите удобный способ связи
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
                  <button
                    onClick={() => handleExternalLink('https://t.me/promaren_support_bot?text=Заказать+опцию+%22Готовы+вернуть+своё+время%22+%28бесплатная+15-минутная+консультация%29')}
                    className="group relative overflow-hidden bg-gradient-to-br from-card to-card/80 rounded-2xl p-4 sm:p-6 border border-border/50 hover:border-accent/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-accent/10"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative flex flex-col items-center gap-3">
                      <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                        <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                      </div>
                      <h3 className="font-semibold text-base sm:text-lg">Telegram</h3>
                    </div>
                  </button>

                  <button
                    onClick={() => handleExternalLink('mailto:Marina.Y.Pogodina@yandex.ru')}
                    className="group relative overflow-hidden bg-gradient-to-br from-card to-card/80 rounded-2xl p-4 sm:p-6 border border-border/50 hover:border-cyan/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan/10"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan/0 to-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative flex flex-col items-center gap-3">
                      <div className="p-3 bg-cyan/10 rounded-xl group-hover:bg-cyan/20 transition-colors">
                        <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-cyan" />
                      </div>
                      <h3 className="font-semibold text-base sm:text-lg">Email</h3>
                    </div>
                  </button>

                  <button
                    onClick={() => handleExternalLink('tel:+79032355551')}
                    className="group relative overflow-hidden bg-gradient-to-br from-card to-card/80 rounded-2xl p-4 sm:p-6 border border-border/50 hover:border-accent/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-accent/10"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative flex flex-col items-center gap-3">
                      <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                        <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                      </div>
                      <h3 className="font-semibold text-base sm:text-lg">Телефон</h3>
                    </div>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Dialog */}
      <Dialog open={policyOpen} onOpenChange={setPolicyOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh]">
          <DialogHeader>
            <DialogTitle>Политика обработки персональных данных</DialogTitle>
          </DialogHeader>
          <ScrollArea className="h-[60vh] pr-4">
            <div className="space-y-4 text-sm">
              <div>
                <h3 className="font-bold mb-2">1. Общие положения</h3>
                <p className="mb-2">Настоящая Политика разработана в соответствии с ФЗ-152 «О персональных данных» и определяет порядок обработки и защиты персональных данных пользователей сервисов MAREN.</p>
                <p>Оператором персональных данных является Погодина Марина Юрьевна, ИНН 772682056265, e-mail: Marina.Y.Pogodina@yandex.ru.</p>
              </div>

              <div>
                <h3 className="font-bold mb-2">2. Цели обработки персональных данных</h3>
                <ul className="list-disc pl-6">
                  <li>регистрация заявок и обратной связи;</li>
                  <li>предоставление доступа к демо и продуктам MAREN;</li>
                  <li>информирование о новых возможностях и обновлениях;</li>
                  <li>аналитика и улучшение качества сервиса.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2">3. Состав персональных данных</h3>
                <p>Оператор может обрабатывать следующие данные: имя, e-mail, номер телефона, наименование компании, должность, а также технические данные (IP-адрес, cookies, время посещения).</p>
              </div>

              <div>
                <h3 className="font-bold mb-2">4. Правовые основания обработки</h3>
                <p>Обработка осуществляется с согласия субъекта персональных данных (ст. 6 ФЗ-152), выраженного при отправке формы на сайте, в боте или при оплате услуг.</p>
              </div>

              <div>
                <h3 className="font-bold mb-2">5. Принципы и условия обработки</h3>
                <ul className="list-disc pl-6">
                  <li>обработка ведётся законно, добросовестно и ограничена достижением целей;</li>
                  <li>данные не передаются третьим лицам без согласия, кроме случаев, предусмотренных законом;</li>
                  <li>применяются меры защиты: шифрование, ограничение доступа, учёт операций;</li>
                  <li>срок хранения данных — не более 3 лет с момента последнего взаимодействия.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2">6. Права субъекта персональных данных</h3>
                <p className="mb-2">Пользователь вправе:</p>
                <ul className="list-disc pl-6">
                  <li>получать сведения об обработке своих данных;</li>
                  <li>требовать уточнения, блокировки или уничтожения данных;</li>
                  <li>отозвать согласие на обработку, направив запрос на Marina.Y.Pogodina@yandex.ru.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2">7. Передача данных</h3>
                <p>Передача возможна только операторам, обеспечивающим работу систем MAREN (хостинг, e-mail, Telegram API, CRM), при условии соблюдения конфиденциальности и соответствия 152-ФЗ.</p>
              </div>

              <div>
                <h3 className="font-bold mb-2">8. Изменение политики</h3>
                <p>Политика может обновляться. Актуальная версия всегда доступна на сайте promaren.ru.</p>
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      {/* Public Offer Dialog */}
      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh]">
          <DialogHeader>
            <DialogTitle>Политика обработки персональных данных</DialogTitle>
          </DialogHeader>
          <ScrollArea className="h-[60vh] pr-4">
            <div className="space-y-4 text-sm">
              <div>
                <h3 className="font-bold mb-2">1. Общие положения</h3>
                <p className="mb-2">Настоящая Политика разработана в соответствии с ФЗ-152 «О персональных данных» и определяет порядок обработки и защиты персональных данных пользователей сервисов MAREN.</p>
                <p>Оператором персональных данных является Погодина Марина Юрьевна, ИНН 772682056265, e-mail: Marina.Y.Pogodina@yandex.ru.</p>
              </div>

              <div>
                <h3 className="font-bold mb-2">2. Цели обработки персональных данных</h3>
                <ul className="list-disc pl-6">
                  <li>регистрация заявок и обратной связи;</li>
                  <li>предоставление доступа к демо и продуктам MAREN;</li>
                  <li>информирование о новых возможностях и обновлениях;</li>
                  <li>аналитика и улучшение качества сервиса.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2">3. Состав персональных данных</h3>
                <p>Оператор может обрабатывать следующие данные: имя, e-mail, номер телефона, наименование компании, должность, а также технические данные (IP-адрес, cookies, время посещения).</p>
              </div>

              <div>
                <h3 className="font-bold mb-2">4. Правовые основания обработки</h3>
                <p>Обработка осуществляется с согласия субъекта персональных данных (ст. 6 ФЗ-152), выраженного при отправке формы на сайте, в боте или при оплате услуг.</p>
              </div>

              <div>
                <h3 className="font-bold mb-2">5. Принципы и условия обработки</h3>
                <ul className="list-disc pl-6">
                  <li>обработка ведётся законно, добросовестно и ограничена достижением целей;</li>
                  <li>данные не передаются третьим лицам без согласия, кроме случаев, предусмотренных законом;</li>
                  <li>применяются меры защиты: шифрование, ограничение доступа, учёт операций;</li>
                  <li>срок хранения данных — не более 3 лет с момента последнего взаимодействия.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2">6. Права субъекта персональных данных</h3>
                <p className="mb-2">Пользователь вправе:</p>
                <ul className="list-disc pl-6">
                  <li>получать сведения об обработке своих данных;</li>
                  <li>требовать уточнения, блокировки или уничтожения данных;</li>
                  <li>отозвать согласие на обработку, направив запрос на Marina.Y.Pogodina@yandex.ru.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2">7. Передача данных</h3>
                <p>Передача возможна только операторам, обеспечивающим работу систем MAREN (хостинг, e-mail, Telegram API, CRM), при условии соблюдения конфиденциальности и соответствия 152-ФЗ.</p>
              </div>

              <div>
                <h3 className="font-bold mb-2">8. Изменение политики</h3>
                <p>Политика может обновляться. Актуальная версия всегда доступна на сайте promaren.ru.</p>
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      <Dialog open={offerOpen} onOpenChange={setOfferOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh]">
          <DialogHeader>
            <DialogTitle>Публичная оферта</DialogTitle>
          </DialogHeader>
          <ScrollArea className="h-[60vh] pr-4">
            <div className="space-y-4 text-sm">
              <p>Настоящая публичная оферта (далее — «Оферта») является официальным предложением самозанятого лица Погодиной Марины Юрьевны, ИНН 772682056265 (далее — «Исполнитель»), любому физическому или юридическому лицу (далее — «Заказчик») заключить договор на оказание услуг по созданию и автоматизации контента с использованием искусственного интеллекта под брендом MAREN на изложенных ниже условиях.</p>

              <div>
                <h3 className="font-bold mb-2">1. Предмет договора</h3>
                <p className="mb-2">1.1. Исполнитель оказывает Заказчику услуги по разработке, настройке и сопровождению AI-ассистентов, контент-пайплайнов и решений по автоматизации коммуникаций (далее — «Услуги»).</p>
                <p>1.2. Услуги предоставляются дистанционно, с использованием цифровых платформ и средств связи (веб-интерфейс, Telegram-бот, электронная почта, видеосвязь).</p>
              </div>

              <div>
                <h3 className="font-bold mb-2">2. Акцепт оферты</h3>
                <p className="mb-2">2.1. Акцептом признаётся любая из следующих действий Заказчика:</p>
                <ul className="list-disc pl-6 mb-2">
                  <li>оформление заявки на сайте promaren.ru;</li>
                  <li>оплата услуг;</li>
                  <li>подтверждение намерения получить демо или консультацию.</li>
                </ul>
                <p>2.2. Акцепт означает полное согласие с условиями настоящей Оферты.</p>
              </div>

              <div>
                <h3 className="font-bold mb-2">3. Права и обязанности сторон</h3>
                <p className="mb-2">3.1. Исполнитель обязуется:</p>
                <ul className="list-disc pl-6 mb-2">
                  <li>предоставлять Услуги качественно и в согласованные сроки;</li>
                  <li>обеспечивать конфиденциальность полученной от Заказчика информации;</li>
                  <li>соблюдать требования законодательства РФ о защите персональных данных (ФЗ-152) и об интеллектуальной собственности.</li>
                </ul>
                <p className="mb-2">3.2. Заказчик обязуется:</p>
                <ul className="list-disc pl-6">
                  <li>предоставлять достоверные данные, необходимые для оказания Услуг;</li>
                  <li>не передавать третьим лицам доступ к личному кабинету, демо или контент-системам MAREN;</li>
                  <li>своевременно оплачивать Услуги.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2">4. Стоимость и порядок оплаты</h3>
                <p className="mb-2">4.1. Стоимость Услуг указана на сайте Исполнителя или согласуется индивидуально.</p>
                <p className="mb-2">4.2. Оплата производится в рублях на счёт самозанятого через онлайн-сервис robokassa или переводы по реквизитам.</p>
                <p>4.3. После оплаты Заказчику направляется электронный чек от robokassa или электронный чек, сформированный через систему «Мой налог».</p>
              </div>

              <div>
                <h3 className="font-bold mb-2">5. Ответственность сторон</h3>
                <p className="mb-2">5.1. Исполнитель не несёт ответственность за сбои внешних сервисов (OpenAI, Telegram API, Gmail API и др.), если они повлияли на результат оказания Услуг.</p>
                <p>5.2. Ответственность Исполнителя ограничивается суммой, уплаченной Заказчиком за оказанные Услуги.</p>
              </div>

              <div>
                <h3 className="font-bold mb-2">6. Конфиденциальность и защита данных</h3>
                <p className="mb-2">6.1. Все персональные данные и материалы, предоставленные Заказчиком, используются исключительно для выполнения Услуг.</p>
                <p>6.2. Обработка данных осуществляется в рамках Политики обработки персональных данных.</p>
              </div>

              <div>
                <h3 className="font-bold mb-2">7. Заключительные положения</h3>
                <p className="mb-2">7.1. Настоящая Оферта вступает в силу с момента её опубликования и действует бессрочно.</p>
                <p className="mb-2">7.2. Исполнитель вправе изменять условия Оферты, публикуя обновлённую версию на сайте.</p>
                <p>7.3. К отношениям сторон применяется законодательство Российской Федерации.</p>
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
};