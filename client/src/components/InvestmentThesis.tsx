import { useState } from "react";
import { Sparkles, TrendingUp, Cpu } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const segments = [
  {
    id: "ai-first",
    icon: Sparkles,
    title: "AI First",
    highlights: [
      "Developer platforms & tooling",
      "Horizontal & Enterprise AI",
      "Vertical AI",
      "Consumer AI applications"
    ]
  },
  {
    id: "consumer-tech",
    icon: TrendingUp,
    title: "Consumer Tech",
    highlights: [
      "Fintech",
      "Healthcare",
      "Consumer",
      "Commerce"
    ]
  },
  {
    id: "deep-tech",
    icon: Cpu,
    title: "Deep Tech",
    highlights: [
      "Advanced materials",
      "Quantum computing",
      "Robotics"
    ]
  }
];

export default function InvestmentThesis() {
  const [activeTab, setActiveTab] = useState(segments[0].id);

  return (
    <section id="investment-thesis" className="py-16 relative bg-background">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="mb-12 text-center max-w-4xl mx-auto">
          <div className="inline-block mb-6">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Investment Strategy</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-foreground" data-testid="text-thesis-title">
            Investment Thesis
          </h2>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-1 lg:grid-cols-3 gap-4 mb-12 bg-transparent h-auto p-0">
            {segments.map((segment, index) => {
              const Icon = segment.icon;
              return (
                <TabsTrigger 
                  key={segment.id}
                  value={segment.id}
                  className="data-[state=active]:bg-white/15 data-[state=active]:text-foreground bg-white/5 backdrop-blur-xl h-auto p-6 flex flex-col items-center gap-3 border border-white/10 data-[state=active]:border-white/30 transition-all duration-300 rounded-2xl shadow-lg shadow-black/5"
                  data-testid={`tab-${index}`}
                >
                  <Icon className="h-10 w-10" />
                  <div className="text-center">
                    <div className="font-semibold text-lg">{segment.title}</div>
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
                <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl shadow-black/10">
                  <div className="max-w-3xl mx-auto">
                    <div className="flex items-center justify-center gap-4 mb-8">
                      <div className="w-16 h-16 bg-primary/10 backdrop-blur-xl rounded-2xl border border-primary/20 flex items-center justify-center">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-3xl font-bold text-foreground" data-testid={`text-segment-title-${index}`}>
                        {segment.title}
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {segment.highlights.map((highlight, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10" 
                          data-testid={`highlight-${index}-${idx}`}
                        >
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-base font-medium text-foreground">{highlight}</span>
                        </div>
                      ))}
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
