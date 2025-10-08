import { Sparkles, TrendingUp, Cpu } from "lucide-react";

const segments = [
  {
    icon: Sparkles,
    title: "AI Natives",
    subtitle: "Developer platforms & tooling",
    description: "Enterprise AI, Vertical AI, and consumer applications defining the next generation of intelligent software",
    stats: "45% allocation"
  },
  {
    icon: TrendingUp,
    title: "Consumer Tech",
    subtitle: "Mass-adoption solutions",
    description: "Scalable platforms with strong unit economics and clear pathways to profitability in high-growth markets",
    stats: "35% allocation"
  },
  {
    icon: Cpu,
    title: "Deep Tech",
    subtitle: "IP-driven innovation",
    description: "Patent-backed companies in semiconductors, EV, and advanced technologies with defensible moats",
    stats: "20% allocation"
  }
];

export default function InvestmentThesis() {
  return (
    <section id="investment-thesis" className="py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="relative max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="mb-24">
          <div className="inline-block mb-6">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-accent">Investment Strategy</span>
          </div>
          <h2 className="font-serif text-5xl lg:text-7xl font-bold tracking-[-0.02em] mb-6 leading-tight max-w-4xl" data-testid="text-thesis-title">
            High-conviction bets on India's next decade
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl font-light leading-relaxed" data-testid="text-thesis-subtitle">
            We invest in themes expected to dominate, doubling down on potential outliers to create massive outcomes
          </p>
        </div>
        
        <div className="space-y-1">
          {segments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <div 
                key={index} 
                className="group relative border-t border-border/50 py-12 hover:bg-card/30 transition-all duration-500 px-8 -mx-8"
                data-testid={`segment-${index}`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                  <div className="flex items-start gap-8 flex-1">
                    <div className="p-4 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-500">
                      <Icon className="h-10 w-10 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <h3 className="font-serif text-3xl font-bold" data-testid={`text-segment-title-${index}`}>
                          {segment.title}
                        </h3>
                        <span className="text-sm text-muted-foreground">• {segment.subtitle}</span>
                      </div>
                      <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed" data-testid={`text-segment-description-${index}`}>
                        {segment.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-right lg:text-right">
                    <div className="text-2xl font-bold tabular-nums text-accent">{segment.stats}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
