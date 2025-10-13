import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
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
    <section id="contact" className="py-32 bg-background">
      <div className="max-w-[800px] mx-auto px-8 lg:px-16">
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Get In Touch</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground" data-testid="text-contact-title">
            Let's build the future together
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-contact-subtitle">
            Whether you're a founder with a vision or an LP seeking extraordinary returns, we want to hear from you
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <Card className="bg-white/5 backdrop-blur-2xl border border-white/10 transition-all duration-300 shadow-xl shadow-black/10 rounded-2xl">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 bg-primary/10 backdrop-blur-xl rounded-xl border border-primary/20">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Email</div>
                <div className="text-base font-semibold text-foreground truncate">contact@silverxfund.com</div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 backdrop-blur-2xl border border-white/10 transition-all duration-300 shadow-xl shadow-black/10 rounded-2xl">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 bg-primary/10 backdrop-blur-xl rounded-xl border border-primary/20">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Office</div>
                <div className="text-base font-semibold text-foreground">Hyderabad, India</div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/10 rounded-3xl">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-3 text-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="h-12 bg-white/5 backdrop-blur-xl border-white/10"
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-3 text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="h-12 bg-white/5 backdrop-blur-xl border-white/10"
                    data-testid="input-email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="organization" className="block text-sm font-semibold mb-3 text-foreground">
                  Organization
                </label>
                <Input
                  id="organization"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  placeholder="Your company"
                  className="h-12 bg-white/5 backdrop-blur-xl border-white/10"
                  data-testid="input-organization"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-3 text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your vision..."
                  rows={6}
                  className="resize-none bg-white/5 backdrop-blur-xl border-white/10"
                  data-testid="input-message"
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full" data-testid="button-submit">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
