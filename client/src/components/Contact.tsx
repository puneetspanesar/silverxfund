import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setFormData({ name: '', email: '', organization: '', message: '' });
  };

  return (
    <section id="contact" className="py-40 bg-background border-y border-border/30">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <div className="inline-block mb-6">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Get In Touch</span>
            </div>
            <h2 className="font-serif text-5xl lg:text-6xl font-bold tracking-[-0.02em] mb-6 text-primary" data-testid="text-contact-title">
              Let's build the future together
            </h2>
            <p className="text-xl text-muted-foreground mb-12 font-light leading-relaxed" data-testid="text-contact-subtitle">
              Whether you're a founder with a vision or an LP seeking extraordinary returns, we want to hear from you
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm uppercase tracking-wider text-primary mb-1">Email</div>
                  <div className="font-serif text-lg font-semibold text-primary">contact@silverxfund.com</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm uppercase tracking-wider text-primary mb-1">Office</div>
                  <div className="font-serif text-lg font-semibold text-primary">Hyderabad, India</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-3 uppercase tracking-wider text-muted-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="h-14 bg-background border-border/50"
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-3 uppercase tracking-wider text-muted-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="h-14 bg-background border-border/50"
                    data-testid="input-email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="organization" className="block text-sm font-medium mb-3 uppercase tracking-wider text-muted-foreground">
                  Organization
                </label>
                <Input
                  id="organization"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  placeholder="Your company"
                  className="h-14 bg-background border-border/50"
                  data-testid="input-organization"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-3 uppercase tracking-wider text-muted-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your vision..."
                  rows={6}
                  className="bg-background border-border/50 resize-none"
                  data-testid="input-message"
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full h-14 text-base" data-testid="button-submit">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
