import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, TrendingUp, Calendar, MessageSquare, ArrowLeft, Sparkles, Building2 } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const MinhasAnalises = () => {
  const navigate = useNavigate();
  const [searchEmail, setSearchEmail] = useState("suporte@leme.app.br");
  
  // Mock - em produção virá do contexto de autenticação
  const companyName = "Leme";

  // 13 indicadores conforme o design
  const indicators = [
    { nivel: 1, name: "Margem Bruta", value: "50.0%", status: "Saudável", color: "bg-green-50" },
    { nivel: 1, name: "Resultado Operacional", value: "R$ 10.000,00", status: "Saudável", color: "bg-orange-50" },
    { nivel: 1, name: "Fôlego de Caixa", value: "70 dias", status: "Saudável", color: "bg-blue-50" },
    { nivel: 1, name: "Liquidez Imediata", value: "2.0x", status: "Saudável", color: "bg-purple-50" },
    { nivel: 1, name: "Ponto de Equilíbrio", value: "R$ 30.000,00", status: "Saudável", color: "bg-orange-50" },
    { nivel: 2, name: "Ciclo Financeiro", value: "13 dias", status: "Atenção", color: "bg-blue-50" },
    { nivel: 2, name: "NCG Estimada", value: "R$ 10.000,00", status: "Saudável", color: "bg-green-50" },
    { nivel: 2, name: "Alavancagem", value: "0.2x", status: "Saudável", color: "bg-purple-50" },
    { nivel: 2, name: "Cobertura de Juros", value: "2.0x", status: "Atenção", color: "bg-orange-50" },
    { nivel: 2, name: "Receita por Funcionário", value: "R$ 4.166,67", status: "Saudável", color: "bg-purple-50" },
    { nivel: 3, name: "ROA (Anual)", value: "400.0%", status: "Saudável", color: "bg-green-50" },
    { nivel: 3, name: "ROE (Anual)", value: "20.0%", status: "Saudável", color: "bg-green-50" },
    { nivel: 3, name: "Payback CAPEX", value: "0.2x", status: "Saudável", color: "bg-green-50" },
  ];


  // Histórico de análises
  const analysisHistory = [
    { date: "14/11/2025, 12:21", type: "Transformacao", score: 90, status: "Excelente" },
    { date: "14/11/2025, 12:21", type: "Transformacao", score: 90, status: "Excelente" },
    { date: "14/11/2025, 12:20", type: "Transformacao", score: 90, status: "Excelente" },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-semibold">Início</span>
            </Link>
            <div className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-primary">{companyName}</h2>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="gap-2"
              onClick={() => {/* TODO: Implementar chat */}}
            >
              <MessageSquare className="h-4 w-4" />
              Chat IA
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Hero Section */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Dashboard Financeiro</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-3">
              Minhas Análises
            </h1>
            <p className="text-lg text-muted-foreground">
              Acompanhe a evolução financeira da sua empresa
            </p>
          </div>

        {/* Score Card */}
        <Card className="shadow-elegant border-border/50 mb-8 animate-scale-in">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="10"
                      fill="none"
                      className="text-muted"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="10"
                      fill="none"
                      strokeDasharray={`${(90 / 100) * 352} 352`}
                      className="text-green-500 transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold">90</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Score de Saúde Financeira</h3>
                  <Badge className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-1">
                    Excelente
                  </Badge>
                  <p className="text-sm text-muted-foreground mt-2">
                    {searchEmail} • 3 análises realizadas
                  </p>
                </div>
              </div>
              <Button 
                size="lg"
                onClick={() => navigate("/analise-financeira")}
                className="gap-2 shadow-elegant hover:shadow-medium transition-all"
              >
                <TrendingUp className="w-5 h-5" />
                Nova Análise
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* All 13 Indicators */}
        <Card className="shadow-elegant border-border/50 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Indicadores Financeiros</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {indicators.map((indicator, index) => (
                <div
                  key={index}
                  className={`${indicator.color} border border-border rounded-lg p-4 hover:shadow-md transition-all`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-muted-foreground">
                      Nível {indicator.nivel}
                    </span>
                    <Badge
                      variant={indicator.status === "Saudável" ? "default" : "secondary"}
                      className={
                        indicator.status === "Saudável"
                          ? "bg-green-500 hover:bg-green-600 text-white"
                          : "bg-yellow-500 hover:bg-yellow-600 text-white"
                      }
                    >
                      {indicator.status}
                    </Badge>
                  </div>
                  <h3 className="text-sm font-semibold mb-2">{indicator.name}</h3>
                  <p className="text-2xl font-bold">{indicator.value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Histórico de Análises */}
        <Card className="shadow-elegant border-border/50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">Histórico de Análises</CardTitle>
              <Button
                variant="ghost"
                className="text-secondary hover:text-secondary/80 gap-1"
                onClick={() => navigate("/analise-financeira")}
              >
                Nova Análise →
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analysisHistory.map((analysis, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 hover:shadow-md transition-all cursor-pointer"
                  onClick={() => navigate("/resultado-analise")}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{analysis.date}</p>
                      <p className="text-xs text-muted-foreground">{analysis.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <span className="text-2xl font-bold">{analysis.score}</span>
                    <Badge className="bg-green-500 hover:bg-green-600 text-white">
                      {analysis.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        </div>
      </main>
    </div>
  );
};

export default MinhasAnalises;
