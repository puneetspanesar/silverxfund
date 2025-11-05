import { Sparkles, TrendingUp, Cpu, ChevronRight } from "lucide-react";

const segments = [
  {
    icon: Sparkles,
    title: "AI First",
    description: "Foundational infrastructure enabling the AI transformation",
    highlights: [
      "Developer platforms & tooling",
      "Horizontal & Enterprise AI",
      "Vertical AI",
      "Consumer AI applications"
    ]
  },
  {
    icon: TrendingUp,
    title: "Consumer Tech",
    description: "Scalable platforms disrupting traditional consumer markets",
    highlights: [
      "Fintech",
      "Healthcare",
      "Consumer",
      "Commerce"
    ]
  },
  {
    icon: Cpu,
    title: "Deep Tech",
    description: "Breakthrough innovations in compute and materials science",
    highlights: [
      "Advanced materials",
      "Quantum computing",
      "Robotics"
    ]
  }
];

export default function InvestmentThesis() {
  return (
    <section id="investment-thesis" className="py-12 relative bg-background">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="mb-8 text-center max-w-4xl mx-auto">
          <div className="inline-block mb-4">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Investment Strategy</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight text-foreground" data-testid="text-thesis-title">
            Investment Thesis
          </h2>
          <p className="text-base text-foreground leading-relaxed" data-testid="text-thesis-subtitle">
            Our investment mandate centers on identifying inflection points where technological capabilities, market timing, and founder excellence converge
          </p>
        </div>
        
        <div className="space-y-6">
          {segments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 shadow-lg shadow-black/5 hover:border-white/20 transition-all duration-300"
                data-testid={`segment-${index}`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="flex items-start gap-4 lg:w-1/3">
                    <div className="w-12 h-12 bg-primary/10 backdrop-blur-xl rounded-xl border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1" data-testid={`text-segment-title-${index}`}>
                        {segment.title}
                      </h3>
                      <p className="text-sm text-foreground/80">{segment.description}</p>
                    </div>
                  </div>

                  <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {segment.highlights.map((highlight, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center gap-2 group" 
                        data-testid={`highlight-${index}-${idx}`}
                      >
                        <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                        <span className="text-sm font-medium text-foreground">{highlight}</span>
                      </div>
                    ))}
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
