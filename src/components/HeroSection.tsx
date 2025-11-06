import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import lemeLogo from "@/assets/leme-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Ocean water effect background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e8f4f8] via-[#d4e9f0] to-[#c8e4ed]"></div>
      
      {/* Animated water ripple effect */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(17, 45, 78, 0.1) 0%, transparent 50%),
                          radial-gradient(circle at 80% 80%, rgba(26, 69, 120, 0.15) 0%, transparent 50%),
                          radial-gradient(circle at 40% 20%, rgba(17, 45, 78, 0.1) 0%, transparent 50%)`,
        animation: 'wave 8s ease-in-out infinite'
      }}></div>
      
      {/* Light caustics effect */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255, 255, 255, 0.5) 35px, rgba(255, 255, 255, 0.5) 70px)`,
        animation: 'shimmer 6s linear infinite'
      }}></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }}></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/25 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/15 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '6s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="mb-10 flex flex-col items-center animate-fade-in">
            <img src={lemeLogo} alt="Leme" className="h-24 sm:h-28 mb-6 drop-shadow-lg" />
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full"></div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-foreground block mb-2">Entenda as finanças da sua empresa</span>
            <span className="block text-primary text-5xl sm:text-6xl lg:text-7xl">sem complicação</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Análises financeiras automáticas, cenários de desempenho e estratégias práticas para o crescimento do seu negócio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/analise-financeira">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-secondary to-secondary-light hover:from-secondary/90 hover:to-secondary-light/90 text-secondary-foreground font-bold px-12 py-7 text-xl shadow-strong transition-all duration-300 hover:scale-105 hover:shadow-medium"
              >
                Começar análise gratuita
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary bg-white/50 backdrop-blur-sm text-primary hover:bg-primary hover:text-white font-bold px-12 py-7 text-xl transition-all duration-300 hover:scale-105 shadow-soft"
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
