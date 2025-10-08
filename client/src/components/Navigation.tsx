import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { label: "Investment Thesis", href: "#investment-thesis" },
  { label: "Team", href: "#team" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" }
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b shadow-sm' : 'bg-transparent'
      }`}
      data-testid="nav-main"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-2xl font-bold tracking-tight"
              data-testid="button-logo"
            >
              SilverX <span className="text-primary">Fund</span>
            </button>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid={`link-${item.label.toLowerCase().replace(' ', '-')}`}
              >
                {item.label}
              </button>
            ))}
            <ThemeToggle />
          </div>
          
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur-lg" data-testid="mobile-menu">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
                data-testid={`mobile-link-${item.label.toLowerCase().replace(' ', '-')}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
