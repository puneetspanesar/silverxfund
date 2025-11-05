import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUp } from "lucide-react";
import logo from "@assets/SilverX Fund Logo_1759929335279.png";

const navItems = [
  { label: "Investment Thesis", href: "#investment-thesis" },
  { label: "Team", href: "#team" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" }
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    console.log(`Navigating to ${href}`);
    setIsMobileMenuOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? 'border-b border-border shadow-sm' : ''
      }`}
      data-testid="nav-main"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="relative flex items-center justify-end h-20">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center transition-opacity hover:opacity-80 absolute left-0 top-0"
            data-testid="button-logo"
          >
            <img 
              src={logo} 
              alt="SilverX Fund" 
              className={`transition-all duration-300 ${
                isScrolled ? 'h-20' : 'h-32'
              }`}
            />
          </button>
          
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <div key={item.href} className="flex items-center gap-8">
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group uppercase tracking-wider"
                  data-testid={`link-${item.label.toLowerCase().replace(' ', '-')}`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </button>
                {index < navItems.length - 1 && (
                  <div className="h-6 w-px bg-border/30" />
                )}
              </div>
            ))}
            <div className="ml-4 group relative">
              <button
                onClick={() => handleNavClick('#contact')}
                className="w-12 h-12 rounded-full bg-primary flex items-center justify-center transition-all duration-300 group-hover:w-auto group-hover:px-6"
                data-testid="button-cta"
              >
                <ArrowUp className="h-5 w-5 text-white flex-shrink-0" />
                <span className="overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-300 text-white font-medium text-sm whitespace-nowrap group-hover:ml-2">
                  Explore
                </span>
              </button>
            </div>
          </div>
          
          <div className="flex lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background" data-testid="mobile-menu">
          <div className="px-6 py-6 space-y-4 max-w-[1400px] mx-auto">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-4 py-3 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-muted rounded-lg transition-all uppercase tracking-wider"
                data-testid={`mobile-link-${item.label.toLowerCase().replace(' ', '-')}`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2">
              <Button
                size="default"
                onClick={() => handleNavClick('#contact')}
                className="w-full"
                data-testid="button-mobile-cta"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
