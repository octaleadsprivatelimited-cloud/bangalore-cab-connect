import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Phone, MapPin, IndianRupee, Calendar, CheckCircle2, Star, Users, Sparkles, ArrowRight, Car, Shield, Clock, Zap, Luggage } from "lucide-react";
import outstationImg from "@/assets/outstation-highway.jpg";

const Outstation = () => {
  const destinationsAnimation = useScrollAnimation({ threshold: 0.1 });
  const featuresAnimation = useScrollAnimation({ threshold: 0.1 });
  const benefitsAnimation = useScrollAnimation({ threshold: 0.1 });

  const destinations = [
    { name: "Mysore", distance: "150 km", time: "3 hours", link: "/bangalore-to-mysore" },
    { name: "Coorg", distance: "270 km", time: "5.5 hours", link: "/bangalore-to-coorg" },
    { name: "Ooty", distance: "280 km", time: "6 hours", link: "/bangalore-to-ooty" },
    { name: "Tirupati", distance: "250 km", time: "4 hours", link: "/bangalore-to-tirupati" },
    { name: "Mangalore", distance: "350 km", time: "7 hours", link: "/bangalore-to-mangalore" },
    { name: "Chennai", distance: "350 km", time: "6 hours", link: "/services" },
  ];

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&h=1080&fit=crop&q=80" 
            alt="Outstation taxi background"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (!target.src.includes('cabs')) {
                target.src = '/cabs-1.avif';
              } else {
                target.src = outstationImg;
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Outstation Cabs from Bangalore</h1>
            <p className="text-xl mb-8 text-white/90 drop-shadow-md">
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

      {/* Overview Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-3">
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                  Outstation Travel
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Outstation Cabs from Bangalore</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Travel to nearby cities and tourist destinations with comfort and safety. 
                Choose from one-way, round-trip, or multi-city packages. Professional drivers and well-maintained vehicles for your long-distance journeys.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: <MapPin className="w-6 h-6" />, title: "Multiple Destinations", desc: "Travel to Mysore, Coorg, Ooty, and more" },
                { icon: <Calendar className="w-6 h-6" />, title: "Flexible Packages", desc: "One-way, round-trip options" },
                { icon: <Car className="w-6 h-6" />, title: "Comfortable Rides", desc: "AC vehicles with spacious interiors" },
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
          {/* Popular Destinations */}
          <div 
            ref={destinationsAnimation.ref}
            className={`mb-16 transition-all duration-1000 ${
              destinationsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Popular Destinations from Bangalore</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations.map((dest, index) => (
                <Card 
                  key={index} 
                  className="group relative p-6 bg-white/90 backdrop-blur-sm border-2 border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden"
                  style={{
                    transitionDelay: destinationsAnimation.isVisible ? `${index * 100}ms` : "0ms"
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-yellow-500/10 rounded-2xl flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-1">{dest.name}</h3>
                        <p className="text-sm text-muted-foreground">{dest.distance} • {dest.time}</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground">Call for pricing details</p>
                    </div>
                    <Link to={dest.link}>
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <section 
            ref={featuresAnimation.ref}
            className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 ${
              featuresAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Why Book Outstation with Us?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Calendar className="w-6 h-6" />, title: "Flexible Packages", desc: "One-way, round-trip, or multi-city options" },
                { icon: <Users className="w-6 h-6" />, title: "Experienced Drivers", desc: "Well-versed with outstation routes" },
                { icon: <Car className="w-6 h-6" />, title: "Clean Vehicles", desc: "Sanitized and well-maintained fleet" },
                { icon: <Shield className="w-6 h-6" />, title: "No Hidden Costs", desc: "Transparent billing, no surprises" },
                { icon: <Clock className="w-6 h-6" />, title: "24/7 Support", desc: "Customer support throughout your journey" },
                { icon: <Zap className="w-6 h-6" />, title: "Easy Cancellation", desc: "Hassle-free cancellation policy" },
              ].map((feature, index) => (
                <Card 
                  key={index} 
                  className="group relative p-6 text-center bg-white/90 backdrop-blur-sm border-2 border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
                  style={{
                    transitionDelay: featuresAnimation.isVisible ? `${index * 50}ms` : "0ms"
                  }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-yellow-500/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </Card>
              ))}
            </div>
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
                  "Driver allowance included in package",
                  "Minimum 250 km per day policy",
                  "Toll and parking charges extra",
                  "State taxes as applicable",
                  "Night charges for late-night travel",
                  "Multi-day trip discounts available",
                  "GPS navigation for best routes",
                  "Luggage space for family trips"
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
                { name: "Ravi Kumar", rating: 5, text: "Excellent service to Mysore! Driver was professional and the vehicle was very comfortable. Highly recommend!" },
                { name: "Sunita Patel", rating: 5, text: "Booked round-trip to Coorg. Smooth journey both ways. Great value for money and excellent customer service." },
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
                { q: "What is the minimum distance for outstation trips?", a: "Minimum 250 km per day is required for outstation bookings. This ensures fair service for both one-way and round-trip journeys." },
                { q: "Is driver allowance included?", a: "Yes, driver allowance is included in the package. It covers driver's food and accommodation for multi-day trips." },
                { q: "What are the extra charges?", a: "Toll charges, parking fees, and state taxes are extra. Night charges apply for travel between 10 PM to 6 AM." },
                { q: "Can I book a round-trip?", a: "Yes, we offer both one-way and round-trip packages. Round-trip packages often come with discounts." },
                { q: "What if I need to cancel?", a: "Cancellation is free if done 24 hours before the trip. Partial refund for cancellations within 24 hours." },
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
              Plan Your Journey
            </div>
            <h3 className="text-2xl font-bold mb-4">Plan Your Outstation Trip Today!</h3>
            <p className="mb-6 opacity-90">
              Book your outstation cab now for a comfortable and safe journey
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
