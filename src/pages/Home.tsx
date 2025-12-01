import { Link } from "react-router-dom";
import BookingForm from "@/components/BookingForm";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { 
  Car, Shield, Clock, MapPin, Star, Users, 
  Phone, CheckCircle2, ArrowRight, Plane, 
  Building2, Route, Camera, Info, Award, Heart, Sparkles
} from "lucide-react";

const Home = () => {
  const aboutAnimation = useScrollAnimation({ threshold: 0.2 });
  const featuresAnimation = useScrollAnimation({ threshold: 0.1 });
  const servicesAnimation = useScrollAnimation({ threshold: 0.1 });
  const routesAnimation = useScrollAnimation({ threshold: 0.1 });
  const ctaAnimation = useScrollAnimation({ threshold: 0.2 });
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
      icon: <Plane className="w-6 h-6" />
    },
    {
      title: "Local Taxi",
      description: "Within city travel at affordable rates",
      link: "/local-taxi",
      icon: <Building2 className="w-6 h-6" />
    },
    {
      title: "Outstation Cabs",
      description: "Comfortable rides to nearby cities",
      link: "/outstation",
      icon: <Route className="w-6 h-6" />
    },
    {
      title: "City Tours",
      description: "Explore Bangalore with our packages",
      link: "/city-tour",
      icon: <Camera className="w-6 h-6" />
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
      <section className="relative text-white py-20 md:py-32 overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 via-secondary/70 to-secondary/80 z-[1]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 text-center lg:text-left">
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
                  <Button size="lg" className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-secondary font-semibold gap-2 text-lg px-8">
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

            <div className="lg:col-span-1 max-w-sm mx-auto lg:mx-0">
              <BookingForm inline />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section 
        ref={aboutAnimation.ref}
        className={`py-12 md:py-16 relative overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background transition-all duration-1000 ${
          aboutAnimation.isVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-10"
        }`}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left side - Content */}
              <div 
                className={`space-y-6 transition-all duration-1000 ${
                  aboutAnimation.isVisible 
                    ? "opacity-100 translate-x-0" 
                    : "opacity-0 -translate-x-10"
                }`}
                style={{
                  transitionDelay: aboutAnimation.isVisible ? "200ms" : "0ms"
                }}
              >
                <div className="inline-block">
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 w-fit">
                    <Info className="w-4 h-4" />
                    About Us
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                  Your Trusted Travel Partner in Bangalore
                </h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  With years of experience in the transportation industry, we've been serving thousands of satisfied customers across Bangalore and beyond. Our commitment to safety, reliability, and customer satisfaction makes us the preferred choice for all your travel needs.
                </p>
                
                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-yellow-500/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">10+ Years Experience</h4>
                      <p className="text-xs text-muted-foreground">Trusted by thousands</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-yellow-500/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">10,000+ Happy Customers</h4>
                      <p className="text-xs text-muted-foreground">Rated 4.8+ stars</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-yellow-500/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">100% Safe & Secure</h4>
                      <p className="text-xs text-muted-foreground">GPS tracked rides</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-yellow-500/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">24/7 Customer Support</h4>
                      <p className="text-xs text-muted-foreground">Always here for you</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <Link to="/about">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-primary to-yellow-500 text-primary-foreground hover:from-primary/90 hover:to-yellow-500/90 font-semibold px-8 py-6 text-base shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1 group"
                    >
                      Learn More About Us
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right side - Visual Card */}
              <div 
                className={`relative transition-all duration-1000 ${
                  aboutAnimation.isVisible 
                    ? "opacity-100 translate-x-0" 
                    : "opacity-0 translate-x-10"
                }`}
                style={{
                  transitionDelay: aboutAnimation.isVisible ? "400ms" : "0ms"
                }}
              >
                <div className="relative group">
                  {/* Main Card */}
                  <Card className="p-8 bg-white/90 backdrop-blur-md border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
                    <div className="space-y-6">
                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 rounded-xl bg-gradient-to-br from-primary/10 to-yellow-500/10">
                          <div className="text-3xl font-bold text-primary mb-1">10+</div>
                          <div className="text-xs text-muted-foreground">Years Experience</div>
                        </div>
                        <div className="text-center p-4 rounded-xl bg-gradient-to-br from-primary/10 to-yellow-500/10">
                          <div className="text-3xl font-bold text-primary mb-1">10K+</div>
                          <div className="text-xs text-muted-foreground">Happy Customers</div>
                        </div>
                        <div className="text-center p-4 rounded-xl bg-gradient-to-br from-primary/10 to-yellow-500/10">
                          <div className="text-3xl font-bold text-primary mb-1">4.8+</div>
                          <div className="text-xs text-muted-foreground">Rating</div>
                        </div>
                        <div className="text-center p-4 rounded-xl bg-gradient-to-br from-primary/10 to-yellow-500/10">
                          <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                          <div className="text-xs text-muted-foreground">Available</div>
                        </div>
                      </div>

                      {/* Testimonial Quote */}
                      <div className="pt-4 border-t border-primary/10">
                        <div className="flex items-start gap-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-yellow-500/20 flex items-center justify-center text-primary flex-shrink-0">
                            <Star className="w-6 h-6 fill-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground italic mb-2">
                              "Best cab service in Bangalore! Professional drivers, clean vehicles, and always on time."
                            </p>
                            <p className="text-xs font-semibold text-foreground">- Priya S., Regular Customer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-yellow-500/20 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-yellow-500/20 to-primary/20 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section 
        ref={featuresAnimation.ref}
        className={`py-10 md:py-14 relative overflow-hidden transition-all duration-1000 ${
          featuresAnimation.isVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-10"
        }`}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/cabs-2.avif" 
            alt="Why Choose Us background"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (!target.src.includes('cabs-1.avif')) {
                target.src = '/cabs-1.avif';
              } else if (!target.src.includes('unsplash')) {
                target.src = 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1920&h=1080&fit=crop&q=80';
              }
            }}
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-white drop-shadow-lg">
              Why Choose Us?
            </h2>
            <p className="text-white/90 text-sm md:text-base max-w-2xl mx-auto drop-shadow-md">
              Experience the best cab service in Bangalore with premium features
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={`group relative p-8 bg-white/10 backdrop-blur-md border-2 border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-2 overflow-hidden ${
                  featuresAnimation.isVisible 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: featuresAnimation.isVisible ? `${index * 100}ms` : "0ms",
                  transitionDuration: "600ms"
                }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Icon container with gradient background */}
                  <div className="w-16 h-16 mb-6 mx-auto rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 group-hover:bg-white/30 transition-all duration-300 shadow-lg">
                    <div className="w-8 h-8 text-white">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-center text-white drop-shadow-md group-hover:text-yellow-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-white/90 text-center leading-relaxed text-xs md:text-sm drop-shadow-sm">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section 
        ref={servicesAnimation.ref}
        className={`py-12 md:py-16 relative overflow-hidden transition-all duration-1000 ${
          servicesAnimation.isVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-10"
        }`}
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM60 91c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM35 41c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 60c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23fcd34d' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Background overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95 z-0"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-[2]">
          <div className="text-center mb-8 md:mb-10">
            <div className="inline-block mb-2">
              <span className="bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-semibold">
                Our Services
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
              Our Services in Bangalore
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
              From airport transfers to outstation trips, we've got all your travel needs covered with premium comfort and reliability
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="group">
                <Card 
                  className={`relative h-full p-6 bg-white/90 backdrop-blur-md border-2 border-transparent hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-3 overflow-hidden cursor-pointer ${
                    servicesAnimation.isVisible 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{
                    transitionDelay: servicesAnimation.isVisible ? `${index * 100}ms` : "0ms",
                    transitionDuration: "600ms"
                  }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-yellow-500/10 to-transparent rounded-tr-full"></div>
                  </div>

                  <div className="relative z-10">
                    {/* Icon with modern styling */}
                    <div className="mb-4 relative">
                      <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-yellow-500/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-primary/20">
                        {service.icon}
                      </div>
                      {/* Decorative ring */}
                      <div className="absolute inset-0 rounded-xl border-2 border-primary/0 group-hover:border-primary/20 transition-all duration-500 scale-110"></div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-center text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-muted-foreground text-center mb-4 leading-relaxed text-sm group-hover:text-foreground/80 transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* CTA Button */}
                    <div className="flex items-center justify-center">
                      <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-xs group-hover:gap-2 transition-all duration-300">
                        Learn More
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </div>
                  </div>

                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section 
        ref={routesAnimation.ref}
        className={`py-12 md:py-16 relative overflow-hidden transition-all duration-1000 ${
          routesAnimation.isVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-10"
        }`}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/cabs-1.avif" 
            alt="Popular Routes background"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (!target.src.includes('unsplash')) {
                target.src = 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&h=1080&fit=crop&q=80';
              } else {
                target.src = '/cabs-2.avif';
              }
            }}
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-20 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8 md:mb-10">
            <div className="inline-block mb-2">
              <span className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                Popular Routes
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white drop-shadow-lg">
              Popular Outstation Routes
            </h2>
            <p className="text-white/90 text-sm md:text-base max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Comfortable rides to your favorite destinations from Bangalore with premium comfort and safety
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
            {routes.map((route, index) => (
              <Link key={index} to={route.link} className="group">
                <Card 
                  className={`relative h-full p-6 bg-white/10 backdrop-blur-md border-2 border-white/30 hover:border-white/50 transition-all duration-500 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-3 overflow-hidden cursor-pointer ${
                    routesAnimation.isVisible 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{
                    transitionDelay: routesAnimation.isVisible ? `${index * 100}ms` : "0ms",
                    transitionDuration: "600ms"
                  }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full"></div>
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-yellow-500/20 to-transparent rounded-tr-full"></div>
                  </div>

                  <div className="relative z-10">
                    {/* Header with icon and duration badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:bg-white/30">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold bg-white/20 backdrop-blur-sm text-white border border-white/30 px-3 py-1.5 rounded-full group-hover:bg-white/30 group-hover:border-white/50 transition-all duration-300">
                        {route.duration}
                      </span>
                    </div>

                    {/* Route information */}
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-white drop-shadow-md group-hover:text-yellow-300 transition-colors duration-300">
                          {route.from}
                        </h3>
                      </div>
                      
                      {/* Arrow connector */}
                      <div className="flex items-center gap-2 py-2">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                        <ArrowRight className="w-4 h-4 text-white group-hover:text-yellow-300 group-hover:translate-x-1 transition-all duration-300" />
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-yellow-300 drop-shadow-md group-hover:scale-105 transition-transform duration-300">
                          {route.to}
                        </h3>
                      </div>
                    </div>

                    {/* Book Now - Always visible */}
                    <div className="mt-5 flex items-center justify-center">
                      <span className="text-xs text-white font-semibold flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 group-hover:bg-white/30 group-hover:border-white/50 group-hover:scale-105 transition-all duration-300 shadow-lg">
                        Book Now
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </div>
                  </div>

                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </Card>
              </Link>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link to="/outstation">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-yellow-500 text-primary-foreground hover:from-primary/90 hover:to-yellow-500/90 font-semibold px-8 py-6 text-base shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                View All Routes
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaAnimation.ref}
        className={`py-10 md:py-12 relative overflow-hidden transition-all duration-1000 ${
          ctaAnimation.isVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-10"
        }`}
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-yellow-500"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-semibold mb-4 border border-white/30 shadow-lg">
              <Sparkles className="w-3.5 h-3.5" />
              Book Your Ride Today
            </div>

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-white drop-shadow-lg">
              Ready to Book Your Ride?
            </h2>
            
            {/* Description */}
            <p className="text-sm md:text-base mb-6 text-white/90 drop-shadow-md max-w-2xl mx-auto">
              Get instant confirmation and guaranteed service. Experience premium service with RM Cabs.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link to="/book">
                <Button 
                  size="lg" 
                  className="group bg-white text-primary hover:bg-white/90 font-semibold px-6 py-5 text-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 min-w-[180px]"
                >
                  Book Online Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <a href="tel:+917349091759">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="group border-2 border-white/50 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white font-semibold px-6 py-5 text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 min-w-[180px]"
                >
                  <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Call +91 73490 91759
                </Button>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-white/80 text-xs">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-yellow-300" />
                <span>Instant Confirmation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-yellow-300" />
                <span>Best Service</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-yellow-300" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
