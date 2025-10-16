import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer className="bg-graphite text-white">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8 pb-8 border-b border-white/10">
          <div>
            <Logo variant="light" size="md" />
            <p className="mt-4 text-sm opacity-75">
              Ассистент 24/7 и контент, который делает себя сам
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Продукты</h3>
            <ul className="space-y-2 text-sm opacity-75">
              <li><a href="#products" className="hover:text-accent transition-colors">Assistant</a></li>
              <li><a href="#products" className="hover:text-accent transition-colors">Flow</a></li>
              <li><a href="#products" className="hover:text-accent transition-colors">GrowthOps</a></li>
              <li><a href="#products" className="hover:text-accent transition-colors">Cards</a></li>
              <li><a href="#products" className="hover:text-accent transition-colors">Audit</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Компания</h3>
            <ul className="space-y-2 text-sm opacity-75">
              <li><a href="#faq" className="hover:text-accent transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Контакты</a></li>
              <li><a href="#privacy" className="hover:text-accent transition-colors">Политика обработки данных</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 text-center">
          <p className="text-sm opacity-75">
            © {new Date().getFullYear()} MAREN. Все права защищены.
          </p>
          <p className="text-xs opacity-50 mt-2">
            Погодина Марина Юрьевна, самозанятая · ИНН 615427582507
          </p>
        </div>
      </div>
    </footer>
  );
};
