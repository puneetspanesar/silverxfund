import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useSEO } from "@/hooks/use-seo";
import { Link } from "wouter";
import { Calendar, MapPin, ArrowLeft } from "lucide-react";
import logoPath from "@assets/SilverX Fund Logo_1759929335279.png";
import heroImage from "@assets/GVW00491_1764657031757.jpg";
import ajayImage from "@assets/GVW00285_1764655749882.jpg";
import teamImage from "@assets/GVW00454_1764655773571.jpg";
import panel1Image from "@assets/RKW59078_1764655793333.jpg";
import panel2Image from "@assets/RKW59281_1764655813980.jpg";

export default function Launch() {
  useSEO({
    title: "Fund Launch | SilverX Fund - $90M AI-First Venture Capital",
    description: "SilverX Fund officially launched with $90 million commitment to back India's AI-first and deep-tech startups. Learn about our investment thesis and team."
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-2 flex items-center justify-between">
          <Link href="/">
            <img src={logoPath} alt="SilverX Fund" className="h-24 cursor-pointer" />
          </Link>
          <Link href="/">
            <Button variant="outline" data-testid="button-back-home">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      {/* Article Content */}
      <article className="pt-36 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 text-sm text-foreground/60 mb-6">
              <Badge variant="outline">Press Release</Badge>
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                November 22, 2024
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                Hyderabad, India
              </span>
            </div>
            
            <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              SilverX Fund Officially Launches with $90 Million Commitment to Back India's AI-First and Deep-Tech Startups
            </h1>
          </header>

          {/* Hero Image */}
          <figure className="mb-12">
            <img 
              src={heroImage} 
              alt="SilverX Fund Launch Event at T-Hub" 
              className="w-full rounded-lg"
            />
            <figcaption className="text-sm text-foreground/60 mt-3 text-center">
              The SilverX Fund team at the launch event, T-Hub, Hyderabad
            </figcaption>
          </figure>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            
            <p className="text-xl text-foreground/80 leading-relaxed mb-8">
              SilverX Fund, the second fund from the team at Silverneedle Ventures, officially launched on November 21, 2024, at T-Hub, Hyderabad. The event brought together India's startup ecosystem - founders, investors, and industry leaders - to mark the beginning of a new chapter in deep-tech venture capital.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">About SilverX Fund</h2>
            
            <p className="text-foreground/80 leading-relaxed mb-6">
              SilverX Fund is raising $90 million (with a $23 million greenshoe option) to deploy high-conviction capital into AI-first, deep-tech, and consumer technology startups at the Seed+ to Series A/B stages. The fund aims to back approximately 20 category-defining companies over its investment period, with first cheque sizes ranging from $1-2 million and 60% of the corpus reserved for follow-on investments.
            </p>

            {/* Ajay Quote with Image */}
            <div className="my-12 grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-2">
                <blockquote className="border-l-4 border-primary pl-6 italic text-xl text-foreground/80">
                  "SilverX Fund represents our evolution as investors. Building on the learnings from Fund 1, which achieved a 1.6x MOIC within two years, we're now positioned to make deeper, more concentrated bets on founders building the infrastructure and platforms that will define India's next decade."
                </blockquote>
                <p className="mt-4 font-semibold text-foreground pl-6">
                  - Ajay Jain, Founder & Managing Partner
                </p>
              </div>
              <figure>
                <img 
                  src={ajayImage} 
                  alt="Ajay Jain speaking at the launch" 
                  className="rounded-lg w-full"
                />
              </figure>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Investment Thesis: Backing Category Definers</h2>
            
            <p className="text-foreground/80 leading-relaxed mb-6">
              SilverX Fund's investment mandate centers on identifying inflection points where technological capabilities, market timing, and founder excellence converge. The fund focuses on four key themes:
            </p>

            <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-6">
              <li><strong>AI Natives:</strong> Developer platforms, horizontal and vertical AI applications, and consumer AI solutions</li>
              <li><strong>Deep Technology:</strong> Patent and IP-driven companies with defensible innovation</li>
              <li><strong>Sunrise Sectors:</strong> Quantum computing, advanced materials, and semiconductors</li>
              <li><strong>Consumer Technology:</strong> Mass-adoption platforms with strong unit economics and capital-efficient scaling</li>
            </ul>

            <p className="text-foreground/80 leading-relaxed mb-6">
              Key verticals include social commerce, fintech, and the creator economy.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">The Team Behind SilverX</h2>
            
            <figure className="my-8">
              <img 
                src={teamImage} 
                alt="SilverX Fund leadership team" 
                className="w-full rounded-lg"
              />
              <figcaption className="text-sm text-foreground/60 mt-3 text-center">
                The SilverX Fund leadership presenting the investment strategy
              </figcaption>
            </figure>

            <p className="text-foreground/80 leading-relaxed mb-6">
              The fund is led by a team with over 70 years of combined experience as investors, operators, and entrepreneurs:
            </p>

            <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-6">
              <li><strong>Ajay Jain, Founder & Managing Partner:</strong> 22+ years of experience across Xseed Partners, T-Hub, CIE IIITH, Gray Matters Capital, Intel, and AMD</li>
              <li><strong>Dhiraj Kumar Sinha, Managing Partner:</strong> 25+ years across VC and large corporate houses including SucSEED Indovation, Air Costa, and Max India</li>
              <li><strong>Abishek Balendran, Partner:</strong> 10+ years of investment and exit experience across early and mature-stage investments with Nirvana Ventures, Xander Private Equity, and JM Financial</li>
              <li><strong>Sanjay Rastogi, Partner:</strong> 25+ years in technology with 6+ years in healthtech, including leadership at Innovaccer (Unicorn) and Oracle</li>
            </ul>

            <p className="text-foreground/80 leading-relaxed mb-6">
              The team has collectively managed 150+ investments with a cumulative portfolio value exceeding $5 billion and 20 exits to date.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Launch Event Highlights</h2>
            
            <p className="text-foreground/80 leading-relaxed mb-6">
              The launch event featured two compelling panel discussions that explored the future of India's startup ecosystem:
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-8">
              <figure>
                <img 
                  src={panel1Image} 
                  alt="Panel Discussion: Startup Investments" 
                  className="w-full rounded-lg"
                />
                <figcaption className="text-sm text-foreground/60 mt-3">
                  <strong>Panel 1: "Startup Investments – Is It Worth It?"</strong><br />
                  Moderated by Subramanian C. (Vrddhi Business Solutions), featuring Pranav Vempati, Anurag Garg, and Venkat Nalam
                </figcaption>
              </figure>
              <figure>
                <img 
                  src={panel2Image} 
                  alt="Panel Discussion: Unicorns & India" 
                  className="w-full rounded-lg"
                />
                <figcaption className="text-sm text-foreground/60 mt-3">
                  <strong>Panel 2: "Unicorns & India – The Next 10 Years Story"</strong><br />
                  Moderated by Prashanth Bandi (Anthrobyte), featuring Sanjay Nekkanti, Ranju Sigtia, and Dhiraj Sinha
                </figcaption>
              </figure>
            </div>

            <p className="text-foreground/80 leading-relaxed mb-6">
              The event was supported by ICICI Bank as a partner, reinforcing the institutional commitment to India's startup ecosystem.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Fund 1 Track Record</h2>
            
            <p className="text-foreground/80 leading-relaxed mb-6">
              SilverX Fund builds on the success of Silverneedle Ventures' first fund, a SEBI-registered Category I AIF that deployed INR 76 crores within two years across 16 investments. The fund achieved a 1.6x MOIC and backed breakout companies including OnFinance (AI-native solutions), SuperK (consumer mass adoption), and Dhruva Space (deep-tech/space-tech).
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Why Now: India's AI-First Decade</h2>
            
            <blockquote className="border-l-4 border-primary pl-6 italic text-xl text-foreground/80 my-8">
              "India is at a critical inflection point. As deglobalization reshapes supply chains and technological sovereignty becomes imperative, there's an unprecedented opportunity to build core IP and sovereign infrastructure. The five sectors we've identified - eldercare tech, data centers, AI lending, AI diagnostics, and EDA & semiconductors - represent a combined market opportunity exceeding $583 billion by 2033."
              <footer className="mt-4 not-italic font-semibold text-base">
                - Dhiraj Sinha, Managing Partner
              </footer>
            </blockquote>

            <p className="text-foreground/80 leading-relaxed mb-6">
              Early-stage venture capital has consistently outperformed other asset classes in India, delivering 29.5% net IRR and 3.9x DPI for funds from the 2015-18 vintage period, compared to 24.2% IRR for private equity and 12-17% CAGR for public markets.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Looking Ahead</h2>
            
            <p className="text-foreground/80 leading-relaxed mb-6">
              With Fund 1's proven track record and an expanded corpus, SilverX Fund is positioned to make larger, more concentrated bets on India's most promising deep-tech startups. The fund will officially begin deployment following SEBI registration in March 2026.
            </p>

            <blockquote className="border-l-4 border-primary pl-6 italic text-xl text-foreground/80 my-8">
              "This is just the beginning. We're here to back the founders who aren't just participating in markets - they're defining them. The next decade belongs to India's AI-first and deep-tech innovators, and we're committed to being their long-term partners."
              <footer className="mt-4 not-italic font-semibold text-base">
                - Abishek Balendran, Partner
              </footer>
            </blockquote>

          </div>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-border">
            <p className="text-sm text-foreground/60 mb-6">
              <strong>Media Contact:</strong> info@silverx.vc
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#contact">
                <Button data-testid="button-pitch-us">
                  Pitch Your Startup
                </Button>
              </Link>
              <Link href="/subscribe">
                <Button variant="outline" data-testid="button-subscribe">
                  Subscribe to Newsletter
                </Button>
              </Link>
            </div>
          </footer>

        </div>
      </article>
    </div>
  );
}
