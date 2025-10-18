import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed right-6 bottom-24 z-50
        w-12 h-12 rounded-full
        bg-gradient-to-br from-cyan/20 to-lime/20
        border border-cyan/50
        backdrop-blur-sm
        flex items-center justify-center
        transition-all duration-300
        hover:scale-110 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]
        active:scale-95
        group
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
      `}
      aria-label="Вернуться наверх"
    >
      <ArrowUp className="w-5 h-5 text-cyan group-hover:text-lime transition-colors" />
    </button>
  );
};
