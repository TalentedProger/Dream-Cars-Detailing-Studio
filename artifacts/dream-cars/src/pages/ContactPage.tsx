import { motion } from "framer-motion";
import { Phone, MapPin, Clock, ArrowRight, Send, MessageCircle, Instagram } from "lucide-react";
import { useState } from "react";
import { Footer } from "@/components/sections/Footer";
import { useBooking } from "@/contexts/BookingContext";
import { usePageMeta } from "@/hooks/use-page-meta";

const info = [
  {
    icon: Phone,
    label: "Телефон",
    value: "+7 (900) 000-00-00",
    sub: "Пн–Вс, 9:00 – 21:00",
    href: "tel:+79000000000",
  },
  {
    icon: MessageCircle,
    label: "Консультация",
    value: "Ответим за 15 минут",
    sub: "По телефону или в мессенджере",
    href: "tel:+79000000000",
  },
  {
    icon: Clock,
    label: "Режим работы",
    value: "Пн–Вс: 9:00 – 21:00",
    sub: "Без выходных и праздников",
    href: "#",
  },
  {
    icon: MapPin,
    label: "Адрес",
    value: "ул. Детейлинг, 12",
    sub: "ТЦ AutoPro, бокс №4",
    href: "#",
  },
];

const socials = [
  {
    name: "WhatsApp",
    color: "#25D366",
    href: "https://wa.me/79991234567",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    name: "Telegram",
    color: "#2AABEE",
    href: "https://t.me/dreamcars",
    icon: <Send className="w-5 h-5" />,
  },
  {
    name: "Instagram",
    color: "#E1306C",
    href: "https://instagram.com/dreamcars",
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    name: "ВКонтакте",
    color: "#4680C2",
    href: "https://vk.com/dreamcars",
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
  const mobileOptimized = typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;
  usePageMeta({
    title: "Контакты — Dream Cars Studio",
    description: "Свяжитесь с Dream Cars Studio. Тел: +7 (900) 000-00-00. Адрес: ул. Детейлинг, 12, ТЦ AutoPro, бокс №4. Работаем ежедневно 9:00–21:00. Contact Dream Cars Studio for professional car detailing.",
    canonicalPath: "/contact",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", phone: "", service: "", message: "" });
  }

  return (
    <main className="min-h-screen w-full overflow-x-clip bg-[#080808] text-white">

      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-40 md:pb-20">
        <div className="absolute inset-0 bg-[#080808]" />
        <div className="performance-glow absolute top-0 right-1/4 w-[800px] h-[600px] bg-[#7C3AED]/8 rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none z-10" />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div initial={mobileOptimized ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
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
      <section className="pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {info.map((item, i) => (
              <motion.div
                key={i}
                initial={mobileOptimized ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="min-w-0"
              >
                <a href={item.href} className="group relative block min-h-[190px] flex-1 overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-all duration-300 hover:border-[#7C3AED]/35 hover:bg-white/[0.04]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/0 to-[#7C3AED]/0 transition-all duration-500 group-hover:from-[#7C3AED]/5 group-hover:to-transparent" />
                  <div className="relative flex h-full flex-col">
                    <div className="mb-auto flex h-10 w-10 items-center justify-center rounded-xl bg-[#7C3AED]/15">
                      <item.icon className="h-5 w-5 text-[#7C3AED]" />
                    </div>
                    <div className="mt-7 text-xs font-medium uppercase tracking-wider text-white/40">{item.label}</div>
                    <div className="mt-1 text-sm font-semibold text-white">{item.value}</div>
                    <div className="mt-1 text-xs text-white/35">{item.sub}</div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social strip */}
      <section className="border-y border-white/[0.07] bg-[#0b0b0c] py-4">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
            {socials.map((social) => (
              <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="group flex min-h-16 items-center justify-between rounded-[5px] border border-white/8 bg-white/[0.025] px-4 transition-colors hover:border-white/20 hover:bg-white/[0.05]">
                <span className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center" style={{ color: social.color }}>{social.icon}</span>
                  <span className="text-sm font-medium text-white/60 transition-colors group-hover:text-white">{social.name}</span>
                </span>
                <ArrowRight className="h-4 w-4 text-white/25 transition-transform group-hover:translate-x-0.5 group-hover:text-white/60" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation + form */}
      <section className="relative overflow-hidden border-t border-black/[0.06] bg-[#fbfafc] py-20 text-[#17131d] md:py-28">
        <img src={`${import.meta.env.BASE_URL}our_work/polishing_ceramics.webp`} alt="" aria-hidden="true" loading="lazy" decoding="async" className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-[0.06] grayscale" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(251,250,252,0.97)_0%,rgba(251,250,252,0.91)_52%,rgba(251,250,252,0.95)_100%)]" />
        <div className="performance-glow pointer-events-none absolute -left-52 bottom-0 h-[560px] w-[560px] rounded-full bg-[#8b5cf6]/[0.08] blur-[145px]" />

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(400px,0.92fr)] lg:gap-20 xl:gap-28">
            <motion.div initial={mobileOptimized ? false : { opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h2 className="max-w-xl font-display text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#17131d] md:text-6xl">Обсудим ваш автомобиль</h2>
              <p className="mt-6 max-w-lg text-base leading-7 text-[#17131d]/55 md:text-lg">Расскажите о состоянии автомобиля и желаемом результате. Мы предложим понятный план работ и заранее согласуем стоимость.</p>

              <div className="mt-10 max-w-xl space-y-0">
                {[
                  ["01", "Подберём решение", "Только необходимые процедуры под состояние автомобиля."],
                  ["02", "Рассчитаем стоимость", "Зафиксируем состав работ и бюджет до начала детейлинга."],
                  ["03", "Назначим удобное время", "Согласуем дату приёма и ориентировочный срок готовности."],
                ].map(([number, title, text]) => (
                  <div key={number} className="grid grid-cols-[2.4rem_1fr] gap-4 border-t border-black/[0.09] py-5 first:border-t-0 first:pt-0">
                    <span className="font-display text-sm font-semibold text-[#7c3aed]">{number}</span>
                    <div>
                      <h3 className="text-sm font-semibold text-[#17131d]">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-[#17131d]/48">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={mobileOptimized ? false : { opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="rounded-[28px] border border-white/[0.12] bg-black p-6 text-white shadow-[0_24px_70px_rgba(0,0,0,0.32)] md:p-8 xl:p-10">
              <h2 className="font-display text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">Оставьте заявку</h2>
              <p className="mt-3 text-sm leading-6 text-white/45">Заполните форму — перезвоним и обсудим детали.</p>

              {sent ? (
                <div className="mt-7 flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-green-500/30 bg-green-500/10 p-8 text-center">
                  <div className="text-2xl font-bold text-green-400">Отправлено!</div>
                  <p className="mt-2 text-sm text-white/60">Мы свяжемся с вами в течение 15 минут</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs font-medium text-white/55">Ваше имя</label>
                      <input type="text" placeholder="Алексей" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="h-14 w-full rounded-xl border border-white/10 bg-white/[0.055] px-4 text-sm text-white placeholder:text-white/25 focus:border-[#8b5cf6] focus:outline-none" />
                    </div>
                    <div>
                      <label className="mb-2 block text-xs font-medium text-white/55">Телефон</label>
                      <input type="tel" placeholder="+7 (___) ___-__-__" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required className="h-14 w-full rounded-xl border border-white/10 bg-white/[0.055] px-4 text-sm text-white placeholder:text-white/25 focus:border-[#8b5cf6] focus:outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-medium text-white/55">Интересующая услуга</label>
                    <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="h-14 w-full cursor-pointer appearance-none rounded-xl border border-white/10 bg-[#1a181c] px-4 text-sm text-white focus:border-[#8b5cf6] focus:outline-none" style={{ colorScheme: "dark" }}>
                      <option value="">Выберите услугу...</option>
                      <option>Мойка и очистка</option><option>Полировка кузова</option><option>Керамическое покрытие</option><option>PPF-плёнка</option><option>Химчистка салона</option><option>Детейлинг двигателя</option><option>Комплексный детейлинг</option><option>Другое</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-medium text-white/55">Комментарий</label>
                    <textarea rows={4} placeholder="Опишите состояние автомобиля или пожелания..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.055] px-4 py-3 text-sm text-white placeholder:text-white/25 focus:border-[#8b5cf6] focus:outline-none" />
                  </div>
                  <button type="submit" className="flex min-h-14 w-full items-center justify-center gap-3 rounded-[5px] bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] px-6 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:from-[#9f75ff] hover:to-[#7c3aed]">
                    Отправить заявку <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <button type="button" onClick={open} className="flex min-h-14 w-full items-center justify-center gap-2 rounded-[5px] border border-[#7C3AED]/30 bg-[#7C3AED]/5 px-6 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:border-[#7C3AED]/60 hover:bg-[#7C3AED]/10">
                    <MessageCircle className="h-4 w-4" aria-hidden="true" /> Быстрая запись онлайн
                  </button>
                  <p className="text-center text-xs text-white/25">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных</p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
