import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Phone, Clock, MapPin, IndianRupee, CheckCircle2, Star, Users, Sparkles, ArrowRight, Car, Zap, Shield } from "lucide-react";
import localTaxiImg from "@/assets/local-taxi.jpg";

const LocalTaxi = () => {
  const packagesAnimation = useScrollAnimation({ threshold: 0.1 });
  const featuresAnimation = useScrollAnimation({ threshold: 0.1 });
  const benefitsAnimation = useScrollAnimation({ threshold: 0.1 });

  const packages = [
    {
      title: "4 Hours / 40 KM",
      features: ["Perfect for shopping", "Local errands", "City meetings", "Hospital visits"]
    },
    {
      title: "8 Hours / 80 KM",
      features: ["Full day city tour", "Multiple stops", "Business meetings", "Family outings"]
    },
    {
      title: "12 Hours / 120 KM",
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
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/cabs-2.avif" 
            alt="Local taxi background"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (!target.src.includes('unsplash')) {
                target.src = 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1920&h=1080&fit=crop&q=80';
              } else {
                target.src = localTaxiImg;
              }
            }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Local Taxi Service in Bangalore</h1>
            <p className="text-xl mb-8 text-white/90 drop-shadow-md">
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

      {/* Overview Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-3">
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                  City Taxi Service
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Local Taxi Service in Bangalore</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore Bangalore at your own pace with our flexible hourly rental packages. 
                No per-kilometer charges, no hidden fees - just fixed packages for unlimited city travel within the package limits.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: <Clock className="w-6 h-6" />, title: "Flexible Packages", desc: "Choose from 4hrs, 8hrs, or 12hrs packages" },
                { icon: <MapPin className="w-6 h-6" />, title: "City-Wide Coverage", desc: "Travel anywhere within Bangalore city" },
                { icon: <Zap className="w-6 h-6" />, title: "Instant Booking", desc: "Book and start your journey immediately" },
              ].map((feature, index) => (
                <Card key={index} className="p-6 text-center bg-white/90 backdrop-blur-sm border-2 border-primary/10">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-yellow-500/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Package Cards */}
          <div 
            ref={packagesAnimation.ref}
            className={`grid md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 ${
              packagesAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className="group relative p-6 bg-white/90 backdrop-blur-sm border-2 border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden"
                style={{
                  transitionDelay: packagesAnimation.isVisible ? `${index * 100}ms` : "0ms"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
                      <Clock className="w-4 h-4" />
                      <span className="font-semibold">{pkg.title}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Call for pricing details</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/book">
                    <Button className="w-full mt-4 group-hover:bg-primary/90 transition-colors">
                      Book Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {/* Features Section */}
          <section 
            ref={featuresAnimation.ref}
            className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 ${
              featuresAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Local Taxi Service?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Car className="w-6 h-6" />, title: "Well-Maintained Fleet", desc: "Clean and comfortable vehicles" },
                { icon: <Shield className="w-6 h-6" />, title: "Verified Drivers", desc: "Background checked professionals" },
                { icon: <Clock className="w-6 h-6" />, title: "Punctual Service", desc: "On-time pickups guaranteed" },
                { icon: <Zap className="w-6 h-6" />, title: "Quick Booking", desc: "Instant confirmation" },
                { icon: <MapPin className="w-6 h-6" />, title: "City Experts", desc: "Knowledgeable local drivers" },
                { icon: <Shield className="w-6 h-6" />, title: "Transparent Service", desc: "No hidden charges" },
              ].map((feature, index) => (
                <Card key={index} className="p-6 text-center bg-white/90 backdrop-blur-sm border-2 border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-yellow-500/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Popular Places */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Popular Places to Visit in Bangalore</h2>
            <Card className="p-8 bg-white/90 backdrop-blur-sm border-2 border-primary/10">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {popularPlaces.map((place, index) => (
                  <div key={index} className="flex items-start gap-2 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{place}</span>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* Benefits Section */}
          <section 
            ref={benefitsAnimation.ref}
            className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 ${
              benefitsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Key Benefits</h2>
            <Card className="p-8 bg-white/90 backdrop-blur-sm border-2 border-primary/10">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Fixed packages - no per km charges",
                  "Multiple stops allowed within package",
                  "Professional and courteous drivers",
                  "AC vehicles with GPS navigation",
                  "Flexible payment options",
                  "24/7 customer support",
                  "Easy cancellation policy",
                  "Corporate billing available"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* Testimonials */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Customer Reviews</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: "Anita Reddy", rating: 5, text: "Perfect for shopping trips! The 4-hour package was ideal and the driver was very helpful." },
                { name: "Mohammed Ali", rating: 5, text: "Used the 8-hour package for business meetings. Excellent service and punctual driver." },
              ].map((testimonial, index) => (
                <Card key={index} className="p-6 bg-white/90 backdrop-blur-sm border-2 border-primary/10">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-semibold">{testimonial.name}</span>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "What is included in the package?", a: "The package includes AC vehicle, driver, fuel, and unlimited kilometers within the time limit. Toll and parking charges are extra." },
                { q: "Can I make multiple stops?", a: "Yes, you can make multiple stops within the package duration and kilometer limit." },
                { q: "What if I exceed the package limit?", a: "Additional charges apply for extra hours or kilometers beyond the package limit. Rates are transparent and shared upfront." },
                { q: "Is driver included?", a: "Yes, a professional driver is included with every booking at no extra cost." },
                { q: "Can I cancel my booking?", a: "Yes, you can cancel with full refund if cancelled 2 hours before the scheduled time." },
              ].map((faq, index) => (
                <Card key={index} className="p-6 bg-white/90 backdrop-blur-sm border-2 border-primary/10">
                  <h3 className="font-bold mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    {faq.q}
                  </h3>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-primary via-primary/95 to-yellow-500 text-white text-center shadow-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4 border border-white/30">
              <Sparkles className="w-4 h-4" />
              Book Your City Taxi
            </div>
            <h3 className="text-2xl font-bold mb-4">Ready to Explore Bangalore?</h3>
            <p className="mb-6 opacity-90">
              Book your local taxi now and enjoy hassle-free city travel
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold w-full sm:w-auto">
                  Book Online
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:+917349091759">
                <Button size="lg" variant="outline" className="border-2 border-white/50 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white w-full sm:w-auto gap-2">
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
