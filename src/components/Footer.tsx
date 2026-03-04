import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary text-background py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          {/* Address */}
          <div className="reveal">
            <img
              src="/assets/logo.webp"
              alt="Casa Conceitto Logo"
              className="h-16 w-auto object-contain mb-8 brightness-0 invert"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://picsum.photos/seed/casa-conceitto-logo/200/100?text=Logo";
              }}
              referrerPolicy="no-referrer"
            />
            <h4 className="font-serif text-2xl mb-6 italic">Localização</h4>
            <p className="text-sm font-light leading-relaxed opacity-80 max-w-xs">
              R. Dr. Florêncio Ygartua, 60<br />
              Moinhos de Vento, Porto Alegre - RS.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center reveal">
            <h4 className="font-serif text-2xl mb-6 italic">Navegação</h4>
            <ul className="space-y-4 text-center">
              <li><a href="/" onClick={(e) => {e.preventDefault(); window.location.href = '/'}} className="text-sm font-light hover:text-secondary transition-colors uppercase tracking-widest text-[10px]">Home</a></li>
              <li><a href="/decoracao-casamentos" onClick={(e) => {e.preventDefault(); window.location.href = '/decoracao-casamentos'}} className="text-sm font-light hover:text-secondary transition-colors uppercase tracking-widest text-[10px]">Decoração</a></li>
              <li><a href="/galeria" onClick={(e) => {e.preventDefault(); window.location.href = '/galeria'}} className="text-sm font-light hover:text-secondary transition-colors uppercase tracking-widest text-[10px]">Galeria</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-end reveal">
            <h4 className="font-serif text-2xl mb-6 italic">Conecte-se</h4>
            <div className="flex space-x-8">
              <a href="https://www.facebook.com/casaconceitoeventos" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-all duration-300 hover:-translate-y-1">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/casaconceittoeventos/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-all duration-300 hover:-translate-y-1">
                <Instagram size={24} />
              </a>
              <a href="https://www.youtube.com/channel/UCGOiNdJstsms27ZiVwCYvWA" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-all duration-300 hover:-translate-y-1">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Awards Row */}
        <div className="flex flex-wrap justify-center gap-4 mb-20 reveal border-y border-background/5 py-12">
          {[2023, 2024, 2025, 2026].map(year => (
            <div key={year} className="border border-background/20 p-4 rounded-2xl text-center min-w-[120px] hover:border-secondary transition-all duration-500 hover:bg-white/5">
              <p className="text-[8px] uppercase tracking-[0.3em] opacity-40 mb-2">Casamentos Awards</p>
              <p className="text-lg font-bold tracking-widest">{year}</p>
            </div>
          ))}
        </div>

        <div className="pt-10 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] opacity-60">
          <p>© 2026 Casa Conceitto Eventos</p>
          <p>
            Desenvolvido por <a href="https://venturahub.digital" target="_blank" rel="follow" className="hover:text-secondary transition-colors underline underline-offset-4">Ventura Hub</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
