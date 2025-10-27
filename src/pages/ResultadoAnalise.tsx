import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, TrendingDown, Calendar, DollarSign, Wallet, FileText, BarChart3, Sparkles, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

const ResultadoAnalise = () => {
  // Mock data - substituir com dados reais
  const indicators = [
    { label: "Margem", value: "35", unit: "%", icon: TrendingUp, color: "text-emerald-600 dark:text-emerald-400", bgColor: "bg-emerald-50 dark:bg-emerald-950/30" },
    { label: "Resultado Operacional", value: "R$ 10.000,00", icon: DollarSign, color: "text-amber-600 dark:text-amber-400", bgColor: "bg-amber-50 dark:bg-amber-950/30" },
    { label: "Prazo de Contas a Receber", value: "72", unit: "dias", icon: Calendar, color: "text-blue-600 dark:text-blue-400", bgColor: "bg-blue-50 dark:bg-blue-950/30" },
    { label: "Liquidez Corrente", value: "2,5", icon: Wallet, color: "text-purple-600 dark:text-purple-400", bgColor: "bg-purple-50 dark:bg-purple-950/30" },
    { label: "Prazo de Contas a Pagar", value: "R$ 71.428,57", icon: BarChart3, color: "text-orange-600 dark:text-orange-400", bgColor: "bg-orange-50 dark:bg-orange-950/30" },
  ];

  const resumoFinanceiro = [
    { item: "Receita Bruta", valor: "R$ 400.800,00" },
    { item: "Custos Diretos", valor: "R$ 85.000,00" },
    { item: "Despesas Fixas", valor: "R$ 240.000,00" },
    { item: "Disponibilidades", valor: "R$ 50.000,00" },
    { item: "Contas a Receber (30d)", valor: "R$ 10.000,00" },
    { item: "Contas a Pagar (30d)", valor: "R$ 24.000,00" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
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
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Hero Section */}
          <div className="text-center space-y-4 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Análise Concluída</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-foreground tracking-tight">
              Análise Financeira Growli
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transforme dados em decisões estratégicas
            </p>
          </div>

          {/* Stepper */}
          <div className="flex items-center justify-center animate-scale-in">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-lg ring-4 ring-primary/20">
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-primary">Básico</span>
              </div>
              
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-primary to-muted rounded-full"></div>
              
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-muted text-muted-foreground flex items-center justify-center font-bold text-base sm:text-lg">
                  2
                </div>
                <span className="text-xs sm:text-sm font-medium text-muted-foreground">Intermediário</span>
              </div>
              
              <div className="w-16 sm:w-20 h-1 bg-muted rounded-full"></div>
              
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-muted text-muted-foreground flex items-center justify-center font-bold text-base sm:text-lg">
                  3
                </div>
                <span className="text-xs sm:text-sm font-medium text-muted-foreground">Avançado</span>
              </div>
            </div>
          </div>

          {/* Visão Básica */}
          <Card className="border-primary/20 shadow-xl animate-fade-in bg-gradient-to-br from-card via-card to-primary/5">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Visão Básica</CardTitle>
                  <CardDescription className="mt-1 text-base">Principais indicadores do período analisado</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-base leading-relaxed text-foreground">
                A sua análise indica que a empresa está com um <span className="font-bold text-primary text-lg">bom equilíbrio financeiro</span>. 
                O resultado operacional de <span className="font-bold text-emerald-600 dark:text-emerald-400 text-lg">R$ 10.000,00</span> demonstra 
                capacidade de geração de caixa, e a margem de <span className="font-bold text-primary text-lg">35%</span> está 
                dentro de patamares saudáveis para o setor. Com uma liquidez corrente de <span className="font-bold text-blue-600 dark:text-blue-400 text-lg">2,5</span>, 
                a empresa tem boa capacidade de honrar suas obrigações de curto prazo.
              </p>
            </CardContent>
          </Card>

          {/* Indicadores-chave */}
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-2xl font-bold text-foreground">Indicadores-chave do seu mês</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {indicators.map((indicator, index) => (
                <Card key={index} className={`${indicator.bgColor} border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl ${indicator.bgColor} flex items-center justify-center shadow-sm border border-border/50`}>
                        <indicator.icon className={`h-6 w-6 ${indicator.color}`} />
                      </div>
                    </div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">{indicator.label}</p>
                    <p className={`text-2xl font-bold ${indicator.color}`}>
                      {indicator.value}
                      {indicator.unit && <span className="text-lg ml-1">{indicator.unit}</span>}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Gráfico de Composição */}
          <Card className="shadow-lg animate-fade-in">
            <CardHeader>
              <CardTitle className="text-xl">Composição do Mês</CardTitle>
              <CardDescription>Distribuição das suas receitas e despesas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-foreground">Receita Bruta</span>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">R$ 400.800,00</span>
                  </div>
                  <Progress value={100} className="h-12 bg-muted" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-foreground">Custos Diretos</span>
                    <span className="font-semibold text-orange-600 dark:text-orange-400">R$ 85.000,00</span>
                  </div>
                  <Progress value={45} className="h-12 bg-muted" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-foreground">Despesas Fixas</span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">R$ 240.000,00</span>
                  </div>
                  <Progress value={30} className="h-12 bg-muted" />
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4 py-2 bg-muted/30 rounded-r">
                Total de <span className="font-semibold text-foreground">R$ (R$ 400.800,00)</span>
              </p>
            </CardContent>
          </Card>

          {/* Interpretação */}
          <Card className="border-l-4 border-l-primary shadow-lg animate-fade-in">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Como interpretar seu gráfico
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Este gráfico mostra a composição do seu resultado no mês. A receita bruta representa o total de vendas ou serviços prestados. 
                Os custos diretos são variáveis e vinculados ao volume vendido (materiais, comissões, impostos sobre vendas etc.). 
                As despesas fixas são os gastos mensais que você tem mesmo sem vender nada (aluguel, salários, etc.). 
                A diferença entre esses itens indica o quanto a empresa está gerando ou consumindo de caixa no período analisado.
              </p>
            </CardContent>
          </Card>

          {/* Resumo Financeiro */}
          <Card className="shadow-xl animate-fade-in border-2">
            <CardHeader className="bg-gradient-to-br from-primary/5 to-transparent">
              <CardTitle className="text-2xl flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-primary" />
                Resumo Financeiro
              </CardTitle>
              <CardDescription>Consolidação dos valores informados</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-3">
                {resumoFinanceiro.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-border/50 last:border-0 hover:bg-muted/30 px-4 -mx-4 rounded transition-colors">
                    <span className="font-medium text-foreground">{item.item}</span>
                    <span className="font-semibold text-lg">{item.valor}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA Final */}
          <Card className="bg-gradient-to-br from-primary via-primary to-primary/80 text-white shadow-2xl animate-fade-in border-0 overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
            <CardContent className="p-8 sm:p-12 relative z-10">
              <div className="flex flex-col items-center text-center space-y-6 max-w-2xl mx-auto">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-bold">Pronto para mais insights?</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Esta é apenas uma análise básica. Imagine o que você pode descobrir com uma análise mais completa: 
                    previsões precisas sobre margem futura, insights sobre ponto de equilíbrio, análises de ativo circulante 
                    versus capital de giro, dentre outros. Avance para o <span className="font-bold">Nível 2</span> ou desfrute 
                    de tudo com o <span className="font-bold">Nível 3</span>!
                  </p>
                </div>
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                >
                  Avançar para Nível 2
                </Button>
              </div>
            </CardContent>
          </Card>

        </div>
      </main>
    </div>
  );
};

export default ResultadoAnalise;