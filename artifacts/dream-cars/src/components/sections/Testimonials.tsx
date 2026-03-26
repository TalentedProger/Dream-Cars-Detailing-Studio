import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  { name: "Александр В.", car: "Mercedes-Benz S-Class", text: "Отдавал машину на керамику и химчистку. Результат превзошел все ожидания. Цвет стал глубже, салон как из салона. Отличный сервис!" },
  { name: "Елена М.", car: "Range Rover Sport", text: "Делали антихром и бронирование морды. Пленку вообще не видно, края заправлены идеально. Ребята настоящие профессионалы своего дела." },
  { name: "Дмитрий К.", car: "BMW X5", text: "Спас мою машину после неудачной мойки. Вернули заводской блеск, убрали все паутинки. Теперь только к вам на обслуживание." },
  { name: "Игорь Т.", car: "Porsche Cayenne", text: "Атмосфера в студии шикарная, подход к клиенту на высшем уровне. Делал комплексный детейлинг - машина выглядит лучше новой." }
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="py-24 bg-[#111111] relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[#7C3AED]/10 rounded-full blur-[150px] z-0 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header: title centered on mobile, buttons visible only on desktop */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-auto text-center md:text-left"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 text-white">Отзывы <span className="text-[#7C3AED]">клиентов</span></h2>
          </motion.div>
          
          {/* Desktop-only nav buttons in header */}
          <div className="hidden md:flex gap-2 shrink-0">
            <button onClick={scrollPrev} className="w-12 h-12 rounded-full border border-[#1E1E1E] text-white flex items-center justify-center hover:bg-[#7C3AED]/20 hover:border-[#7C3AED] hover:text-[#7C3AED] transition-all">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={scrollNext} className="w-12 h-12 rounded-full border border-[#1E1E1E] text-white flex items-center justify-center hover:bg-[#7C3AED]/20 hover:border-[#7C3AED] hover:text-[#7C3AED] transition-all">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden" 
          ref={emblaRef}
        >
          <div className="flex gap-6">
            {reviews.map((rev, i) => (
              <div key={i} className="flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0">
                <div className="bg-[#121212] border border-[#1E1E1E] p-8 rounded-2xl h-full flex flex-col relative transition-colors hover:border-[#7C3AED]/30 hover:shadow-[0_0_20px_rgba(124,58,237,0.1)]">
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5" />
                  <div className="flex gap-1 text-[#7C3AED] mb-6">
                    {[1,2,3,4,5].map(star => <Star key={star} size={18} fill="currentColor" />)}
                  </div>
                  <p className="text-white/80 mb-8 flex-grow leading-relaxed">"{rev.text}"</p>
                  <div>
                    <h4 className="font-bold text-lg text-white">{rev.name}</h4>
                    <p className="text-[#7C3AED] text-sm">{rev.car}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mobile-only nav buttons below carousel, centered */}
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
