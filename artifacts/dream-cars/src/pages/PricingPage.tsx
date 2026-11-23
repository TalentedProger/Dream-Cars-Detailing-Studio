import { motion } from "framer-motion";
import { Check, HelpCircle, ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Footer } from "@/components/sections/Footer";
import { CtaBenefits } from "@/components/CtaBenefits";
import { useBooking } from "@/contexts/BookingContext";
import { usePageMeta } from "@/hooks/use-page-meta";

const plans = [
  {
    name: "Базовый",
    price: "от 3 000 ₽",
    desc: "Поддерживаем чистоту кузова и свежесть салона для повседневных поездок.",
    features: [
      "Трёхфазная мойка кузова",
      "Уборка салона пылесосом",
      "Очистка стёкол изнутри",
      "Чернение резины",
      "Влажная уборка пластика",
      "Контроль чистоты перед выдачей",
    ],
    popular: false,
    color: "#7C3AED",
  },
  {
    name: "Стандарт",
    price: "от 8 000 ₽",
    desc: "Глубоко очищаем автомобиль и добавляем базовую защиту поверхностей.",
    features: [
      "Всё из Базового пакета",
      "Лёгкая полировка (1 шаг)",
      "Твёрдый воск",
      "Глубокая очистка кожи",
      "Антидождь на полусферу",
      "Детейлинг дисков",
    ],
    popular: true,
    color: "#7C3AED",
  },
  {
    name: "Премиум",
    price: "от 20 000 ₽",
    desc: "Восстанавливаем внешний вид и защищаем кузов и салон профессиональными составами.",
    features: [
      "Всё из Стандарта",
      "Абразивная полировка (2 шага)",
      "Керамическое покрытие",
      "Полная химчистка + озонация",
      "Защита кожи керамикой",
      "Детейлинг двигателя",
    ],
    popular: false,
    color: "#7C3AED",
  },
];

const individual = [
  { service: "Трёхфазная мойка", price: "1 500 – 3 000 ₽", image: "services/foam-wash-bmw.png", category: "Бережный уход", detail: "Очистка кузова без лишнего воздействия на покрытие." },
  { service: "Химчистка салона", price: "от 10 000 ₽", image: "services/detailing-tools.webp", category: "Интерьер", detail: "Глубокая очистка ткани, кожи и труднодоступных зон." },
  { service: "Полировка (1 шаг)", price: "от 8 000 ₽", image: "services/polishing-kit.webp", category: "Восстановление", detail: "Освежаем блеск и убираем лёгкие следы эксплуатации." },
  { service: "Детейлинг двигателя", price: "от 5 000 ₽", image: "services/engine-detailing-centered.webp", category: "Под капотом", detail: "Аккуратно очищаем и приводим в порядок подкапотное пространство." },
  { service: "Реставрация фар", price: "от 4 000 ₽", image: "services/headlight-kit.webp", category: "Оптика", detail: "Возвращаем прозрачность и защищаем поверхность фар." },
  { service: "Озонирование", price: "от 2 000 ₽", image: "services/ozonator.png", category: "Воздух в салоне", detail: "Обработка салона для устранения стойких запахов." },
  { service: "PPF (полный кузов)", price: "от 90 000 ₽", image: "services/ppf-roll.png", category: "Защитная плёнка", detail: "Защищаем все окрашенные панели автомобиля." },
  { service: "Антидождь", price: "от 3 000 ₽", image: "services/anti-rain-kit.png", category: "Обзор", detail: "Водоотталкивающее покрытие для автомобильных стёкол." },
  { service: "Полировка (2 шага)", price: "от 15 000 ₽", image: "services/polish-2.png", category: "Восстановление", detail: "Работаем с более заметными дефектами лакокрасочного покрытия." },
  { service: "Керамика SiO₂", price: "от 25 000 ₽", image: "services/ceramic-sio2.png", category: "Защита кузова", detail: "Добавляем глубину цвета и гидрофобные свойства." },
  { service: "PPF (зоны риска)", price: "от 30 000 ₽", image: "services/ppf-roll.png", category: "Защитная плёнка", detail: "Закрываем участки, которые чаще встречают сколы." },
  { service: "Тонировка", price: "от 5 000 ₽", image: "services/tint-film.png", category: "Стёкла", detail: "Подбираем плёнку и аккуратно наносим её на стёкла." },
];

const faqs = [
  {
    q: "Как долго держится керамическое покрытие?",
    a: "Профессиональное нанокерамическое покрытие при правильном уходе держится от 3 до 5 лет. На каждое покрытие мы выдаём гарантийный сертификат.",
  },
  {
    q: "Нужно ли как-то готовить машину перед приездом?",
    a: "Нет. Приезжайте в любом состоянии — мы всё сделаем сами. Если есть возможность — приезжайте с немытым автомобилем, чтобы мы могли оценить реальный объём работ.",
  },
  {
    q: "Почему окончательная стоимость зависит от класса авто?",
    a: "Площадь кузова и сложность работ напрямую зависят от размера автомобиля. Детейлинг кроссовера и спорт-купе — по времени и материалам могут различаться в 2 раза.",
  },
  {
    q: "Можно ли остаться и наблюдать за процессом?",
    a: "Да, мы приветствуем ваше присутствие. У нас есть зона ожидания с кофе, а мастера с удовольствием объяснят каждый этап.",
  },
  {
    q: "Даёте ли вы гарантию на работы?",
    a: "Да. На полировку — 3 месяца, на нанесение воска — 3–6 месяцев, на керамику — официальная гарантия производителя от 1 до 5 лет в зависимости от выбранного покрытия.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-white/8 rounded-2xl overflow-hidden cursor-pointer hover:border-[#7C3AED]/30 transition-colors"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between gap-4 p-6">
        <span className="text-white font-medium text-sm">{q}</span>
        <ChevronDown className={`w-5 h-5 text-[#7C3AED] shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </div>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="px-6 pb-6 text-white/55 text-sm leading-relaxed border-t border-white/8"
        >
          <p className="pt-4">{a}</p>
        </motion.div>
      )}
    </div>
  );
}

export default function PricingPage() {
  const { open } = useBooking();
  const ctaVideoRef = useRef<HTMLVideoElement>(null);
  const mobileOptimized = typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;
  usePageMeta({
    title: "Цены на детейлинг — Dream Cars Studio",
    description: "Цены на детейлинг: до 35 000 ₽ — Полировка, до 70 000 ₽ — Керамика, до 140 000 ₽ — PPF+Керамика. Бесплатная консультация. Car detailing prices: ceramic coating, PPF, polishing.",
    keywords: "цены детейлинг, стоимость полировки, цена керамики, PPF цена, car detailing cost, ceramic coating price, PPF price",
    canonicalPath: "/pricing",
  });

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
    <main className="relative min-h-screen w-full overflow-x-clip bg-[#080808] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[1900px] overflow-hidden [mask-image:linear-gradient(to_bottom,black_0%,black_78%,transparent_100%)] md:h-[1200px]" aria-hidden="true">
        <svg className="absolute left-1/2 top-0 h-full min-w-[850px] w-[120%] -translate-x-1/2" viewBox="0 0 1200 1100" preserveAspectRatio="xMidYMid slice" fill="none">
          <defs>
            <radialGradient id="pricing-ambient-violet">
              <stop stopColor="#9054df" stopOpacity=".42" />
              <stop offset=".48" stopColor="#5e2c9c" stopOpacity=".19" />
              <stop offset="1" stopColor="#2a153a" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="pricing-ambient-lilac">
              <stop stopColor="#b98af2" stopOpacity=".29" />
              <stop offset=".5" stopColor="#6d3aa6" stopOpacity=".13" />
              <stop offset="1" stopColor="#291438" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="pricing-silk" x1="265" y1="1060" x2="1020" y2="-80" gradientUnits="userSpaceOnUse">
              <stop stopColor="#130d1c" stopOpacity="0" />
              <stop offset=".19" stopColor="#46276c" stopOpacity=".42" />
              <stop offset=".42" stopColor="#9a66d7" stopOpacity=".73" />
              <stop offset=".55" stopColor="#4d2879" stopOpacity=".57" />
              <stop offset=".78" stopColor="#7c44bf" stopOpacity=".52" />
              <stop offset="1" stopColor="#1a1126" stopOpacity=".1" />
            </linearGradient>
            <linearGradient id="pricing-silk-edge" x1="300" y1="1010" x2="970" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#be9ce9" stopOpacity="0" />
              <stop offset=".38" stopColor="#d9b7ff" stopOpacity=".35" />
              <stop offset=".68" stopColor="#b385ea" stopOpacity=".25" />
              <stop offset="1" stopColor="#a375d5" stopOpacity="0" />
            </linearGradient>
          </defs>
          <ellipse cx="865" cy="290" rx="345" ry="345" fill="url(#pricing-ambient-violet)" />
          <ellipse cx="395" cy="785" rx="385" ry="330" fill="url(#pricing-ambient-lilac)" />
          <path d="M935 -130 C 855 65 980 198 903 365 C 828 528 610 567 466 686 C 338 793 272 918 272 1140 L 104 1140 C 114 850 239 669 395 559 C 567 437 729 423 757 293 C 793 129 683 42 748 -130 Z" fill="url(#pricing-silk)" />
          <path d="M748 -130 C 683 42 793 129 757 293 C 729 423 567 437 395 559 C 239 669 114 850 104 1140" stroke="url(#pricing-silk-edge)" strokeWidth="2" />
        </svg>
      </div>

      {/* Hero */}
      <section className="relative z-10 pb-0 pt-40 md:pb-20">
        <div className="performance-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#7C3AED]/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div initial={mobileOptimized ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <h1 className="text-6xl md:text-8xl font-display font-black leading-none mb-6">
              <span className="text-white">Наши </span>
              <span style={{ background: "linear-gradient(135deg, #ffffff 0%, #a78bfa 50%, #7c3aed 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>цены</span>
            </h1>
            <p className="text-white/55 max-w-xl text-lg leading-relaxed">
              Честная стоимость без скрытых доплат. Итоговая цена зависит от класса и состояния автомобиля — уточним на консультации.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Plans */}
      <section className="relative z-10 pb-24 pt-6 md:pt-10">
        <div className="relative mx-auto w-full max-w-[1440px] px-4 md:px-6">
          <div className="mx-auto grid w-full max-w-[1325px] grid-cols-1 gap-5 md:grid-cols-3 md:gap-3 lg:gap-4">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={mobileOptimized ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group relative flex min-h-[440px] flex-col overflow-visible rounded-[26px] border bg-[linear-gradient(155deg,rgba(16,19,21,0.7),rgba(9,10,12,0.79)_57%,rgba(13,14,16,0.73))] px-6 pb-6 pt-7 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_24px_48px_rgba(0,0,0,0.22)] backdrop-blur-[6px] md:min-h-[470px] lg:px-7 lg:pt-8 ${i === 2 ? "border-[#bc91ff]/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_0_32px_rgba(139,92,246,0.25),0_24px_48px_rgba(0,0,0,0.22)]" : plan.popular ? "border-white/55" : "border-white/35"}`}
              >
                <div className={`pointer-events-none absolute inset-x-0 top-0 h-24 rounded-t-[26px] bg-gradient-to-b ${i === 2 ? "from-[#a875ff]/20" : "from-white/[0.055]"} to-transparent`} aria-hidden="true" />
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] px-5 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_4px_16px_rgba(124,58,237,0.4)]">
                    Выбор клиентов
                  </div>
                )}
                <div className="relative mb-5">
                  <h3 className="font-display text-[1.65rem] font-medium leading-none tracking-[-0.045em] text-white">{plan.name}</h3>
                  <div className="mt-2 font-display text-[2.25rem] font-semibold leading-none tracking-[-0.055em] text-white lg:text-[2.5rem]">{plan.price}</div>
                  <p className="mt-5 min-h-10 max-w-[290px] text-xs leading-[1.45] text-white/65">{plan.desc}</p>
                </div>
                <ul className="relative mb-6 grid flex-grow content-start grid-rows-[repeat(6,36px)] gap-1.5">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/25 text-white"><Check className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" /></span>
                      <span className="pt-px text-xs leading-[1.5] text-white/80">{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={open}
                  className="relative mx-auto flex min-h-10 w-[min(100%,172px)] items-center justify-center rounded-full bg-white px-5 py-2 text-xs font-semibold text-[#111315] transition-colors hover:bg-[#f0e6ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Выбрать
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual services */}
      <section className="relative z-10 bg-[#f5f4f2] py-20 text-[#141316] md:py-28">
        <motion.h2 initial={mobileOptimized ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-9 px-3 font-display text-[clamp(2.5rem,5.5vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.07em] text-[#141316] md:mb-10 md:px-4">
          Отдельные услуги
        </motion.h2>
        <div className="grid w-full grid-cols-1 gap-px border-y border-[#17141c]/20 bg-[#17141c]/20 sm:grid-cols-2 lg:grid-cols-3">
            {individual.map((item, i) => (
              <button
                key={item.service}
                type="button"
                onClick={open}
                aria-label={`${item.service}, ${item.price}. Оставить заявку`}
                className={`group relative flex min-h-[370px] min-w-0 flex-col overflow-hidden p-5 text-left transition-colors duration-300 focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#7C3AED] focus-visible:outline-offset-[-3px] md:min-h-[405px] md:p-6 ${i === 0 ? "bg-[#111013] text-white" : "bg-[#faf9f7] text-[#17151b] hover:bg-white"}`}
              >
                {i === 0 && (
                  <>
                    <img src={`/${item.image}`} alt="" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover object-[64%_center]" />
                    <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(6,6,8,0.84)_0%,rgba(6,6,8,0.22)_35%,rgba(6,6,8,0.12)_56%,rgba(6,6,8,0.88)_100%)]" />
                  </>
                )}
                <span className="relative z-10 flex w-full items-start justify-between gap-4">
                  <span className="min-w-0">
                    <span className="block font-display text-xl font-medium leading-tight tracking-[-0.045em] md:text-[1.45rem]">{item.service}</span>
                    <span className={`mt-2 block text-[10px] font-medium uppercase tracking-[0.12em] ${i === 0 ? "text-white/55" : "text-[#746f7a]"}`}>{item.category}</span>
                  </span>
                  <ArrowUpRight aria-hidden="true" className="h-6 w-6 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.5} />
                </span>
                <span className="relative z-10 flex min-h-0 flex-1 items-center justify-center py-4">
                  {i !== 0 && <img src={`/${item.image}`} alt="" loading="lazy" decoding="async" className="relative h-[185px] w-[88%] object-contain md:h-[210px]" />}
                </span>
                <span className="relative z-10 flex w-full items-end justify-between gap-5">
                  <span className={`max-w-[240px] text-xs leading-[1.5] md:text-[13px] ${i === 0 ? "text-white/65" : "text-[#514c56]"}`}>{item.detail}</span>
                  <span className="shrink-0 whitespace-nowrap font-display text-xs font-semibold tracking-[-0.025em] md:text-sm">{item.price}</span>
                </span>
              </button>
            ))}
        </div>
        <div className="container mx-auto px-4 md:px-6">
          <p className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-[#746f7a]">
            <HelpCircle className="w-3 h-3" /> Цены указаны для автомобилей классов B–D. Для SUV, внедорожников и суперкаров — индивидуальный расчёт.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial={mobileOptimized ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-4xl font-display font-bold text-white mb-3">Часто задаваемые <span className="text-[#7C3AED]">вопросы</span></h2>
            <p className="text-white/50">Всё, что вам нужно знать перед записью.</p>
          </motion.div>
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* FAQ list */}
            <div className="flex-1 min-w-0 space-y-3 lg:max-w-[55%]">
              {faqs.map((f, i) => (
                <motion.div key={i} initial={mobileOptimized ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                  <FaqItem q={f.q} a={f.a} />
                </motion.div>
              ))}
            </div>
            {/* FAQ image */}
            <motion.div
              initial={mobileOptimized ? false : { opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block lg:w-[40%] shrink-0 sticky top-28 z-[1]"
            >
              <img
                src={`${import.meta.env.BASE_URL}images/faq.webp`}
                loading="lazy"
                decoding="async"
                width="2400"
                height="1600"
                alt="FAQ"
                className="w-full object-contain mix-blend-screen"
              />
            </motion.div>
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
            <h2 className="font-display text-[clamp(1.8rem,9vw,2.25rem)] font-black leading-[1.02] tracking-[-0.05em] text-white md:text-6xl"><span className="block">Не знаете</span><span className="block">что выбрать?</span></h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/65 md:text-lg">Оставьте заявку — мы бесплатно проконсультируем и подберём услугу под ваш автомобиль и бюджет.</p>
            <CtaBenefits className="my-10" />
            <button
              onClick={open}
              className="premium-cta inline-flex min-h-14 items-center gap-5 bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] px-7 py-4 text-sm font-bold uppercase tracking-[0.1em] text-white transition-colors hover:from-[#9f75ff] hover:to-[#7c3aed]"
            >
              Получить консультацию <span className="border-l border-white/35 pl-4"><ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
