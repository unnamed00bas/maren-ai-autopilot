import { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { ChevronDown, ChevronUp, ExternalLink, Play, Zap, Clock, TrendingUp } from 'lucide-react';

interface ProductCardProps {
  product: {
    id: string;
    icon: string;
    title: string;
    subtitle: string;
    description: string;
    effect: string;
    demoPrice?: string;
    demo?: string;
    demoAction?: { label: string; url: string };
    demos?: Array<{
      category: string;
      links: Array<{ text: string; url: string }>;
    }>;
    stack: string[];
    inDevelopment?: boolean;
    pilotBadge?: boolean;
    note?: string;
  };
  isExpanded: boolean;
  onToggle: () => void;
}

const getIconForProduct = (id: string) => {
  const iconMap: { [key: string]: any } = {
    'P1': Clock,
    'P2': Zap,
    'P3': TrendingUp,
    'P4': TrendingUp,
    'P5': TrendingUp,
    'P6': Clock,
  };
  return iconMap[id] || TrendingUp;
};

export const ProductCard = ({ product, isExpanded, onToggle }: ProductCardProps) => {
  const [hoveredDemo, setHoveredDemo] = useState<number | null>(null);
  const IconComponent = getIconForProduct(product.id);

  const renderDescription = (text: string) => {
    const parts = text.split('Meta*');
    if (parts.length === 1) return text;
    
    return (
      <>
        {parts[0]}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="underline decoration-dotted cursor-help">Meta*</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-xs">Meta Platforms Inc. — экстремистская организация, запрещена в РФ; WhatsApp не затронут. Реклама на ресурсах Meta в РФ запрещена. Упоминание — только в информационных целях; мы не аффилированы.</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        {parts[1]}
      </>
    );
  };

  const renderEffect = (text: string) => {
    if (text.includes('•')) {
      const items = text.split('\n').filter(item => item.trim());
      return (
        <ul className="space-y-2">
          {items.map((item, idx) => (
            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    }
    return <p className="text-sm text-muted-foreground whitespace-pre-line">{text}</p>;
  };

  const renderDemo = (text: string) => {
    if (text.includes('•')) {
      const items = text.split('\n').filter(item => item.trim());
      return (
        <ul className="space-y-2">
          {items.map((item, idx) => (
            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    }
    return <p className="text-sm text-muted-foreground whitespace-pre-line">{text}</p>;
  };

  return (
    <div className={`card-product group relative transition-all duration-500 hover:scale-[1.02] ${
      product.inDevelopment && !product.pilotBadge ? 'bg-muted/50' : 
      product.pilotBadge ? 'bg-cyan/5' : ''
    }`}>
      {/* Status badges */}
      {product.inDevelopment && (
        <div className={`absolute top-0 right-0 px-2 md:px-3 py-1 md:py-1.5 rounded-bl-lg border-l border-b ${
          product.pilotBadge 
            ? 'bg-gradient-to-br from-cyan/20 to-cyan/5 border-cyan/30' 
            : 'bg-gradient-to-br from-accent/20 to-accent/5 border-accent/30'
        }`}>
          <div className="flex items-center gap-1.5 md:gap-2">
            <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full animate-pulse ${
              product.pilotBadge ? 'bg-cyan' : 'bg-accent'
            }`} />
            <span className={`text-[10px] md:text-xs font-bold uppercase tracking-wide ${
              product.pilotBadge ? 'text-cyan' : 'text-accent'
            }`}>
              {product.pilotBadge ? 'Идет пилот' : 'В разработке'}
            </span>
          </div>
        </div>
      )}
      
      {/* Header */}
      <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
        <div className="p-2 md:p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors flex-shrink-0">
          <img src={product.icon} alt={`${product.title} — ${product.subtitle}`} className="w-5 h-5 md:w-6 md:h-6" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="secondary" className="text-xs font-bold">
              {product.id}
            </Badge>
            <IconComponent className="w-4 h-4 text-accent" />
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-0.5 md:mb-1">{product.title}</h3>
          <p className="text-xs md:text-sm text-muted-foreground">{product.subtitle}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed mb-4">{renderDescription(product.description)}</p>

      {/* Toggle button */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 bg-accent/10 border border-accent/30 rounded-xl hover:bg-accent/20 hover:border-accent/50 transition-all duration-200 mb-2 group"
      >
        <span className="text-sm font-bold text-accent flex items-center gap-2">
          <Zap className="w-4 h-4" />
          {isExpanded ? 'Скрыть детали' : 'Показать детали'}
        </span>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-accent group-hover:scale-110 transition-transform" />
        ) : (
          <ChevronDown className="h-5 w-5 text-accent group-hover:scale-110 transition-transform" />
        )}
      </button>

      {/* Expanded content */}
      {isExpanded && (
        <div className="space-y-4 pt-4 border-t border-border/50 animate-accordion-down">
          {/* Effect */}
          <div>
            <div className="text-xs font-semibold text-accent mb-2 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              ЭФФЕКТ:
            </div>
            {renderEffect(product.effect)}
          </div>

          {/* Demo */}
          {product.demo && (
            <div>
              <div className="text-xs font-semibold text-accent mb-2 flex items-center gap-2">
                <Play className="w-4 h-4" />
                ДЕМО:
              </div>
              {product.demoPrice && (
                <p className="text-base font-bold text-accent mb-2">{product.demoPrice}</p>
              )}
              {renderDemo(product.demo)}
              {product.demoAction && (
                <Button 
                  asChild 
                  className="mt-3 w-full bg-accent text-accent-foreground hover:bg-accent/90 hover:border-accent text-xs sm:text-sm md:text-base py-3 h-auto min-h-[44px] group"
                  variant="outline"
                >
                  <a 
                    href={product.demoAction.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="whitespace-normal break-words leading-tight py-2 flex items-center justify-center gap-2"
                  >
                    {product.demoAction.label}
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              )}
            </div>
          )}

          {/* Demo cases */}
          {product.demos && (
            <div>
              <div className="text-xs font-semibold text-accent mb-3 flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                КЕЙСЫ (автопостинг):
              </div>
              <div className="space-y-3">
                {product.demos.map((demo, idx) => (
                  <div key={idx} className="bg-muted/30 rounded-lg p-3">
                    <div className="text-xs font-semibold text-muted-foreground mb-2">{demo.category}:</div>
                    <div className="space-y-2">
                      {demo.links.map((link, linkIdx) => (
                        <div
                          key={linkIdx}
                          className="flex items-center gap-2 p-2 rounded-md hover:bg-accent/5 transition-colors cursor-pointer group"
                          onMouseEnter={() => setHoveredDemo(linkIdx)}
                          onMouseLeave={() => setHoveredDemo(null)}
                        >
                          {link.url.startsWith('/') ? (
                            <span className="text-xs font-bold text-muted-foreground flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-accent/50" />
                              {link.text}
                            </span>
                          ) : (
                            <a 
                              href={link.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-xs font-bold text-cyan hover:text-accent transition-colors flex items-center gap-2 group-hover:translate-x-1"
                            >
                              <span className="w-2 h-2 rounded-full bg-cyan/50" />
                              {link.text}
                              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Note */}
          {product.note && (
            <div className="bg-muted/50 rounded-lg p-3 border-l-4 border-accent/30">
              <p className="text-xs text-muted-foreground italic">{product.note}</p>
            </div>
          )}

          {/* Tech stack */}
          <div>
            <div className="text-xs font-semibold text-muted-foreground mb-2">СТЕК:</div>
            <div className="flex flex-wrap gap-1">
              {product.stack.map((tech, idx) => (
                <Badge 
                  key={idx} 
                  variant="outline"
                  className="text-xs px-2 py-1 hover:bg-accent/10 transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
