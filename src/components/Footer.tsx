import { Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary shadow-glow">
                <span className="text-xl font-bold text-primary-foreground">C8</span>
              </div>
              <span className="text-xl font-bold">Cre8pay</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering creators to monetize their passion and build sustainable digital businesses.
            </p>
          </div>
          
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="transition-colors hover:text-primary">Features</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Pricing</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Marketplace</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="transition-colors hover:text-primary">Blog</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Help Center</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Creator Stories</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">API Docs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="transition-colors hover:text-primary">About</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Careers</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Privacy</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2024 Cre8pay. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
