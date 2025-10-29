import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Calculator, TrendingUp, Clock, DollarSign, Users } from 'lucide-react';

interface ROICalculatorProps {
  onClose?: () => void;
}

export const ROICalculator = ({ onClose }: ROICalculatorProps) => {
  const [inputs, setInputs] = useState({
    hoursPerDay: 4,
    hourlyRate: 2000,
    teamSize: 1,
    currentCost: 0,
  });

  const [results, setResults] = useState({
    dailySavings: 0,
    monthlySavings: 0,
    yearlySavings: 0,
    roi: 0,
    paybackPeriod: 0,
  });

  const calculateROI = () => {
    const { hoursPerDay, hourlyRate, teamSize, currentCost } = inputs;
    
    const dailySavings = hoursPerDay * hourlyRate * teamSize;
    const monthlySavings = dailySavings * 22; // 22 working days
    const yearlySavings = monthlySavings * 12;
    
    // MAREN costs (simplified)
    const marenCost = 40000; // P2 Assistant cost
    const netSavings = yearlySavings - marenCost - currentCost;
    const roi = marenCost > 0 ? (netSavings / marenCost) * 100 : 0;
    const paybackPeriod = marenCost > 0 ? marenCost / monthlySavings : 0;
    
    setResults({
      dailySavings,
      monthlySavings,
      yearlySavings,
      roi,
      paybackPeriod,
    });
  };

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const handleInputChange = (field: string, value: number) => {
    setInputs(prev => ({
      ...prev,
      [field]: Math.max(0, value)
    }));
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="w-5 h-5" />
          Калькулятор ROI
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Рассчитайте экономию времени и возврат инвестиций от внедрения MAREN
        </p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="hoursPerDay" className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Часов в день на контент
            </Label>
            <Input
              id="hoursPerDay"
              type="number"
              value={inputs.hoursPerDay}
              onChange={(e) => handleInputChange('hoursPerDay', parseInt(e.target.value) || 0)}
              min="0"
              step="0.5"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="hourlyRate" className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Стоимость часа работы (₽)
            </Label>
            <Input
              id="hourlyRate"
              type="number"
              value={inputs.hourlyRate}
              onChange={(e) => handleInputChange('hourlyRate', parseInt(e.target.value) || 0)}
              min="0"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="teamSize" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Размер команды
            </Label>
            <Input
              id="teamSize"
              type="number"
              value={inputs.teamSize}
              onChange={(e) => handleInputChange('teamSize', parseInt(e.target.value) || 0)}
              min="1"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="currentCost" className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Текущие расходы на контент (₽/мес)
            </Label>
            <Input
              id="currentCost"
              type="number"
              value={inputs.currentCost}
              onChange={(e) => handleInputChange('currentCost', parseInt(e.target.value) || 0)}
              min="0"
            />
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Результаты расчета
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-accent/10 rounded-lg p-4">
              <div className="text-sm text-muted-foreground mb-1">Экономия в день</div>
              <div className="text-2xl font-bold text-accent">
                {results.dailySavings.toLocaleString()} ₽
              </div>
            </div>
            
            <div className="bg-cyan/10 rounded-lg p-4">
              <div className="text-sm text-muted-foreground mb-1">Экономия в месяц</div>
              <div className="text-2xl font-bold text-cyan">
                {results.monthlySavings.toLocaleString()} ₽
              </div>
            </div>
            
            <div className="bg-accent/10 rounded-lg p-4">
              <div className="text-sm text-muted-foreground mb-1">Экономия в год</div>
              <div className="text-2xl font-bold text-accent">
                {results.yearlySavings.toLocaleString()} ₽
              </div>
            </div>
            
            <div className="bg-cyan/10 rounded-lg p-4">
              <div className="text-sm text-muted-foreground mb-1">ROI</div>
              <div className="text-2xl font-bold text-cyan">
                {results.roi.toFixed(0)}%
              </div>
            </div>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-4">
            <div className="text-sm text-muted-foreground mb-1">Окупаемость</div>
            <div className="text-lg font-bold">
              {results.paybackPeriod < 1 
                ? `${(results.paybackPeriod * 30).toFixed(0)} дней`
                : `${results.paybackPeriod.toFixed(1)} месяцев`
              }
            </div>
          </div>
        </div>

        {/* Recommendations */}
        {results.roi > 0 && (
          <div className="space-y-3">
            <h4 className="font-semibold">Рекомендации:</h4>
            <div className="space-y-2">
              {results.roi > 300 && (
                <Badge variant="default" className="w-full justify-center py-2">
                  🚀 Отличная окупаемость! Рекомендуем внедрение
                </Badge>
              )}
              {results.roi > 100 && results.roi <= 300 && (
                <Badge variant="secondary" className="w-full justify-center py-2">
                  ✅ Хорошая окупаемость, стоит рассмотреть
                </Badge>
              )}
              {results.roi > 0 && results.roi <= 100 && (
                <Badge variant="outline" className="w-full justify-center py-2">
                  ⚠️ Низкая окупаемость, рассмотрите пилотный проект
                </Badge>
              )}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-3 pt-4">
          <Button 
            className="flex-1"
            onClick={() => window.open('https://t.me/promaren_support_bot', '_blank')}
          >
            Заказать консультацию
          </Button>
          {onClose && (
            <Button variant="outline" onClick={onClose}>
              Закрыть
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
