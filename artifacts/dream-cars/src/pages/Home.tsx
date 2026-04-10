import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Suspense, lazy } from "react";
import { usePageMeta } from "@/hooks/use-page-meta";

// Lazy load non-critical sections to improve initial load time
const Services = lazy(() => import("@/components/sections/Services").then(module => ({ default: module.Services })));
const WhyUs = lazy(() => import("@/components/sections/WhyUs").then(module => ({ default: module.WhyUs })));
const Portfolio = lazy(() => import("@/components/sections/Portfolio").then(module => ({ default: module.Portfolio })));
const HowItWorks = lazy(() => import("@/components/sections/HowItWorks").then(module => ({ default: module.HowItWorks })));
const Testimonials = lazy(() => import("@/components/sections/Testimonials").then(module => ({ default: module.Testimonials })));
const Pricing = lazy(() => import("@/components/sections/Pricing").then(module => ({ default: module.Pricing })));
const Contact = lazy(() => import("@/components/sections/Contact").then(module => ({ default: module.Contact })));
const Footer = lazy(() => import("@/components/sections/Footer").then(module => ({ default: module.Footer })));
const FloatingSocials = lazy(() => import("@/components/FloatingSocials").then(module => ({ default: module.FloatingSocials })));
const BookingModal = lazy(() => import("@/components/BookingModal").then(module => ({ default: module.BookingModal })));

export default function Home() {
  usePageMeta({
    title: "Dream Cars Studio — Профессиональный детейлинг автомобилей",
    description: "Dream Cars Studio — премиум детейлинг студия. Полировка кузова, керамическое покрытие, PPF-плёнка, химчистка салона. Professional car detailing: ceramic coating, PPF, paint polishing.",
    keywords: "детейлинг студия, полировка автомобиля, керамическое покрытие, PPF плёнка, химчистка салона, car detailing studio, ceramic coating",
    canonicalPath: "/",
  });
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="min-h-[50vh]" />}>
        <Services />
        <WhyUs />
        <Portfolio />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <Contact />
        <Footer />
        <FloatingSocials />
        <BookingModal />
      </Suspense>
    </main>
  );
}
