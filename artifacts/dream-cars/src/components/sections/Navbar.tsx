import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Услуги", href: "#services" },
    { name: "О нас", href: "#about" },
    { name: "Работы", href: "#portfolio" },
    { name: "Цены", href: "#pricing" },
    { name: "Контакты", href: "#contact" },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-4 glass-panel shadow-2xl shadow-black/50" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <h1 className="font-display font-bold text-2xl md:text-3xl tracking-wider text-white">
              DREAM<span className="text-primary ml-1">CARS</span>
            </h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-medium text-white/80 hover:text-white hover:text-glow transition-all duration-300"
              >
                {link.name}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <a href="https://t.me/dreamcars" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#0088CC] transition-colors" aria-label="Telegram">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.19-.08-.05-.19-.02-.27 0-.12.03-1.99 1.25-5.61 3.67-.53.36-1.01.54-1.44.53-.48-.01-1.42-.27-2.11-.5-.83-.27-1.49-.42-1.43-.89.03-.23.36-.47 1-.72 3.92-1.7 6.53-2.82 7.82-3.36 3.73-1.56 4.5-1.83 5.01-1.84.11 0 .36.03.49.15.11.1.15.24.16.37-.02.04-.02.11-.03.19z" />
                </svg>
              </a>
              <a href="https://wa.me/79991234567" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#25D366] transition-colors" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
              <a href="https://vk.com/dreamcars" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#0077FF] transition-colors" aria-label="VK">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.91 16.516c-.035.154-.112.296-.22.417a2.27 2.27 0 0 1-.365.31c-.347.26-.745.452-1.168.56-.475.122-1.042.148-1.603.13-1.73-.058-3.418-.685-4.832-1.803-1.632-1.29-2.91-3.045-3.69-5.07-.373-.966-.612-1.99-.714-3.044-.047-.487-.042-.98.016-1.464.03-.25.07-.497.126-.742.062-.264.156-.514.28-.745.18-.337.45-.615.786-.81a2.128 2.128 0 0 1 .525-.213c.2-.053.41-.068.614-.044.385.044.75.19 1.066.425.228.17.427.378.586.615l1.644 2.454c.264.394.464.823.593 1.272.068.238.106.485.112.735a2.05 2.05 0 0 1-.168.86 2.032 2.032 0 0 1-.415.65c-.172.193-.362.37-.565.534-.143.115-.297.218-.456.308.15.297.32.585.508.86.353.518.76 1.002 1.213 1.442.454.44.95.835 1.48 1.173.342.218.702.41 1.077.575.29-.317.595-.62.913-.913.313-.288.648-.553 1.004-.792.213-.142.443-.257.685-.34a2.068 2.068 0 0 1 .84-.075c.294.03.58.12.842.264l2.84 1.572c.42.232.795.532 1.112.888.22.247.397.528.524.832.062.152.11.312.14.475Z" />
                </svg>
              </a>
            </div>
            <Button variant="glow" onClick={() => scrollTo("#contact")}>
              Записаться
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 top-[72px] bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center pt-20 px-6"
          >
            <div className="flex flex-col space-y-8 text-center w-full">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => scrollTo(link.href)}
                  className="text-2xl font-display font-medium text-white"
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-8 w-full flex flex-col items-center gap-6"
              >
                <div className="flex justify-center gap-6 mb-4">
                  <a href="https://t.me/dreamcars" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#0088CC] transition-colors" aria-label="Telegram">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.19-.08-.05-.19-.02-.27 0-.12.03-1.99 1.25-5.61 3.67-.53.36-1.01.54-1.44.53-.48-.01-1.42-.27-2.11-.5-.83-.27-1.49-.42-1.43-.89.03-.23.36-.47 1-.72 3.92-1.7 6.53-2.82 7.82-3.36 3.73-1.56 4.5-1.83 5.01-1.84.11 0 .36.03.49.15.11.1.15.24.16.37-.02.04-.02.11-.03.19z" />
                    </svg>
                  </a>
                  <a href="https://wa.me/79991234567" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#25D366] transition-colors" aria-label="WhatsApp">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </a>
                  <a href="https://vk.com/dreamcars" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#0077FF] transition-colors" aria-label="VK">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.91 16.516c-.035.154-.112.296-.22.417a2.27 2.27 0 0 1-.365.31c-.347.26-.745.452-1.168.56-.475.122-1.042.148-1.603.13-1.73-.058-3.418-.685-4.832-1.803-1.632-1.29-2.91-3.045-3.69-5.07-.373-.966-.612-1.99-.714-3.044-.047-.487-.042-.98.016-1.464.03-.25.07-.497.126-.742.062-.264.156-.514.28-.745.18-.337.45-.615.786-.81a2.128 2.128 0 0 1 .525-.213c.2-.053.41-.068.614-.044.385.044.75.19 1.066.425.228.17.427.378.586.615l1.644 2.454c.264.394.464.823.593 1.272.068.238.106.485.112.735a2.05 2.05 0 0 1-.168.86 2.032 2.032 0 0 1-.415.65c-.172.193-.362.37-.565.534-.143.115-.297.218-.456.308.15.297.32.585.508.86.353.518.76 1.002 1.213 1.442.454.44.95.835 1.48 1.173.342.218.702.41 1.077.575.29-.317.595-.62.913-.913.313-.288.648-.553 1.004-.792.213-.142.443-.257.685-.34a2.068 2.068 0 0 1 .84-.075c.294.03.58.12.842.264l2.84 1.572c.42.232.795.532 1.112.888.22.247.397.528.524.832.062.152.11.312.14.475Z" />
                    </svg>
                  </a>
                </div>
                <Button variant="glow" size="lg" className="w-full max-w-sm" onClick={() => scrollTo("#contact")}>
                  Записаться
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
