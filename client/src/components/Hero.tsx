import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Brain, Rocket, Users, TrendingUp } from "lucide-react";
import heroImage from "@assets/shutterstock_1858812901_1759928182771.jpg";

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

export default function Hero() {
  const handleViewThesis = () => {
    console.log('View Investment Thesis clicked');
    document.getElementById('investment-thesis')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleMeetTeam = () => {
    console.log('Meet the Team clicked');
    document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-background">
      <div 
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          filter: 'brightness(0.5) saturate(0.7)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#8d0000]/90 via-[#8d0000]/60 to-transparent" />
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-16 py-32 w-full">
        <div className="max-w-4xl">
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-white">$100M Fund II • Now Raising</span>
          </div>
          
          <h1 className="font-serif text-6xl lg:text-8xl font-bold tracking-[-0.02em] mb-8 leading-[0.95] text-white" data-testid="text-hero-title">
            Backing India's
            <br />
            <span className="text-white">AI-First</span> Future
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/90 max-w-2xl mb-12 leading-relaxed font-light" data-testid="text-hero-subtitle">
            Deep-tech venture capital for category-defining companies. 
            Seed+ to Series A/B investments with <span className="font-serif text-white font-semibold">$5B+ portfolio value</span> created.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 mb-16">
            <Button 
              size="lg" 
              onClick={handleViewThesis}
              className="text-base px-8 h-14 bg-white text-[#8d0000] hover:bg-white/90"
              data-testid="button-view-thesis"
            >
              Investment Thesis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handleMeetTeam}
              className="text-base px-8 h-14 bg-white/10 backdrop-blur-md border-white/40 text-white hover:bg-white/20 hover:border-white/60"
              data-testid="button-meet-team"
            >
              <Play className="mr-2 h-4 w-4" />
              Watch Story
            </Button>
          </div>

          <div className="flex flex-wrap gap-12 text-sm border-t border-white/30 pt-8 mb-20">
            <div data-testid="stat-fund-size">
              <div className="text-white/80 font-semibold mb-1 uppercase tracking-wider text-xs">Fund Size</div>
              <div className="font-serif text-3xl font-bold tabular-nums text-white">$100M</div>
            </div>
            <div data-testid="stat-stage">
              <div className="text-white/80 font-semibold mb-1 uppercase tracking-wider text-xs">Stage Focus</div>
              <div className="font-serif text-3xl font-bold text-white">Seed+ to A/B</div>
            </div>
            <div data-testid="stat-portfolio">
              <div className="text-white/80 font-semibold mb-1 uppercase tracking-wider text-xs">Portfolio Value</div>
              <div className="font-serif text-3xl font-bold tabular-nums text-white">$5B+</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index} 
                  className="flex flex-col items-center text-center lg:items-start lg:text-left"
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
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
