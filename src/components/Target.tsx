import { Users } from 'lucide-react';

export const Target = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent/10 mb-4 md:mb-6">
            <Users className="w-6 h-6 md:w-8 md:h-8 text-accent" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Для кого
          </h2>
          
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
            Владельцы eCom и локального бизнеса, эксперты/продюсеры, SMM-специалисты, 
            небольшие команды без in-house маркетинга.
          </p>
        </div>
      </div>
    </section>
  );
};
