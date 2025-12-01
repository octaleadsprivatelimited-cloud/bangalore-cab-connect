import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Car, CheckCircle2, Shield, Star, Zap, Sparkles, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface RoutePageProps {
  title: string;
  from: string;
  to: string;
  distance?: string;
  time?: string;
  price?: string;
  description: string;
  content: string;
  metaDescription: string;
}

const RoutePage = ({
  title,
  from,
  to,
  distance,
  time,
  price,
  description,
  content,
  metaDescription,
}: RoutePageProps) => {
  useEffect(() => {
    // Update document title and meta description
    document.title = `${title} | RM Cabs - Premium Taxi Service`;
    
    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', metaDescription);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = metaDescription;
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
  }, [title, metaDescription]);

  const features = [
    { icon: Shield, text: "Professional and verified drivers" },
    { icon: MapPin, text: "GPS-tracked vehicles for safety" },
    { icon: Clock, text: "24/7 customer support" },
    { icon: Shield, text: "Transparent service with no hidden charges" },
    { icon: Car, text: "Well-maintained and clean vehicles" },
    { icon: Zap, text: "Flexible payment options" },
  ];

  const heroAnimation = useScrollAnimation({ threshold: 0.1 });
  const contentAnimation = useScrollAnimation({ threshold: 0.1 });
  const featuresAnimation = useScrollAnimation({ threshold: 0.1 });
  const ctaAnimation = useScrollAnimation({ threshold: 0.1 });

  return (
    <div className="relative">
      {/* Hero Section with Background */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/cabs-1.avif" 
            alt={`${from} to ${to} route background`}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (!target.src.includes('cabs-2.avif')) {
                target.src = '/cabs-2.avif';
              } else if (!target.src.includes('unsplash')) {
                target.src = 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&h=1080&fit=crop&q=80';
              }
            }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute top-1/2 right-10 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-3000"></div>
        </div>
      
        <div className="container mx-auto px-4 relative z-10">
          {/* Hero Section */}
          <div className="max-w-6xl mx-auto mb-12 md:mb-16">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
            {/* Content */}
            <div 
              ref={heroAnimation.ref}
              className={`flex flex-col justify-center transition-all duration-700 ${
                heroAnimation.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="relative mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs md:text-sm font-semibold mb-4 w-fit border border-white/30 shadow-lg">
                  <Sparkles className="w-3 h-3 md:w-4 md:h-4 animate-pulse" />
                  <span className="relative z-10">Premium Taxi Service</span>
                </div>
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-500 rounded-full animate-ping"></div>
              </div>
              
              <div className="relative mb-4 md:mb-6">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
                  {title}
                </h1>
                <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-primary to-yellow-500 rounded-full"></div>
              </div>
              
              <div className="relative p-4 md:p-6 bg-white/20 backdrop-blur-md rounded-2xl border-2 border-white/30 shadow-xl mb-6 md:mb-8">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <p className="text-base md:text-lg text-white/90 mb-0 leading-relaxed relative z-10 drop-shadow-md">{description}</p>
              </div>
              
              {distance && time && (
                <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                  <Card className="group relative p-4 md:p-5 bg-white/20 backdrop-blur-md border-2 border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-2 overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-all duration-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                    <div className="flex items-center gap-2 mb-3 relative z-10">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-yellow-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-xs md:text-sm font-semibold text-white/90">Distance</span>
                    </div>
                    <p className="text-2xl md:text-3xl font-bold text-white relative z-10 drop-shadow-lg">{distance}</p>
                  </Card>
                  <Card className="group relative p-4 md:p-5 bg-white/20 backdrop-blur-md border-2 border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-2 overflow-hidden">
                    <div className="absolute top-0 left-0 w-20 h-20 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-all duration-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-2 left-2 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <div className="flex items-center gap-2 mb-3 relative z-10">
                      <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-primary rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-xs md:text-sm font-semibold text-white/90">Duration</span>
                    </div>
                    <p className="text-2xl md:text-3xl font-bold text-white relative z-10 drop-shadow-lg">{time}</p>
                  </Card>
                </div>
              )}


              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link to="/book" className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-yellow-500 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <Button size="lg" className="relative w-full sm:w-auto bg-gradient-to-r from-primary to-yellow-500 hover:from-primary/90 hover:to-yellow-500/90 text-primary-foreground font-bold shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-1 border-0">
                    <span className="relative z-10 flex items-center gap-2">
                      Book Now
                      <Sparkles className="w-4 h-4 animate-pulse" />
                    </span>
                  </Button>
                </Link>
                <a href="tel:+917349091759" className="group">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 border-2 border-primary/30 hover:bg-gradient-to-r hover:from-primary/10 hover:to-yellow-500/10 hover:border-primary transition-all duration-300 hover:shadow-lg font-semibold">
                    <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    Call for Quote
                  </Button>
                </a>
              </div>
            </div>

            {/* Car Image */}
            <div 
              ref={heroAnimation.ref}
              className={`relative h-full min-h-[400px] md:min-h-[500px] transition-all duration-700 ${
                heroAnimation.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-yellow-500/10 to-primary/20 rounded-3xl blur-2xl transform rotate-6"></div>
              <div className="group relative h-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/20">
                <div className="absolute inset-0 opacity-30" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0-6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-25-4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm19 1c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm30 20c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM22 4c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z\" fill=\"%23ffffff\" fill-opacity=\"0.05\" fill-rule=\"evenodd\"/%3E%3C/svg%3E')"}}></div>
                <img 
                  src="/cabs-1.avif" 
                  alt={`${from} to ${to} taxi service`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 relative z-10"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('cabs-2.avif')) {
                      target.src = '/cabs-2.avif';
                    } else if (!target.src.includes('unsplash')) {
                      target.src = 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop&q=80';
                    } else {
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full flex items-center justify-center"><svg class="w-64 h-64 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg></div>';
                      }
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-primary shadow-lg z-30">
                  ⭐ 4.8 Rating
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-primary via-primary/95 to-yellow-500 text-primary-foreground px-6 py-4 rounded-2xl shadow-2xl border-0 backdrop-blur-sm transform rotate-3 hover:rotate-6 transition-transform duration-300 z-20">
                <div className="absolute inset-0 bg-white/10 rounded-2xl blur-sm"></div>
                <div className="flex items-center gap-2 relative z-10">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Star className="w-4 h-4 fill-white text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-base md:text-lg">RM Cabs</p>
                    <p className="text-xs opacity-90">Premium Service</p>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-300 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Rest of Content */}
      <div className="py-12 md:py-16 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          {/* Content Section */}
          <div className="max-w-4xl mx-auto mb-12 md:mb-16">
          <div 
            ref={contentAnimation.ref}
            className={`grid md:grid-cols-2 gap-6 md:gap-8 items-stretch transition-all duration-700 ${
              contentAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Card className="group relative p-6 md:p-8 flex flex-col bg-gradient-to-br from-white/95 via-white/90 to-primary/5 backdrop-blur-md border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-500/10 rounded-full blur-xl group-hover:bg-yellow-500/20 transition-all duration-300"></div>
              <div className="absolute inset-0 opacity-50" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23000000\" fill-opacity=\"0.02\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">About This Route</h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-primary to-yellow-500 rounded-full mt-1"></div>
                  </div>
                </div>
                <div className="prose prose-lg max-w-none flex-grow">
                  <p className="text-sm md:text-base text-foreground/80 leading-relaxed relative z-10">{content}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            </Card>
            <div className="group relative rounded-3xl overflow-hidden shadow-2xl h-full min-h-[300px] border-2 border-primary/20">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-yellow-500/10 to-primary/20 blur-xl z-0"></div>
              <img 
                src="/cabs-2.avif" 
                alt={`Premium taxi service from ${from} to ${to}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 relative z-10"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.includes('cabs-1.avif')) {
                    target.src = '/cabs-1.avif';
                  } else if (!target.src.includes('unsplash')) {
                    target.src = 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=600&fit=crop&q=80';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
                <div className="bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-xl">
                  <p className="text-xs font-semibold text-primary">Premium Fleet</p>
                  <p className="text-xs text-muted-foreground">Well-maintained vehicles</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div 
          ref={featuresAnimation.ref}
          className={`max-w-6xl mx-auto mb-12 md:mb-16 transition-all duration-700 ${
            featuresAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-8 md:mb-10 relative">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 via-primary/10 to-yellow-500/20 backdrop-blur-sm rounded-full text-primary text-xs md:text-sm font-semibold mb-4 border border-primary/20 shadow-lg">
                <Star className="w-3 h-3 md:w-4 md:h-4 fill-primary animate-pulse" />
                Why Choose Us
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-500 rounded-full animate-ping"></div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent mb-2">
                Why Choose RM Cabs?
              </h2>
              <div className="flex items-center justify-center gap-2">
                <div className="h-1 w-12 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
                <div className="h-1 w-2 bg-primary rounded-full"></div>
                <div className="h-1 w-12 bg-gradient-to-r from-transparent via-yellow-500 to-transparent rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="group relative p-5 md:p-6 bg-gradient-to-br from-white/90 via-white/80 to-primary/5 backdrop-blur-md border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 overflow-hidden"
                  style={{
                    transitionDelay: featuresAnimation.isVisible ? `${index * 50}ms` : "0ms"
                  }}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-yellow-500/10 rounded-full blur-xl group-hover:bg-yellow-500/20 transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 pt-1">
                      <span className="text-sm md:text-base text-foreground/90 font-medium leading-relaxed">{feature.text}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-yellow-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Card>
              );
            })}
          </div>
          {/* Additional Image Gallery */}
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {[
              { src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop&q=80", alt: "Premium taxi fleet", fallback: "/cabs-1.avif" },
              { src: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&h=300&fit=crop&q=80", alt: "Comfortable taxi interior", fallback: "/cabs-2.avif" },
              { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&q=80", alt: "Professional taxi service", fallback: "/cabs-1.avif" },
            ].map((img, index) => (
              <div 
                key={index}
                className="group relative rounded-xl overflow-hidden shadow-lg h-48 hover:shadow-xl transition-all duration-300"
                style={{
                  transitionDelay: featuresAnimation.isVisible ? `${(features.length + index) * 50}ms` : "0ms"
                }}
              >
                <img 
                  src={img.src} 
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = img.fallback;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>


        {/* CTA Section */}
        <div 
          ref={ctaAnimation.ref}
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            ctaAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative py-10 md:py-12 overflow-hidden rounded-3xl">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-yellow-500"></div>
            
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 px-6 md:px-8 text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-semibold mb-4 border border-white/30 shadow-lg">
                <Sparkles className="w-3.5 h-3.5" />
                Book Your Journey Today
              </div>

              {/* Heading */}
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 text-white drop-shadow-lg">
                Ready to Book Your Journey?
              </h3>
              
              {/* Description */}
              <p className="mb-6 text-white/90 text-sm md:text-base drop-shadow-md max-w-2xl mx-auto">
                Get instant confirmation and guaranteed service. Book now or call us for a custom quote!
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
        </div>
        </div>
      </div>
    </div>
  );
};

export default RoutePage;

