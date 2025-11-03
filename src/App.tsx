import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AnaliseFinanceira from "./pages/AnaliseFinanceira";
import AnaliseIntermediaria from "./pages/AnaliseIntermediaria";
import ResultadoAnalise from "./pages/ResultadoAnalise";
import ResultadoAnaliseNivel2 from "./pages/ResultadoAnaliseNivel2";
import ResultadoAnaliseNivel3 from "./pages/ResultadoAnaliseNivel3";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/analise-financeira" element={<AnaliseFinanceira />} />
          <Route path="/analise-intermediaria" element={<AnaliseIntermediaria />} />
          <Route path="/resultado-analise" element={<ResultadoAnalise />} />
          <Route path="/resultado-analise-nivel2" element={<ResultadoAnaliseNivel2 />} />
          <Route path="/resultado-analise-nivel3" element={<ResultadoAnaliseNivel3 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
