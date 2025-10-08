import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@assets/generated_images/Premium_tech_workspace_hero_a2b78c5e.png";

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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          filter: 'brightness(0.4) saturate(0.8)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/40 to-transparent" />
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-16 py-32 w-full">
        <div className="max-w-4xl">
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-sm">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-accent">$100M Fund II • Now Raising</span>
          </div>
          
          <h1 className="font-serif text-6xl lg:text-8xl font-bold tracking-[-0.02em] mb-8 leading-[0.95]" data-testid="text-hero-title">
            Backing India's
            <br />
            <span className="text-primary">AI-First</span> Future
          </h1>
          
          <p className="text-xl lg:text-2xl text-foreground/80 max-w-2xl mb-12 leading-relaxed font-light" data-testid="text-hero-subtitle">
            Deep-tech venture capital for category-defining companies. 
            Seed+ to Series A/B investments with <span className="text-accent font-medium">$5B+ portfolio value</span> created.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 mb-16">
            <Button 
              size="lg" 
              onClick={handleViewThesis}
              className="text-base px-8 h-14 bg-primary hover:bg-primary/90"
              data-testid="button-view-thesis"
            >
              Investment Thesis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handleMeetTeam}
              className="text-base px-8 h-14 bg-background/20 backdrop-blur-md border-accent/30 hover:bg-background/30 hover:border-accent/50"
              data-testid="button-meet-team"
            >
              <Play className="mr-2 h-4 w-4" />
              Watch Story
            </Button>
          </div>

          <div className="flex flex-wrap gap-12 text-sm border-t border-accent/20 pt-8">
            <div data-testid="stat-fund-size">
              <div className="text-accent font-semibold mb-1 uppercase tracking-wider text-xs">Fund Size</div>
              <div className="text-2xl font-bold tabular-nums">$100M</div>
            </div>
            <div data-testid="stat-stage">
              <div className="text-accent font-semibold mb-1 uppercase tracking-wider text-xs">Stage Focus</div>
              <div className="text-2xl font-bold">Seed+ to A/B</div>
            </div>
            <div data-testid="stat-portfolio">
              <div className="text-accent font-semibold mb-1 uppercase tracking-wider text-xs">Portfolio Value</div>
              <div className="text-2xl font-bold tabular-nums">$5B+</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
