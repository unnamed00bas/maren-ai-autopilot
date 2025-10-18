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
    <div className="flex items-start gap-2">
      <div className="relative flex-shrink-0">
        {!checked && (
          <ArrowRight className="absolute -left-7 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan animate-pulse drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
        )}
        <Checkbox 
          id="consent" 
          checked={checked}
          onCheckedChange={onCheckedChange}
          className="mt-0.5 h-3 w-3 flex-shrink-0 border border-cyan data-[state=checked]:bg-cyan data-[state=checked]:border-cyan"
        />
      </div>
      <Label 
        htmlFor="consent" 
        className="text-xs text-muted-foreground leading-none cursor-pointer break-words"
      >
        Я согласен на обработку персональных данных в соответствии с{' '}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            onPrivacyClick();
          }}
          className="text-accent hover:text-accent/80 underline decoration-accent/30 hover:decoration-accent/60 underline-offset-2 transition-all"
        >
          Политикой обработки персональных данных
        </button>
        {' '}и согласен с условиями{' '}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            onOfferClick();
          }}
          className="text-accent hover:text-accent/80 underline decoration-accent/30 hover:decoration-accent/60 underline-offset-2 transition-all"
        >
          Публичной оферты
        </button>
      </Label>
    </div>
  );
};