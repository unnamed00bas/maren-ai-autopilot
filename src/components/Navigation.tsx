import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavigationProps {
  onCalcClick: () => void;
  onDemoClick: () => void;
}

const navigationItems = [
  { href: '#products', label: 'Продукты' },
  { href: '#faq', label: 'FAQ' },
  { href: '#pricing', label: 'Цены' },
  { href: '#contact', label: 'Контакты' },
];

export const Navigation = ({ onCalcClick, onDemoClick }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-lg' 
        : 'bg-background/80 backdrop-blur-lg border-b border-border/50'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-4">
            <a href="/" className="group">
              <img 
                src="/assets/maren-wordmark-lime.svg" 
                alt="MAREN — AI-ассистент 24/7 для автоматизации контента" 
                className="logo h-10 group-hover:scale-105 transition-transform duration-300" 
              />
            </a>
            
            {/* Quick action buttons */}
            <div className="hidden sm:flex items-center gap-2">
              <Button 
                asChild
                className="px-3 py-1.5 rounded-lg bg-[hsl(189,90%,85%)] border border-cyan/30 hover:bg-[hsl(189,90%,75%)] transition-all group"
              >
                <a 
                  href="https://t.me/promaren" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <div className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wide text-[hsl(189,94%,30%)]">
                    Telegram канал
                  </span>
                </a>
              </Button>
              
              <Button 
                asChild
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
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
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-sm font-medium hover:text-accent transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative"
            >
              <div className="relative w-6 h-6">
                <Menu 
                  className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                    mobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                  }`} 
                />
                <X 
                  className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                    mobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                  }`} 
                />
              </div>
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-border/50">
            <div className="space-y-4">
              {navigationItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="block text-sm font-medium hover:text-accent transition-colors py-2 px-4 rounded-lg hover:bg-accent/5"
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    animation: mobileMenuOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
                  }}
                >
                  {item.label}
                </a>
              ))}
              
              {/* Mobile CTA buttons */}
              <div className="pt-4 border-t border-border/30 space-y-3">
                <Button 
                  onClick={() => {
                    onDemoClick();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full btn-hero"
                >
                  Получить демо 24 часа
                </Button>
                <Button 
                  onClick={() => {
                    onCalcClick();
                    setMobileMenuOpen(false);
                  }}
                  variant="outline"
                  className="w-full"
                >
                  Посчитать экономию времени
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
};
