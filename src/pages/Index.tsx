import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AIProductSection from "@/components/AIProductSection";
import MarketplaceSection from "@/components/MarketplaceSection";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <div id="features">
          <Features />
        </div>
        <AIProductSection />
        <div id="marketplace">
          <MarketplaceSection />
        </div>
        <Pricing />
        <div id="testimonials">
          <Testimonials />
        </div>
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
