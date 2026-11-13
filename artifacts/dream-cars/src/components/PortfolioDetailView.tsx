import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, BadgeCheck, CarFront, ClipboardCheck, ShieldCheck, Target, Wrench, X } from "lucide-react";
import { Link } from "wouter";

export type PortfolioDetailProject = {
  model: string;
  brand: string;
  brandLogo?: string;
  field: string;
  image: string;
  imageAlt?: string;
  request: string;
  work: string[];
  result: string;
  year?: string;
};

type PortfolioDetailViewProps = {
  project: PortfolioDetailProject;
  onClose: () => void;
  theme?: "light" | "dark";
};

export function PortfolioDetailView({ project, onClose, theme = "light" }: PortfolioDetailViewProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const dark = theme === "dark";
  const border = dark ? "border-white/12" : "border-black/10";
  const muted = dark ? "text-white/55" : "text-[#17131d]/55";
  const galleryImages = [
    project.image,
    `${import.meta.env.BASE_URL}our_work/polishing_ceramics.webp`,
    `${import.meta.env.BASE_URL}our_work/wrapping_with_film.webp`,
    `${import.meta.env.BASE_URL}our_work/Interior_detailing.webp`,
    `${import.meta.env.BASE_URL}our_work/anti-rain.webp`,
  ];

  const showPreviousImage = () => setSelectedImageIndex((current) => current === null ? null : (current - 1 + galleryImages.length) % galleryImages.length);
  const showNextImage = () => setSelectedImageIndex((current) => current === null ? null : (current + 1) % galleryImages.length);

  useEffect(() => {
    if (selectedImageIndex === null) return;
    const handleGalleryKeys = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPreviousImage();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        showNextImage();
      }
    };
    window.addEventListener("keydown", handleGalleryKeys);
    return () => window.removeEventListener("keydown", handleGalleryKeys);
  }, [selectedImageIndex]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      className={`fixed inset-0 z-[100] overflow-y-auto overscroll-contain ${dark ? "bg-black text-white" : "bg-[#f5f2f8] text-[#17131d]"}`}
      role="dialog"
      aria-modal="true"
      aria-label={`Проект ${project.model}`}
    >
      <header className={`sticky top-0 z-40 border-b ${border} ${dark ? "bg-black/95" : "bg-[#f5f2f8]/95"}`}>
        <div className="container mx-auto flex min-h-16 items-center justify-between px-4 md:min-h-20 md:px-6">
          <button type="button" onClick={onClose} className={`inline-flex h-11 items-center justify-center border px-4 text-xs font-semibold uppercase tracking-[0.1em] transition-colors md:px-5 ${dark ? "border-white/25 text-white hover:border-white/55 hover:bg-white/8" : "border-black/25 text-[#17131d] hover:border-black/55 hover:bg-black/[0.04]"}`} aria-label="Вернуться к списку работ">
            Назад к работам
          </button>

          {project.brandLogo ? (
            <img src={project.brandLogo} alt={`Логотип ${project.brand}`} className={`h-9 w-16 object-contain md:h-11 md:w-20 ${dark ? "brightness-0 invert" : ""}`} />
          ) : (
            <span className="font-display text-sm font-semibold uppercase tracking-[0.18em]">{project.brand}</span>
          )}

          <button type="button" onClick={onClose} className={`flex h-10 w-10 items-center justify-center border transition-colors hover:border-[#8b5cf6] hover:text-[#8b5cf6] ${border}`} aria-label="Закрыть страницу проекта">
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 pb-12 pt-10 md:px-6 md:pb-16 md:pt-16">
        <section className="pb-10 md:pb-14">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.54fr)] lg:items-start">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b5cf6]">{project.field}</p>
              <h2 className="mt-4 max-w-5xl font-display text-[clamp(2.8rem,7vw,6.6rem)] font-semibold leading-[0.9] tracking-[-0.065em]">{project.model}</h2>
              <p className={`mt-6 max-w-none text-base leading-7 md:w-max md:text-lg ${muted}`}><span className="md:block md:whitespace-nowrap">Показываем реальный проект Dream Cars: от исходного запроса и точной работы с деталями </span><span className="md:block md:whitespace-nowrap">до результата, который можно рассмотреть в каждом кадре.</span></p>
            </div>

            <dl className="grid grid-cols-3 gap-2 lg:mt-[31px]">
              <div className="flex min-w-0 items-center gap-3 rounded-[5px] bg-[#7542c8] px-3 py-5 text-white md:px-4">{project.brandLogo ? <img src={project.brandLogo} alt="" aria-hidden="true" className="h-6 w-6 shrink-0 object-contain" /> : <CarFront className="h-5 w-5 shrink-0" aria-hidden="true" />}<div className="min-w-0"><dt className="text-[9px] font-semibold uppercase tracking-[0.16em] opacity-60">Марка</dt><dd className="mt-1 truncate text-sm font-semibold">{project.brand}</dd></div></div>
              <div className="flex min-w-0 items-center gap-3 rounded-[5px] bg-[#7542c8] px-3 py-5 text-white md:px-4"><Wrench className="h-5 w-5 shrink-0" aria-hidden="true" /><div className="min-w-0"><dt className="text-[9px] font-semibold uppercase tracking-[0.16em] opacity-60">Операций</dt><dd className="mt-1 text-sm font-semibold">{project.work.length}</dd></div></div>
              <div className="flex min-w-0 items-center gap-3 rounded-[5px] bg-[#7542c8] px-3 py-5 text-white md:px-4"><BadgeCheck className="h-5 w-5 shrink-0" aria-hidden="true" /><div className="min-w-0"><dt className="text-[9px] font-semibold uppercase tracking-[0.16em] opacity-60">Статус</dt><dd className="mt-1 truncate text-sm font-semibold">Завершено</dd></div></div>
            </dl>
          </div>
        </section>

        <section aria-label={`Фотографии проекта ${project.model}`}>
          <div className="-mx-4 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:px-0">
            <div className="flex min-w-max gap-2 md:min-w-0 md:gap-3">
              {galleryImages.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setSelectedImageIndex(index)}
                  className="group relative aspect-[4/3] w-[72vw] shrink-0 overflow-hidden rounded-[5px] bg-black/10 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#8b5cf6] md:w-auto md:min-w-0 md:flex-1"
                  aria-label={`Открыть фотографию ${index + 1} проекта ${project.model}`}
                >
                  <img src={image} alt={`${project.model}, фотография проекта ${index + 1}`} loading={index === 0 ? "eager" : "lazy"} decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-colors group-hover:from-black/10" />
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-4 pt-9 md:pb-5 md:pt-12">
          <h3 className={`flex items-start gap-3 font-display text-2xl font-semibold tracking-[-0.04em] ${dark ? "text-white" : "text-[#17131d]"}`}><Target className="mt-0.5 h-5 w-5 shrink-0 text-[#8b5cf6]" aria-hidden="true" />Задача</h3>
          <p className={`mt-4 max-w-4xl text-left text-base leading-7 md:text-lg ${muted}`}>{project.request}</p>
        </section>

        <section className={`border-t pb-9 pt-4 md:pb-12 md:pt-5 ${dark ? "border-white/15" : "border-black/20"}`}>
          <h3 className={`flex items-start gap-3 font-display text-2xl font-semibold tracking-[-0.04em] ${dark ? "text-white" : "text-[#17131d]"}`}><ClipboardCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#8b5cf6]" aria-hidden="true" />Выполнено</h3>
          <ol className="mt-5 max-w-4xl space-y-4">
            {project.work.map((item) => (
              <li key={item} className="grid grid-cols-[20px_1fr] items-start py-1">
                <span className={`mt-[7px] flex h-2.5 w-2.5 items-center justify-center rounded-full ${dark ? "bg-white/15" : "bg-black/10"}`} aria-hidden="true"><span className={`h-1 w-1 rounded-full ${dark ? "bg-white" : "bg-black"}`} /></span>
                <span className={`text-sm font-medium leading-6 md:text-base ${dark ? "text-white/80" : "text-[#17131d]/75"}`}>{item}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className={`border-t pb-9 pt-4 md:pb-12 md:pt-5 ${dark ? "border-white/15" : "border-black/20"}`}>
          <h3 className={`flex items-start gap-3 font-display text-2xl font-semibold tracking-[-0.04em] ${dark ? "text-white" : "text-[#17131d]"}`}><ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#8b5cf6]" aria-hidden="true" />Результат</h3>
          <p className={`mt-4 max-w-4xl text-left text-base leading-7 md:text-lg ${muted}`}>{project.result}</p>
        </section>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <p className={`text-sm ${muted}`}>Хотите похожий результат для своего автомобиля?</p>
          <Link href="/contact" onClick={onClose} className="premium-cta inline-flex min-h-14 items-center gap-5 bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] px-7 py-4 text-xs font-bold uppercase tracking-[0.1em] text-white">
            Обсудить проект <span className="border-l border-white/35 pl-4"><ArrowUpRight className="h-5 w-5" aria-hidden="true" /></span>
          </Link>
        </div>
      </main>

      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/[0.96] p-4 md:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={`Увеличенная фотография проекта ${project.model}`}
            onClick={() => setSelectedImageIndex(null)}
          >
            <motion.img
              key={selectedImageIndex}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.985 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              src={galleryImages[selectedImageIndex]}
              alt={`${project.model}, увеличенная фотография`}
              className="max-h-full max-w-full cursor-grab touch-pan-y select-none object-contain active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.16}
              draggable={false}
              onDragEnd={(_, info) => {
                if (info.offset.x > 70 || info.velocity.x > 500) showPreviousImage();
                if (info.offset.x < -70 || info.velocity.x < -500) showNextImage();
              }}
              onClick={(event) => event.stopPropagation()}
            />
            <button
              type="button"
              onClick={(event) => { event.stopPropagation(); showPreviousImage(); }}
              className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/25 bg-black/60 text-white transition-colors hover:border-white/60 hover:bg-white hover:text-black md:left-7 md:h-14 md:w-14"
              aria-label="Предыдущая фотография"
            >
              <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={(event) => { event.stopPropagation(); showNextImage(); }}
              className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/25 bg-black/60 text-white transition-colors hover:border-white/60 hover:bg-white hover:text-black md:right-7 md:h-14 md:w-14"
              aria-label="Следующая фотография"
            >
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => setSelectedImageIndex(null)}
              className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center border border-white/25 bg-black/60 text-white transition-colors hover:border-white/60 hover:bg-white hover:text-black md:right-7 md:top-7"
              aria-label="Закрыть фотографию"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
