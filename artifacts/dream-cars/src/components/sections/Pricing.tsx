import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Базовый",
    price: "от 3 000 ₽",
    desc: "Для регулярного поддержания чистоты",
    features: ["Трехфазная мойка кузова", "Уборка салона пылесосом", "Очистка стекол", "Чернение резины"],
    popular: false
  },
  {
    name: "Стандарт",
    price: "от 8 000 ₽",
    desc: "Глубокая очистка и легкая защита",
    features: ["Все из Базового", "Легкая полировка (1 шаг)", "Твердый воск", "Глубокая очистка кожи", "Антидождь на полусферу"],
    popular: true
  },
  {
    name: "Премиум",
    price: "от 20 000 ₽",
    desc: "Максимальный результат и защита",
    features: ["Все из Стандарта", "Абразивная полировка", "Керамическое покрытие", "Полная химчистка с озонацией", "Защита кожи керамикой"],
    popular: false
  }
];

export function Pricing() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if(el) el.scrollIntoView({behavior: "smooth"});
  };

  return (
    <section id="pricing" className="py-24 bg-[#080808] relative" style={{background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(124,58,237,0.08) 0%, #080808 70%)"}}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-[#7C3AED]/10 rounded-full blur-[120px] z-0 pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 text-white">Наши <span className="text-[#7C3AED]">цены</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">Инвестиции в безупречный вид вашего автомобиля. Окончательная стоимость зависит от класса авто.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 lg:gap-14 xl:gap-20 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 border flex flex-col transition-all duration-300 backdrop-blur-xl ${
                plan.popular 
                ? "bg-white/10 border-[#7C3AED]/70 shadow-[0_0_40px_rgba(124,58,237,0.25)] scale-100 md:scale-105 z-10" 
                : "bg-white/5 border-white/10 hover:border-[#7C3AED]/40 hover:bg-white/8"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-[0_4px_10px_rgba(124,58,237,0.4)]">
                  Выбор клиентов
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-display font-bold mb-2 text-white">{plan.name}</h3>
                <p className="text-white/50 text-sm mb-6 h-10">{plan.desc}</p>
                <div className="font-display font-bold text-white whitespace-nowrap" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 2.25rem)' }}>{plan.price}</div>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${plan.popular ? "text-[#7C3AED]" : "text-white/40"}`} />
                    <span className="text-white/80 text-sm">{feat}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.popular ? "glow" : "outline"} 
                className={`w-full ${!plan.popular && "border-[#1E1E1E] hover:bg-white/5"}`}
                onClick={scrollToContact}
              >
                Выбрать
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
