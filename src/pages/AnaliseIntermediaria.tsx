import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, Clock, Package, DollarSign, Users, Info } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const AnaliseIntermediaria = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulando processamento
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Análise concluída!",
      description: "Redirecionando para os resultados...",
    });
    
    // Redirecionar para a página de resultado após um breve delay
    setTimeout(() => {
      navigate("/resultado-analise-nivel2");
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/analise-financeira" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-semibold">Voltar</span>
            </Link>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-primary">Growli</h2>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-3">
              Análise Intermediária
            </h1>
            <p className="text-lg text-muted-foreground">
              Preencha as informações essenciais para continuarmos a sua análise financeira
            </p>
          </div>

          {/* Stepper */}
          <div className="flex items-center justify-center mb-12 animate-scale-in">
            <div className="flex items-center gap-4">
              {/* Step 1 - Completed */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <span className="text-sm font-medium text-primary">Básico</span>
              </div>
              
              {/* Connector */}
              <div className="w-20 h-1 bg-primary rounded-full"></div>
              
              {/* Step 2 - Active */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-elegant">
                  2
                </div>
                <span className="text-sm font-medium text-primary">Intermediário</span>
              </div>
              
              {/* Connector */}
              <div className="w-20 h-1 bg-border rounded-full"></div>
              
              {/* Step 3 - Inactive */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-muted text-muted-foreground flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <span className="text-sm font-medium text-muted-foreground">Avançado</span>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <Card className="shadow-elegant animate-fade-in border-border/50">
            <CardContent className="pt-8 pb-8">
              <form onSubmit={handleSubmit} className="space-y-12">
                {/* Prazos Operacionais */}
                <div className="space-y-4 p-6 rounded-lg bg-muted/30 border border-border/50">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Prazos Operacionais
                    </h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Label htmlFor="pmr" className="text-sm font-medium">
                          Prazo Médio de Recebimento (PMR)
                        </Label>
                        <span className="text-muted-foreground text-xs">(Opcional)</span>
                        <div className="group relative">
                          <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                        </div>
                      </div>
                      <div className="relative">
                        <Input
                          id="pmr"
                          type="text"
                          placeholder="30"
                          className="h-11"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">dias</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Label htmlFor="pmp" className="text-sm font-medium">
                          Prazo Médio de Pagamento (PMP)
                        </Label>
                        <span className="text-muted-foreground text-xs">(Opcional)</span>
                        <div className="group relative">
                          <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                        </div>
                      </div>
                      <div className="relative">
                        <Input
                          id="pmp"
                          type="text"
                          placeholder="25"
                          className="h-11"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">dias</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-4 rounded-lg bg-blue-500/5 border border-blue-500/20">
                    <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Como calcular:</span> Leve alguns valores e entenda o tempo que o dinheiro fica para voltar e sair do caixa.
                    </p>
                  </div>
                </div>

                {/* Estoques e Dívidas */}
                <div className="space-y-4 p-6 rounded-lg bg-muted/30 border border-border/50">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                      <Package className="h-5 w-5 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Estoques e Dívidas
                    </h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Label htmlFor="estoque" className="text-sm font-medium">
                          Estoque (ao custo)
                        </Label>
                        <span className="text-muted-foreground text-xs">(Opcional)</span>
                        <div className="group relative">
                          <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                        </div>
                      </div>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">R$</span>
                        <Input
                          id="estoque"
                          type="text"
                          placeholder="00.000,00"
                          className="h-11 pl-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Label htmlFor="dividas" className="text-sm font-medium">
                          Dívidas Totais
                        </Label>
                        <span className="text-muted-foreground text-xs">(Opcional)</span>
                        <div className="group relative">
                          <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                        </div>
                      </div>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">R$</span>
                        <Input
                          id="dividas"
                          type="text"
                          placeholder="00.000,00"
                          className="h-11 pl-10"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-4 rounded-lg bg-purple-500/5 border border-purple-500/20">
                    <Info className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Importante:</span> O estoque e as dívidas mostram quanto do capital está "parado" ou se comprometido com obrigações financeiras.
                    </p>
                  </div>
                </div>

                {/* Despesas Financeiras e Impostos */}
                <div className="space-y-4 p-6 rounded-lg bg-muted/30 border border-border/50">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                      <DollarSign className="h-5 w-5 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Despesas Financeiras e Impostos
                    </h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Label htmlFor="despesas-financeiras" className="text-sm font-medium">
                          Despesas Financeiras Mensais
                        </Label>
                        <span className="text-muted-foreground text-xs">(Opcional)</span>
                        <div className="group relative">
                          <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                        </div>
                      </div>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">R$</span>
                        <Input
                          id="despesas-financeiras"
                          type="text"
                          placeholder="2.000,00"
                          className="h-11 pl-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Label htmlFor="impostos" className="text-sm font-medium">
                          Impostos Mensais
                        </Label>
                        <span className="text-muted-foreground text-xs">(Opcional)</span>
                        <div className="group relative">
                          <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                        </div>
                      </div>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">R$</span>
                        <Input
                          id="impostos"
                          type="text"
                          placeholder="8.000,00"
                          className="h-11 pl-10"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-4 rounded-lg bg-yellow-500/5 border border-yellow-500/20">
                    <Info className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Atenção:</span> Esses valores ajudam a avaliar o ponto dos juros e a tributação sobre as receitas da empresa.
                    </p>
                  </div>
                </div>

                {/* Recursos Humanos */}
                <div className="space-y-4 p-6 rounded-lg bg-muted/30 border border-border/50">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                      <Users className="h-5 w-5 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Recursos Humanos
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Label htmlFor="funcionarios" className="text-sm font-medium">
                        Número de Funcionários
                      </Label>
                      <span className="text-muted-foreground text-xs">(Opcional)</span>
                      <div className="group relative">
                        <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                      </div>
                    </div>
                    <Input
                      id="funcionarios"
                      type="text"
                      placeholder="5"
                      className="h-11"
                    />
                  </div>
                  <div className="flex items-start gap-2 p-4 rounded-lg bg-green-500/5 border border-green-500/20">
                    <Info className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Dica:</span> Esse dado é usado para calcular a produtividade média por funcionário.
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    className="w-full h-12 text-base font-semibold shadow-elegant hover:shadow-medium transition-all"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processando..." : "Gerar Análise Nível 2"}
                  </Button>
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    Campos opcionais serão estimados caso não sejam preenchidos
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AnaliseIntermediaria;
