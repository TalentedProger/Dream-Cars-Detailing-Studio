import { motion } from "framer-motion";

const stats = [
  { num: "500+", label: "Довольных клиентов" },
  { num: "5 лет", label: "На рынке детейлинга" },
  { num: "100%", label: "Гарантия результата" },
  { num: "24/7", label: "Поддержка клиентов" },
];

const reasons = [
  {
    num: "01",
    title: "Сертифицированные мастера",
    desc: "Наши специалисты прошли обучение у ведущих мировых экспертов по детейлингу. Работаем только с материалами Ceramic Pro, IGL Coatings и Gyeon — тех брендов, которым доверяют профессионалы.",
  },
  {
    num: "02",
    title: "Результат, который говорит сам",
    desc: "Никаких полумер. Каждый автомобиль проходит многоэтапную подготовку и контроль качества. Мы не сдадим машину, пока она не будет безупречна — это не слова, это стандарт.",
  },
  {
    num: "03",
    title: "Абсолютная прозрачность",
    desc: "Фото- и видеоотчёт до, в процессе и после. Никаких скрытых работ и доплат. Вы знаете, что происходит с вашим автомобилем на каждом этапе — и мы этим гордимся.",
  },
  {
    num: "04",
    title: "Официальная гарантия",
    desc: "Все нанесённые покрытия получают документальную гарантию. Если в гарантийный срок возникнет вопрос — исправим бесплатно и без лишних слов. Так работают профессионалы.",
  },
  {
    num: "05",
    title: "Эксклюзивные профессиональные составы",
    desc: "Мы используем химию, которую невозможно купить в розничных магазинах. Японские абразивы, нанопокрытия и составы для работ на автолайнах премиум-класса — только лучшее.",
  },
];

export function WhyUs() {
  return (
    <section id="about" className="py-24 bg-[#080808] relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-[#7C3AED]/8 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#6B21A8]/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[18vw] font-display font-black text-white/[0.016] uppercase tracking-tight whitespace-nowrap">
          DREAM CARS
        </span>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[2px] bg-[#8B5CF6]" />
            <span className="text-[#8B5CF6] font-semibold tracking-[0.25em] uppercase text-xs">О нас</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-none">
              Почему выбирают<br />
              <span style={{ background: "linear-gradient(135deg, #ffffff 0%, #a78bfa 50%, #7c3aed 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                именно нас
              </span>
            </h2>
            <p className="text-white/50 max-w-xs lg:text-right text-sm leading-relaxed lg:mb-2 shrink-0">
              Мы не просто моем машины.<br />Мы создаём искусство.<br />Восстанавливаем идеальный вид.
            </p>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-0 mb-24 border border-white/8 rounded-3xl overflow-hidden"
        >
          {stats.map((st, i) => (
            <div
              key={i}
              className={`py-10 px-8 flex flex-col gap-2 relative ${i < stats.length - 1 ? "border-r border-white/8" : ""} ${i >= 2 ? "border-t border-white/8 lg:border-t-0" : ""} group hover:bg-white/[0.03] transition-colors duration-300`}
            >
              <span className="text-4xl md:text-5xl font-display font-black text-white">{st.num}</span>
              <span className="text-white/45 text-sm">{st.label}</span>
              <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-[#7C3AED] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </motion.div>

        {/* Reasons list */}
        <div className="space-y-0">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08 }}
              className="group grid grid-cols-1 md:grid-cols-[120px_1fr_1.6fr] gap-6 md:gap-10 py-10 border-b border-white/8 last:border-b-0 hover:bg-white/[0.015] transition-colors duration-300 px-2 rounded-xl"
            >
              {/* Number */}
              <div className="flex items-start">
                <span className="text-7xl md:text-8xl font-display font-black leading-none"
                  style={{ color: "transparent", WebkitTextStroke: "1px rgba(124,58,237,0.35)" }}>
                  {r.num}
                </span>
              </div>
              {/* Title */}
              <div className="flex items-start pt-2 md:pt-4">
                <h3 className="text-xl md:text-2xl font-display font-bold text-white leading-snug group-hover:text-[#a78bfa] transition-colors duration-300">
                  {r.title}
                </h3>
              </div>
              {/* Description */}
              <div className="flex items-start pt-0 md:pt-4">
                <p className="text-white/55 leading-relaxed text-sm md:text-base">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
