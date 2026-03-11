import { motion } from "framer-motion";
import { CheckCircle2, Clock, Users, ShieldCheck } from "lucide-react";

export function WhyUs() {
  const advantages = [
    { icon: <Users className="w-10 h-10" />, num: "500+", text: "Довольных клиентов" },
    { icon: <Clock className="w-10 h-10" />, num: "5 лет", text: "Опыта работы" },
    { icon: <ShieldCheck className="w-10 h-10" />, num: "100%", text: "Гарантия результата" },
    { icon: <CheckCircle2 className="w-10 h-10" />, num: "24/7", text: "Поддержка и консультации" }
  ];

  return (
    <section id="about" className="py-24 bg-[#080808] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-[100px] z-0 -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#6B21A8]/10 rounded-full blur-[120px] z-0 pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 text-white">Почему выбирают <span className="text-[#7C3AED]">нас</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">Мы не просто моем машины. Мы создаем искусство, восстанавливая идеальный вид вашего автомобиля.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((adv, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-8 bg-[#121212] rounded-3xl border border-[#1E1E1E] hover:border-[#7C3AED]/50 transition-colors"
            >
              <div className="w-20 h-20 rounded-full bg-[#080808] border border-[#7C3AED]/30 flex items-center justify-center mb-6 text-[#7C3AED] shadow-[0_0_20px_rgba(124,58,237,0.2)]">
                {adv.icon}
              </div>
              <h3 className="text-4xl font-display font-bold text-white mb-2">{adv.num}</h3>
              <p className="text-white/60 font-medium">{adv.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
