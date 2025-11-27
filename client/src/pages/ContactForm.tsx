import { useState } from 'react';
import { Link } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Send, Mail, Building2, User, FileText } from 'lucide-react';

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Subscription Successful",
      description: "Thank you for subscribing! You'll receive our latest reports and insights.",
    });
    
    setFormData({ name: '', email: '', company: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <Link href="/reports/indias-next-wave-5-sectors">
          <Button variant="ghost" className="mb-8" data-testid="button-back-report">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Report
          </Button>
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">Subscribe to Our Reports</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Get exclusive access to our investment research, sector analyses, and insights on India's deep-tech ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="border-primary/20 text-center hover-elevate">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Research Reports</h3>
              <p className="text-sm text-foreground/70">In-depth sector analyses and market insights</p>
            </CardContent>
          </Card>
          <Card className="border-primary/20 text-center hover-elevate">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Startup Spotlights</h3>
              <p className="text-sm text-foreground/70">Profiles of promising deep-tech companies</p>
            </CardContent>
          </Card>
          <Card className="border-primary/20 text-center hover-elevate">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Exclusive Updates</h3>
              <p className="text-sm text-foreground/70">Early access to new research and events</p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Join Our Mailing List</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="h-4 w-4 text-primary" />
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    data-testid="input-name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    data-testid="input-email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company" className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-primary" />
                    Company / Organization
                  </Label>
                  <Input
                    id="company"
                    placeholder="Your company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    data-testid="input-company"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">I am a...</Label>
                  <Input
                    id="subject"
                    placeholder="Investor / Founder / Analyst / Other"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    data-testid="input-subject"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us what topics interest you most..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  data-testid="input-message"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting}
                data-testid="button-subscribe"
              >
                {isSubmitting ? (
                  'Subscribing...'
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Subscribe to Reports
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-sm text-foreground/60 mb-2">
            Are you a deep-tech startup looking for funding?
          </p>
          <p className="text-sm text-foreground/70">
            Reach out directly at{' '}
            <a href="mailto:info@silverx.vc" className="text-primary font-semibold hover:underline">
              info@silverx.vc
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
