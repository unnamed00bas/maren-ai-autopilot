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
    <div className="consent-compact flex items-start gap-3 group">
      <div className="relative flex-shrink-0">
        {!checked && (
          <ArrowRight className="consent-arrow absolute -left-8 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all duration-300 group-hover:scale-125 group-hover:-left-9" />
        )}
        <Checkbox 
          id="consent" 
          checked={checked}
          onCheckedChange={onCheckedChange}
          className="mt-0.5"
        />
      </div>
      <Label 
        htmlFor="consent" 
        className="text-base text-muted-foreground cursor-pointer leading-[1.3]"
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