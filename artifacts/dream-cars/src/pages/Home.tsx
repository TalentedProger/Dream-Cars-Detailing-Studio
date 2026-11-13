import { Hero } from "@/components/sections/Hero";
import { Suspense, lazy, useEffect, useRef, useState, type ReactNode } from "react";
import { usePageMeta } from "@/hooks/use-page-meta";

// Lazy load non-critical sections to improve initial load time
const Services = lazy(() => import("@/components/sections/Services").then(module => ({ default: module.Services })));
const WhyUs = lazy(() => import("@/components/sections/WhyUs").then(module => ({ default: module.WhyUs })));
const Portfolio = lazy(() => import("@/components/sections/Portfolio").then(module => ({ default: module.Portfolio })));
const HowItWorks = lazy(() => import("@/components/sections/HowItWorks").then(module => ({ default: module.HowItWorks })));
const Testimonials = lazy(() => import("@/components/sections/Testimonials").then(module => ({ default: module.Testimonials })));
const Contact = lazy(() => import("@/components/sections/Contact").then(module => ({ default: module.Contact })));
const Footer = lazy(() => import("@/components/sections/Footer").then(module => ({ default: module.Footer })));

function DeferredSection({ name, minHeight, children }: { name: string; minHeight: string; children: ReactNode }) {
  const anchorRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const anchor = anchorRef.current;
    if (!anchor) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: "900px 0px" },
    );
    observer.observe(anchor);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={anchorRef} data-deferred-section={name} style={shouldRender ? undefined : { minHeight }}>
      {shouldRender ? <Suspense fallback={<div style={{ minHeight }} aria-hidden="true" />}>{children}</Suspense> : null}
    </div>
  );
}

export default function Home() {
  usePageMeta({
    title: "Dream Cars Studio — Профессиональный детейлинг автомобилей",
    description: "Dream Cars Studio — премиум детейлинг студия. Полировка кузова, керамическое покрытие, PPF-плёнка, химчистка салона. Professional car detailing: ceramic coating, PPF, paint polishing.",
    keywords: "детейлинг студия, полировка автомобиля, керамическое покрытие, PPF плёнка, химчистка салона, car detailing studio, ceramic coating",
    canonicalPath: "/",
  });
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Hero />
      <Suspense fallback={<div className="min-h-[70vh] bg-white" aria-hidden="true" />}><Services /></Suspense>
      <DeferredSection name="about" minHeight="900px"><WhyUs /></DeferredSection>
      <DeferredSection name="portfolio" minHeight="900px"><Portfolio /></DeferredSection>
      <DeferredSection name="process" minHeight="850px"><HowItWorks /></DeferredSection>
      <DeferredSection name="testimonials" minHeight="850px"><Testimonials /></DeferredSection>
      <DeferredSection name="contact" minHeight="850px"><Contact /></DeferredSection>
      <Suspense fallback={<div className="min-h-[420px] bg-[#080808]" aria-hidden="true" />}><Footer /></Suspense>
    </main>
  );
}
