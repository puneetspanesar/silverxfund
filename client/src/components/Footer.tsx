import { SiLinkedin, SiX, SiFacebook, SiInstagram } from "react-icons/si";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import footerLogo from "@assets/SilverX Fund Logo_1760354717741.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/5 backdrop-blur-2xl border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-10">
          <div className="lg:col-span-1">
            <img 
              src={footerLogo} 
              alt="SilverX Fund" 
              className="h-24 mb-6"
              data-testid="img-footer-logo"
            />
            <p className="text-foreground leading-relaxed mb-6">
              Early stage venture capital firm looking to back category defining founders
            </p>
            <div className="flex gap-3">
              <button 
                onClick={() => console.log('LinkedIn clicked')}
                className="p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl transition-all hover-elevate"
                aria-label="LinkedIn"
                data-testid="button-linkedin"
              >
                <SiLinkedin className="h-5 w-5 text-foreground" />
              </button>
              <button 
                onClick={() => console.log('X (Twitter) clicked')}
                className="p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl transition-all hover-elevate"
                aria-label="X (Twitter)"
                data-testid="button-twitter"
              >
                <SiX className="h-5 w-5 text-foreground" />
              </button>
              <a 
                href="https://www.facebook.com/silverxfund/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl transition-all hover-elevate"
                aria-label="Facebook"
                data-testid="button-facebook"
              >
                <SiFacebook className="h-5 w-5 text-foreground" />
              </a>
              <a 
                href="https://www.instagram.com/silverxfund/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl transition-all hover-elevate"
                aria-label="Instagram"
                data-testid="button-instagram"
              >
                <SiInstagram className="h-5 w-5 text-foreground" />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => document.getElementById('investment-thesis')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-foreground transition-colors flex items-center gap-2 group"
                    data-testid="link-footer-thesis"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Investment Thesis</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-foreground transition-colors flex items-center gap-2 group"
                    data-testid="link-footer-team"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Leadership Team</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-foreground transition-colors flex items-center gap-2 group"
                    data-testid="link-footer-contact"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Contact</span>
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="text-sm text-foreground mb-1">Email</div>
                    <div className="text-sm font-medium text-foreground">info@silverx.vc</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="text-sm text-foreground mb-1">Office</div>
                    <div className="text-sm font-medium text-foreground">Hyderabad, India</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground">
            © {currentYear} SilverX Fund. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <button className="text-foreground transition-colors">Privacy Policy</button>
            <button className="text-foreground transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
