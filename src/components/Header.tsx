import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";

const logoImage = "/rmcabs.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const mainLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/fleet", label: "Our Fleet" },
    { to: "/services", label: "Services" },
    { to: "/all-routes", label: "All Routes" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-gradient-to-r from-primary/10 via-white to-primary/5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center group transition-transform hover:scale-105 h-full"
          >
            <img 
              src="/rmcabs.png" 
              alt="RM Cabs Logo" 
              className="object-contain h-full w-auto"
              style={{ 
                height: '100%',
                maxHeight: '56px',
                display: 'block'
              }}
              loading="eager"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                console.error('Failed to load logo:', target.src);
                // Try alternative path
                if (!target.src.includes('rmcabs.png')) {
                  target.src = '/rmcabs.png';
                }
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-0.5">
            {mainLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-3 py-1.5 text-sm font-medium transition-all duration-200 rounded-md ${
                  isActive(link.to)
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.label}
                {isActive(link.to) && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-2">
            <a href="tel:+917349091759">
              <Button
                variant="outline"
                size="sm"
                className="gap-1.5 h-8 text-xs border hover:bg-primary hover:text-secondary hover:border-primary transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="font-medium">Call Now</span>
              </Button>
            </a>
            <Link to="/book">
              <Button
                size="sm"
                className="h-8 bg-gradient-to-r from-primary to-primary/90 text-secondary hover:from-primary/90 hover:to-primary shadow-md hover:shadow-lg transition-all font-semibold px-4 text-xs"
              >
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-1.5 rounded-md hover:bg-primary/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-3 border-t border-border/50">
            <nav className="flex flex-col space-y-1.5">
              {mainLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                    isActive(link.to)
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-2 px-4">
                <a href="tel:+917349091759" onClick={() => setMobileMenuOpen(false)}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full gap-1.5 h-9 border hover:bg-primary hover:text-secondary"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span className="font-medium text-xs">Call Now</span>
                  </Button>
                </a>
                <Link
                  to="/book"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button size="sm" className="w-full h-9 bg-gradient-to-r from-primary to-primary/90 text-secondary hover:from-primary/90 hover:to-primary font-semibold shadow-md text-xs">
                    Book Now
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
