import { TrendingUp, Handshake, Users } from "lucide-react";

const valueAdditions = [
  {
    title: "Sales / GTM",
    icon: TrendingUp,
    points: [
      { headline: "Strategy Acceleration", description: "First-hand support in accelerating sales and GTM strategy" },
      { headline: "Market Expansion", description: "Growth across India and global markets" },
      { headline: "Revenue Optimization", description: "Data-driven approach to maximize revenue" }
    ]
  },
  {
    title: "M&A / Capital Raise",
    icon: Handshake,
    points: [
      { headline: "Capital Raises", description: "Supporting next round of fundraising and M&A requirements" },
      { headline: "Strategic Deals", description: "Identifying and implementing commercial partnerships" },
      { headline: "Cap Tables & ESOPs", description: "Expert guidance on equity structure and employee ownership" }
    ]
  },
  {
    title: "HR / Operations",
    icon: Users,
    points: [
      { headline: "Team Building", description: "Access to Partners network for key hires" },
      { headline: "Cross-Functional Support", description: "Building the right teams across all functions" },
      { headline: "Operations Excellence", description: "Streamlining operations in early-stage companies" }
    ]
  }
];

export default function Portfolio() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="mb-12 text-center max-w-4xl mx-auto">
          <div className="inline-block mb-6">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Value Creation</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-foreground" data-testid="text-value-title">
            SilverX- Value More Than Capital
          </h2>
          <p className="text-lg text-foreground leading-relaxed" data-testid="text-value-subtitle">
            We provide hands-on support across critical business functions, leveraging decades of operational experience to accelerate growth and maximize returns for our portfolio companies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-border/20">
          {valueAdditions.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="p-8 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300"
                data-testid={`value-card-${index}`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 backdrop-blur-xl rounded-xl border border-primary/20 flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-6" data-testid={`text-value-title-${index}`}>
                    {item.title}
                  </h3>
                  
                  <div className="space-y-4 w-full">
                    {item.points.map((point, idx) => (
                      <div key={idx} className="text-left">
                        <h4 className="text-sm font-bold text-primary mb-1" data-testid={`text-value-subhead-${index}-${idx}`}>
                          {point.headline}
                        </h4>
                        <p className="text-xs text-foreground/70 leading-relaxed" data-testid={`text-value-subdesc-${index}-${idx}`}>
                          {point.description}
                        </p>
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
