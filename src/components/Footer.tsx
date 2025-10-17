export const Footer = () => {
  return (
    <footer className="bg-muted/30">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pb-6 md:pb-8 border-b border-border/50">
          <div>
            <img src="/assets/maren-wordmark-lime.svg" alt="MAREN" className="h-10 md:h-12 w-auto mb-3 md:mb-4" />
            <p className="text-xs md:text-sm text-muted-foreground">
              Ассистент 24/7 и контент, который делает себя сам
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-3 md:mb-4 text-sm md:text-base text-accent">Продукты</h3>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground">
              <li><a href="#products" className="hover:text-accent transition-colors">P1 — Audit</a></li>
              <li><a href="#products" className="hover:text-accent transition-colors">P2 — Assistant</a></li>
              <li><a href="#products" className="hover:text-accent transition-colors">P3 — Flow</a></li>
              <li><a href="#products" className="hover:text-accent transition-colors">P4 — GrowthOps</a></li>
              <li><a href="#products" className="hover:text-accent transition-colors">P5 — Cards</a></li>
              <li><a href="#products" className="hover:text-accent transition-colors">P6 — Minutes</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3 md:mb-4 text-sm md:text-base text-accent">Компания</h3>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground">
              <li><a href="#faq" className="hover:text-accent transition-colors">FAQ</a></li>
              <li><a href="#pricing" className="hover:text-accent transition-colors">Цены</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Контакты</a></li>
              <li><a href="#privacy" className="hover:text-accent transition-colors">Политика обработки данных</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 md:pt-8 text-center">
          <p className="text-xs md:text-sm text-muted-foreground">
            © {new Date().getFullYear()} MAREN. Все права защищены.
          </p>
          <p className="text-[10px] md:text-xs text-muted-foreground/60 mt-2">
            Погодина Марина Юрьевна, Самозанятая · ИНН 615427582507
          </p>
        </div>
      </div>
    </footer>
  );
};
