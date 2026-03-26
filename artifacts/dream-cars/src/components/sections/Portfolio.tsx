import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { OptimizedImage } from "@/components/ui/optimized-image";

const works = [
  { img: `${import.meta.env.BASE_URL}our_work/polishing_ceramics.jpg`, title: "BMW M5", tag: "Полировка + Керамика" },
  { img: `${import.meta.env.BASE_URL}our_work/anti-rain.jpg`, title: "Porsche 911", tag: "Химчистка + Антидождь" },
  { img: `${import.meta.env.BASE_URL}our_work/wrapping_with_film.jpg`, title: "Mercedes Taycan", tag: "Оклейка пленкой" },
  { img: `${import.meta.env.BASE_URL}our_work/Interior_detailing.jpg`, title: "Audi G63", tag: "Детейлинг интерьера" },
];

export function Portfolio() {
  const [, navigate] = useLocation();

  return (
    <section id="portfolio" className="py-24 bg-[#080808]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 text-white">
              Наши <span className="text-[#7C3AED]">работы</span>
            </h2>
            <p className="text-white/60 max-w-xl text-lg">
              Безупречный результат — лучшая визитная карточка. Посмотрите на автомобили до и после наших процедур.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5"
              onClick={() => { navigate("/portfolio"); window.scrollTo({ top: 0 }); }}
            >
              Смотреть все работы
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {works.map((work, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#121212] border border-[#1E1E1E]"
            >
              <OptimizedImage
                src={work.img}
                alt={work.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                width={800}
                height={600}
              />
              {/* Permanent dark overlay */}
              <div className="absolute inset-0 bg-black/45 group-hover:bg-black/25 transition-colors duration-500 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-[#080808]/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-3 py-1 bg-[#7C3AED]/20 border border-[#7C3AED]/50 text-[#7C3AED] text-xs font-bold uppercase tracking-wider rounded-full mb-3 backdrop-blur-md">
                  {work.tag}
                </span>
                <h3 className="text-2xl font-display font-bold text-white">{work.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
