import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

const investments = [
  {
    sector: "Enterprise SaaS & AI",
    status: "Invested",
    moic: "60X",
    highlight: "Recent $5M round from Dallas Venture Capital"
  },
  {
    sector: "Consumer-tech & AI",
    status: "Exited",
    moic: "22X",
    highlight: "Recent $100M round led by SoftBank"
  },
  {
    sector: "FinTech",
    status: "Exited",
    moic: "2.5X",
    highlight: "Acquired by Muthoot Finance"
  },
  {
    sector: "Deep-tech / EV",
    status: "Exited",
    moic: "10X",
    highlight: "$4.5M from Union Square & Prime Ventures"
  },
  {
    sector: "FinTech",
    status: "Follow-on",
    moic: "75X",
    highlight: "Y Combinator, Harvard Management & SOSV"
  },
  {
    sector: "Enterprise SaaS",
    status: "Majority Exited",
    moic: "35X",
    highlight: "Bertelsmann, Tribe Capital, Zomato, Beenext"
  }
];

export default function Portfolio() {
  const handleViewPortfolio = () => {
    console.log('View Full Portfolio clicked');
  };

  return (
    <section className="py-24 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4" data-testid="text-portfolio-title">
            Portfolio Highlights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-portfolio-subtitle">
            Select investments demonstrating our ability to identify and back category-defining companies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {investments.map((investment, index) => (
            <Card 
              key={index} 
              className="hover-elevate transition-all duration-300"
              data-testid={`card-investment-${index}`}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2" data-testid={`text-sector-${index}`}>
                      {investment.sector}
                    </h3>
                    <Badge variant="secondary" className="mb-3" data-testid={`badge-status-${index}`}>
                      {investment.status}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary flex items-center gap-1" data-testid={`text-moic-${index}`}>
                      <TrendingUp className="h-5 w-5" />
                      {investment.moic}
                    </div>
                    <div className="text-xs text-muted-foreground">MOIC</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground" data-testid={`text-highlight-${index}`}>
                  {investment.highlight}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            onClick={handleViewPortfolio}
            data-testid="button-view-portfolio"
          >
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}
