import React, { useState } from 'react';
import { Palette, Moon, Sun, ChevronDown } from 'lucide-react';
import { useTheme, colorSchemes } from '@/contexts/ThemeContext';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Badge } from './ui/badge';

export const ThemeSwitcher: React.FC = () => {
  const { colorScheme, setColorScheme, isDark, toggleDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const currentScheme = colorSchemes[colorScheme];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="relative group hover:bg-accent/10 transition-all duration-300"
        >
          <Palette className="w-4 h-4 mr-2" />
          <span className="hidden sm:inline">Тема</span>
          <ChevronDown className="w-3 h-3 ml-1 group-hover:rotate-180 transition-transform" />
        </Button>
      </DialogTrigger>
      
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Palette className="w-5 h-5" />
            Выберите цветовую схему
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Dark mode toggle */}
          <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-3">
              {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              <div>
                <div className="font-medium">Темный режим</div>
                <div className="text-sm text-muted-foreground">
                  {isDark ? 'Включен' : 'Выключен'}
                </div>
              </div>
            </div>
            <Button
              variant={isDark ? "default" : "outline"}
              size="sm"
              onClick={toggleDarkMode}
              className="transition-all duration-300"
            >
              {isDark ? 'Выключить' : 'Включить'}
            </Button>
          </div>

          {/* Color schemes */}
          <div className="space-y-2">
            <h4 className="font-medium text-sm text-muted-foreground">Цветовые схемы</h4>
            <div className="grid grid-cols-1 gap-2">
              {Object.entries(colorSchemes).map(([key, scheme]) => (
                <button
                  key={key}
                  onClick={() => {
                    setColorScheme(key as any);
                    setIsOpen(false);
                  }}
                  className={`p-3 rounded-lg border-2 transition-all duration-300 text-left group hover:scale-[1.02] ${
                    colorScheme === key
                      ? 'border-accent bg-accent/10 shadow-md'
                      : 'border-border hover:border-accent/50 hover:bg-accent/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {/* Color preview */}
                    <div className="flex gap-1">
                      <div
                        className="w-4 h-4 rounded-full border border-border/50"
                        style={{ backgroundColor: scheme.primary }}
                      />
                      <div
                        className="w-4 h-4 rounded-full border border-border/50"
                        style={{ backgroundColor: scheme.secondary }}
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="font-medium text-sm">{scheme.name}</div>
                      <div className="text-xs text-muted-foreground">{scheme.description}</div>
                    </div>
                    
                    {colorScheme === key && (
                      <Badge variant="secondary" className="text-xs">
                        Активна
                      </Badge>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Current theme info */}
          <div className="p-3 bg-muted/30 rounded-lg">
            <div className="text-sm font-medium mb-2">Текущая тема</div>
            <div className="text-xs text-muted-foreground">
              {currentScheme.name} • {isDark ? 'Темный режим' : 'Светлый режим'}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
