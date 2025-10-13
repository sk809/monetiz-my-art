import { BarChart3, ShoppingBag, DollarSign, Bot, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: BarChart3,
    title: "Dashboard Analytics",
    description: "Track product performance, sales, and revenue in real-time with comprehensive insights.",
  },
  {
    icon: ShoppingBag,
    title: "Marketplace",
    description: "Explore digital products to promote and monetize instantly from our curated collection.",
  },
  {
    icon: DollarSign,
    title: "Income Sources",
    description: "Personalized monetization options: newsletters, e-books, brand collaborations, and more.",
  },
  {
    icon: Bot,
    title: "AI Bot Assisted",
    description: "Guided product creation based on your audience & demographics for maximum success.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Connect with business owners, get paid promotions, and collaborate with other creators.",
  },
];

const Features = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold lg:text-5xl">
            Everything a Creator Needs in{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">One Place</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            From discovering opportunities to launching your own products, Cre8pay makes it simple.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group border-border bg-card transition-all hover:border-primary/50 hover:shadow-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-flex rounded-lg bg-gradient-primary p-3 shadow-glow">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#pricing" 
            className="inline-flex items-center gap-2 text-lg font-medium text-primary hover:text-primary-glow transition-colors"
          >
            Discover How Cre8pay Can Work for You
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
