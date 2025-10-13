import { TrendingUp, Handshake, Users, Target, Rocket, Building2, ChevronRight, Lightbulb, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const valueAdditions = [
  {
    title: "Sales / GTM",
    icon: TrendingUp,
    description: "First-hand support in accelerating sales and GTM strategy for portfolio companies across India and global markets",
    metrics: [
      { icon: Target, label: "Approach", value: "Data-driven GTM" },
      { icon: Rocket, label: "Markets", value: "India & Global" },
      { icon: Building2, label: "Focus", value: "Enterprise & B2B" }
    ],
    highlights: ["Sales Strategy", "Market Expansion", "Revenue Optimization"]
  },
  {
    title: "M&A / Capital Raise",
    icon: Handshake,
    description: "Assisting companies with the next round of capital raises and M&A requirements. Supporting the founders in identifying and implementing commercial and strategic deals, cap tables, and ESOPs",
    metrics: [
      { icon: Award, label: "Support", value: "Capital raises & M&A" },
      { icon: Lightbulb, label: "Strategy", value: "Deal structuring" },
      { icon: Target, label: "Execution", value: "Cap tables & ESOPs" }
    ],
    highlights: ["Fundraising Support", "M&A Advisory", "Strategic Deals"]
  },
  {
    title: "HR / Operations",
    icon: Users,
    description: "Opening up the Partners network to help build the right teams across functions and streamline operations in early-stage companies",
    metrics: [
      { icon: Users, label: "Network", value: "Partner connections" },
      { icon: Building2, label: "Functions", value: "Cross-functional" },
      { icon: Rocket, label: "Stage", value: "Early to growth" }
    ],
    highlights: ["Team Building", "Operational Excellence", "Network Access"]
  }
];

export default function Portfolio() {
  return (
    <section className="py-40 bg-white dark:bg-background">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="mb-24">
          <div className="inline-block mb-6">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Value Creation</span>
          </div>
          <h2 className="font-serif text-5xl lg:text-7xl font-bold tracking-[-0.02em] mb-6 leading-tight max-w-4xl text-primary" data-testid="text-value-title">
            SilverX- Value More Than Capital
          </h2>
          <p className="text-xl text-foreground max-w-3xl font-light leading-relaxed" data-testid="text-value-subtitle">
            We provide hands-on support across critical business functions, leveraging decades of operational experience to accelerate growth and maximize returns for our portfolio companies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {valueAdditions.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index}
                className="group relative hover-elevate overflow-visible border-2"
                data-testid={`value-card-${index}`}
              >
                <CardContent className="p-8">
                  <div className="mb-8">
                    <div className="inline-flex p-5 bg-primary/10 rounded-xl mb-6 border-2 border-primary/20">
                      <Icon className="h-12 w-12 text-primary" />
                    </div>
                    <h3 className="font-serif text-3xl font-bold text-primary mb-4" data-testid={`text-value-title-${index}`}>
                      {item.title}
                    </h3>
                    <p className="text-foreground leading-relaxed" data-testid={`text-value-desc-${index}`}>
                      {item.description}
                    </p>
                  </div>

                  <div className="space-y-4 mb-8 pb-8 border-b border-border/50">
                    {item.metrics.map((metric, idx) => {
                      const MetricIcon = metric.icon;
                      return (
                        <div key={idx} className="flex items-start gap-3" data-testid={`metric-${index}-${idx}`}>
                          <div className="p-2 bg-primary/5 rounded-lg mt-0.5">
                            <MetricIcon className="h-4 w-4 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="text-xs uppercase tracking-wider text-foreground font-semibold mb-0.5">
                              {metric.label}
                            </div>
                            <div className="text-sm font-medium text-foreground">
                              {metric.value}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-wider text-foreground font-semibold mb-3">
                      Key Services
                    </div>
                    <div className="space-y-2">
                      {item.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2" data-testid={`highlight-${index}-${idx}`}>
                          <ChevronRight className="h-3 w-3 text-primary flex-shrink-0" />
                          <span className="text-sm text-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
