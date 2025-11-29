import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Clock, MapPin, IndianRupee } from "lucide-react";

const LocalTaxi = () => {
  const packages = [
    {
      title: "4 Hours / 40 KM",
      price: "₹1,200",
      sedan: "₹1,200",
      suv: "₹1,800",
      features: ["Perfect for shopping", "Local errands", "City meetings", "Hospital visits"]
    },
    {
      title: "8 Hours / 80 KM",
      price: "₹2,000",
      sedan: "₹2,000",
      suv: "₹3,000",
      features: ["Full day city tour", "Multiple stops", "Business meetings", "Family outings"]
    },
    {
      title: "12 Hours / 120 KM",
      price: "₹2,800",
      sedan: "₹2,800",
      suv: "₹4,200",
      features: ["Extended city travel", "Corporate use", "Event coverage", "Airport + city tour"]
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Local Taxi Service in Bangalore
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Hourly rental packages for city travel. No per-kilometer worries, just book and explore!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book">
              <Button size="lg">Book Local Taxi</Button>
            </Link>
            <a href="tel:+917349091759">
              <Button size="lg" variant="outline" className="gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
            </a>
          </div>
        </div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Card key={index} className="p-6 hover-lift">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
                  <Clock className="w-4 h-4" />
                  <span className="font-bold">{pkg.title}</span>
                </div>
                <div className="mb-4">
                  <div className="text-sm text-muted-foreground mb-1">Sedan</div>
                  <div className="text-3xl font-bold text-primary">{pkg.sedan}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">SUV</div>
                  <div className="text-2xl font-bold">{pkg.suv}</div>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/book">
                <Button className="w-full">Book Now</Button>
              </Link>
            </Card>
          ))}
        </div>

        {/* Popular Uses */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Popular Uses for Local Cabs</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <MapPin className="w-6 h-6" />, title: "Shopping Trips", desc: "Visit malls and markets with ease" },
              { icon: <Clock className="w-6 h-6" />, title: "Business Meetings", desc: "Professional travel for work" },
              { icon: <IndianRupee className="w-6 h-6" />, title: "Hospital Visits", desc: "Medical appointments made easy" },
              { icon: <MapPin className="w-6 h-6" />, title: "City Sightseeing", desc: "Explore Bangalore attractions" },
              { icon: <Clock className="w-6 h-6" />, title: "Family Outings", desc: "Comfortable family travel" },
              { icon: <IndianRupee className="w-6 h-6" />, title: "Daily Commute", desc: "Regular office travel" },
            ].map((use, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-3">
                  {use.icon}
                </div>
                <h3 className="font-bold mb-2">{use.title}</h3>
                <p className="text-sm text-muted-foreground">{use.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Terms */}
        <Card className="max-w-3xl mx-auto p-6 mb-8">
          <h3 className="font-bold mb-4">Package Terms</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Extra hours charged at ₹150/hour (Sedan) and ₹200/hour (SUV)</li>
            <li>• Extra kilometers charged at ₹12/km (Sedan) and ₹18/km (SUV)</li>
            <li>• Driver allowance included in package</li>
            <li>• Parking and toll charges extra</li>
            <li>• Fuel included in package price</li>
          </ul>
        </Card>

        <Card className="max-w-2xl mx-auto p-8 bg-primary text-primary-foreground text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Book Your Local Taxi?</h3>
          <p className="mb-6 opacity-90">
            Get instant confirmation and start your journey within 30 minutes
          </p>
          <Link to="/book">
            <Button size="lg" variant="secondary">Book Now</Button>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default LocalTaxi;