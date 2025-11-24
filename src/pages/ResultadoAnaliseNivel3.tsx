import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, TrendingDown, Clock, Download, RefreshCw, Target, AlertCircle, CheckCircle, LayoutDashboard } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ResultadoAnaliseNivel3 = () => {
  const navigate = useNavigate();

  const projecaoData = [
    { mes: 'Mês 1', otimista: 80000, neutro: 75000, pessimista: 70000 },
    { mes: 'Mês 2', otimista: 90000, neutro: 80000, pessimista: 72000 },
    { mes: 'Mês 3', otimista: 100000, neutro: 85000, pessimista: 73000 },
    { mes: 'Mês 4', otimista: 110000, neutro: 90000, pessimista: 75000 },
    { mes: 'Mês 5', otimista: 120000, neutro: 92000, pessimista: 76000 },
    { mes: 'Mês 6', otimista: 130000, neutro: 95000, pessimista: 78000 },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/resultado-analise-nivel2")}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>
          <h1 className="text-2xl font-bold text-primary">Growli</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
          <Target className="w-4 h-4" />
          <span className="text-sm font-medium">Análise Nível 3</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Projeções e Estratégia
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Visualize o futuro do seu negócio com projeções baseadas em dados reais
        </p>
      </section>

      {/* Stepper */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex items-center justify-center gap-4 max-w-2xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm font-medium text-primary">Básico</span>
          </div>
          <div className="w-16 h-0.5 bg-primary"></div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm font-medium text-primary">Intermediário</span>
          </div>
          <div className="w-16 h-0.5 bg-primary"></div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary border-2 border-primary flex items-center justify-center">
              <span className="text-sm font-semibold text-primary-foreground">3</span>
            </div>
            <span className="text-sm font-medium text-primary">Avançado</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Explicação */}
          <Card className="shadow-elegant border-border/50">
            <CardContent className="p-6">
              <div className="bg-muted/30 border border-border/50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">Análise Nível 3 - Projeções e Estratégia</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Suas receitas estão em crescimento, com variação média de <span className="font-semibold text-foreground">2,0% ao mês</span>. 
                      Isso é um sinal positivo de tração no mercado. Seu <span className="font-semibold text-foreground">ROA (Retorno sobre Ativos)</span> está 
                      em <span className="font-semibold text-foreground">60,0% ao ano</span>, indicando boa rentabilidade dos ativos investidos. 
                      O <span className="font-semibold text-foreground">ROE (Retorno sobre Patrimônio)</span> é de <span className="font-semibold text-foreground">0,0% ao ano</span>, 
                      mostrando baixo retorno aos sócios. O <span className="font-semibold text-foreground">payback estimado</span> do investimento 
                      é <span className="font-semibold text-foreground">0,4 anos</span>.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Indicadores-chave */}
          <Card className="shadow-elegant border-border/50">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-6">Indicadores Estratégicos</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* ROA */}
                <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/30 rounded-lg p-6 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">ROA (Atual)</p>
                      <div className="flex items-center gap-2">
                        <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">60</p>
                        <span className="text-sm text-muted-foreground">%</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">Saudável</span>
                  </div>
                </div>

                {/* ROE */}
                <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/30 rounded-lg p-6 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                      <TrendingDown className="w-5 h-5 text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">ROE (Atual)</p>
                      <div className="flex items-center gap-2">
                        <p className="text-3xl font-bold text-red-600 dark:text-red-400">0</p>
                        <span className="text-sm text-muted-foreground">%</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400" />
                    <span className="text-sm font-medium text-red-600 dark:text-red-400">Crítico</span>
                  </div>
                </div>

                {/* Payback CAPEX */}
                <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800/30 rounded-lg p-6 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Payback CAPEX</p>
                      <div className="flex items-center gap-2">
                        <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">0.4</p>
                        <span className="text-sm text-muted-foreground">anos</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Saudável</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Gráfico de Projeção */}
          <Card className="shadow-elegant border-border/50">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-6">Projeção de Receita (6 meses)</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={projecaoData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis 
                      dataKey="mes" 
                      className="text-xs"
                      tick={{ fill: 'hsl(var(--muted-foreground))' }}
                    />
                    <YAxis 
                      className="text-xs"
                      tick={{ fill: 'hsl(var(--muted-foreground))' }}
                      tickFormatter={(value) => `R$ ${value / 1000}k`}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--background))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                      formatter={(value: number) => [`R$ ${value.toLocaleString('pt-BR')}`, '']}
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="otimista" 
                      stroke="#10b981" 
                      strokeWidth={2}
                      name="Otimista"
                      dot={{ fill: '#10b981', r: 4 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="neutro" 
                      stroke="#3b82f6" 
                      strokeWidth={2}
                      name="Neutro"
                      dot={{ fill: '#3b82f6', r: 4 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="pessimista" 
                      stroke="#ef4444" 
                      strokeWidth={2}
                      name="Pessimista"
                      dot={{ fill: '#ef4444', r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* CTA Final */}
          <Card className="shadow-elegant border-border/50 bg-gradient-to-br from-emerald-500 via-blue-500 to-purple-500 text-white">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Análise Completa Finalizada!</h3>
                  <p className="text-white/90 leading-relaxed">
                    Você completou todos os níveis de análise. Use esses insights para tomar decisões estratégicas e 
                    impulsionar o crescimento do seu negócio!
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="gap-2 shadow-elegant hover:shadow-medium transition-all"
                  onClick={() => window.print()}
                >
                  <Download className="w-5 h-5" />
                  Baixar Relatório PDF
                </Button>
                <Button 
                  size="lg" 
                  className="gap-2 bg-white text-primary hover:bg-white/90 shadow-elegant hover:shadow-medium transition-all"
                  onClick={() => navigate("/minhas-analises")}
                >
                  <LayoutDashboard className="w-5 h-5" />
                  Ir para Meu Dashboard
                </Button>
                <Button 
                  size="lg" 
                  className="gap-2 bg-white text-primary hover:bg-white/90 shadow-elegant hover:shadow-medium transition-all"
                  onClick={() => navigate("/analise-financeira")}
                >
                  <RefreshCw className="w-5 h-5" />
                  Nova Análise
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ResultadoAnaliseNivel3;
