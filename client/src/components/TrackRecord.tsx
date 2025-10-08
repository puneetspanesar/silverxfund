import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: "$5B+",
    label: "Portfolio Value Created",
    description: "Cumulative value from partner investments"
  },
  {
    value: "150+",
    label: "Investments Made",
    description: "Across two pre-seed VC funds and angel investments"
  },
  {
    value: "20",
    label: "Successful Exits",
    description: "Track record of value realization"
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
    <section ref={sectionRef} className="py-24 sm:py-32 bg-card border-y">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4" data-testid="text-track-record-title">
            Proven Track Record
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-track-record-subtitle">
            Active in early-stage investing since 2012, backed by decades of combined experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center"
              data-testid={`stat-${index}`}
            >
              <div className={`text-5xl sm:text-6xl font-bold text-primary mb-3 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-testid={`text-stat-value-${index}`}>
                {stat.value}
              </div>
              <div className="text-xl font-semibold mb-2" data-testid={`text-stat-label-${index}`}>
                {stat.label}
              </div>
              <div className="text-muted-foreground" data-testid={`text-stat-description-${index}`}>
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
