import { SiLinkedin, SiX } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              SilverX <span className="text-primary">Fund</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              AI-first venture capital backing India's next generation of deep-tech unicorns.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('investment-thesis')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Investment Thesis
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Team
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <button 
                onClick={() => console.log('LinkedIn clicked')}
                className="p-2 rounded-lg hover-elevate active-elevate-2 transition-all"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="h-5 w-5" />
              </button>
              <button 
                onClick={() => console.log('X (Twitter) clicked')}
                className="p-2 rounded-lg hover-elevate active-elevate-2 transition-all"
                aria-label="X (Twitter)"
              >
                <SiX className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {currentYear} SilverX Fund. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
