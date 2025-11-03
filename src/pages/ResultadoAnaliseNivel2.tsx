import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, DollarSign, Clock, Users, TrendingDown, Flame, FileText } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const ResultadoAnaliseNivel2 = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/analise-intermediaria" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
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
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Análise Financeira Growli
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground">
              Transforme dados em decisões estratégicas
            </p>
          </div>

          {/* Stepper */}
          <div className="flex items-center justify-center mb-10 animate-scale-in">
            <div className="flex items-center gap-4">
              {/* Step 1 - Completed */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">
                  1
                </div>
                <span className="text-xs font-medium text-primary">Básico</span>
              </div>
              
              {/* Connector */}
              <div className="w-16 h-1 bg-primary rounded-full"></div>
              
              {/* Step 2 - Active */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-elegant">
                  2
                </div>
                <span className="text-xs font-medium text-primary">Intermediário</span>
              </div>
              
              {/* Connector */}
              <div className="w-16 h-1 bg-border rounded-full"></div>
              
              {/* Step 3 - Inactive */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-muted text-muted-foreground flex items-center justify-center font-bold">
                  3
                </div>
                <span className="text-xs font-medium text-muted-foreground">Avançado</span>
              </div>
            </div>
          </div>

          {/* Main Analysis Card */}
          <Card className="shadow-elegant animate-fade-in border-border/50 mb-6">
            <CardContent className="pt-6 pb-6">
              <div className="bg-muted/30 border border-border/50 p-6 rounded-lg">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-primary mb-2">
                      Análise Nível 2 - Capital de Giro e Prazos
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      A análise de <span className="font-semibold text-foreground">Capital de Giro</span> mostra quanto dinheiro você precisa para manter a operação funcionando enquanto espera recebimentos. Por exemplo, se você vendeu R$ 100 mil, mas ainda não recebeu, e já precisou pagar R$ 30 mil de fornecedores, há uma diferença de R$ 70 mil. Essa diferença é o que precisa estar disponível para garantir a operação contínua, conhecido como <span className="font-semibold text-foreground">Necessidade de Capital de Giro (NCG)</span>. A <span className="font-semibold text-foreground">Rotatividade do Capital de Giro</span> mostra quantas vezes o capital "gira" no mês, ou seja, quantas vezes você consegue usar e recuperar esse dinheiro. Um valor alto indica que o dinheiro fica pouco tempo parado. Por fim, a <span className="font-semibold text-foreground">Cobertura de Juros</span> avalia se o lucro é suficiente para pagar as despesas financeiras. Um valor acima de 5 indica boa saúde financeira para honrar compromissos com juros.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Metrics */}
          <Card className="shadow-elegant animate-fade-in border-border/50 mb-6">
            <CardContent className="pt-8 pb-8">
              <div className="space-y-4 p-6 rounded-lg bg-muted/30 border border-border/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Indicadores-chave do Nível 2
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Giro Receitas */}
                  <div className="p-6 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-border/50 hover:shadow-md transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center border border-border/50">
                        <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Giro Receitas</p>
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      23<span className="text-lg ml-1">vezes</span>
                    </p>
                  </div>

                  {/* NCG Estimada */}
                  <div className="p-6 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-border/50 hover:shadow-md transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center border border-border/50">
                        <DollarSign className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                    </div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">NCG Estimada</p>
                    <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">R$ 50.000,00</p>
                  </div>

                  {/* Rotatividade */}
                  <div className="p-6 rounded-lg bg-purple-50 dark:bg-purple-950/30 border border-border/50 hover:shadow-md transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-950/30 flex items-center justify-center border border-border/50">
                        <Clock className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      </div>
                    </div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Rotatividade</p>
                    <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      0.8<span className="text-lg ml-1">vezes</span>
                    </p>
                  </div>

                  {/* Cobertura de Juros */}
                  <div className="p-6 rounded-lg bg-orange-50 dark:bg-orange-950/30 border border-border/50 hover:shadow-md transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-orange-50 dark:bg-orange-950/30 flex items-center justify-center border border-border/50">
                        <Flame className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                      </div>
                    </div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Cobertura de Juros</p>
                    <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                      5.0<span className="text-lg ml-1">vezes</span>
                    </p>
                  </div>

                  {/* Receita por Funcionário */}
                  <div className="p-6 rounded-lg bg-indigo-50 dark:bg-indigo-950/30 border border-border/50 hover:shadow-md transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/30 flex items-center justify-center border border-border/50">
                        <Users className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                      </div>
                    </div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Receita por Funcionário</p>
                    <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">R$ 20.000,00</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Operational Timeline Chart */}
          <Card className="shadow-elegant animate-fade-in border-border/50 mb-6">
            <CardContent className="pt-6 pb-6">
              <div className="bg-muted/30 border border-border/50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-6">Prazos Operacionais (dias)</h3>
                <div className="space-y-4">
                  {/* PMR */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">PMR</span>
                      <span className="text-sm font-semibold text-foreground">30 dias</span>
                    </div>
                    <div className="h-12 bg-background/50 rounded-lg border border-border/30 flex items-center">
                      <div className="h-full bg-blue-500 rounded-lg" style={{ width: '75%' }}></div>
                    </div>
                  </div>

                  {/* PMP */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">PMP</span>
                      <span className="text-sm font-semibold text-foreground">20 dias</span>
                    </div>
                    <div className="h-12 bg-background/50 rounded-lg border border-border/30 flex items-center">
                      <div className="h-full bg-blue-400 rounded-lg" style={{ width: '50%' }}></div>
                    </div>
                  </div>

                  {/* PME */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">PME</span>
                      <span className="text-sm font-semibold text-foreground">25 dias</span>
                    </div>
                    <div className="h-12 bg-background/50 rounded-lg border border-border/30 flex items-center">
                      <div className="h-full bg-blue-300 rounded-lg" style={{ width: '62.5%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cash Impact Simulation */}
          <Card className="shadow-elegant animate-fade-in border-border/50 mb-6">
            <CardContent className="pt-6 pb-6">
              <div className="bg-muted/30 border border-border/50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-6">Simulação de Impacto no Caixa</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border/50">
                        <th className="text-left py-3 px-2 text-sm font-semibold text-foreground">AÇÃO</th>
                        <th className="text-right py-3 px-2 text-sm font-semibold text-foreground">IMPACTO (R$)</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-b border-border/30">
                        <td className="py-3 px-2 text-muted-foreground">Reduzir PMR em 5 dias</td>
                        <td className="text-right py-3 px-2 text-foreground font-medium">+5.000,27</td>
                      </tr>
                      <tr className="border-b border-border/30">
                        <td className="py-3 px-2 text-muted-foreground">Aumentar PMP em 7 dias</td>
                        <td className="text-right py-3 px-2 text-foreground font-medium">-8.102,47</td>
                      </tr>
                      <tr className="border-b border-border/30">
                        <td className="py-3 px-2 text-muted-foreground font-semibold">Total Potencial</td>
                        <td className="text-right py-3 px-2 text-foreground font-bold">-46.815,33</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Card */}
          <Card className="shadow-elegant animate-fade-in border-border/50 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-orange-500/10 p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Quer viver o futuro do seu negócio?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Clique e descubra oportunidades e projeções de receita que você ainda não viu. Assuma o controle do seu futuro! O Nível 3.0 traz previsões em 30, 60 e 90 dias com plano de ação personalizados.
                  </p>
                  <Button 
                    className="shadow-elegant hover:shadow-medium transition-all"
                    onClick={() => navigate("/resultado-analise-nivel3")}
                  >
                    Avançar para Nível 3
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ResultadoAnaliseNivel2;
