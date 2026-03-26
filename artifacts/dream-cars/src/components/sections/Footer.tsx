import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";

export function Footer() {
  const [, setLocation] = useLocation();

  const handleNav = (path: string) => {
    setLocation(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#080808] pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
          {/* Logo & Description */}
          <div className="md:col-span-12 lg:col-span-5 flex flex-col gap-6 ">
            <h1 
              className="font-display font-bold text-2xl tracking-wider text-white hover:text-[#7C3AED] transition-colors cursor-pointer w-fit" 
              onClick={() => handleNav("/")}
            >
              DREAM<span className="text-[#7C3AED]">CARS</span>.
            </h1>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm">
              Премиальная студия детейлинга. Создаем безупречный вид вашего автомобиля, который выделяет вас на фоне потока.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-6 lg:col-span-3 flex flex-col gap-6">
            <h3 className="text-white font-medium text-lg">Навигация</h3>
            <nav className="flex flex-col gap-4 items-start">
              {[
                { name: "Услуги", path: "/services" },
                { name: "О нас", path: "/about" },
                { name: "Работы", path: "/portfolio" },
                { name: "Цены", path: "/pricing" },
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNav(link.path)}
                  className="text-left text-white/40 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contacts */}
          <div className="md:col-span-6 lg:col-span-4 flex flex-col gap-6">
            <h3 className="text-white font-medium text-lg">Контакты</h3>
            <div className="flex flex-col gap-4">
              <a href="mailto:hello@dreamcars.studio" className="text-white/40 hover:text-white transition-colors text-sm">
                hello@dreamcars.studio
              </a>
              <a href="tel:+79991234567" className="text-white/40 hover:text-white transition-colors text-sm">
                +7 (999) 123-45-67
              </a>
              <span className="text-white/40 text-sm">
                Москва, Пресненская набережная 12
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/20 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Dream Cars Studio. Все права защищены.
          </p>
          <div className="flex items-center gap-8 text-center justify-center md:justify-end">
            <a href="https://t.me/dreamcars" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#0088CC] transition-colors text-xs font-medium uppercase tracking-wider">
              Telegram
            </a>
            <a href="https://wa.me/79991234567" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#25D366] transition-colors text-xs font-medium uppercase tracking-wider">
              WhatsApp
            </a>
            <a href="https://vk.com/dreamcars" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#0077FF] transition-colors text-xs font-medium uppercase tracking-wider">
              VK
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
