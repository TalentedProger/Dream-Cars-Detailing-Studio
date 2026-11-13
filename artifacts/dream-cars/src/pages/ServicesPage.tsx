import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { useBooking } from "@/contexts/BookingContext";
import { usePageMeta } from "@/hooks/use-page-meta";

const services = [
  {
    image: "services/polishing-kit.webp",
    title: "Полировка кузова",
    subtitle: "Восстановительная & защитная",
    desc: "Многоступенчатая профессиональная полировка. Удаление голограмм, мелких царапин и следов смоляных дождей. Возвращаем заводской блеск с помощью японских абразивов.",
    price: "от 15 000 ₽",
    duration: "1–2 дня",
    features: ["Одно- и двухшаговая полировка", "Японские абразивные пасты", "Финишное покрытие воском", "Фото-отчёт до и после"],
    badge: null,
  },
  {
    image: "services/ceramic-detailing.webp",
    title: "Керамическое покрытие",
    subtitle: "Нанозащита SiO₂",
    desc: "Профессиональное нанесение сертифицированной керамики Ceramic Pro или Gyeon. Мощная гидрофобность, защита от реагентов, ультрафиолета и химии до 5 лет.",
    price: "от 25 000 ₽",
    duration: "2–3 дня",
    features: ["Сертифицированные бренды", "Защита до 5 лет", "Гарантийный сертификат", "Регистрация в системе производителя"],
    badge: "Хит",
  },
  {
    image: "services/detailing-tools.webp",
    title: "Химчистка салона",
    subtitle: "Глубокая биообработка",
    desc: "Полный детейлинг интерьера: очистка всех поверхностей, кожи, ткани, пластика и потолка. Озонация для уничтожения запахов. Применяем только биоразлагаемую химию.",
    price: "от 10 000 ₽",
    duration: "1 день",
    features: ["Очистка всех поверхностей", "Обработка кожи и ткани", "Озонирование салона", "Антибактериальная обработка"],
    badge: null,
  },
  {
    image: "services/film-tools.webp",
    title: "Антигравийная плёнка (PPF)",
    subtitle: "Полиуретановая защита",
    desc: "Оклейка зон риска или всего кузова самовосстанавливающейся полиуретановой плёнкой. Защита от сколов, царапин, химии и ультрафиолета на долгие годы.",
    price: "от 30 000 ₽",
    duration: "3–5 дней",
    features: ["Полный кузов или зоны риска", "Самовосстанавливающийся слой", "Матовое или глянцевое исполнение", "Гарантия 5 лет"],
    badge: "Премиум",
  },
  {
    image: "services/engine-detailing-centered.webp",
    title: "Детейлинг двигателя",
    subtitle: "Бережная очистка подкапота",
    desc: "Профессиональная очистка подкапотного пространства диэлектрическим составом без риска повреждения электроники. Последующая консервация пластика и резины.",
    price: "от 5 000 ₽",
    duration: "Полдня",
    features: ["Диэлектрическая химия", "Безопасно для электроники", "Консервация пластика", "Чернение резиновых элементов"],
    badge: null,
  },
  {
    image: "our_work/anti-rain.webp",
    cover: true,
    title: "Антидождь и тонировка",
    subtitle: "Видимость и стиль",
    desc: "Нанесение профессионального гидрофобного состава на стёкла повышает видимость в дождь и снег. Тонировка автомобильной плёнкой по ГОСТ с гарантией.",
    price: "от 3 000 ₽",
    duration: "2–4 часа",
    features: ["Профессиональный гидрофоб", "Улучшение видимости на 60%", "Тонировка по ГОСТ", "Гарантия 1 год"],
    badge: null,
  },
  {
    image: "services/headlight-kit.webp",
    title: "Реставрация фар",
    subtitle: "Полировка и бронирование",
    desc: "Полировка помутневших фар с восстановлением прозрачности до заводского состояния. Нанесение защитного лака или ПВХ-плёнки для продления результата.",
    price: "от 4 000 ₽",
    duration: "2–3 часа",
    features: ["Устранение помутнения", "Трёхступенчатая полировка", "Нанесение защитного лака", "Гарантия 1 год"],
    badge: null,
  },
  {
    image: "car-porsche-911-gt3.webp",
    cover: true,
    title: "Комплексный детейлинг",
    subtitle: "Всё включено",
    desc: "Полный цикл работ: мойка, полировка, нанесение покрытия, химчистка салона, детейлинг двигателя и антидождь. Ваш автомобиль как будто только из салона.",
    price: "от 50 000 ₽",
    duration: "5–7 дней",
    features: ["Весь кузов и интерьер", "Керамика или воск на выбор", "Детальный фотоотчёт", "Гарантийный сертификат"],
    badge: "Топ выбор",
  },
];

export default function ServicesPage() {
  const { open } = useBooking();
  const ctaVideoRef = useRef<HTMLVideoElement>(null);
  const mobileOptimized = typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;

  useEffect(() => {
    const video = ctaVideoRef.current;
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting && !document.hidden) {
        void video.play().catch(() => undefined);
      } else {
        video.pause();
      }
    }, { rootMargin: "180px 0px", threshold: 0.08 });

    observer.observe(video);
    return () => {
      observer.disconnect();
      video.pause();
    };
  }, []);

  usePageMeta({
    title: "Услуги детейлинга — Dream Cars Studio",
    description: "Полировка кузова, керамическое покрытие, PPF-плёнка, химчистка салона, лакокрасочные работы. Car detailing services: ceramic coating, PPF film, paint polishing, interior detailing.",
    keywords: "услуги детейлинга, полировка кузова, керамическое покрытие, PPF, химчистка, car detailing services, ceramic coating, paint protection",
    canonicalPath: "/services",
  });
  return (
    <main className="min-h-screen w-full overflow-x-clip bg-[#080808] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-40 md:pb-20">
        <div className="absolute inset-0 bg-[#080808]" />
        <div className="performance-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#7C3AED]/12 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        {/* Bottom fade: prevent purple glow from bleeding into next section */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none z-10" />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div initial={mobileOptimized ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <h1 className="text-6xl md:text-8xl font-display font-black leading-none mb-6 text-white">
              Наши<br />
              <span style={{ background: "linear-gradient(135deg, #ffffff 0%, #a78bfa 50%, #7c3aed 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>услуги</span>
            </h1>
            <p className="text-white/55 max-w-xl text-lg leading-relaxed">
              Комплексный подход к красоте и защите вашего автомобиля. Используем только профессиональные материалы премиум-класса.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section className="pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
            {services.map((srv, i) => (
              <motion.article
                key={i}
                initial={mobileOptimized ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="group relative flex min-h-[540px] flex-col overflow-hidden rounded-[26px] bg-[linear-gradient(145deg,rgba(47,39,55,0.98),rgba(25,21,29,0.99))] shadow-[0_22px_55px_-34px_rgba(0,0,0,0.72)]"
              >
                <div className="relative h-[238px] shrink-0 overflow-hidden border-b border-white/[0.07] bg-[radial-gradient(circle_at_75%_50%,rgba(139,92,246,0.24),transparent_42%),linear-gradient(145deg,#241a2c,#130f17)] md:h-[260px]">
                  {srv.badge && (
                    <span className="absolute right-5 top-5 z-20 rounded-full border border-[#b995e4]/25 bg-black/55 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-[#d7b9f5] md:backdrop-blur-md">
                      {srv.badge}
                    </span>
                  )}
                  <img
                    src={`${import.meta.env.BASE_URL}${srv.image}`}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-transform duration-700 group-hover:scale-[1.025]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,8,12,0.48),transparent_62%),linear-gradient(to_top,rgba(7,5,9,0.68),transparent_62%)]" />
                  <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#0d0a10] via-[#0d0a10]/75 to-transparent" />
                  <div className="absolute bottom-5 left-6 right-6 z-20">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c39bf3]">{srv.subtitle}</p>
                    <h2 className="font-display text-[1.75rem] font-semibold leading-[1.05] tracking-[-0.045em] text-white">{srv.title}</h2>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <p className="mb-6 text-sm leading-6 text-white/50">{srv.desc}</p>

                  <ul className="mb-6 grid grid-cols-1 gap-x-5 gap-y-2.5 sm:grid-cols-2">
                    {srv.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-xs leading-5 text-white/67">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#9f75ff]" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="-mx-6 mt-auto flex items-end justify-between gap-5 border-t border-white/[0.08] px-6 pt-5 md:-mx-7 md:px-7">
                    <div>
                      <div className="mb-1 text-[9px] font-semibold uppercase tracking-[0.17em] text-white/30">Стоимость</div>
                      <div className="font-display text-xl font-semibold tracking-[-0.025em] text-white">{srv.price}</div>
                    </div>
                    <div className="text-right">
                      <div className="mb-1 text-[9px] font-semibold uppercase tracking-[0.17em] text-white/30">Срок работы</div>
                      <div className="text-sm font-medium text-white/65">{srv.duration}</div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative min-h-[600px] overflow-hidden border-t border-white/5 md:min-h-[680px]">
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
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(3,2,5,0.96)_0%,rgba(7,4,11,0.84)_42%,rgba(7,4,11,0.35)_75%,rgba(3,2,5,0.2)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25" />

        <div className="container relative z-10 mx-auto flex min-h-[600px] items-center px-4 py-20 md:min-h-[680px] md:px-6 md:py-24">
          <motion.div initial={mobileOptimized ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl text-left">
            <h2 className="mb-5 font-display text-4xl font-black leading-[1.02] tracking-[-0.05em] text-white md:text-6xl">Готовы начать?</h2>
            <p className="mb-8 max-w-xl text-base leading-7 text-white/65 md:text-lg">Запишитесь на бесплатную консультацию — оценим состояние автомобиля и подберём оптимальный набор работ без лишних услуг.</p>

            <div className="mb-10 flex flex-col items-start gap-3 text-xs font-medium text-white/65">
              <span className="border-l border-[#a875ff] pl-3">Бесплатная консультация</span>
              <span className="border-l border-[#a875ff] pl-3">Предварительный расчёт</span>
              <span className="border-l border-[#a875ff] pl-3">Персональный план работ</span>
            </div>

            <button
              onClick={open}
              className="premium-cta inline-flex min-h-14 items-center gap-5 bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] px-7 py-4 text-sm font-bold uppercase tracking-[0.1em] text-white transition-colors hover:from-[#9f75ff] hover:to-[#7c3aed]"
            >
              Записаться на детейлинг <span className="border-l border-white/35 pl-4"><ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
