import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-glow/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Entenda as finanças da sua empresa
            <span className="block text-secondary-light mt-2">sem complicação</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Análises financeiras automáticas, cenários de desempenho e estratégias práticas para o crescimento do seu negócio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-hover text-accent-foreground font-semibold px-8 py-6 text-lg shadow-strong transition-all duration-300 hover:scale-105"
            >
              Começar análise gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 py-6 text-lg transition-all duration-300"
            >
              Ver como funciona
            </Button>
          </div>
          
          <p className="mt-8 text-sm text-primary-foreground/70">
            Sem cartão de crédito • Sem instalação • Resultados em minutos
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
