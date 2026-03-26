import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { useBooking } from "@/contexts/BookingContext";

const VkIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .423-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.779.678.864 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.736c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.762-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.745-.576.745z" />
  </svg>
);

const TgIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.895-1.056-.688-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.664 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.381 4.025-1.627 4.476-1.635z" />
  </svg>
);

const WaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export function BookingModal() {
  const { isOpen, close } = useBooking();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !agreed) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setName("");
      setPhone("");
      setAgreed(false);
      close();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
            onClick={close}
          />

          {/* Modal card */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 24 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-5xl max-h-[96vh] overflow-hidden rounded-3xl flex flex-col md:flex-row shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
          >
            {/* ——— Close button ——— */}
            <button
              onClick={close}
              aria-label="Закрыть"
              className="absolute top-5 right-5 z-30 w-10 h-10 rounded-full bg-red-500/20 hover:bg-red-500 border border-red-500/50 flex items-center justify-center text-red-400 hover:text-white transition-all duration-200"
            >
              <X className="w-5 h-5" />
            </button>

            {/* ——— Left: Car photo ——— */}
            <div className="hidden md:block relative w-[44%] shrink-0 overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}images/fon.jpg`}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover object-center scale-105"
              />
              {/* gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/70 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/80 via-transparent to-[#0D0D0D]/40" />
              {/* Brand stamp */}
              <div className="absolute bottom-10 left-8">
                <p className="text-white/35 text-[10px] tracking-[0.4em] uppercase mb-2">Premium Detailing Studio</p>
                <p className="text-white font-display font-black text-3xl tracking-wide">
                  DREAM<span className="text-[#7C3AED]">CARS</span>
                </p>
              </div>
              {/* Decorative corner accent */}
              <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-[#7C3AED]/60 rounded-tl-lg" />
              <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-[#7C3AED]/60 rounded-br-lg" />
            </div>

            {/* ——— Right: Form ——— */}
            <div className="flex-1 bg-[#0D0D0D] p-8 md:p-12 overflow-y-auto flex flex-col justify-center">
              <div className="max-w-md w-full">
                <p className="text-white/40 text-sm tracking-widest uppercase mb-4">Нужна помощь?</p>

                <h2 className="text-3xl md:text-4xl font-display font-black uppercase leading-[1.1] mb-8">
                  <span className="text-white">Заполните форму</span>
                  <br />
                  <span className="text-white">и мы </span>
                  <span
                    style={{
                      background: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    перезвоним
                  </span>
                </h2>

                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-10 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/50 flex items-center justify-center mx-auto mb-4 shadow-[0_0_24px_rgba(124,58,237,0.3)]">
                      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-[#7C3AED]">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Заявка отправлена!</h3>
                    <p className="text-white/50 text-sm">Наш менеджер свяжется с вами в ближайшее время.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 mb-8">
                    <input
                      type="text"
                      placeholder="Ваше Имя"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full bg-[#181818] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/25 focus:outline-none focus:border-[#7C3AED]/70 transition-colors text-sm"
                    />
                    <input
                      type="tel"
                      placeholder="Ваш Телефон"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full bg-[#181818] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/25 focus:outline-none focus:border-[#7C3AED]/70 transition-colors text-sm"
                    />
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="mt-0.5 w-4 h-4 accent-[#7C3AED] shrink-0 cursor-pointer"
                      />
                      <span className="text-white/40 text-xs leading-relaxed group-hover:text-white/60 transition-colors">
                        Согласен с Правилами Обработки Данных
                      </span>
                    </label>
                    <button
                      type="submit"
                      disabled={!agreed || !name || !phone}
                      className="w-full py-4 rounded-xl font-bold text-white uppercase tracking-widest text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                      style={{
                        background: "linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)",
                        boxShadow: agreed && name && phone ? "0 6px 28px rgba(124,58,237,0.45)" : "none",
                      }}
                    >
                      Отправить →
                    </button>
                  </form>
                )}

                {/* Contact alternatives */}
                <div className="border-t border-white/8 pt-6">
                  <p className="text-white/60 text-sm font-medium mb-1">Не хотите ждать?</p>
                  <p className="text-white/35 text-xs mb-5">Свяжитесь с нами любым удобным способом</p>
                  <div className="flex gap-3 mb-5">
                    <a
                      href="https://wa.me/79991234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                      className="w-11 h-11 rounded-xl bg-[#25D366] flex items-center justify-center text-white hover:scale-110 hover:shadow-[0_4px_16px_rgba(37,211,102,0.4)] transition-all duration-200"
                    >
                      <WaIcon />
                    </a>
                    <a
                      href="https://t.me/dreamcars"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Telegram"
                      className="w-11 h-11 rounded-xl bg-[#0088CC] flex items-center justify-center text-white hover:scale-110 hover:shadow-[0_4px_16px_rgba(0,136,204,0.4)] transition-all duration-200"
                    >
                      <TgIcon />
                    </a>
                    <a
                      href="https://vk.com/dreamcars"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="ВКонтакте"
                      className="w-11 h-11 rounded-xl bg-[#0077FF] flex items-center justify-center text-white hover:scale-110 hover:shadow-[0_4px_16px_rgba(0,119,255,0.4)] transition-all duration-200"
                    >
                      <VkIcon />
                    </a>
                  </div>
                  <p className="text-white/30 text-xs mb-1">Или позвоните</p>
                  <a
                    href="tel:+79991234567"
                    className="text-white font-bold text-lg hover:text-[#a78bfa] transition-colors duration-200 flex items-center gap-2"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-[#7C3AED] shrink-0">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                    +7 (999) 123-45-67
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
