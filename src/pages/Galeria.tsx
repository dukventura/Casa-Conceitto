import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

gsap.registerPlugin(ScrollTrigger);

// ARRAY ESTÁTICO: Coloque aqui o nome exato das imagens que você subiu no GitHub!
const galeriaImagens = [
  { id: 1, url: '/assets/images/galeria/galeria-1.jpg' },
  { id: 2, url: '/assets/images/galeria/galeria-2.jpg' },
  { id: 3, url: '/assets/images/galeria/galeria-3.jpg' },
  { id: 4, url: '/assets/images/galeria/galeria-4.jpg' },
  { id: 5, url: '/assets/images/galeria/galeria-5.jpg' },
  { id: 6, url: '/assets/images/galeria/galeria-6.jpg' }
];

export const Galeria = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.galeria-intro > *', {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });
    });
    return () => ctx.revert();
  }, []);

  // SEO Tag Generator
  const getSEOTags = (index: number) => {
    const variations = [
      'Decoração de Casamento Casa Conceitto',
      'Evento de Luxo em Porto Alegre',
      'Design Floral Exclusivo Casa Conceitto',
      'Casamento Sofisticado no Rio Grande do Sul',
      'Cenografia de Eventos Premium',
      'Arranjos Florais de Luxo Porto Alegre',
      'Decoração Personalizada para Casamentos',
      'Ambientes Exclusivos Casa Conceitto'
    ];
    return variations[index % variations.length];
  };

  return (
    <main className="pt-32 pb-24 bg-background min-h-screen">
      {/* INTRO SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16 galeria-intro">
        <span className="text-secondary uppercase tracking-[0.3em] text-[10px] font-bold mb-6 block">Portfólio de Casamentos</span>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-8xl lg:text-9xl text-primary font-serif leading-[0.9] mb-8">
              Nossa Arte em <span className="italic">Eventos</span> <br />
              <span className="italic">Inesquecíveis</span>
            </h1>
            <p className="text-warmgray text-lg md:text-xl font-light italic max-w-2xl">
              Uma curadoria exclusiva dos nossos projetos mais marcantes, focada na essência de cada casal.
            </p>
          </div>
          
          <div className="bg-[#F0EEEA] p-6 rounded-3xl border border-secondary/10 flex items-center gap-4 min-w-[260px]">
            <div className="w-12 h-12 bg-primary text-background rounded-full flex items-center justify-center shrink-0">
              <Award size={24} />
            </div>
            <div>
              <p className="text-primary font-bold text-sm uppercase leading-tight tracking-tight">
                #1 no Rio <br /> Grande do Sul
              </p>
              <p className="text-warmgray text-[9px] uppercase tracking-widest mt-1 opacity-70">
                Melhor avaliada desde 2023
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode='popLayout'>
            {galeriaImagens.map((image, idx) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative group cursor-pointer overflow-hidden rounded-3xl break-inside-avoid shadow-sm hover:shadow-xl transition-all duration-500"
                onClick={() => setSelectedImage(image.url)}
              >
                <img 
                  src={image.url} 
                  alt={getSEOTags(idx)} 
                  title={getSEOTags(idx)}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://picsum.photos/seed/gallery-${idx}/800/1000`; // Imagem de fallback se der erro
                  }}
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <p className="text-secondary text-[10px] font-bold uppercase tracking-widest mb-2">Casa Conceitto</p>
                  <h3 className="text-background text-xl font-serif italic">{getSEOTags(idx)}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-primary/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-background hover:text-secondary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Visualização ampliada" 
                className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              />
              <div className="mt-8 text-center">
                <p className="text-secondary text-xs font-bold uppercase tracking-[0.3em] mb-2">Casa Conceitto Eventos</p>
                <h2 className="text-background text-2xl md:text-3xl font-serif italic">Eternizando Momentos</h2>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};
