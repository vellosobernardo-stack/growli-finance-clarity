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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, TrendingUp } from "lucide-react";
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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Análise Financeira
            </h1>
            <p className="text-xl text-muted-foreground">
              Preencha os dados financeiros da sua empresa abaixo
            </p>
          </div>

          <Card className="shadow-elegant animate-scale-in border-border/50">
            <CardHeader className="bg-muted/30">
              <CardTitle className="text-2xl flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-primary" />
                Preenchimento Manual
              </CardTitle>
              <CardDescription className="text-base">
                Preencha os dados financeiros da sua empresa abaixo
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Balanço Patrimonial */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground border-l-4 border-primary pl-3">
                    Balanço Patrimonial
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="caixa" className="text-base">Caixa</Label>
                      <Input
                        id="caixa"
                        type="number"
                        placeholder="R$ 0,00"
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contas-receber" className="text-base">Contas a Receber</Label>
                      <Input
                        id="contas-receber"
                        type="number"
                        placeholder="R$ 0,00"
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="estoque" className="text-base">Estoque</Label>
                      <Input
                        id="estoque"
                        type="number"
                        placeholder="R$ 0,00"
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="imobilizado" className="text-base">Imobilizado</Label>
                      <Input
                        id="imobilizado"
                        type="number"
                        placeholder="R$ 0,00"
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fornecedores" className="text-base">Fornecedores</Label>
                      <Input
                        id="fornecedores"
                        type="number"
                        placeholder="R$ 0,00"
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="emprestimos-cp" className="text-base">Empréstimos CP</Label>
                      <Input
                        id="emprestimos-cp"
                        type="number"
                        placeholder="R$ 0,00"
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="impostos-pagar" className="text-base">Impostos a Pagar</Label>
                      <Input
                        id="impostos-pagar"
                        type="number"
                        placeholder="R$ 0,00"
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="emprestimos-lp" className="text-base">Empréstimos LP</Label>
                      <Input
                        id="emprestimos-lp"
                        type="number"
                        placeholder="R$ 0,00"
                        className="h-11"
                      />
                    </div>
                  </div>
                </div>

                {/* DRE */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground border-l-4 border-secondary pl-3">
                    DRE
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="receita-bruta" className="text-base">Receita Bruta</Label>
                      <Input
                        id="receita-bruta"
                        type="number"
                        placeholder="R$ 0,00"
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="custo-vendas" className="text-base">Custo Vendas</Label>
                      <Input
                        id="custo-vendas"
                        type="number"
                        placeholder="R$ 0,00"
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="despesas-operacionais" className="text-base">Despesas Operacionais</Label>
                      <Input
                        id="despesas-operacionais"
                        type="number"
                        placeholder="R$ 0,00"
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="despesas-financeiras" className="text-base">Despesas Financeiras</Label>
                      <Input
                        id="despesas-financeiras"
                        type="number"
                        placeholder="R$ 0,00"
                        className="h-11"
                      />
                    </div>
                  </div>
                </div>

                {/* Informações Adicionais */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground border-l-4 border-accent pl-3">
                    Informações Adicionais
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="setor" className="text-base">Setor de Atuação</Label>
                      <Select>
                        <SelectTrigger id="setor" className="h-11">
                          <SelectValue placeholder="Selecione..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="agricultura">Agricultura, Pecuária, Produção Florestal</SelectItem>
                          <SelectItem value="comercio">Comércio</SelectItem>
                          <SelectItem value="industria">Indústria</SelectItem>
                          <SelectItem value="servicos">Serviços</SelectItem>
                          <SelectItem value="tecnologia">Tecnologia</SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="estado" className="text-base">Estado (Opcional)</Label>
                      <Select>
                        <SelectTrigger id="estado" className="h-11">
                          <SelectValue placeholder="Selecione..." />
                        </SelectTrigger>
                        <SelectContent>
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
                      <Label htmlFor="mes" className="text-base">Mês</Label>
                      <Select>
                        <SelectTrigger id="mes" className="h-11">
                          <SelectValue placeholder="Selecione..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="01">Janeiro</SelectItem>
                          <SelectItem value="02">Fevereiro</SelectItem>
                          <SelectItem value="03">Março</SelectItem>
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
                      <Label htmlFor="ano" className="text-base">Ano</Label>
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

                {/* Botões de Ação */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button
                    type="submit"
                    className="flex-1 h-12 text-base font-semibold shadow-elegant hover:shadow-medium transition-all"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processando..." : "Gerar Análise"}
                  </Button>
                  <Link to="/" className="flex-1">
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full h-12 text-base font-semibold"
                    >
                      Cancelar
                    </Button>
                  </Link>
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
