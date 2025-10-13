import { Button } from "@/components/ui/button";
import { TrendingUp, Handshake } from "lucide-react";
import marketplaceGrid from "@/assets/marketplace-grid.jpg";

const MarketplaceSection = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-in-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2">
              <TrendingUp className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">Marketplace & Community</span>
            </div>
            
            <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
              Opportunities to{" "}
              <span className="bg-gradient-secondary bg-clip-text text-transparent">
                Monetize Your Influence
              </span>
            </h2>
            
            <p className="mb-8 text-lg text-muted-foreground">
              Browse trending products, claim paid promotions, and connect with other creators and brands.
            </p>
            
            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="mb-2 text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Digital Products</div>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="mb-2 text-3xl font-bold text-secondary">50K+</div>
                <div className="text-sm text-muted-foreground">Active Creators</div>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="mb-2 text-3xl font-bold text-accent">$2M+</div>
                <div className="text-sm text-muted-foreground">Paid Out</div>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="mb-2 text-3xl font-bold text-primary-glow">500+</div>
                <div className="text-sm text-muted-foreground">Brand Partnerships</div>
              </div>
            </div>
            
            <Button variant="secondary" size="lg" className="group">
              <Handshake className="transition-transform group-hover:scale-110" />
              Explore Marketplace
            </Button>
          </div>
          
          <div className="animate-fade-in">
            <div className="overflow-hidden rounded-2xl border border-secondary/20 shadow-glow-secondary">
              <img 
                src={marketplaceGrid} 
                alt="Marketplace Product Grid" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceSection;
