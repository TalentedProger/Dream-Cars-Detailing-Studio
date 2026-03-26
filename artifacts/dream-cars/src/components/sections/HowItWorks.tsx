import { motion } from "framer-motion";
import { Calendar, Search, Zap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBooking } from "@/contexts/BookingContext";

const steps = [
  {
    num: "01",
    icon: <Calendar className="w-7 h-7" />,
    title: "Запись",
    desc: "Оставьте заявку онлайн или свяжитесь с нами по телефону. Мы подберём удобное время — без очередей и ожидания.",
    color: "from-[#7C3AED] to-[#6D28D9]",
    glow: "rgba(124,58,237,0.25)",
  },
  {
    num: "02",
    icon: <Search className="w-7 h-7" />,
    title: "Диагностика",
    desc: "Мастер бесплатно осматривает состояние ЛКП и салона, фиксирует все дефекты и предлагает оптимальный комплекс.",
    color: "from-[#6D28D9] to-[#5B21B6]",
    glow: "rgba(109,40,217,0.25)",
  },
  {
    num: "03",
    icon: <Zap className="w-7 h-7" />,
    title: "Детейлинг",
    desc: "Скрупулёзная работа над каждой деталью с соблюдением технологий и профессиональной химией премиум-класса.",
    color: "from-[#5B21B6] to-[#4C1D95]",
    glow: "rgba(91,33,182,0.25)",
  },
  {
    num: "04",
    icon: <Award className="w-7 h-7" />,
    title: "Результат",
    desc: "Вы принимаете автомобиль — сияющий, защищённый и идеально чистый. Фотоотчёт до/после прилагается.",
    color: "from-[#7C3AED] to-[#6D28D9]",
    glow: "rgba(124,58,237,0.25)",
  },
];

export function HowItWorks() {
  const { open } = useBooking();

  return (
    <section className="py-32 bg-[#080808] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#7C3AED]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-[#7C3AED] text-xs font-bold tracking-[0.3em] uppercase mb-5 px-4 py-1.5 rounded-full border border-[#7C3AED]/20 bg-[#7C3AED]/5">
            Процесс работы
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-5 text-white">
            Как это <span className="text-[#7C3AED]">работает</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Прозрачный процесс от первого звонка до выдачи ключей. Без сюрпризов — только безупречный результат.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16 relative">
          {/* Connector line desktop */}
          <div className="absolute top-[3.25rem] left-[14%] right-[14%] h-px hidden lg:block pointer-events-none">
            <div className="h-full bg-gradient-to-r from-transparent via-[#7C3AED]/30 to-transparent" />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              <div
                className="h-full rounded-2xl border border-white/[0.06] bg-white/[0.03] hover:bg-white/[0.055] hover:border-[#7C3AED]/30 transition-all duration-400 p-7 flex flex-col gap-5 overflow-hidden"
                style={{ boxShadow: `0 0 0 0 ${step.glow}` }}
              >
                {/* Large faded number in background */}
                <span
                  className="absolute -top-3 -right-1 text-[7rem] font-display font-black leading-none select-none pointer-events-none opacity-[0.04] group-hover:opacity-[0.07] transition-opacity duration-300"
                  style={{ color: "#7C3AED" }}
                >
                  {step.num}
                </span>

                {/* Icon */}
                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}
                    style={{ boxShadow: `0 8px 24px ${step.glow}` }}
                  >
                    {step.icon}
                  </div>
                </div>

                {/* Connector dot */}
                <div className="hidden lg:block absolute top-[3.25rem] -right-2.5 w-5 h-5 z-20">
                  {i < steps.length - 1 && (
                    <div className="w-full h-full rounded-full border-2 border-[#7C3AED]/40 bg-[#080808] flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#7C3AED]/60" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#7C3AED]/60 text-xs font-bold tracking-widest uppercase">
                      Шаг {step.num}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="glow" size="lg" onClick={open}>
            Записаться на детейлинг
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

