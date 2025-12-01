import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { 
  Users, Luggage, Fuel, Shield, Car, CheckCircle2, 
  Star, ArrowRight, Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";
import sedanImg from "@/assets/sedan-car.jpg";
import suvImg from "@/assets/suv-car.jpg";
import hatchbackImg from "@/assets/hatchback-car.jpg";

const Fleet = () => {
  const vehiclesAnimation = useScrollAnimation({ threshold: 0.1 });
  const featuresAnimation = useScrollAnimation({ threshold: 0.2 });

  const vehicles = [
    {
      name: "Sedan",
      models: "Swift Dzire, Etios, Honda City",
      passengers: "4",
      luggage: "2",
      features: ["AC", "GPS", "Music System"],
      ideal: "Airport transfers, City rides",
      image: sedanImg
    },
    {
      name: "SUV",
      models: "Innova, Ertiga, XUV500",
      passengers: "6-7",
      luggage: "3-4",
      features: ["AC", "GPS", "Spacious", "Comfortable"],
      ideal: "Family trips, Outstation",
      image: suvImg
    },
    {
      name: "Hatchback",
      models: "Swift, i10, Wagon R",
      passengers: "4",
      luggage: "2",
      features: ["AC", "GPS", "Compact", "Fuel Efficient"],
      ideal: "Short trips, Budget travel",
      image: hatchbackImg
    },
    {
      name: "Tempo Traveller",
      models: "Force Traveller, Tempo Traveller",
      passengers: "12-17",
      luggage: "10+",
      features: ["AC", "Push Back Seats", "GPS", "Spacious"],
      ideal: "Group tours, Events",
      image: sedanImg
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/cabs-1.avif" 
            alt="Fleet background"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&h=1080&fit=crop&q=80';
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
                <Car className="w-4 h-4" />
                Our Fleet
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white drop-shadow-lg">
              Premium Vehicle Fleet
            </h1>
            <p className="text-sm md:text-base text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Choose from our wide range of well-maintained vehicles designed for your comfort and safety. 
              From compact hatchbacks to spacious SUVs, we have the perfect ride for every journey.
            </p>
          </div>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div 
            ref={vehiclesAnimation.ref}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto transition-all duration-1000 ${
              vehiclesAnimation.isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            }`}
          >
            {vehicles.map((vehicle, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden bg-white/90 backdrop-blur-sm border-2 border-transparent hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-3"
                style={{
                  transitionDelay: vehiclesAnimation.isVisible ? `${index * 100}ms` : "0ms"
                }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                
                {/* Vehicle Image */}
                <div className="relative h-56 md:h-64 overflow-hidden bg-muted">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                </div>
                
                <div className="relative z-10 p-6">
                  {/* Vehicle Name and Models */}
                  <div className="mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                      {vehicle.name}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground">{vehicle.models}</p>
                  </div>

                  {/* Capacity Info */}
                  <div className="grid grid-cols-2 gap-4 mb-5 py-4 border-y border-primary/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary/10 to-yellow-500/10 rounded-lg flex items-center justify-center text-primary">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">{vehicle.passengers}</div>
                        <div className="text-xs text-muted-foreground">Passengers</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary/10 to-yellow-500/10 rounded-lg flex items-center justify-center text-primary">
                        <Luggage className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">{vehicle.luggage}</div>
                        <div className="text-xs text-muted-foreground">Luggage</div>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-5">
                    <h4 className="font-semibold mb-3 text-sm text-foreground flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      Features:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {vehicle.features.map((feature, i) => (
                        <span 
                          key={i} 
                          className="bg-gradient-to-r from-primary/10 to-yellow-500/10 text-primary px-3 py-1.5 rounded-full text-xs font-semibold border border-primary/20 group-hover:border-primary/40 transition-colors duration-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Ideal For */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-sm text-foreground">Ideal For:</h4>
                    <p className="text-sm text-muted-foreground">{vehicle.ideal}</p>
                  </div>

                  {/* Book Button */}
                  <Link to="/book">
                    <Button className="w-full bg-gradient-to-r from-primary to-yellow-500 text-primary-foreground hover:from-primary/90 hover:to-yellow-500/90 font-semibold shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group/btn">
                      Book {vehicle.name}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Vehicles Include Section */}
      <section 
        ref={featuresAnimation.ref}
        className={`py-12 md:py-16 bg-gradient-to-b from-muted/30 via-background to-muted/30 relative overflow-hidden transition-all duration-1000 ${
          featuresAnimation.isVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <Card className="p-8 md:p-12 bg-white/90 backdrop-blur-md border-2 border-primary/10 shadow-xl">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-yellow-500/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4 shadow-lg">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  All Vehicles Include
                </h3>
                <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                  Every vehicle in our fleet comes with standard safety and comfort features to ensure your peace of mind
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: <Car className="w-6 h-6" />, text: "GPS Tracking" },
                  { icon: <Shield className="w-6 h-6" />, text: "Regular Sanitization" },
                  { icon: <Users className="w-6 h-6" />, text: "Verified Drivers" },
                  { icon: <Star className="w-6 h-6" />, text: "24/7 Support" }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex flex-col items-center text-center p-4 rounded-xl bg-gradient-to-br from-primary/5 to-yellow-500/5 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-yellow-500/10 rounded-xl flex items-center justify-center text-primary mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                      {item.icon}
                    </div>
                    <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors duration-300">
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fleet;
