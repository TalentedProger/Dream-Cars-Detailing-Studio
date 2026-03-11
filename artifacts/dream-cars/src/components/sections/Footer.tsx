export function Footer() {
  return (
    <footer className="bg-[#080808] py-12 border-t border-[#1E1E1E]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-shrink-0">
            <h1 className="font-display font-bold text-xl tracking-wider text-white/50 hover:text-white transition-colors cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              DREAM<span className="text-[#7C3AED] ml-1">CARS</span>
            </h1>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6">
            {["Услуги", "О нас", "Работы", "Цены"].map((link) => (
              <a 
                key={link} 
                href={`#${link === 'Услуги' ? 'services' : link === 'О нас' ? 'about' : link === 'Работы' ? 'portfolio' : 'pricing'}`}
                className="text-sm text-white/50 hover:text-[#7C3AED] transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
        
        <div className="mt-8 pt-8 border-t border-[#1E1E1E] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Dream Cars. Все права защищены.
          </p>
          <div className="flex items-center gap-4 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
