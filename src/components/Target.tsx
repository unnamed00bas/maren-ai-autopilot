import { Users, Clock, FileText, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface TargetProps {
  onDemoClick: () => void;
}

export const Target = ({ onDemoClick }: TargetProps) => {
  return (
    <section id="audience" className="section-padding">
      <div className="section-container">
        <div className="bg-muted/30 rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                Кому подойдёт MAREN
              </h2>
              
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                Мы закрываем разные роли в контенте: экономим время, берём на себя генерацию и даём контроль. Ниже — что именно получите в каждой роли.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
              {/* Card 1 - eCom */}
              <div className="bg-card backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-border hover:border-accent/50 transition-all flex flex-col">
                <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-accent/10 mb-4 flex-shrink-0">
                  <Clock className="w-6 h-6 md:w-7 md:h-7 text-accent" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 break-words">Handmade мастера, eCom и локальный ритейл</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4 break-words">
                  Тратите часы на постинг — <span className="text-accent font-semibold">MAREN публикует сам (Zero-Touch)</span>.
                </p>
                
                <div className="space-y-2 mb-3 flex-grow">
                  <Badge variant="secondary" className="w-full justify-center py-2 text-xs sm:text-sm break-words text-center">−3–4 ч/день на рутине</Badge>
                  <Badge variant="secondary" className="w-full justify-center py-2 text-xs sm:text-sm break-words text-center">+15–30% охват за 2–4 недели*</Badge>
                  <Badge variant="secondary" className="w-full justify-center py-2 text-xs sm:text-sm break-words text-center">12–20 постов/нед без найма</Badge>
                </div>
                
                <p className="text-xs text-muted-foreground break-words">
                  *по результатам пилотов, детали в кейсе
                </p>
              </div>

              {/* Card 2 - Producers */}
              <div className="bg-card backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-border hover:border-accent/50 transition-all flex flex-col">
                <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-cyan/10 mb-4 flex-shrink-0">
                  <FileText className="w-6 h-6 md:w-7 md:h-7 text-cyan" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 break-words">Продюсеры и эксперты</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4 break-words">
                  Нет команды для контента — <span className="text-accent font-semibold">MAREN пишет, планирует и оформляет по гайдам</span>.
                </p>
                
                <div className="space-y-2 mb-3 flex-grow">
                  <Badge variant="secondary" className="w-full justify-center py-2 text-xs sm:text-sm break-words text-center">2× быстрее подготовка материалов</Badge>
                  <Badge variant="secondary" className="w-full justify-center py-2 text-xs sm:text-sm break-words text-center">до −60% правок за счёт тон-оф-войс</Badge>
                  <Badge variant="secondary" className="w-full justify-center py-2 text-xs sm:text-sm break-words text-center">1,5–2 ч/день вернувшегося времени</Badge>
                </div>
              </div>

              {/* Card 3 - SMM */}
              <div className="bg-card backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-border hover:border-accent/50 transition-all flex flex-col">
                <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-accent/10 mb-4 flex-shrink-0">
                  <BarChart3 className="w-6 h-6 md:w-7 md:h-7 text-accent" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 break-words">SMM и маленькие команды</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4 break-words">
                  Нужен контроль и отчёты — <span className="text-accent font-semibold">всё в одном дашборде: статусы, расписание, KPI</span>.
                </p>
                
                <div className="space-y-2 mb-3 flex-grow">
                  <Badge variant="secondary" className="w-full justify-center py-2 text-xs sm:text-sm break-words text-center">ER +10–25% за счёт стабильной частоты</Badge>
                  <Badge variant="secondary" className="w-full justify-center py-2 text-xs sm:text-sm break-words text-center">0–5 мин на отчёт (авто-PDF)</Badge>
                  <Badge variant="secondary" className="w-full justify-center py-2 text-xs sm:text-sm break-words text-center">≤30 мин согласование по правилам</Badge>
                </div>
              </div>
            </div>

            {/* Mini-block "Что получите" */}
            <div className="bg-accent/5 rounded-2xl p-6 md:p-8 border border-accent/20">
              <h4 className="text-xl md:text-2xl font-bold mb-6 text-center">
                Что получите уже в первый месяц
              </h4>
              <ul className="space-y-4 max-w-3xl mx-auto">
                <li className="flex gap-3">
                  <span className="text-accent font-bold shrink-0">→</span>
                  <span className="text-sm md:text-base"><strong>Готовый Zero-Touch пайплайн</strong>: генерация → согласование → автопостинг → отчёт</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold shrink-0">→</span>
                  <span className="text-sm md:text-base"><strong>Экономия до 4 часов в день</strong> и понятные KPI в дашборде</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold shrink-0">→</span>
                  <span className="text-sm md:text-base"><strong>Белая зона данных: 152-ФЗ</strong>, логирование действий, прозрачность</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
