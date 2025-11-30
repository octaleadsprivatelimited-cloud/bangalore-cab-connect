import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const serviceLinks = [
    { to: "/airport-taxi", label: "Airport Taxi" },
    { to: "/local-taxi", label: "Local Taxi" },
    { to: "/outstation", label: "Outstation Cabs" },
    { to: "/corporate", label: "Corporate Services" },
    { to: "/wedding-cars", label: "Wedding Cars" },
  ];

  const popularRoutes = [
    { to: "/bangalore-to-mysore", label: "Bangalore to Mysore" },
    { to: "/bangalore-to-coorg", label: "Bangalore to Coorg" },
    { to: "/bangalore-to-ooty", label: "Bangalore to Ooty" },
    { to: "/bangalore-to-tirupati", label: "Bangalore to Tirupati" },
  ];

  const companyLinks = [
    { to: "/about", label: "About Us" },
    { to: "/fleet", label: "Our Fleet" },
    { to: "/testimonials", label: "Testimonials" },
    { to: "/offers", label: "Offers" },
    { to: "/blog", label: "Blog" },
  ];

  const legalLinks = [
    { to: "/terms", label: "Terms & Conditions" },
    { to: "/privacy", label: "Privacy Policy" },
    { to: "/refund", label: "Refund Policy" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-2xl">🚖</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">RM Cabs</h3>
                <p className="text-xs text-secondary-foreground/70">Premium Taxi Service</p>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/80 mb-4">
              Your trusted partner for comfortable and reliable cab services in Bangalore and beyond.
            </p>
            <div className="space-y-2">
              <a href="tel:+917349091759" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +91 73490 91759
              </a>
              <a href="tel:+918792456886" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +91 87924 56886
              </a>
              <a href="mailto:info@rmcabs.in" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                info@rmcabs.in
              </a>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Main Office:</p>
                  <p>109/78, 2nd Floor, HSR Layout, Bangalore, Karnataka 560102</p>
                  <p className="font-semibold mt-2">Home Office:</p>
                  <p>Adharshanagar, Arishankunte, Nelamangala, Bangalore 562123</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Routes */}
          <div>
            <h4 className="font-bold mb-4">Popular Routes</h4>
            <ul className="space-y-2">
              {popularRoutes.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 mb-6">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-secondary-foreground/70">
            © 2024 RM Cabs. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
