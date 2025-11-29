import { Card } from "@/components/ui/card";
import { Users, Award, Clock, Shield } from "lucide-react";

const About = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "10,000+", label: "Happy Customers" },
    { icon: <Award className="w-8 h-8" />, number: "15+", label: "Years Experience" },
    { icon: <Clock className="w-8 h-8" />, number: "24/7", label: "Available" },
    { icon: <Shield className="w-8 h-8" />, number: "100%", label: "Safe & Secure" },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">About RM Cabs</h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Your trusted partner for premium cab services in Bangalore
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
            <p className="mb-6 text-foreground/80">
              RM Cabs is a leading taxi service provider in Bangalore, offering reliable and comfortable transportation 
              solutions. We specialize in airport transfers, local city rides, outstation trips, and corporate travel services.
            </p>

            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="mb-6 text-foreground/80">
              To provide safe, punctual, and affordable cab services that exceed customer expectations. We are committed to 
              making every journey comfortable and hassle-free for our valued customers across Bangalore.
            </p>

            <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
              <li>Professional and verified drivers</li>
              <li>Well-maintained and clean vehicles</li>
              <li>Transparent pricing with no hidden charges</li>
              <li>GPS tracking for safety and security</li>
              <li>24/7 customer support</li>
              <li>Wide range of vehicle options</li>
              <li>Easy online booking system</li>
              <li>Flexible payment options</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
            <p className="mb-6 text-foreground/80">
              We are dedicated to maintaining the highest standards of service quality. Our drivers undergo thorough background 
              checks and training to ensure your safety and comfort. Every vehicle in our fleet is regularly maintained and 
              sanitized to provide you with a pleasant travel experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
