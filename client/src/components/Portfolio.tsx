import { TrendingUp, Handshake, Users } from "lucide-react";

const valueAdditions = [
  {
    title: "Sales / GTM",
    icon: TrendingUp,
    description: "First-hand support in accelerating sales and GTM strategy for portfolio companies across India and global markets"
  },
  {
    title: "M&A / Capital Raise",
    icon: Handshake,
    description: "Assisting companies with the next round of capital raises and M&A requirements. Supporting the founders in identifying and implementing commercial and strategic deals, cap tables, and ESOPs"
  },
  {
    title: "HR / Operations",
    icon: Users,
    description: "Opening up the Partners network to help build the right teams across functions and streamline operations in early-stage companies"
  }
];

export default function Portfolio() {
  return (
    <section className="py-40 bg-white dark:bg-background">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="mb-20">
          <div className="bg-white dark:bg-background border-2 border-primary inline-block rounded-md">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold px-8 py-4 text-primary" data-testid="text-value-title">
              SilverX- Value More Than Capital
            </h2>
          </div>
        </div>
        
        <div className="space-y-0 border-t border-border">
          {valueAdditions.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index} 
                className="grid grid-cols-1 lg:grid-cols-[280px_1fr] border-b border-border"
                data-testid={`value-card-${index}`}
              >
                <div className="bg-primary p-8 flex items-center gap-4">
                  <IconComponent className="h-7 w-7 text-white flex-shrink-0" />
                  <h3 className="font-serif text-xl font-bold text-white" data-testid={`text-value-title-${index}`}>
                    {item.title}
                  </h3>
                </div>
                <div className="bg-muted/50 p-8 flex items-center">
                  <p className="text-foreground leading-relaxed text-lg" data-testid={`text-value-desc-${index}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
