import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Content Creator",
    followers: "250K",
    earnings: "$45K",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    quote: "Cre8pay transformed how I monetize my content. The AI assistant helped me launch my first ebook in just 3 days!",
  },
  {
    name: "Marcus Chen",
    role: "Digital Entrepreneur",
    followers: "180K",
    earnings: "$38K",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
    quote: "The marketplace connections alone have doubled my income. Best platform for serious creators.",
  },
  {
    name: "Emma Rodriguez",
    role: "Lifestyle Influencer",
    followers: "500K",
    earnings: "$92K",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    quote: "I was skeptical at first, but the results speak for themselves. My audience loves the products I create here.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold lg:text-5xl">
            Creators Are Earning More{" "}
            <span className="bg-gradient-secondary bg-clip-text text-transparent">With Cre8pay</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Hear from influencers who turned their followers into a revenue stream.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-border bg-card transition-all hover:border-secondary/50 hover:shadow-glow-secondary animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <Quote className="mb-4 h-8 w-8 text-secondary opacity-50" />
                
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="mb-6 text-foreground">{testimonial.quote}</p>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full border-2 border-primary"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
                
                <div className="mt-4 flex gap-4 border-t border-border pt-4">
                  <div>
                    <div className="text-lg font-bold text-primary">{testimonial.followers}</div>
                    <div className="text-xs text-muted-foreground">Followers</div>
                  </div>
                  <div className="border-l border-border pl-4">
                    <div className="text-lg font-bold text-secondary">{testimonial.earnings}</div>
                    <div className="text-xs text-muted-foreground">Earned</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
