import { Switch, Route, Router as WouterRouter } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { Suspense, lazy, useEffect } from "react";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import { BookingProvider, useBooking } from "@/contexts/BookingContext";

// Lazy load route pages
const ServicesPage = lazy(() => import("@/pages/ServicesPage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const PortfolioPage = lazy(() => import("@/pages/PortfolioPage"));
const PricingPage = lazy(() => import("@/pages/PricingPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const BookingModal = lazy(() => import("@/components/BookingModal").then(module => ({ default: module.BookingModal })));

function GlobalBookingModal() {
  const { isOpen } = useBooking();
  return isOpen ? <Suspense fallback={null}><BookingModal /></Suspense> : null;
}

function Router() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen bg-background" />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route path="/pricing" component={PricingPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  useEffect(() => {
    const preventGesture = (event: Event) => event.preventDefault();
    document.addEventListener("gesturestart", preventGesture, { passive: false });
    document.addEventListener("gesturechange", preventGesture, { passive: false });
    return () => {
      document.removeEventListener("gesturestart", preventGesture);
      document.removeEventListener("gesturechange", preventGesture);
    };
  }, []);

  return (
    <BookingProvider>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
      <GlobalBookingModal />
      <Toaster />
    </BookingProvider>
  );
}

export default App;
