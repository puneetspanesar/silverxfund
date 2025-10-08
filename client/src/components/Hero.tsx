import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/80" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6" data-testid="text-hero-title">
          Backing India's Next Generation of{" "}
          <span className="text-primary">AI-First Unicorns</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8" data-testid="text-hero-subtitle">
          $100M fund investing in AI Natives, Deep Tech, and Consumer Innovation at Seed+ to Series A/B stages
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12 text-sm sm:text-base">
          <div className="flex items-center gap-2" data-testid="stat-fund-size">
            <div className="h-1 w-1 rounded-full bg-primary" />
            <span className="font-semibold">$100M Fund Size</span>
          </div>
          <div className="flex items-center gap-2" data-testid="stat-stage">
            <div className="h-1 w-1 rounded-full bg-primary" />
            <span className="font-semibold">Seed+ to Series A/B</span>
          </div>
          <div className="flex items-center gap-2" data-testid="stat-portfolio">
            <div className="h-1 w-1 rounded-full bg-primary" />
            <span className="font-semibold">$5B+ Portfolio Value</span>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button 
            size="lg" 
            onClick={handleViewThesis}
            className="text-base"
            data-testid="button-view-thesis"
          >
            View Investment Thesis
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={handleMeetTeam}
            className="text-base bg-background/50 backdrop-blur-sm"
            data-testid="button-meet-team"
          >
            Meet the Team
          </Button>
        </div>
      </div>
    </section>
  );
}
