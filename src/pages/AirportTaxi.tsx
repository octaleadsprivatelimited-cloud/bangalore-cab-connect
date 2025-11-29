import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Clock, Shield, MapPin, CheckCircle, Plane } from "lucide-react";

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
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Airport Taxi Service in Bangalore
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Reliable cab service to and from Kempegowda International Airport. Book now for hassle-free airport transfers!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book">
              <Button size="lg" className="w-full sm:w-auto">Book Airport Taxi Now</Button>
            </Link>
            <a href="tel:+919876543210">
              <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2">
                <Phone className="w-5 h-5" />
                Call: +91 98765 43210
              </Button>
            </a>
          </div>
        </div>

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
            <a href="tel:+919876543210">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AirportTaxi;