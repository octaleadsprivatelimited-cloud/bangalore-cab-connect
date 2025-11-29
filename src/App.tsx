import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Fleet from "./pages/Fleet";
import Services from "./pages/Services";
import BookCab from "./pages/BookCab";
import Contact from "./pages/Contact";
import GenericPage from "./pages/GenericPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/services" element={<Services />} />
            <Route path="/book" element={<BookCab />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Service Pages */}
            <Route path="/airport-taxi" element={<GenericPage title="Airport Taxi Bangalore" description="Reliable airport pickup and drop service" content="Professional airport transfer service from Bangalore to Kempegowda International Airport. We offer 24/7 service with flight tracking, meet & greet service, and comfortable rides." />} />
            <Route path="/local-taxi" element={<GenericPage title="Local Taxi Bangalore" description="City rides at fixed packages" content="Explore Bangalore with our local taxi packages. Choose from 4hrs/40km or 8hrs/80km packages. Perfect for shopping, meetings, and city exploration." />} />
            <Route path="/outstation" element={<GenericPage title="Outstation Cabs from Bangalore" description="One-way and round trips to nearby cities" content="Comfortable outstation cab service from Bangalore to popular destinations like Mysore, Coorg, Ooty, Chennai, and more. One-way and round-trip options available." />} />
            <Route path="/corporate" element={<GenericPage title="Corporate Taxi Services" description="Monthly packages for businesses" content="Dedicated corporate cab services with monthly packages, GST invoices, and account managers. Ideal for employee transport and business travel." />} />
            <Route path="/wedding-cars" element={<GenericPage title="Wedding Car Rentals" description="Luxury cars for your special day" content="Premium wedding car rentals in Bangalore. Choose from luxury sedans, SUVs with decoration options. Make your wedding memorable with our professional service." />} />
            <Route path="/tempo-traveller" element={<GenericPage title="Tempo Traveller Rental" description="12-17 seater for group travel" content="Rent tempo traveller in Bangalore for group tours, family trips, and corporate outings. AC vehicles with comfortable push-back seats." />} />
            <Route path="/luxury-cars" element={<GenericPage title="Luxury Car Rental" description="Premium cars for VIP travel" content="Rent luxury cars like BMW, Mercedes, Audi in Bangalore. Professional chauffeur-driven service for corporate meetings and special occasions." />} />
            <Route path="/24x7-service" element={<GenericPage title="24/7 Taxi Service Bangalore" description="Round-the-clock cab availability" content="Always available taxi service in Bangalore. Late-night pickups, early morning drops, and emergency rides anytime you need." />} />
            
            {/* Popular Routes */}
            <Route path="/bangalore-to-mysore" element={<GenericPage title="Bangalore to Mysore Taxi" description="Comfortable 3-hour ride to Mysore" content="Book a cab from Bangalore to Mysore. Enjoy a comfortable 150km journey in 3 hours. Visit Mysore Palace, Chamundi Hills, and Brindavan Gardens." />} />
            <Route path="/bangalore-to-coorg" element={<GenericPage title="Bangalore to Coorg Taxi" description="Scenic drive to the Scotland of India" content="Travel from Bangalore to Coorg in comfort. 270km journey through scenic routes. Explore coffee plantations, Abbey Falls, and Raja's Seat." />} />
            <Route path="/bangalore-to-ooty" element={<GenericPage title="Bangalore to Ooty Taxi" description="Hill station getaway from Bangalore" content="Book Bangalore to Ooty cab for a memorable hill station trip. 280km journey with breathtaking views. Visit Botanical Gardens, Ooty Lake, and tea estates." />} />
            <Route path="/bangalore-to-tirupati" element={<GenericPage title="Bangalore to Tirupati Taxi" description="Pilgrimage trip made comfortable" content="Bangalore to Tirupati cab service for hassle-free darshan. 250km journey in 4 hours. Round trip and one-way options available." />} />
            <Route path="/bangalore-to-mangalore" element={<GenericPage title="Bangalore to Mangalore Taxi" description="Coastal city connection" content="Travel from Bangalore to Mangalore by cab. 350km journey through Western Ghats. Visit beaches, temples, and enjoy coastal cuisine." />} />
            
            {/* Additional Pages */}
            <Route path="/city-tour" element={<GenericPage title="Bangalore City Tour" description="Explore Bangalore's attractions" content="Comprehensive Bangalore city tour packages. Visit Lalbagh, Cubbon Park, Bangalore Palace, ISKCON Temple, and more with our guided tours." />} />
            <Route path="/sedan-rental" element={<GenericPage title="Sedan Cab Rental" description="Comfortable sedans for city rides" content="Rent sedan cars in Bangalore - Swift Dzire, Etios, Honda City. Perfect for airport transfers and city travel at affordable rates." />} />
            <Route path="/suv-rental" element={<GenericPage title="SUV Cab Rental" description="Spacious SUVs for family trips" content="Book SUV cabs in Bangalore - Innova, Ertiga, XUV500. Ideal for family trips and outstation travel with luggage space." />} />
            <Route path="/charges" element={<GenericPage title="Cab Charges" description="Transparent pricing for all services" content="Bangalore Cabs offers transparent pricing with no hidden charges. Sedan starts at ₹12/km, SUV at ₹18/km. Package deals available." />} />
            <Route path="/testimonials" element={<GenericPage title="Customer Reviews" description="What our customers say about us" content="Read testimonials from our satisfied customers across Bangalore. 4.8+ rating with 10,000+ happy customers served." />} />
            <Route path="/offers" element={<GenericPage title="Offers & Discounts" description="Special deals on cab bookings" content="Check our latest offers and discount coupons. First ride discount, referral bonus, and seasonal offers available." />} />
            <Route path="/driver-guidelines" element={<GenericPage title="Driver Guidelines" description="Standards our drivers follow" content="All our drivers are verified, trained, and follow strict guidelines. Background checked, courteous behavior, and safety protocols." />} />
            <Route path="/blog" element={<GenericPage title="Blog" description="Travel tips and updates" content="Read our blog for travel tips, destination guides, and company updates. Stay informed about Bangalore travel." />} />
            <Route path="/terms" element={<GenericPage title="Terms & Conditions" description="Service terms and policies" content="Read our terms and conditions for using Bangalore Cabs services. Booking policies, cancellation terms, and user responsibilities." />} />
            <Route path="/privacy" element={<GenericPage title="Privacy Policy" description="How we protect your data" content="Your privacy is important to us. Learn how we collect, use, and protect your personal information in compliance with data protection laws." />} />
            <Route path="/refund" element={<GenericPage title="Refund & Cancellation Policy" description="Cancellation terms and refund process" content="Free cancellation up to 6 hours before ride. Partial refund for cancellations within 6 hours. Refund processed in 5-7 business days." />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
