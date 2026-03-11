import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#080808]">
      {/* Background gradient layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#080808] z-0" />
        
        {/* Purple ambient glow */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#6B21A8]/20 rounded-full blur-[120px] z-10 pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#7C3AED]/15 rounded-full blur-[100px] z-10 pointer-events-none" />

        {/* Car image positioned on the right — clipped to show only car portion */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.4 }}
          className="absolute inset-0 z-10 overflow-hidden"
        >
          {/* Image container — clip top portion to hide reference site text */}
          <div
            className="absolute right-0 w-full md:w-[65%] h-full"
            style={{ clipPath: "inset(0 0 0 0)" }}
          >
            <img
              src={`${import.meta.env.BASE_URL}hero-ref.png`}
              alt="Dream Cars luxury sports car"
              className="absolute bottom-0 right-0 w-full object-cover opacity-80"
              style={{ 
                objectPosition: "center bottom",
                height: "72%",
                objectFit: "cover",
              }}
            />
          </div>
          {/* Solid block at top — completely hides all reference image text */}
          <div className="absolute top-0 inset-x-0 h-[40%] bg-[#080808] z-20" />
          {/* Gradient fade below solid block */}
          <div className="absolute top-[35%] inset-x-0 h-32 bg-gradient-to-b from-[#080808] to-transparent z-20" />
          {/* Left gradient to blend text area with content */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/75 to-transparent z-20" />
          {/* Bottom fade */}
          <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#080808] to-transparent z-20" />
        </motion.div>

        {/* Fine grid texture */}
        <div
          className="absolute inset-0 z-20 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container relative z-30 mx-auto px-4 md:px-8 lg:px-12 flex flex-col justify-center h-full">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-[2px] bg-[#8B5CF6]" />
            <span className="text-[#8B5CF6] font-semibold tracking-[0.25em] uppercase text-xs md:text-sm">
              Премиум детейлинг
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[3.5rem] md:text-[5.5rem] lg:text-[7rem] font-display font-bold leading-[0.95] mb-2 text-white"
          >
            Детейлинг
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-[3.5rem] md:text-[5.5rem] lg:text-[7rem] font-display font-bold leading-[0.95] mb-8"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #a78bfa 50%, #7c3aed 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Dream Cars
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base md:text-lg text-white/80 mb-10 max-w-lg font-light leading-relaxed drop-shadow-md"
          >
            Профессиональный уход за вашим автомобилем. Результат, который превосходит ожидания. Эстетика в каждой детали.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <button
              onClick={() => scrollTo("#contact")}
              className="px-8 py-4 rounded-xl font-semibold text-white text-sm md:text-base transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)",
                boxShadow: "0 4px 20px rgba(124,58,237,0.35)",
              }}
            >
              Записаться на детейлинг
            </button>
            <button
              onClick={() => scrollTo("#portfolio")}
              className="px-8 py-4 rounded-xl font-semibold text-white/80 text-sm md:text-base border border-white/20 hover:border-[#8B5CF6]/60 hover:text-white hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
            >
              Посмотреть работы
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-6 md:gap-10 backdrop-blur-sm bg-[#080808]/30 p-4 rounded-2xl"
          >
            {[
              { number: "500+", text: "Довольных клиентов" },
              { number: "5 лет", text: "Опыта работы" },
              { number: "100%", text: "Гарантия качества" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                className="relative"
              >
                <div className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full bg-gradient-to-b from-[#7C3AED] to-transparent" />
                <div className="pl-4">
                  <div className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-white mb-1 drop-shadow-md">
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm text-white/70 font-light">{stat.text}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollTo("#services")}
      >
        <span className="text-white/50 text-xs tracking-widest uppercase font-medium">Прокрутить</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="text-white/50 w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
