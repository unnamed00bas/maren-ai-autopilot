import React, { createContext, useContext, useState, useEffect } from 'react';

export type ColorScheme = 'default' | 'ocean' | 'sunset' | 'forest' | 'purple' | 'minimal';

interface ThemeContextType {
  colorScheme: ColorScheme;
  setColorScheme: (scheme: ColorScheme) => void;
  isDark: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const colorSchemes = {
  default: {
    name: 'MAREN Classic',
    description: 'Оригинальная схема с лаймом и цианом',
    primary: 'hsl(82, 78%, 55%)', // lime
    secondary: 'hsl(189, 94%, 43%)', // cyan
    accent: 'hsl(82, 78%, 55%)',
    background: 'hsl(0, 0%, 100%)',
    foreground: 'hsl(217, 50%, 10%)',
  },
  ocean: {
    name: 'Ocean Blue',
    description: 'Морская тема с синими оттенками',
    primary: 'hsl(200, 100%, 50%)',
    secondary: 'hsl(180, 100%, 40%)',
    accent: 'hsl(200, 100%, 50%)',
    background: 'hsl(0, 0%, 100%)',
    foreground: 'hsl(217, 50%, 10%)',
  },
  sunset: {
    name: 'Sunset Orange',
    description: 'Теплые оранжевые тона заката',
    primary: 'hsl(25, 100%, 60%)',
    secondary: 'hsl(45, 100%, 55%)',
    accent: 'hsl(25, 100%, 60%)',
    background: 'hsl(0, 0%, 100%)',
    foreground: 'hsl(217, 50%, 10%)',
  },
  forest: {
    name: 'Forest Green',
    description: 'Природные зеленые оттенки',
    primary: 'hsl(120, 60%, 45%)',
    secondary: 'hsl(150, 60%, 40%)',
    accent: 'hsl(120, 60%, 45%)',
    background: 'hsl(0, 0%, 100%)',
    foreground: 'hsl(217, 50%, 10%)',
  },
  purple: {
    name: 'Purple Dream',
    description: 'Фиолетовая магическая схема',
    primary: 'hsl(270, 80%, 60%)',
    secondary: 'hsl(300, 80%, 55%)',
    accent: 'hsl(270, 80%, 60%)',
    background: 'hsl(0, 0%, 100%)',
    foreground: 'hsl(217, 50%, 10%)',
  },
  minimal: {
    name: 'Minimal Gray',
    description: 'Минималистичная серая схема',
    primary: 'hsl(0, 0%, 30%)',
    secondary: 'hsl(0, 0%, 50%)',
    accent: 'hsl(0, 0%, 30%)',
    background: 'hsl(0, 0%, 100%)',
    foreground: 'hsl(217, 50%, 10%)',
  },
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('default');
  const [isDark, setIsDark] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedScheme = localStorage.getItem('maren-color-scheme') as ColorScheme;
    const savedDarkMode = localStorage.getItem('maren-dark-mode') === 'true';
    
    if (savedScheme && colorSchemes[savedScheme]) {
      setColorScheme(savedScheme);
    }
    setIsDark(savedDarkMode);
  }, []);

  // Save theme to localStorage when changed
  useEffect(() => {
    localStorage.setItem('maren-color-scheme', colorScheme);
  }, [colorScheme]);

  useEffect(() => {
    localStorage.setItem('maren-dark-mode', isDark.toString());
  }, [isDark]);

  // Apply CSS custom properties
  useEffect(() => {
    const root = document.documentElement;
    const scheme = colorSchemes[colorScheme];
    
    root.style.setProperty('--theme-primary', scheme.primary);
    root.style.setProperty('--theme-secondary', scheme.secondary);
    root.style.setProperty('--theme-accent', scheme.accent);
    
    if (isDark) {
      root.classList.add('dark');
      root.style.setProperty('--theme-background', 'hsl(217, 50%, 10%)');
      root.style.setProperty('--theme-foreground', 'hsl(0, 0%, 100%)');
    } else {
      root.classList.remove('dark');
      root.style.setProperty('--theme-background', scheme.background);
      root.style.setProperty('--theme-foreground', scheme.foreground);
    }
  }, [colorScheme, isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ colorScheme, setColorScheme, isDark, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { colorSchemes };
