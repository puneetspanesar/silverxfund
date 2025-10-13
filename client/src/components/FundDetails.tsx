import { Target, TrendingUp, Users, Award, Building2, Globe, ChevronRight, BarChart3, Shield, Rocket } from "lucide-react";

const whatSetsUsApart = [
  {
    title: "Operator VC Model",
    icon: Users,
    description: "Founders and partners with real-world scaling experience",
    metrics: [
      { icon: Award, value: "Real-world operators" },
      { icon: Rocket, value: "Scaling expertise" }
    ]
  },
  {
    title: "Deep Research Orientation",
    icon: Target,
    description: "Constant monitoring of M&A patterns, founder behavior, and category evolution",
    metrics: [
      { icon: BarChart3, value: "M&A pattern analysis" },
      { icon: TrendingUp, value: "Category evolution tracking" }
    ]
  },
  {
    title: "Active Mentoring",
    icon: Shield,
    description: "Active mentoring and guidance to startups across GTM, hiring, compliances, and fund raise",
    metrics: [
      { icon: Users, value: "GTM & hiring support" },
      { icon: Building2, value: "Compliance guidance" }
    ]
  },
  {
    title: "Exit Strategy (4–6 Years)",
    icon: TrendingUp,
    description: "Targeting high-growth sectors with strong M&A appetite backed by research and transaction teams",
    metrics: [
      { icon: Target, value: "High-growth sectors" },
      { icon: Award, value: "Transaction support" }
    ]
  }
];

export default function FundDetails() {
  return (
    <section className="py-32 bg-muted/20">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-block mb-6">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Differentiation</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-foreground" data-testid="text-sets-apart-title">
            What Sets Us Apart
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our unique combination of operational expertise, research-driven insights, and hands-on support creates exceptional value for founders and investors alike.
          </p>
        </div>

        <div className="space-y-6">
          {whatSetsUsApart.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="group relative bg-card border border-border rounded-2xl p-8 hover-elevate transition-all"
                data-testid={`apart-card-${index}`}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                      <div className="relative p-5 bg-primary/10 rounded-2xl border-2 border-primary/30">
                        <Icon className="h-10 w-10 text-primary" />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-foreground" data-testid={`text-apart-title-${index}`}>
                        {item.title}
                      </h3>
                      <div className="px-4 py-1 bg-primary/10 rounded-full border border-primary/20">
                        <span className="text-xs font-bold text-primary tabular-nums">0{index + 1}</span>
                      </div>
                    </div>
                    
                    <p className="text-foreground leading-relaxed mb-6">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {item.metrics.map((metric, idx) => {
                        const MetricIcon = metric.icon;
                        return (
                          <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-lg border border-border">
                            <MetricIcon className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium text-foreground">{metric.value}</span>
                          </div>
                        );
                      })}
                    </div>
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
