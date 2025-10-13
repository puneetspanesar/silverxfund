import { TrendingUp, Handshake, Users, Target, Rocket, Building2, ChevronRight, Lightbulb, Award } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <section className="py-16 bg-background">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="mb-12 max-w-4xl">
          <div className="inline-block mb-6">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Value Creation</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-foreground" data-testid="text-value-title">
            SilverX- Value More Than Capital
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-value-subtitle">
            We provide hands-on support across critical business functions, leveraging decades of operational experience to accelerate growth and maximize returns for our portfolio companies.
          </p>
        </div>
        
        <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
          {valueAdditions.map((item, index) => {
            const Icon = item.icon;
            return (
              <AccordionItem 
                key={index}
                value={`item-${index}`}
                className="border border-white/10 rounded-3xl overflow-hidden bg-white/5 backdrop-blur-2xl shadow-xl shadow-black/10"
                data-testid={`value-card-${index}`}
              >
                <AccordionTrigger className="px-6 py-6 hover:no-underline [&[data-state=open]]:bg-white/10 transition-all duration-300">
                  <div className="flex items-center gap-6 w-full">
                    <div className="p-4 bg-primary/10 backdrop-blur-xl rounded-2xl border border-primary/20">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="text-2xl font-bold text-foreground" data-testid={`text-value-title-${index}`}>
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">Click to expand details</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="pt-6 border-t border-white/10">
                    <p className="text-foreground leading-relaxed mb-8" data-testid={`text-value-desc-${index}`}>
                      {item.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <div className="text-xs uppercase tracking-wider font-semibold text-foreground mb-4">
                          Investment Approach
                        </div>
                        <div className="space-y-3">
                          {item.metrics.map((metric, idx) => {
                            const MetricIcon = metric.icon;
                            return (
                              <div key={idx} className="flex items-start gap-3 p-3 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10" data-testid={`metric-${index}-${idx}`}>
                                <div className="p-2 bg-primary/10 backdrop-blur-xl rounded-lg border border-primary/20">
                                  <MetricIcon className="h-4 w-4 text-primary" />
                                </div>
                                <div className="flex-1">
                                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                                    {metric.label}
                                  </div>
                                  <div className="text-sm font-semibold text-foreground">
                                    {metric.value}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <div className="text-xs uppercase tracking-wider font-semibold text-foreground mb-4">
                          Key Services
                        </div>
                        <div className="space-y-2">
                          {item.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10" data-testid={`highlight-${index}-${idx}`}>
                              <ChevronRight className="h-4 w-4 text-primary flex-shrink-0" />
                              <span className="text-sm font-medium text-foreground">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
