import { useEffect, useRef, useState } from "react";
import { TrendingUp, DollarSign, Briefcase, Trophy } from "lucide-react";

const stats = [
  {
    icon: DollarSign,
    value: "$5B+",
    label: "Portfolio Value",
    subMetric: "25x",
    subLabel: "Average Multiple"
  },
  {
    icon: Briefcase,
    value: "150+",
    label: "Investments",
    subMetric: "85%",
    subLabel: "Active Rate"
  },
  {
    icon: Trophy,
    value: "20",
    label: "Successful Exits",
    subMetric: "5",
    subLabel: "Unicorns"
  },
  {
    icon: TrendingUp,
    value: "~30%",
    label: "Target IRR",
    subMetric: "12+",
    subLabel: "Years Track Record"
  }
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
    <section ref={sectionRef} className="py-16 bg-primary">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-block mb-6">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-white/70">Track Record</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-white" data-testid="text-track-record-title">
            Proven execution since 2012
          </h2>
          <p className="text-lg text-white/90 leading-relaxed" data-testid="text-track-record-subtitle">
            Two decades of combined experience backing category-defining companies across growth stages
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-y lg:divide-y-0 divide-white/20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index} 
                className={`p-8 flex flex-col items-center text-center transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                data-testid={`stat-${index}`}
              >
                <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-xl flex items-center justify-center mb-4">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                
                <div className="text-5xl font-bold tabular-nums mb-2 text-white" data-testid={`text-stat-value-${index}`}>
                  {stat.value}
                </div>
                
                <div className="text-sm font-semibold mb-6 text-white/80 uppercase tracking-wider" data-testid={`text-stat-label-${index}`}>
                  {stat.label}
                </div>

                <div className="pt-4 border-t border-white/20 w-full">
                  <div className="text-2xl font-bold text-white mb-1">{stat.subMetric}</div>
                  <div className="text-xs text-white/70 uppercase tracking-wider">{stat.subLabel}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
