import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import UseCases from "@/components/UseCases";
import LedgerTree from "@/components/LedgerTree";
import OfflineBanner from "@/components/OfflineBanner";
import HowItWorks from "@/components/HowItWorks";
import ControlSection from "@/components/ControlSection";
import FeatureGrid from "@/components/FeatureGrid";
import Faq from "@/components/Faq";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <TrustedBy />
        <UseCases />
        <LedgerTree />
        <OfflineBanner />
        <HowItWorks />
        <ControlSection />
        <FeatureGrid />
        <Faq />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
