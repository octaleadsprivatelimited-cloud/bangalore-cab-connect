import { Link } from "react-router-dom";
import BookingForm from "@/components/BookingForm";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Car, Shield, Clock, MapPin, Star, Users, 
  Phone, CheckCircle2, ArrowRight 
} from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safe & Secure",
      description: "Verified drivers and GPS-tracked rides for your safety"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Available",
      description: "Book anytime, anywhere in Bangalore"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Top Rated",
      description: "4.8+ rating from 10,000+ happy customers"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Premium Fleet",
      description: "Well-maintained vehicles for comfortable rides"
    }
  ];

  const services = [
    {
      title: "Airport Taxi",
      description: "Reliable pickup & drop to Bangalore Airport",
      link: "/airport-taxi",
      icon: "✈️"
    },
    {
      title: "Local Taxi",
      description: "Within city travel at affordable rates",
      link: "/local-taxi",
      icon: "🏙️"
    },
    {
      title: "Outstation Cabs",
      description: "Comfortable rides to nearby cities",
      link: "/outstation",
      icon: "🛣️"
    },
    {
      title: "City Tours",
      description: "Explore Bangalore with our packages",
      link: "/city-tour",
      icon: "🎭"
    }
  ];

  const routes = [
    { from: "Bangalore", to: "Mysore", duration: "3 hrs", link: "/bangalore-to-mysore" },
    { from: "Bangalore", to: "Coorg", duration: "5 hrs", link: "/bangalore-to-coorg" },
    { from: "Bangalore", to: "Ooty", duration: "6 hrs", link: "/bangalore-to-ooty" },
    { from: "Bangalore", to: "Tirupati", duration: "4 hrs", link: "/bangalore-to-tirupati" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary to-secondary/90 text-secondary-foreground py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZjEwIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🚖 Bangalore's #1 Cab Service
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Premium Taxi Service in
                <span className="text-primary"> Bangalore</span>
              </h1>
              <p className="text-xl text-secondary-foreground/90 mb-8">
                Safe, Reliable & Affordable cab bookings for Airport, Local & Outstation trips. 
                Available 24/7 across Bangalore.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="tel:+917349091759">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold gap-2 text-lg px-8">
                    <Phone className="w-5 h-5" />
                    Call Now
                  </Button>
                </a>
                <Link to="/book">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-secondary font-semibold gap-2 text-lg px-8">
                    Book Online
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-6 justify-center lg:justify-start text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>No Hidden Charges</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>GPS Tracked</span>
                </div>
              </div>
            </div>

            <div>
              <BookingForm inline />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover-lift border-none shadow-md">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services in Bangalore</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From airport transfers to outstation trips, we've got all your travel needs covered
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link key={index} to={service.link}>
                <Card className="p-6 h-full hover-lift cursor-pointer border-2 hover:border-primary transition-all">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <span className="text-primary font-semibold text-sm flex items-center gap-1">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Outstation Routes</h2>
            <p className="text-muted-foreground">Comfortable rides to your favorite destinations from Bangalore</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {routes.map((route, index) => (
              <Link key={index} to={route.link}>
                <Card className="p-6 hover-lift cursor-pointer bg-white">
                  <div className="flex items-center justify-between mb-4">
                    <MapPin className="w-8 h-8 text-primary" />
                    <span className="text-sm font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {route.duration}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-1">{route.from}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <ArrowRight className="w-4 h-4" />
                    <span className="text-sm">to</span>
                  </div>
                  <h3 className="text-lg font-bold text-primary">{route.to}</h3>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/outstation">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                View All Routes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-yellow-500 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Book Your Ride?</h2>
          <p className="text-xl mb-8 opacity-90">Get instant confirmation and best prices guaranteed</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+917349091759">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold gap-2">
                <Phone className="w-5 h-5" />
                Call +91 73490 91759
              </Button>
            </a>
            <Link to="/book">
              <Button size="lg" variant="outline" className="border-2 border-black text-black bg-white hover:bg-white/90 font-semibold">
                Book Online Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
