import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efeito para adicionar fundo escuro ao rolar a página
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#about' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-out px-4 md:px-6 py-4 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        
        <div className={`w-full flex items-center justify-between rounded-full px-6 py-3 border transition-all duration-500 ${
          isScrolled 
            ? 'bg-slate-950/80 border-cyan-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(34,211,238,0.15)]' 
            : 'bg-slate-900/40 border-white/10 backdrop-blur-sm'
        }`}>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium tracking-wide relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-5 py-2 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 shadow-[0_0_10px_rgba(34,211,238,0.2)] hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] font-semibold tracking-wide"
            >
              Let's Talk
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-cyan-400 focus:outline-none transition-colors p-2"
            aria-label="Abrir Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Overlay para Mobile */}
      <div
        className={`fixed inset-0 bg-slate-950/95 backdrop-blur-2xl z-[100] flex flex-col items-center justify-center pointer-events-auto transition-all duration-500 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 text-gray-400 hover:text-cyan-400 p-2"
          aria-label="Fechar Menu"
        >
          <X size={32} />
        </button>

        <nav className="flex flex-col items-center space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl text-gray-300 hover:text-cyan-400 font-medium tracking-widest uppercase transition-colors"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-8 px-8 py-3 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all shadow-[0_0_15px_rgba(34,211,238,0.2)] font-semibold tracking-widest uppercase"
          >
            Let's Talk
          </a>
        </nav>
      </div>
    </header>
  );
};
