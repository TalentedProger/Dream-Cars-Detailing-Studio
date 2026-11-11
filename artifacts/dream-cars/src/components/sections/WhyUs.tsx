import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

const sectionBackgroundImage = `${import.meta.env.BASE_URL}why-us/section-background.webp`;
const polishingImage = `${import.meta.env.BASE_URL}why-us/polishing-is-the-key.webp`;
const w140Image = `${import.meta.env.BASE_URL}cars/mercedes-w140-cutout.webp`;
const qualityImage = `${import.meta.env.BASE_URL}why-us/quality-guarantee.webp`;
const agreementImage = `${import.meta.env.BASE_URL}why-us/agreement-flame.webp`;

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export function WhyUs() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section id="about" className="render-optimized relative isolate overflow-hidden bg-[#080709] py-24 text-white md:py-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <img src={sectionBackgroundImage} alt="" loading="lazy" decoding="async" className="h-full w-full scale-105 object-cover object-[58%_center] opacity-[0.32] md:object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(3,2,5,0.98)_0%,rgba(7,4,10,0.9)_48%,rgba(5,3,8,0.82)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_72%,rgba(124,58,237,0.2),transparent_34%),radial-gradient(circle_at_88%_20%,rgba(168,117,255,0.14),transparent_32%)]" />
      </div>

      <div className="container relative mx-auto px-4 md:px-6">
        <div>
          <div className="mb-10 grid gap-6 md:mb-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-70px" }} variants={reveal} transition={{ duration: reduceMotion ? 0 : 0.7 }}>
              <h2 className="max-w-3xl font-display text-[clamp(2.7rem,4.7vw,5rem)] font-semibold leading-[0.94] tracking-[-0.06em]">
                Почему выбирают <span className="text-[#a875ff]">именно нас</span>
              </h2>
            </motion.div>

            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.1 }} className="max-w-md text-sm leading-6 text-white/55 md:text-base md:leading-7 lg:justify-self-end">
              Точность в работе, понятный процесс и ответственность за каждый автомобиль — от первого осмотра до выдачи.
            </motion.p>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-70px" }} variants={{ hidden: {}, visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.08 } } }} className="grid gap-3 md:grid-cols-2 lg:grid-cols-[repeat(11,minmax(0,1fr))] lg:grid-rows-[303px_303px]">
            <motion.article variants={reveal} transition={{ duration: reduceMotion ? 0 : 0.65 }} className="group relative flex min-h-[289px] flex-col overflow-hidden bg-[linear-gradient(145deg,#6840b5,#431b86)] p-6 shadow-[0_18px_50px_rgba(67,27,134,0.24)] lg:col-span-4 lg:min-h-0">
              <img src={w140Image} alt="Чёрный Mercedes-Benz W140" loading="lazy" decoding="async" className="pointer-events-none absolute -bottom-[8%] right-0 h-[133%] w-auto max-w-none object-contain object-right drop-shadow-[0_18px_24px_rgba(0,0,0,0.3)]" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[58%] bg-[linear-gradient(to_top,rgba(0,0,0,0.96)_0%,rgba(0,0,0,0.76)_38%,rgba(0,0,0,0.3)_72%,transparent_100%)] md:h-[46%]" />
              <strong className="relative z-10 font-display text-5xl font-semibold tracking-[-0.055em] text-white md:text-6xl">500+</strong>
              <div className="relative z-10 mt-auto max-w-full md:max-w-[58%]">
                <p className="whitespace-nowrap text-sm font-semibold text-white">Автомобилей доверили нам</p>
                <p className="mt-1 whitespace-nowrap text-xs leading-5 text-white/70">Опыт, собранный на разных марках и задачах.</p>
              </div>
            </motion.article>

            <motion.article variants={reveal} transition={{ duration: reduceMotion ? 0 : 0.65 }} className="relative flex min-h-[289px] flex-col overflow-hidden border border-white/10 bg-[#030204] p-6 lg:col-span-4 lg:min-h-0">
              <svg viewBox="0 0 520 230" preserveAspectRatio="none" aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[82%] w-full [mask-image:linear-gradient(to_right,black_0%,black_80%,transparent_100%)]">
                <defs>
                  <linearGradient id="why-us-chart-area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#8b5cf6" stopOpacity="0.68" />
                    <stop offset="0.55" stopColor="#6d28d9" stopOpacity="0.3" />
                    <stop offset="1" stopColor="#4c1d95" stopOpacity="0.04" />
                  </linearGradient>
                  <linearGradient id="why-us-chart-line" x1="0" y1="0" x2="1" y2="0">
                    <stop stopColor="#d5b9ff" />
                    <stop offset="1" stopColor="#8b5cf6" />
                  </linearGradient>
                  <filter id="why-us-chart-glow" x="-20%" y="-30%" width="140%" height="160%">
                    <feGaussianBlur stdDeviation="7" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                </defs>
                <path d="M0 190 C72 178 92 116 158 118 C218 120 239 179 297 168 C340 160 326 80 383 70 C435 61 467 47 500 20 L520 230 L0 230 Z" fill="url(#why-us-chart-area)" />
                <motion.path d="M0 190 C72 178 92 116 158 118 C218 120 239 179 297 168 C340 160 326 80 383 70 C435 61 467 47 500 20" fill="none" stroke="url(#why-us-chart-line)" strokeWidth="6" strokeLinecap="round" filter="url(#why-us-chart-glow)" initial={{ pathLength: reduceMotion ? 1 : 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: reduceMotion ? 0 : 1.25, delay: reduceMotion ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }} />
              </svg>
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-24 bg-gradient-to-t from-black via-black/80 to-transparent" />
              <strong className="relative z-10 font-display text-5xl font-semibold tracking-[-0.055em] text-white md:text-6xl">5 лет</strong>
              <div className="relative z-10 mt-auto">
                <p className="text-sm font-semibold text-white">Практики в детейлинге</p>
                <p className="mt-1 text-xs leading-5 text-white/55">Работаем с материалами премиального класса.</p>
              </div>
            </motion.article>

            <motion.figure variants={reveal} transition={{ duration: reduceMotion ? 0 : 0.7 }} className="relative min-h-[473px] overflow-hidden border border-white/10 bg-[#151019] md:col-span-2 md:min-h-[591px] lg:col-span-3 lg:row-span-2 lg:min-h-0">
              <img src={polishingImage} alt="Мастер Dream Cars полирует кузов автомобиля" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 hover:scale-[1.035]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/[0.08] to-black/25" />
              <p className="absolute right-6 top-6 hidden text-right text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c6a4ec] md:right-7 md:top-7 md:block">Команда Dream Cars</p>
              <figcaption className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                <p className="max-w-sm font-display text-[2rem] font-semibold leading-[1.05] tracking-[-0.035em] text-white">
                  <span className="block">Один стандарт</span>
                  <span className="block">качества для</span>
                  <span className="block">каждой работы</span>
                </p>
              </figcaption>
            </motion.figure>

            <motion.article variants={reveal} transition={{ duration: reduceMotion ? 0 : 0.65 }} className="relative flex min-h-[289px] flex-col overflow-hidden border border-white/15 bg-white/[0.12] p-6 backdrop-blur-xl lg:col-span-2 lg:min-h-0">
              <strong className="font-display text-4xl font-semibold tracking-[-0.05em] text-[#b78ae8] md:text-5xl">100%</strong>
              <img src={qualityImage} alt="" aria-hidden="true" loading="lazy" className="pointer-events-none absolute left-1/2 top-1/2 h-[98px] w-[98px] -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_12px_24px_rgba(67,120,255,0.22)]" />
              <p className="mt-auto text-sm font-semibold leading-snug text-white"><span className="block">Согласование</span><span className="block">до старта</span></p>
            </motion.article>

            <motion.article variants={reveal} transition={{ duration: reduceMotion ? 0 : 0.65 }} className="flex min-h-[289px] flex-col border border-black/10 bg-white p-6 text-[#17131d] shadow-[0_18px_50px_rgba(0,0,0,0.12)] lg:col-span-4 lg:min-h-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7138c7]">Мастерство и открытость</p>
              <h3 className="mt-4 max-w-sm font-display text-2xl font-semibold leading-tight tracking-[-0.035em] text-[#17131d]">Руки, которым доверяют сложное</h3>
              <p className="mt-3 max-w-sm text-sm leading-6 text-[#17131d]/60">Подбираем технологию под состояние автомобиля и показываем, из чего складывается результат.</p>
              <div className="mt-auto flex items-center justify-between gap-4 pt-4">
                <p className="text-xs font-semibold text-[#17131d]/70">Dream Cars Studio</p>
                <span className="premium-cta flex h-9 w-10 items-center justify-center bg-[linear-gradient(135deg,#8b5cf6,#5b21b6)] font-display text-xs font-bold tracking-[-0.04em] text-white shadow-[0_8px_20px_rgba(91,33,182,0.25)]" aria-label="Логотип Dream Cars">DC</span>
              </div>
            </motion.article>

            <motion.article variants={reveal} transition={{ duration: reduceMotion ? 0 : 0.65 }} className="relative flex min-h-[289px] flex-col overflow-hidden bg-[linear-gradient(145deg,rgba(168,117,255,0.92),rgba(101,49,177,0.96))] p-6 lg:col-span-2 lg:min-h-0">
              <strong className="max-w-[150px] font-display text-3xl font-semibold leading-[0.95] tracking-[-0.05em] text-white md:text-4xl">30 дней</strong>
              <img src={agreementImage} alt="" aria-hidden="true" loading="lazy" className="pointer-events-none absolute left-1/2 top-1/2 h-[106px] w-[106px] -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_12px_26px_rgba(36,88,255,0.28)]" />
              <p className="mt-auto text-sm font-semibold leading-snug text-white"><span className="block">Гарантия</span><span className="block">качества</span></p>
            </motion.article>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : 0.12 }} className="mt-10 flex justify-center md:mt-12">
            <Link href="/about" className="premium-cta inline-flex min-h-14 items-center gap-5 bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] px-7 py-4 text-sm font-bold uppercase tracking-[0.1em] text-white shadow-[0_12px_36px_-12px_rgba(139,92,246,0.7)] transition-colors hover:from-[#9f75ff] hover:to-[#7c3aed] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c5a7ff]">
              Подробнее о студии <span className="border-l border-white/35 pl-4"><ArrowUpRight className="h-5 w-5" aria-hidden="true" /></span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
