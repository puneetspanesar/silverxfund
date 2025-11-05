import { Target, Users, Handshake, Eye } from "lucide-react";

const whatSetsUsApart = [
  {
    title: "Well-Rounded Team",
    icon: Users,
    description: "Experienced investors with a track record of strong picks and operating experience across growth and scale-up stages"
  },
  {
    title: "Strong Deal Sourcing",
    icon: Target,
    description: "Proprietary network of partners for identifying high-potential investment opportunities"
  },
  {
    title: "Portfolio Management",
    icon: Handshake,
    description: "Active, hands-on mentoring and guidance - true 'smart money' for our portfolio companies"
  },
  {
    title: "Clear Eye on Exits",
    icon: Eye,
    description: "Leveraging technology to understand exit probabilities and maximize returns"
  }
];

export default function FundDetails() {
  return (
    <section className="py-16 bg-white/5 backdrop-blur-2xl">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-block mb-6">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Differentiation</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-foreground" data-testid="text-sets-apart-title">
            What Sets Us Apart
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-border/20">
          {whatSetsUsApart.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="p-8 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300"
                data-testid={`apart-card-${index}`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 backdrop-blur-xl rounded-xl border border-primary/20 flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2" data-testid={`text-apart-title-${index}`}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground/80" data-testid={`text-apart-desc-${index}`}>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
