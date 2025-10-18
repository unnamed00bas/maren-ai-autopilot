import { Shield } from 'lucide-react';

interface GuaranteesProps {}

export const Guarantees = ({}: GuaranteesProps) => {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="bg-muted/30 rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="max-w-4xl mx-auto text-center">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
