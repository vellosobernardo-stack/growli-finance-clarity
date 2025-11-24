import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, TrendingUp, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MinhasAnalises = () => {
  const navigate = useNavigate();
  const [searchEmail, setSearchEmail] = useState("suporte@leme.app.br");

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

  // Indicadores atuais principais (4 primeiros)
  const mainIndicators = [
    { label: "Liquidez Corrente", value: "3.2" },
    { label: "Margem Líquida", value: "36%" },
    { label: "Capital de Giro", value: "R$ 16.500,00" },
    { label: "Disponível", value: "R$ 14.000,00" },
  ];

  // Histórico de análises
  const analysisHistory = [
    { date: "14/11/2025, 12:21", type: "Transformacao", score: 90, status: "Excelente" },
    { date: "14/11/2025, 12:21", type: "Transformacao", score: 90, status: "Excelente" },
    { date: "14/11/2025, 12:20", type: "Transformacao", score: 90, status: "Excelente" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Minhas Análises</h1>
          <p className="text-primary-foreground/80">Acompanhe a evolução financeira da sua empresa</p>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-8">
        {/* Search Bar */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="email"
                  value={searchEmail}
                  onChange={(e) => setSearchEmail(e.target.value)}
                  className="pl-10"
                  placeholder="Buscar por email..."
                />
              </div>
              <Button className="bg-secondary hover:bg-secondary/90 text-white px-8">
                Buscar
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Company Info */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Leme</h2>
            <p className="text-sm text-muted-foreground">
              {searchEmail} • 3 análises realizadas
            </p>
          </div>
        </div>

        {/* Score and Main Indicators */}
        <div className="grid md:grid-cols-[300px_1fr] gap-6 mb-8">
          {/* Score Atual */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Score Atual</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <div className="relative w-40 h-40 mb-4">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="none"
                    className="text-muted"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={`${(90 / 100) * 440} 440`}
                    className="text-green-500"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold">90</span>
                </div>
              </div>
              <Badge className="bg-green-500 hover:bg-green-600 text-white">
                Excelente
              </Badge>
            </CardContent>
          </Card>

          {/* Indicadores Atuais */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Indicadores Atuais</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {mainIndicators.map((indicator, index) => (
                  <div key={index}>
                    <p className="text-xs text-muted-foreground mb-1">
                      {indicator.label}
                    </p>
                    <p className="text-xl font-bold">{indicator.value}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* All 13 Indicators */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Todos os Indicadores</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {indicators.map((indicator, index) => (
                <div
                  key={index}
                  className={`${indicator.color} border border-border rounded-lg p-4`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-muted-foreground">
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
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Histórico de Análises</CardTitle>
              <Button
                variant="ghost"
                className="text-secondary hover:text-secondary/80"
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
                  className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                  onClick={() => navigate("/resultado-analise")}
                >
                  <div className="flex items-center gap-4">
                    <Calendar className="w-5 h-5 text-muted-foreground" />
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
    </div>
  );
};

export default MinhasAnalises;
