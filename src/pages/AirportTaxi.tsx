import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Phone, Clock, Shield, MapPin, CheckCircle, Plane, Star, Users, Zap, ArrowRight, Sparkles, Luggage, Car } from "lucide-react";
import airportTaxiImg from "@/assets/airport-taxi.jpg";

const AirportTaxi = () => {
  const heroAnimation = useScrollAnimation({ threshold: 0.1 });
  const featuresAnimation = useScrollAnimation({ threshold: 0.1 });
  const processAnimation = useScrollAnimation({ threshold: 0.1 });
  const benefitsAnimation = useScrollAnimation({ threshold: 0.1 });

  const features = [
    { icon: <Clock className="w-6 h-6" />, title: "24/7 Availability", desc: "Round-the-clock airport pickup and drop" },
    { icon: <Shield className="w-6 h-6" />, title: "Flight Tracking", desc: "We track your flight for delays" },
    { icon: <MapPin className="w-6 h-6" />, title: "Meet & Greet", desc: "Driver waits with name board" },
    { icon: <Plane className="w-6 h-6" />, title: "All Terminals", desc: "Pickup from all airport terminals" },
    { icon: <Luggage className="w-6 h-6" />, title: "Luggage Assistance", desc: "Help with your baggage handling" },
    { icon: <Zap className="w-6 h-6" />, title: "Instant Booking", desc: "Quick confirmation within minutes" },
  ];


  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/cabs-1.avif" 
            alt="Airport taxi background"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (!target.src.includes('unsplash')) {
                target.src = 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&h=1080&fit=crop&q=80';
              } else {
                target.src = airportTaxiImg;
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Airport Taxi Service in Bangalore</h1>
            <p className="text-xl mb-8 text-white/90 drop-shadow-md">
              Reliable cab service to and from Kempegowda International Airport. Book now for hassle-free airport transfers!
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
                  Airport Transfer Service
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Reliable Airport Taxi Service in Bangalore</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience seamless airport transfers to and from Kempegowda International Airport (BLR). 
                Our professional drivers ensure timely pickups and comfortable rides, making your travel stress-free.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6 bg-white/90 backdrop-blur-sm border-2 border-primary/10">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Plane className="w-6 h-6 text-primary" />
                  Airport Pickup
                </h3>
                <p className="text-muted-foreground mb-4">
                  Our driver will track your flight and arrive at the airport on time. Look for our driver 
                  holding a name board at the arrival gate. Free waiting time included for flight delays.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Flight tracking included
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Meet & greet service
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Free 60 minutes waiting
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-white/90 backdrop-blur-sm border-2 border-primary/10">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-primary" />
                  Airport Drop
                </h3>
                <p className="text-muted-foreground mb-4">
                  Book your airport drop in advance for a stress-free departure. Our punctual service ensures 
                  you reach the airport on time for your flight, with real-time traffic updates.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Punctual pickups
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Traffic-aware routing
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Early morning service
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        ref={featuresAnimation.ref}
        className={`py-12 md:py-16 bg-background transition-all duration-1000 ${
          featuresAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Airport Taxi Service?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide premium airport transfer services with unmatched reliability and comfort
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group relative p-6 bg-white/90 backdrop-blur-sm border-2 border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                style={{
                  transitionDelay: featuresAnimation.isVisible ? `${index * 50}ms` : "0ms"
                }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-yellow-500/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-bold mb-2 text-center">{feature.title}</h3>
                <p className="text-sm text-muted-foreground text-center">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section 
        ref={processAnimation.ref}
        className={`py-12 md:py-16 bg-gradient-to-b from-muted/30 via-background to-muted/30 transition-all duration-1000 ${
          processAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Booking Process</h2>
              <p className="text-muted-foreground">
                Book your airport taxi in just a few easy steps
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Book Online", desc: "Fill the booking form or call us" },
                { step: "2", title: "Get Confirmation", desc: "Instant SMS and email confirmation" },
                { step: "3", title: "Driver Arrives", desc: "Driver tracks flight and arrives on time" },
                { step: "4", title: "Enjoy Ride", desc: "Comfortable journey to your destination" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                  {index < 3 && (
                    <ArrowRight className="w-6 h-6 text-primary mx-auto mt-4 hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4">

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
                  "Professional chauffeurs with airport experience",
                  "Clean and well-maintained vehicles",
                  "Free waiting time for flight delays",
                  "GPS-enabled cabs for fastest routes",
                  "Cashless payment options",
                  "Confirmed bookings with instant confirmation",
                  "Luggage assistance available",
                  "24/7 customer support"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* Testimonials */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: "Rajesh Kumar", rating: 5, text: "Excellent service! Driver was on time and very professional. Highly recommend for airport transfers." },
                { name: "Priya Sharma", rating: 5, text: "Flight was delayed but the driver waited patiently. Great experience with RM Cabs!" },
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
                { q: "How do I book an airport taxi?", a: "You can book online through our website, call us at +91 73490 91759, or use our mobile app. Booking confirmation is instant." },
                { q: "Do you track flights?", a: "Yes, we track your flight in real-time and adjust pickup time accordingly. Free waiting time of 60 minutes is included." },
                { q: "What if my flight is delayed?", a: "No worries! We monitor flight status and our driver will wait for you. Additional waiting time charges apply after 60 minutes." },
                { q: "Are your drivers professional?", a: "All our drivers are background verified, professionally trained, and have extensive experience with airport transfers." },
                { q: "What payment methods do you accept?", a: "We accept cash, UPI, credit/debit cards, and digital wallets. Corporate clients can avail monthly billing options." },
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

          {/* CTA Card */}
          <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-primary via-primary/95 to-yellow-500 text-white text-center shadow-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4 border border-white/30">
              <Sparkles className="w-4 h-4" />
              Book Your Airport Transfer
            </div>
            <h3 className="text-2xl font-bold mb-4">Need Airport Pickup Now?</h3>
            <p className="mb-6 opacity-90">
              Book instantly or call us for immediate airport taxi service
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

export default AirportTaxi;
