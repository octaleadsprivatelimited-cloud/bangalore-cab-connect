import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Fleet from "./pages/Fleet";
import Services from "./pages/Services";
import BookCab from "./pages/BookCab";
import Contact from "./pages/Contact";
import GenericPage from "./pages/GenericPage";
import AirportTaxi from "./pages/AirportTaxi";
import LocalTaxi from "./pages/LocalTaxi";
import Outstation from "./pages/Outstation";
import CabCharges from "./pages/CabCharges";
import Testimonials from "./pages/Testimonials";
import Offers from "./pages/Offers";
import BlogListing from "./pages/BlogListing";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import RefundPolicy from "./pages/RefundPolicy";
import NotFound from "./pages/NotFound";
import { lazy, Suspense } from "react";
import RoutePageWrapper from "./pages/RoutePageWrapper";
const AllRoutes = lazy(() => import("./pages/AllRoutes"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/services" element={<Services />} />
            <Route path="/book" element={<BookCab />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Service Pages */}
            <Route path="/airport-taxi" element={<AirportTaxi />} />
            <Route path="/local-taxi" element={<LocalTaxi />} />
            <Route path="/outstation" element={<Outstation />} />
            <Route path="/charges" element={<CabCharges />} />
            <Route path="/corporate" element={<GenericPage title="Corporate Taxi Services" description="Monthly packages for businesses" content="Dedicated corporate cab services with monthly packages, GST invoices, and account managers. Ideal for employee transport and business travel." />} />
            <Route path="/wedding-cars" element={<GenericPage title="Wedding Car Rentals" description="Luxury cars for your special day" content="Premium wedding car rentals in Bangalore. Choose from luxury sedans, SUVs with decoration options. Make your wedding memorable with our professional service." />} />
            <Route path="/tempo-traveller" element={<GenericPage title="Tempo Traveller Rental" description="12-17 seater for group travel" content="Rent tempo traveller in Bangalore for group tours, family trips, and corporate outings. AC vehicles with comfortable push-back seats." />} />
            <Route path="/luxury-cars" element={<GenericPage title="Luxury Car Rental" description="Premium cars for VIP travel" content="Rent luxury cars like BMW, Mercedes, Audi in Bangalore. Professional chauffeur-driven service for corporate meetings and special occasions." />} />
            <Route path="/24x7-service" element={<GenericPage title="24/7 Taxi Service Bangalore" description="Round-the-clock cab availability" content="Always available taxi service in Bangalore. Late-night pickups, early morning drops, and emergency rides anytime you need." />} />
            
            {/* All Routes Listing Page */}
            <Route path="/all-routes" element={
              <Suspense fallback={
                <div className="flex items-center justify-center min-h-screen">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
              }>
                <AllRoutes />
              </Suspense>
            } />
            
            {/* Additional Pages */}
            <Route path="/city-tour" element={<GenericPage title="Bangalore City Tour" description="Explore Bangalore's attractions" content="Comprehensive Bangalore city tour packages. Visit Lalbagh, Cubbon Park, Bangalore Palace, ISKCON Temple, and more with our guided tours." />} />
            <Route path="/sedan-rental" element={<GenericPage title="Sedan Cab Rental" description="Comfortable sedans for city rides" content="Rent sedan cars in Bangalore - Swift Dzire, Etios, Honda City. Perfect for airport transfers and city travel at affordable rates." />} />
            <Route path="/suv-rental" element={<GenericPage title="SUV Cab Rental" description="Spacious SUVs for family trips" content="Book SUV cabs in Bangalore - Innova, Ertiga, XUV500. Ideal for family trips and outstation travel with luggage space." />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/driver-guidelines" element={<GenericPage title="Driver Guidelines" description="Standards our drivers follow" content="All our drivers are verified, trained, and follow strict guidelines. Background checked, courteous behavior, and safety protocols." />} />
            <Route path="/blog" element={<BlogListing />} />
            <Route path="/blog/:id" element={<GenericPage title="Blog Post" description="Read our latest article" content="Detailed blog content goes here." />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/refund" element={<RefundPolicy />} />
            
            {/* Dynamic Route Pages - Must be after all specific routes */}
            <Route path="/:slug" element={<RoutePageWrapper />} />
            
            {/* Catch-all route for truly invalid paths */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
