import ajayPhoto from "@assets/Ajay-3-2_1760348499668.png";
import partner2 from "@assets/generated_images/Executive_partner_headshot_2_03392363.png";
import abishekPhoto from "@assets/Abishek-3-2_1760348499666.png";
import sanjayPhoto from "@assets/Sanjay-2-2_1760348499668.png";

const partners = [
  {
    name: "Ajay Jain",
    title: "Founder & Managing Partner",
    experience: "22+ Years",
    image: ajayPhoto,
    bio: "Pioneered India's early-stage AI and deep-tech investment ecosystem. Former Seed Lead at Xseed Ventures and Strategic Advisor at T-Hub. Previously held leadership roles at Intel Corporation, driving semiconductor innovation across emerging markets.",
    quote: "We back founders who are building the infrastructure for India's AI economy",
    expertise: ["AI Infrastructure", "Deep Tech", "Enterprise SaaS"],
    credentials: ["ISB", "Xseed Partners", "T-Hub", "Intel"],
    achievements: ["Led 40+ seed investments", "3 unicorn exits", "T-Hub Advisory Board"]
  },
  {
    name: "Dhiraj Kumar Sinha",
    title: "Managing Partner",
    experience: "25+ Years",
    image: partner2,
    bio: "Veteran investor with deep expertise in financial services and B2B technology. Founded SucSEED Ventures and led multiple successful exits. Former Investment Director at Max India Group, specializing in growth-stage opportunities.",
    quote: "Deep tech requires patient capital and operational excellence",
    expertise: ["FinTech", "B2B SaaS", "Growth Stage"],
    credentials: ["CFA", "Edinburgh", "SucSEED", "Max India"],
    achievements: ["$2B+ portfolio value", "15 successful exits", "CFA Charter holder"]
  },
  {
    name: "Abishek Balendran",
    title: "Partner",
    experience: "10+ Years",
    image: abishekPhoto,
    bio: "Consumer technology specialist with proven track record in identifying category-defining platforms. Previously Principal at Nirvana Ventures and Associate at Xander Private Equity. MBA from SIBM Pune with expertise in consumer behavior and market analytics.",
    quote: "Consumer scale with strong unit economics is our North Star",
    expertise: ["Consumer Tech", "D2C", "Marketplaces"],
    credentials: ["SIBM", "Nirvana Ventures", "Xander PE"],
    achievements: ["8 portfolio companies", "2 IPO exits", "Consumer Expert"]
  },
  {
    name: "Sanjay Rastogi",
    title: "Partner",
    experience: "25+ Years",
    image: sanjayPhoto,
    bio: "Healthcare AI pioneer and enterprise technology veteran. Former VP of Product at Innovaccer, scaling the platform to $3B valuation. Prior experience at Oracle leading enterprise solutions for healthcare sector across APAC region.",
    quote: "Healthcare AI will define the next decade of deep tech investing",
    expertise: ["Healthcare AI", "Enterprise Software", "Product Strategy"],
    credentials: ["IET Lucknow", "Innovaccer", "Oracle"],
    achievements: ["Built $3B product", "Healthcare AI Expert", "20+ patents"]
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
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-serif text-4xl font-bold text-primary" data-testid={`text-name-${index}`}>
                      {partner.name}
                    </h3>
                  </div>
                  <p className="font-serif text-lg text-foreground mb-1" data-testid={`text-title-${index}`}>
                    {partner.title}
                  </p>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wider" data-testid={`text-experience-${index}`}>
                    {partner.experience} Experience
                  </p>
                </div>
                
                <p className="text-base leading-relaxed text-foreground mb-8" data-testid={`text-bio-${index}`}>
                  {partner.bio}
                </p>

                <blockquote className="font-serif text-xl font-light leading-relaxed mb-8 italic border-l-4 border-primary pl-6 text-primary">
                  "{partner.quote}"
                </blockquote>

                <div className="mb-6">
                  <div className="text-xs uppercase tracking-wider text-primary font-semibold mb-3">
                    Expertise
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {partner.expertise.map((exp, expIndex) => (
                      <span 
                        key={expIndex} 
                        className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-xs uppercase tracking-wider text-primary font-semibold mb-3">
                    Key Achievements
                  </div>
                  <div className="space-y-2">
                    {partner.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-sm text-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {partner.credentials.map((cred, credIndex) => (
                    <span 
                      key={credIndex} 
                      className="px-4 py-2 bg-card border border-border rounded-full text-sm"
                    >
                      {cred}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
