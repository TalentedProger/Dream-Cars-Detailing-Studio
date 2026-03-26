import { motion } from "framer-motion";
import { Phone, MapPin, Clock, ArrowRight, Send, MessageCircle, Instagram } from "lucide-react";
import { useState } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FloatingSocials } from "@/components/FloatingSocials";
import { BookingModal } from "@/components/BookingModal";
import { useBooking } from "@/contexts/BookingContext";

const info = [
  {
    icon: Phone,
    label: "Телефон",
    value: "+7 (900) 000-00-00",
    sub: "Пн–Вс, 9:00 – 21:00",
    href: "tel:+79000000000",
  },
  {
    icon: MapPin,
    label: "Адрес",
    value: "ул. Детейлинг, 12",
    sub: "ТЦ AutoPro, бокс №4",
    href: "#",
  },
  {
    icon: Clock,
    label: "Режим работы",
    value: "Пн–Вс: 9:00 – 21:00",
    sub: "Без выходных и праздников",
    href: "#",
  },
];

const socials = [
  {
    name: "WhatsApp",
    color: "#25D366",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    name: "Telegram",
    color: "#2AABEE",
    href: "#",
    icon: <Send className="w-5 h-5" />,
  },
  {
    name: "Instagram",
    color: "#E1306C",
    href: "#",
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    name: "ВКонтакте",
    color: "#4680C2",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C5.058 11.31 4.42 9.18 4.42 8.72c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.74c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.253-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.491-.085.745-.576.745z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  const { open } = useBooking();
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", phone: "", service: "", message: "" });
  }

  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <Navbar />
      <BookingModal />

      {/* Hero */}
      <section className="relative pt-40 pb-32 md:pb-44 overflow-hidden">
        <div className="absolute inset-0 bg-[#080808]" />
        <div className="absolute top-0 right-1/4 w-[800px] h-[600px] bg-[#7C3AED]/8 rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none z-10" />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-[#8B5CF6]" />
              <span className="text-[#8B5CF6] font-semibold tracking-[0.25em] uppercase text-xs">Dream Cars Studio</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-black leading-none mb-6">
              <span className="text-white">Свяжитесь </span>
              <span style={{ background: "linear-gradient(135deg, #ffffff 0%, #a78bfa 50%, #7c3aed 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>с нами</span>
            </h1>
            <p className="text-white/55 max-w-xl text-lg leading-relaxed">
              Есть вопросы? Хотите записаться или просто узнать стоимость? Напишите или позвоните — ответим в течение 15 минут.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl">
            {info.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-6 rounded-2xl border border-white/8 bg-white/[0.02] hover:border-[#7C3AED]/35 hover:bg-white/[0.04] transition-all duration-300 overflow-hidden block"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/0 to-[#7C3AED]/0 group-hover:from-[#7C3AED]/5 group-hover:to-transparent transition-all duration-500" />
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/15 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-[#7C3AED]" />
                  </div>
                  <div className="text-white/40 text-xs font-medium tracking-wider uppercase mb-1">{item.label}</div>
                  <div className="text-white font-semibold text-sm mb-1">{item.value}</div>
                  <div className="text-white/35 text-xs">{item.sub}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + map */}
      <section className="py-16 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl items-start">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h2 className="text-3xl font-display font-bold text-white mb-2">Оставьте заявку</h2>
              <p className="text-white/40 text-sm mb-8">Заполните форму — мы перезвоним в удобное время</p>

              {sent ? (
                <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-8 text-center">
                  <div className="text-green-400 text-2xl font-bold mb-2">Отправлено!</div>
                  <p className="text-white/60 text-sm">Мы свяжемся с вами в течение 15 минут</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/40 text-xs mb-1.5 tracking-wider uppercase">Ваше имя</label>
                      <input
                        type="text"
                        placeholder="Алексей"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#7C3AED]/60 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-white/40 text-xs mb-1.5 tracking-wider uppercase">Телефон</label>
                      <input
                        type="tel"
                        placeholder="+7 (___) ___-__-__"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        required
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#7C3AED]/60 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/40 text-xs mb-1.5 tracking-wider uppercase">Интересующая услуга</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#7C3AED]/60 transition-colors appearance-none cursor-pointer"
                      style={{ colorScheme: "dark" }}
                    >
                      <option value="">Выберите услугу...</option>
                      <option>Мойка и очистка</option>
                      <option>Полировка кузова</option>
                      <option>Керамическое покрытие</option>
                      <option>PPF-плёнка</option>
                      <option>Химчистка салона</option>
                      <option>Детейлинг двигателя</option>
                      <option>Комплексный детейлинг</option>
                      <option>Другое</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white/40 text-xs mb-1.5 tracking-wider uppercase">Комментарий</label>
                    <textarea
                      rows={4}
                      placeholder="Опишите состояние автомобиля, пожелания или вопросы..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#7C3AED]/60 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold text-white text-sm uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_28px_rgba(124,58,237,0.45)] flex items-center justify-center gap-2"
                    style={{ background: "linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)", boxShadow: "0 4px 18px rgba(124,58,237,0.3)" }}
                  >
                    Отправить заявку <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-white/25 text-xs text-center">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных</p>
                </form>
              )}
            </motion.div>

            {/* Map + socials */}
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              {/* Map placeholder */}
              <div className="relative rounded-3xl overflow-hidden mb-8 h-72">
                <img
                  src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80"
                  alt="Location"
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-full bg-[#7C3AED] flex items-center justify-center mx-auto mb-3 shadow-[0_0_30px_rgba(124,58,237,0.6)]">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-white font-bold text-sm">ул. Детейлинг, 12</div>
                    <div className="text-white/50 text-xs">ТЦ AutoPro, бокс №4</div>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <h3 className="text-white/70 text-sm font-medium uppercase tracking-widest mb-4">Мы в социальных сетях</h3>
              <div className="grid grid-cols-2 gap-3">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    className="flex items-center gap-3 p-4 rounded-2xl border border-white/8 hover:border-[#7C3AED]/30 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-200 group"
                  >
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${s.color}20`, border: `1px solid ${s.color}30` }}>
                      <span style={{ color: s.color }}>{s.icon}</span>
                    </div>
                    <span className="text-white/60 group-hover:text-white text-sm font-medium transition-colors">{s.name}</span>
                  </a>
                ))}
              </div>

              {/* Quick call */}
              <button
                onClick={open}
                className="mt-6 w-full py-4 rounded-xl text-white text-sm font-bold uppercase tracking-wider border border-[#7C3AED]/30 bg-[#7C3AED]/5 hover:bg-[#7C3AED]/10 hover:border-[#7C3AED]/60 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" /> Быстрая запись онлайн
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingSocials />
    </main>
  );
}
