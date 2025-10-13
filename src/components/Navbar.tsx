import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary shadow-glow">
              <span className="text-xl font-bold text-primary-foreground">C8</span>
            </div>
            <span className="text-xl font-bold">Cre8pay</span>
          </div>
          
          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Features
            </a>
            <a href="#marketplace" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Marketplace
            </a>
            <a href="#pricing" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Pricing
            </a>
            <a href="#testimonials" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Success Stories
            </a>
          </div>
          
          <div className="hidden items-center gap-4 md:flex">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
        
        {mobileMenuOpen && (
          <div className="border-t border-border py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-sm font-medium text-foreground">
                Features
              </a>
              <a href="#marketplace" className="text-sm font-medium text-foreground">
                Marketplace
              </a>
              <a href="#pricing" className="text-sm font-medium text-foreground">
                Pricing
              </a>
              <a href="#testimonials" className="text-sm font-medium text-foreground">
                Success Stories
              </a>
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="ghost" size="sm" className="w-full">
                  Sign In
                </Button>
                <Button variant="hero" size="sm" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
