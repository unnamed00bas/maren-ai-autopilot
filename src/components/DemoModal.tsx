import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ExternalLink, Clock } from 'lucide-react';
import { ConsentCheckbox } from '@/components/ConsentCheckbox';
import { ScrollArea } from '@/components/ui/scroll-area';

interface DemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const DemoModal = ({ open, onOpenChange }: DemoModalProps) => {
  const [consentChecked, setConsentChecked] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [offerOpen, setOfferOpen] = useState(false);

  const handleDemo24 = () => {
    if (consentChecked) {
      window.open('https://t.me/promaren_support_bot?text=Заказать+Демо+Ассистента+на+24+ч+за+999+р', '_blank');
    }
  };

  const handleBook15 = () => {
    if (consentChecked) {
      window.open('https://t.me/promaren_support_bot?text=Записаться+на+15-минутный+созвон+бесплатно', '_blank');
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl md:text-2xl">
              Попробовать <span className="text-accent">MAREN</span>
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-4 md:py-6">
            <div className="pl-10">
              <ConsentCheckbox
                checked={consentChecked}
                onCheckedChange={setConsentChecked}
                onPrivacyClick={() => setPrivacyOpen(true)}
                onOfferClick={() => setOfferOpen(true)}
              />
            </div>
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
                  disabled={!consentChecked}
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
              disabled={!consentChecked}
            >
              <ExternalLink className="w-3 h-3 md:w-4 md:h-4 mr-2" />
              Записаться на созвон
            </Button>
          </div>
        </div>
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
