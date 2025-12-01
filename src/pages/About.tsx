import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { 
  Users, Award, Clock, Shield, Star, CheckCircle2, 
  Car, MapPin, Phone, Heart, Target, Zap, Eye, Sparkles, ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import heroTaxi from "@/assets/hero-taxi.jpg";

const About = () => {
  const statsAnimation = useScrollAnimation({ threshold: 0.2 });
  const missionAnimation = useScrollAnimation({ threshold: 0.2 });
  const featuresAnimation = useScrollAnimation({ threshold: 0.1 });
  const commitmentAnimation = useScrollAnimation({ threshold: 0.2 });

  const stats = [
    { icon: <Users className="w-5 h-5 md:w-6 md:h-6" />, number: "10,000+", label: "Happy Customers", color: "from-blue-500/10 to-blue-600/10" },
    { icon: <Award className="w-5 h-5 md:w-6 md:h-6" />, number: "10+", label: "Years Experience", color: "from-primary/10 to-yellow-500/10" },
    { icon: <Clock className="w-5 h-5 md:w-6 md:h-6" />, number: "24/7", label: "Available", color: "from-green-500/10 to-green-600/10" },
    { icon: <Shield className="w-5 h-5 md:w-6 md:h-6" />, number: "100%", label: "Safe & Secure", color: "from-red-500/10 to-red-600/10" },
  ];

  const features = [
    { icon: <Users className="w-6 h-6" />, title: "Professional Drivers", description: "Verified and trained drivers" },
    { icon: <Car className="w-6 h-6" />, title: "Well-Maintained Vehicles", description: "Clean and comfortable rides" },
    { icon: <CheckCircle2 className="w-6 h-6" />, title: "Transparent Service", description: "No hidden charges" },
    { icon: <MapPin className="w-6 h-6" />, title: "GPS Tracking", description: "Real-time location tracking" },
    { icon: <Phone className="w-6 h-6" />, title: "24/7 Support", description: "Always here to help" },
    { icon: <Car className="w-6 h-6" />, title: "Wide Range", description: "Multiple vehicle options" },
    { icon: <Zap className="w-6 h-6" />, title: "Easy Booking", description: "Simple online booking" },
    { icon: <Heart className="w-6 h-6" />, title: "Flexible Payment", description: "Multiple payment options" },
  ];

  return (
    <div>
      {/* Hero Section with Background */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${heroTaxi})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-secondary/80 to-secondary/90 z-[1]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-block mb-4">
              <span className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                About Us
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
              About RM Cabs
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
              Your trusted partner for premium cab services in Bangalore
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-3">
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                  Who We Are
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Leading Taxi Service in Bangalore
              </h2>
            </div>
            
            <Card className="p-8 md:p-12 bg-white/90 backdrop-blur-md border-2 border-primary/10 shadow-xl">
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-6">
                RM Cabs is a leading taxi service provider in Bangalore, offering reliable and comfortable transportation 
                solutions. We specialize in airport transfers, local city rides, outstation trips, and corporate travel services.
              </p>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                With over 10 years of experience in the transportation industry, we've built a reputation for excellence, 
                safety, and customer satisfaction. Our commitment to quality service has made us the preferred choice for 
                thousands of customers across Bangalore and beyond.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section 
        ref={missionAnimation.ref}
        className={`py-12 md:py-16 relative overflow-hidden transition-all duration-1000 ${
          missionAnimation.isVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-10"
        }`}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/cabs-1.avif" 
            alt="Vision & Mission background"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (!target.src.includes('cabs-2.avif')) {
                target.src = '/cabs-2.avif';
              } else if (!target.src.includes('unsplash')) {
                target.src = 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1920&h=1080&fit=crop&q=80';
              } else {
                target.src = '/cabs-1.avif';
              }
            }}
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-3">
                <span className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Vision & Mission
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">
                Our Purpose
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* Our Vision */}
              <Card className="group relative p-6 md:p-8 bg-white/10 backdrop-blur-md border-2 border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-2 overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Icon and Badge */}
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 group-hover:bg-white/30 transition-all duration-300 shadow-lg mb-4">
                      <Eye className="w-8 h-8" />
                    </div>
                    <div className="inline-block mb-3">
                      <span className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-4 py-1.5 rounded-full text-xs font-semibold">
                        Our Vision
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-md group-hover:text-yellow-300 transition-colors duration-300">
                      What We See
                    </h3>
                  </div>
                  
                  <p className="text-sm md:text-base text-white/90 leading-relaxed text-center drop-shadow-sm">
                    To become the most trusted and preferred cab service provider in Bangalore, recognized for our 
                    commitment to excellence, innovation, and customer satisfaction. We envision a future where every 
                    journey is seamless, safe, and enjoyable, setting new standards in the transportation industry.
                  </p>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Card>

              {/* Our Mission */}
              <Card className="group relative p-6 md:p-8 bg-white/10 backdrop-blur-md border-2 border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-2 overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Icon and Badge */}
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 group-hover:bg-white/30 transition-all duration-300 shadow-lg mb-4">
                      <Target className="w-8 h-8" />
                    </div>
                    <div className="inline-block mb-3">
                      <span className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-4 py-1.5 rounded-full text-xs font-semibold">
                        Our Mission
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-md group-hover:text-yellow-300 transition-colors duration-300">
                      What Drives Us
                    </h3>
                  </div>
                  
                  <p className="text-sm md:text-base text-white/90 leading-relaxed text-center drop-shadow-sm">
                    To provide safe, punctual, and affordable cab services that exceed customer expectations. We are committed to 
                    making every journey comfortable and hassle-free for our valued customers across Bangalore. Our mission is to 
                    transform the way people travel by offering premium transportation services that prioritize safety, comfort, and 
                    reliability.
                  </p>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section 
        ref={featuresAnimation.ref}
        className={`py-12 md:py-16 bg-background relative overflow-hidden transition-all duration-1000 ${
          featuresAnimation.isVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-3">
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                What Makes Us Different
              </h2>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                Discover the features that set us apart from the competition
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card 
                  key={index}
                  className="group relative p-6 bg-white/90 backdrop-blur-sm border-2 border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 overflow-hidden"
                  style={{
                    transitionDelay: featuresAnimation.isVisible ? `${index * 50}ms` : "0ms"
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-yellow-500/10 rounded-xl flex items-center justify-center mb-4 text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section 
        ref={commitmentAnimation.ref}
        className={`py-12 md:py-16 relative overflow-hidden transition-all duration-1000 ${
          commitmentAnimation.isVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-10"
        }`}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/cabs-2.avif" 
            alt="Our Commitment background"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (!target.src.includes('cabs-1.avif')) {
                target.src = '/cabs-1.avif';
              } else if (!target.src.includes('unsplash')) {
                target.src = 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1920&h=1080&fit=crop&q=80';
              } else {
                target.src = '/cabs-2.avif';
              }
            }}
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-3">
                <span className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 w-fit mx-auto shadow-lg">
                  <Heart className="w-4 h-4" />
                  Our Commitment
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">
                Quality & Safety First
              </h2>
            </div>

            <Card className="p-8 md:p-12 bg-white/10 backdrop-blur-md border-2 border-white/30 hover:border-white/50 shadow-xl transition-all duration-300">
              <p className="text-base md:text-lg text-white/90 leading-relaxed mb-6 drop-shadow-sm">
                We are dedicated to maintaining the highest standards of service quality. Our drivers undergo thorough background 
                checks and training to ensure your safety and comfort. Every vehicle in our fleet is regularly maintained and 
                sanitized to provide you with a pleasant travel experience.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1 drop-shadow-md" />
                  <div>
                    <h4 className="font-semibold mb-1 text-white drop-shadow-md">Background Verified Drivers</h4>
                    <p className="text-sm text-white/80 drop-shadow-sm">All drivers undergo comprehensive background checks</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1 drop-shadow-md" />
                  <div>
                    <h4 className="font-semibold mb-1 text-white drop-shadow-md">Regular Vehicle Maintenance</h4>
                    <p className="text-sm text-white/80 drop-shadow-sm">Fleet vehicles are serviced and sanitized regularly</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1 drop-shadow-md" />
                  <div>
                    <h4 className="font-semibold mb-1 text-white drop-shadow-md">Professional Training</h4>
                    <p className="text-sm text-white/80 drop-shadow-sm">Drivers receive ongoing training and certification</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1 drop-shadow-md" />
                  <div>
                    <h4 className="font-semibold mb-1 text-white drop-shadow-md">Customer Satisfaction</h4>
                    <p className="text-sm text-white/80 drop-shadow-sm">We prioritize your comfort and satisfaction</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div 
            ref={statsAnimation.ref}
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto transition-all duration-1000 ${
              statsAnimation.isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            }`}
          >
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="group relative p-4 md:p-6 text-center bg-white/90 backdrop-blur-sm border-2 border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 overflow-hidden"
                style={{
                  transitionDelay: statsAnimation.isVisible ? `${index * 100}ms` : "0ms",
                  fontFamily: "'Outfit', sans-serif"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold mb-1.5 text-foreground group-hover:text-primary transition-colors duration-300" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground font-medium" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {stat.label}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-12 relative overflow-hidden">
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
              Experience Premium Service
            </div>

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-white drop-shadow-lg">
              Ready to Experience Premium Service?
            </h2>
            
            {/* Description */}
            <p className="text-sm md:text-base mb-6 text-white/90 drop-shadow-md max-w-2xl mx-auto">
              Book your ride today and discover why thousands of customers trust RM Cabs
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link to="/book">
                <Button 
                  size="lg" 
                  className="group bg-white text-primary hover:bg-white/90 font-semibold px-6 py-5 text-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 min-w-[180px]"
                >
                  Book Now
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
                  Call Us
                </Button>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-white/80 text-xs">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-yellow-300" />
                <span>10,000+ Happy Customers</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-yellow-300" />
                <span>10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-yellow-300" />
                <span>24/7 Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
