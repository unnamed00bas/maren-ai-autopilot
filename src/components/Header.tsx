import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onCalcClick: () => void;
  onDemoClick: () => void;
}

export const Header = ({ onCalcClick, onDemoClick }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <a href="/">
              <img src="/assets/maren-wordmark-lime.svg" alt="MAREN — ассистент 24/7" className="logo h-10" />
            </a>
            <Button 
              asChild
              className="hidden sm:inline-flex px-3 py-1.5 rounded-lg bg-gradient-to-br from-cyan/20 to-cyan/5 border border-cyan/30 hover:from-cyan/30 hover:to-cyan/10 transition-all"
            >
              <a 
                href="https://t.me/promaren" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wide text-cyan">
                  Telegram канал
                </span>
              </a>
            </Button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-sm font-medium hover:text-accent transition-colors">
              Продукты
            </a>
            <a href="#faq" className="text-sm font-medium hover:text-accent transition-colors">
              FAQ
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-accent transition-colors">
              Цены
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">
              Контакты
            </a>
            <Button 
              asChild
              className="btn-hero"
            >
              <a 
                href="https://promaren.ru/blog/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Блог MAREN
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              <a 
                href="#products" 
                className="text-sm font-medium hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Продукты
              </a>
              <a 
                href="#faq" 
                className="text-sm font-medium hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <a 
                href="#pricing" 
                className="text-sm font-medium hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Цены
              </a>
              <a 
                href="#contact" 
                className="text-sm font-medium hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Контакты
              </a>
              <Button 
                asChild
                className="btn-hero w-full"
              >
                <a 
                  href="https://promaren.ru/blog/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Блог MAREN
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
