import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Terms = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-8 gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Button>
          </Link>

          <h1 className="text-4xl font-bold mb-6">Terms & Conditions</h1>
          <p className="text-muted-foreground mb-8">Last updated: December 2024</p>

          <div className="space-y-8">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By booking a cab through RM Cabs, you agree to comply with and be bound by these Terms and Conditions. 
                If you do not agree to these terms, please do not use our services.
              </p>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">2. Booking and Confirmation</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• All bookings are subject to availability and confirmation</li>
                <li>• You will receive a booking confirmation via SMS/Email/WhatsApp</li>
                <li>• Booking details must be accurate and complete</li>
                <li>• We reserve the right to refuse service without providing reasons</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">3. Pricing and Payment</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• All prices are quoted in Indian Rupees (INR)</li>
                <li>• Prices are subject to change without prior notice</li>
                <li>• Additional charges like toll, parking, and state permits are extra</li>
                <li>• Payment can be made via cash, card, UPI, or online transfer</li>
                <li>• For outstation trips, advance payment may be required</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">4. Cancellation Policy</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Free cancellation up to 6 hours before scheduled pickup</li>
                <li>• 50% charges for cancellation between 3-6 hours</li>
                <li>• 100% charges for cancellation within 3 hours or no-show</li>
                <li>• Refunds will be processed within 5-7 business days</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">5. User Responsibilities</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Passengers must be present at pickup location on time</li>
                <li>• Smoking, alcohol consumption is strictly prohibited in vehicles</li>
                <li>• Any damage to the vehicle will be charged to the passenger</li>
                <li>• Passengers must follow driver instructions and traffic rules</li>
                <li>• Luggage must be within vehicle capacity</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">6. Driver Rights</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Drivers have the right to refuse service in case of misbehavior</li>
                <li>• Drivers cannot be asked to break traffic rules</li>
                <li>• Drivers are entitled to rest during long journeys</li>
                <li>• Drivers' personal information must be kept confidential</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">7. Liability</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• We are not liable for delays due to traffic, weather, or accidents</li>
                <li>• Passengers are responsible for their personal belongings</li>
                <li>• Our liability is limited to the booking amount</li>
                <li>• We maintain insurance as per government regulations</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">8. Modifications to Service</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Trip route changes are subject to availability and additional charges</li>
                <li>• Trip extensions will be charged as per applicable rates</li>
                <li>• Multiple pickup/drop requests should be informed in advance</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">9. Disputes and Complaints</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Complaints should be raised within 24 hours of trip completion</li>
                <li>• All disputes will be resolved through mutual discussion</li>
                <li>• Legal jurisdiction is limited to Bangalore courts only</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                For any questions regarding these Terms & Conditions, please contact us:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Phone: +91 73490 91759 / +91 87924 56886</li>
                <li>• Email: info@rmcabs.in</li>
                <li>• Main Office: 109/78, 2nd Floor, HSR Layout, Bangalore, Karnataka 560102</li>
                <li>• Home Office: Adharshanagar, Arishankunte, Nelamangala, Bangalore 562123</li>
              </ul>
            </Card>
          </div>

          <Card className="mt-8 p-6 bg-muted/50">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> RM Cabs reserves the right to modify these Terms & Conditions at any time 
              without prior notice. It is your responsibility to review them periodically. Continued use of our services 
              after changes constitutes acceptance of the modified terms.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Terms;