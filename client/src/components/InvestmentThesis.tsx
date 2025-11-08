import { Sparkles, ShoppingCart, Cpu } from "lucide-react";

const segments = [
  {
    icon: Sparkles,
    title: "AI Natives",
    description: "Domain models/LLMs, tools, horizontal & vertical applications"
  },
  {
    icon: Cpu,
    title: "Deep-Tech",
    description: "Infrastructure layer, Quantum computing, Verticalised solutions"
  },
  {
    icon: ShoppingCart,
    title: "Consumer-Tech",
    description: "Healthtech, fintech, platforms"
  }
];

export default function InvestmentThesis() {
  return (
    <section id="investment-thesis" className="py-12 relative bg-white">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="mb-8 text-center max-w-4xl mx-auto">
          <div className="inline-block mb-4">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Investment Strategy</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-foreground" data-testid="text-thesis-title">
            What Excites Us
          </h2>
          <p className="text-lg text-foreground leading-relaxed" data-testid="text-thesis-subtitle">
            Investing in categories expected to dominate the Indian landscape over the next decade
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-border/20">
          {segments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <div 
                key={index} 
                className="p-8 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300"
                data-testid={`segment-${index}`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 backdrop-blur-xl rounded-xl border border-primary/20 flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2" data-testid={`text-segment-title-${index}`}>
                    {segment.title}
                  </h3>
                  <p className="text-sm text-foreground/80">{segment.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
