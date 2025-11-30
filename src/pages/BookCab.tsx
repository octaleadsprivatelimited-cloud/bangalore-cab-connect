import BookingForm from "@/components/BookingForm";
import { Card } from "@/components/ui/card";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const BookCab = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Cab</h1>
            <p className="text-xl text-muted-foreground">
              Fill in the details below and we'll get back to you shortly
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <BookingForm />
            </div>

            <div className="space-y-4">
              <Card className="p-6 bg-primary/5 border-primary/20">
                <h3 className="font-bold mb-4">Need Immediate Booking?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Contact us directly for instant confirmation
                </p>
                <div className="space-y-3">
                  <a href="tel:+917349091759">
                    <Button className="w-full gap-2 bg-primary hover:bg-primary/90">
                      <Phone className="w-4 h-4" />
                      Call Now
                    </Button>
                  </a>
                  <a
                    href="https://wa.me/917349091759?text=Hi, I'd like to book a cab"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="w-full gap-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white">
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold mb-4">Why Book With Us?</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>Instant confirmation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>No hidden charges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>24/7 customer support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>Professional drivers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>Clean & sanitized vehicles</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-secondary text-secondary-foreground">
                <h3 className="font-bold mb-2">Need Help?</h3>
                <p className="text-sm mb-4 opacity-90">
                  Our team is available 24/7 to assist you
                </p>
                <a href="mailto:info@rmcabs.in" className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4" />
                  info@rmcabs.in
                </a>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCab;
