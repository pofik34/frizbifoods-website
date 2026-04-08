import { ContactSection } from "./components/ContactSection";
import { FeatureSection } from "./components/FeatureSection";
import { Footer } from "./components/Footer";
import { FranchiseSection } from "./components/FranchiseSection";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ProcessSteps } from "./components/ProcessSteps";

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_right,_#ffe6da,_#fffaf7_45%,_#ffffff_80%)]">
      <Navbar />
      <main>
        <Hero />
        <FeatureSection />
        <ProcessSteps />
        <FranchiseSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
