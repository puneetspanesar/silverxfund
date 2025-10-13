import { useState } from "react";
import { Sparkles, TrendingUp, Cpu, Target, Zap, Shield, Rocket, Users, Building2, ChevronRight, BarChart3, Network } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const segments = [
  {
    id: "ai-infrastructure",
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
    id: "consumer-tech",
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
    id: "deep-tech",
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
  const [activeTab, setActiveTab] = useState(segments[0].id);

  return (
    <section id="investment-thesis" className="py-32 relative bg-background">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <div className="inline-block mb-6">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Investment Strategy</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-foreground" data-testid="text-thesis-title">
            High-conviction bets on India's next decade
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-thesis-subtitle">
            Our investment mandate centers on identifying inflection points where technological capabilities, market timing, and founder excellence converge. We deploy concentrated capital into ventures demonstrating the potential to define categories, not merely participate in them.
          </p>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-1 lg:grid-cols-3 gap-2 mb-12 bg-transparent h-auto p-0">
            {segments.map((segment, index) => {
              const Icon = segment.icon;
              return (
                <TabsTrigger 
                  key={segment.id}
                  value={segment.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-auto p-6 flex flex-col items-start gap-3 border-2 border-border data-[state=active]:border-primary transition-all hover-elevate rounded-lg"
                  data-testid={`tab-${index}`}
                >
                  <Icon className="h-8 w-8" />
                  <div className="text-left">
                    <div className="font-semibold text-base mb-1">{segment.title}</div>
                    <div className="text-xs opacity-80 font-normal">{segment.subtitle}</div>
                  </div>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {segments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <TabsContent 
                key={segment.id}
                value={segment.id}
                className="mt-0"
                data-testid={`segment-${index}`}
              >
                <div className="bg-card border border-border rounded-xl p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                      <div className="mb-8">
                        <h3 className="text-3xl font-bold mb-3 text-foreground" data-testid={`text-segment-title-${index}`}>
                          {segment.title}
                        </h3>
                        <p className="text-muted-foreground italic mb-4">
                          {segment.subtitle}
                        </p>
                        <p className="text-foreground leading-relaxed" data-testid={`text-segment-description-${index}`}>
                          {segment.description}
                        </p>
                      </div>

                      <div className="space-y-3 mb-8">
                        <div className="text-sm uppercase tracking-wider font-semibold text-foreground mb-4">
                          Key Verticals
                        </div>
                        {segment.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg" data-testid={`highlight-${index}-${idx}`}>
                            <ChevronRight className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm font-medium text-foreground">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="text-sm uppercase tracking-wider font-semibold text-foreground mb-4">
                        Investment Criteria
                      </div>
                      {segment.metrics.map((metric, idx) => {
                        const MetricIcon = metric.icon;
                        return (
                          <div key={idx} className="flex gap-4 p-4 bg-muted/30 rounded-lg border border-border" data-testid={`metric-${index}-${idx}`}>
                            <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                              <MetricIcon className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex-1">
                              <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                                {metric.label}
                              </div>
                              <div className="text-base font-semibold text-foreground">
                                {metric.value}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
