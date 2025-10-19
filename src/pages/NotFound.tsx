import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";
import { Logo } from "@/components/Logo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-muted relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <div className="mb-8">
          <Logo variant="neon" size="md" />
        </div>
        
        <div className="mb-6">
          <h2 className="text-8xl md:text-9xl font-black bg-gradient-to-r from-[hsl(var(--lime))] to-[hsl(var(--cyan))] bg-clip-text text-transparent mb-4">
            404
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Страница не найдена
          </p>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Похоже, вы попали на несуществующую страницу. Возможно, она была удалена или перемещена.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/">
            <Button size="lg" className="btn-hero gap-2">
              <Home className="w-5 h-5" />
              Вернуться на главную
            </Button>
          </Link>
        </div>

        <div className="mt-12 p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50">
          <div className="flex items-start gap-3 text-left">
            <Search className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold mb-2">Что вы искали?</p>
              <p className="text-sm text-muted-foreground">
                Вернитесь на главную страницу, чтобы узнать больше о MAREN AI-ассистенте, 
                который генерирует и публикует контент, экономя до 4 часов в день.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
