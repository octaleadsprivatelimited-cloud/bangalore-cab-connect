import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, RefreshCw, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const RefundPolicy = () => {
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
              <RefreshCw className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Refund & Cancellation Policy</h1>
              <p className="text-muted-foreground">Last updated: December 2024</p>
            </div>
          </div>

          <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
            <p className="text-muted-foreground">
              We understand that plans change. This policy outlines our cancellation and refund terms to ensure 
              transparency and fairness for all customers.
            </p>
          </Card>

          <div className="space-y-8">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Cancellation Charges</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                  <Clock className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-green-900 dark:text-green-100 mb-2">
                      More than 6 hours before pickup
                    </h3>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      <strong>FREE CANCELLATION</strong> - Full refund with no charges
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                  <Clock className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-yellow-900 dark:text-yellow-100 mb-2">
                      Between 3 to 6 hours before pickup
                    </h3>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300">
                      <strong>50% CANCELLATION FEE</strong> - Half of the booking amount will be charged
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-red-50 dark:bg-red-950/20 rounded-lg">
                  <Clock className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">
                      Less than 3 hours before pickup or No-Show
                    </h3>
                    <p className="text-sm text-red-700 dark:text-red-300">
                      <strong>100% CANCELLATION FEE</strong> - Full booking amount will be charged
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Refund Process</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-0.5">1.</span>
                  <span>Refund requests must be raised through our customer support (call or email)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-0.5">2.</span>
                  <span>Refunds are processed within 5-7 business days of cancellation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-0.5">3.</span>
                  <span>Amount will be credited to the original payment method used</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-0.5">4.</span>
                  <span>For cash bookings, refunds will be processed via bank transfer</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-0.5">5.</span>
                  <span>You will receive a confirmation email once refund is initiated</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Cancellation by Bangalore Cabs</h2>
              <p className="text-muted-foreground mb-4">
                In rare cases where we need to cancel your booking due to unforeseen circumstances:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• You will receive <strong>100% refund</strong> with no deductions</li>
                <li>• We will notify you immediately via call/SMS/WhatsApp</li>
                <li>• We will try our best to arrange an alternative cab</li>
                <li>• Refund will be processed within 3-5 business days</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Modification of Bookings</h2>
              <h3 className="font-bold mb-3">Trip Changes:</h3>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>• Pickup time changes (up to 6 hours before) - Free</li>
                <li>• Pickup/drop location changes - May incur additional charges</li>
                <li>• Vehicle type change - Subject to availability and price difference</li>
                <li>• Trip date change - Treated as new booking if within cancellation window</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Contact us immediately to request modifications: <strong>+91 98765 43210</strong>
              </p>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Special Cases - Full Refund</h2>
              <p className="text-muted-foreground mb-3">
                You are eligible for 100% refund in the following situations:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Driver did not arrive at pickup location within 30 minutes of scheduled time</li>
                <li>• Vehicle provided was significantly different from booking (without prior notice)</li>
                <li>• Driver behavior was unprofessional or inappropriate</li>
                <li>• Vehicle was in poor condition (unclean, damaged, or unsafe)</li>
                <li>• Service was not provided due to reasons attributable to us</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">No Refund Scenarios</h2>
              <p className="text-muted-foreground mb-3">
                Refunds will not be provided in these cases:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Delays due to traffic, weather, or road conditions</li>
                <li>• Passenger was not present at pickup location</li>
                <li>• Trip cancellation by passenger after cab arrived</li>
                <li>• Passenger provided incorrect pickup/drop details</li>
                <li>• Passenger misbehavior leading to trip cancellation</li>
                <li>• Service completed as per booking terms</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Outstation Trip Cancellation</h2>
              <h3 className="font-bold mb-3">Special Terms for Multi-day Trips:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Cancellation more than 24 hours before - Full refund of advance</li>
                <li>• Cancellation within 24 hours - 50% of total booking amount</li>
                <li>• Cancellation after trip starts - No refund</li>
                <li>• Early return - Charges for minimum guaranteed kilometers apply</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Advance Payment Bookings</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• For advance paid bookings, cancellation policy remains same</li>
                <li>• Advance amount refund follows the same timeline (5-7 business days)</li>
                <li>• Balance amount (if any) will not be charged post-cancellation</li>
                <li>• Advance is non-refundable for no-show situations</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">How to Cancel Your Booking</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Call Us</h3>
                    <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                    <p className="text-xs text-muted-foreground mt-1">Available 24/7</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">WhatsApp</h3>
                    <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                    <p className="text-xs text-muted-foreground mt-1">Quick response</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Please provide your booking ID for faster processing
              </p>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Contact for Refund Queries</h2>
              <p className="text-muted-foreground mb-4">
                For any questions or concerns regarding refunds and cancellations:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Phone:</strong> +91 98765 43210</li>
                <li>• <strong>Email:</strong> refunds@bangalorecabs.com</li>
                <li>• <strong>WhatsApp:</strong> +91 98765 43210</li>
                <li>• <strong>Support Hours:</strong> 24/7 Available</li>
              </ul>
            </Card>
          </div>

          <Card className="mt-8 p-6 bg-muted/50">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> This cancellation and refund policy is subject to change without prior notice. 
              Bangalore Cabs reserves the right to modify these terms. Please check this page regularly for updates. 
              For any disputes, the company's decision will be final.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;