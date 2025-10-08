import { Sparkles, TrendingUp, Cpu } from "lucide-react";

const segments = [
  {
    icon: Sparkles,
    title: "AI-First Infrastructure",
    subtitle: "Foundation models to enterprise orchestration",
    description: "We target companies building differentiated AI infrastructure—from novel architectures and specialized compute layers to enterprise orchestration platforms. Our focus is on ventures creating genuine technological moats through proprietary training methodologies, inference optimization, or domain-specific model architectures that solve previously intractable problems at scale.",
    insights: [
      "Proprietary data advantages creating sustainable competitive barriers",
      "Architectural innovations enabling 10x cost or performance improvements",
      "Enterprise adoption patterns indicating category-defining potential"
    ]
  },
  {
    icon: TrendingUp,
    title: "Consumer Technology",
    subtitle: "Digital-first platforms reshaping behavior",
    description: "We invest in consumer platforms demonstrating exceptional product-market fit, network effects, and capital-efficient scaling. Our conviction centers on founders who deeply understand behavioral psychology, distribution dynamics, and the intersection of technology with evolving cultural norms—particularly in India's unique consumption landscape.",
    insights: [
      "Proven organic growth loops and viral coefficients exceeding 1.5x",
      "Unit economics demonstrating clear paths to sustainable profitability",
      "Defensible market positions through data, community, or brand equity"
    ]
  },
  {
    icon: Cpu,
    title: "Deep Technology",
    subtitle: "IP-protected innovation at the frontier",
    description: "Our deep tech investments focus on ventures with substantial intellectual property portfolios addressing critical infrastructure challenges. We seek companies with technical founders solving hard problems in semiconductors, advanced materials, clean energy, and next-generation computing—where India's engineering talent can establish global technology leadership.",
    insights: [
      "Patent portfolios creating multi-year lead advantages in critical domains",
      "Technical risk substantially de-risked through proof-of-concept validation",
      "Total addressable markets exceeding $50B with structural tailwinds"
    ]
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
        
        <div className="space-y-0">
          {segments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <div 
                key={index} 
                className="group relative border-t border-border/30 py-16 hover:bg-muted/10 transition-all duration-500 px-8 -mx-8"
                data-testid={`segment-${index}`}
              >
                <div className="flex flex-col gap-8">
                  <div className="flex items-start gap-8">
                    <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-500 border border-primary/20">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="mb-2">
                        <h3 className="font-serif text-4xl font-bold text-primary mb-2" data-testid={`text-segment-title-${index}`}>
                          {segment.title}
                        </h3>
                        <span className="text-base text-muted-foreground/80 font-serif italic">{segment.subtitle}</span>
                      </div>
                      <p className="text-foreground text-lg max-w-4xl leading-relaxed mt-6 font-light" data-testid={`text-segment-description-${index}`}>
                        {segment.description}
                      </p>
                      
                      <div className="mt-8 space-y-3">
                        {segment.insights.map((insight, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                            <p className="text-muted-foreground text-base leading-relaxed" data-testid={`text-insight-${index}-${idx}`}>
                              {insight}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
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
