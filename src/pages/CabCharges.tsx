import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, IndianRupee, Info } from "lucide-react";

const CabCharges = () => {
  const localPackages = [
    { package: "4 Hours / 40 KM", sedan: "₹1,200", suv: "₹1,800" },
    { package: "8 Hours / 80 KM", sedan: "₹2,000", suv: "₹3,000" },
    { package: "12 Hours / 120 KM", sedan: "₹2,800", suv: "₹4,200" },
  ];

  const outstationRates = [
    { type: "One-Way", sedan: "₹12/km", suv: "₹18/km", min: "250 km" },
    { type: "Round Trip", sedan: "₹16/km", suv: "₹22/km", min: "250 km/day" },
  ];

  const airportRates = [
    { route: "Airport ↔ City Center", sedan: "₹850-1000", suv: "₹1200-1400" },
    { route: "Airport ↔ Whitefield", sedan: "₹650-800", suv: "₹950-1100" },
    { route: "Airport ↔ Electronic City", sedan: "₹1100-1300", suv: "₹1500-1700" },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Bangalore Cab Charges
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Transparent pricing with no hidden charges. Know exactly what you pay!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book">
              <Button size="lg">Book Your Cab</Button>
            </Link>
            <a href="tel:+919876543210">
              <Button size="lg" variant="outline" className="gap-2">
                <Phone className="w-5 h-5" />
                Get Custom Quote
              </Button>
            </a>
          </div>
        </div>

        {/* Local Packages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Local Taxi Packages</h2>
          <Card className="max-w-3xl mx-auto overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary text-primary-foreground">
                  <tr>
                    <th className="p-4 text-left">Package</th>
                    <th className="p-4 text-left">Sedan</th>
                    <th className="p-4 text-left">SUV/Innova</th>
                  </tr>
                </thead>
                <tbody>
                  {localPackages.map((pkg, index) => (
                    <tr key={index} className="border-b last:border-0">
                      <td className="p-4 font-medium">{pkg.package}</td>
                      <td className="p-4 text-primary font-bold">{pkg.sedan}</td>
                      <td className="p-4 text-primary font-bold">{pkg.suv}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          <div className="max-w-3xl mx-auto mt-4">
            <Card className="p-4 bg-muted/50">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <p className="mb-1">Extra hours: ₹150/hr (Sedan), ₹200/hr (SUV)</p>
                  <p>Extra kilometers: ₹12/km (Sedan), ₹18/km (SUV)</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Outstation Rates */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Outstation Cab Rates</h2>
          <Card className="max-w-3xl mx-auto overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary text-primary-foreground">
                  <tr>
                    <th className="p-4 text-left">Trip Type</th>
                    <th className="p-4 text-left">Sedan</th>
                    <th className="p-4 text-left">SUV/Innova</th>
                    <th className="p-4 text-left">Minimum</th>
                  </tr>
                </thead>
                <tbody>
                  {outstationRates.map((rate, index) => (
                    <tr key={index} className="border-b last:border-0">
                      <td className="p-4 font-medium">{rate.type}</td>
                      <td className="p-4 text-primary font-bold">{rate.sedan}</td>
                      <td className="p-4 text-primary font-bold">{rate.suv}</td>
                      <td className="p-4 text-muted-foreground">{rate.min}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          <div className="max-w-3xl mx-auto mt-4">
            <Card className="p-4 bg-muted/50">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <p>Driver allowance: ₹400/day (Sedan), ₹500/day (SUV). Toll, parking, and permit charges extra.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Airport Fares */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Airport Taxi Fares</h2>
          <Card className="max-w-3xl mx-auto overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary text-primary-foreground">
                  <tr>
                    <th className="p-4 text-left">Route</th>
                    <th className="p-4 text-left">Sedan</th>
                    <th className="p-4 text-left">SUV/Innova</th>
                  </tr>
                </thead>
                <tbody>
                  {airportRates.map((rate, index) => (
                    <tr key={index} className="border-b last:border-0">
                      <td className="p-4 font-medium">{rate.route}</td>
                      <td className="p-4 text-primary font-bold">{rate.sedan}</td>
                      <td className="p-4 text-primary font-bold">{rate.suv}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          <p className="text-sm text-muted-foreground text-center mt-4 max-w-3xl mx-auto">
            *Airport pickup includes free 30-minute waiting time. Prices vary based on traffic conditions.
          </p>
        </div>

        {/* What's Included */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">What's Included in Our Pricing</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-bold mb-4 text-lg flex items-center gap-2">
                <IndianRupee className="w-5 h-5 text-primary" />
                Included in Price
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Fuel charges</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Driver allowance (outstation)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>GST (on request)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Base fare and distance</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-muted/50">
              <h3 className="font-bold mb-4 text-lg flex items-center gap-2">
                <IndianRupee className="w-5 h-5 text-muted-foreground" />
                Extra Charges
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">•</span>
                  <span>Toll charges (as per actual)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">•</span>
                  <span>Parking fees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">•</span>
                  <span>State permit (inter-state travel)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">•</span>
                  <span>Hill station charges (if applicable)</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <Card className="max-w-2xl mx-auto p-8 bg-primary text-primary-foreground text-center">
          <h3 className="text-2xl font-bold mb-4">Get Exact Quote for Your Journey</h3>
          <p className="mb-6 opacity-90">
            Call us or fill the booking form to get accurate pricing for your specific route
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book">
              <Button size="lg" variant="secondary">Get Quote</Button>
            </Link>
            <a href="tel:+919876543210">
              <Button size="lg" variant="secondary" className="gap-2">
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

export default CabCharges;