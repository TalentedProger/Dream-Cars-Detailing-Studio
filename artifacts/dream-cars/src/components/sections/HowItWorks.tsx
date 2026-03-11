import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Запись", desc: "Оставьте заявку онлайн или свяжитесь с нами по телефону для бронирования времени." },
  { num: "02", title: "Диагностика", desc: "Мастер бесплатно оценивает состояние ЛКП и салона, подбирает оптимальный комплекс." },
  { num: "03", title: "Детейлинг", desc: "Скрупулезная работа над вашим автомобилем с соблюдением всех технологий." },
  { num: "04", title: "Результат", desc: "Вы принимаете идеально чистый, сияющий и защищенный автомобиль." }
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-[#111111] relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 text-white">Как это <span className="text-[#7C3AED]">работает</span></h2>
          <p className="text-white/60 text-lg">Прозрачный процесс от первого звонка до выдачи ключей.</p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-12 left-[10%] right-[10%] h-0.5 bg-[#1E1E1E] hidden md:block z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full bg-[#121212] border-2 border-[#7C3AED]/30 flex items-center justify-center text-3xl font-display font-bold text-white mb-6 shadow-[0_0_30px_rgba(124,58,237,0.15)] relative z-10">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-[250px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
