import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/sections/Footer";
import { CtaBenefits } from "@/components/CtaBenefits";
import { useBooking } from "@/contexts/BookingContext";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { usePageMeta } from "@/hooks/use-page-meta";
import { PortfolioDetailView, type PortfolioDetailProject } from "@/components/PortfolioDetailView";

const filters = ["Все работы", "Полировка", "Керамика", "Химчистка", "PPF", "Комплекс"];

const works = [
  {
    img: `${import.meta.env.BASE_URL}cars/bmw-x5.webp`,
    model: "BMW X5",
    year: "2024",
    service: "Восстановление + Керамика",
    tag: "Полировка",
    desc: "Вернуть кузову глубину цвета, убрать мелкие дефекты и защитить покрытие для повседневной эксплуатации.",
  },
  {
    img: `${import.meta.env.BASE_URL}cars/mercedes-s-class.webp`,
    model: "Mercedes-Benz S-Class",
    year: "2024",
    service: "Антигравийная плёнка",
    tag: "PPF",
    desc: "Защитить уязвимые зоны кузова прозрачной плёнкой, сохранив его внешний вид.",
  },
  {
    img: `${import.meta.env.BASE_URL}cars/range-rover-sport.webp`,
    model: "Range Rover Sport",
    year: "2024",
    service: "Детейлинг интерьера",
    tag: "Химчистка",
    desc: "Освежить салон и глубоко очистить материалы, сохранив фактуру кожи и декоративных элементов.",
  },
  {
    img: `${import.meta.env.BASE_URL}cars/porsche-cayenne.webp`,
    model: "Porsche Cayenne",
    year: "2024",
    service: "Стёкла + Комплексный уход",
    tag: "Комплекс",
    desc: "Подготовить автомобиль к поездкам в непогоду, улучшить обзор и выполнить комплексный уход.",
  },
  {
    img: `${import.meta.env.BASE_URL}car-bmw-m5.webp`,
    model: "BMW M5 Competition",
    year: "2022",
    service: "Полировка + Керамика",
    tag: "Полировка",
    desc: "Убрать мелкие дефекты лакокрасочного покрытия, усилить блеск и защитить кузов керамикой.",
  },
  {
    img: `${import.meta.env.BASE_URL}car-porsche-911-gt3.webp`,
    model: "Porsche 911 GT3",
    year: "2021",
    service: "Химчистка + Антидождь",
    tag: "Химчистка",
    desc: "Очистить салон из алькантары, устранить запахи и улучшить обзор в дождь.",
  },
  {
    img: `${import.meta.env.BASE_URL}car-mercedes-amg-gt.webp`,
    model: "Mercedes-AMG GT",
    year: "2023",
    service: "Керамическое покрытие",
    tag: "Керамика",
    desc: "Защитить лакокрасочное покрытие, диски и стёкла долговечными составами.",
  },
  {
    img: `${import.meta.env.BASE_URL}car-lamborghini-urus.webp`,
    model: "Lamborghini Urus",
    year: "2023",
    service: "Полный детейлинг",
    tag: "Комплекс",
    desc: "Освежить кузов и салон, защитить зоны риска плёнкой и сохранить блеск покрытия.",
  },
  {
    img: `${import.meta.env.BASE_URL}car-aston-martin-db11-new.webp`,
    model: "Aston Martin DB11",
    year: "2024",
    service: "PPF полный кузов",
    tag: "PPF",
    desc: "Защитить весь кузов матовой антигравийной плёнкой, сохранив аккуратный вид деталей.",
  },
  {
    img: `${import.meta.env.BASE_URL}car-ferrari-f8-new.webp`,
    model: "Ferrari F8",
    year: "2024",
    service: "Химчистка салона + Озон",
    tag: "Химчистка",
    desc: "Глубоко очистить интерьер, включая алькантару и карбоновые вставки, и устранить запахи.",
  },
  {
    img: `${import.meta.env.BASE_URL}car-rolls-royce-cullinan.webp`,
    model: "Rolls-Royce Cullinan",
    year: "2024",
    service: "Комплексный детейлинг",
    tag: "Комплекс",
    desc: "Привести кузов и салон в безупречное состояние и защитить уязвимые поверхности.",
  },
  {
    img: `${import.meta.env.BASE_URL}car-tesla-model-s.webp`,
    model: "Tesla Model S Plaid",
    year: "2023",
    service: "Полировка + Керамика",
    tag: "Полировка",
    desc: "Убрать лёгкие дефекты покрытия, защитить кузов керамикой и привести диски в порядок.",
  },
];

const serviceSteps: Record<string, string[]> = {
  "Полировка": ["Диагностика и деликатная мойка", "Коррекция лакокрасочного покрытия", "Финишная полировка и контроль света"],
  "Керамика": ["Подготовка и обезжиривание кузова", "Нанесение защитного состава", "Полимеризация и контроль покрытия"],
  "Химчистка": ["Разбор и глубокая очистка салона", "Деликатная работа с материалами", "Сушка, озонирование и финишный уход"],
  "PPF": ["Подготовка поверхностей", "Раскрой и нанесение защитной плёнки", "Проработка кромок и контроль прилегания"],
  "Комплекс": ["Полная диагностика автомобиля", "Комплекс работ по кузову и салону", "Финишная проверка каждого элемента"],
};

const brandLogos: Record<string, string | undefined> = {
  BMW: `${import.meta.env.BASE_URL}brand-logos/bmw.webp`,
  Porsche: `${import.meta.env.BASE_URL}brand-logos/porsche.webp`,
  Mercedes: `${import.meta.env.BASE_URL}brand-logos/mercedes.webp`,
};

function getBrand(model: string) {
  if (model.startsWith("Mercedes")) return "Mercedes";
  if (model.startsWith("Aston Martin")) return "Aston Martin";
  if (model.startsWith("Rolls-Royce")) return "Rolls-Royce";
  if (model.startsWith("Tesla")) return "Tesla";
  if (model.startsWith("Lamborghini")) return "Lamborghini";
  if (model.startsWith("Ferrari")) return "Ferrari";
  if (model.startsWith("Porsche")) return "Porsche";
  return "BMW";
}

function toDetailProject(work: (typeof works)[number]): PortfolioDetailProject {
  const brand = getBrand(work.model);
  return {
    model: work.model,
    brand,
    brandLogo: brandLogos[brand],
    field: work.service,
    image: work.img,
    imageAlt: `${work.model} после работ в Dream Cars Studio`,
    request: work.desc,
    work: serviceSteps[work.tag] || ["Диагностика", work.service, "Финишный контроль"],
    result: `Автомобиль получил согласованный комплекс «${work.service}»: восстановленный внешний вид, защищённые поверхности и аккуратный результат, проверенный мастером перед выдачей.`,
    year: work.year,
  };
}

export default function PortfolioPage() {
  const { open } = useBooking();
  const [activeFilter, setActiveFilter] = useState("Все работы");
  const [expandedProject, setExpandedProject] = useState<PortfolioDetailProject | null>(null);
  const ctaVideoRef = useRef<HTMLVideoElement>(null);
  const mobileOptimized = typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;
  usePageMeta({
    title: "Наши работы — Dream Cars Studio",
    description: "Портфолио детейлинга: BMW M5, Porsche 911, Ferrari F8, Aston Martin, Lamborghini, Rolls-Royce. Реальные результаты до и после. Car detailing portfolio: real results before and after.",
    keywords: "портфолио детейлинга, работы до и после, car detailing portfolio, detailing results",
    canonicalPath: "/portfolio",
  });

  const filtered = activeFilter === "Все работы"
    ? works
    : works.filter((w) => w.tag === activeFilter);

  useEffect(() => {
    if (!expandedProject) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setExpandedProject(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [expandedProject]);

  useEffect(() => {
    const video = ctaVideoRef.current;
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting && !document.hidden) void video.play().catch(() => undefined);
      else video.pause();
    }, { rootMargin: "180px 0px", threshold: 0.08 });
    observer.observe(video);
    return () => { observer.disconnect(); video.pause(); };
  }, []);

  return (
    <main className="min-h-screen w-full overflow-x-clip bg-[#080808] text-white">

      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-40 md:pb-20">
        <div className="absolute inset-0 bg-[#080808]" />
        <div className="performance-glow absolute top-1/2 right-0 w-[700px] h-[700px] bg-[#7C3AED]/10 rounded-full blur-[150px] translate-x-1/3 -translate-y-1/2 pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none z-10" />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div initial={mobileOptimized ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <h1 className="text-6xl md:text-8xl font-display font-black leading-none mb-6 text-white">
              Наши<br />
              <span style={{ background: "linear-gradient(135deg, #ffffff 0%, #a78bfa 50%, #7c3aed 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>работы</span>
            </h1>
            <p className="text-white/55 max-w-xl text-lg leading-relaxed">
              Каждый проект — история преображения. Посмотрите, что происходит с автомобилем, когда за дело берутся профессионалы.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="pb-10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={mobileOptimized ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-2"
          >
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === f
                    ? "bg-[#7C3AED] text-white shadow-[0_0_16px_rgba(124,58,237,0.4)]"
                    : "bg-white/5 text-white/60 border border-white/10 hover:border-[#7C3AED]/40 hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Works grid */}
      <section className="pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-7 md:gap-9">
            {filtered.map((work, i) => {
              const project = toDetailProject(work);
              const reversed = i % 2 === 1;
              return (
                <motion.button
                  type="button"
                  key={`${work.model}-${i}`}
                  onClick={() => setExpandedProject(project)}
                  initial={mobileOptimized ? false : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(i * 0.06, 0.3), duration: 0.5 }}
                  className="portfolio-case-shape group relative grid w-full grid-rows-[180px_auto] overflow-hidden border border-white/10 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8b5cf6] md:grid-rows-[240px_auto] lg:min-h-[520px] lg:grid-cols-[0.99fr_1.01fr] lg:grid-rows-none"
                  aria-label={`Открыть проект ${work.model}`}
                >
                  <div className={`portfolio-photo-panel relative z-10 min-h-0 overflow-hidden bg-[#0a080d] lg:min-h-full ${reversed ? "portfolio-photo-panel--reverse lg:order-2" : ""}`}>
                    <OptimizedImage src={work.img} alt={work.model} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" width={1200} height={900} />
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_46%_48%,transparent_24%,rgba(3,2,5,0.44)_100%)]" />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/[0.08] to-black/20" />
                    <span className="absolute bottom-5 left-5 rounded-md bg-black/45 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-[4px] md:bottom-7 md:left-7 md:border md:border-white/25">{work.service}</span>
                  </div>

                  <div aria-hidden="true" className={`portfolio-diagonal-divider pointer-events-none ${reversed ? "portfolio-diagonal-divider--reverse" : ""}`} />

                  <div className={`relative z-10 flex min-h-0 flex-col bg-[radial-gradient(circle_at_18%_18%,rgba(196,153,255,0.3),transparent_40%),radial-gradient(circle_at_92%_86%,rgba(142,78,225,0.28),transparent_44%),linear-gradient(145deg,#321a47_0%,#4b2468_50%,#281237_100%)] p-4 text-white md:p-6 lg:py-9 xl:py-11 ${reversed ? "lg:order-1 lg:pr-20 lg:pl-10 xl:pr-24 xl:pl-12" : "lg:pr-10 lg:pl-20 xl:pr-12 xl:pl-24"}`}>
                    <div className="flex items-center justify-between gap-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#cfb1f2]">
                      <span>{work.tag} · {work.year}</span>
                      <span className="flex shrink-0 items-center gap-2">
                        {project.brandLogo ? <img src={project.brandLogo} alt="" aria-hidden="true" loading="lazy" className="h-10 w-14 object-contain drop-shadow-[0_7px_16px_rgba(0,0,0,0.3)]" /> : <span>{project.brand}</span>}
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-colors group-hover:bg-white/30" aria-hidden="true"><ArrowUpRight className="h-5 w-5" strokeWidth={2} /></span>
                      </span>
                    </div>
                    <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.05em] text-white md:text-4xl xl:text-5xl">{work.model}</h2>
                    <div className="mt-4">
                      <span className="text-sm font-bold uppercase tracking-[0.12em] text-white md:text-[10px] md:font-semibold md:text-white/40">Задача</span>
                      <p className="mt-2 max-w-2xl text-sm leading-6 text-white/70">{work.desc}</p>
                    </div>
                    <ul className="mt-4 grid gap-2 text-sm text-white/82 sm:grid-cols-2">
                      {project.work.map((item) => <li key={item} className="flex items-start gap-2"><span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20 text-white" aria-hidden="true"><ArrowRight className="h-3 w-3" strokeWidth={2.5} /></span>{item}</li>)}
                    </ul>
                    <div className="hidden md:mt-auto md:block md:border-t md:border-[#c49bf0]/30 md:pt-4">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#cfb1f2]">Результат</span>
                      <p className="mt-2 text-sm leading-6 text-white/70">{project.result}</p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative min-h-[600px] overflow-hidden border-t border-white/5 md:min-h-[680px]">
        <video ref={ctaVideoRef} className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center" muted loop playsInline preload="none" poster={`${import.meta.env.BASE_URL}car-porsche-911.webp`} disablePictureInPicture aria-hidden="true" tabIndex={-1}>
          <source src={`${import.meta.env.BASE_URL}video/need-money-for-porsche.mp4`} type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(3,2,5,0.96)_0%,rgba(7,4,11,0.84)_42%,rgba(7,4,11,0.35)_75%,rgba(3,2,5,0.2)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25" />
        <div className="container relative z-10 mx-auto flex min-h-[600px] items-center px-4 py-20 md:min-h-[680px] md:px-6 md:py-24">
          <motion.div initial={mobileOptimized ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl text-left">
            <h2 className="font-display text-[clamp(1.8rem,9vw,2.25rem)] font-black leading-[1.02] tracking-[-0.05em] text-white md:text-6xl"><span className="block">Ваш автомобиль</span><span className="block">— следующий</span></h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/65 md:text-lg">Запишитесь уже сегодня и получите бесплатную диагностику состояния лака вашего автомобиля.</p>
            <CtaBenefits className="my-10" />
            <button
              onClick={open}
              className="premium-cta inline-flex min-h-14 items-center gap-5 bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] px-7 py-4 text-sm font-bold uppercase tracking-[0.1em] text-white transition-colors hover:from-[#9f75ff] hover:to-[#7c3aed]"
            >
              Записаться <span className="border-l border-white/35 pl-4"><ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />

      <AnimatePresence>
        {expandedProject && (
          <PortfolioDetailView project={expandedProject} onClose={() => setExpandedProject(null)} theme="dark" />
        )}
      </AnimatePresence>
    </main>
  );
}
