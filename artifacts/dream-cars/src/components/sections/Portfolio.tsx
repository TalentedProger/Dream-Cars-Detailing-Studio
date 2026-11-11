import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

const base = import.meta.env.BASE_URL;

const cases = [
  {
    model: "BMW X5",
    brand: "BMW",
    brandLogo: `${base}brand-logos/bmw.webp`,
    field: "Восстановление / защита",
    image: `${base}cars/bmw-x5.webp`,
    imageAlt: "BMW X5 в детейлинг-студии Dream Cars",
    request: "Вернуть кузову глубину цвета и защитить его для повседневной эксплуатации.",
    work: ["Восстановительная полировка", "Подготовка ЛКП", "Керамическое покрытие"],
    result: "Ровное отражение, насыщенный цвет и поверхность, за которой проще ухаживать.",
  },
  {
    model: "Mercedes-Benz S-Class",
    brand: "Mercedes-Benz",
    brandLogo: `${base}brand-logos/mercedes.webp`,
    field: "Плёнка / кузов",
    image: `${base}cars/mercedes-s-class.webp`,
    imageAlt: "Mercedes-Benz S-Class в детейлинг-студии Dream Cars",
    request: "Сохранить безупречный вид кузова и защитить наиболее уязвимые зоны.",
    work: ["Оклейка зон риска", "Проработка кромок", "Контроль прилегания плёнки"],
    result: "Защита от дорожных воздействий без изменения характера автомобиля.",
  },
  {
    model: "Range Rover Sport",
    brand: "Land Rover",
    brandLogo: `${base}brand-logos/land-rover.webp`,
    field: "Интерьер / уход",
    image: `${base}cars/range-rover-sport.webp`,
    imageAlt: "Range Rover Sport в детейлинг-студии Dream Cars",
    request: "Освежить салон и сохранить фактуру материалов в самых сложных деталях.",
    work: ["Очистка кожи", "Проработка швов и фактур", "Финишный уход за интерьером"],
    result: "Чистый, ухоженный салон с сохранённым ощущением материала.",
  },
  {
    model: "Porsche Cayenne",
    brand: "Porsche",
    brandLogo: `${base}brand-logos/porsche.webp`,
    field: "Стёкла / комфорт",
    image: `${base}cars/porsche-cayenne.webp`,
    imageAlt: "Porsche Cayenne в детейлинг-студии Dream Cars",
    request: "Подготовить автомобиль к поездкам в непогоду и улучшить обзор.",
    work: ["Подготовка стёкол", "Нанесение антидождя", "Финишная проверка"],
    result: "Гидрофобная поверхность помогает воде быстрее уходить со стекла.",
  },
];

type PortfolioCase = (typeof cases)[number];

function ProjectPhoto({ project, eager = false }: { project: PortfolioCase; eager?: boolean }) {
  return (
    <>
      <img src={project.image} alt={project.imageAlt} loading={eager ? "eager" : "lazy"} decoding="async" className="absolute inset-0 h-full w-full object-cover" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_46%_48%,transparent_24%,rgba(3,2,5,0.44)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(118deg,rgba(10,6,15,0.12)_0%,rgba(31,13,48,0.18)_52%,rgba(3,2,5,0.46)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/[0.12] to-black/[0.22]" />
      <div className="absolute bottom-5 left-5 rounded-md border border-white/25 bg-black/25 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-[4px] sm:bottom-8 sm:left-8">
        {project.field}
      </div>
    </>
  );
}

export function Portfolio() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (expandedIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setExpandedIndex(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [expandedIndex]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="portfolio" className="relative overflow-hidden bg-white py-24 text-[#1b1722] md:py-32">
      <div className="performance-glow pointer-events-none absolute -right-40 top-24 h-[520px] w-[520px] rounded-full bg-[#6d28d9]/[0.1] blur-[130px]" />
      <div className="performance-glow pointer-events-none absolute -left-52 bottom-0 h-[620px] w-[620px] rounded-full bg-[#a875ff]/[0.08] blur-[150px]" />
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="mb-12 flex flex-col gap-8 md:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="font-display text-5xl font-semibold tracking-[-0.055em] text-[#1b1722] md:text-6xl lg:text-7xl">Наши работы</h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#1b1722]/55 md:text-lg">Каждый автомобиль приходит со своей задачей. Показываем, что меняем и из чего складывается результат.</p>
          </motion.div>
          <Link href="/portfolio" className="premium-cta inline-flex min-h-14 w-fit shrink-0 items-center gap-5 bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-[0_12px_36px_-12px_rgba(139,92,246,0.65)] transition-all hover:-translate-y-0.5 hover:from-[#9f75ff] hover:to-[#7c3aed]">
            Все проекты <span className="border-l border-white/35 pl-4"><ArrowUpRight className="h-5 w-5" aria-hidden="true" /></span>
          </Link>
        </div>

        <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.75 }}>
          <div ref={emblaRef} className="overflow-hidden" role="region" aria-roledescription="карусель" aria-label="Примеры наших работ">
            <div className="flex touch-pan-y">
              {cases.map((project, index) => (
                <div key={project.model} className="min-w-0 flex-[0_0_100%]" role="group" aria-roledescription="слайд" aria-label={`${index + 1} из ${cases.length}: ${project.model}`}>
                  <article className="portfolio-case-shape relative grid overflow-hidden border border-[#1b1722]/10 bg-[radial-gradient(circle_at_82%_20%,rgba(168,117,255,0.22),transparent_44%),linear-gradient(135deg,rgba(255,255,255,0.72),rgba(242,235,250,0.62))] shadow-[0_24px_70px_rgba(55,33,79,0.1)] lg:min-h-[616px] lg:grid-cols-[0.99fr_1.01fr]">
                    <div className="portfolio-photo-panel relative z-10 min-h-[290px] overflow-hidden bg-[#0a080d] sm:min-h-[390px] lg:min-h-full">
                      {expandedIndex !== index && (
                        <motion.div layoutId={`portfolio-photo-${index}`} className="absolute inset-0" transition={{ type: "spring", stiffness: 150, damping: 24, mass: 0.9 }}>
                          <ProjectPhoto project={project} eager={index === 0} />
                        </motion.div>
                      )}
                    </div>

                    <div aria-hidden="true" className="portfolio-diagonal-divider pointer-events-none" />

                    <div className="relative z-10 flex flex-col border-t border-white/15 bg-[radial-gradient(circle_at_18%_18%,rgba(196,153,255,0.3),transparent_40%),radial-gradient(circle_at_92%_86%,rgba(142,78,225,0.28),transparent_44%),linear-gradient(145deg,#321a47_0%,#4b2468_50%,#281237_100%)] p-6 text-white backdrop-blur-[24px] sm:p-9 lg:border-t-0 lg:py-10 lg:pr-10 lg:pl-20 xl:py-12 xl:pr-12 xl:pl-24">
                      <div className="flex items-center justify-between gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c6a4ec]">
                        <span>История проекта</span>
                        <button type="button" onClick={() => setExpandedIndex(index)} className="flex h-11 w-16 items-center justify-center transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#cba7f2]" aria-label={`Развернуть фотографию ${project.model}`}>
                          <img src={project.brandLogo} alt="" aria-hidden="true" loading="lazy" className="h-full w-full object-contain drop-shadow-[0_7px_16px_rgba(0,0,0,0.3)]" />
                        </button>
                      </div>
                      <h3 className="mt-6 font-display text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">{project.model}</h3>

                      <div className="mt-7 grid gap-2 border-t border-white/10 pt-5 sm:grid-cols-[115px_1fr] sm:gap-5">
                        <span className="text-xs font-semibold uppercase tracking-[0.13em] text-white/40">Задача</span>
                        <p className="text-sm leading-relaxed text-white/[0.72]">{project.request}</p>
                      </div>
                      <div className="mt-5 grid gap-2 border-t border-white/10 pt-5 sm:grid-cols-[115px_1fr] sm:gap-5">
                        <span className="text-xs font-semibold uppercase tracking-[0.13em] text-white/40">Выполнено</span>
                        <ul className="space-y-2 text-sm text-white/85">
                          {project.work.map((item) => <li key={item} className="flex items-start gap-2"><span className="mt-2 h-1 w-1 shrink-0 rotate-45 bg-[#b78ae8]" />{item}</li>)}
                        </ul>
                      </div>
                      <div className="mt-6 border-t border-[#a875ff]/35 pt-5 lg:mt-auto">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c6a4ec]">Результат</span>
                        <p className="mt-2 text-sm leading-relaxed text-white/[0.78]">{project.result}</p>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 grid grid-cols-[1fr_auto_1fr] items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2 justify-self-start" aria-label="Выбрать проект">
              {cases.map((project, index) => (
                <button key={project.model} type="button" onClick={() => emblaApi?.scrollTo(index)} aria-label={`Показать проект ${project.model}`} aria-current={selectedIndex === index ? "true" : undefined} className={`h-1.5 transition-all duration-300 ${selectedIndex === index ? "w-12 bg-[#8b5cf6]" : "w-6 bg-[#1b1722]/15 hover:bg-[#1b1722]/35"}`} />
              ))}
            </div>
            <span className="justify-self-center font-display text-sm font-semibold text-[#1b1722]/45">{String(selectedIndex + 1).padStart(2, "0")} <span className="text-[#1b1722]/25">/ {String(cases.length).padStart(2, "0")}</span></span>
            <div className="flex items-center gap-4 justify-self-end">
              <button type="button" onClick={scrollPrev} aria-label="Предыдущая работа" className="flex h-12 w-12 items-center justify-center border border-[#1b1722]/15 text-[#1b1722] transition-colors hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/10"><ArrowLeft className="h-5 w-5" /></button>
              <button type="button" onClick={scrollNext} aria-label="Следующая работа" className="flex h-12 w-12 items-center justify-center border border-[#1b1722]/15 text-[#1b1722] transition-colors hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/10"><ArrowRight className="h-5 w-5" /></button>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {expandedIndex !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }} className="fixed inset-0 z-[100] bg-black/90" role="dialog" aria-modal="true" aria-label={`Фотография проекта ${cases[expandedIndex].model}`}>
            <motion.div layoutId={`portfolio-photo-${expandedIndex}`} className="relative h-[100dvh] w-screen overflow-hidden bg-black" transition={{ type: "spring", stiffness: 150, damping: 24, mass: 0.9 }}>
              <ProjectPhoto project={cases[expandedIndex]} eager />
              <motion.aside initial={{ opacity: 0, x: -32 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-x-0 bottom-0 z-10 max-h-[68dvh] overflow-y-auto border-t border-white/15 bg-[linear-gradient(145deg,rgba(3,2,5,0.97),rgba(15,7,24,0.93))] p-6 text-white shadow-[0_-24px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-8 lg:inset-y-0 lg:right-auto lg:max-h-none lg:w-[42vw] lg:max-w-[620px] lg:border-t-0 lg:border-r lg:p-10 xl:w-[38vw] xl:p-14">
                <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#c6a4ec]">
                  <span className="h-px w-8 bg-[#b78ae8]" /> Первый экран проекта
                </div>
                <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">{cases[expandedIndex].field}</p>
                <h2 className="mt-3 font-display text-[clamp(2.7rem,5vw,5.4rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-white">{cases[expandedIndex].model}</h2>

                <div className="mt-9 border-t border-white/[0.12] pt-5">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">Задача</span>
                  <p className="mt-3 text-sm leading-6 text-white/[0.74] md:text-base md:leading-7">{cases[expandedIndex].request}</p>
                </div>

                <div className="mt-7 border-t border-white/[0.12] pt-5">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">Выполнено</span>
                  <ul className="mt-3 space-y-2.5 text-sm text-white/85 md:text-base">
                    {cases[expandedIndex].work.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-[#b78ae8]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 border-t border-[#a875ff]/40 pt-5">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#c6a4ec]">Результат</span>
                  <p className="mt-3 text-sm leading-6 text-white/80 md:text-base md:leading-7">{cases[expandedIndex].result}</p>
                </div>
              </motion.aside>
              <button type="button" onClick={() => setExpandedIndex(null)} className="absolute right-5 top-5 z-20 flex h-14 w-20 items-center justify-center transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:right-8 md:top-8" aria-label={`Свернуть фотографию ${cases[expandedIndex].model}`}>
                <img src={cases[expandedIndex].brandLogo} alt="" aria-hidden="true" className="h-full w-full object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.45)]" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
