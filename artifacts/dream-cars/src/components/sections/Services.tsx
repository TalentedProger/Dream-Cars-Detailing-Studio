import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "wouter";

const base = import.meta.env.BASE_URL;
const photoClipPath = "polygon(14px 0, calc(100% - 14px) 0, 100% 14px, 100% calc(100% - 14px), calc(100% - 14px) 100%, 14px 100%, 0 calc(100% - 14px), 0 14px)";

type ServiceIconName = "polish" | "ceramic" | "film" | "interior" | "engine" | "headlight";

const services: { icon: ServiceIconName; title: string; detail: string; price: string }[] = [
  { icon: "polish", title: "Полировка кузова", detail: "Убираем следы времени, возвращаем глубину цвета", price: "от 15 000 ₽" },
  { icon: "ceramic", title: "Керамическое покрытие", detail: "Блеск и защита лакокрасочного покрытия", price: "от 25 000 ₽" },
  { icon: "film", title: "Антигравийная плёнка", detail: "Защищаем зоны риска или весь кузов", price: "от 30 000 ₽" },
  { icon: "interior", title: "Химчистка салона", detail: "Заботимся о коже, ткани и каждой детали", price: "от 10 000 ₽" },
  { icon: "engine", title: "Детейлинг двигателя", detail: "Бережно очищаем подкапотное пространство", price: "от 5 000 ₽" },
  { icon: "headlight", title: "Реставрация фар", detail: "Возвращаем прозрачность и защищаем результат", price: "от 4 000 ₽" },
];

const photos = [
  { src: `${base}our_work/wrapping_with_film.jpg`, alt: "Мастера оклеивают красный автомобиль защитной плёнкой", label: "Защищаем", className: "row-span-2" },
  { src: `${base}our_work/polishing_ceramics.jpg`, alt: "Мастер полирует кузов чёрного автомобиля", label: "Восстанавливаем", className: "" },
  { src: `${base}our_work/Interior_detailing.jpg`, alt: "Мастер очищает кожаный салон автомобиля", label: "Заботимся о деталях", className: "" },
];

function ServiceIcon({ name }: { name: ServiceIconName }) {
  const drawing = {
    polish: <><circle cx="24" cy="25" r="10" /><circle cx="24" cy="25" r="5.5" /><path d="M10 25a14 14 0 0 1 14-14M33 13l2-5m-2 5 5 2M12 10l1.3 3.2L16.5 14l-3.2 1.3L12 18.5l-1.3-3.2L7.5 14l3.2-.8L12 10ZM38 29l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1 1-2.5Z" /></>,
    ceramic: <><path d="M24 6 38 12v11c0 9-5.8 15.3-14 19-8.2-3.7-14-10-14-19V12L24 6Z" /><path d="M24 13c3.8 5.4 7 9.5 7 13a7 7 0 0 1-14 0c0-3.5 3.2-7.6 7-13Z" /><path d="M19 27a5 5 0 0 0 5 5M33 9l2-4m-2 4 4 2" /></>,
    film: <><path d="M10 10h19l9 9v19H10V10Z" /><path d="M29 10v9h9M15 30l14-14M15 36l19-19" /><path d="m9 8 5-3m-5 3 5 3M33 33l3-1 1-3" /></>,
    interior: <><path d="M14 13c0-3 2-5 5-5h4c3 0 5 2 5 5v12H14V13ZM14 25h15c4 0 7 3 7 7v4H12v-7c0-2 1-4 2-4Z" /><path d="M16 36v5m18-5v5M19 13v8m5-8v8M9 19l2-5 2 5 5 2-5 2-2 5-2-5-5-2 5-2Z" /></>,
    engine: <><path d="M12 17h21v19H12V17ZM17 12v5m10-5v5M17 36v5m10-5v5M12 22H7m5 8H7m26-8h6m-6 8h6" /><path d="m20 30 4-8 4 8-4-2-4 2ZM17 12h10" /></>,
    headlight: <><path d="M7 29c6-11 17-16 34-12l-3 16c-12 4-22 2-31-4Z" /><path d="M15 26c6-5 12-7 20-6M16 30c7 3 12 4 19 1M10 17l-3-3m5 0-1-5m25 29 3 3" /><circle cx="30" cy="26" r="3" /></>,
  } satisfies Record<ServiceIconName, ReactNode>;

  return (
    <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden border border-white/10 bg-[#151219] text-white/60 transition-colors group-hover:border-[#a875ff]/55 group-hover:bg-[#1d1725] group-hover:text-[#c9adff] sm:h-11 sm:w-11" style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)" }}>
      <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {drawing[name]}
      </svg>
    </span>
  );
}

export function Services() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section id="services" className="relative overflow-hidden bg-white py-20 text-[#1b1722] md:py-28">
      <div className="pointer-events-none absolute -left-36 top-12 h-[520px] w-[520px] rounded-full bg-[#6d28d9]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-48 top-[38%] h-[620px] w-[620px] rounded-full bg-[#a875ff]/[0.08] blur-[145px]" />
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-10 xl:gap-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: reduceMotion ? 0 : 0.4 }}
            className="lg:pb-8"
          >
            <motion.div
              initial={{ opacity: 0, x: reduceMotion ? 0 : -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0 : 0.65, delay: reduceMotion ? 0 : 0.1 }}
              className="mb-7 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.26em] text-[#ba9cff]"
            >
              <span className="h-px w-9 bg-[#a875ff]" />
              Наши услуги / Dream Cars
            </motion.div>
            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={{
                hidden: { opacity: 1 },
                show: { opacity: 1, transition: { staggerChildren: reduceMotion ? 0 : 0.14, delayChildren: reduceMotion ? 0 : 0.16 } },
              }}
              className="max-w-[720px] font-display text-[clamp(2.7rem,5.25vw,5.6rem)] font-semibold uppercase leading-[0.86] tracking-[-0.07em]"
            >
              <span className="block overflow-hidden pb-[0.04em]">
                <motion.span
                  className="block"
                  variants={{
                    hidden: { y: reduceMotion ? 0 : "110%" },
                    show: { y: 0, transition: { duration: reduceMotion ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] } },
                  }}
                >Автомобиль</motion.span>
              </span>
              <span className="mt-[0.08em] block overflow-hidden pt-[0.12em] pb-[0.04em] text-[0.72em] tracking-[-0.045em] text-[#a875ff]">
                <motion.span
                  className="block whitespace-nowrap"
                  style={{ wordSpacing: "0.12em" }}
                  variants={{
                    hidden: { y: reduceMotion ? 0 : "110%" },
                    show: { y: 0, transition: { duration: reduceMotion ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] } },
                  }}
                >в лучшей форме</motion.span>
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0 : 0.75, delay: reduceMotion ? 0 : 0.5 }}
              className="mt-7 max-w-md text-lg font-medium leading-relaxed text-[#1b1722]/70 md:text-xl"
            >
              От защиты кузова до ухода за салоном: подбираем решение под состояние автомобиля и отвечаем за каждую деталь результата.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: reduceMotion ? 0 : 18, scale: reduceMotion ? 1 : 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.64, ease: [0.22, 1, 0.36, 1] }}
              className="mt-12 md:mt-14"
            >
              <Link
                href="/services"
                className="premium-cta inline-flex min-h-14 items-center gap-5 bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] px-6 py-4 text-sm font-bold uppercase tracking-[0.1em] text-white shadow-[0_12px_36px_-12px_rgba(139,92,246,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:from-[#9f75ff] hover:to-[#7c3aed] hover:shadow-[0_16px_42px_-12px_rgba(139,92,246,0.9)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c5a7ff]"
              >
                Смотреть все услуги <span className="border-l border-white/35 pl-4"><ArrowUpRight className="h-5 w-5" aria-hidden="true" /></span>
              </Link>
            </motion.div>
          </motion.div>

          <div className="grid h-[380px] grid-cols-[1.1fr_0.9fr] grid-rows-2 gap-3.5 sm:h-[460px] lg:h-[540px] xl:h-[590px]">
            {photos.map((photo, index) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, x: reduceMotion ? 0 : index === 0 ? -24 : 24, y: reduceMotion ? 0 : 26, scale: reduceMotion ? 1 : 0.97 }}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: reduceMotion ? 0 : 0.85, delay: reduceMotion ? 0 : 0.16 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative min-h-0 ${photo.className}`}
              >
                <div aria-hidden="true" className="pointer-events-none absolute -inset-16 bg-[#7c3aed]/[0.055] blur-[90px]" />
                <div aria-hidden="true" className="pointer-events-none absolute -inset-20 bg-[#bca8d9]/[0.06] blur-[120px]" />
                <figure className="relative h-full w-full overflow-hidden bg-[#eeeaf3]" style={{ clipPath: photoClipPath }}>
                  <motion.img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    decoding="async"
                    initial={{ scale: reduceMotion ? 1 : 1.12 }}
                    whileInView={{ scale: 1 }}
                    whileHover={{ scale: reduceMotion ? 1 : 1.04 }}
                    viewport={{ once: true }}
                    transition={{ duration: reduceMotion ? 0 : 1.2, delay: reduceMotion ? 0 : 0.15 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <figcaption className="premium-cta absolute bottom-3 left-3 max-w-[calc(100%-1.5rem)] border border-white/30 bg-black/25 px-2.5 py-2 text-[9px] font-bold uppercase leading-snug tracking-[0.12em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_8px_24px_rgba(0,0,0,0.25)] backdrop-blur-[4px] sm:bottom-5 sm:left-5 sm:max-w-[calc(100%-2.5rem)] sm:px-3.5 sm:py-2.5 sm:text-[11px]">
                    {photo.label}
                  </figcaption>
                  {!reduceMotion && (
                    <motion.div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 z-20 bg-white"
                      style={{ clipPath: "polygon(0 0, 100% 0, 92% 100%, 0 100%)" }}
                      initial={{ x: "0%" }}
                      whileInView={{ x: "115%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.15, delay: 0.14 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </figure>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      <div className="relative left-1/2 mt-20 w-screen -translate-x-1/2 border-t border-[#1b1722]/10 pt-10 md:mt-28 md:pt-12">
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
              <div key={copyIndex} className="flex shrink-0" aria-hidden={copyIndex === 1 ? "true" : undefined}>
                {services.map((service) => (
                  <div key={`${copyIndex}-${service.title}`} className="w-[88vw] max-w-[410px] shrink-0 border-r border-[#1b1722]/10 px-6 sm:w-[390px] sm:px-8 lg:w-[420px] lg:max-w-none lg:px-10">
                    <Link
                      href="/services"
                      tabIndex={copyIndex === 1 ? -1 : undefined}
                      className="group flex min-h-[250px] flex-col items-start border-t border-[#1b1722]/12 bg-[#1b1722]/[0.018] px-7 py-7 transition-colors duration-300 hover:border-[#8b5cf6]/55 hover:bg-[#8b5cf6]/[0.045]"
                      aria-label={`${service.title}, ${service.price}. Подробнее об услуге`}
                    >
                      <span className="flex w-full items-start justify-between gap-4">
                        <ServiceIcon name={service.icon} />
                        <ArrowUpRight className="h-5 w-5 text-[#1b1722]/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#7c3aed]" aria-hidden="true" />
                      </span>
                      <span className="mt-5 block font-display text-xl font-semibold leading-tight transition-colors group-hover:text-[#7138c7] md:text-2xl">{service.title}</span>
                      <span className="mt-2 block text-sm leading-relaxed text-[#1b1722]/50">{service.detail}</span>
                      <span className="mt-auto inline-flex border border-[#1b1722]/15 px-3.5 py-2 text-sm font-semibold text-[#1b1722]/80 transition-colors group-hover:border-[#7c3aed]/45 group-hover:text-[#5f27ad]">{service.price}</span>
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
