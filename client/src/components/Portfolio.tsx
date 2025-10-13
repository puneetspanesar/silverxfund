import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, ExternalLink } from "lucide-react";

const investments = [
  {
    sector: "Enterprise SaaS & AI",
    status: "Active",
    moic: "60X",
    stage: "Series B",
    highlight: "$5M recent round from Dallas Venture Capital"
  },
  {
    sector: "Consumer AI",
    status: "Exited",
    moic: "22X",
    stage: "Series C",
    highlight: "$100M round led by SoftBank"
  },
  {
    sector: "FinTech Infrastructure",
    status: "Exited",
    moic: "2.5X",
    stage: "Acquisition",
    highlight: "Acquired by Muthoot Finance"
  },
  {
    sector: "Deep-tech / EV",
    status: "Exited",
    moic: "10X",
    stage: "Series A",
    highlight: "Union Square & Prime Ventures"
  },
  {
    sector: "B2B FinTech",
    status: "Follow-on",
    moic: "75X",
    stage: "Series B",
    highlight: "Y Combinator, Harvard Management"
  },
  {
    sector: "Enterprise SaaS",
    status: "Partial Exit",
    moic: "35X",
    stage: "Series C",
    highlight: "Bertelsmann, Tribe Capital, Zomato"
  }
];

export default function Portfolio() {
  const handleViewPortfolio = () => {
    console.log('View Full Portfolio clicked');
  };

  return (
    <section className="py-40 bg-gray-50 dark:bg-muted/20">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="mb-24 max-w-4xl">
          <div className="inline-block mb-6">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Portfolio</span>
          </div>
          <h2 className="font-serif text-5xl lg:text-7xl font-bold tracking-[-0.02em] mb-6 text-primary" data-testid="text-portfolio-title">
            Fund I Legacy
          </h2>
          <p className="text-xl text-foreground font-light leading-relaxed" data-testid="text-portfolio-subtitle">
            16 investments across high-potential segments with MOICs up to 75x and $5Bn+ in cumulative portfolio value created
          </p>
        </div>
        
        <div className="space-y-2">
          {investments.map((investment, index) => (
            <div 
              key={index} 
              className="group border-t border-border/30 py-8 hover:bg-background/50 transition-all duration-500 px-8 -mx-8"
              data-testid={`investment-${index}`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <h3 className="font-serif text-2xl font-bold text-primary" data-testid={`text-sector-${index}`}>
                      {investment.sector}
                    </h3>
                    <Badge variant="secondary" className="uppercase text-xs tracking-wider bg-primary/10 text-primary border-primary/20" data-testid={`badge-status-${index}`}>
                      {investment.status}
                    </Badge>
                    <span className="text-sm text-foreground font-serif">• {investment.stage}</span>
                  </div>
                  <p className="text-foreground leading-relaxed" data-testid={`text-highlight-${index}`}>
                    {investment.highlight}
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <div className="font-serif text-5xl font-bold tabular-nums flex items-center gap-2 text-primary" data-testid={`text-moic-${index}`}>
                      <TrendingUp className="h-6 w-6" />
                      {investment.moic}
                    </div>
                    <div className="text-xs uppercase tracking-wider text-primary mt-1">Multiple</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 pt-16 border-t border-primary/30">
          <Button 
            size="lg" 
            variant="outline"
            onClick={handleViewPortfolio}
            className="font-serif text-base px-8 h-14 border-primary/40 text-primary hover:bg-primary/10 hover:border-primary/60"
            data-testid="button-view-portfolio"
          >
            Full Portfolio
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
