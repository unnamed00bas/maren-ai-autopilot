export const Footer = () => {
  return (
    <footer className="bg-graphite text-white">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pb-6 md:pb-8 border-b border-white/10">
          <div>
            <img src="/assets/maren-mono-dark.svg" alt="MAREN" className="h-10 md:h-12 w-auto mb-3 md:mb-4 brightness-0 invert" />
            <p className="text-xs md:text-sm opacity-75">
              Ассистент 24/7 и контент, который делает себя сам
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Продукты</h3>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm opacity-75">
              <li><a href="#products" className="hover:text-accent transition-colors">Assistant</a></li>
              <li><a href="#products" className="hover:text-accent transition-colors">Flow</a></li>
              <li><a href="#products" className="hover:text-accent transition-colors">GrowthOps</a></li>
              <li><a href="#products" className="hover:text-accent transition-colors">Cards</a></li>
              <li><a href="#products" className="hover:text-accent transition-colors">Audit</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Компания</h3>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm opacity-75">
              <li><a href="#faq" className="hover:text-accent transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Контакты</a></li>
              <li><a href="#privacy" className="hover:text-accent transition-colors">Политика обработки данных</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 md:pt-8 text-center">
          <p className="text-xs md:text-sm opacity-75">
            © {new Date().getFullYear()} MAREN. Все права защищены.
          </p>
          <p className="text-[10px] md:text-xs opacity-50 mt-2">
            Погодина Марина Юрьевна, Самозанятая · ИНН 615427582507
          </p>
        </div>
      </div>
    </footer>
  );
};
