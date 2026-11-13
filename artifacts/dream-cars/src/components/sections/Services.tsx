import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

const base = import.meta.env.BASE_URL;
const photoClipPath = "polygon(14px 0, calc(100% - 14px) 0, 100% 14px, 100% calc(100% - 14px), calc(100% - 14px) 100%, 14px 100%, 0 calc(100% - 14px), 0 14px)";

type ServiceEffectName = "polish" | "ceramic" | "film" | "interior" | "engine" | "headlight";

const services: { title: string; detail: string; price: string; image: string; effect: ServiceEffectName; imagePosition?: string; cutout?: boolean; edgeAligned?: boolean; softTopFade?: boolean }[] = [
  { title: "Полировка кузова", detail: "Возвращаем глубину цвета", price: "от 15 000 ₽", image: `${base}services/polishing-kit.webp`, effect: "polish", cutout: true },
  { title: "Керамическое покрытие", detail: "Блеск и защита ЛКП", price: "от 25 000 ₽", image: `${base}services/ceramic-detailing.webp`, effect: "ceramic", cutout: true, edgeAligned: true },
  { title: "Антигравийная плёнка", detail: "Защищаем зоны риска и кузов", price: "от 30 000 ₽", image: `${base}services/film-tools.webp`, effect: "film", cutout: true },
  { title: "Химчистка салона", detail: "Уход за каждой деталью", price: "от 10 000 ₽", image: `${base}services/detailing-tools.webp`, effect: "interior", cutout: true },
  { title: "Детейлинг двигателя", detail: "Чистота под капотом", price: "от 5 000 ₽", image: `${base}services/engine-steam-cutout.webp`, effect: "engine", cutout: true, edgeAligned: true },
  { title: "Реставрация фар", detail: "Прозрачность и защита", price: "от 4 000 ₽", image: `${base}services/headlight-kit.webp`, effect: "headlight", cutout: true },
];

const photos = [
  { src: `${base}our_work/wrapping_with_film.webp`, alt: "Мастера оклеивают красный автомобиль защитной плёнкой", label: "Защищаем", className: "row-span-2" },
  { src: `${base}our_work/polishing_ceramics.webp`, alt: "Мастер полирует кузов чёрного автомобиля", label: "Восстанавливаем", className: "" },
  { src: `${base}our_work/Interior_detailing.webp`, alt: "Мастер очищает кожаный салон автомобиля", label: "Заботимся о деталях", className: "" },
];

function ServiceEffect({ name }: { name: ServiceEffectName }) {
  if (name === "polish") {
    return <span aria-hidden="true" className="service-polish-effect pointer-events-none absolute inset-y-0 -left-[45%] z-[4] w-[38%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.38),transparent)] blur-md" />;
  }

  if (name === "ceramic") {
    return <span aria-hidden="true" className="service-ceramic-saturation pointer-events-none absolute inset-0 z-[4] rounded-[24px] bg-[radial-gradient(circle_at_0%_100%,rgba(150,84,255,0.15)_0%,rgba(126,62,220,0.06)_34%,transparent_66%)] backdrop-saturate-[1.35] [mask-image:radial-gradient(circle_at_0%_100%,black_0%,rgba(0,0,0,0.72)_34%,transparent_66%)]" />;
  }

  if (name === "film") {
    return (
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 z-[4] overflow-hidden rounded-[24px] opacity-65">
        <span className="absolute -inset-[35%] rotate-[18deg] bg-[linear-gradient(115deg,transparent_30%,rgba(255,255,255,0.16)_43%,rgba(174,129,255,0.3)_49%,rgba(116,210,255,0.13)_55%,transparent_68%)]" />
      </span>
    );
  }

  if (name === "interior") {
    return (
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 z-[4] text-white">
        <span className="service-glint-effect absolute left-[16%] top-[37%] text-3xl opacity-70">✦</span>
        <span className="service-glint-effect absolute right-[13%] top-[44%] text-xl opacity-55 [animation-delay:-1.2s]">✦</span>
        <span className="service-glint-effect absolute bottom-[24%] left-[43%] text-base text-[#d9c6ff] opacity-60 [animation-delay:-2.1s]">✦</span>
        <span className="service-glint-effect absolute right-[28%] top-[31%] text-sm opacity-50 [animation-delay:-0.7s]">✦</span>
        <span className="service-glint-effect absolute bottom-[34%] left-[11%] text-lg text-[#e5d8ff] opacity-55 [animation-delay:-1.7s]">✦</span>
        <span className="service-glint-effect absolute bottom-[18%] right-[14%] text-xs opacity-55 [animation-delay:-2.7s]">✦</span>
        <span className="service-clean-line absolute left-[16%] right-[16%] top-1/2 h-px bg-gradient-to-r from-transparent via-white/55 to-transparent blur-[1px]" />
      </span>
    );
  }

  if (name === "engine") {
    return (
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 z-[6] mix-blend-screen">
        <span className="service-steam-effect absolute bottom-[25%] left-[17%] h-32 w-12 -rotate-6 rounded-full bg-[linear-gradient(to_top,transparent,rgba(239,234,255,0.72),transparent)] blur-md" />
        <span className="service-steam-effect absolute bottom-[21%] left-[39%] h-36 w-14 rotate-6 rounded-full bg-[linear-gradient(to_top,transparent,rgba(215,200,255,0.68),transparent)] blur-md [animation-delay:-1.5s]" />
        <span className="service-steam-effect absolute bottom-[24%] right-[14%] h-28 w-11 -rotate-3 rounded-full bg-[linear-gradient(to_top,transparent,rgba(246,242,255,0.66),transparent)] blur-[6px] [animation-delay:-2.6s]" />
        <span className="service-steam-effect absolute bottom-[18%] right-[35%] h-24 w-9 rotate-3 rounded-full bg-[linear-gradient(to_top,transparent,rgba(195,170,255,0.62),transparent)] blur-[6px] [animation-delay:-3.3s]" />
      </span>
    );
  }

  return (
    <span aria-hidden="true" className="pointer-events-none absolute inset-0 z-[4]">
      <span className="service-headlight-effect absolute left-[38%] top-[45%] h-24 w-24 rounded-full bg-[#ffd36b]/48 opacity-90 blur-2xl" />
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_49%_54%,rgba(255,222,145,0.2),rgba(255,206,103,0.08)_28%,transparent_58%)]" />
    </span>
  );
}

export function Services() {
  const reduceMotion = Boolean(useReducedMotion());
  const sectionRef = useRef<HTMLElement>(null);
  const [effectsActive, setEffectsActive] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => setEffectsActive(entry.isIntersecting),
      { rootMargin: "160px 0px", threshold: 0.01 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="services" className={`${effectsActive ? "services-effects-active" : ""} relative overflow-hidden bg-white pb-0 pt-20 text-[#1b1722] md:pb-0 md:pt-28`}>
      <div className="performance-glow pointer-events-none absolute -left-36 top-12 h-[520px] w-[520px] rounded-full bg-[#6d28d9]/10 blur-[120px]" />
      <div className="performance-glow pointer-events-none absolute -right-48 top-[38%] h-[620px] w-[620px] rounded-full bg-[#a875ff]/[0.08] blur-[145px]" />

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid items-end gap-0 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-10 xl:gap-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: reduceMotion ? 0 : 0.4 }} className="mb-12 lg:mb-0 lg:pb-8">
            <motion.div initial={{ opacity: 0, x: reduceMotion ? 0 : -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: reduceMotion ? 0 : 0.65, delay: reduceMotion ? 0 : 0.1 }} className="mb-7 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.26em] text-[#8d63b8]">
              <span className="h-px w-9 bg-[#a875ff]" />
              Наши услуги / Dream Cars
            </motion.div>
            <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={{ hidden: { opacity: 1 }, show: { opacity: 1, transition: { staggerChildren: reduceMotion ? 0 : 0.14, delayChildren: reduceMotion ? 0 : 0.16 } } }} className="max-w-[720px] font-display text-[clamp(2.7rem,5.25vw,5.6rem)] font-semibold uppercase leading-[0.86] tracking-[-0.07em]">
              <span className="block overflow-hidden pb-[0.04em]">
                <motion.span className="block" variants={{ hidden: { y: reduceMotion ? 0 : "110%" }, show: { y: 0, transition: { duration: reduceMotion ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] } } }}>Автомобиль</motion.span>
              </span>
              <span className="mt-[0.08em] block overflow-hidden pb-[0.04em] pt-[0.12em] text-[0.72em] tracking-[-0.045em] text-[#8f5ec5]">
                <motion.span className="block whitespace-nowrap" style={{ wordSpacing: "0.12em" }} variants={{ hidden: { y: reduceMotion ? 0 : "110%" }, show: { y: 0, transition: { duration: reduceMotion ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] } } }}>в лучшей форме</motion.span>
              </span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: reduceMotion ? 0 : 0.75, delay: reduceMotion ? 0 : 0.5 }} className="mt-7 max-w-md text-lg font-medium leading-relaxed text-[#1b1722]/70 md:text-xl">
              От защиты кузова до ухода за салоном: подбираем решение под состояние автомобиля и отвечаем за каждую деталь результата.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : 18, scale: reduceMotion ? 1 : 0.96 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.64, ease: [0.22, 1, 0.36, 1] }} className="mt-12 hidden md:mt-14 lg:block">
              <Link href="/services" className="premium-cta inline-flex min-h-14 items-center gap-5 bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] px-6 py-4 text-sm font-bold uppercase tracking-[0.1em] text-white shadow-[0_12px_36px_-12px_rgba(139,92,246,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:from-[#9f75ff] hover:to-[#7c3aed] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c5a7ff]">
                Смотреть все услуги <span className="border-l border-white/35 pl-4"><ArrowUpRight className="h-5 w-5" aria-hidden="true" /></span>
              </Link>
            </motion.div>
          </motion.div>

          <div className="grid h-[380px] grid-cols-[1.1fr_0.9fr] grid-rows-2 gap-3.5 sm:h-[460px] lg:h-[540px] xl:h-[590px]">
            {photos.map((photo, index) => (
              <motion.div key={photo.src} initial={{ opacity: 0, x: reduceMotion ? 0 : index === 0 ? -24 : 24, y: reduceMotion ? 0 : 26, scale: reduceMotion ? 1 : 0.97 }} whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: reduceMotion ? 0 : 0.85, delay: reduceMotion ? 0 : 0.16 + index * 0.15, ease: [0.22, 1, 0.36, 1] }} className={`group relative min-h-0 ${photo.className}`}>
                <div aria-hidden="true" className="performance-glow pointer-events-none absolute -inset-16 bg-[#7c3aed]/[0.055] blur-[90px]" />
                <div aria-hidden="true" className="performance-glow pointer-events-none absolute -inset-20 bg-[#bca8d9]/[0.06] blur-[120px]" />
                <figure className="relative h-full w-full overflow-hidden bg-[#eeeaf3]" style={{ clipPath: photoClipPath }}>
                  <motion.img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" initial={{ scale: reduceMotion ? 1 : 1.12 }} whileInView={{ scale: 1 }} whileHover={{ scale: reduceMotion ? 1 : 1.04 }} viewport={{ once: true }} transition={{ duration: reduceMotion ? 0 : 1.2, delay: reduceMotion ? 0 : 0.15 + index * 0.15, ease: [0.22, 1, 0.36, 1] }} className="h-full w-full object-cover" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <figcaption className="premium-cta absolute bottom-3 left-3 max-w-[calc(100%-1.5rem)] bg-white/45 p-px shadow-[0_8px_24px_rgba(0,0,0,0.25)] sm:bottom-5 sm:left-5 sm:max-w-[calc(100%-2.5rem)]">
                    <span className="premium-cta block bg-black/45 px-2.5 py-2 text-[9px] font-bold uppercase leading-snug tracking-[0.12em] text-white backdrop-blur-[4px] sm:px-3.5 sm:py-2.5 sm:text-[11px]">{photo.label}</span>
                  </figcaption>
                  {!reduceMotion && <motion.div aria-hidden="true" className="pointer-events-none absolute inset-0 z-20 bg-white" style={{ clipPath: "polygon(0 0, 100% 0, 92% 100%, 0 100%)" }} initial={{ x: "0%" }} whileInView={{ x: "115%" }} viewport={{ once: true }} transition={{ duration: 1.15, delay: 0.14 + index * 0.15, ease: [0.22, 1, 0.36, 1] }} />}
                </figure>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 flex justify-center lg:hidden">
            <Link href="/services" className="premium-cta inline-flex min-h-14 items-center gap-5 bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] px-6 py-4 text-sm font-bold uppercase tracking-[0.1em] text-white shadow-[0_12px_36px_-12px_rgba(139,92,246,0.7)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c5a7ff]">
              Смотреть все услуги <span className="border-l border-white/35 pl-4"><ArrowUpRight className="h-5 w-5" aria-hidden="true" /></span>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative left-1/2 z-10 mt-10 w-screen -translate-x-1/2 border-y border-[#b68aff]/55 bg-[linear-gradient(112deg,#17101f_0%,#321948_28%,#6a2eb0_62%,#281238_100%)] py-5 md:mt-28 md:py-7">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: reduceMotion ? 0 : 0.75, delay: reduceMotion ? 0 : 0.12 }}
          className="services-marquee overflow-hidden"
          aria-label="Направления услуг"
        >
          <div className="services-marquee-track flex w-max">
            {[0, 1].map((copyIndex) => (
              <div key={copyIndex} className="flex shrink-0 gap-4 pr-4 sm:gap-[22px] sm:pr-[22px]" aria-hidden={copyIndex === 1 ? "true" : undefined}>
                {services.map((service) => (
                  <div key={`${copyIndex}-${service.title}`} className="w-[52.5vw] max-w-[223px] shrink-0 sm:w-[288px] sm:max-w-[297px] lg:w-[315px] lg:max-w-none">
                    <Link
                      href="/services"
                      tabIndex={copyIndex === 1 ? -1 : undefined}
                      className="service-marquee-card group relative block h-[263px] overflow-hidden rounded-[18px] border border-white/[0.12] bg-white/[0.06] transition-colors duration-500 hover:border-white/25 hover:bg-white/[0.075] sm:h-[385px] sm:rounded-[24px] md:backdrop-blur-[24px] lg:h-[420px]"
                      aria-label={`${service.title}, ${service.price}. Подробнее об услуге`}
                    >
                      <span className={service.edgeAligned ? "absolute bottom-0 left-0 block h-[79%] w-[110%]" : "absolute left-1/2 top-1/2 block h-[58%] w-[84%] -translate-x-1/2 -translate-y-1/2"}>
                        <img
                          src={service.image}
                          alt=""
                          aria-hidden="true"
                          loading="lazy"
                          decoding="async"
                          className={`h-full w-full transition-[filter] duration-700 group-hover:brightness-110 ${service.cutout ? `object-contain ${service.edgeAligned ? "object-left-bottom" : "object-center"}` : "object-cover opacity-90"}`}
                          style={service.cutout ? undefined : { objectPosition: service.imagePosition }}
                        />
                      </span>
                      <ServiceEffect name={service.effect} />
                      {service.softTopFade && <span className="pointer-events-none absolute inset-x-0 top-0 z-[5] h-[38%] bg-[linear-gradient(to_bottom,rgba(10,5,15,0.78)_0%,rgba(16,8,24,0.42)_58%,transparent_100%)] backdrop-blur-[5px] [mask-image:linear-gradient(to_bottom,black_0%,black_62%,transparent_100%)]" />}
                      <span className="absolute left-5 top-5 z-10 max-w-[calc(100%-2.5rem)]">
                        <span className="block font-display text-xl font-light leading-[1.08] tracking-[-0.025em] text-white md:text-[1.35rem]">{service.title}</span>
                        <span className="mt-2 block whitespace-nowrap text-[10px] font-normal tracking-[0.01em] text-white/55 sm:text-[11px]">{service.detail}</span>
                      </span>
                      <span className="absolute bottom-5 right-5 z-10 border border-white/25 bg-black/20 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-md">{service.price}</span>
                    </Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

    </section>
  );
}
