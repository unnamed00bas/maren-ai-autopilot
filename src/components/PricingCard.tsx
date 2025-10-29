import { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Check, X, Calculator, ExternalLink, Clock, Zap } from 'lucide-react';

interface PricingCardProps {
  product: {
    id: string;
    title: string;
    description: string;
    price: string;
    type: 'one-time' | 'subscription' | 'waitlist';
    note?: string;
    inDevelopment?: boolean;
    pilotBadge?: boolean;
    features?: string[];
    benefits?: string[];
  };
  isPopular?: boolean;
  onCalculateROI?: () => void;
}

export const PricingCard = ({ product, isPopular = false, onCalculateROI }: PricingCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getStatusColor = () => {
    if (product.pilotBadge) return 'bg-cyan/10 text-cyan border-cyan/30';
    if (product.inDevelopment) return 'bg-accent/10 text-accent border-accent/30';
    return 'bg-green/10 text-green border-green/30';
  };

  const getStatusText = () => {
    if (product.pilotBadge) return 'Идет пилот';
    if (product.inDevelopment) return 'В разработке';
    return 'Доступно';
  };

  const getPriceColor = () => {
    if (product.type === 'waitlist') return 'text-muted-foreground';
    if (product.type === 'subscription') return 'text-cyan';
    return 'text-accent';
  };

  return (
    <Card 
      className={`relative transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
        isPopular 
          ? 'border-accent/50 shadow-lg ring-2 ring-accent/20' 
          : 'border-border hover:border-accent/50'
      } ${isHovered ? 'shadow-2xl' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Popular badge */}
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-accent text-accent-foreground px-4 py-1 text-sm font-bold">
            Популярный выбор
          </Badge>
        </div>
      )}

      {/* Status badge */}
      <div className="absolute top-4 right-4">
        <Badge className={`${getStatusColor()} text-xs font-semibold`}>
          {getStatusText()}
        </Badge>
      </div>

      <CardHeader className="pb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-accent/10 rounded-lg">
            <Zap className="w-5 h-5 text-accent" />
          </div>
          <Badge variant="outline" className="text-xs font-bold">
            {product.id}
          </Badge>
        </div>
        
        <CardTitle className="text-xl mb-2">{product.title}</CardTitle>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {product.description}
        </p>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Price */}
        <div className="text-center">
          <div className={`text-3xl font-bold ${getPriceColor()} mb-1`}>
            {product.price}
          </div>
          {product.type === 'subscription' && (
            <div className="text-sm text-muted-foreground">подписка</div>
          )}
          {product.type === 'waitlist' && (
            <div className="text-sm text-muted-foreground">лист ожидания</div>
          )}
        </div>

        {/* Features */}
        {product.features && (
          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Включено:</h4>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Benefits */}
        {product.benefits && (
          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Преимущества:</h4>
            <ul className="space-y-2">
              {product.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Note */}
        {product.note && (
          <div className="bg-muted/50 rounded-lg p-3 border-l-4 border-accent/30">
            <p className="text-xs text-muted-foreground italic">{product.note}</p>
          </div>
        )}

        {/* Actions */}
        <div className="space-y-3">
          {product.type === 'waitlist' ? (
            <Button 
              variant="outline" 
              className="w-full"
              disabled
            >
              <Clock className="w-4 h-4 mr-2" />
              В листе ожидания
            </Button>
          ) : (
            <Button 
              className={`w-full ${isPopular ? 'btn-hero' : ''}`}
              onClick={() => window.open('https://t.me/promaren_support_bot', '_blank')}
            >
              Заказать {product.id}
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          )}
          
          {onCalculateROI && product.type !== 'waitlist' && (
            <Button 
              variant="outline" 
              className="w-full"
              onClick={onCalculateROI}
            >
              <Calculator className="w-4 h-4 mr-2" />
              Рассчитать ROI
            </Button>
          )}
        </div>

        {/* Hover effect indicator */}
        {isHovered && (
          <div className="absolute inset-0 bg-accent/5 rounded-lg pointer-events-none" />
        )}
      </CardContent>
    </Card>
  );
};
