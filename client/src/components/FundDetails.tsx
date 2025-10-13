import { Target, TrendingUp, Users, Award, Building2, Globe, ChevronRight, BarChart3, Shield, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
    <section className="py-40 bg-gray-50 dark:bg-muted/20">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        {/* What Sets Us Apart */}
        <div>
          <div className="mb-24">
            <div className="inline-block mb-6">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Differentiation</span>
            </div>
            <h2 className="font-serif text-5xl lg:text-7xl font-bold tracking-[-0.02em] mb-6 leading-tight max-w-4xl text-primary" data-testid="text-sets-apart-title">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-foreground max-w-3xl font-light leading-relaxed">
              Our unique combination of operational expertise, research-driven insights, and hands-on support creates exceptional value for founders and investors alike.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {whatSetsUsApart.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={index}
                  className="group relative hover-elevate overflow-visible border-2"
                  data-testid={`apart-card-${index}`}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="inline-flex p-4 bg-primary/10 rounded-xl border-2 border-primary/20 flex-shrink-0">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif text-2xl font-bold text-primary mb-3" data-testid={`text-apart-title-${index}`}>
                          {item.title}
                        </h3>
                        <p className="text-foreground leading-relaxed mb-6">
                          {item.description}
                        </p>
                        <div className="space-y-3">
                          {item.metrics.map((metric, idx) => {
                            const MetricIcon = metric.icon;
                            return (
                              <div key={idx} className="flex items-center gap-3">
                                <div className="p-1.5 bg-primary/5 rounded-lg">
                                  <MetricIcon className="h-3.5 w-3.5 text-primary" />
                                </div>
                                <span className="text-sm text-foreground">{metric.value}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
