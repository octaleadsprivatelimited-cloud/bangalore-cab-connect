import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const Contact = () => {
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
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              Get in touch with us for any queries or bookings
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-semibold">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-semibold">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground font-semibold">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 73490 91759"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-semibold">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 hover-lift">
                  <a href={info.link} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{info.title}</h3>
                      <p className="text-muted-foreground">{info.details}</p>
                    </div>
                  </a>
                </Card>
              ))}

              <Card className="p-6 bg-primary text-primary-foreground">
                <h3 className="text-xl font-bold mb-2">Quick Response</h3>
                <p className="mb-4 opacity-90">
                  Need immediate assistance? Our team responds within 5 minutes on WhatsApp and phone calls.
                </p>
                <div className="flex gap-3">
                  <a href="tel:+917349091759" className="flex-1">
                    <Button variant="secondary" className="w-full">
                      Call Now
                    </Button>
                  </a>
                  <a href="https://wa.me/917349091759" className="flex-1" target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" className="w-full">
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
