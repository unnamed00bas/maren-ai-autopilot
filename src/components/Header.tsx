import { useState } from 'react';
import { Logo } from './Logo';
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
          <div className="flex-shrink-0">
            <a href="/">
              <Logo variant="dark" size="sm" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-sm font-medium hover:text-accent transition-colors">
              Продукты
            </a>
            <a href="#faq" className="text-sm font-medium hover:text-accent transition-colors">
              FAQ
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">
              Контакты
            </a>
            <Button 
              variant="outline" 
              size="sm"
              onClick={onCalcClick}
            >
              Калькулятор
            </Button>
            <Button 
              size="sm"
              className="btn-hero"
              onClick={onDemoClick}
            >
              Демо
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
                href="#contact" 
                className="text-sm font-medium hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Контакты
              </a>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => {
                  onCalcClick();
                  setMobileMenuOpen(false);
                }}
                className="w-full"
              >
                Калькулятор
              </Button>
              <Button 
                size="sm"
                className="btn-hero w-full"
                onClick={() => {
                  onDemoClick();
                  setMobileMenuOpen(false);
                }}
              >
                Демо
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
