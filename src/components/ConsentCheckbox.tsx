import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ArrowRight } from 'lucide-react';

interface ConsentCheckboxProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  onPrivacyClick: () => void;
  onOfferClick: () => void;
}

export const ConsentCheckbox = ({ 
  checked, 
  onCheckedChange, 
  onPrivacyClick, 
  onOfferClick 
}: ConsentCheckboxProps) => {
  return (
    <div className="flex items-start gap-3">
      <div className="relative flex-shrink-0">
        {!checked && (
          <ArrowRight className="absolute -left-10 top-0 w-6 h-6 text-cyan animate-pulse drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
        )}
        <Checkbox 
          id="consent" 
          checked={checked}
          onCheckedChange={onCheckedChange}
          className="mt-1 h-5 w-5 border-2 border-cyan data-[state=checked]:bg-cyan data-[state=checked]:border-cyan"
        />
      </div>
      <Label 
        htmlFor="consent" 
        className="text-xs text-muted-foreground leading-relaxed cursor-pointer"
      >
        Я согласен на обработку персональных данных в соответствии с{' '}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            onPrivacyClick();
          }}
          className="text-accent hover:underline"
        >
          Политикой обработки персональных данных
        </button>
        , и согласен с предложением{' '}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            onOfferClick();
          }}
          className="text-accent hover:underline"
        >
          Публичной оферты
        </button>
      </Label>
    </div>
  );
};