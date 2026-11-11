import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { contactFormSchema, type ContactFormInput } from "@/hooks/use-contact";

const routeUrl = "https://yandex.ru/maps/?rtext=~%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C+%D0%9A%D1%83%D1%82%D1%83%D0%B7%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9+%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82%2C+12%D1%813&rtt=auto";
const fieldClass = "h-14 rounded-xl border-white/10 bg-white/[0.055] px-4 text-base text-white placeholder:text-white/35 focus-visible:border-[#8b5cf6] focus-visible:ring-[#8b5cf6]/25";

export function Contact() {
  const { toast } = useToast();
  const reduceMotion = Boolean(useReducedMotion());
  const [form, setForm] = useState({ name: "", phone: "", service: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormInput, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormInput]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const result = contactFormSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: typeof errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof ContactFormInput;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    toast({ title: "Заявка отправлена!", description: "Наш менеджер свяжется с вами в ближайшее время." });
    setForm({ name: "", phone: "", service: "" });
    setErrors({});
  };

  return (
    <section id="contact" className="render-optimized relative overflow-hidden bg-[#fbfafc] py-20 text-[#17131d] md:py-24 lg:h-[100dvh] lg:py-[22.5px]">
      <div aria-hidden="true" className="performance-glow pointer-events-none absolute -left-44 bottom-0 h-[520px] w-[520px] rounded-full bg-[#9d6be8]/[0.09] blur-[140px]" />
      <div aria-hidden="true" className="performance-glow pointer-events-none absolute -right-52 top-0 h-[620px] w-[620px] rounded-full bg-[#d8c3f5]/[0.2] blur-[150px]" />

      <div className="container relative mx-auto px-4 md:px-6 lg:h-full">
        <div className="grid gap-16 lg:h-full lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-14 xl:gap-20">
          <motion.div initial={{ opacity: 0, x: reduceMotion ? 0 : -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: reduceMotion ? 0 : 0.7 }}>
            <h2 className="max-w-[570px] font-display text-[clamp(3rem,5.2vw,5.2rem)] font-semibold leading-[0.95] tracking-[-0.065em]">
              Запишитесь<br />
              <span className="inline-flex items-baseline gap-[0.38em]">
                <span>на</span>
                <span className="relative text-[#8b5cf6]">
                  детейлинг
                  <svg viewBox="0 0 30 30" fill="none" aria-hidden="true" className="absolute -right-7 -top-5 h-6 w-6 overflow-visible text-current">
                    <path d="M15 1.5c.7 8.2 5.3 12.8 13.5 13.5-8.2.7-12.8 5.3-13.5 13.5C14.3 20.3 9.7 15.7 1.5 15 9.7 14.3 14.3 9.7 15 1.5Z" fill="currentColor" />
                    <path d="M25 2.3c.2 2.4 1.5 3.7 3.9 3.9-2.4.2-3.7 1.5-3.9 3.9-.2-2.4-1.5-3.7-3.9-3.9 2.4-.2 3.7-1.5 3.9-3.9Z" fill="currentColor" opacity=".48" />
                  </svg>
                </span>
              </span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-[#6e6874] md:text-lg">Расскажите о вашем автомобиле и желаемом результате. Подберём работы и согласуем стоимость.</p>

            <div className="mt-9 space-y-5">
              <div className="grid grid-cols-[1.75rem_minmax(0,1fr)] items-center gap-x-4 border-t border-[#231b2d]/10 pt-5 sm:grid-cols-[1.75rem_minmax(0,1fr)_auto]">
                <MapPin className="h-6 w-6 self-center text-[#574f60]" strokeWidth={1.65} aria-hidden="true" />
                <div><span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#716b77]">Адрес</span><span className="mt-1.5 block text-base font-medium text-[#25202a] md:text-lg">Москва, Кутузовский проспект, 12с3</span></div>
                <a href={routeUrl} target="_blank" rel="noopener noreferrer" className="group col-start-2 mt-4 inline-flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#7138c7] transition-colors hover:text-[#4f2094] sm:col-start-3 sm:mb-0.5 sm:mt-0 sm:self-end">
                  Проложить маршрут <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              </div>
              <div className="grid grid-cols-[1.75rem_minmax(0,1fr)] items-center gap-x-4 border-t border-[#231b2d]/10 pt-5">
                <Phone className="h-6 w-6 self-center text-[#574f60]" strokeWidth={1.65} aria-hidden="true" />
                <div><span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#716b77]">Телефон</span><a href="tel:+79991234567" className="mt-1.5 block text-base font-medium text-[#25202a] transition-colors hover:text-[#7138c7] md:text-lg">+7 (999) 123-45-67</a></div>
              </div>
              <div className="grid grid-cols-[1.75rem_minmax(0,1fr)] items-center gap-x-4 border-t border-[#231b2d]/10 pt-5">
                <Clock className="h-6 w-6 self-center text-[#574f60]" strokeWidth={1.65} aria-hidden="true" />
                <div><span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#716b77]">Режим работы</span><span className="mt-1.5 block text-base font-medium text-[#25202a] md:text-lg">Ежедневно, 10:00–21:00</span></div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: reduceMotion ? 0 : 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.1 }} className="rounded-[28px] border border-[#8b5cf6]/25 bg-[#111013] p-6 text-white shadow-[0_24px_70px_rgba(30,20,40,0.13)] md:p-9 lg:w-[90%] lg:justify-self-end lg:p-8 xl:p-10">
            <h3 className="font-display text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">Оставить заявку</h3>
            <p className="mt-3 text-sm leading-6 text-white/50 md:text-base">Свяжемся с вами и обсудим детали.</p>

            <form onSubmit={onSubmit} className="mt-7 space-y-5" noValidate>
              <div><label htmlFor="contact-name" className="mb-2 block text-xs font-medium text-white/60">Ваше имя</label><Input id="contact-name" placeholder="Как к вам обращаться" autoComplete="name" name="name" value={form.name} onChange={handleChange} className={`${fieldClass} ${errors.name ? "border-red-500" : ""}`} aria-invalid={Boolean(errors.name)} />{errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}</div>
              <div><label htmlFor="contact-phone" className="mb-2 block text-xs font-medium text-white/60">Телефон</label><Input id="contact-phone" placeholder="+7 (999) 000-00-00" type="tel" autoComplete="tel" name="phone" value={form.phone} onChange={handleChange} className={`${fieldClass} ${errors.phone ? "border-red-500" : ""}`} aria-invalid={Boolean(errors.phone)} />{errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}</div>
              <div>
                <label htmlFor="contact-service" className="mb-2 block text-xs font-medium text-white/60">Услуга</label>
                <Select id="contact-service" name="service" value={form.service} onChange={handleChange} style={{ colorScheme: "dark", backgroundColor: "rgba(255,255,255,0.055)", color: "#ffffff" }} className={`${fieldClass} [&>option]:bg-[#1d1b20] [&>option]:text-[#f7f4fb] ${errors.service ? "border-red-500" : ""}`} aria-invalid={Boolean(errors.service)}>
                  <option value="" disabled style={{ backgroundColor: "#1d1b20", color: "#9f99a5" }}>Выберите услугу</option>
                  <option value="polishing" style={{ backgroundColor: "#1d1b20", color: "#f7f4fb" }}>Полировка кузова</option>
                  <option value="ceramic" style={{ backgroundColor: "#1d1b20", color: "#f7f4fb" }}>Керамическое покрытие</option>
                  <option value="interior" style={{ backgroundColor: "#1d1b20", color: "#f7f4fb" }}>Химчистка салона</option>
                  <option value="complex" style={{ backgroundColor: "#1d1b20", color: "#f7f4fb" }}>Комплексный детейлинг</option>
                  <option value="other" style={{ backgroundColor: "#1d1b20", color: "#f7f4fb" }}>Другое / Консультация</option>
                </Select>
                {errors.service && <p className="mt-1 text-xs text-red-400">{errors.service}</p>}
              </div>

              <button type="submit" className="premium-cta group mx-auto mt-2 flex min-h-14 w-full items-center justify-center gap-5 bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] px-6 py-4 text-xs font-bold uppercase tracking-[0.1em] text-white shadow-[0_12px_36px_-12px_rgba(139,92,246,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:from-[#9f75ff] hover:to-[#7c3aed] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c5a7ff] sm:w-fit">
                Отправить заявку<span className="border-l border-white/35 pl-4"><ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" /></span>
              </button>
              <p className="max-w-md text-xs leading-5 text-white/35">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.</p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
