import { Button } from "@/components/ui/button";
import { MessageSquare, Sparkles } from "lucide-react";
import aiBotInterface from "@/assets/ai-bot-interface.jpg";

const AIProductSection = () => {
  return (
    <section className="bg-gradient-subtle py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="overflow-hidden rounded-2xl border border-primary/20 shadow-glow">
              <img 
                src={aiBotInterface} 
                alt="AI Bot Product Creation Interface" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-fade-in-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Creation</span>
            </div>
            
            <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
              Create Products That Sell{" "}
              <span className="bg-gradient-secondary bg-clip-text text-transparent">
                Without the Guesswork
              </span>
            </h2>
            
            <p className="mb-8 text-lg text-muted-foreground">
              Our AI assistant guides you step-by-step—from choosing a product type to launching in the marketplace.
            </p>
            
            <div className="mb-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                  1
                </div>
                <span className="text-foreground">Choose your topic and target audience</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                  2
                </div>
                <span className="text-foreground">Select templates and customize</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                  3
                </div>
                <span className="text-foreground">Set your pricing strategy</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                  4
                </div>
                <span className="text-foreground">Launch and promote to your audience</span>
              </div>
            </div>
            
            <Button variant="hero" size="lg" className="group">
              <MessageSquare className="transition-transform group-hover:scale-110" />
              Start Creating with AI
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIProductSection;
