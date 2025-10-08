import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Sparkles, TrendingUp } from "lucide-react";

const segments = [
  {
    icon: Sparkles,
    title: "AI Natives",
    description: "Developer platforms & tooling, Horizontal & Enterprise AI, Vertical AI, Consumer AI applications driving the next wave of innovation"
  },
  {
    icon: TrendingUp,
    title: "Consumer Tech",
    description: "Mass-adoption, scalable solutions with strong unit economics and clear pathways to profitability"
  },
  {
    icon: Cpu,
    title: "Deep Tech",
    description: "Patent and IP-driven companies with defensible innovation in semiconductors, EV, and advanced technologies"
  }
];

export default function InvestmentThesis() {
  return (
    <section id="investment-thesis" className="py-24 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4" data-testid="text-thesis-title">
            Investment Strategy
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-thesis-subtitle">
            High-conviction bets in themes expected to dominate India's landscape over the next decade
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {segments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <Card 
                key={index} 
                className="hover-elevate transition-all duration-300"
                data-testid={`card-segment-${index}`}
              >
                <CardHeader>
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl" data-testid={`text-segment-title-${index}`}>
                    {segment.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground" data-testid={`text-segment-description-${index}`}>
                    {segment.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
