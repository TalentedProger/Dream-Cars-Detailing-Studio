import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Star } from "lucide-react";

const base = import.meta.env.BASE_URL;
const yandexReviewsUrl = "https://yandex.ru/maps/213/moscow/search/Dream%20Cars%20Studio%20%D0%B4%D0%B5%D1%82%D0%B5%D0%B9%D0%BB%D0%B8%D0%BD%D0%B3%20%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0/";

const reviews = [
  { name: "Александр Волков", car: "Mercedes-Benz S-Class", brand: "Mercedes-Benz", brandIcon: "mercedes.webp", photo: "mercedes-s-class.webp", photoAlt: "Mercedes-Benz S-Class в детейлинг-студии", photoPosition: "center 56%", text: "Отдавал машину на керамику и химчистку. Результат превзошел все ожидания. Цвет стал глубже, салон как из салона. Отличный сервис!" },
  { name: "Елена Морозова", car: "Range Rover Sport", brand: "Land Rover", brandIcon: "land-rover.webp", photo: "range-rover-sport.webp", photoAlt: "Range Rover Sport в детейлинг-студии", photoPosition: "center 58%", text: "Делали антихром и бронирование морды. Пленку вообще не видно, края заправлены идеально. Ребята настоящие профессионалы своего дела." },
  { name: "Дмитрий Ковалёв", car: "BMW X5", brand: "BMW", brandIcon: "bmw.webp", photo: "bmw-x5.webp", photoAlt: "BMW X5 в детейлинг-студии", photoPosition: "center 54%", text: "Спас мою машину после неудачной мойки. Вернули заводской блеск, убрали все паутинки. Теперь только к вам на обслуживание." },
  { name: "Игорь Тихонов", car: "Porsche Cayenne", brand: "Porsche", brandIcon: "porsche.webp", photo: "porsche-cayenne.webp", photoAlt: "Porsche Cayenne в детейлинг-студии", photoPosition: "center 56%", text: "Атмосфера в студии шикарная, подход к клиенту на высшем уровне. Делал комплексный детейлинг — машина выглядит лучше новой." },
];

export function Testimonials() {
  const reduceMotion = Boolean(useReducedMotion());
  const sectionRef = useRef<HTMLElement>(null);
  const isInteracting = useRef(false);
  const pauseUntil = useRef(0);
  const [isVisible, setIsVisible] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const pauseAfterManualScroll = () => { pauseUntil.current = Date.now() + 7000; };
  const scrollPrev = useCallback(() => { pauseAfterManualScroll(); emblaApi?.scrollPrev(); }, [emblaApi]);
  const scrollNext = useCallback(() => { pauseAfterManualScroll(); emblaApi?.scrollNext(); }, [emblaApi]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.2 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!emblaApi || !isVisible || reduceMotion) return;
    const timer = window.setInterval(() => {
      if (!isInteracting.current && !document.hidden && Date.now() > pauseUntil.current) emblaApi.scrollNext();
    }, 5000);
    return () => window.clearInterval(timer);
  }, [emblaApi, isVisible, reduceMotion]);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative isolate overflow-hidden py-24 text-white md:py-32"
      style={{ background: "radial-gradient(ellipse 68% 80% at 8% 12%, rgba(88,48,132,0.18), transparent 72%), radial-gradient(ellipse 55% 65% at 93% 86%, rgba(58,43,112,0.16), transparent 73%), linear-gradient(135deg, #070509 0%, #0d0911 50%, #040305 100%)" }}
      onMouseEnter={() => { isInteracting.current = true; }}
      onMouseLeave={() => { isInteracting.current = false; }}
      onFocusCapture={() => { isInteracting.current = true; }}
      onBlurCapture={(event) => { if (!(event.relatedTarget instanceof Node) || !event.currentTarget.contains(event.relatedTarget)) isInteracting.current = false; }}
      onPointerDown={(event) => { if (event.pointerType !== "mouse") isInteracting.current = true; }}
      onPointerUp={(event) => { if (event.pointerType !== "mouse") { isInteracting.current = false; pauseUntil.current = Date.now() + 7000; } }}
    >
      <div aria-hidden="true" className="performance-glow pointer-events-none absolute -left-40 top-12 h-[570px] w-[570px] rounded-full bg-[#a56dd7]/[0.08] blur-[125px]" />
      <div aria-hidden="true" className="performance-glow pointer-events-none absolute -right-40 bottom-0 h-[620px] w-[620px] rounded-full bg-[#7460c8]/[0.1] blur-[145px]" />

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="mb-11 flex flex-col justify-between gap-7 md:mb-14 md:flex-row md:items-end">
          <motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: reduceMotion ? 0 : 0.65 }}>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.7rem)] font-semibold leading-none tracking-[-0.06em]">Отзывы <span className="text-white">клиентов</span></h2>
            <p className="mt-5 max-w-md text-sm leading-6 text-white/55 md:max-w-none md:whitespace-nowrap md:text-base">Что говорят владельцы автомобилей после работы нашей команды.</p>
          </motion.div>

          <div className="hidden items-center gap-2 self-end md:flex md:self-auto">
            <button type="button" onClick={scrollPrev} aria-label="Предыдущий отзыв" className="flex h-10 w-10 items-center justify-center border border-white/15 bg-white/[0.035] text-white/70 transition-colors hover:border-[#b78ae8]/70 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#cba7f2] md:h-11 md:w-11"><ArrowLeft className="h-5 w-5" aria-hidden="true" /></button>
            <button type="button" onClick={scrollNext} aria-label="Следующий отзыв" className="flex h-10 w-10 items-center justify-center border border-white/15 bg-white/[0.035] text-white/70 transition-colors hover:border-[#b78ae8]/70 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#cba7f2] md:h-11 md:w-11"><ArrowRight className="h-5 w-5" aria-hidden="true" /></button>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: reduceMotion ? 0 : 0.7 }} ref={emblaRef} className="overflow-hidden" role="region" aria-roledescription="карусель" aria-label="Отзывы клиентов" aria-live="off">
          <div className="flex gap-4 md:gap-5">
            {reviews.map((review, index) => (
              <div key={review.name} className="min-w-0 flex-[0_0_100%] md:flex-[0_0_calc(50%-10px)] xl:flex-[0_0_calc(33.333%-14px)]" role="group" aria-roledescription="слайд" aria-label={`${index + 1} из ${reviews.length}`}>
                <article className="relative flex h-full min-h-[585px] flex-col overflow-hidden rounded-[24px] bg-[linear-gradient(160deg,#15111b,#0d0a10_58%,#070609)] p-7 shadow-[0_22px_55px_rgba(0,0,0,0.13)] md:p-8">
                  <img
                    src={`${base}cars/${review.photo}`}
                    alt={review.photoAlt}
                    loading="lazy"
                    decoding="async"
                    className="pointer-events-none absolute left-0 top-1/2 h-auto w-full -translate-y-1/2 object-contain opacity-95 [mask-image:linear-gradient(to_bottom,transparent_0%,transparent_12%,black_32%,black_76%,transparent_97%,transparent_100%)]"
                    style={{ objectPosition: review.photoPosition }}
                  />
                  <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_72%_58%_at_50%_58%,transparent_42%,rgba(4,3,7,0.24)_100%)] shadow-[inset_0_0_72px_rgba(0,0,0,0.18)]" />
                  <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[48%] bg-gradient-to-b from-[#1d1725] via-[#1b1522]/90 to-transparent" />
                  <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-[#100d15] via-[#100d15]/85 to-transparent" />

                  <div className="relative z-10 flex items-center justify-between gap-4">
                    <div className="flex gap-1 text-[#b78ae8]" aria-label="Оценка: 5 из 5">
                      {Array.from({ length: 5 }, (_, star) => <Star key={star} className="h-4 w-4 fill-current" aria-hidden="true" />)}
                    </div>
                    <a href={yandexReviewsUrl} target="_blank" rel="noopener noreferrer" aria-label="Открыть отзывы Dream Cars в Яндекс Картах" className="group flex h-9 w-9 items-center justify-center rounded-xl border border-[#b78ae8]/70 bg-[#8b5cf6] text-white shadow-[0_8px_24px_rgba(86,36,150,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d8bdf7] hover:bg-[#9f75ff] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#cba7f2]">
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                    </a>
                  </div>
                  <p className="relative z-10 mt-6 min-h-[150px] text-[15px] leading-[1.65] text-white/85">«{review.text}»</p>

                  <div aria-hidden="true" className="relative mt-auto h-[195px] shrink-0 md:h-[210px]" />

                  <div className="relative z-10 flex items-center justify-between gap-4 pt-5">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-white">{review.name}</h3>
                      <p className="mt-0.5 text-sm text-[#bda3d8]">{review.car}</p>
                    </div>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] border border-white/70 bg-white/95 p-1 shadow-[0_7px_20px_rgba(0,0,0,0.13)]" aria-label={review.brand}>
                      <img src={`${base}brand-logos/${review.brandIcon}`} alt="" aria-hidden="true" loading="lazy" className="h-full w-full object-contain" />
                    </span>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-5 flex items-center justify-end gap-2 md:hidden">
          <button type="button" onClick={scrollPrev} aria-label="Предыдущий отзыв" className="flex h-11 w-11 items-center justify-center border border-white/15 bg-white/[0.035] text-white/70 transition-colors active:border-[#b78ae8]/70 active:text-white"><ArrowLeft className="h-5 w-5" aria-hidden="true" /></button>
          <button type="button" onClick={scrollNext} aria-label="Следующий отзыв" className="flex h-11 w-11 items-center justify-center border border-white/15 bg-white/[0.035] text-white/70 transition-colors active:border-[#b78ae8]/70 active:text-white"><ArrowRight className="h-5 w-5" aria-hidden="true" /></button>
        </div>

      </div>
    </section>
  );
}
