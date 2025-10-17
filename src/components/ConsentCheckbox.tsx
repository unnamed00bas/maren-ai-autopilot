import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

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
      <Checkbox 
        id="consent" 
        checked={checked}
        onCheckedChange={onCheckedChange}
        className="mt-1"
      />
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
        {' '}и{' '}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            onOfferClick();
          }}
          className="text-accent hover:underline"
        >
          Публичной офертой
        </button>
      </Label>
    </div>
  );
};