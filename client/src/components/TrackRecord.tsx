import { useEffect, useRef, useState } from "react";
import { TrendingUp, DollarSign, Target, Award } from "lucide-react";

const stats = [
  {
    icon: DollarSign,
    value: "$5B+",
    label: "Portfolio Value",
    description: "Cumulative value created",
    color: "text-primary"
  },
  {
    icon: Target,
    value: "150+",
    label: "Investments",
    description: "Since 2012",
    color: "text-primary"
  },
  {
    icon: Award,
    value: "20",
    label: "Exits",
    description: "Successful realizations",
    color: "text-primary"
  },
  {
    icon: TrendingUp,
    value: "~30%",
    label: "Target IRR",
    description: "Fund performance goal",
    color: "text-primary"
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
    <section ref={sectionRef} className="py-32 bg-muted/20">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
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

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index} 
                  className={`relative p-6 bg-card border-2 border-border rounded-2xl hover-elevate transition-all ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  data-testid={`stat-${index}`}
                >
                  <div className="absolute top-4 right-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <div className={`text-4xl font-bold tabular-nums mb-2 ${stat.color}`} data-testid={`text-stat-value-${index}`}>
                      {stat.value}
                    </div>
                    <div className="text-sm font-semibold mb-1 text-foreground" data-testid={`text-stat-label-${index}`}>
                      {stat.label}
                    </div>
                    <div className="text-xs text-muted-foreground" data-testid={`text-stat-description-${index}`}>
                      {stat.description}
                    </div>
                  </div>

                  <div className="mt-4 h-1 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-primary transition-all duration-1000 ease-out ${
                        isVisible ? 'w-full' : 'w-0'
                      }`}
                      style={{ transitionDelay: `${index * 100 + 200}ms` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
