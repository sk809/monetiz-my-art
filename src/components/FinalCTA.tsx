import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
      <div className="absolute inset-0" style={{ 
        backgroundImage: "radial-gradient(circle at 20% 50%, hsl(263 70% 50% / 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(193 95% 55% / 0.15) 0%, transparent 50%)"
      }} />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold leading-tight lg:text-6xl animate-fade-in-up">
            Start Monetizing Your{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Creativity Today
            </span>
          </h2>
          
          <p className="mb-10 text-lg text-muted-foreground lg:text-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Join Cre8pay and turn your audience into income in minutes.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="xl" className="group">
              Sign Up for Free
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="hero-outline" size="xl" className="group">
              <Play className="transition-transform group-hover:scale-110" />
              Watch Demo
            </Button>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
