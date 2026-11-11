import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Award, Users, Clock, ShieldCheck, Heart, Target, Eye, Gem, Star } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FloatingSocials } from "@/components/FloatingSocials";
import { useBooking } from "@/contexts/BookingContext";
import { usePageMeta } from "@/hooks/use-page-meta";

const stats = [
  { num: "500+", label: "Довольных клиентов", icon: <Users className="w-5 h-5" /> },
  { num: "5 лет", label: "На рынке", icon: <Clock className="w-5 h-5" /> },
  { num: "100%", label: "Гарантия", icon: <ShieldCheck className="w-5 h-5" /> },
  { num: "3", label: "Сертификата бренда", icon: <Award className="w-5 h-5" /> },
];

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Точность в деталях",
    desc: "Каждый миллиметр лакокрасочного покрытия — зона нашей ответственности. Мы работаем с деталеметром и профессиональным светом, не оставляя не замеченных дефектов.",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Прозрачность процесса",
    desc: "Вы видите весь процесс: фото до, во время и после. Можете приехать и посмотреть в любой момент. Никаких сюрпризов — только результат выше ожидаемого.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Искреннее отношение",
    desc: "Мы относимся к каждому автомобилю как к своему. Понимаем, что машина — это не просто транспорт, а часть вашей жизни. Поэтому подходим к работе с душой.",
  },
  {
    icon: <Gem className="w-6 h-6" />,
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
  const [activeValueIndex, setActiveValueIndex] = useState(values.length - 1);
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);
  const ctaVideoRef = useRef<HTMLVideoElement>(null);

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
  usePageMeta({
    title: "О нас — Dream Cars Studio",
    description: "Узнайте больше о команде Dream Cars Studio. 5 лет опыта, 500+ довольных клиентов, сертификаты брендов Ceramic Pro и Gyeon. Professional car detailing team with 5 years of experience.",
    keywords: "детейлинг студия, профессиональный детейлинг, о нас, about detailing studio, professional car care",
    canonicalPath: "/about",
  });
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden py-24 md:pb-10 md:pt-28">
        <img src={`${import.meta.env.BASE_URL}our_work/polishing_ceramics.webp`} alt="Команда Dream Cars работает над автомобилем" fetchPriority="high" loading="eager" decoding="async" width="1536" height="1024" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,4,7,0.86)_0%,rgba(7,5,10,0.68)_54%,rgba(8,5,12,0.58)_100%)]" />
        <div className="performance-glow absolute top-1/3 right-0 w-[800px] h-[600px] bg-[#7C3AED]/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none z-10" />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
              <div className="mb-7 flex items-center gap-4">
                <div className="h-[2px] w-11 bg-[#8B5CF6]" />
                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9f75ff]">История и ценности</span>
              </div>
              <h1 className="mb-9 font-display text-[4.25rem] font-black leading-none tracking-[-0.055em] text-white md:text-[7rem] lg:text-[7.5rem]">
                О нас
              </h1>
              <p className="max-w-3xl text-[1.35rem] leading-[1.65] text-white/65 md:text-2xl">
                Мы — команда увлечённых специалистов, для которых автомобиль — это произведение искусства. С 2019 года мы помогаем автомобилям обретать идеальный вид и надёжную защиту.
              </p>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.3 }} className="mt-7 grid grid-cols-2 overflow-hidden rounded-2xl border border-white/12 bg-black/25 backdrop-blur-md lg:grid-cols-4">
            {stats.map((st, i) => (
              <div key={st.label} className={`flex min-h-[118px] flex-col justify-center gap-2 px-5 py-4 transition-colors hover:bg-white/[0.045] md:min-h-[128px] md:px-7 ${i < 3 ? "lg:border-r lg:border-white/10" : ""} ${i % 2 === 0 ? "border-r border-white/10 lg:border-r" : ""} ${i >= 2 ? "border-t border-white/10 lg:border-t-0" : ""}`}>
                <div className="text-[#a875ff]">{st.icon}</div>
                <div className="font-display text-3xl font-black tracking-[-0.04em] text-white md:text-4xl">{st.num}</div>
                <div className="text-xs text-white/48 md:text-sm">{st.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative overflow-visible border-t border-black/[0.06] bg-[#f5f3f7] py-24 text-[#1b1722]">
        <div className="performance-glow pointer-events-none absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-[#8b5cf6]/10 blur-[130px]" />
        <motion.img
          src={`${import.meta.env.BASE_URL}about/mission-car.webp`}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="pointer-events-none absolute bottom-[-16%] right-0 z-[5] hidden h-[125%] w-[68vw] max-w-none select-none object-contain object-right-bottom lg:block"
        />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="premium-cta mb-8 inline-flex items-center border border-[#7c3aed]/18 bg-[#17131d] px-4 py-3 text-white shadow-[0_14px_38px_-22px_rgba(35,20,50,0.45)]">
                <Star className="mr-3 h-5 w-5 fill-[#9f75ff] text-[#9f75ff]" aria-hidden="true" />
                <strong className="font-display text-xl font-semibold tracking-[-0.04em] text-white">4.9/5</strong>
                <span className="ml-4 border-l border-white/20 pl-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/55">Средний рейтинг</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-[2px] bg-[#8B5CF6]" />
                <span className="text-[#8B5CF6] font-semibold tracking-[0.25em] uppercase text-xs">Наша миссия</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1b1722] mb-6 leading-tight">
                Превращаем заботу об автомобиле в{" "}
                <span className="text-[#7C3AED]">искусство</span>
              </h2>
              <p className="text-[#1b1722]/62 leading-relaxed mb-4">
                Dream Cars Studio — это не просто детейлинг. Это пространство, где каждый автомобиль получает внимание, достойное произведения искусства. Мы верим, что безупречный вид машины — это не роскошь, а стандарт.
              </p>
              <p className="text-[#1b1722]/62 leading-relaxed">
                Наша команда постоянно обучается, следит за трендами индустрии и инвестирует в лучшее оборудование. Потому что вы заслуживаете только лучшего результата.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative min-h-[400px] lg:min-h-[520px]"
            >
              <img src={`${import.meta.env.BASE_URL}about/mission-car.webp`} alt="Автомобиль Dream Cars" loading="lazy" decoding="async" className="pointer-events-none absolute -bottom-44 right-[-1rem] z-[5] h-[140%] w-[125%] max-w-none select-none object-contain object-right-bottom lg:hidden" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative min-h-[720px] overflow-visible border-t border-black/[0.06] bg-[#f1f0f2] py-24 text-[#17131d]">
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid gap-8 lg:grid-cols-[240px_1fr] lg:gap-10">
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
                initial={{ opacity: 0, y: 20 }}
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
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center justify-between gap-6">
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#7c3aed]">Dream Cars / развитие</p>
              <h2 className="font-display text-4xl font-semibold tracking-[-0.05em] md:text-5xl">Наш путь</h2>
            </div>
            <div className="flex items-center gap-2" aria-hidden="true">
              <span className="h-4 w-4 rounded-full bg-[#dfe1e7]" />
              <span className="h-4 w-4 rounded-full bg-[#7c3aed]" />
            </div>
          </motion.div>

          <div className="relative mt-14 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="pointer-events-none absolute left-0 right-0 top-[96px] z-0 h-12 opacity-55 [background-image:repeating-linear-gradient(90deg,transparent_0,transparent_14px,rgba(95,89,106,0.22)_14px,rgba(95,89,106,0.22)_15px)]" />
            <div className="relative z-10 flex min-w-max items-start">
              {developmentPath.map((item, index) => {
                const isActive = activeTimelineIndex === index;
                return (
                  <motion.button
                    key={item.year}
                    type="button"
                    onClick={() => setActiveTimelineIndex(index)}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.07 }}
                    aria-pressed={isActive}
                    className={`relative h-[470px] shrink-0 border-l px-5 text-left transition-[width,border-color] duration-500 focus-visible:z-20 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#7c3aed] ${isActive ? "w-[320px] border-[#7c3aed]" : "w-[215px] border-[#d8dbe2]"}`}
                  >
                    <span className={`absolute left-5 top-0 block font-display text-[3rem] font-semibold leading-none tracking-[-0.045em] transition-colors duration-300 ${isActive ? "text-[#17131d]" : "text-[#17131d]/28"}`}>{item.year}</span>
                    <span className={`absolute left-5 top-[58px] block text-xs font-semibold transition-colors ${isActive ? "text-[#7c3aed]" : "text-[#17131d]/25"}`}>{item.label}</span>

                    {isActive && (
                      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="absolute inset-x-5 top-[182px] flex flex-col gap-5">
                        <p className="min-h-[72px] max-w-[280px] text-sm leading-6 text-[#17131d]/72">{item.event}</p>
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

          <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.16em] text-[#17131d]/30">Выберите год, чтобы посмотреть ключевой этап развития</p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative min-h-[744px] overflow-hidden border-t border-white/10 bg-black">
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
        <div className="container relative z-10 mx-auto flex min-h-[744px] items-center px-4 py-24 md:px-6">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="max-w-2xl text-left">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#c6a4ec]">Dream Cars Studio</p>
            <h2 className="mb-6 font-display text-4xl font-black leading-[1.02] tracking-[-0.05em] text-white md:text-6xl">Доверьте нам свой автомобиль</h2>
            <p className="mb-10 max-w-xl text-base leading-7 text-white/65 md:text-lg">Запишитесь на бесплатную консультацию и убедитесь, что детейлинг мирового уровня — доступен.</p>
            <button
              onClick={open}
              className="premium-cta inline-flex items-center gap-5 px-8 py-4 font-bold text-white text-sm uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_38px_-14px_rgba(124,58,237,0.65)]"
              style={{ background: "linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)", boxShadow: "0 4px 20px rgba(124,58,237,0.35)" }}
            >
              Записаться <span className="border-l border-white/30 pl-4"><ArrowRight className="w-4 h-4" /></span>
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingSocials />
    </main>
  );
}
