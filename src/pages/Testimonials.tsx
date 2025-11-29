import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Bangalore",
      rating: 5,
      date: "2 days ago",
      review: "Excellent service! Booked a cab for airport pickup at 4 AM. Driver was on time, very professional, and the car was spotless. Highly recommend for airport transfers."
    },
    {
      name: "Priya Sharma",
      location: "Whitefield",
      rating: 5,
      date: "1 week ago",
      review: "Used for Bangalore to Mysore trip. Amazing experience! Driver was courteous, knew all the good spots, and the Innova was very comfortable. Will book again for our next trip."
    },
    {
      name: "Amit Patel",
      location: "Electronic City",
      rating: 5,
      date: "2 weeks ago",
      review: "Been using for daily office commute. Punctual, clean cars, and reasonable pricing. The drivers are well-trained and maintain good vehicle hygiene. Very satisfied!"
    },
    {
      name: "Sneha Reddy",
      location: "Koramangala",
      rating: 5,
      date: "3 weeks ago",
      review: "Booked for my parents' trip to Tirupati. They were extremely happy with the service. Driver was respectful, drove safely, and helped them throughout the journey."
    },
    {
      name: "Vikram Singh",
      location: "Indiranagar",
      rating: 5,
      date: "1 month ago",
      review: "Corporate taxi service for our office is outstanding. Billing is transparent, drivers are professional, and they handle last-minute bookings efficiently."
    },
    {
      name: "Ananya Iyer",
      location: "HSR Layout",
      rating: 5,
      date: "1 month ago",
      review: "Used their luxury car for my wedding. The car was beautifully decorated, driver in uniform, and service was impeccable. Made our special day even more memorable!"
    },
    {
      name: "Karthik Menon",
      location: "Marathahalli",
      rating: 5,
      date: "2 months ago",
      review: "Bangalore to Coorg round trip was fantastic. Driver doubled as a guide, showed us best coffee plantations and restaurants. Great value for money!"
    },
    {
      name: "Deepa Nair",
      location: "JP Nagar",
      rating: 5,
      date: "2 months ago",
      review: "Reliable and trustworthy. I've used them multiple times for late-night travel and always felt safe. Drivers are verified and cars are GPS-tracked."
    },
    {
      name: "Suresh Babu",
      location: "Jayanagar",
      rating: 5,
      date: "3 months ago",
      review: "Best cab service in Bangalore! No surge pricing, transparent billing, and excellent customer support. They responded to my query within minutes."
    }
  ];

  const stats = [
    { value: "10,000+", label: "Happy Customers" },
    { value: "4.8/5", label: "Average Rating" },
    { value: "50,000+", label: "Trips Completed" },
    { value: "98%", label: "Customer Satisfaction" },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Customer Reviews & Testimonials
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Don't just take our word for it. Here's what our customers say about us!
          </p>
          <Link to="/book">
            <Button size="lg">Book Your Cab Now</Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover-lift">
              <div className="flex items-start justify-between mb-4">
                <Quote className="w-8 h-8 text-primary/20" />
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
              <p className="text-sm mb-4 leading-relaxed">{testimonial.review}</p>
              <div className="border-t pt-4">
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                <div className="text-xs text-muted-foreground mt-1">{testimonial.date}</div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Customers Trust Us</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Verified Drivers", desc: "All drivers background checked" },
              { title: "GPS Tracking", desc: "Real-time trip monitoring" },
              { title: "24/7 Support", desc: "Always here to help you" },
              { title: "No Hidden Charges", desc: "Transparent pricing always" },
            ].map((badge, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-3">
                  <Star className="w-6 h-6" />
                </div>
                <h3 className="font-bold mb-2">{badge.title}</h3>
                <p className="text-sm text-muted-foreground">{badge.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Card className="max-w-2xl mx-auto p-8 bg-primary text-primary-foreground text-center">
          <h3 className="text-2xl font-bold mb-4">Experience the Best Cab Service Yourself!</h3>
          <p className="mb-6 opacity-90">
            Join thousands of satisfied customers and book your ride today
          </p>
          <Link to="/book">
            <Button size="lg" variant="secondary">Book Your First Ride</Button>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default Testimonials;