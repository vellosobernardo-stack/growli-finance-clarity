import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, FileText, Flame, Wallet, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const AnaliseFinanceira = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulando processamento
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Análise iniciada!",
      description: "Estamos processando seus dados financeiros.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
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
              Análise Financeira Growli
            </h1>
            <p className="text-lg text-muted-foreground">
              Transforme dados em decisões estratégicas
            </p>
          </div>

          {/* Stepper */}
          <div className="flex items-center justify-center mb-12 animate-scale-in">
            <div className="flex items-center gap-4">
              {/* Step 1 - Active */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-elegant">
                  1
                </div>
                <span className="text-sm font-medium text-primary">Básico</span>
              </div>
              
              {/* Connector */}
              <div className="w-20 h-1 bg-border rounded-full"></div>
              
              {/* Step 2 - Inactive */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-muted text-muted-foreground flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <span className="text-sm font-medium text-muted-foreground">Intermediário</span>
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
              {/* Title */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Análise Básica
                </h2>
                <p className="text-muted-foreground">
                  Preencha as informações essenciais para começar sua análise financeira
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-12">
                {/* Informações Gerais */}
                <div className="space-y-4 p-6 rounded-lg bg-muted/30 border border-border/50">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Informações Gerais
                    </h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="setor" className="text-sm font-medium">
                        Setor de Atuação <span className="text-destructive">*</span>
                      </Label>
                      <Select>
                        <SelectTrigger id="setor" className="h-11">
                          <SelectValue placeholder="Selecione..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="construcao">Construção</SelectItem>
                          <SelectItem value="comercio">Comércio</SelectItem>
                          <SelectItem value="industria">Indústria</SelectItem>
                          <SelectItem value="servicos">Serviços</SelectItem>
                          <SelectItem value="tecnologia">Tecnologia</SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="estado" className="text-sm font-medium">
                        Estado (UF) <span className="text-destructive">*</span>
                      </Label>
                      <Select>
                        <SelectTrigger id="estado" className="h-11">
                          <SelectValue placeholder="Selecione..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="am">Amapá</SelectItem>
                          <SelectItem value="sp">São Paulo</SelectItem>
                          <SelectItem value="rj">Rio de Janeiro</SelectItem>
                          <SelectItem value="mg">Minas Gerais</SelectItem>
                          <SelectItem value="rs">Rio Grande do Sul</SelectItem>
                          <SelectItem value="pr">Paraná</SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mes" className="text-sm font-medium">
                        Mês de Referência <span className="text-destructive">*</span>
                      </Label>
                      <Select>
                        <SelectTrigger id="mes" className="h-11">
                          <SelectValue placeholder="Selecione..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="03">Março</SelectItem>
                          <SelectItem value="01">Janeiro</SelectItem>
                          <SelectItem value="02">Fevereiro</SelectItem>
                          <SelectItem value="04">Abril</SelectItem>
                          <SelectItem value="05">Maio</SelectItem>
                          <SelectItem value="06">Junho</SelectItem>
                          <SelectItem value="07">Julho</SelectItem>
                          <SelectItem value="08">Agosto</SelectItem>
                          <SelectItem value="09">Setembro</SelectItem>
                          <SelectItem value="10">Outubro</SelectItem>
                          <SelectItem value="11">Novembro</SelectItem>
                          <SelectItem value="12">Dezembro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ano" className="text-sm font-medium">
                        Ano de Referência <span className="text-destructive">*</span>
                      </Label>
                      <Select>
                        <SelectTrigger id="ano" className="h-11">
                          <SelectValue placeholder="Selecione..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2025">2025</SelectItem>
                          <SelectItem value="2024">2024</SelectItem>
                          <SelectItem value="2023">2023</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Receitas e Custos */}
                <div className="space-y-4 p-6 rounded-lg bg-muted/30 border border-border/50">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Flame className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Receitas e Custos
                    </h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="receita-bruta" className="text-sm font-medium">
                        Receita Bruta Mensal <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">R$</span>
                        <Input
                          id="receita-bruta"
                          type="text"
                          placeholder="100.000,00"
                          className="h-11 pl-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="custo-vendas" className="text-sm font-medium">
                        Custo das Vendas (CMV/CSP) <span className="text-muted-foreground">(Opcional)</span>
                      </Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">R$</span>
                        <Input
                          id="custo-vendas"
                          type="text"
                          placeholder="65.000,00"
                          className="h-11 pl-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="despesas-fixas" className="text-sm font-medium">
                        Despesas Fixas Mensais <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">R$</span>
                        <Input
                          id="despesas-fixas"
                          type="text"
                          placeholder="25.000,00"
                          className="h-11 pl-10"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Disponibilidades */}
                <div className="space-y-4 p-6 rounded-lg bg-muted/30 border border-border/50">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Wallet className="h-5 w-5 text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Disponibilidades
                    </h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="caixa" className="text-sm font-medium">
                        Caixa <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">R$</span>
                        <Input
                          id="caixa"
                          type="text"
                          placeholder="15.000,00"
                          className="h-11 pl-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="conta-corrente" className="text-sm font-medium">
                        Conta Corrente <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">R$</span>
                        <Input
                          id="conta-corrente"
                          type="text"
                          placeholder="35.000,00"
                          className="h-11 pl-10"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contas a Receber e Pagar */}
                <div className="space-y-4 p-6 rounded-lg bg-muted/30 border border-border/50">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <BarChart3 className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Contas a Receber e Pagar (30 dias)
                    </h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="contas-receber" className="text-sm font-medium">
                        Contas a Receber (30 dias) <span className="text-muted-foreground">(Opcional)</span>
                      </Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">R$</span>
                        <Input
                          id="contas-receber"
                          type="text"
                          placeholder="30.000,00"
                          className="h-11 pl-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contas-pagar" className="text-sm font-medium">
                        Contas a Pagar (30 dias) <span className="text-muted-foreground">(Opcional)</span>
                      </Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">R$</span>
                        <Input
                          id="contas-pagar"
                          type="text"
                          placeholder="20.000,00"
                          className="h-11 pl-10"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    className="w-full h-12 text-base font-semibold shadow-elegant hover:shadow-medium transition-all"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processando..." : "Gerar Análise Nível 1"}
                  </Button>
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    Campos com * são essenciais<br />
                    Campos opcionais podem ser estimados automaticamente
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

export default AnaliseFinanceira;
