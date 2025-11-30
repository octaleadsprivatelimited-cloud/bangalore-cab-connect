import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, MapPin, IndianRupee, Calendar } from "lucide-react";
import outstationImg from "@/assets/outstation-highway.jpg";

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
    <div>
      {/* Hero Section with Background Image */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${outstationImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/85 via-secondary/75 to-secondary/85 z-[1]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Outstation Cabs from Bangalore</h1>
            <p className="text-xl mb-8 opacity-90">
              Travel to nearby cities with comfort and safety. One-way and round-trip options available!
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

          {/* Pricing Table */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Outstation Cab Charges</h2>
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-primary-foreground">
                    <tr>
                      <th className="p-4 text-left">Vehicle Type</th>
                      <th className="p-4 text-left">Per KM</th>
                      <th className="p-4 text-left">Driver Allowance</th>
                      <th className="p-4 text-left">Night Charges</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Sedan (Dzire, Etios)</td>
                      <td className="p-4 text-primary font-bold">₹12/km</td>
                      <td className="p-4">₹300/day</td>
                      <td className="p-4">₹250</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">SUV (Innova, Ertiga)</td>
                      <td className="p-4 text-primary font-bold">₹18/km</td>
                      <td className="p-4">₹400/day</td>
                      <td className="p-4">₹300</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Tempo Traveller</td>
                      <td className="p-4 text-primary font-bold">₹25/km</td>
                      <td className="p-4">₹500/day</td>
                      <td className="p-4">₹400</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
            <p className="text-sm text-muted-foreground text-center mt-4">
              *Minimum 250 km per day for outstation bookings. Toll, parking, and state taxes extra.
            </p>
          </div>

          {/* Features Grid */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Book Outstation with Us?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Flexible Packages", desc: "One-way, round-trip, or multi-city options" },
                { title: "Experienced Drivers", desc: "Well-versed with outstation routes" },
                { title: "Clean Vehicles", desc: "Sanitized and well-maintained fleet" },
                { title: "No Hidden Costs", desc: "Transparent billing, no surprises" },
                { title: "24/7 Support", desc: "Customer support throughout your journey" },
                { title: "Easy Cancellation", desc: "Hassle-free cancellation policy" },
              ].map((feature, index) => (
                <Card key={index} className="p-6 text-center">
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <Card className="max-w-2xl mx-auto p-8 bg-primary text-primary-foreground text-center">
            <h3 className="text-2xl font-bold mb-4">Plan Your Outstation Trip Today!</h3>
            <p className="mb-6 opacity-90">
              Book your outstation cab now for a comfortable and safe journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book">
                <Button size="lg" variant="secondary">
                  Book Online
                </Button>
              </Link>
              <a href="tel:+917349091759">
                <Button size="lg" variant="secondary" className="gap-2">
                  <Phone className="w-5 h-5" />
                  Get Quote
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Outstation;
