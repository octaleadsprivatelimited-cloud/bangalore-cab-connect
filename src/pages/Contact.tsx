import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { 
  Phone, Mail, MapPin, Clock, MessageCircle, 
  Send, ArrowRight, Sparkles, CheckCircle2
} from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const Contact = () => {
  const formAnimation = useScrollAnimation({ threshold: 0.05 });
  const infoAnimation = useScrollAnimation({ threshold: 0.05 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll contact you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+91 73490 91759",
      link: "tel:+917349091759"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone (Alt)",
      details: "+91 87924 56886",
      link: "tel:+918792456886"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      details: "+91 73490 91759",
      link: "https://wa.me/917349091759"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "info@rmcabs.in",
      link: "mailto:info@rmcabs.in"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Main Office",
      details: "109/78, 2nd Floor, HSR Layout, Bangalore, Karnataka 560102",
      link: "#"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Home Office",
      details: "Adharshanagar, Arishankunte, Nelamangala, Bangalore 562123",
      link: "#"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: "24/7 - Always Available",
      link: "#"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop&q=80" 
            alt="Contact background"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/cabs-1.avif';
            }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-4">
              <span className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 w-fit mx-auto shadow-lg">
                <MessageCircle className="w-4 h-4" />
                Get In Touch
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white drop-shadow-lg">
              Contact Us
            </h1>
            <p className="text-sm md:text-base text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Get in touch with us for any queries or bookings. We're here to help you 24/7 with quick response times 
              and personalized service.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-8 md:py-10 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
              {/* Contact Form */}
              <div 
                ref={formAnimation.ref}
                className={`transition-all duration-500 ${
                  formAnimation.isVisible 
                    ? "opacity-100 translate-x-0" 
                    : "opacity-0 -translate-x-10"
                }`}
              >
                <Card className="p-8 md:p-10 bg-white/90 backdrop-blur-md border-2 border-primary/10 shadow-xl">
                  <div className="mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-yellow-500/10 rounded-2xl flex items-center justify-center text-primary mb-4 shadow-lg">
                      <Send className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                      Send us a Message
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base">
                      Fill out the form below and we'll get back to you within 24 hours
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground font-semibold text-sm">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="h-12 border-2 focus:border-primary transition-colors duration-300"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground font-semibold text-sm">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-12 border-2 focus:border-primary transition-colors duration-300"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground font-semibold text-sm">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 73490 91759"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-12 border-2 focus:border-primary transition-colors duration-300"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground font-semibold text-sm">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us how we can help you..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="border-2 focus:border-primary transition-colors duration-300 resize-none"
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-primary to-yellow-500 text-primary-foreground hover:from-primary/90 hover:to-yellow-500/90 font-semibold h-12 text-base shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1"
                    >
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                </Card>
              </div>

              {/* Contact Information */}
              <div 
                ref={infoAnimation.ref}
                className={`space-y-4 transition-all duration-500 ${
                  infoAnimation.isVisible 
                    ? "opacity-100 translate-x-0" 
                    : "opacity-0 translate-x-10"
                }`}
              >
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index} 
                    className="group relative p-6 bg-white/90 backdrop-blur-sm border-2 border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 overflow-hidden"
                    style={{
                      transitionDelay: infoAnimation.isVisible ? `${index * 30}ms` : "0ms",
                      transitionDuration: "400ms"
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <a href={info.link} className="flex items-start gap-4 relative z-10">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-yellow-500/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold mb-1.5 text-foreground group-hover:text-primary transition-colors duration-300">
                          {info.title}
                        </h3>
                        <p className="text-sm md:text-base text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                          {info.details}
                        </p>
                      </div>
                    </a>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Response Section */}
      <section className="py-8 md:py-10 bg-gradient-to-b from-muted/30 via-background to-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto">
            <Card className="p-6 md:p-8 bg-gradient-to-br from-primary to-yellow-500 text-primary-foreground shadow-xl border-0 text-center">
              <div className="mb-5">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3 shadow-lg mx-auto">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">Quick Response</h3>
                <p className="opacity-90 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
                  Need immediate assistance? Our team responds within 5 minutes on WhatsApp and phone calls.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                <a href="tel:+917349091759" className="flex-1">
                  <Button 
                    variant="secondary" 
                    className="w-full bg-white text-primary hover:bg-white/90 font-semibold h-12 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Button>
                </a>
                <a href="https://wa.me/917349091759" className="flex-1" target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="secondary" 
                    className="w-full bg-white text-primary hover:bg-white/90 font-semibold h-12 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
