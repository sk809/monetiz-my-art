import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight lg:text-7xl animate-fade-in-up">
            Turn Your Creativity Into Cash with{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Cre8pay
            </span>
          </h1>
          
          <p className="mb-10 text-lg text-muted-foreground lg:text-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Connect, Build, sell, and monetize your digital products effortlessly—AI-guided, marketplace-ready, and community-backed.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="xl" className="group">
              Get Started for Free
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="hero-outline" size="xl" className="group">
              <Play className="transition-transform group-hover:scale-110" />
              Watch Demo
            </Button>
          </div>
          
          <div className="mt-16 animate-scale-in" style={{ animationDelay: "0.6s" }}>
            <div className="overflow-hidden rounded-2xl border border-primary/20 shadow-glow">
              <img 
                src={heroDashboard} 
                alt="Cre8pay Dashboard Interface" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
