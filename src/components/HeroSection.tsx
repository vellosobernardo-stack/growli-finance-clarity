import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import lemeLogo from "@/assets/leme-logo.svg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Ocean-inspired decorative background elements */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `repeating-linear-gradient(90deg, hsl(207 64% 19%) 0px, transparent 1px, transparent 40px, hsl(207 64% 19%) 41px),
                          repeating-linear-gradient(0deg, hsl(207 64% 19%) 0px, transparent 1px, transparent 40px, hsl(207 64% 19%) 41px)`
      }}></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary-light/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="mb-8 flex flex-col items-center">
            <img src={lemeLogo} alt="Leme" className="h-16 sm:h-20 mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">Leme</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Entenda as finanças da sua empresa
            <span className="block text-primary mt-2">sem complicação</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Análises financeiras automáticas, cenários de desempenho e estratégias práticas para o crescimento do seu negócio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/analise-financeira">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-strong transition-all duration-300 hover:scale-105"
              >
                Começar análise gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/5 font-semibold px-8 py-6 text-lg transition-all duration-300"
            >
              Ver como funciona
            </Button>
          </div>
          
          <p className="mt-8 text-sm text-muted-foreground">
            Resultados em minutos
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
