import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tag, Gift, Percent, Users, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Offers = () => {
  const activeOffers = [
    {
      icon: <Gift className="w-8 h-8" />,
      code: "FIRST50",
      title: "First Ride Discount",
      desc: "Get ₹50 OFF on your first cab booking",
      validity: "Valid for new users only",
      terms: "Minimum booking amount: ₹500",
      color: "bg-primary"
    },
    {
      icon: <Percent className="w-8 h-8" />,
      code: "AIRPORT20",
      title: "Airport Transfer Offer",
      desc: "Flat 20% OFF on airport pickups",
      validity: "Valid till 31st Dec 2024",
      terms: "Max discount: ₹200. Use code at checkout",
      color: "bg-secondary"
    },
    {
      icon: <Users className="w-8 h-8" />,
      code: "REFER100",
      title: "Refer & Earn",
      desc: "Refer friends and both get ₹100",
      validity: "Unlimited referrals",
      terms: "Friend must complete first ride",
      color: "bg-accent"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      code: "WEEKEND15",
      title: "Weekend Special",
      desc: "15% OFF on weekend outstation trips",
      validity: "Saturday & Sunday only",
      terms: "Valid for trips above 200 km",
      color: "bg-primary"
    },
  ];

  const upcomingOffers = [
    { title: "Festive Season Bonanza", desc: "Up to 30% OFF during festivals", coming: "Coming Soon" },
    { title: "Corporate Packages", desc: "Special rates for business customers", coming: "Available Next Month" },
    { title: "Long Trip Discounts", desc: "Save more on trips over 500 km", coming: "Launching Soon" },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Special Offers & Discounts
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Save more on your cab bookings with our exclusive offers and promo codes!
          </p>
          <Link to="/book">
            <Button size="lg">Book Now & Save</Button>
          </Link>
        </div>

        {/* Active Offers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Active Offers</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {activeOffers.map((offer, index) => (
              <Card key={index} className="overflow-hidden hover-lift">
                <div className={`${offer.color} text-white p-6 pb-4`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      {offer.icon}
                    </div>
                    <Badge variant="secondary" className="text-xs">ACTIVE</Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                  <p className="text-lg opacity-90">{offer.desc}</p>
                </div>
                <div className="p-6 pt-4">
                  <div className="bg-muted/50 border-2 border-dashed border-primary/30 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Promo Code</div>
                        <div className="text-2xl font-bold font-mono text-primary">{offer.code}</div>
                      </div>
                      <Tag className="w-8 h-8 text-primary/30" />
                    </div>
                  </div>
                  <div className="space-y-2 text-sm mb-4">
                    <p className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>{offer.validity}</span>
                    </p>
                    <p className="flex items-start gap-2 text-muted-foreground">
                      <span className="mt-0.5">•</span>
                      <span>{offer.terms}</span>
                    </p>
                  </div>
                  <Link to="/book">
                    <Button className="w-full">Use This Offer</Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* How to Use */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">How to Use Promo Codes</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                  1
                </div>
                <h3 className="font-bold mb-2">Select Your Ride</h3>
                <p className="text-sm text-muted-foreground">
                  Choose your pickup, drop location, and cab type
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                  2
                </div>
                <h3 className="font-bold mb-2">Apply Promo Code</h3>
                <p className="text-sm text-muted-foreground">
                  Enter the promo code in the payment section
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                  3
                </div>
                <h3 className="font-bold mb-2">Get Instant Discount</h3>
                <p className="text-sm text-muted-foreground">
                  Discount applied automatically to your booking
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Upcoming Offers */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Coming Soon</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingOffers.map((offer, index) => (
              <Card key={index} className="p-6 text-center bg-muted/50">
                <Badge variant="outline" className="mb-3">{offer.coming}</Badge>
                <h3 className="font-bold mb-2">{offer.title}</h3>
                <p className="text-sm text-muted-foreground">{offer.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Terms & Conditions */}
        <Card className="max-w-4xl mx-auto p-6 mb-8">
          <h3 className="font-bold mb-4">Terms & Conditions</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Promo codes are valid only once per user unless specified</li>
            <li>• Cannot be combined with other offers</li>
            <li>• Bangalore Cabs reserves the right to modify or cancel offers anytime</li>
            <li>• Discount will be adjusted in final bill amount</li>
            <li>• Valid only for online bookings through our platform</li>
          </ul>
        </Card>

        {/* CTA */}
        <Card className="max-w-2xl mx-auto p-8 bg-primary text-primary-foreground text-center">
          <h3 className="text-2xl font-bold mb-4">Start Saving on Your Rides Today!</h3>
          <p className="mb-6 opacity-90">
            Book now and use promo codes to get amazing discounts
          </p>
          <Link to="/book">
            <Button size="lg" variant="secondary">Book with Offers</Button>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default Offers;