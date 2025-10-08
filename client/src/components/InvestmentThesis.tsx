import { Sparkles, TrendingUp, Cpu, Target, Zap, Shield, Rocket, Users, Building2, ChevronRight, BarChart3, Network } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const segments = [
  {
    icon: Sparkles,
    title: "AI-First Infrastructure",
    subtitle: "Foundation models to enterprise platforms",
    description: "Differentiated AI infrastructure with genuine technological moats",
    metrics: [
      { icon: Target, label: "Focus Areas", value: "LLMs, Inference, DevTools" },
      { icon: Zap, label: "Performance", value: "10x improvements" },
      { icon: Shield, label: "Moat", value: "Proprietary data" }
    ],
    highlights: ["Enterprise AI", "Vertical SaaS", "MLOps Platforms"]
  },
  {
    icon: TrendingUp,
    title: "Consumer Technology",
    subtitle: "Digital platforms reshaping behavior",
    description: "Capital-efficient scaling with exceptional product-market fit",
    metrics: [
      { icon: Users, label: "Growth", value: "Viral coefficient >1.5x" },
      { icon: BarChart3, label: "Unit Economics", value: "Path to profitability" },
      { icon: Network, label: "Defense", value: "Network effects" }
    ],
    highlights: ["Social Commerce", "Fintech", "Creator Economy"]
  },
  {
    icon: Cpu,
    title: "Deep Technology",
    subtitle: "IP-protected frontier innovation",
    description: "Patent-backed ventures solving critical infrastructure challenges",
    metrics: [
      { icon: Building2, label: "Sectors", value: "Semiconductors, Clean Energy" },
      { icon: Shield, label: "Protection", value: "Multi-year IP lead" },
      { icon: Rocket, label: "Market Size", value: "$50B+ TAM" }
    ],
    highlights: ["Advanced Materials", "Quantum Computing", "Robotics"]
  }
];

export default function InvestmentThesis() {
  return (
    <section id="investment-thesis" className="py-40 relative overflow-hidden bg-white dark:bg-background">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="mb-24">
          <div className="inline-block mb-6">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Investment Strategy</span>
          </div>
          <h2 className="font-serif text-5xl lg:text-7xl font-bold tracking-[-0.02em] mb-6 leading-tight max-w-4xl text-primary" data-testid="text-thesis-title">
            High-conviction bets on India's next decade
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl font-light leading-relaxed" data-testid="text-thesis-subtitle">
            Our investment mandate centers on identifying inflection points where technological capabilities, market timing, and founder excellence converge. We deploy concentrated capital into ventures demonstrating the potential to define categories, not merely participate in them.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {segments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <Card 
                key={index}
                className="group relative hover-elevate overflow-visible border-2"
                data-testid={`segment-${index}`}
              >
                <CardContent className="p-8">
                  <div className="mb-8">
                    <div className="inline-flex p-5 bg-primary/10 rounded-xl mb-6 border-2 border-primary/20">
                      <Icon className="h-12 w-12 text-primary" />
                    </div>
                    <h3 className="font-serif text-3xl font-bold text-primary mb-3" data-testid={`text-segment-title-${index}`}>
                      {segment.title}
                    </h3>
                    <p className="text-muted-foreground/80 font-serif text-sm italic mb-4">
                      {segment.subtitle}
                    </p>
                    <p className="text-foreground leading-relaxed" data-testid={`text-segment-description-${index}`}>
                      {segment.description}
                    </p>
                  </div>

                  <div className="space-y-4 mb-8 pb-8 border-b border-border/50">
                    {segment.metrics.map((metric, idx) => {
                      const MetricIcon = metric.icon;
                      return (
                        <div key={idx} className="flex items-start gap-3" data-testid={`metric-${index}-${idx}`}>
                          <div className="p-2 bg-primary/5 rounded-lg mt-0.5">
                            <MetricIcon className="h-4 w-4 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-0.5">
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
                    <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3">
                      Key Verticals
                    </div>
                    <div className="space-y-2">
                      {segment.highlights.map((highlight, idx) => (
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
