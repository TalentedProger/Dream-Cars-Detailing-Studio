import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { contactFormSchema, type ContactFormInput, useSubmitContact } from "@/hooks/use-contact";

export function Contact() {
  const { toast } = useToast();
  const mutation = useSubmitContact();

  const [form, setForm] = useState({ name: "", phone: "", service: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormInput, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormInput]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
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
    mutation.mutate(result.data, {
      onSuccess: () => {
        toast({
          title: "Заявка отправлена!",
          description: "Наш менеджер свяжется с вами в ближайшее время.",
        });
        setForm({ name: "", phone: "", service: "" });
        setErrors({});
      },
      onError: () => {
        toast({
          variant: "destructive",
          title: "Ошибка",
          description: "Не удалось отправить заявку. Попробуйте по телефону.",
        });
      }
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#0D0D0D] relative border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 text-white">Запишитесь на <span className="text-[#7C3AED]">детейлинг</span></h2>
            <p className="text-xl text-white/60 mb-10">Доверьте свой автомобиль профессионалам. Мы гарантируем безупречный результат.</p>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#121212] rounded-full flex items-center justify-center border border-[#1E1E1E] shrink-0 text-[#7C3AED]">
                  <MapPin />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-white">Адрес</h4>
                  <p className="text-white/60">г. Москва, Кутузовский проспект, 12с3</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#121212] rounded-full flex items-center justify-center border border-[#1E1E1E] shrink-0 text-[#7C3AED]">
                  <Phone />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-white">Телефон</h4>
                  <p className="text-white/60">+7 (999) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#121212] rounded-full flex items-center justify-center border border-[#1E1E1E] shrink-0 text-[#7C3AED]">
                  <Clock />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-white">Режим работы</h4>
                  <p className="text-white/60">Ежедневно: 10:00 - 21:00</p>
                </div>
              </div>
            </div>

            {/* Simulated Map */}
            <a
              href="https://yandex.ru/maps/?rtext=~%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C+%D0%9A%D1%83%D1%82%D1%83%D0%B7%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9+%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82%2C+12%D1%813&rtt=auto"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="w-full h-64 bg-[#121212] rounded-2xl border border-[#1E1E1E] flex items-center justify-center relative overflow-hidden group cursor-pointer">
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80&auto=format" alt="Map Location" className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-[#7C3AED]/20 mix-blend-overlay" />
                <Button variant="outline" className="relative z-10 backdrop-blur-md bg-black/50 border-white/20 text-white hover:bg-white/10" asChild><span>Проложить маршрут</span></Button>
              </div>
            </a>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#121212] border border-[#1E1E1E] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7C3AED]/10 rounded-full blur-[100px] pointer-events-none" />
            
            <h3 className="text-2xl font-bold mb-8 text-white">Оставить заявку</h3>
            
            <form onSubmit={onSubmit} className="space-y-6 relative z-10">
              <div>
                <Input 
                  placeholder="Ваше Имя"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={`bg-[#080808] border-[#1E1E1E] focus:border-[#7C3AED] ${errors.name ? "border-destructive" : ""}`}
                />
                {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <Input 
                  placeholder="Телефон (+7...)" 
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className={`bg-[#080808] border-[#1E1E1E] focus:border-[#7C3AED] ${errors.phone ? "border-destructive" : ""}`}
                />
                {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
              </div>
              
              <div>
                <Select 
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  style={{ colorScheme: 'dark' }}
                  className={`bg-[#080808] border-[#1E1E1E] focus:border-[#7C3AED] text-white ${errors.service ? "border-destructive" : ""}`}
                >
                  <option value="" disabled style={{ background: '#121212', color: '#ffffff99' }}>Выберите услугу</option>
                  <option value="polishing" style={{ background: '#121212', color: '#fff' }}>Полировка кузова</option>
                  <option value="ceramic" style={{ background: '#121212', color: '#fff' }}>Керамическое покрытие</option>
                  <option value="interior" style={{ background: '#121212', color: '#fff' }}>Химчистка салона</option>
                  <option value="complex" style={{ background: '#121212', color: '#fff' }}>Комплексный детейлинг</option>
                  <option value="other" style={{ background: '#121212', color: '#fff' }}>Другое / Консультация</option>
                </Select>
                {errors.service && <p className="text-destructive text-sm mt-1">{errors.service}</p>}
              </div>

              <Button 
                type="submit" 
                variant="glow" 
                size="lg" 
                className="w-full mt-4"
                disabled={mutation.isPending}
              >
                {mutation.isPending ? "Отправка..." : "Отправить заявку"}
              </Button>
              
              <p className="text-xs text-center text-white/40 mt-4">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
              </p>

              {/* ---- Не хотите ждать? ---- */}
              <div className="border-t border-white/8 pt-6 mt-2">
                <p className="text-white/60 text-sm font-medium mb-1">Не хотите ждать?</p>
                <p className="text-white/35 text-xs mb-5">Свяжитесь с нами любым удобным способом</p>
                <div className="flex gap-3 mb-5">
                  <a href="https://wa.me/79991234567" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                    className="w-11 h-11 rounded-xl bg-[#25D366] flex items-center justify-center text-white hover:scale-110 hover:shadow-[0_4px_16px_rgba(37,211,102,0.4)] transition-all duration-200">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                  </a>
                  <a href="https://t.me/dreamcars" target="_blank" rel="noopener noreferrer" aria-label="Telegram"
                    className="w-11 h-11 rounded-xl bg-[#0088CC] flex items-center justify-center text-white hover:scale-110 hover:shadow-[0_4px_16px_rgba(0,136,204,0.4)] transition-all duration-200">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.895-1.056-.688-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.664 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.381 4.025-1.627 4.476-1.635z" /></svg>
                  </a>
                  <a href="https://vk.com/dreamcars" target="_blank" rel="noopener noreferrer" aria-label="ВКонтакте"
                    className="w-11 h-11 rounded-xl bg-[#0077FF] flex items-center justify-center text-white hover:scale-110 hover:shadow-[0_4px_16px_rgba(0,119,255,0.4)] transition-all duration-200">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .423-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.779.678.864 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.736c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.762-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.745-.576.745z" /></svg>
                  </a>
                </div>
                <p className="text-white/30 text-xs mb-1">Или позвоните</p>
                <a href="tel:+79991234567" className="text-white font-bold text-lg hover:text-[#a78bfa] transition-colors duration-200 flex items-center gap-2">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-[#7C3AED] shrink-0"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                  +7 (999) 123-45-67
                </a>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
