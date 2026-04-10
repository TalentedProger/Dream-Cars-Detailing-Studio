import { useCallback } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { Sparkles, Shield, Droplets, CloudRain, Wrench, Layers, ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "Полировка кузова",
    desc: "Многоступенчатая восстановительная полировка. Удаление царапин и голограмм, возвращение заводского блеска.",
    price: "от 15 000 ₽"
  },
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Керамическое покрытие",
    desc: "Защита ЛКП от реагентов, ультрафиолета и мелких царапин. Создает мощный гидрофобный эффект и леденцовый блеск.",
    price: "от 25 000 ₽"
  },
  {
    icon: <Droplets className="w-8 h-8 text-primary" />,
    title: "Химчистка салона",
    desc: "Глубокая очистка всех элементов интерьера с применением премиальной биоразлагаемой химии. Озонация.",
    price: "от 10 000 ₽"
  },
  {
    icon: <CloudRain className="w-8 h-8 text-primary" />,
    title: "Антидождь",
    desc: "Нанесение гидрофобного состава на стекла. Улучшает видимость в непогоду и снижает износ дворников.",
    price: "от 3 000 ₽"
  },
  {
    icon: <Wrench className="w-8 h-8 text-primary" />,
    title: "Детейлинг двигателя",
    desc: "Бережная очистка подкапотного пространства диэлектрическим составом с последующей консервацией пластика.",
    price: "от 5 000 ₽"
  },
  {
    icon: <Layers className="w-8 h-8 text-primary" />,
    title: "Тонировка и бронь",
    desc: "Оклейка антигравийной полиуретановой пленкой зон риска или всего кузова. Тонирование стекол.",
    price: "от 8 000 ₽"
  }
];

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section id="services" className="py-24 bg-[#0D0D0D] relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 text-white">Наши <span className="text-[#7C3AED]">услуги</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">Комплексный подход к красоте и защите вашего автомобиля с использованием материалов премиум-класса.</p>
        </motion.div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-[#111111] border border-[#1E1E1E] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#7C3AED] hover:shadow-[0_0_30px_-5px_rgba(124,58,237,0.3)] group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#7C3AED]/10 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity group-hover:opacity-100 opacity-0" />
              <div className="mb-6 bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-[#7C3AED]/50 transition-colors relative z-10">
                {srv.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-3 text-white relative z-10">{srv.title}</h3>
              <p className="text-white/60 mb-6 text-sm leading-relaxed relative z-10">{srv.desc}</p>
              <div className="mt-auto pt-4 border-t border-[#1E1E1E] flex items-center justify-between relative z-10">
                <span className="text-sm text-white/40">Стоимость</span>
                <span className="font-bold text-white bg-[#7C3AED]/10 px-3 py-1 rounded-md border border-[#7C3AED]/20">{srv.price}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:hidden overflow-hidden"
          ref={emblaRef}
        >
          <div className="flex gap-4">
            {services.map((srv, i) => (
              <div key={i} className="flex-[0_0_100%] min-w-0">
                <div className="bg-[#111111] border border-[#1E1E1E] rounded-2xl p-8 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#7C3AED]/10 rounded-full blur-3xl -mr-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="mb-6 bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center border border-white/10 relative z-10">
                    {srv.icon}
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3 text-white relative z-10">{srv.title}</h3>
                  <p className="text-white/60 mb-6 text-sm leading-relaxed relative z-10">{srv.desc}</p>
                  <div className="mt-auto pt-4 border-t border-[#1E1E1E] flex items-center justify-between relative z-10">
                    <span className="text-sm text-white/40">Стоимость</span>
                    <span className="font-bold text-white bg-[#7C3AED]/10 px-3 py-1 rounded-md border border-[#7C3AED]/20">{srv.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mobile nav buttons */}
        <div className="flex md:hidden justify-center gap-3 mt-8">
          <button onClick={scrollPrev} className="w-12 h-12 rounded-full border border-[#1E1E1E] text-white flex items-center justify-center hover:bg-[#7C3AED]/20 hover:border-[#7C3AED] hover:text-[#7C3AED] transition-all">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={scrollNext} className="w-12 h-12 rounded-full border border-[#1E1E1E] text-white flex items-center justify-center hover:bg-[#7C3AED]/20 hover:border-[#7C3AED] hover:text-[#7C3AED] transition-all">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
