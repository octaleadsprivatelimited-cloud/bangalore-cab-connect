import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Luggage, Fuel, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Fleet = () => {
  const vehicles = [
    {
      name: "Sedan",
      models: "Swift Dzire, Etios, Honda City",
      passengers: "4",
      luggage: "2",
      rate: "₹12/km",
      features: ["AC", "GPS", "Music System"],
      ideal: "Airport transfers, City rides"
    },
    {
      name: "SUV",
      models: "Innova, Ertiga, XUV500",
      passengers: "6-7",
      luggage: "3-4",
      rate: "₹18/km",
      features: ["AC", "GPS", "Spacious", "Comfortable"],
      ideal: "Family trips, Outstation"
    },
    {
      name: "Luxury Sedan",
      models: "BMW, Mercedes, Audi",
      passengers: "4",
      luggage: "2",
      rate: "₹35/km",
      features: ["Premium AC", "GPS", "Leather Seats", "Premium Sound"],
      ideal: "Corporate, VIP travel"
    },
    {
      name: "Tempo Traveller",
      models: "Force Traveller, Tempo Traveller",
      passengers: "12-17",
      luggage: "10+",
      rate: "₹25/km",
      features: ["AC", "Push Back Seats", "GPS", "Spacious"],
      ideal: "Group tours, Events"
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Fleet</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our wide range of well-maintained vehicles for your comfort
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {vehicles.map((vehicle, index) => (
            <Card key={index} className="p-6 hover-lift">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{vehicle.name}</h3>
                  <p className="text-sm text-muted-foreground">{vehicle.models}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">{vehicle.rate}</div>
                  <div className="text-xs text-muted-foreground">Starting fare</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4 py-4 border-y">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm font-semibold">{vehicle.passengers} Passengers</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Luggage className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm font-semibold">{vehicle.luggage} Luggage</div>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-sm">Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {vehicle.features.map((feature, i) => (
                    <span key={i} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold mb-1 text-sm">Ideal For:</h4>
                <p className="text-sm text-muted-foreground">{vehicle.ideal}</p>
              </div>

              <Link to="/book">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Book {vehicle.name}
                </Button>
              </Link>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="p-8 bg-muted/30 max-w-4xl mx-auto">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">All Vehicles Include</h3>
            <p className="text-muted-foreground mb-4">
              Every vehicle in our fleet comes with standard safety and comfort features
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>✓ GPS Tracking</div>
              <div>✓ Regular Sanitization</div>
              <div>✓ Verified Drivers</div>
              <div>✓ 24/7 Support</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Fleet;
