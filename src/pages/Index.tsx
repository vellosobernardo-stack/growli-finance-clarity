import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import DocumentsSection from "@/components/DocumentsSection";
import BenefitsSection from "@/components/BenefitsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <DocumentsSection />
      <BenefitsSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
