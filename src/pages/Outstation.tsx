import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, MapPin, IndianRupee, Calendar } from "lucide-react";

const Outstation = () => {
  const destinations = [
    { name: "Mysore", distance: "150 km", time: "3 hours", price: "₹2,400", link: "/bangalore-to-mysore" },
    { name: "Coorg", distance: "270 km", time: "5.5 hours", price: "₹4,300", link: "/bangalore-to-coorg" },
    { name: "Ooty", distance: "280 km", time: "6 hours", price: "₹4,500", link: "/bangalore-to-ooty" },
    { name: "Tirupati", distance: "250 km", time: "4 hours", price: "₹4,000", link: "/bangalore-to-tirupati" },
    { name: "Mangalore", distance: "350 km", time: "7 hours", price: "₹5,600", link: "/bangalore-to-mangalore" },
    { name: "Chennai", distance: "350 km", time: "6 hours", price: "₹5,600", link: "/services" },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Outstation Cabs from Bangalore
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Travel to nearby cities with comfort and safety. One-way and round-trip options available!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book">
              <Button size="lg">Book Outstation Cab</Button>
            </Link>
            <a href="tel:+917349091759">
              <Button size="lg" variant="outline" className="gap-2">
                <Phone className="w-5 h-5" />
                Get Quote
              </Button>
            </a>
          </div>
        </div>

        {/* Popular Destinations */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Popular Destinations</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest, index) => (
              <Card key={index} className="p-6 hover-lift">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">{dest.name}</h3>
                    <p className="text-sm text-muted-foreground">{dest.distance} • {dest.time}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-sm text-muted-foreground mb-1">Starting from</div>
                  <div className="text-2xl font-bold text-primary">{dest.price}</div>
                  <div className="text-xs text-muted-foreground">*Sedan, one-way</div>
                </div>
                <Link to={dest.link}>
                  <Button variant="outline" className="w-full">View Details</Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>

        {/* Trip Types */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Choose Your Trip Type</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">One-Way Trip</h3>
              <p className="text-muted-foreground mb-4">
                Travel to your destination without return. Perfect for relocations and one-sided journeys.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Pay only for one-way distance</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Driver allowance included</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Flexible pickup times</span>
                </li>
              </ul>
              <Link to="/book">
                <Button className="w-full">Book One-Way</Button>
              </Link>
            </Card>

            <Card className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Round Trip</h3>
              <p className="text-muted-foreground mb-4">
                Book for going and returning. Ideal for weekend getaways and short trips.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Same cab for return journey</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Driver stays with you</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Multi-day packages available</span>
                </li>
              </ul>
              <Link to="/book">
                <Button className="w-full">Book Round Trip</Button>
              </Link>
            </Card>
          </div>
        </div>

        {/* Pricing Info */}
        <Card className="max-w-4xl mx-auto p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6">Outstation Pricing</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <IndianRupee className="w-5 h-5 text-primary" />
                Sedan Rates
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• Per KM: ₹12 (One-way) / ₹16 (Round trip)</li>
                <li>• Driver Allowance: ₹400/day</li>
                <li>• Minimum: 250 km/day</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <IndianRupee className="w-5 h-5 text-primary" />
                SUV Rates
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• Per KM: ₹18 (One-way) / ₹22 (Round trip)</li>
                <li>• Driver Allowance: ₹500/day</li>
                <li>• Minimum: 250 km/day</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            *Toll, parking, and state permit charges extra. Hill station charges may apply.
          </p>
        </Card>

        <Card className="max-w-2xl mx-auto p-8 bg-primary text-primary-foreground text-center">
          <h3 className="text-2xl font-bold mb-4">Plan Your Outstation Trip Today!</h3>
          <p className="mb-6 opacity-90">
            Book now or call us for customized packages and group discounts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book">
              <Button size="lg" variant="secondary">Book Now</Button>
            </Link>
            <a href="tel:+917349091759">
              <Button size="lg" variant="secondary" className="gap-2">
                <Phone className="w-5 h-5" />
                Call for Quote
              </Button>
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Outstation;