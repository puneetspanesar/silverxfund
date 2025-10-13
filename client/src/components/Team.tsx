import { Briefcase, Target, Layers, GraduationCap } from "lucide-react";
import ajayPhoto from "@assets/Ajay-3-2_1760348499668.png";
import partner2 from "@assets/generated_images/Executive_partner_headshot_2_03392363.png";
import abishekPhoto from "@assets/Abishek-3-2_1760348499666.png";
import sanjayPhoto from "@assets/Sanjay-2-2_1760348499668.png";

const partners = [
  {
    name: "Ajay Jain",
    title: "Founder & Managing Partner",
    subtitle: "22+ Years of Experience as Investor, Operator & Entrepreneur",
    image: ajayPhoto,
    experience: "Xseed Partners, T-Hub, CIE IIITH, Gray Matters Capital, Intel, AMD, Magnaquest",
    keyFocusAreas: "Strategy, Business Development, GTM, Fundraising",
    sectors: "Deep Tech, Semiconductors, GenAI, SaaS, FinTech, EdTech",
    education: "ISB, The University of Arizona"
  },
  {
    name: "Dhiraj Kumar Sinha",
    title: "Managing Partner",
    subtitle: "25+ Years of Experience across VC & Large Corporate Houses",
    image: partner2,
    experience: "SucSEED Indovation, Air Costa, Max India, Vatika, PVP Group, LEPL Group",
    keyFocusAreas: "Legal, Compliance, Finance, Strategy",
    sectors: "EV, Sustainability, Deep Tech, Mobility",
    education: "Delhi University, CFA, The University of Edinburgh, ICSI"
  },
  {
    name: "Abishek Balendran",
    title: "Partner",
    subtitle: "10+ Years of Investment & Exit Experience across Early & Mature-Stage Investments",
    image: abishekPhoto,
    experience: "Nirvana Ventures (VC), Xander Private Equity (PE), JM Financial (IB), Nomura International (IB)",
    keyFocusAreas: "Growth Strategy, Fundraising, Deal Structuring",
    sectors: "D2C, Consumer Internet, Real Estate, Hospitality",
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
    <section id="team" className="py-40 bg-white dark:bg-background">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="mb-24 max-w-4xl">
          <div className="inline-block mb-6">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Leadership</span>
          </div>
          <h2 className="font-serif text-5xl lg:text-7xl font-bold tracking-[-0.02em] mb-6 text-primary" data-testid="text-team-title">
            Operators who've built, scaled, and exited
          </h2>
          <p className="text-xl text-foreground font-light leading-relaxed" data-testid="text-team-subtitle">
            Our partners bring decades of combined experience across venture capital, operating roles, and successful exits
          </p>
        </div>
        
        <div className="space-y-24">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
              data-testid={`team-${index}`}
            >
              <div className="lg:w-1/3">
                <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                  <img 
                    src={partner.image} 
                    alt={partner.name}
                    className="w-full h-full object-cover"
                    data-testid={`img-team-${index}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </div>
              </div>
              
              <div className="lg:w-2/3">
                <div className="mb-8">
                  <h3 className="font-serif text-4xl font-bold text-primary mb-2" data-testid={`text-name-${index}`}>
                    {partner.name}
                  </h3>
                  <p className="font-serif text-lg text-primary mb-3 uppercase tracking-wide" data-testid={`text-title-${index}`}>
                    {partner.title}
                  </p>
                  <p className="text-base text-foreground font-medium" data-testid={`text-subtitle-${index}`}>
                    {partner.subtitle}
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg h-fit">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">
                        Experience
                      </div>
                      <p className="text-base text-foreground leading-relaxed" data-testid={`text-experience-${index}`}>
                        {partner.experience}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg h-fit">
                      <Target className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">
                        Key Focus Areas
                      </div>
                      <p className="text-base text-foreground leading-relaxed" data-testid={`text-focus-${index}`}>
                        {partner.keyFocusAreas}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg h-fit">
                      <Layers className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">
                        Sectors
                      </div>
                      <p className="text-base text-foreground leading-relaxed" data-testid={`text-sectors-${index}`}>
                        {partner.sectors}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg h-fit">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">
                        Education
                      </div>
                      <p className="text-base text-foreground leading-relaxed" data-testid={`text-education-${index}`}>
                        {partner.education}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
