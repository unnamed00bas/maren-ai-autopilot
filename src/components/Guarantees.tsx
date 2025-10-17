import { Shield } from 'lucide-react';

interface GuaranteesProps {
  onPrivacyClick: () => void;
  onOfferClick: () => void;
}

export const Guarantees = ({ onPrivacyClick, onOfferClick }: GuaranteesProps) => {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="bg-muted/30 rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent/10 mb-4 md:mb-6">
              <Shield className="w-6 h-6 md:w-8 md:h-8 text-accent" />
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
              Гарантии и прозрачность
            </h2>
            
            <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                MAREN работает в white-data-зоне. Все процессы соответствуют 152-ФЗ.
              </p>
              <p>
                Мы не используем серые данные и ведем аудит логов всех действий ассистента.
              </p>
              <p>
                Ознакомьтесь с{' '}
                <button
                  onClick={onPrivacyClick}
                  className="text-accent hover:underline font-semibold"
                >
                  Политикой обработки данных
                </button>
                {' '}и{' '}
                <button
                  onClick={onOfferClick}
                  className="text-accent hover:underline font-semibold"
                >
                  Публичной офертой
                </button>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
