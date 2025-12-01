import { Link } from "react-router-dom";
import { Phone, Mail, Facebook, Twitter, Instagram, Sparkles, ArrowRight, Map } from "lucide-react";

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


  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 mb-6 md:mb-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/rmcabs.png" 
                alt="RM Cabs Logo" 
                className="w-12 h-12 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <div>
                <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  RM Cabs
                </h3>
                <p className="text-xs md:text-sm text-white/60 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Premium Taxi Service
                </p>
              </div>
            </div>
            <p className="text-sm md:text-base text-white/70 mb-4 leading-relaxed">
              Your trusted partner for comfortable and reliable cab services in Bangalore and beyond.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <a 
                href="tel:+917349091759" 
                className="flex items-center gap-3 text-sm md:text-base text-white/80 hover:text-primary transition-all duration-300 hover:translate-x-1 group"
              >
                <div className="w-9 h-9 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span>+91 73490 91759</span>
              </a>
              <a 
                href="tel:+918792456886" 
                className="flex items-center gap-3 text-sm md:text-base text-white/80 hover:text-primary transition-all duration-300 hover:translate-x-1 group"
              >
                <div className="w-9 h-9 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span>+91 87924 56886</span>
              </a>
              <a 
                href="mailto:info@rmcabs.in" 
                className="flex items-center gap-3 text-sm md:text-base text-white/80 hover:text-primary transition-all duration-300 hover:translate-x-1 group"
              >
                <div className="w-9 h-9 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span>info@rmcabs.in</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg md:text-xl mb-4 text-white flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-primary to-yellow-500 rounded-full"></div>
              Our Services
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm md:text-base text-white/70 hover:text-primary transition-all duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Routes */}
          <div>
            <h4 className="font-bold text-lg md:text-xl mb-4 text-white flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-primary to-yellow-500 rounded-full"></div>
              Popular Routes
            </h4>
            <ul className="space-y-2">
              {popularRoutes.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm md:text-base text-white/70 hover:text-primary transition-all duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Addresses */}
          <div>
            <h4 className="font-bold text-lg md:text-xl mb-4 text-white flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-primary to-yellow-500 rounded-full"></div>
              Our Offices
            </h4>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-white mb-2 text-sm md:text-base">Main Office:</p>
                <p className="text-sm md:text-base text-white/70 leading-relaxed">
                  109/78, 2nd Floor, HSR Layout, Bangalore, Karnataka 560102
                </p>
              </div>
              <div>
                <p className="font-semibold text-white mb-2 text-sm md:text-base">Home Office:</p>
                <p className="text-sm md:text-base text-white/70 leading-relaxed">
                  Adharshanagar, Arishankunte, Nelamangala, Bangalore 562123
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-4 md:pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-xs md:text-sm text-white/60 leading-relaxed">
                © 2025 RM Cabs. All rights reserved. developed by{" "}
                <a 
                  href="https://www.octaleads.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-yellow-500 transition-colors duration-300 font-semibold underline underline-offset-2 hover:underline-offset-4"
                >
                  octaleads private limited
                </a>
              </p>
            </div>
            
            {/* Sitemap Link */}
            <a 
              href="/sitemap.xml" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs md:text-sm text-white/60 hover:text-primary transition-all duration-300 group"
            >
              <Map className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Sitemap</span>
            </a>
            
            {/* Social Media */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white/70 hover:text-primary hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white/70 hover:text-primary hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white/70 hover:text-primary hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
