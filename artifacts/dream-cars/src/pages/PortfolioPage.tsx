import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FloatingSocials } from "@/components/FloatingSocials";
import { BookingModal } from "@/components/BookingModal";
import { useBooking } from "@/contexts/BookingContext";
import { OptimizedImage } from "@/components/ui/optimized-image";

const filters = ["Все работы", "Полировка", "Керамика", "Химчистка", "PPF", "Комплекс"];

const works = [
  {
    img: `${import.meta.env.BASE_URL}ref1.png`,
    model: "BMW M5 Competition",
    year: "2022",
    service: "Полировка + Керамика",
    tag: "Полировка",
    desc: "Двухшаговая абразивная полировка + нанесение Ceramic Pro 9H на весь кузов.",
  },
  {
    img: `${import.meta.env.BASE_URL}ref2.png`,
    model: "Porsche 911 GT3",
    year: "2021",
    service: "Химчистка + Антидождь",
    tag: "Химчистка",
    desc: "Глубокая химчистка салона из алькантары, озонирование, антидождь на все стёкла.",
  },
  {
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
    model: "Mercedes-AMG GT",
    year: "2023",
    service: "Керамическое покрытие",
    tag: "Керамика",
    desc: "Нанесение Gyeon Quartz Mohs+ на весь кузов, обработка дисков и стёкол.",
  },
  {
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
    model: "Lamborghini Urus",
    year: "2023",
    service: "Полный детейлинг",
    tag: "Комплекс",
    desc: "Полировка, PPF на зоны риска, керамика на кузов, химчистка кожаного салона.",
  },
  {
    img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    model: "Aston Martin DB11",
    year: "2024",
    service: "PPF полный кузов",
    tag: "PPF",
    desc: "Оклейка полного кузова матовой антигравийной плёнкой STEK с гарантией 5 лет.",
  },
  {
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    model: "Ferrari F8",
    year: "2024",
    service: "Химчистка салона + Озон",
    tag: "Химчистка",
    desc: "Полная химчистка интерьера с обработкой алькантары и карбоновых вставок. Озонация.",
  },
  {
    img: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80",
    model: "Rolls-Royce Cullinan",
    year: "2024",
    service: "Комплексный детейлинг",
    tag: "Комплекс",
    desc: "Подготовка, полировка, Ceramic Pro Elite, PPF, химчистка кожи Nappa. 7 дней работ.",
  },
  {
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    model: "Tesla Model S Plaid",
    year: "2023",
    service: "Полировка + Ceramiq",
    tag: "Полировка",
    desc: "Однофазная полировка + нанесение IGL Coatings Kenzo на кузов. Детейлинг дисков.",
  },
];

export default function PortfolioPage() {
  const { open } = useBooking();
  const [activeFilter, setActiveFilter] = useState("Все работы");

  const filtered = activeFilter === "Все работы"
    ? works
    : works.filter((w) => w.tag === activeFilter);

  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <Navbar />
      <BookingModal />

      {/* Hero */}
      <section className="relative pt-40 pb-32 md:pb-44 overflow-hidden">
        <div className="absolute inset-0 bg-[#080808]" />
        <div className="absolute top-1/2 right-0 w-[700px] h-[700px] bg-[#7C3AED]/10 rounded-full blur-[150px] translate-x-1/3 -translate-y-1/2 pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none z-10" />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-[#8B5CF6]" />
              <span className="text-[#8B5CF6] font-semibold tracking-[0.25em] uppercase text-xs">Результаты нашей работы</span>
            </div>
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
            initial={{ opacity: 0, y: 16 }}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((work, i) => (
              <motion.div
                key={`${work.model}-${i}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="group relative rounded-3xl overflow-hidden border border-white/8 hover:border-[#7C3AED]/50 transition-all duration-400 cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-[4/3]">
                  <OptimizedImage
                    src={work.img}
                    alt={work.model}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    width={800}
                    height={600}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/20 to-transparent pointer-events-none" />
                  {/* Service tag */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#7C3AED]/80 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider py-1.5 px-3 rounded-full">
                      {work.tag}
                    </span>
                  </div>
                  {/* Year */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/50 backdrop-blur-sm text-white/70 text-xs py-1.5 px-3 rounded-full border border-white/10">
                      {work.year}
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6 bg-[#111]/80">
                  <h3 className="font-display font-bold text-lg text-white mb-1">{work.model}</h3>
                  <p className="text-[#7C3AED] text-xs font-medium uppercase tracking-wider mb-3">{work.service}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{work.desc}</p>
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
            <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-4">Ваш автомобиль — следующий</h2>
            <p className="text-white/50 mb-10 max-w-lg mx-auto">Запишитесь уже сегодня и получите бесплатную диагностику состояния лака вашего автомобиля.</p>
            <button
              onClick={open}
              className="inline-flex items-center gap-3 px-10 py-4 rounded-xl font-bold text-white text-sm uppercase tracking-wider transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_40px_rgba(124,58,237,0.5)]"
              style={{ background: "linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)", boxShadow: "0 4px 20px rgba(124,58,237,0.35)" }}
            >
              Записаться <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingSocials />
    </main>
  );
}
