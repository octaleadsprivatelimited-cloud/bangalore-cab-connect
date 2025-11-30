import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Clock, Shield, MapPin, CheckCircle, Plane } from "lucide-react";
import airportTaxiImg from "@/assets/airport-taxi.jpg";

const AirportTaxi = () => {
  const features = [
    { icon: <Clock className="w-6 h-6" />, title: "24/7 Availability", desc: "Round-the-clock airport pickup and drop" },
    { icon: <Shield className="w-6 h-6" />, title: "Flight Tracking", desc: "We track your flight for delays" },
    { icon: <MapPin className="w-6 h-6" />, title: "Meet & Greet", desc: "Driver waits with name board" },
    { icon: <Plane className="w-6 h-6" />, title: "All Terminals", desc: "Pickup from all airport terminals" },
  ];

  const pricing = [
    { route: "Airport to City Center", distance: "35-40 km", sedan: "₹850-1000", suv: "₹1200-1400" },
    { route: "Airport to Whitefield", distance: "25-30 km", sedan: "₹650-800", suv: "₹950-1100" },
    { route: "Airport to Electronic City", distance: "45-50 km", sedan: "₹1100-1300", suv: "₹1500-1700" },
  ];

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${airportTaxiImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/85 via-secondary/75 to-secondary/85 z-[1]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Airport Taxi Service in Bangalore</h1>
            <p className="text-xl mb-8 opacity-90">
              Reliable cab service to and from Kempegowda International Airport. Book now for hassle-free airport transfers!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+917349091759">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now
                </Button>
              </a>
              <Link to="/book">
                <Button size="lg" className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-secondary font-semibold">
                  Book Online
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover-lift">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </Card>
            ))}
          </div>

          {/* Pricing */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Airport Taxi Fare</h2>
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-primary-foreground">
                    <tr>
                      <th className="p-4 text-left">Route</th>
                      <th className="p-4 text-left">Distance</th>
                      <th className="p-4 text-left">Sedan</th>
                      <th className="p-4 text-left">SUV</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricing.map((row, index) => (
                      <tr key={index} className="border-b last:border-0">
                        <td className="p-4 font-medium">{row.route}</td>
                        <td className="p-4 text-muted-foreground">{row.distance}</td>
                        <td className="p-4 text-primary font-bold">{row.sedan}</td>
                        <td className="p-4 text-primary font-bold">{row.suv}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
            <p className="text-sm text-muted-foreground text-center mt-4">
              *Prices may vary based on traffic and route. Call for exact quote.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Airport Taxi?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Professional chauffeurs with airport experience",
                "Clean and well-maintained vehicles",
                "Free waiting time for flight delays",
                "GPS-enabled cabs for fastest routes",
                "Cashless payment options",
                "Confirmed bookings with instant confirmation"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Card */}
          <Card className="max-w-2xl mx-auto p-8 bg-primary text-primary-foreground text-center">
            <h3 className="text-2xl font-bold mb-4">Need Airport Pickup Now?</h3>
            <p className="mb-6 opacity-90">
              Book instantly or call us for immediate airport taxi service
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Book Online
                </Button>
              </Link>
              <a href="tel:+917349091759">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AirportTaxi;
