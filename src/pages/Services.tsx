import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Link } from "react-router-dom";
import { 
  Plane, Building2, Car, Globe, 
  Users, Heart, MapPin, Clock, 
  ArrowRight, Sparkles, CheckCircle2, Phone
} from "lucide-react";

const Services = () => {
  const servicesAnimation = useScrollAnimation({ threshold: 0.1 });
  const ctaAnimation = useScrollAnimation({ threshold: 0.2 });

  const services = [
    {
      icon: <Plane className="w-10 h-10" />,
      title: "Airport Taxi Service",
      description: "Reliable pickup and drop services to Bangalore Airport (Kempegowda International Airport). Track your flight, meet & greet service available.",
      link: "/airport-taxi",
      features: ["Flight Tracking", "Meet & Greet", "24/7 Available"]
    },
    {
      icon: <MapPin className="w-10 h-10" />,
      title: "Local Taxi Service",
      description: "Comfortable rides within Bangalore city. Fixed packages available: 4hrs/40km, 8hrs/80km. Perfect for shopping, meetings, and city tours.",
      link: "/local-taxi",
      features: ["Fixed Packages", "No Extra Charges", "City Expert Drivers"]
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Outstation Cabs",
      description: "One-way and round-trip services to nearby cities like Mysore, Coorg, Ooty, Mangalore, Chennai, and more. Comfortable long-distance travel.",
      link: "/outstation",
      features: ["One Way & Round Trip", "Driver Allowance Included", "Hill Station Specialists"]
    },
    {
      icon: <Building2 className="w-10 h-10" />,
      title: "Corporate Services",
      description: "Dedicated cab services for corporate clients. Monthly packages, employee transport, guest pickup, and regular business travel solutions.",
      link: "/corporate",
      features: ["Monthly Packages", "GST Invoices", "Dedicated Account Manager"]
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Wedding Car Rentals",
      description: "Luxury cars for weddings and special occasions. Decorated vehicles, professional chauffeurs, and flexible booking options for your big day.",
      link: "/wedding-cars",
      features: ["Luxury Fleet", "Decoration Available", "Multiple Days Booking"]
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Tempo Traveller",
      description: "12-17 seater tempo travellers for group tours, family trips, and corporate outings. AC vehicles with push-back seats.",
      link: "/tempo-traveller",
      features: ["12-17 Seater", "AC Push Back Seats", "Group Discounts"]
    },
    {
      icon: <Car className="w-10 h-10" />,
      title: "Luxury Car Rental",
      description: "Premium cars like BMW, Mercedes, and Audi for VIP travel, business meetings, and special occasions. Professional chauffeur-driven service.",
      link: "/luxury-cars",
      features: ["Premium Brands", "Professional Chauffeur", "Complimentary Water"]
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "24/7 Taxi Service",
      description: "Round-the-clock cab service available throughout Bangalore. Late-night pickups, early morning drops, and emergency rides anytime.",
      link: "/24x7-service",
      features: ["Always Available", "Safe Night Rides", "Female Drivers Available"]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/cabs-2.avif" 
            alt="Services background"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1920&h=1080&fit=crop&q=80';
            }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-4">
              <span className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 w-fit mx-auto shadow-lg">
                <Sparkles className="w-4 h-4" />
                Our Services
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white drop-shadow-lg">
              Our Services in Bangalore
            </h1>
            <p className="text-sm md:text-base text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Comprehensive taxi and cab services tailored to meet all your transportation needs in and around Bangalore. 
              From airport transfers to luxury rentals, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div 
            ref={servicesAnimation.ref}
            className={`grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto transition-all duration-1000 ${
              servicesAnimation.isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            }`}
          >
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="group">
                <Card 
                  className="relative h-full p-6 bg-white/90 backdrop-blur-sm border-2 border-transparent hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-3 overflow-hidden cursor-pointer flex flex-col"
                  style={{
                    transitionDelay: servicesAnimation.isVisible ? `${index * 50}ms` : "0ms"
                  }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-yellow-500/10 to-transparent rounded-tr-full"></div>
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <div className="mb-5">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/10 via-primary/5 to-yellow-500/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-primary/20">
                        {service.icon}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm md:text-base text-muted-foreground mb-5 flex-grow leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="mt-auto">
                      <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Service CTA */}
      <section 
        ref={ctaAnimation.ref}
        className={`py-10 md:py-12 relative overflow-hidden transition-all duration-1000 ${
          ctaAnimation.isVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-10"
        }`}
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-yellow-500"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-semibold mb-4 border border-white/30 shadow-lg">
              <Sparkles className="w-3.5 h-3.5" />
              Custom Solutions Available
            </div>

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-white drop-shadow-lg">
              Need a Custom Service?
            </h2>
            
            {/* Description */}
            <p className="text-sm md:text-base mb-6 text-white/90 drop-shadow-md max-w-2xl mx-auto">
              We offer customized transportation solutions for events, conferences, and special requirements. 
              Contact us to discuss your needs and get a tailored quote.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="group bg-white text-primary hover:bg-white/90 font-semibold px-6 py-5 text-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 min-w-[180px]"
                >
                  Contact Us for Custom Solutions
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <a href="tel:+917349091759">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="group border-2 border-white/50 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white font-semibold px-6 py-5 text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 min-w-[180px]"
                >
                  <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Call Now
                </Button>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-white/80 text-xs">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-yellow-300" />
                <span>Customized Solutions</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-yellow-300" />
                <span>Flexible Packages</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-yellow-300" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
