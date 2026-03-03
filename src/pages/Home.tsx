import React, { useEffect } from 'react';
import { 
  ChevronRight, 
  Award, 
  Flower2, 
  Users, 
  CheckCircle2,
  ArrowRight,
  ClipboardList,
  Layout,
  Clock,
  Calendar,
  CreditCard,
  Info,
  Truck,
  Star,
  ExternalLink
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Entrance
      gsap.from('.hero-content > *', {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power4.out',
      });

      // Scroll Reveal
      const sections = document.querySelectorAll('.reveal');
      sections.forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          y: 40,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        });
      });

      // Staggered lists
      const lists = document.querySelectorAll('.stagger-list');
      lists.forEach((list) => {
        gsap.from(list.querySelectorAll('li'), {
          scrollTrigger: {
            trigger: list,
            start: 'top 80%',
          },
          x: -20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/casa%20conceitto%20decoracao%20de%20casamentos%20hero.jpeg" 
            alt="Mesa Posta Casa Conceitto" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/80"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl hero-content">
          <h1 className="text-6xl md:text-9xl text-background font-serif leading-tight mb-8 drop-shadow-sm">
            Casa <span className="italic">Conceitto</span>
          </h1>
          <p className="text-background/90 text-lg md:text-2xl max-w-3xl mx-auto mb-12 font-light leading-relaxed italic">
            "Transformando o dia do SIM no momento mais lindo e especial da sua vida."
          </p>
          <a 
            href="https://wa.me/5551999668012?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento%20personalizado." 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-botanic text-white px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-secondary hover:text-primary transition-all duration-500 shadow-2xl"
          >
            Solicitar Orçamento Personalizado
          </a>
        </div>
      </section>

      {/* SOBRE NÓS */}
      <section id="sobre" className="py-24 bg-background px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <span className="text-secondary uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Nossa História</span>
            <h2 className="text-4xl md:text-6xl mb-8">Sobre nós</h2>
            <div className="space-y-6 text-warmgray text-lg font-light leading-relaxed">
              <p>
                A Casa Conceitto Eventos surgiu com o propósito de realizar eventos únicos e personalizados. Priorizamos ouvir atentamente os noivos, criando uma decoração exclusiva que faz toda a diferença para eternizar o grande dia.
              </p>
              <p>
                Com mais de 13 anos de experiência, amor e dedicação, seguimos um caminho de sucesso construído a partir de sonhos realizados. Como resultado, colhemos muitos frutos, refletidos nos prêmios recebidos por meio das avaliações de nossos clientes.
              </p>
              <div className="pt-6 flex flex-wrap gap-4">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-secondary/10 flex items-center gap-4">
                  <Award className="text-secondary" size={32} />
                  <div>
                    <p className="text-primary font-bold text-sm uppercase tracking-wider">#1 no Rio Grande do Sul</p>
                    <p className="text-warmgray text-xs">Melhor avaliada no Casamentos.com.br desde 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative reveal">
            <img 
              src="/assets/images/carla-mattos.jpg" 
              alt="Carla Mattos - Casa Conceitto" 
              className="rounded-[3rem] shadow-2xl w-full h-[600px] object-cover object-top"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-background p-8 rounded-[2rem] hidden md:block max-w-xs">
              <p className="font-serif italic text-lg">"Casa Conceitto"</p>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE BREAK SECTION */}
      <section className="h-[60vh] relative overflow-hidden reveal">
        <img 
          src="/assets/images/sessao-2.jpeg" 
          alt="Decoração de Casamento Imersiva" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/10"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="glass p-8 md:p-12 rounded-[3rem] text-center max-w-2xl mx-4">
            <h3 className="text-2xl md:text-4xl text-primary mb-4 italic">"A beleza está nos detalhes que contam a sua história."</h3>
          </div>
        </div>
      </section>

      {/* SERVIÇOS INCLUSOS */}
      <section id="servicos" className="py-24 bg-primary text-background px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
            <div className="max-w-2xl">
              <span className="text-secondary uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Excelência em cada detalhe</span>
              <h2 className="text-4xl md:text-6xl text-background mb-4">Serviços inclusos</h2>
              <p className="text-background/60 italic">Tudo o que você precisa para um projeto de decoração impecável.</p>
            </div>
            <Flower2 size={60} className="text-secondary/30 mt-8 md:mt-0" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-list">
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm tracking-wide"><CheckCircle2 size={18} className="text-secondary" /> Reunião de alinhamento de conceito</li>
              <li className="flex items-center gap-3 text-sm tracking-wide"><CheckCircle2 size={18} className="text-secondary" /> Definição da paleta de cores e materiais</li>
              <li className="flex items-center gap-3 text-sm tracking-wide"><CheckCircle2 size={18} className="text-secondary" /> Visita técnica ao local do evento</li>
              <li className="flex items-center gap-3 text-sm tracking-wide"><CheckCircle2 size={18} className="text-secondary" /> Seleção do mobiliário e tecidos</li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm tracking-wide"><CheckCircle2 size={18} className="text-secondary" /> Desenvolvimento do projeto em 2D</li>
              <li className="flex items-center gap-3 text-sm tracking-wide"><CheckCircle2 size={18} className="text-secondary" /> Elaboração e montagem do layout em 2D</li>
              <li className="flex items-center gap-3 text-sm tracking-wide"><CheckCircle2 size={18} className="text-secondary" /> Curadoria e escolha das flores</li>
              <li className="flex items-center gap-3 text-sm tracking-wide"><CheckCircle2 size={18} className="text-secondary" /> Execução da montagem no local</li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm tracking-wide"><CheckCircle2 size={18} className="text-secondary" /> Equipe de profissionais para desmontagem</li>
              <li className="flex items-center gap-3 text-sm tracking-wide"><CheckCircle2 size={18} className="text-secondary" /> Floristas qualificados para execução</li>
              <li className="flex items-center gap-3 text-sm tracking-wide"><CheckCircle2 size={18} className="text-secondary" /> Memorial descritivo completo</li>
              <li className="flex items-center gap-3 text-sm tracking-wide"><CheckCircle2 size={18} className="text-secondary" /> Planejamento detalhado da mão de obra</li>
            </ul>
          </div>
        </div>
      </section>

      {/* COMO TRABALHAMOS */}
      <section id="como-trabalhamos" className="py-24 bg-background px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 reveal">
            <span className="text-secondary uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Nossa Metodologia</span>
            <h2 className="text-4xl md:text-6xl mb-4">Como trabalhamos</h2>
            <p className="text-warmgray italic">Do primeiro contato à realização do seu sonho.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 reveal">
            {[
              { icon: <ClipboardList />, title: "Orçamento", desc: "Envio do orçamento padrão ajustável às suas expectativas." },
              { icon: <Users />, title: "Reunião", desc: "Alinhamento de ideias, referências e desejos (online ou presencial)." },
              { icon: <CheckCircle2 />, title: "Contrato", desc: "Fechamento mediante pagamento da entrada." },
              { icon: <Layout />, title: "Projeto", desc: "Início do desenvolvimento com visita técnica ao local." },
              { icon: <Flower2 />, title: "Layout", desc: "Criação de moodboard com cores, flores e mobiliário." }
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] border border-secondary/10 flex flex-col items-center text-center hover:shadow-xl transition-all duration-500 group">
                <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-background transition-colors duration-500">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 uppercase tracking-widest text-primary">{step.title}</h3>
                <p className="text-xs text-warmgray leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DO PROJETO À REALIDADE */}
      <section className="py-24 bg-primary text-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 reveal">
            <h2 className="text-4xl md:text-6xl mb-8">Do projeto à realidade</h2>
            <div className="space-y-6 text-background/80 text-lg font-light leading-relaxed">
              <p>
                Após a reunião e o envio do vídeo explicativo, aguardamos a confirmação do cliente. Com a aprovação do orçamento, damos início a todo o processo de criação e execução do projeto.
              </p>
              <p>
                Nesta etapa, desenvolvemos o projeto completo, incluindo memorial descritivo com tudo o que será utilizado na decoração, além do planejamento detalhado da montagem e de toda a mão de obra necessária.
              </p>
              <p className="italic text-secondary">
                Cada detalhe é pensado com cuidado para que o projeto apresentado se torne exatamente a realidade vivida no seu grande dia.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 reveal">
            <img src="/assets/images/projeto-1.jpeg" alt="Projeto 1" className="rounded-3xl h-64 w-full object-cover" referrerPolicy="no-referrer" />
            <img src="/assets/images/projeto-2.jpg" alt="Projeto 2" className="rounded-3xl h-64 w-full object-cover mt-8" referrerPolicy="no-referrer" />
            <img src="/assets/images/projeto-3.jpg" alt="Projeto 3" className="rounded-3xl h-64 w-full object-cover -mt-8" referrerPolicy="no-referrer" />
            <img src="/assets/images/projeto-4.jpg" alt="Projeto 4" className="rounded-3xl h-64 w-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      {/* NOSSO COMPROMISSO */}
      <section className="py-24 bg-secondary/10 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto reveal">
          <span className="text-secondary uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Nosso Compromisso</span>
          <h2 className="text-4xl md:text-6xl mb-8">Cuidamos da sua decoração com amor, atenção e responsabilidade</h2>
          <p className="text-warmgray text-xl font-light italic leading-relaxed">
            Respeitando sua essência e transformando seu evento em um momento inesquecível.
          </p>
        </div>
      </section>

      {/* INFORMAÇÕES IMPORTANTES */}
      <section id="informacoes" className="py-24 bg-background px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <h2 className="text-4xl md:text-5xl mb-8">Informações importantes</h2>
              <div className="space-y-4">
                {[
                  { icon: <Clock size={18} />, text: "Orçamento válido por até 10 dias após o envio" },
                  { icon: <Calendar size={18} />, text: "Não trabalhamos com pré-reserva de datas" },
                  { icon: <CheckCircle2 size={18} />, text: "A data é confirmada somente após pagamento da entrada" },
                  { icon: <CreditCard size={18} />, text: "Entrada mínima de 30%" },
                  { icon: <Info size={18} />, text: "Saldo restante (70%) até 10 dias antes do evento" },
                  { icon: <Truck size={18} />, text: "Pagamento via Pix ou Cartão de Crédito (com juros)" },
                  { icon: <Star size={18} />, text: "Condições especiais para pagamento à vista" }
                ].map((info, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-background rounded-2xl border border-secondary/5">
                    <div className="text-secondary">{info.icon}</div>
                    <p className="text-sm text-warmgray font-medium">{info.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal">
              <img 
                src="/assets/images/sessao-informacoes.jpg" 
                alt="Planejamento" 
                className="rounded-[3rem] shadow-xl w-full h-[400px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA PREVIEW */}
      <section id="galeria" className="py-24 bg-background px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <span className="text-secondary uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Portfólio</span>
            <h2 className="text-4xl md:text-6xl mb-4">Nossa Galeria</h2>
            <p className="text-warmgray italic">Momentos inesquecíveis transformados em arte.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal">
            <div className="h-80 bg-secondary/10 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500">
              <img src="/assets/images/galeria-1.jpg" alt="Galeria 1" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            <div className="h-80 bg-secondary/10 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500">
              <img src="/assets/images/galeria-2.jpg" alt="Galeria 2" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            <div className="h-80 bg-secondary/10 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500">
              <img src="/assets/images/galeria-3.jpg" alt="Galeria 3" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
          </div>
          
          <div className="text-center mt-12 reveal">
            <Link 
              to="/galeria" 
              className="inline-flex items-center gap-3 border border-secondary text-secondary px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-secondary hover:text-white transition-all duration-500"
            >
              Ver Galeria Completa <ExternalLink size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="py-24 bg-primary text-background px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <span className="text-secondary uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Prova Social</span>
            <h2 className="text-4xl md:text-6xl text-background mb-4">O que dizem nossos clientes</h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex text-secondary">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <span className="text-background font-bold text-sm">4.9/5 no Casamentos.com.br</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              "/assets/images/depoimento-1.png",
              "/assets/images/depoimento-2.png",
              "/assets/images/depoimento-3.png"
            ].map((imgUrl, idx) => (
              <div key={idx} className="reveal">
                <img 
                  src={imgUrl} 
                  alt={`Depoimento ${idx + 1}`} 
                  className="w-full h-auto rounded-3xl shadow-lg hover:scale-[1.02] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>

          <div className="text-center reveal">
            <a 
              href="https://www.casamentos.com.br/decoracao-casamento/casa-conceito-eventos--e179131/opinioes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-secondary hover:text-background transition-colors font-bold uppercase tracking-widest text-xs"
            >
              Ver todas as avaliações <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-6 text-center reveal">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl mb-8">Vamos eternizar o seu grande dia?</h2>
          <a 
            href="https://wa.me/5551999668012?text=Olá!%20Gostaria%20de%20falar%20com%20a%20Casa%20Conceitto%20sobre%20meu%20evento.&utm_source=site&utm_medium=cta_final&utm_campaign=contato" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-background px-12 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-botanic transition-all duration-500 shadow-2xl"
          >
            Falar com a Casa Conceitto <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
};
