import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Plane, Building2, Car, Globe, 
  Users, Heart, MapPin, Clock 
} from "lucide-react";

const Services = () => {
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
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services in Bangalore</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive taxi and cab services tailored to meet all your transportation needs in and around Bangalore
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover-lift flex flex-col">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">{service.description}</p>
              
              <div className="space-y-2 mb-4">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <span className="text-primary">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Link to={service.link}>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Learn More
                </Button>
              </Link>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 max-w-4xl mx-auto border-primary/20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Need a Custom Service?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We offer customized transportation solutions for events, conferences, and special requirements. 
              Contact us to discuss your needs.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Contact Us for Custom Solutions
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Services;
