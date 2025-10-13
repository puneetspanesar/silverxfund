import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Cpu, Target, Network, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import heroImage from "@assets/shutterstock_1858812901_1759928182771.jpg";

const highlights = [
  {
    icon: Cpu,
    title: "Deep-Tech Expertise",
    description: "Specialized focus on AI, ML, and emerging technologies shaping the future"
  },
  {
    icon: Target,
    title: "Strategic Capital",
    description: "Thesis-driven investments in category-defining companies at inflection points"
  },
  {
    icon: Network,
    title: "Operational Network",
    description: "Access to global partnerships, talent networks, and go-to-market resources"
  },
  {
    icon: Award,
    title: "Exceptional Returns",
    description: "Portfolio includes 5+ unicorns with $5B+ in aggregate value created"
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
    <section className="relative min-h-screen bg-background pt-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 min-h-screen">
          {/* Left Content */}
          <div className="flex flex-col justify-center px-8 lg:px-16 py-12">
            <Badge variant="secondary" className="w-fit mb-8 px-4 py-2 text-xs font-semibold tracking-wider bg-white/5 backdrop-blur-xl border border-white/20">
              $100M FUND II • NOW RAISING
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight" data-testid="text-hero-title">
              Backing India's
              <br />
              <span className="text-primary">AI-First</span> Future
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg" data-testid="text-hero-subtitle">
              Deep-tech venture capital for category-defining companies. 
              Seed+ to Series A/B investments with <span className="text-foreground font-semibold">$5B+ portfolio value</span> created.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                onClick={handleViewThesis}
                data-testid="button-view-thesis"
              >
                Investment Thesis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={handleMeetTeam}
                data-testid="button-meet-team"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Story
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 py-8 border-t border-white/10">
              <div data-testid="stat-fund-size">
                <div className="text-muted-foreground text-xs font-semibold mb-2 uppercase tracking-wider">Fund Size</div>
                <div className="text-3xl font-bold tabular-nums text-primary">$100M</div>
              </div>
              <div data-testid="stat-stage">
                <div className="text-muted-foreground text-xs font-semibold mb-2 uppercase tracking-wider">Stage Focus</div>
                <div className="text-2xl font-bold text-primary">Seed+ to A/B</div>
              </div>
              <div data-testid="stat-portfolio">
                <div className="text-muted-foreground text-xs font-semibold mb-2 uppercase tracking-wider">Portfolio Value</div>
                <div className="text-3xl font-bold tabular-nums text-primary">$5B+</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:min-h-screen order-first lg:order-last">
            <div className="absolute inset-0 lg:sticky lg:top-0 lg:h-screen">
              <div className="relative h-96 lg:h-full overflow-hidden">
                <img 
                  src={heroImage} 
                  alt="SilverX Fund" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent lg:via-background/20" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights Section - Below the hero */}
      <div className="bg-white/5 backdrop-blur-2xl border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index} 
                  className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 shadow-lg shadow-black/5"
                  data-testid={`highlight-${index}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 backdrop-blur-xl border border-primary/20">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold mb-1 text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
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
