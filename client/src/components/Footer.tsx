import { SiLinkedin, SiX } from "react-icons/si";
import footerLogo from "@assets/SilverX Fund Logo_1760354717741.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-border/50 bg-white dark:bg-background">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <img 
              src={footerLogo} 
              alt="SilverX Fund" 
              className="h-32 mb-6"
              data-testid="img-footer-logo"
            />
            <p className="text-foreground leading-relaxed max-w-md">
              AI-first venture capital backing India's next generation of category-defining deep-tech companies.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 uppercase tracking-wider text-sm">Navigate</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => document.getElementById('investment-thesis')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-thesis"
                >
                  Investment Thesis
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-team"
                >
                  Leadership Team
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 uppercase tracking-wider text-sm">Connect</h4>
            <div className="flex gap-4">
              <button 
                onClick={() => console.log('LinkedIn clicked')}
                className="p-3 border border-border/50 rounded-lg hover:bg-card hover:border-accent/50 transition-all"
                aria-label="LinkedIn"
                data-testid="button-linkedin"
              >
                <SiLinkedin className="h-5 w-5" />
              </button>
              <button 
                onClick={() => console.log('X (Twitter) clicked')}
                className="p-3 border border-border/50 rounded-lg hover:bg-card hover:border-accent/50 transition-all"
                aria-label="X (Twitter)"
                data-testid="button-twitter"
              >
                <SiX className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground">
            © {currentYear} SilverX Fund. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-foreground">
            <button className="hover:text-foreground transition-colors">Privacy Policy</button>
            <button className="hover:text-foreground transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
