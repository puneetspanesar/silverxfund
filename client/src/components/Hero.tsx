import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Cpu, Target, Network, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import heroImage from "@assets/shutterstock_1858812901_1759928182771.jpg";

const highlights = [
  {
    icon: Cpu,
    title: "Deep-tech Domain Expertise",
    description: "Specialized focus on AI, ML, and emerging technologies shaping the next decade of India's story"
  },
  {
    icon: Award,
    title: "Exceptional Returns",
    description: "Track record of delivering value - ~5 unicorns with $5B+ in aggregate value created"
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
              Early stage venture capital firm looking to back category defining founders
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

            <div className="py-8 border-t border-white/10 space-y-8">
              <div className="grid grid-cols-3 gap-8">
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

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 md:divide-x md:divide-white/20">
                {highlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className={`flex items-start gap-4 ${index > 0 ? 'md:pl-8' : ''}`} data-testid={`highlight-${index}`}>
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
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
                  );
                })}
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
    </section>
  );
}
