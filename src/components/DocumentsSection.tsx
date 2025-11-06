import { FileText, TrendingUp, Clock, FileBarChart } from "lucide-react";

const DocumentsSection = () => {
  const documents = [
    {
      icon: FileText,
      title: "Balanço e DRE",
      description: "Base para calcular margens, liquidez e retornos.",
      required: true
    },
    {
      icon: TrendingUp,
      title: "Relatórios Operacionais",
      description: "Entenda prazos, fluxo e estrutura de capital de giro.",
      required: true
    },
    {
      icon: Clock,
      title: "Dados Complementares",
      description: "Receita, custos e colaboradores para projeções mais precisas.",
      required: true
    },
    {
      icon: FileBarChart,
      title: "Documentos Extras (opcional)",
      description: "Fluxo de caixa, orçamento e endividamento elevam a qualidade da análise.",
      required: false
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Reúna seus relatórios e deixe a Leme fazer o diagnóstico por você
          </h2>
          <p className="text-xl text-muted-foreground">
            Com os documentos certos, você obtém insights mais precisos e acionáveis
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {documents.map((doc, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-secondary rounded-xl flex items-center justify-center shadow-medium group-hover:scale-110 transition-transform duration-300">
                  <doc.icon className="h-7 w-7 text-secondary-foreground" />
                </div>
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-semibold text-card-foreground">
                      {doc.title}
                    </h3>
                    {doc.required && (
                      <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
                        Essencial
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {doc.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;
