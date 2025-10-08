import { Card, CardContent } from "@/components/ui/card";
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
    sectors: "Deep Tech, GenAI, SaaS, FinTech"
  },
  {
    name: "Dhiraj Kumar Sinha",
    title: "Managing Partner",
    experience: "25+ Years",
    image: partner2,
    sectors: "EV, Sustainability, Deep Tech"
  },
  {
    name: "Abishek Balendran",
    title: "Partner",
    experience: "10+ Years",
    image: partner3,
    sectors: "D2C, Consumer Internet"
  },
  {
    name: "Sanjay Rastogi",
    title: "Partner",
    experience: "25+ Years",
    image: partner4,
    sectors: "Healthcare, AI, B2B SaaS"
  }
];

export default function Team() {
  return (
    <section id="team" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4" data-testid="text-team-title">
            Leadership Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-team-subtitle">
            Experienced investors with proven track records across growth and scale-up stages
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {partners.map((partner, index) => (
            <Card 
              key={index} 
              className="hover-elevate transition-all duration-300 overflow-hidden"
              data-testid={`card-team-${index}`}
            >
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden bg-muted">
                  <img 
                    src={partner.image} 
                    alt={partner.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    data-testid={`img-team-${index}`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1" data-testid={`text-name-${index}`}>
                    {partner.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2" data-testid={`text-title-${index}`}>
                    {partner.title}
                  </p>
                  <p className="text-sm font-semibold text-primary mb-3" data-testid={`text-experience-${index}`}>
                    {partner.experience} Experience
                  </p>
                  <p className="text-sm text-muted-foreground" data-testid={`text-sectors-${index}`}>
                    {partner.sectors}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
