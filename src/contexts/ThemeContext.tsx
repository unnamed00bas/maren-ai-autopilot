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
  // Lock to MAREN Classic (default) and light mode
  const [colorScheme] = useState<ColorScheme>('default');
  const [isDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const scheme = colorSchemes['default'];
    root.style.setProperty('--theme-primary', scheme.primary);
    root.style.setProperty('--theme-secondary', scheme.secondary);
    root.style.setProperty('--theme-accent', scheme.accent);
    root.classList.remove('dark');
    root.style.setProperty('--theme-background', scheme.background);
    root.style.setProperty('--theme-foreground', scheme.foreground);
  }, []);

  const noop = () => {};

  return (
    <ThemeContext.Provider value={{ colorScheme, setColorScheme: noop as any, isDark, toggleDarkMode: noop }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { colorSchemes };
