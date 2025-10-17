import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calculator, ExternalLink } from 'lucide-react';
import { ConsentCheckbox } from '@/components/ConsentCheckbox';
import { ScrollArea } from '@/components/ui/scroll-area';

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
  const [consentChecked, setConsentChecked] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [offerOpen, setOfferOpen] = useState(false);

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
    window.open('https://t.me/promaren_support_bot?text=Заказать+Демо+Ассистента+на+24+ч+за+999+р', '_blank');
  };

  return (
    <>
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
              <ConsentCheckbox
                checked={consentChecked}
                onCheckedChange={setConsentChecked}
                onPrivacyClick={() => setPrivacyOpen(true)}
                onOfferClick={() => setOfferOpen(true)}
              />
              <Button 
                onClick={handleDemo}
                className="w-full btn-hero"
                disabled={!consentChecked}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Запросить демо
              </Button>
              <Button 
                variant="outline"
                onClick={() => {
                  setResult(null);
                  setConsentChecked(false);
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
