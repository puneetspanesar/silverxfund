import { Target, Users, Handshake, Eye } from "lucide-react";

const whatSetsUsApart = [
  {
    title: "Well-Rounded Team",
    icon: Users,
    points: [
      "Experienced investors with a track record of strong picks",
      "Operating experience across growth and scale-up stages"
    ]
  },
  {
    title: "Strong Deal Sourcing",
    icon: Target,
    points: [
      "Proprietary network of partners"
    ]
  },
  {
    title: "Portfolio Management & Support",
    icon: Handshake,
    points: [
      "Active, hands-on mentoring and guidance - true 'smart money'"
    ]
  },
  {
    title: "Clear Eye on Exits",
    icon: Eye,
    points: [
      "Leveraging technology to understand exit probabilities"
    ]
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whatSetsUsApart.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 transition-all duration-500 shadow-xl shadow-black/10"
                data-testid={`apart-card-${index}`}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-primary/10 backdrop-blur-xl rounded-2xl border border-primary/30 flex items-center justify-center">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-foreground mb-4" data-testid={`text-apart-title-${index}`}>
                      {item.title}
                    </h3>
                    
                    <ul className="space-y-2">
                      {item.points.map((point, idx) => (
                        <li key={idx} className="text-sm text-foreground leading-relaxed flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
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
