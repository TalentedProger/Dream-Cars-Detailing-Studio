import { motion } from "framer-motion";
import { ArrowRight, Award, Users, Clock, ShieldCheck, Heart, Target, Eye, Gem } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FloatingSocials } from "@/components/FloatingSocials";
import { BookingModal } from "@/components/BookingModal";
import { useBooking } from "@/contexts/BookingContext";
import { OptimizedImage } from "@/components/ui/optimized-image";
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
  { year: "2019", event: "Основание студии. Первые клиенты, первые победы." },
  { year: "2020", event: "Сертификация Ceramic Pro. Расширение возможностей по нанопокрытиям." },
  { year: "2021", event: "Открытие нового бокса. Новое профессиональное оборудование Rupes и Flex." },
  { year: "2022", event: "Партнёрство с Gyeon. Вошли в список топ-детейлинг-студий России." },
  { year: "2023", event: "Запуск услуги PPF. 300+ клиентов с керамическим покрытием." },
  { year: "2024", event: "500+ довольных клиентов. Рейтинг 4.9/5.0 на всех площадках." },
];

export default function AboutPage() {
  const { open } = useBooking();
  usePageMeta({
    title: "О нас — Dream Cars Studio",
    description: "Узнайте больше о команде Dream Cars Studio. 5 лет опыта, 500+ довольных клиентов, сертификаты брендов Ceramic Pro и Gyeon. Professional car detailing team with 5 years of experience.",
    keywords: "детейлинг студия, профессиональный детейлинг, о нас, about detailing studio, professional car care",
    canonicalPath: "/about",
  });
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <Navbar />
      <BookingModal />

      {/* Hero */}
      <section className="relative pt-40 pb-36 md:pb-48 overflow-hidden">
        <div className="absolute inset-0 bg-[#080808]" />
        <div className="absolute top-1/3 right-0 w-[800px] h-[600px] bg-[#7C3AED]/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none z-10" />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px] bg-[#8B5CF6]" />
                <span className="text-[#8B5CF6] font-semibold tracking-[0.25em] uppercase text-xs">История и ценности</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-display font-black leading-none mb-8 text-white">
                О нас
              </h1>
              <p className="text-xl text-white/55 leading-relaxed max-w-2xl">
                Мы — команда увлечённых специалистов, для которых автомобиль — это произведение искусства. С 2019 года мы помогаем автомобилям обретать идеальный вид и надёжную защиту.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-white/8 rounded-3xl overflow-hidden">
            {stats.map((st, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`py-10 px-8 flex flex-col gap-3 group hover:bg-white/[0.03] transition-colors ${i < 3 ? "border-r border-white/8" : ""} ${i >= 2 ? "border-t border-white/8 lg:border-t-0" : ""}`}
              >
                <div className="text-[#7C3AED]">{st.icon}</div>
                <div className="text-4xl font-display font-black text-white">{st.num}</div>
                <div className="text-white/40 text-sm">{st.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-[2px] bg-[#8B5CF6]" />
                <span className="text-[#8B5CF6] font-semibold tracking-[0.25em] uppercase text-xs">Наша миссия</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                Превращаем заботу об автомобиле в{" "}
                <span className="text-[#7C3AED]">искусство</span>
              </h2>
              <p className="text-white/55 leading-relaxed mb-4">
                Dream Cars Studio — это не просто детейлинг. Это пространство, где каждый автомобиль получает внимание, достойное произведения искусства. Мы верим, что безупречный вид машины — это не роскошь, а стандарт.
              </p>
              <p className="text-white/55 leading-relaxed">
                Наша команда постоянно обучается, следит за трендами индустрии и инвестирует в лучшее оборудование. Потому что вы заслуживаете только лучшего результата.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                <OptimizedImage
                  src={`${import.meta.env.BASE_URL}about-detailing-worker.jpg`}
                  alt="Детейлинг процесс"
                  className="w-full h-full object-cover"
                  width={900}
                  height={675}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/60 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/15 to-transparent mix-blend-overlay pointer-events-none" />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-5 -left-5 bg-[#111] border border-[#7C3AED]/40 rounded-2xl p-5 shadow-2xl">
                <div className="text-3xl font-display font-black text-white">4.9<span className="text-[#7C3AED]">/5</span></div>
                <div className="text-white/50 text-xs mt-1">Средний рейтинг</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Наши <span className="text-[#7C3AED]">ценности</span></h2>
            <p className="text-white/50 max-w-xl mx-auto">Принципы, которым мы не изменяем уже 5 лет.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex gap-6 p-8 rounded-3xl border border-white/8 hover:border-[#7C3AED]/40 hover:bg-white/[0.02] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#7C3AED]/15 border border-[#7C3AED]/30 flex items-center justify-center text-[#7C3AED] shrink-0 group-hover:bg-[#7C3AED]/25 transition-colors">
                  {v.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{v.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Наш <span className="text-[#7C3AED]">путь</span></h2>
            <p className="text-white/50 max-w-lg">Пять лет роста, обучения и безупречных результатов.</p>
          </motion.div>
          <div className="relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#7C3AED] via-[#7C3AED]/50 to-transparent" />
            <div className="space-y-8">
              {timeline.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-8 items-start"
                >
                  <div className="w-10 h-10 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/50 flex items-center justify-center shrink-0 relative z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#7C3AED]" />
                  </div>
                  <div className="pb-2 pt-1.5">
                    <span className="text-[#7C3AED] font-bold text-sm tracking-wider mr-4">{t.year}</span>
                    <span className="text-white/70 text-sm">{t.event}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7C3AED]/5 to-transparent" />
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-4">Доверьте нам свой автомобиль</h2>
            <p className="text-white/50 mb-10 max-w-lg mx-auto">Запишитесь на бесплатную консультацию и убедитесь, что детейлинг мирового уровня — доступен.</p>
            <img
              src={`${import.meta.env.BASE_URL}images/faq.png`}
              alt="Dream Cars"
              className="mx-auto mb-10 w-full max-w-xl object-contain select-none pointer-events-none mix-blend-screen"
            />
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
