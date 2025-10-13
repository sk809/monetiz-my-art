import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Freemium",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started",
    features: [
      "Basic dashboard access",
      "Browse marketplace",
      "Community access",
      "Up to 3 products",
      "5% transaction fee",
    ],
    cta: "Start Free",
    variant: "outline" as const,
  },
  {
    name: "Basic",
    price: "$29",
    period: "per month",
    description: "For serious creators",
    features: [
      "Full analytics dashboard",
      "AI-assisted product creation",
      "Unlimited products",
      "Priority marketplace placement",
      "3% transaction fee",
      "Email support",
    ],
    cta: "Get Started",
    variant: "hero" as const,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "per month",
    description: "Advanced features for pros",
    features: [
      "Everything in Basic",
      "Advanced analytics & insights",
      "Priority support 24/7",
      "Custom branding",
      "1% transaction fee",
      "Dedicated account manager",
      "API access",
    ],
    cta: "Contact Sales",
    variant: "secondary" as const,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="bg-gradient-subtle py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold lg:text-5xl">
            Plans Designed for{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Every Creator</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Start free, upgrade as you grow, and unlock advanced features for serious creators.
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border-border bg-card transition-all hover:border-primary/50 animate-fade-in ${
                plan.popular ? "border-primary shadow-glow lg:scale-105" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-gradient-primary px-4 py-1 text-sm font-semibold text-primary-foreground shadow-glow">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
                <div className="mt-4">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button variant={plan.variant} size="lg" className="w-full">
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
