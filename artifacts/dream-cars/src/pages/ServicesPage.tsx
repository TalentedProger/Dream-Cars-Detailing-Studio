import { motion } from "framer-motion";
import { Sparkles, Shield, Droplets, CloudRain, Wrench, Layers, Star, ArrowRight, Zap } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FloatingSocials } from "@/components/FloatingSocials";
import { BookingModal } from "@/components/BookingModal";
import { useBooking } from "@/contexts/BookingContext";
import { usePageMeta } from "@/hooks/use-page-meta";

const services = [
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Полировка кузова",
    subtitle: "Восстановительная & защитная",
    desc: "Многоступенчатая профессиональная полировка. Удаление голограмм, мелких царапин и следов смоляных дождей. Возвращаем заводской блеск с помощью японских абразивов.",
    price: "от 15 000 ₽",
    duration: "1–2 дня",
    features: ["Одно- и двухшаговая полировка", "Японские абразивные пасты", "Финишное покрытие воском", "Фото-отчёт до и после"],
    badge: null,
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Керамическое покрытие",
    subtitle: "Нанозащита SiO₂",
    desc: "Профессиональное нанесение сертифицированной керамики Ceramic Pro или Gyeon. Мощная гидрофобность, защита от реагентов, ультрафиолета и химии до 5 лет.",
    price: "от 25 000 ₽",
    duration: "2–3 дня",
    features: ["Сертифицированные бренды", "Защита до 5 лет", "Гарантийный сертификат", "Регистрация в системе производителя"],
    badge: "Хит",
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "Химчистка салона",
    subtitle: "Глубокая биообработка",
    desc: "Полный детейлинг интерьера: очистка всех поверхностей, кожи, ткани, пластика и потолка. Озонация для уничтожения запахов. Применяем только биоразлагаемую химию.",
    price: "от 10 000 ₽",
    duration: "1 день",
    features: ["Очистка всех поверхностей", "Обработка кожи и ткани", "Озонирование салона", "Антибактериальная обработка"],
    badge: null,
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Антигравийная плёнка (PPF)",
    subtitle: "Полиуретановая защита",
    desc: "Оклейка зон риска или всего кузова самовосстанавливающейся полиуретановой плёнкой. Защита от сколов, царапин, химии и ультрафиолета на долгие годы.",
    price: "от 30 000 ₽",
    duration: "3–5 дней",
    features: ["Полный кузов или зоны риска", "Самовосстанавливающийся слой", "Матовое или глянцевое исполнение", "Гарантия 5 лет"],
    badge: "Премиум",
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Детейлинг двигателя",
    subtitle: "Бережная очистка подкапота",
    desc: "Профессиональная очистка подкапотного пространства диэлектрическим составом без риска повреждения электроники. Последующая консервация пластика и резины.",
    price: "от 5 000 ₽",
    duration: "Полдня",
    features: ["Диэлектрическая химия", "Безопасно для электроники", "Консервация пластика", "Чернение резиновых элементов"],
    badge: null,
  },
  {
    icon: <CloudRain className="w-8 h-8" />,
    title: "Антидождь и тонировка",
    subtitle: "Видимость и стиль",
    desc: "Нанесение профессионального гидрофобного состава на стёкла повышает видимость в дождь и снег. Тонировка автомобильной плёнкой по ГОСТ с гарантией.",
    price: "от 3 000 ₽",
    duration: "2–4 часа",
    features: ["Профессиональный гидрофоб", "Улучшение видимости на 60%", "Тонировка по ГОСТ", "Гарантия 1 год"],
    badge: null,
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Реставрация фар",
    subtitle: "Полировка и бронирование",
    desc: "Полировка помутневших фар с восстановлением прозрачности до заводского состояния. Нанесение защитного лака или ПВХ-плёнки для продления результата.",
    price: "от 4 000 ₽",
    duration: "2–3 часа",
    features: ["Устранение помутнения", "Трёхступенчатая полировка", "Нанесение защитного лака", "Гарантия 1 год"],
    badge: null,
  },
  {
    icon: <Zap className="w-8 h-8" />,
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
  usePageMeta({
    title: "Услуги детейлинга — Dream Cars Studio",
    description: "Полировка кузова, керамическое покрытие, PPF-плёнка, химчистка салона, лакокрасочные работы. Car detailing services: ceramic coating, PPF film, paint polishing, interior detailing.",
    keywords: "услуги детейлинга, полировка кузова, керамическое покрытие, PPF, химчистка, car detailing services, ceramic coating, paint protection",
    canonicalPath: "/services",
  });
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <Navbar />
      <BookingModal />

      {/* Hero */}
      <section className="relative pt-40 pb-32 md:pb-44 overflow-hidden">
        <div className="absolute inset-0 bg-[#080808]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#7C3AED]/12 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        {/* Bottom fade: prevent purple glow from bleeding into next section */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none z-10" />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-[#8B5CF6]" />
              <span className="text-[#8B5CF6] font-semibold tracking-[0.25em] uppercase text-xs">Что мы делаем</span>
            </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((srv, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="group relative bg-[#111]/60 border border-white/8 rounded-3xl p-8 hover:border-[#7C3AED]/50 hover:bg-[#111] transition-all duration-400 overflow-hidden"
              >
                {srv.badge && (
                  <span className="absolute top-5 right-5 bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                    {srv.badge}
                  </span>
                )}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#7C3AED]/8 rounded-full blur-3xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-start gap-5 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 group-hover:border-[#7C3AED]/40 flex items-center justify-center text-[#7C3AED] shrink-0 transition-colors">
                    {srv.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-white mb-0.5">{srv.title}</h3>
                    <p className="text-[#7C3AED] text-xs font-medium uppercase tracking-wider">{srv.subtitle}</p>
                  </div>
                </div>

                <p className="text-white/55 text-sm leading-relaxed mb-6">{srv.desc}</p>

                <ul className="space-y-2 mb-6">
                  {srv.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-5 border-t border-white/8">
                  <div>
                    <div className="text-xs text-white/35 mb-0.5">Стоимость</div>
                    <div className="text-lg font-bold text-white">{srv.price}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-white/35 mb-0.5">Время</div>
                    <div className="text-sm text-white/70">{srv.duration}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7C3AED]/5 to-transparent" />
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-4">Готовы начать?</h2>
            <p className="text-white/50 mb-10 max-w-lg mx-auto">Запишитесь на бесплатную консультацию и мы подберём оптимальный пакет услуг для вашего автомобиля.</p>
            <img
              src={`${import.meta.env.BASE_URL}images/faq.png`}
              alt="Dream Cars"
              className="mx-auto mb-10 w-full max-w-xl object-contain select-none pointer-events-none mix-blend-screen"
            />
            <button
              onClick={open}
              className="inline-flex items-center gap-3 px-10 py-4 rounded-xl font-bold text-white text-sm uppercase tracking-wider transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] active:scale-[0.98]"
              style={{ background: "linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)", boxShadow: "0 4px 20px rgba(124,58,237,0.35)" }}
            >
              Записаться на детейлинг <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingSocials />
    </main>
  );
}
