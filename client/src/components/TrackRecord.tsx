import { useEffect, useRef, useState } from "react";
import { TrendingUp, DollarSign, Target, Award, ArrowUpRight, Users, Building2, Rocket } from "lucide-react";

const stats = [
  {
    icon: DollarSign,
    value: "$5B+",
    label: "Portfolio Value",
    description: "Cumulative value created across all investments",
    subMetric: "25x",
    subLabel: "Average Multiple",
    color: "text-primary",
    bgColor: "bg-primary/5"
  },
  {
    icon: Target,
    value: "150+",
    label: "Investments",
    description: "Strategic bets in category-defining startups",
    subMetric: "85%",
    subLabel: "Active Rate",
    color: "text-primary",
    bgColor: "bg-primary/5"
  },
  {
    icon: Award,
    value: "20",
    label: "Successful Exits",
    description: "IPOs, acquisitions & strategic partnerships",
    subMetric: "5",
    subLabel: "Unicorns",
    color: "text-primary",
    bgColor: "bg-primary/5"
  },
  {
    icon: TrendingUp,
    value: "~30%",
    label: "Target IRR",
    description: "Consistent top-quartile performance metrics",
    subMetric: "12+",
    subLabel: "Years Track Record",
    color: "text-primary",
    bgColor: "bg-primary/5"
  }
];

const highlights = [
  { icon: Building2, text: "5+ Unicorns in portfolio" },
  { icon: Users, text: "50+ Active companies" },
  { icon: Rocket, text: "Top quartile returns" }
];

export default function TrackRecord() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-16 bg-white/5 backdrop-blur-2xl">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-block mb-6">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Track Record</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground" data-testid="text-track-record-title">
            Proven execution since 2012
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-track-record-subtitle">
            Two decades of combined experience backing category-defining companies across growth stages
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index} 
                className={`relative p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 shadow-xl shadow-black/10 hover:shadow-2xl hover:border-white/20 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                data-testid={`stat-${index}`}
              >
                <div className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                
                <div className={`text-5xl font-bold tabular-nums mb-2 ${stat.color} flex items-baseline gap-2`} data-testid={`text-stat-value-${index}`}>
                  {stat.value}
                  <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div className="text-base font-bold mb-2 text-foreground" data-testid={`text-stat-label-${index}`}>
                  {stat.label}
                </div>
                
                <div className="text-sm text-muted-foreground mb-4 leading-relaxed" data-testid={`text-stat-description-${index}`}>
                  {stat.description}
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-baseline justify-between">
                    <span className="text-2xl font-bold text-foreground">{stat.subMetric}</span>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">{stat.subLabel}</span>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap justify-center gap-6 pt-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full"
              >
                <Icon className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-foreground">{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
