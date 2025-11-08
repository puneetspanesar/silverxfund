import { Briefcase, Target, Layers, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ajayPhoto from "@assets/Ajay Jain_1762581579803.png";
import dhirajPhoto from "@assets/Dhiraj Kumar Sinha_1762581579803.png";
import abishekPhoto from "@assets/Abishek Balendran_1762581579802.png";
import sanjayPhoto from "@assets/Sanjay Rastogi_1762581579803.png";

const partners = [
  {
    name: "Ajay Jain",
    title: "Founder & Managing Partner",
    subtitle: "22+ Years of Experience as Investor, Operator & Entrepreneur",
    image: ajayPhoto,
    experience: "Xseed Partners, T-Hub, CIE IIITH, Gray Matters Capital, Intel, AMD, Magnaquest",
    keyFocusAreas: "Sales/GTM, Deal Structuring, PM, Fund Raising",
    sectors: "AI/ML, Edtech, Fintech, B2B SaaS & Deeptech",
    education: "ISB, The University of Arizona"
  },
  {
    name: "Dhiraj Kumar Sinha",
    title: "Managing Partner",
    subtitle: "25+ Years of Experience across VC & Large Corporate Houses",
    image: dhirajPhoto,
    experience: "SucSEED Indovation, Air Costa, Max India, Vatika, PVP Group, LEPL Group",
    keyFocusAreas: "M&A/Exits, Fund Ops & Management, Fund Raising",
    sectors: "Edtech, EV, Mobility, Sustainability, ClimateTech & Deeptech",
    education: "Delhi University, CFA, The University of Edinburgh, ICSI"
  },
  {
    name: "Abishek Balendran",
    title: "Partner",
    subtitle: "10+ Years of Investment & Exit Experience across Early & Mature-Stage Investments",
    image: abishekPhoto,
    experience: "Nirvana Ventures (VC), Xander Private Equity (PE), JM Financial (IB), Nomura International (IB)",
    keyFocusAreas: "Deal Sourcing, PM, Investment Management, Fund Raising",
    sectors: "Consumer-tech, Healthcare, AI/ML, Deeptech, Real Estate/Hospitality",
    education: "SIBM Pune, PICT Pune"
  },
  {
    name: "Sanjay Rastogi",
    title: "Partner",
    subtitle: "25+ Years of Experience in Technology & 6+ Years in Healthtech",
    image: sanjayPhoto,
    experience: "Innovaccer (Unicorn), Oracle, Expobeds, Evolco",
    keyFocusAreas: "Product Management & Sales, GTM, Growth Strategy, Planning & Execution",
    sectors: "Healthcare, AI, Deep Tech, B2B SaaS",
    education: "B.E., IET Lucknow"
  }
];

export default function Team() {
  return (
    <section id="team" className="py-16 bg-background">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-block mb-6">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Leadership</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground" data-testid="text-team-title">
            Operators Who've Built, Scaled, and Exited
          </h2>
          <p className="text-lg text-foreground leading-relaxed" data-testid="text-team-subtitle">
            Our partners bring decades of combined experience across venture capital, operating roles, and successful exits
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <Card 
              key={index}
              className="overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/10 transition-all duration-500 shadow-2xl shadow-black/10 group rounded-3xl"
              data-testid={`team-${index}`}
            >
              <div className="relative h-80 overflow-hidden bg-muted/20">
                <img 
                  src={partner.image} 
                  alt={partner.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  data-testid={`img-team-${index}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold mb-1 text-foreground" data-testid={`text-name-${index}`}>
                    {partner.name}
                  </h3>
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-2" data-testid={`text-title-${index}`}>
                    {partner.title}
                  </p>
                </div>
              </div>

              <CardContent className="p-6 space-y-4 bg-white/5 backdrop-blur-xl">
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10">
                    <Briefcase className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs uppercase tracking-wider text-foreground font-semibold mb-1">
                        Experience
                      </div>
                      <p className="text-sm text-foreground leading-relaxed" data-testid={`text-experience-${index}`}>
                        {partner.experience}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10">
                    <Target className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs uppercase tracking-wider text-foreground font-semibold mb-1">
                        Focus Areas
                      </div>
                      <p className="text-sm text-foreground" data-testid={`text-focus-${index}`}>
                        {partner.keyFocusAreas}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10">
                    <Layers className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs uppercase tracking-wider text-foreground font-semibold mb-1">
                        Sectors
                      </div>
                      <p className="text-sm text-foreground" data-testid={`text-sectors-${index}`}>
                        {partner.sectors}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10">
                    <GraduationCap className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs uppercase tracking-wider text-foreground font-semibold mb-1">
                        Education
                      </div>
                      <p className="text-sm text-foreground" data-testid={`text-education-${index}`}>
                        {partner.education}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
