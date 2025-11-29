import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, IndianRupee, Car, CheckCircle2 } from "lucide-react";

interface RoutePageProps {
  title: string;
  from: string;
  to: string;
  distance?: string;
  time?: string;
  price?: string;
  description: string;
  content: string;
  metaDescription: string;
}

const RoutePage = ({
  title,
  from,
  to,
  distance,
  time,
  price,
  description,
  content,
  metaDescription,
}: RoutePageProps) => {
  useEffect(() => {
    // Update document title and meta description
    document.title = `${title} | RM Cabs - Premium Taxi Service`;
    
    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', metaDescription);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = metaDescription;
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
  }, [title, metaDescription]);

  const features = [
    "Professional and verified drivers",
    "GPS-tracked vehicles for safety",
    "24/7 customer support",
    "Transparent pricing with no hidden charges",
    "Well-maintained and clean vehicles",
    "Flexible payment options",
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
              <p className="text-xl text-muted-foreground mb-8">{description}</p>
              
              {distance && time && (
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <Card className="p-4 bg-primary/5 border-primary/20">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-muted-foreground">Distance</span>
                    </div>
                    <p className="text-2xl font-bold text-primary">{distance}</p>
                  </Card>
                  <Card className="p-4 bg-primary/5 border-primary/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-muted-foreground">Duration</span>
                    </div>
                    <p className="text-2xl font-bold text-primary">{time}</p>
                  </Card>
                </div>
              )}

              {price && (
                <Card className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 mb-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                      <p className="text-3xl font-bold text-primary">{price}</p>
                      <p className="text-xs text-muted-foreground mt-1">*Sedan, one-way</p>
                    </div>
                    <Car className="w-16 h-16 text-primary/30" />
                  </div>
                </Card>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/book">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                    Book Now
                  </Button>
                </Link>
                <a href="tel:+917349091759">
                  <Button size="lg" variant="outline" className="gap-2 border-2">
                    <Phone className="w-5 h-5" />
                    Call for Quote
                  </Button>
                </a>
              </div>
            </div>

            {/* Car Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/20 to-primary/5">
                <div className="w-full h-full flex items-center justify-center">
                  <Car className="w-64 h-64 text-primary/40" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-lg">
                <p className="font-bold text-lg">RM Cabs</p>
                <p className="text-xs opacity-90">Premium Service</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">About This Route</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/80 leading-relaxed">{content}</p>
            </div>
          </Card>
        </div>

        {/* Features */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose RM Cabs?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground/80">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Info */}
        {(distance || price) && (
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="p-8 bg-muted/30">
              <h2 className="text-2xl font-bold mb-6">Pricing Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <IndianRupee className="w-5 h-5 text-primary" />
                    Sedan Rates
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Per KM: ₹12 (One-way) / ₹16 (Round trip)</li>
                    <li>• Driver Allowance: ₹400/day</li>
                    <li>• Minimum: 250 km/day</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <IndianRupee className="w-5 h-5 text-primary" />
                    SUV Rates
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Per KM: ₹18 (One-way) / ₹22 (Round trip)</li>
                    <li>• Driver Allowance: ₹500/day</li>
                    <li>• Minimum: 250 km/day</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                *Toll, parking, and state permit charges extra. Prices may vary based on traffic and route.
              </p>
            </Card>
          </div>
        )}

        {/* CTA Section */}
        <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Book Your Journey?</h3>
          <p className="mb-6 opacity-90">
            Get instant confirmation and best prices guaranteed. Book now or call us for a custom quote!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Book Online Now
              </Button>
            </Link>
            <a href="tel:+917349091759">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto gap-2">
                <Phone className="w-5 h-5" />
                Call +91 73490 91759
              </Button>
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default RoutePage;

