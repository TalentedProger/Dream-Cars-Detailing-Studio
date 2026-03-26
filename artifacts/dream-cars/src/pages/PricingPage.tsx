import { motion } from "framer-motion";
import { Check, HelpCircle, ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FloatingSocials } from "@/components/FloatingSocials";
import { BookingModal } from "@/components/BookingModal";
import { useBooking } from "@/contexts/BookingContext";

const plans = [
  {
    name: "Базовый",
    tagline: "Регулярный уход",
    price: "от 3 000 ₽",
    desc: "Поддержание чистоты и свежести",
    features: [
      "Трёхфазная мойка кузова",
      "Уборка салона пылесосом",
      "Очистка стёкол изнутри",
      "Чернение резины",
      "Влажная уборка пластика",
    ],
    popular: false,
    color: "#7C3AED",
  },
  {
    name: "Стандарт",
    tagline: "Лучший выбор",
    price: "от 8 000 ₽",
    desc: "Глубокая очистка и базовая защита",
    features: [
      "Всё из Базового пакета",
      "Лёгкая полировка (1 шаг)",
      "Твёрдый воск",
      "Глубокая очистка кожи",
      "Антидождь на полусферу",
      "Детейлинг дисков",
    ],
    popular: true,
    color: "#7C3AED",
  },
  {
    name: "Премиум",
    tagline: "Максимальный результат",
    price: "от 20 000 ₽",
    desc: "Профессиональная защита и восстановление",
    features: [
      "Всё из Стандарта",
      "Абразивная полировка (2 шага)",
      "Керамическое покрытие",
      "Полная химчистка + озонация",
      "Защита кожи керамикой",
      "Детейлинг двигателя",
    ],
    popular: false,
    color: "#7C3AED",
  },
];

const individual = [
  { service: "Трёхфазная мойка", price: "1 500 – 3 000 ₽" },
  { service: "Химчистка салона", price: "от 10 000 ₽" },
  { service: "Полировка (1 шаг)", price: "от 8 000 ₽" },
  { service: "Полировка (2 шага)", price: "от 15 000 ₽" },
  { service: "Керамика SiO₂", price: "от 25 000 ₽" },
  { service: "PPF (зоны риска)", price: "от 30 000 ₽" },
  { service: "PPF (полный кузов)", price: "от 90 000 ₽" },
  { service: "Антидождь", price: "от 3 000 ₽" },
  { service: "Детейлинг двигателя", price: "от 5 000 ₽" },
  { service: "Реставрация фар", price: "от 4 000 ₽" },
  { service: "Озонирование", price: "от 2 000 ₽" },
  { service: "Тонировка", price: "от 5 000 ₽" },
];

const faqs = [
  {
    q: "Как долго держится керамическое покрытие?",
    a: "Профессиональное нанокерамическое покрытие при правильном уходе держится от 3 до 5 лет. На каждое покрытие мы выдаём гарантийный сертификат.",
  },
  {
    q: "Нужно ли как-то готовить машину перед приездом?",
    a: "Нет. Приезжайте в любом состоянии — мы всё сделаем сами. Если есть возможность — приезжайте с немытым автомобилем, чтобы мы могли оценить реальный объём работ.",
  },
  {
    q: "Почему окончательная стоимость зависит от класса авто?",
    a: "Площадь кузова и сложность работ напрямую зависят от размера автомобиля. Детейлинг кроссовера и спорт-купе — по времени и материалам могут различаться в 2 раза.",
  },
  {
    q: "Можно ли остаться и наблюдать за процессом?",
    a: "Да, мы приветствуем ваше присутствие. У нас есть зона ожидания с кофе, а мастера с удовольствием объяснят каждый этап.",
  },
  {
    q: "Даёте ли вы гарантию на работы?",
    a: "Да. На полировку — 3 месяца, на нанесение воска — 3–6 месяцев, на керамику — официальная гарантия производителя от 1 до 5 лет в зависимости от выбранного покрытия.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-white/8 rounded-2xl overflow-hidden cursor-pointer hover:border-[#7C3AED]/30 transition-colors"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between gap-4 p-6">
        <span className="text-white font-medium text-sm">{q}</span>
        <ChevronDown className={`w-5 h-5 text-[#7C3AED] shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </div>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="px-6 pb-6 text-white/55 text-sm leading-relaxed border-t border-white/8"
        >
          <p className="pt-4">{a}</p>
        </motion.div>
      )}
    </div>
  );
}

export default function PricingPage() {
  const { open } = useBooking();
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <Navbar />
      <BookingModal />

      {/* Hero */}
      <section className="relative pt-40 pb-32 md:pb-44 overflow-hidden">
        <div className="absolute inset-0 bg-[#080808]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#7C3AED]/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none z-10" />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-[#8B5CF6]" />
              <span className="text-[#8B5CF6] font-semibold tracking-[0.25em] uppercase text-xs">Прозрачное ценообразование</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-black leading-none mb-6">
              <span className="text-white">Наши </span>
              <span style={{ background: "linear-gradient(135deg, #ffffff 0%, #a78bfa 50%, #7c3aed 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>цены</span>
            </h1>
            <p className="text-white/55 max-w-xl text-lg leading-relaxed">
              Честная стоимость без скрытых доплат. Итоговая цена зависит от класса и состояния автомобиля — уточним на консультации.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-3xl p-8 border flex flex-col backdrop-blur-xl transition-all duration-300 ${
                  plan.popular
                    ? "bg-white/10 border-[#7C3AED]/70 shadow-[0_0_50px_rgba(124,58,237,0.22)] md:scale-[1.04] z-10"
                    : "bg-white/5 border-white/10 hover:border-[#7C3AED]/40"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white text-xs font-bold uppercase tracking-wider py-1.5 px-5 rounded-full shadow-[0_4px_16px_rgba(124,58,237,0.4)]">
                    Выбор клиентов
                  </div>
                )}
                <div className="mb-8">
                  <div className="text-xs text-[#7C3AED] font-bold uppercase tracking-widest mb-2">{plan.tagline}</div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-white/40 text-sm mb-5 h-10">{plan.desc}</p>
                  <div className="text-4xl font-display font-black text-white">{plan.price}</div>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.popular ? "text-[#a78bfa]" : "text-white/35"}`} />
                      <span className="text-white/75 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={open}
                  className={`w-full py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] ${
                    plan.popular
                      ? "text-white hover:shadow-[0_0_24px_rgba(124,58,237,0.5)]"
                      : "text-white/70 border border-white/15 hover:border-[#7C3AED]/50 hover:bg-white/5"
                  }`}
                  style={plan.popular ? { background: "linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)", boxShadow: "0 4px 20px rgba(124,58,237,0.3)" } : {}}
                >
                  Выбрать
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual services */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-4xl font-display font-bold text-white mb-3">Отдельные <span className="text-[#7C3AED]">услуги</span></h2>
            <p className="text-white/50 max-w-lg">Заказывайте именно то, что нужно вашему автомобилю — без лишних трат.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {individual.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center justify-between p-5 rounded-2xl border border-white/8 hover:border-[#7C3AED]/35 hover:bg-white/[0.02] transition-all duration-200 group"
              >
                <span className="text-white/75 text-sm group-hover:text-white transition-colors">{item.service}</span>
                <span className="text-white font-bold text-sm bg-[#7C3AED]/10 border border-[#7C3AED]/20 px-3 py-1 rounded-lg">{item.price}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-white/30 text-xs mt-6 flex items-center gap-2">
            <HelpCircle className="w-3 h-3" /> Цены указаны для автомобилей классов B–D. Для SUV, внедорожников и суперкаров — индивидуальный расчёт.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-4xl font-display font-bold text-white mb-3">Часто задаваемые <span className="text-[#7C3AED]">вопросы</span></h2>
            <p className="text-white/50">Всё, что вам нужно знать перед записью.</p>
          </motion.div>
          <div className="max-w-3xl space-y-3">
            {faqs.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                <FaqItem q={f.q} a={f.a} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7C3AED]/5 to-transparent" />
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-4">Не знаете что выбрать?</h2>
            <p className="text-white/50 mb-10 max-w-lg mx-auto">Оставьте заявку — мы бесплатно проконсультируем и подберём услугу под ваш автомобиль и бюджет.</p>
            <button
              onClick={open}
              className="inline-flex items-center gap-3 px-10 py-4 rounded-xl font-bold text-white text-sm uppercase tracking-wider transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_40px_rgba(124,58,237,0.5)]"
              style={{ background: "linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)", boxShadow: "0 4px 20px rgba(124,58,237,0.35)" }}
            >
              Получить консультацию <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingSocials />
    </main>
  );
}
