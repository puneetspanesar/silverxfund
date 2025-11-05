import { Button } from "@/components/ui/button";
import { Mail, MapPin, Send } from "lucide-react";
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
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-[900px] mx-auto px-8 lg:px-16">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Get In Touch</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground" data-testid="text-contact-title">
            Let's build the future together
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto" data-testid="text-contact-subtitle">
            Whether you're a founder with a vision or an LP seeking extraordinary returns, we want to hear from you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-foreground/60 mb-1 font-semibold">Email</div>
              <a href="mailto:info@silverx.vc" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                info@silverx.vc
              </a>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-foreground/60 mb-1 font-semibold">Office</div>
              <div className="text-lg font-medium text-foreground">Hyderabad, India</div>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group">
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                className="w-full pb-3 text-lg bg-transparent border-b-2 border-border/20 focus:border-primary outline-none transition-colors placeholder:text-foreground/40"
                data-testid="input-name"
              />
            </div>
            <div className="group">
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full pb-3 text-lg bg-transparent border-b-2 border-border/20 focus:border-primary outline-none transition-colors placeholder:text-foreground/40"
                data-testid="input-email"
              />
            </div>
          </div>
          
          <div className="group">
            <input
              id="organization"
              type="text"
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              placeholder="Your company"
              className="w-full pb-3 text-lg bg-transparent border-b-2 border-border/20 focus:border-primary outline-none transition-colors placeholder:text-foreground/40"
              data-testid="input-organization"
            />
          </div>
          
          <div className="group">
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your vision..."
              rows={5}
              className="w-full pb-3 text-lg bg-transparent border-b-2 border-border/20 focus:border-primary outline-none resize-none transition-colors placeholder:text-foreground/40"
              data-testid="input-message"
            />
          </div>
          
          <div className="pt-4">
            <Button type="submit" size="lg" className="px-8 group" data-testid="button-submit">
              Send Message
              <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
