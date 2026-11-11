import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, KeyRound, MessageSquareText, ScanSearch, WandSparkles } from "lucide-react";
import { useBooking } from "@/contexts/BookingContext";

const steps = [
  { icon: MessageSquareText, title: "Обсудим задачу", description: "Уточним ваши пожелания и выберем время для осмотра." },
  { icon: ScanSearch, title: "Осмотрим автомобиль", description: "Проверим его состояние, согласуем работы и стоимость." },
  { icon: WandSparkles, title: "Сделаем работу", description: "Подготовим поверхности, выполним работы и проверим детали." },
  { icon: KeyRound, title: "Передадим результат", description: "Покажем готовый автомобиль и дадим рекомендации по уходу." },
];

function ProcessWave() {
  return (
    <div className="relative h-[240px] overflow-hidden bg-[#faf7ff] sm:h-[275px] lg:h-[260px]" aria-hidden="true">
      <div className="absolute -right-12 top-7 h-40 w-64 rounded-full bg-[#a875ff]/20 blur-[45px]" />
      <svg viewBox="0 0 620 320" preserveAspectRatio="xMidYMid slice" className="relative h-full w-full">
        <defs>
          <linearGradient id="process-wave-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#d7c5f1" stopOpacity="0.16" />
            <stop offset="0.42" stopColor="#b58be7" stopOpacity="0.56" />
            <stop offset="0.78" stopColor="#7c3aed" stopOpacity="0.73" />
            <stop offset="1" stopColor="#c5a7ed" stopOpacity="0.16" />
          </linearGradient>
          <linearGradient id="process-wave-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="white" stopOpacity="0.05" />
            <stop offset="0.2" stopColor="white" />
            <stop offset="0.76" stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="process-wave-mask"><rect width="620" height="320" fill="url(#process-wave-fade)" /></mask>
        </defs>
        <g mask="url(#process-wave-mask)">
          {Array.from({ length: 56 }, (_, index) => (
            <path
              key={index}
              d={`M -45 ${76 + index * 3.7} C 120 ${42 + index * 3.1}, 226 ${295 - index * 0.9}, 356 ${204 - index * 1.8} C 462 ${135 - index * 1.5}, 506 ${46 + index * 0.3}, 670 ${42 + index * 0.7}`}
              fill="none"
              stroke="url(#process-wave-line)"
              strokeWidth="1.15"
            />
          ))}
        </g>
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}

export function HowItWorks() {
  const { open } = useBooking();
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section id="process" className="render-optimized relative isolate overflow-hidden bg-[#f7f8f7] py-20 text-[#131a20] md:py-28 lg:py-[88px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[13%] top-10 h-[540px] opacity-70"
        style={{
          backgroundImage: "linear-gradient(rgba(91,55,128,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(91,55,128,0.055) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          maskImage: "linear-gradient(to bottom, transparent, black 14%, black 66%, transparent)",
        }}
      />

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-14">
          <motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: reduceMotion ? 0 : 0.7 }}>
            <h2 className="whitespace-nowrap font-display text-[clamp(2.7rem,4.7vw,4.4rem)] font-semibold leading-[0.97] tracking-[-0.065em]">
              Как мы работаем
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-6 text-[#5f666a] md:text-base md:leading-7">
              <span className="lg:whitespace-nowrap">От первого сообщения до момента, когда автомобиль снова у вас.</span><br />
              <span>Каждый шаг понятен заранее.</span>
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.12 }} className="hidden lg:block lg:self-center lg:justify-self-end">
            <button type="button" onClick={open} className="premium-cta inline-flex min-h-14 items-center gap-5 bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] px-6 py-4 text-xs font-bold uppercase tracking-[0.1em] text-white shadow-[0_12px_36px_-12px_rgba(139,92,246,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:from-[#9f75ff] hover:to-[#7c3aed] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c5a7ff]">
              Обсудить задачу <span className="border-l border-white/35 pl-4"><ArrowUpRight className="h-5 w-5" aria-hidden="true" /></span>
            </button>
          </motion.div>
        </div>

        <div className="mt-20 grid grid-cols-1 items-end gap-3 sm:grid-cols-2 sm:gap-4 lg:mt-14 lg:grid-cols-[1fr_1.45fr_1fr_1.15fr] lg:items-center">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const featured = index === 1;
            return (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: reduceMotion ? 0 : 0.75, delay: reduceMotion ? 0 : index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`relative overflow-hidden rounded-[20px] bg-white shadow-[0_16px_46px_rgba(18,41,43,0.025)] ${featured ? "flex min-h-[530px] flex-col sm:col-span-2 lg:col-span-1 lg:min-h-[585px]" : `flex min-h-[260px] flex-col p-6 sm:p-7 lg:min-h-[410px] ${index === 0 ? "sm:col-span-2 lg:col-span-1" : ""}`}`}
              >
                {featured ? (
                  <>
                    <ProcessWave />
                    <div className="flex flex-1 flex-col p-7 sm:p-9">
                      <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-md bg-[#f1f3f3] text-[#243133]"><Icon className="h-7 w-7" strokeWidth={1.8} aria-hidden="true" /></span>
                      <h3 className="max-w-[330px] font-display text-[clamp(2rem,3vw,2.65rem)] font-medium leading-[1.04] tracking-[-0.055em]">{step.title}</h3>
                      <p className="mt-6 max-w-[330px] text-sm leading-6 text-[#697174] sm:text-base sm:leading-7">{step.description}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <span aria-hidden="true" className="font-display text-[clamp(4.5rem,7vw,6rem)] font-light leading-none tracking-[-0.09em] text-[#e8e9ec]">0{index + 1}.</span>
                    <div className="mt-auto">
                      <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-[#f4f5f5] text-[#273134]"><Icon className="h-[25px] w-[25px]" strokeWidth={1.8} aria-hidden="true" /></span>
                      <h3 className="whitespace-nowrap font-display text-xl font-medium leading-[1.12] tracking-[-0.045em] xl:text-[1.35rem]">{step.title}</h3>
                    </div>
                  </>
                )}
              </motion.article>
            );
          })}
        </div>
        <div className="mt-10 flex justify-center lg:hidden">
          <button type="button" onClick={open} className="premium-cta inline-flex min-h-14 items-center gap-5 bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] px-6 py-4 text-xs font-bold uppercase tracking-[0.1em] text-white shadow-[0_12px_36px_-12px_rgba(139,92,246,0.7)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c5a7ff]">
            Обсудить задачу <span className="border-l border-white/35 pl-4"><ArrowUpRight className="h-5 w-5" aria-hidden="true" /></span>
          </button>
        </div>
      </div>
    </section>
  );
}
