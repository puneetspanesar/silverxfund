import partner1 from "@assets/generated_images/Executive_partner_headshot_1_dacfff20.png";
import partner2 from "@assets/generated_images/Executive_partner_headshot_2_03392363.png";
import partner3 from "@assets/generated_images/Executive_partner_headshot_3_ccfd838c.png";
import partner4 from "@assets/generated_images/Executive_partner_headshot_4_57abd904.png";

const partners = [
  {
    name: "Ajay Jain",
    title: "Founder & Managing Partner",
    experience: "22+ Years",
    image: partner1,
    quote: "We back founders who are building the infrastructure for India's AI economy",
    credentials: ["ISB", "Xseed Partners", "T-Hub", "Intel"]
  },
  {
    name: "Dhiraj Kumar Sinha",
    title: "Managing Partner",
    experience: "25+ Years",
    image: partner2,
    quote: "Deep tech requires patient capital and operational excellence",
    credentials: ["CFA", "Edinburgh", "SucSEED", "Max India"]
  },
  {
    name: "Abishek Balendran",
    title: "Partner",
    experience: "10+ Years",
    image: partner3,
    quote: "Consumer scale with strong unit economics is our North Star",
    credentials: ["SIBM", "Nirvana Ventures", "Xander PE"]
  },
  {
    name: "Sanjay Rastogi",
    title: "Partner",
    experience: "25+ Years",
    image: partner4,
    quote: "Healthcare AI will define the next decade of deep tech investing",
    credentials: ["IET Lucknow", "Innovaccer", "Oracle"]
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
              <div className="lg:w-5/12">
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <img 
                    src={partner.image} 
                    alt={partner.name}
                    className="w-full h-full object-cover"
                    data-testid={`img-team-${index}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </div>
              </div>
              
              <div className="lg:w-7/12">
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
                
                <blockquote className="font-serif text-2xl font-light leading-relaxed mb-8 italic border-l-4 border-primary pl-6 text-primary">
                  "{partner.quote}"
                </blockquote>
                
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
