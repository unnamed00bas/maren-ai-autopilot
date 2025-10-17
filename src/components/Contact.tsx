import { useState } from 'react';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ConsentCheckbox } from '@/components/ConsentCheckbox';
import { ScrollArea } from '@/components/ui/scroll-area';

export const Contact = () => {
  const [consentChecked, setConsentChecked] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [offerOpen, setOfferOpen] = useState(false);

  const handleExternalLink = (url: string) => {
    if (consentChecked) {
      window.open(url, '_blank');
    }
  };

  return (
    <>
      <section id="contact" className="section-container">
      <div className="max-w-6xl mx-auto">
        <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 md:p-16 border border-border shadow-lg">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
              Готовы <span className="bg-gradient-to-r from-[hsl(var(--lime))] to-[hsl(var(--cyan))] bg-clip-text text-transparent">вернуть</span> своё время?
            </h2>
            <p className="text-base md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>

          <div className="mb-8 max-w-md mx-auto">
            <ConsentCheckbox
              checked={consentChecked}
              onCheckedChange={setConsentChecked}
              onPrivacyClick={() => setPrivacyOpen(true)}
              onOfferClick={() => setOfferOpen(true)}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12 md:mb-16 max-w-4xl mx-auto">
            <button
              onClick={() => handleExternalLink('https://t.me/promaren_support_bot?text=Заказать+опцию+%22Готовы+вернуть+своё+время%22+%28бесплатная+15-минутная+консультация%29')}
              disabled={!consentChecked}
              className="group bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:bg-accent/10 transition-all border border-border hover:border-accent hover:shadow-[0_0_20px_hsl(var(--lime)/0.2)] hover:-translate-y-1 duration-300 w-full sm:w-auto sm:min-w-[180px] sm:max-w-[200px] text-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none disabled:hover:shadow-none"
            >
              <MessageCircle className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 text-accent group-hover:scale-110 group-hover:animate-[wiggle_0.5s_ease-in-out_infinite] transition-transform" />
              <h3 className="font-bold text-xl md:text-2xl">Telegram</h3>
            </button>

            <button
              onClick={() => handleExternalLink('mailto:Marina.Y.Pogodina@yandex.ru')}
              disabled={!consentChecked}
              className="group bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:bg-cyan/10 transition-all border border-border hover:border-cyan hover:shadow-[0_0_20px_hsl(var(--cyan)/0.2)] hover:-translate-y-1 duration-300 w-full sm:w-auto sm:min-w-[180px] sm:max-w-[200px] text-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none disabled:hover:shadow-none"
            >
              <Mail className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 text-cyan group-hover:scale-110 group-hover:animate-[wiggle_0.5s_ease-in-out_infinite] transition-transform" />
              <h3 className="font-bold text-xl md:text-2xl">Email</h3>
            </button>

            <button
              onClick={() => handleExternalLink('tel:+79032355551')}
              disabled={!consentChecked}
              className="group bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:bg-accent/10 transition-all border border-border hover:border-accent hover:shadow-[0_0_20px_hsl(var(--lime)/0.2)] hover:-translate-y-1 duration-300 w-full sm:w-auto sm:min-w-[180px] sm:max-w-[200px] text-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none disabled:hover:shadow-none"
            >
              <Phone className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 text-accent group-hover:scale-110 group-hover:animate-[wiggle_0.5s_ease-in-out_infinite] transition-transform" />
              <h3 className="font-bold text-xl md:text-2xl">Телефон</h3>
            </button>
          </div>

          <div className="bg-muted/30 backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-border/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
              <div className="text-center md:text-left">
                <h3 className="font-bold mb-2 text-accent text-lg md:text-xl">Марина Погодина</h3>
                <p className="text-sm md:text-base text-muted-foreground">Основатель MAREN</p>
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-bold mb-2 text-accent text-lg md:text-xl">Самозанятая</h3>
                <p className="text-sm md:text-base text-muted-foreground">Погодина Марина Юрьевна</p>
                <p className="text-sm md:text-base text-muted-foreground">ИНН 615427582507</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

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
