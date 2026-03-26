import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Suspense, lazy } from "react";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import { BookingProvider } from "@/contexts/BookingContext";

// Lazy load route pages
const ServicesPage = lazy(() => import("@/pages/ServicesPage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const PortfolioPage = lazy(() => import("@/pages/PortfolioPage"));
const PricingPage = lazy(() => import("@/pages/PricingPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

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
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BookingProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
        </BookingProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
