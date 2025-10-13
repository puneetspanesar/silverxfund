import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
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
      setIsScrolled(window.scrollY > 20);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-xl border-b border-border shadow-sm' 
          : 'bg-card/80 backdrop-blur-md'
      }`}
      data-testid="nav-main"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between py-4">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="transition-all duration-300 hover-elevate rounded-lg px-3 py-2"
            data-testid="button-logo"
          >
            <img 
              src={logo} 
              alt="SilverX Fund" 
              className={`transition-all duration-300 ${isScrolled ? 'h-12' : 'h-14'}`}
            />
          </button>
          
          <div className="hidden lg:flex items-center gap-1 bg-muted/30 rounded-full p-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="relative px-6 py-2.5 text-sm font-medium text-foreground/70 hover:text-foreground transition-all rounded-full hover-elevate group"
                data-testid={`link-${item.label.toLowerCase().replace(' ', '-')}`}
              >
                {item.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-8" />
              </button>
            ))}
          </div>

          <Button
            variant="default"
            size="sm"
            onClick={() => handleNavClick('#contact')}
            className="hidden lg:flex"
            data-testid="button-cta"
          >
            Get Started
          </Button>
          
          <div className="flex lg:hidden items-center gap-4">
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
        <div className="lg:hidden border-t border-border bg-card" data-testid="mobile-menu">
          <div className="px-6 py-4 space-y-1 max-w-[1400px] mx-auto">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-4 py-3 text-sm font-medium text-foreground/70 hover:text-foreground hover-elevate rounded-lg transition-all"
                data-testid={`mobile-link-${item.label.toLowerCase().replace(' ', '-')}`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2">
              <Button
                variant="default"
                size="sm"
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
