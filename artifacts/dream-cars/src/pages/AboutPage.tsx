import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Award, Clock, ShieldCheck, Star, Users } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { useBooking } from "@/contexts/BookingContext";
import { usePageMeta } from "@/hooks/use-page-meta";

const stats = [
  { num: "500+", label: "Довольных клиентов", icon: Users },
  { num: "5 лет", label: "На рынке", icon: Clock },
  { num: "100%", label: "Гарантия качества", icon: ShieldCheck },
  { num: "3", label: "Сертификата бренда", icon: Award },
];

const values = [
  {
    title: "Точность в деталях",
    desc: "Каждый миллиметр лакокрасочного покрытия — зона нашей ответственности. Мы работаем с деталеметром и профессиональным светом, не оставляя не замеченных дефектов.",
  },
  {
    title: "Прозрачность процесса",
    desc: "Вы видите весь процесс: фото до, во время и после. Можете приехать и посмотреть в любой момент. Никаких сюрпризов — только результат выше ожидаемого.",
  },
  {
    title: "Искреннее отношение",
    desc: "Мы относимся к каждому автомобилю как к своему. Понимаем, что машина — это не просто транспорт, а часть вашей жизни. Поэтому подходим к работе с душой.",
  },
  {
    title: "Материалы высшего класса",
    desc: "Работаем только с профессиональной линейкой Ceramic Pro, Gyeon и IGL Coatings. Используем составы, которые недоступны в розничной продаже.",
  },
];

const timeline = [
  { year: "2019", label: "Старт Dream Cars", event: "Основание студии. Первые клиенты, первые победы.", image: "about-detailing-worker.webp" },
  { year: "2020", label: "Сертификация", event: "Сертификация Ceramic Pro. Расширение возможностей по нанопокрытиям.", image: "why-us/polishing-is-the-key.webp" },
  { year: "2021", label: "Новый уровень", event: "Открытие нового бокса. Новое профессиональное оборудование Rupes и Flex.", image: "our_work/anti-rain.webp" },
  { year: "2022", label: "Партнёрство", event: "Партнёрство с Gyeon. Вошли в список топ-детейлинг-студий России.", image: "our_work/Interior_detailing.webp" },
  { year: "2023", label: "Запуск PPF", event: "Запуск услуги PPF. 300+ клиентов с керамическим покрытием.", image: "our_work/wrapping_with_film.webp" },
  { year: "2024", label: "500+ клиентов", event: "500+ довольных клиентов. Рейтинг 4.9/5.0 на всех площадках.", image: "our_work/polishing_ceramics.webp" },
];
const developmentPath = [...timeline].reverse();

export default function AboutPage() {
  const { open } = useBooking();
  const [activeValueIndex, setActiveValueIndex] = useState(2);
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(1);
  const ctaVideoRef = useRef<HTMLVideoElement>(null);
  const timelineScrollRef = useRef<HTMLDivElement>(null);
  const timelineScrollFrame = useRef<number | null>(null);
  const mobileOptimized = typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;

  useEffect(() => {
    const video = ctaVideoRef.current;
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let inViewport = false;
    const syncPlayback = () => {
      if (inViewport && !document.hidden) {
        void video.play().catch(() => undefined);
      } else {
        video.pause();
      }
    };
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      inViewport = entry.isIntersecting;
      syncPlayback();
    }, { rootMargin: "160px 0px", threshold: 0.12 });

    observer.observe(video);
    document.addEventListener("visibilitychange", syncPlayback);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", syncPlayback);
      video.pause();
    };
  }, []);

  useEffect(() => {
    if (!mobileOptimized) return;
    const frame = window.requestAnimationFrame(() => {
      const container = timelineScrollRef.current;
      if (container) container.scrollLeft = container.clientWidth;
    });
    return () => window.cancelAnimationFrame(frame);
  }, [mobileOptimized]);

  useEffect(() => () => {
    if (timelineScrollFrame.current !== null) window.cancelAnimationFrame(timelineScrollFrame.current);
  }, []);

  const selectTimeline = (index: number) => {
    const nextIndex = (index + developmentPath.length) % developmentPath.length;
    setActiveTimelineIndex(nextIndex);
    const container = timelineScrollRef.current;
    if (container && window.innerWidth < 768) {
      container.scrollTo({ left: nextIndex * container.clientWidth, behavior: "smooth" });
    }
  };

  const handleTimelineScroll = () => {
    if (window.innerWidth >= 768 || timelineScrollFrame.current !== null) return;
    timelineScrollFrame.current = window.requestAnimationFrame(() => {
      const container = timelineScrollRef.current;
      if (container?.clientWidth) {
        const nextIndex = Math.max(0, Math.min(developmentPath.length - 1, Math.round(container.scrollLeft / container.clientWidth)));
        setActiveTimelineIndex(nextIndex);
      }
      timelineScrollFrame.current = null;
    });
  };
  usePageMeta({
    title: "О нас — Dream Cars Studio",
    description: "Узнайте больше о команде Dream Cars Studio. 5 лет опыта, 500+ довольных клиентов, сертификаты брендов Ceramic Pro и Gyeon. Professional car detailing team with 5 years of experience.",
    keywords: "детейлинг студия, профессиональный детейлинг, о нас, about detailing studio, professional car care",
    canonicalPath: "/about",
  });
  return (
    <main className="min-h-screen w-full overflow-x-clip bg-[#080808] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[82svh] overflow-hidden bg-[#050506]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(124,58,237,0.14),transparent_34%),radial-gradient(circle_at_12%_88%,rgba(168,117,255,0.07),transparent_30%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.11)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.11)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="performance-glow pointer-events-none absolute -right-48 top-12 h-[540px] w-[540px] rounded-full bg-[#7c3aed]/12 blur-[150px]" />

        <div className="container relative z-10 mx-auto flex min-h-[82svh] flex-col justify-center px-4 pb-14 pt-28 md:px-6 md:pb-16 md:pt-36">
          <div className="max-w-4xl">
            <motion.h1 initial={mobileOptimized ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="py-[0.06em] font-display text-[clamp(4rem,9vw,8rem)] font-medium leading-[0.92] tracking-[-0.075em] text-white">
              О нас
            </motion.h1>
            <motion.p initial={mobileOptimized ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }} className="mt-5 max-w-2xl text-base leading-7 text-white/62 md:text-lg md:leading-8">
              Мы — команда увлечённых специалистов, для которых автомобиль — это произведение искусства. С 2019 года помогаем автомобилям обретать идеальный вид и надёжную защиту.
            </motion.p>
          </div>

          <motion.div initial={mobileOptimized ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.26 }} className="mt-10 grid grid-cols-2 overflow-hidden rounded-2xl border border-white/[0.12] bg-black/55 md:mt-12 md:backdrop-blur-md lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={stat.label} className={`flex min-h-[112px] flex-col justify-center px-5 py-4 transition-colors hover:bg-white/[0.045] md:min-h-[122px] md:px-7 ${index < 3 ? "lg:border-r lg:border-white/10" : ""} ${index % 2 === 0 ? "border-r border-white/10 lg:border-r" : ""} ${index >= 2 ? "border-t border-white/10 lg:border-t-0" : ""}`}>
                <stat.icon className="mb-2 h-5 w-5 text-[#a875ff]" strokeWidth={1.7} aria-hidden="true" />
                <div className="font-display text-3xl font-semibold tracking-[-0.045em] text-[#a875ff] md:text-4xl">{stat.num}</div>
                <div className="mt-2 text-xs text-white/48 md:text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative overflow-visible border-t border-black/[0.06] bg-[#f5f3f7] py-20 text-[#1b1722] md:py-24">
        <div className="performance-glow pointer-events-none absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-[#8b5cf6]/10 blur-[130px]" />
        <motion.img
          src={`${import.meta.env.BASE_URL}about/mission-car.webp`}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          initial={mobileOptimized ? false : { opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="pointer-events-none absolute bottom-[-16%] right-[-4vw] z-[5] hidden h-[125%] w-[72vw] max-w-none select-none object-contain object-right-bottom lg:block"
        />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:min-h-[620px] lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <motion.div initial={mobileOptimized ? false : { opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col justify-center">
              <div className="premium-cta inline-flex w-fit items-center border border-[#7c3aed]/18 bg-[#17131d] px-4 py-3 text-white shadow-[0_14px_38px_-22px_rgba(35,20,50,0.45)]">
                <Star className="mr-3 h-5 w-5 fill-[#9f75ff] text-[#9f75ff]" aria-hidden="true" />
                <strong className="font-display text-xl font-semibold tracking-[-0.04em] text-white">4.9/5</strong>
                <span className="ml-4 border-l border-white/20 pl-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/55">Средний рейтинг</span>
              </div>
              <h2 className="mt-9 font-display text-4xl font-bold leading-tight text-[#1b1722] md:text-5xl">
                Превращаем заботу об автомобиле в{" "}
                <span className="text-[#7C3AED]">искусство</span>
              </h2>
              <div className="mt-7 space-y-4">
                <p className="leading-relaxed text-[#1b1722]/62">Dream Cars Studio — это не просто детейлинг. Это пространство, где каждый автомобиль получает внимание, достойное произведения искусства. Мы верим, что безупречный вид машины — это не роскошь, а стандарт.</p>
                <p className="leading-relaxed text-[#1b1722]/62">Наша команда постоянно обучается, следит за трендами индустрии и инвестирует в лучшее оборудование. Потому что вы заслуживаете только лучшего результата.</p>
              </div>
            </motion.div>
            <motion.div
              initial={mobileOptimized ? false : { opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative min-h-[400px] lg:min-h-[520px]"
            >
              <img src={`${import.meta.env.BASE_URL}about/mission-car.webp`} alt="Автомобиль Dream Cars" loading="lazy" decoding="async" className="pointer-events-none absolute -bottom-44 right-[-9%] z-[5] h-[140%] w-[132%] max-w-none select-none object-contain object-right-bottom lg:hidden" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative min-h-[720px] overflow-visible border-t border-black/[0.06] bg-[#f1f0f2] py-24 text-[#17131d]">
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div initial={mobileOptimized ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid gap-8 lg:grid-cols-[240px_1fr] lg:gap-10">
            <p className="text-sm font-semibold uppercase tracking-[-0.02em] text-[#7c3aed]">(Наши ценности)</p>
            <h2 className="max-w-4xl font-display text-3xl font-medium leading-[1.08] tracking-[-0.045em] text-[#17131d] md:text-4xl lg:text-[2.85rem]">
              Точность, открытость и отношение к автомобилю как к произведению искусства
            </h2>
          </motion.div>

          <div className="mt-16 flex items-center gap-2">
            <button type="button" onClick={() => setActiveValueIndex((current) => (current - 1 + values.length) % values.length)} aria-label="Предыдущая ценность" className="flex h-10 w-[72px] items-center justify-center rounded-xl bg-white text-[#7c3aed] transition-all hover:-translate-x-0.5 hover:bg-[#ebe7f1] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#7c3aed]"><ArrowLeft className="h-5 w-5" aria-hidden="true" /></button>
            <button type="button" onClick={() => setActiveValueIndex((current) => (current + 1) % values.length)} aria-label="Следующая ценность" className="flex h-10 w-[72px] items-center justify-center rounded-xl bg-black text-[#a875ff] transition-all hover:translate-x-0.5 hover:bg-[#17131d] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#7c3aed]"><ArrowRight className="h-5 w-5" aria-hidden="true" /></button>
          </div>

          <div className="relative z-10 mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={mobileOptimized ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex min-h-[235px] flex-col rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 ${i === activeValueIndex ? "bg-[#7c3aed] text-white shadow-[0_20px_46px_-26px_rgba(124,58,237,0.6)]" : "border border-black/[0.035] bg-white/90 text-[#17131d]"}`}
              >
                <h3 className="max-w-[220px] font-display text-[1.35rem] font-medium uppercase leading-[1.16] tracking-[-0.035em]">{v.title}</h3>
                <div className={`mt-auto flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.03em] ${i === activeValueIndex ? "text-white/75" : "text-[#17131d]/55"}`}>
                  <span>Шаг {String(i + 1).padStart(2, "0")}</span>
                  <span className="text-base font-light">+</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <svg aria-hidden="true" viewBox="0 0 1440 430" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-0 bottom-[-70px] z-[5] h-[430px] w-full overflow-visible [clip-path:inset(-180px_0_-180px_0)]">
          <defs>
            <filter id="values-purple-glow" x="-20%" y="-40%" width="140%" height="180%">
              <feGaussianBlur stdDeviation="18" />
            </filter>
          </defs>
          <path d="M-120 330 C 110 105, 320 150, 535 255 S 870 450, 1130 310 S 1390 110, 1560 190" fill="none" stroke="rgba(124,58,237,0.2)" strokeWidth="54" filter="url(#values-purple-glow)" />
          <path d="M-120 330 C 110 105, 320 150, 535 255 S 870 450, 1130 310 S 1390 110, 1560 190" fill="none" stroke="#7c3aed" strokeWidth="30" />
          <path d="M-120 330 C 110 105, 320 150, 535 255 S 870 450, 1130 310 S 1390 110, 1560 190" fill="none" stroke="rgba(18,10,27,0.62)" strokeWidth="1.5" strokeDasharray="5 7" />
        </svg>
      </section>

      {/* Timeline */}
      <section className="relative overflow-hidden border-t border-black/[0.06] bg-[#f5f6f9] py-20 text-[#17131d] md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial={mobileOptimized ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-4xl font-semibold tracking-[-0.05em] md:text-5xl">Наш путь</h2>
            </div>
            <div className="flex items-center gap-2 md:hidden">
              <button type="button" onClick={() => selectTimeline(activeTimelineIndex - 1)} aria-label="Предыдущий год" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#17131d]/10 bg-white text-[#17131d] transition-colors active:bg-[#ebe7f1]"><ArrowLeft className="h-5 w-5" aria-hidden="true" /></button>
              <button type="button" onClick={() => selectTimeline(activeTimelineIndex + 1)} aria-label="Следующий год" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#7c3aed] text-white transition-colors active:bg-[#6d28d9]"><ArrowRight className="h-5 w-5" aria-hidden="true" /></button>
            </div>
            <div className="hidden items-center gap-2 md:flex" aria-hidden="true">
              <span className="h-4 w-4 rounded-full bg-[#dfe1e7]" />
              <span className="h-4 w-4 rounded-full bg-[#7c3aed]" />
            </div>
          </motion.div>

          <div ref={timelineScrollRef} onScroll={handleTimelineScroll} className="relative mt-10 touch-pan-x snap-x snap-mandatory overflow-x-auto overflow-y-hidden overscroll-x-contain pb-3 [scrollbar-width:none] md:mt-14 md:touch-auto md:snap-none [&::-webkit-scrollbar]:hidden">
            <div className="pointer-events-none absolute left-0 right-0 top-[96px] z-0 h-12 opacity-55 [background-image:repeating-linear-gradient(90deg,transparent_0,transparent_14px,rgba(95,89,106,0.22)_14px,rgba(95,89,106,0.22)_15px)]" />
            <div className="relative z-10 flex w-full items-start md:min-w-max">
              {developmentPath.map((item, index) => {
                const isActive = activeTimelineIndex === index;
                return (
                  <motion.button
                    key={item.year}
                    type="button"
                    onClick={() => selectTimeline(index)}
                    initial={mobileOptimized ? false : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.07 }}
                    aria-pressed={isActive}
                    className={`relative h-[470px] w-full shrink-0 snap-start border-l px-5 text-left transition-[width,border-color] duration-500 focus-visible:z-20 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#7c3aed] md:snap-none ${isActive ? "border-[#7c3aed] md:w-[390px]" : "border-[#d8dbe2] md:w-[190px]"}`}
                  >
                    <span className={`absolute left-5 top-0 block font-display text-[3rem] font-semibold leading-none tracking-[-0.045em] transition-colors duration-300 ${isActive ? "text-[#17131d]" : "text-[#17131d]/28"}`}>{item.year}</span>
                    <span className={`absolute left-5 top-[58px] block text-xs font-semibold transition-colors ${isActive ? "text-[#7c3aed]" : "text-[#17131d]/25"}`}>{item.label}</span>

                    {(isActive || mobileOptimized) && (
                      <motion.div initial={mobileOptimized ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="absolute inset-x-5 top-[182px] flex flex-col gap-5">
                        <p className="min-h-[72px] max-w-[340px] text-sm leading-6 text-[#17131d]/72">{item.event}</p>
                        <span className="premium-cta block w-full bg-[#7c3aed]/45 p-px">
                          <span className="premium-cta block aspect-[1.65/1] w-full overflow-hidden bg-[#e9e7ed]">
                            <img src={`${import.meta.env.BASE_URL}${item.image}`} alt="" aria-hidden="true" loading="lazy" decoding="async" className={`h-full w-full object-cover grayscale-[0.2] transition-transform duration-700 ${item.year === "2024" ? "scale-[1.12] object-[54%_38%] hover:scale-[1.15]" : "hover:scale-[1.03]"}`} />
                          </span>
                        </span>
                      </motion.div>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative min-h-[558px] overflow-hidden border-t border-white/10 bg-black md:min-h-[744px]">
        <video
          ref={ctaVideoRef}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
          muted
          loop
          playsInline
          preload="none"
          poster={`${import.meta.env.BASE_URL}car-porsche-911.webp`}
          disablePictureInPicture
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src={`${import.meta.env.BASE_URL}video/need-money-for-porsche.mp4`} type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(4,3,6,0.94)_0%,rgba(7,4,11,0.78)_38%,rgba(8,5,12,0.34)_72%,rgba(6,4,9,0.18)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
        <div className="container relative z-10 mx-auto flex min-h-[558px] items-stretch px-4 py-16 md:min-h-[744px] md:px-6 md:py-24">
          <motion.div initial={mobileOptimized ? false : { opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid min-h-[360px] max-w-2xl content-between gap-10 text-left md:min-h-[430px]">
            <h2 className="font-display text-4xl font-black leading-[1.02] tracking-[-0.05em] text-white md:text-6xl">Доверьте нам свой автомобиль</h2>
            <p className="max-w-xl text-base leading-7 text-white/65 md:text-lg">Запишитесь на бесплатную консультацию и убедитесь, что детейлинг мирового уровня — доступен.</p>
            <button
              onClick={open}
              className="premium-cta inline-flex w-fit items-center gap-5 px-8 py-4 font-bold text-white text-sm uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_38px_-14px_rgba(124,58,237,0.65)]"
              style={{ background: "linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)", boxShadow: "0 4px 20px rgba(124,58,237,0.35)" }}
            >
              Записаться <span className="border-l border-white/30 pl-4"><ArrowRight className="w-4 h-4" /></span>
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
