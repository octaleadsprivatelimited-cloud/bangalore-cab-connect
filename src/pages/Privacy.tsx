import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Privacy = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-8 gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Button>
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <Shield className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Privacy Policy</h1>
              <p className="text-muted-foreground">Last updated: December 2024</p>
            </div>
          </div>

          <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
            <p className="text-muted-foreground">
              At RM Cabs, we value your privacy and are committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, and safeguard your data.
            </p>
          </Card>

          <div className="space-y-8">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
              <h3 className="font-bold mb-2 mt-4">Personal Information:</h3>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>• Name, phone number, and email address</li>
                <li>• Pickup and drop locations</li>
                <li>• Trip preferences and booking history</li>
                <li>• Payment information (processed securely)</li>
              </ul>
              <h3 className="font-bold mb-2">Automatic Information:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Device type, IP address, and browser information</li>
                <li>• GPS location data (with your consent)</li>
                <li>• Cookies and usage statistics</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Service Delivery:</strong> Process bookings, assign drivers, and provide customer support</li>
                <li>• <strong>Communication:</strong> Send booking confirmations, trip updates, and promotional offers</li>
                <li>• <strong>Payment Processing:</strong> Handle transactions securely and send invoices</li>
                <li>• <strong>Improvement:</strong> Analyze usage patterns to enhance our services</li>
                <li>• <strong>Safety:</strong> Verify identity and ensure passenger safety</li>
                <li>• <strong>Legal Compliance:</strong> Meet regulatory and legal requirements</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
              <p className="text-muted-foreground mb-4">
                We do not sell your personal information. We may share data with:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Drivers:</strong> Only trip-related information necessary for service</li>
                <li>• <strong>Payment Processors:</strong> Secure transaction processing</li>
                <li>• <strong>Service Providers:</strong> Third parties who help us operate (SMS, email services)</li>
                <li>• <strong>Legal Authorities:</strong> When required by law or to protect rights</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• We use industry-standard encryption for data transmission</li>
                <li>• Secure servers with regular security audits</li>
                <li>• Access controls and authentication measures</li>
                <li>• Regular backups to prevent data loss</li>
                <li>• Staff training on data protection practices</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">5. Your Rights and Choices</h2>
              <h3 className="font-bold mb-2 mt-4">You have the right to:</h3>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>• <strong>Access:</strong> Request a copy of your personal data</li>
                <li>• <strong>Correction:</strong> Update or correct your information</li>
                <li>• <strong>Deletion:</strong> Request deletion of your account and data</li>
                <li>• <strong>Opt-out:</strong> Unsubscribe from promotional communications</li>
                <li>• <strong>Data Portability:</strong> Receive your data in a structured format</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                To exercise these rights, contact us at info@rmcabs.in
              </p>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">6. Location Data</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• We collect location data to provide accurate pickup and navigation</li>
                <li>• GPS tracking is used during active trips for safety</li>
                <li>• You can disable location services, but it may affect service quality</li>
                <li>• Location history is used to improve route recommendations</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">7. Cookies and Tracking</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• We use cookies to enhance user experience and remember preferences</li>
                <li>• Analytics cookies help us understand how users interact with our service</li>
                <li>• You can control cookie settings through your browser</li>
                <li>• Disabling cookies may limit certain features</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">8. Data Retention</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• We retain your data as long as your account is active</li>
                <li>• Booking records are kept for 3 years for legal and accounting purposes</li>
                <li>• Payment information is retained as per regulatory requirements</li>
                <li>• You can request account deletion at any time</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">9. Third-Party Links</h2>
              <p className="text-muted-foreground">
                Our website may contain links to third-party sites. We are not responsible for their privacy practices. 
                Please review their privacy policies before providing any information.
              </p>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">10. Children's Privacy</h2>
              <p className="text-muted-foreground">
                Our services are not intended for children under 18. We do not knowingly collect data from minors. 
                If you believe we have collected such information, please contact us immediately.
              </p>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">11. Changes to Privacy Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy periodically. Significant changes will be communicated via email or 
                website notification. Continued use of our services after changes constitutes acceptance.
              </p>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">12. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                For privacy-related questions or concerns:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Email:</strong> info@rmcabs.in</li>
                <li>• <strong>Phone:</strong> +91 73490 91759 / +91 87924 56886</li>
                <li>• <strong>Main Office:</strong> 109/78, 2nd Floor, HSR Layout, Bangalore, Karnataka 560102</li>
                <li>• <strong>Home Office:</strong> Adharshanagar, Arishankunte, Nelamangala, Bangalore 562123</li>
              </ul>
            </Card>
          </div>

          <Card className="mt-8 p-6 bg-primary/5 border-primary/20">
            <p className="text-sm text-muted-foreground">
              <strong>Your Consent:</strong> By using RM Cabs services, you consent to the collection and use 
              of information as described in this Privacy Policy. We are committed to protecting your privacy and 
              maintaining the security of your personal information.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Privacy;