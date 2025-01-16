import { Hero } from "@/components/Hero";
import { ImpactStats } from "@/components/ImpactStats";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ImpactStats />
      <Footer />
    </div>
  );
};

export default Index;