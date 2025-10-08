import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: "$5B+",
    label: "Portfolio Value",
    description: "Cumulative value created"
  },
  {
    value: "150+",
    label: "Investments",
    description: "Since 2012"
  },
  {
    value: "20",
    label: "Exits",
    description: "Successful realizations"
  },
  {
    value: "~30%",
    label: "Target IRR",
    description: "Fund performance goal"
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
    <section ref={sectionRef} className="py-32 bg-gray-50 dark:bg-muted/20 border-y border-gray-200 dark:border-border/30">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="mb-20 max-w-3xl">
          <div className="inline-block mb-6">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Track Record</span>
          </div>
          <h2 className="font-serif text-5xl lg:text-6xl font-bold tracking-[-0.02em] mb-6 text-primary" data-testid="text-track-record-title">
            Proven execution since 2012
          </h2>
          <p className="text-xl text-muted-foreground font-light leading-relaxed" data-testid="text-track-record-subtitle">
            Two decades of combined experience backing category-defining companies across growth stages
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="relative group"
              data-testid={`stat-${index}`}
            >
              <div className="absolute -top-4 left-0 w-16 h-1 bg-primary/50" />
              <div className={`font-serif text-6xl lg:text-7xl font-bold tabular-nums mb-4 text-primary transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-testid={`text-stat-value-${index}`}>
                {stat.value}
              </div>
              <div className="font-serif text-xl font-semibold mb-2 text-primary" data-testid={`text-stat-label-${index}`}>
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground" data-testid={`text-stat-description-${index}`}>
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
