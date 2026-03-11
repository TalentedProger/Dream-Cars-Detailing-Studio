import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { contactFormSchema, type ContactFormInput, useSubmitContact } from "@/hooks/use-contact";

export function Contact() {
  const { toast } = useToast();
  const mutation = useSubmitContact();
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = (data: ContactFormInput) => {
    mutation.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Заявка отправлена!",
          description: "Наш менеджер свяжется с вами в ближайшее время.",
        });
        reset();
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
            <div className="w-full h-64 bg-[#121212] rounded-2xl border border-[#1E1E1E] flex items-center justify-center relative overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80&auto=format" alt="Map Location" className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-[#7C3AED]/20 mix-blend-overlay" />
              <Button variant="outline" className="relative z-10 backdrop-blur-md bg-black/50 border-white/20 text-white hover:bg-white/10">Проложить маршрут</Button>
            </div>
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
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
              <div>
                <Input 
                  placeholder="Ваше Имя" 
                  {...register("name")}
                  className={`bg-[#080808] border-[#1E1E1E] focus:border-[#7C3AED] ${errors.name ? "border-destructive" : ""}`}
                />
                {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
              </div>
              
              <div>
                <Input 
                  placeholder="Телефон (+7...)" 
                  type="tel"
                  {...register("phone")}
                  className={`bg-[#080808] border-[#1E1E1E] focus:border-[#7C3AED] ${errors.phone ? "border-destructive" : ""}`}
                />
                {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>}
              </div>
              
              <div>
                <Select 
                  {...register("service")}
                  defaultValue=""
                  className={`bg-[#080808] border-[#1E1E1E] focus:border-[#7C3AED] ${errors.service ? "border-destructive text-white" : "text-white"}`}
                >
                  <option value="" disabled className="text-black">Выберите услугу</option>
                  <option value="polishing" className="text-black">Полировка кузова</option>
                  <option value="ceramic" className="text-black">Керамическое покрытие</option>
                  <option value="interior" className="text-black">Химчистка салона</option>
                  <option value="complex" className="text-black">Комплексный детейлинг</option>
                  <option value="other" className="text-black">Другое / Консультация</option>
                </Select>
                {errors.service && <p className="text-destructive text-sm mt-1">{errors.service.message}</p>}
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
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
