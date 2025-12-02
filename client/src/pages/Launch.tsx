import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useSEO } from "@/hooks/use-seo";
import { Link } from "wouter";
import { Calendar, MapPin, Users, TrendingUp, Target, Rocket, ArrowRight, CheckCircle2 } from "lucide-react";
import logoPath from "@assets/SilverX Fund Logo_1759929335279.png";
import heroImage from "@assets/RKW59666_1764656152555.jpg";
import teamImage from "@assets/GVW00454_1764655773571.jpg";
import panel1Image from "@assets/RKW59078_1764655793333.jpg";
import panel2Image from "@assets/RKW59281_1764655813980.jpg";

const investmentThemes = [
  {
    title: "AI Natives",
    description: "Developer platforms, horizontal and vertical AI applications, and consumer AI solutions"
  },
  {
    title: "Deep Technology",
    description: "Patent and IP-driven companies with defensible innovation"
  },
  {
    title: "Sunrise Sectors",
    description: "Quantum computing, advanced materials, and semiconductors"
  },
  {
    title: "Consumer Technology",
    description: "Mass-adoption platforms with strong unit economics"
  }
];

const stats = [
  { value: "$90M", label: "Fund Size" },
  { value: "20", label: "Target Companies" },
  { value: "$1-2M", label: "First Cheque" },
  { value: "60%", label: "Follow-on Reserve" }
];

const teamStats = [
  { value: "70+", label: "Years Combined Experience" },
  { value: "150+", label: "Investments Managed" },
  { value: "$5B+", label: "Portfolio Value" },
  { value: "20", label: "Exits to Date" }
];

export default function Launch() {
  useSEO({
    title: "Fund Launch | SilverX Fund - $90M AI-First Venture Capital",
    description: "SilverX Fund officially launched with $90 million commitment to back India's AI-first and deep-tech startups. Learn about our investment thesis and team."
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <img src={logoPath} alt="SilverX Fund" className="h-16 cursor-pointer" />
          </Link>
          <Link href="/">
            <Button variant="outline" data-testid="button-back-home">
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[500px]">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="SilverX Fund Launch" 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-6">
              <Calendar className="h-3 w-3 mr-1" />
              November 21, 2024
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              SilverX Fund <span className="text-primary">Officially Launches</span>
            </h1>
            
            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              $90 Million Commitment to Back India's AI-First and Deep-Tech Startups
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 text-foreground/70">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>T-Hub, Hyderabad</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <span>Founders, Investors & Industry Leaders</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-foreground/70 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-4">About The Fund</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                The Second Chapter of Silverneedle Ventures
              </h2>
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                SilverX Fund represents the evolution of our investment approach. Building on the learnings from Fund 1, which achieved a 1.6x MOIC within two years, we're now positioned to make deeper, more concentrated bets on founders building the infrastructure and platforms that will define India's next decade.
              </p>
              <blockquote className="border-l-4 border-primary pl-6 italic text-foreground/80 mb-8">
                "SilverX Fund represents our evolution as investors. We're here to back the founders who aren't just participating in markets—they're defining them."
                <footer className="mt-2 text-sm font-semibold text-foreground not-italic">
                  — Ajay Jain, Founder & Managing Partner
                </footer>
              </blockquote>
            </div>
            <div className="relative">
              <img 
                src={teamImage} 
                alt="SilverX Fund Team" 
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">1.6x</div>
                <div className="text-sm opacity-90">Fund 1 MOIC</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="py-20 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-background/10 text-background border-background/20">Investment Strategy</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Backing Category Definers
            </h2>
            <p className="text-lg text-background/70 max-w-2xl mx-auto">
              Our investment mandate centers on identifying inflection points where technological capabilities, market timing, and founder excellence converge.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {investmentThemes.map((theme, index) => (
              <Card key={index} className="bg-background/5 border-background/10 text-background">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{theme.title}</h3>
                  <p className="text-background/70 text-sm">{theme.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Experience */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">The Team</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Operator-Led Philosophy
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              The fund is led by a team with over 70 years of combined experience as investors, operators, and entrepreneurs.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {teamStats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-foreground/70">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">Value Beyond Capital</h3>
              {[
                "Active Portfolio Management: Board seats and observer roles with hands-on mentoring",
                "Sales & GTM Acceleration: First-hand support across India and global markets",
                "M&A & Capital Raise Support: Assistance with next-round fundraising and strategic deals",
                "Operations & HR: Access to the SNV network for team building and operational streamlining"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">Key Learnings from Fund 1</h3>
              {[
                "Concentrated portfolio approach for deeper founder partnerships",
                "Focus on defensible moats and well-rounded teams",
                "Backing potential category leaders early in their journey",
                "Maintaining consequential ownership positions"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Panel Discussions */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Launch Event</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Panel Discussions
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              The launch event featured compelling discussions exploring the future of India's startup ecosystem.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <img 
                src={panel1Image} 
                alt="Panel 1: Startup Investments" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-3">Panel Discussion 1</Badge>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Startup Investments – Is It Worth It?
                </h3>
                <p className="text-foreground/70 text-sm mb-4">
                  Moderated by Subramanian C., Founder & CEO, Vrddhi Business Solutions
                </p>
                <div className="text-sm text-foreground/60">
                  <strong>Panelists:</strong> Pranav Vempati (MakerShive), Anurag Garg (Investor), Venkat Nalam (SilverX Fund)
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <img 
                src={panel2Image} 
                alt="Panel 2: Unicorns & India" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-3">Panel Discussion 2</Badge>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Unicorns & India – The Next 10 Years Story
                </h3>
                <p className="text-foreground/70 text-sm mb-4">
                  Moderated by Prashanth Bandi, Co-Founder, Anthrobyte
                </p>
                <div className="text-sm text-foreground/60">
                  <strong>Panelists:</strong> Sanjay Nekkanti (Dhruva Space), Ranju Sigtia (ICICI Bank), Dhiraj Sinha (SilverX Fund)
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Market Opportunity</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                India's AI-First Decade
              </h2>
              <blockquote className="border-l-4 border-primary pl-6 italic text-foreground/80 mb-8">
                "India is at a critical inflection point. As deglobalization reshapes supply chains and technological sovereignty becomes imperative, there's an unprecedented opportunity to build core IP and sovereign infrastructure."
                <footer className="mt-2 text-sm font-semibold text-foreground not-italic">
                  — Dhiraj Sinha, Managing Partner
                </footer>
              </blockquote>
              <p className="text-foreground/70 mb-6">
                The five sectors we've identified—eldercare tech, data centers, AI lending, AI diagnostics, and EDA & semiconductors—represent a combined market opportunity exceeding <strong className="text-foreground">$583 billion by 2033</strong>.
              </p>
            </div>
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="h-8 w-8" />
                  <span className="text-xl font-semibold">Early-Stage VC Performance</span>
                </div>
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-primary-foreground/20 pb-4">
                    <span>Net IRR (2015-18 vintage)</span>
                    <span className="text-2xl font-bold">29.5%</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-primary-foreground/20 pb-4">
                    <span>DPI Multiple</span>
                    <span className="text-2xl font-bold">3.9x</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>vs Private Equity IRR</span>
                    <span className="text-2xl font-bold">24.2%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Rocket className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            The Next Decade Belongs to India's Innovators
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            We're committed to being long-term partners to founders who aren't just participating in markets—they're defining them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button size="lg" data-testid="button-pitch-us">
                Pitch Your Startup
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/subscribe">
              <Button size="lg" variant="outline" data-testid="button-subscribe">
                Subscribe to Newsletter
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/">
            <img src={logoPath} alt="SilverX Fund" className="h-12" />
          </Link>
          <p className="text-sm text-foreground/60">
            Supported by ICICI Bank as a partner
          </p>
        </div>
      </footer>
    </div>
  );
}
