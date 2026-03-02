import React, { useEffect } from 'react';
import { 
  Award, 
  Flower2, 
  ArrowRight,
  CheckCircle2,
  Star,
  Sparkles,
  Heart,
  Camera,
  MapPin,
  Layout,
  Box,
  Palette,
  Users,
  Search,
  Truck
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'motion/react';

gsap.registerPlugin(ScrollTrigger);

export const DecoracaoCasamentos = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animations
      gsap.from('.reveal', {
        scrollTrigger: {
          trigger: '.reveal',
          start: 'top 85%',
        },
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
      });

      // Parallax for arches
      gsap.to('.parallax-arch', {
        scrollTrigger: {
          trigger: '.parallax-container',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        },
        y: -50,
        ease: 'none'
      });
    });

    return () => ctx.revert();
  }, []);

  const weddingStyles = [
    { title: 'Ao Ar Livre', img: '/assets/images/projeto-1.jpg' },
    { title: 'Contemporâneo', img: '/assets/images/galeria-2.jpg' },
    { title: 'Clássico', img: '/assets/images/galeria-1.jpg' },
    { title: 'Minimalista', img: '/assets/images/sessao-2.jpg' },
    { title: 'Temático', img: '/assets/images/hero-2.jpg' },
    { title: 'Elopement Wedding', img: '/assets/images/sessao-informacoes.jpg' },
  ];

  return (
    <main className="bg-background overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/images/hero-2.jpg" 
            alt="Decoração de Casamento" 
            className="w-full h-full object-cover opacity-30 grayscale-[0.2]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-secondary uppercase tracking-[0.4em] text-[10px] font-bold mb-8 block"
          >
            Eternizando o seu "Sim"
          </motion.span>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif text-primary leading-[0.9] mb-12 max-w-5xl mx-auto">
            Decoração de <br /> <span className="italic">Casamentos</span>
          </h1>
          <p className="text-warmgray text-lg md:text-xl max-w-2xl mx-auto font-light italic mb-12">
            Celebre o amor com uma cenografia que conta a sua história e transcende todas as expectativas.
          </p>
          <a 
            href="https://wa.me/5551999668012" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-primary text-background px-12 py-5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-secondary transition-all duration-500 shadow-xl group"
          >
            Quero uma decoração exclusiva <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* MANIFESTO SECTION WITH CIRCLES */}
      <section className="py-32 bg-white/50 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative flex justify-center reveal">
            <div className="relative w-full max-w-md aspect-square">
              <img 
                src="/assets/images/galeria-1.jpg" 
                alt="Detalhe" 
                className="w-full h-full object-cover rounded-full shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full overflow-hidden border-8 border-background shadow-xl hidden md:block">
                <img 
                  src="/assets/images/galeria-3.jpg" 
                  alt="Detalhe 2" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
          <div className="reveal">
            <h2 className="text-4xl md:text-6xl font-serif text-primary mb-12 leading-tight">
              Você sonha com um <br /> <span className="italic">casamento épico?</span>
            </h2>
            <div className="space-y-8">
              {[
                "Transcenda as expectativas e deixe seus convidados sem palavras.",
                "Imagine cada olhar de admiração ao adentrarem o espaço decorado.",
                "Adicione um toque de sofisticação, romance e personalidade a cada detalhe."
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-primary/5 text-secondary rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-background transition-all duration-500">
                    <Sparkles size={20} />
                  </div>
                  <p className="text-warmgray text-lg font-light leading-relaxed pt-2">{text}</p>
                </div>
              ))}
            </div>
            <div className="mt-16">
              <a 
                href="https://wa.me/5551999668012" 
                className="text-primary font-bold uppercase tracking-widest text-[10px] flex items-center gap-2 group"
              >
                Preciso de ajuda para decorar meu casamento <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHES SECTION - PERSONALIZAÇÃO & 3D */}
      <section className="py-32 bg-background px-6 md:px-12 parallax-container">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Arch 1 */}
            <div className="reveal">
              <div className="rounded-t-full overflow-hidden aspect-[4/5] mb-12 shadow-2xl relative group">
                <img 
                  src="/assets/images/sessao-2.jpg" 
                  alt="Personalização" 
                  className="w-full h-full object-cover parallax-arch transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-3xl font-serif text-primary mb-6 italic">Personalização do Projeto</h3>
              <p className="text-warmgray text-lg font-light leading-relaxed">
                Na busca pela singularidade do seu casamento, oferecemos um serviço de personalização incomparável. Cada detalhe é adaptado para refletir a individualidade do casal.
              </p>
            </div>
            {/* Arch 2 */}
            <div className="reveal md:mt-32">
              <div className="rounded-t-full overflow-hidden aspect-[4/5] mb-12 shadow-2xl relative group">
                <img 
                  src="/assets/images/sessao-informacoes.jpg" 
                  alt="Projeto 3D" 
                  className="w-full h-full object-cover parallax-arch transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-3xl font-serif text-primary mb-6 italic">Projeto Entregue em 3D</h3>
              <p className="text-warmgray text-lg font-light leading-relaxed">
                Vivencie a emoção de ver seu casamento ganhar vida antes do grande dia. Utilizamos tecnologia avançada para criar representações tridimensionais detalhadas do seu projeto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STEPS GRID - ICONS */}
      <section className="py-32 bg-primary text-background px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 reveal">
            <span className="text-secondary uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">Nossa Metodologia</span>
            <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">Excelência em <br /> <span className="italic">cada etapa</span></h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { icon: <Search />, title: "Análise de Estilo", desc: "Identificamos a essência e o estilo que melhor representa o casal." },
              { icon: <MapPin />, title: "Visita Técnica", desc: "Análise minuciosa do local para otimização de cada espaço." },
              { icon: <Palette />, title: "Paleta de Cores", desc: "Definição harmônica de tons que guiarão toda a cenografia." },
              { icon: <Users />, title: "Floristas Qualificados", desc: "Equipe especializada na execução de arranjos de alta costura." },
              { icon: <Flower2 />, title: "Flores Naturais", desc: "Seleção das melhores espécies para um impacto visual orgânico." },
              { icon: <Layout />, title: "Peças Próprias", desc: "Acervo exclusivo de mobiliário e objetos de decoração premium." }
            ].map((step, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm p-12 rounded-[3rem] border border-white/10 reveal hover:bg-white/10 transition-all duration-500 group">
                <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-background transition-all duration-500">
                  {React.cloneElement(step.icon as React.ReactElement, { size: 28 })}
                </div>
                <h4 className="text-xl font-serif italic mb-4 text-background">{step.title}</h4>
                <p className="text-background/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS SECTION */}
      <section className="py-24 bg-white px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal flex justify-center">
              <div className="relative bg-primary p-12 rounded-[3rem] text-center max-w-sm shadow-2xl">
                <img 
                  src="/assets/images/awards-2023.png" 
                  alt="Casamentos Awards 2023" 
                  className="w-48 mx-auto mb-8 invert"
                  referrerPolicy="no-referrer"
                />
                <h3 className="text-secondary text-2xl font-serif italic mb-2">Ganhamos o Prêmio!</h3>
                <p className="text-background/60 text-xs uppercase tracking-widest">Casamentos.com.br</p>
              </div>
            </div>
            <div className="reveal space-y-8">
              <div className="flex items-center gap-6 p-8 bg-background rounded-3xl border border-secondary/10">
                <div className="w-12 h-12 bg-primary text-background rounded-full flex items-center justify-center shrink-0">
                  <Star size={24} fill="currentColor" />
                </div>
                <div>
                  <p className="text-primary font-bold text-sm uppercase tracking-tight">Pontuação máxima no Google</p>
                  <p className="text-warmgray text-xs mt-1">Excelência comprovada por nossos clientes.</p>
                </div>
              </div>
              <div className="flex items-center gap-6 p-8 bg-background rounded-3xl border border-secondary/10">
                <div className="w-12 h-12 bg-primary text-background rounded-full flex items-center justify-center shrink-0">
                  <Heart size={24} fill="currentColor" />
                </div>
                <div>
                  <p className="text-primary font-bold text-sm uppercase tracking-tight">Pontuação máxima no Casamentos.com.br</p>
                  <p className="text-warmgray text-xs mt-1">A empresa de decoração mais amada do RS.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT CARLA SECTION */}
      <section className="py-32 bg-[#F9F8F6] px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="reveal order-2 lg:order-1">
              <span className="text-secondary uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">A Mente Criativa</span>
              <h2 className="text-4xl md:text-6xl font-serif text-primary mb-8 leading-tight">Carla Mattos</h2>
              <div className="space-y-6 text-warmgray text-lg font-light leading-relaxed">
                <p>
                  Olá, sou Carla Mattos, decoradora e especialista em eventos ao ar livre. Com 37 anos, casada e mãe de dois filhos, minha jornada começou em 2012 como florista, impulsionada pela paixão de infância por flores.
                </p>
                <p>
                  Em 2014, fundei a Casa Conceitto Eventos, especializada em decoração e ornamentação de festas. Ao longo dos anos, aprimorei minha expertise com cursos em design floral, projetos e cenografia.
                </p>
                <p>
                  Hoje, além de decoradora, sou estudante de arquitetura, proporcionando uma abordagem única e enriquecedora aos projetos. Estou aqui para compartilhar minha paixão e conhecimento, transformando seus eventos em momentos verdadeiramente inesquecíveis.
                </p>
              </div>
            </div>
            <div className="reveal order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <img 
                  src="/assets/images/carla-mattos.jpg" 
                  alt="Carla Mattos" 
                  className="rounded-[4rem] shadow-2xl w-full max-w-md aspect-[3/4] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-8 rounded-[2rem] hidden md:block">
                  <p className="font-serif italic text-xl">"Paixão por flores"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STYLES GRID */}
      <section className="py-32 bg-background px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 reveal">
            <span className="text-secondary uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">Inspiração</span>
            <h2 className="text-5xl md:text-7xl font-serif text-primary">Estilos de Decoração</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {weddingStyles.map((style, i) => (
              <div key={i} className="relative rounded-[3rem] overflow-hidden aspect-[4/5] reveal group shadow-xl">
                <img 
                  src={style.img} 
                  alt={style.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex flex-col justify-end p-12">
                  <h3 className="text-3xl font-serif italic text-background">{style.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-48 bg-[#F5F2ED] px-6 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto reveal">
          <Heart size={48} className="text-secondary/30 mx-auto mb-12" />
          <h2 className="text-6xl md:text-8xl font-serif text-primary mb-12 leading-tight">
            Vamos criar algo <br /> <span className="italic">inesquecível?</span>
          </h2>
          <p className="text-warmgray text-xl font-light italic mb-16 max-w-2xl mx-auto">
            Cada detalhe é planejado com precisão e paixão para que sua celebração seja visualmente deslumbrante.
          </p>
          <a 
            href="https://wa.me/5551999668012" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-primary text-background px-16 py-6 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-secondary transition-all duration-500 shadow-2xl"
          >
            Receber Orçamento Personalizado
          </a>
        </div>
      </section>
    </main>
  );
};
