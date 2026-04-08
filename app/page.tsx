import { ContactSection } from "./components/ContactSection";
import { FeatureSection } from "./components/FeatureSection";
import { Footer } from "./components/Footer";
import { FranchiseSection } from "./components/FranchiseSection";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ProcessSteps } from "./components/ProcessSteps";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_right,_#ffe6da,_#fffaf7_45%,_#ffffff_80%)]">
      <div className="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-orange-200/35 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-rose-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-1/3 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,#f9731612_1px,transparent_1px),linear-gradient(to_bottom,#f9731612_1px,transparent_1px)] [background-size:34px_34px]" />
      <Navbar />
      <main className="relative z-10">
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
