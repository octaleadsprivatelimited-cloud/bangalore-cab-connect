import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Clock, MapPin, IndianRupee } from "lucide-react";
import localTaxiImg from "@/assets/local-taxi.jpg";

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

  const popularPlaces = [
    "Lalbagh Botanical Garden", "Cubbon Park", "Bangalore Palace",
    "ISKCON Temple", "Wonderla", "Innovative Film City",
    "Nandi Hills", "Bannerghatta Zoo", "Commercial Street"
  ];

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${localTaxiImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/85 via-secondary/75 to-secondary/85 z-[1]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Local Taxi Service in Bangalore</h1>
            <p className="text-xl mb-8 opacity-90">
              Hourly rental packages for city travel. No per-kilometer worries, just book and explore!
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
          {/* Package Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <Card key={index} className="p-6 hover-lift">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
                    <Clock className="w-4 h-4" />
                    <span className="font-semibold">{pkg.title}</span>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">{pkg.price}</div>
                  <div className="text-sm text-muted-foreground">Sedan Starting Price</div>
                </div>

                <div className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div>
                    <div className="text-xs text-muted-foreground">Sedan</div>
                    <div className="font-bold text-primary">{pkg.sedan}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">SUV</div>
                    <div className="font-bold text-primary">{pkg.suv}</div>
                  </div>
                </div>

                <Link to="/book">
                  <Button className="w-full mt-4">
                    Book Now
                  </Button>
                </Link>
              </Card>
            ))}
          </div>

          {/* Popular Places */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Popular Places to Visit</h2>
            <Card className="p-8">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {popularPlaces.map((place, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm">{place}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* CTA Section */}
          <Card className="max-w-2xl mx-auto p-8 bg-primary text-primary-foreground text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Explore Bangalore?</h3>
            <p className="mb-6 opacity-90">
              Book your local taxi now and enjoy hassle-free city travel
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

export default LocalTaxi;
