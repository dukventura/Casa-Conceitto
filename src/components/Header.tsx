import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: isHome ? '#' : '/' },
    { name: 'Decoração', href: '/decoracao-casamentos' },
    { name: 'Galeria', href: '/galeria' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled || !isHome ? 'bg-background shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="h-16 w-auto flex items-center">
            <img 
              src="/assets/images/logo.webp" 
              alt="Casa Conceitto Logo" 
              className="h-full w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </Link>
        </div>
        
        {/* Desktop Menu - Hidden to match screenshot */}
        {/* <nav className={`hidden lg:flex items-center space-x-10 text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors duration-500 ${isScrolled || !isHome ? 'text-primary' : 'text-background'}`}>
          {navLinks.map((link) => (
            link.href.startsWith('#') ? (
              <a key={link.name} href={link.href} className="hover:text-secondary transition-colors">{link.name}</a>
            ) : (
              <Link key={link.name} to={link.href} className="hover:text-secondary transition-colors">{link.name}</Link>
            )
          ))}
        </nav> */}

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a 
            href="https://wa.me/5551999668012?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento%20personalizado." 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 shadow-lg bg-[#2A2621] text-white hover:bg-secondary"
          >
            Solicitar Orçamento
          </a>
          <button 
            className={`transition-colors duration-500 ${isScrolled || !isHome ? 'text-primary' : 'text-background'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-background border-t border-secondary/10 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-[400px] py-8' : 'max-h-0'}`}>
        <nav className="flex flex-col items-center space-y-6 text-[10px] font-semibold text-primary uppercase tracking-[0.2em]">
          {navLinks.map((link) => (
            link.href.startsWith('#') ? (
              <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-secondary transition-colors">{link.name}</a>
            ) : (
              <Link key={link.name} to={link.href} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-secondary transition-colors">{link.name}</Link>
            )
          ))}
          <a 
            href="https://wa.me/5551999668012?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento%20personalizado." 
            className="sm:hidden text-secondary font-bold"
          >
            Solicitar Orçamento
          </a>
        </nav>
      </div>
    </header>
  );
};
