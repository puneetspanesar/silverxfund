import { Brain, Rocket, Users, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "AI-First Focus",
    description: "Deep expertise in artificial intelligence and machine learning"
  },
  {
    icon: Rocket,
    title: "Hands-On Support",
    description: "Active partnership from ideation to scale"
  },
  {
    icon: Users,
    title: "Founder-Friendly",
    description: "Built by operators, for operators"
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    description: "5+ unicorns in portfolio"
  }
];

export default function MaroonTransition() {
  return (
    <section className="py-20 bg-[#8d0000]">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col items-center text-center"
                data-testid={`highlight-${index}`}
              >
                <div className="mb-4 p-4 rounded-full bg-white/10 backdrop-blur-sm">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
