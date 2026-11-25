import { pageHead } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, HeartHandshake, Lightbulb, Users, Palette, Brain, HandHeart, ChevronDown, Star, ChevronLeft, ChevronRight, Target, Eye, Quote, UserRound, Sparkles, GraduationCap, Building2, CircleHelp, Instagram, Facebook } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => {
    const head = pageHead("/", {
      title: "Instituto Educacional G.I. | Educação Infantil e Anos Iniciais",
      description: "Conheça o Instituto Educacional G.I. Uma escola comprometida com o acolhimento, a aprendizagem e o desenvolvimento integral dos estudantes.",
      keywords: "Instituto Educacional G.I., Educação Infantil, Anos Iniciais, escola, educação de qualidade, matrículas escolares",
    });
    return {
      ...head,
      links: [
        ...head.links,
        { rel: "preload", as: "image", href: "/imagens/Fachada%20Escolar%20Azul%20e%20Amarela.webp", media: "(min-width: 768px)", fetchPriority: "high" },
        { rel: "preload", as: "image", href: "/imagens/Fachada%20Escolar%20Azul%20e%20Amarela%20-%20mobile.webp", media: "(max-width: 767px)", fetchPriority: "high" },
      ],
    };
  },
  component: Index,
});

const destaques = [
  { icon: HeartHandshake, title: "Acolhimento e respeito", text: "Um ambiente que valoriza cada estudante em sua individualidade." },
  { icon: BookOpen, title: "Aprendizagem significativa", text: "Experiências que despertam a curiosidade e constroem conhecimento." },
  { icon: Users, title: "Parceria com as famílias", text: "Diálogo e colaboração na trajetória de desenvolvimento dos alunos." },
  { icon: Lightbulb, title: "Desenvolvimento integral", text: "Conhecimentos, habilidades, criatividade e formação humana." },
];
const vivencias = [
  { title: "Projetos pedagógicos", text: "Investigações, descobertas e atividades que aproximam o conhecimento da vida.", image: "/imagens/Setembro Amarelo_ Todos Pela Vida.webp", images: ["/imagens/Setembro Amarelo_ Todos Pela Vida.webp", "/imagens/Crianças na Canoa dos Povos Indígenas.webp", "/imagens/projeto-foto-1.webp", "/imagens/Jovens Apresentam Mostra Cultural.webp", "/imagens/Menina sorridente com carro rosa na escola.webp", "/imagens/Meninas na Feira de Sanduíches Escolares.webp"] },
  { title: "Arte e cultura", text: "Experiências que valorizam a expressão, a imaginação e a criatividade.", image: "/imagens/Atividade Escolar com Arte em Família.webp", images: ["/imagens/Atividade Escolar com Arte em Família.webp", "/imagens/Estudantes diante da exposição artística escolar.webp", "/imagens/Menina com máscara de fantasia colorida.webp", "/imagens/projeto-arte-3.webp", "/imagens/Pintura com balão azul.webp", "/imagens/Seminário de Saberes Indígenas e Mel.webp", "/imagens/Dança Caipira no Ginásio Escolar.webp"] },
  { title: "Convivência e cidadania", text: "Momentos coletivos que fortalecem vínculos, respeito e cooperação.", image: "/imagens/Atividade em grupo na sala de aula.webp", images: ["/imagens/Atividade em grupo na sala de aula.webp", "/imagens/Fila de Alunos no Ginásio Escolar.webp", "/imagens/Roda de atividades e criatividade.webp", "/imagens/Aula Infantil com Mesa Amarela e Aprendizado.webp", "/imagens/Crianças em Fantasias diante da Bandeira Brasileira.webp"] },
  { title: "Leitura e imaginação", text: "Histórias que despertam a curiosidade e ampliam o repertório das crianças.", image: "/imagens/Leitura em roda na sala de aula.webp", images: ["/imagens/Leitura em roda na sala de aula.webp", "/imagens/projeto-leitura-02.webp", "/imagens/projeto leitura-01.webp", "/imagens/Criança em fantasia branca na escolinha.webp"] },
  { title: "Descobertas e experiências", text: "Explorar, experimentar e aprender com o mundo ao redor.", image: "/imagens/IMG_3501.webp", images: ["/imagens/IMG_3501.webp", "/imagens/projeto-descorbertas-01.webp", "/imagens/projeto-descorbetas-02 (1).webp", "/imagens/projeto-descorbetas-03.webp"] },
  { title: "Criatividade em ação", text: "Atividades que valorizam a expressão, a imaginação e novas ideias.", image: "/imagens/Estudante Apresenta Terrário Escolar.webp", images: ["/imagens/Estudante Apresenta Terrário Escolar.webp", "/imagens/Duas Alunas com Projetos Escolares.webp", "/imagens/projeto-criatividade-01 (1).webp", "/imagens/Emoções e Sentimentos na Escola (1).webp", "/imagens/Dia da Meia Maluca Colorido (1).webp", "/imagens/Apresentação Escolar de Impactos Ambientais (1).webp"] },
  { title: "Esporte e Lazer", text: "Movimento, brincadeiras e atividades que estimulam a saúde, a integração e o espírito de equipe.", image: "/imagens/Momento de vôlei no ginásio.webp", images: ["/imagens/Momento de vôlei no ginásio.webp", "/imagens/Alegria no escorregador vermelho.webp", "/imagens/Meninas Sorridentes no Playground Escolar.webp", "/imagens/Menino sorridente no brinquedo azul.webp", "/imagens/Três Meninos Sorrindo no Playground.webp"] },
  { title: "Festividades e Eventos", text: "Celebrações, apresentações e momentos especiais que aproximam toda a comunidade escolar.", image: "/imagens/IMG_3991.webp", images: ["/imagens/IMG_3991.webp", "/imagens/IMG_3989.webp", "/imagens/IMG_3988.webp", "/imagens/IMG_3990.webp", "/imagens/IMG_3992.webp"] },
  { title: "Resultados e Conquistas", text: "O esforço, a dedicação e a aprendizagem que abrem caminhos e transformam sonhos em conquistas.", image: "/imagens/Aprovada em Mecânica no IFPB.webp", images: ["/imagens/Aprovada em Mecânica no IFPB.webp", "/imagens/Aprovado em Eletrônica.webp", "/imagens/Aprovado em Informática.webp"] },
];
const perguntas = [
  ["Quais etapas de ensino são oferecidas?", "O Instituto Educacional G.I. atende da Educação Infantil aos Anos Finais do Ensino Fundamental."],
  ["Como funciona o processo de matrícula?", "A relação publicada inclui documentos do estudante e do responsável financeiro, comprovante de endereço e documentação de escolaridade ou transferência. Para a Educação Infantil, também é solicitado o cartão de vacinação. A equipe de matrículas orienta sobre a documentação aplicável a cada caso."],
  ["Como conhecer a escola?", "Entre em contato com a equipe para agendar uma visita, conhecer os ambientes e conversar sobre a proposta pedagógica."],
  ["Como funciona a proposta pedagógica?", "Nossa proposta pedagógica valoriza o desenvolvimento integral dos estudantes, unindo conhecimento, formação humana e experiências significativas."],
  ["Como entro em contato com a escola?", "Você pode falar com nosso time pelo WhatsApp e agendar uma visita ou ligar para o número 2182-5088. Estaremos sempre prontos para receber vocês!"],
];

function AnimatedHistoryYears({ progress }: { progress: number }) {
  const value = Math.min(25, Math.max(0, Math.round(25 * (1 - Math.pow(1 - progress, 3)))));
  return <span className="history-counter__number" aria-label="25">{value}</span>;
}

function HistoryTestimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    let frame = 0;
    const update = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const stage = section.querySelector<HTMLElement>(".history-scroll-stage");
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const travel = Math.max(1, section.offsetHeight - (stage?.offsetHeight ?? window.innerHeight));
        setProgress(Math.round(Math.min(1, Math.max(0, (window.scrollY - sectionTop) / travel)) * 100) / 100);
        frame = 0;
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const cards = [
    { name: "Rosany Santos", source: "Instagram", quote: "Meu filho começou a estudar tinha 2 anos e esse ano é o último ano dele lá. Já estou com saudades dessa turma, amo todas e agradeço demais por tudo 😍" },
    { name: "Vivianne Aluska", source: "Facebook", quote: "Escola maravilhosa, primeiro ano do meu filho lá e eu já posso ver a diferença no crescimento e desenvolvimento dele nas atividades, na fala principalmente, no relacionamento com as outras crianças, na educação como um todo." },
    { name: "Fátima Araújo", source: "Facebook", quote: "Uma instituição diferenciada e muito humanizada." },
    { name: "Nazareth Di Maria", source: "Instagram", quote: "Escola bem conceituada, equipe bem preparada, enfim, pais e familiares satisfeitos." },
  ];
  const reveal = (from: number, to: number) => Math.min(1, Math.max(0, (progress - from) / (to - from)));
  const storyVisible = progress < 0.26;
  const testimonialsVisible = progress >= 0.17;
  const cardOffsets = [
    { x: -28, y: 8, rotation: -4 },
    { x: 18, y: 3, rotation: 3 },
    { x: -12, y: -4, rotation: -2 },
    { x: 8, y: -7, rotation: 2 },
  ];

  return <section ref={sectionRef} className="history-scroll-section" aria-label="Nossa história e depoimentos">
    <div className={`history-scroll-stage ${storyVisible ? "is-story" : "is-testimonials"}`}>
      <div className="history-scroll-story" aria-hidden={!storyVisible} style={{ opacity: 1 - reveal(0.20, 0.26), visibility: storyVisible ? "visible" : "hidden" }}>
        <p className="history-highlight__eyebrow history-story-item" style={{ opacity: reveal(0.005, 0.045), transform: `translateY(${(1 - reveal(0.005, 0.045)) * 22}px)` }}>Uma história que continua crescendo.</p>
        <div className="history-counter history-story-item" style={{ opacity: reveal(0.055, 0.13), transform: `translateY(${(1 - reveal(0.055, 0.13)) * 24}px)` }}>
          <span className="history-counter__plus" aria-hidden="true">+</span><AnimatedHistoryYears progress={reveal(0.055, 0.13)}/>
        </div>
        <p className="history-highlight__caption history-story-item history-scroll-caption" style={{ opacity: reveal(0.055, 0.13), transform: `translateY(${(1 - reveal(0.055, 0.13)) * 20}px)` }}>anos de história.</p>
      </div>
      <div className="history-scroll-testimonials" aria-hidden={!testimonialsVisible} style={{ opacity: reveal(0.25, 0.31), visibility: testimonialsVisible ? "visible" : "hidden", transform: `translateY(${(1 - reveal(0.25, 0.31)) * 28}px)` }}>
        <p className="history-scroll-kicker" style={{ opacity: reveal(0.32, 0.37), transform: `translateY(${(1 - reveal(0.32, 0.37)) * 18}px)` }}>UMA ESCOLA, MUITAS HISTÓRIAS.</p>
        <h2 className="history-scroll-heading" style={{ opacity: reveal(0.43, 0.48), transform: `translateY(${(1 - reveal(0.43, 0.48)) * 20}px)` }}>E cada família faz parte delas.</h2>
        <div className="history-scroll-cards">
          {cards.map((testimonial, index) => {
            const cardReveal = reveal([0.54, 0.65, 0.76, 0.87][index], [0.54, 0.65, 0.76, 0.87][index] + 0.075);
            const offset = cardOffsets[index];
            return <article key={testimonial.name} className={`testimonial-card history-scroll-card history-scroll-card--${index + 1}`} aria-hidden={cardReveal < 0.05} style={{ opacity: cardReveal, pointerEvents: cardReveal > 0.95 ? "auto" : "none", zIndex: index + 1, transform: `translate(calc(-50% + ${offset.x * cardReveal}px), calc(-50% + ${(1 - cardReveal) * 76 + offset.y * cardReveal}px)) scale(${0.86 + cardReveal * 0.14}) rotate(${offset.rotation * cardReveal}deg)` }}>
              <div className="testimonial-card__top"><span className="testimonial-card__stars" aria-label="Cinco estrelas"><Star/><Star/><Star/><Star/><Star/></span></div>
              <p className="testimonial-card__placeholder" style={{ opacity: cardReveal, transform: `translateY(${(1 - cardReveal) * 12}px)` }}>“{testimonial.quote}”</p>
              <div className="testimonial-card__person" style={{ opacity: cardReveal, transform: `translateY(${(1 - cardReveal) * 10}px)` }}><span className="testimonial-card__avatar"><UserRound size={23}/></span><span><strong>{testimonial.name}</strong><small className="testimonial-card__source">{testimonial.source === "Instagram" ? <Instagram size={13} aria-hidden="true"/> : <Facebook size={13} aria-hidden="true"/>}{testimonial.source}</small></span><Sparkles className="testimonial-card__spark" size={19}/></div>
            </article>;
          })}
        </div>
      </div>
    </div>
  </section>;
}

const heroSlides = [
  {
    desktop: "/imagens/Fachada%20Escolar%20Azul%20e%20Amarela.webp",
    mobile: "/imagens/Fachada%20Escolar%20Azul%20e%20Amarela%20-%20mobile.webp",
    alt: "Fachada do Instituto Educacional G.I.",
  },
  {
    desktop: "/imagens/Menino-sorridente-brincando-com-massinha-verde-desktop.webp",
    mobile: "/imagens/Menino%20sorridente%20brincando%20com%20areia%20verde.webp",
    alt: "Criança sorridente brincando com massinha verde",
  },
  {
    desktop: "/imagens/Aluno-Sorridente-Apontando-no-Corredor-desktop.webp",
    mobile: "/imagens/Aluno%20sorridente%20apontando%20no%20corredor%20escolar.webp",
    alt: "Aluno sorridente apontando no corredor escolar",
  },
];

const palavrasDaAprendizagem = ["Crescer.", "Aprender.", "Criar.", "Vivenciar."];

function ExperienceWords() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeWord, setActiveWord] = useState(0);
  const [outgoingWord, setOutgoingWord] = useState<number | null>(null);

  useEffect(() => {
    const updateWord = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const scrollableDistance = Math.max(1, rect.height - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / scrollableDistance));
      const next = Math.min(palavrasDaAprendizagem.length - 1, Math.floor(progress * palavrasDaAprendizagem.length));
      setActiveWord((current) => {
        if (current === next) return current;
        setOutgoingWord(current);
        return next;
      });
    };
    updateWord();
    window.addEventListener("scroll", updateWord, { passive: true });
    window.addEventListener("resize", updateWord);
    return () => {
      window.removeEventListener("scroll", updateWord);
      window.removeEventListener("resize", updateWord);
    };
  }, []);

  useEffect(() => {
    if (outgoingWord === null) return;
    const timeout = window.setTimeout(() => setOutgoingWord(null), 1000);
    return () => window.clearTimeout(timeout);
  }, [outgoingWord]);

  return <section ref={sectionRef} className="learning-words-section" aria-label="Crescer, aprender, criar e vivenciar">
    <div className="learning-words-sticky">
      <div className="learning-word-stack" aria-live="polite" aria-atomic="true">
        {outgoingWord !== null && <p className="learning-word learning-word--outgoing" aria-hidden="true">{palavrasDaAprendizagem[outgoingWord]}</p>}
        <p className="learning-word learning-word--current">{palavrasDaAprendizagem[activeWord]}</p>
      </div>
    </div>
  </section>;
}

type ExperienceItem = (typeof vivencias)[number];

function ExperienceCard({ item, index }: { item: ExperienceItem; index: number }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const activeImageIndexRef = useRef(0);
  const cardImages = item.images.length > 0 ? item.images : [item.image];

  useEffect(() => {
    if (cardImages.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const card = cardRef.current;
    if (!card) return;

    let intervalId: number | undefined;
    let isMounted = true;
    let isTransitioning = false;

    const advanceImage = async () => {
      if (isTransitioning) return;
      isTransitioning = true;

      const next = (activeImageIndexRef.current + 1) % cardImages.length;
      const preload = new Image();
      preload.decoding = "async";
      preload.src = cardImages[next];

      try {
        if (typeof preload.decode === "function") {
          await preload.decode();
        } else {
          await new Promise<void>((resolve) => {
            if (preload.complete) resolve();
            else {
              preload.onload = () => resolve();
              preload.onerror = () => resolve();
            }
          });
        }
      } catch {
        // Mesmo se decode() não estiver disponível, a camada já está no DOM
        // e o navegador poderá concluir a exibição pela imagem em cache.
      }

      if (!isMounted) return;
      activeImageIndexRef.current = next;
      setActiveImageIndex(next);
      window.setTimeout(() => { isTransitioning = false; }, 1800);
    };

    const start = () => {
      if (intervalId !== undefined) return;
      intervalId = window.setInterval(() => { void advanceImage(); }, 5000);
    };
    const stop = () => {
      if (intervalId !== undefined) window.clearInterval(intervalId);
      intervalId = undefined;
    };

    if (!("IntersectionObserver" in window)) start();
    else {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) start();
        else stop();
      }, { threshold: 0.15 });
      observer.observe(card);
      return () => {
        isMounted = false;
        observer.disconnect();
        stop();
      };
    }

    return () => {
      isMounted = false;
      stop();
    };
  }, [cardImages.length, index]);

  const focusFace = item.title === "Arte e cultura" || item.title === "Criatividade em ação";
  const imageFocusClass = focusFace ? "experience-card__background--face-focus" : "";

  return (
    <div ref={cardRef} className="experience-card" aria-label={item.title}>
      <div className="experience-card__slides" aria-hidden="true">
        {cardImages.map((src, slideIndex) => (
          <img
            key={src}
            className={`experience-card__slide ${activeImageIndex === slideIndex ? "is-active" : ""} ${imageFocusClass}`}
            src={src}
            alt=""
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>
      <div className="experience-card__shade"/>
      <span className="experience-card__number">0{index + 1}</span>
      <div className="experience-card__content">
        <h3 className="mt-3 font-display text-xl font-bold text-white">{item.title}</h3>
        <p className="mt-2 leading-6 text-white/90">{item.text}</p>
      </div>
    </div>
  );
}

function Index() {
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const heroTimer = window.setInterval(() => {
      setActiveHeroSlide((current) => (current + 1) % heroSlides.length);
    }, 3000);
    return () => window.clearInterval(heroTimer);
  }, []);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeExperience, setActiveExperience] = useState(0);
  const segmentCarouselRef = useRef<HTMLDivElement>(null);
  const [activeSegment, setActiveSegment] = useState(0);
  const [visibleMoveCards, setVisibleMoveCards] = useState<number[]>([]);
  const moveCardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = moveCardsRef.current;
    if (!container) return;
    const cards = Array.from(container.querySelectorAll<HTMLElement>(".home-move-card-item"));
    if (!("IntersectionObserver" in window)) {
      setVisibleMoveCards(cards.map((_, index) => index));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = cards.indexOf(entry.target as HTMLElement);
          if (index >= 0) setVisibleMoveCards((current) => current.includes(index) ? current : [...current, index]);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);
  const moveCarousel = (direction: "prev" | "next") => {
    const next = Math.max(0, Math.min(vivencias.length - 1, activeExperience + (direction === "next" ? 1 : -1)));
    goToExperience(next);
  };
  const goToExperience = (index: number) => {
    const container = carouselRef.current;
    const card = container?.children[index] as HTMLElement | undefined;
    if (!container || !card) return;
    container.scrollTo({ left: card.offsetLeft - container.offsetLeft, behavior: "smooth" });
    setActiveExperience(index);
  };
  const handleExperienceScroll = () => {
    const container = carouselRef.current;
    if (!container) return;
    const cards = Array.from(container.children) as HTMLElement[];
    const center = container.scrollLeft + container.clientWidth / 2;
    let nearest = 0;
    let distance = Number.POSITIVE_INFINITY;
    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft - container.offsetLeft + card.offsetWidth / 2;
      const currentDistance = Math.abs(center - cardCenter);
      if (currentDistance < distance) { distance = currentDistance; nearest = index; }
    });
    setActiveExperience(nearest);
  };
  return <SiteLayout transparentHeader>
    <section className="hero-home">
      <div className="hero-slides" aria-hidden="true">
        {heroSlides.map((slide, index) => (
          <picture key={slide.desktop} className={`hero-slide ${activeHeroSlide === index ? "is-active" : ""}`}>
            <source media="(max-width: 767px)" srcSet={slide.mobile} />
            <img src={slide.desktop} alt="" loading={index === 0 ? "eager" : "lazy"} fetchPriority={index === 0 ? "high" : "auto"} decoding="async" />
          </picture>
        ))}
      </div>
      <div className="hero-overlay"/>
      <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-5 pt-36 pb-24 lg:min-h-[710px] lg:px-8 lg:pt-44 lg:pb-24">
        <div className="max-w-3xl hero-copy">
          <span className="hero-kicker">Educação Infantil aos Anos Finais</span>
          <h1 className="hero-heading mt-7 font-display text-[2.25rem] font-bold leading-[1.08] text-white md:text-7xl">Educação que acolhe, ensina e <span className="text-accent">transforma.</span></h1>
          <p className="mt-7 hidden max-w-2xl text-lg leading-8 text-white/90 md:block md:text-xl">Um ambiente de aprendizagem, descobertas e desenvolvimento, onde cada estudante é valorizado em sua individualidade e preparado para construir seu futuro.</p>
          <div className="mt-9 flex flex-wrap gap-4"><Link to="/sobre" className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 font-extrabold text-accent-foreground shadow-xl transition hover:-translate-y-1">Conheça nossa escola <ArrowRight size={18}/></Link><Link to="/contato" className="rounded-full border border-white/70 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-primary">Informações sobre matrículas</Link></div>
        </div>
      </div>
      <div className="hero-bottom"/>
    </section>

    <section className="section-wrap section-decor-wrap home-essence-layout grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
      <div className="home-essence-image relative"><img src="/imagens/Menina%20sorridente%20no%20escorregador%20roxo.webp" alt="Menina sorridente no escorregador roxo" className="essence-image w-full rounded-[2rem] object-cover shadow-xl" loading="lazy" decoding="async"/><div className="absolute -bottom-5 -right-3 rounded-2xl bg-accent px-6 py-5 font-display text-lg font-bold text-accent-foreground shadow-lg sm:-right-5">Aprender para a vida</div></div>
      <div className="home-essence-heading"><p className="eyebrow">NOSSA ESSÊNCIA</p><h2 className="section-title">Educação que acredita no potencial de <span className="title-highlight">cada criança.</span></h2></div>
      <div className="home-essence-copy"><p className="text-lg leading-8 text-muted-foreground">O Instituto Educacional G.I. é uma instituição comprometida com uma educação de qualidade, pautada no acolhimento, no respeito às individualidades e no desenvolvimento integral dos estudantes.</p><p className="mt-4 leading-8 text-muted-foreground">Acreditamos que educar vai além da transmissão do conhecimento: é proporcionar experiências, despertar potencialidades, fortalecer valores e formar pessoas preparadas para os desafios da vida.</p><Link to="/sobre" className="link-arrow mt-7">Conheça nossa escola <ArrowRight size={18}/></Link></div>
    </section>

    <section className="bg-soft section-decor-wrap py-20 lg:py-24"><div className="section-wrap relative"><div className="mx-auto max-w-2xl text-center"><Star className="section-spark section-spark--move-heading" size={42} fill="currentColor" aria-hidden="true"/><p className="eyebrow">O QUE NOS MOVE</p><h2 className="section-title">Uma escola que <span className="title-highlight">cresce junto</span> com cada estudante.</h2><p className="mt-4 leading-7 text-muted-foreground">Uma experiência educativa construída com cuidado, intencionalidade e compromisso.</p></div><div ref={moveCardsRef} className="home-move-cards mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{destaques.map(({icon:Icon,title,text},i)=><div key={title} className={`home-move-card-item ${visibleMoveCards.includes(i) ? "home-move-card-item--visible" : ""}`} style={{ zIndex: i + 1 }}><article className="feature-card feature-card--glow h-full"><span className="icon-bubble feature-icon"><Icon size={25}/></span><h3 className="mt-5 font-display text-xl font-bold text-primary">{title}</h3><p className="mt-3 leading-7 text-muted-foreground">{text}</p><span className="feature-card__spark" aria-hidden="true"><Star size={14}/></span></article></div>)}</div></div></section>

    <ExperienceWords />

    <section className="section-wrap section-decor-wrap py-20 lg:py-24"><div className="relative"><Star className="section-spark section-spark--learning" size={46} fill="currentColor" aria-hidden="true"/><div className="flex flex-wrap items-end justify-between gap-6"><div className="max-w-2xl"><p className="eyebrow">APRENDER FAZENDO</p><h2 className="section-title">Vivenciar momentos que <span className="title-highlight">ensinam</span> e ficam na memória.</h2><p className="mt-4 leading-7 text-muted-foreground">Projetos, experiências e atividades que tornam a aprendizagem significativa, estimulam a criatividade e fortalecem os vínculos entre os estudantes.</p></div><div className="flex items-center gap-4"><Link to="/vivencias" className="link-arrow">Ver galeria completa <ArrowRight size={18}/></Link><div className="hidden gap-2 sm:flex"><button type="button" onClick={()=>moveCarousel("prev")} aria-label="Ver vivências anteriores" className="carousel-arrow"><ChevronLeft size={20}/></button><button type="button" onClick={()=>moveCarousel("next")} aria-label="Ver próximas vivências" className="carousel-arrow"><ChevronRight size={20}/></button></div></div></div><div ref={carouselRef} onScroll={handleExperienceScroll} className="experience-carousel mt-10" aria-label="Carrossel de vivências escolares">{vivencias.map((v,i)=><ExperienceCard key={v.title} item={v} index={i}/>)}</div><div className="experience-dots mt-5" role="group" aria-label="Selecionar vivência">{vivencias.map((v,i)=><button key={v.title} type="button" onClick={()=>goToExperience(i)} className={`experience-dot ${activeExperience===i?"is-active":""}`} aria-label={`Ir para ${v.title}`} aria-current={activeExperience===i?"true":undefined}/>)}</div></div></section>



    <section className="mission-vision-section section-decor-wrap py-20 lg:py-24"><div className="section-wrap relative"><div className="mx-auto max-w-3xl text-center"><Star className="section-spark section-spark--identity-heading" size={42} fill="currentColor" aria-hidden="true"/><p className="eyebrow mission-eyebrow">NOSSA IDENTIDADE</p><h2 className="mission-title">Missão e visão que orientam nosso caminho.</h2><p className="mission-intro">Os princípios que inspiram nossas escolhas e nosso compromisso com a educação.</p></div><div className="mission-vision-grid mt-12 grid gap-6 lg:grid-cols-2"><article className="mission-paper-card mission-vision-card"><span className="mission-vision-icon"><Target size={32}/></span><h3 className="mt-5 font-display text-2xl font-bold">Nossa missão</h3><p className="mt-4 leading-8">Promover uma educação de qualidade, oferecendo um ambiente acolhedor e estimulante que favoreça o desenvolvimento integral dos estudantes, valorizando o conhecimento, a formação humana e o respeito às individualidades.</p></article><article className="mission-paper-card mission-vision-card"><span className="mission-vision-icon"><Eye size={32}/></span><h3 className="mt-5 font-display text-2xl font-bold">Nossa visão</h3><p className="mt-4 leading-8">Ser reconhecida como uma instituição de ensino comprometida com a excelência educacional, a inovação nas práticas pedagógicas e a formação de cidadãos conscientes, autônomos e preparados para transformar a sociedade.</p></article></div></div></section>

    <section className="school-segments-section section-wrap section-decor-wrap py-20 lg:py-24" aria-labelledby="school-segments-title">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mobile-section-icon" aria-hidden="true"><GraduationCap size={27} strokeWidth={1.9}/></div>
        <p className="eyebrow">NOSSOS SEGMENTOS</p>
        <h2 id="school-segments-title" className="section-title">Uma jornada de <span className="title-highlight">aprendizagem</span> para cada etapa.</h2>
        <p className="mt-5 leading-8 text-muted-foreground">Conheça os segmentos do Instituto Educacional G.I. e descubra as experiências preparadas para cada fase do desenvolvimento.</p>
      </div>
      <div ref={segmentCarouselRef} onScroll={() => {
        const container = segmentCarouselRef.current;
        if (!container) return;
        const cards = Array.from(container.children) as HTMLElement[];
        const center = container.scrollLeft + container.clientWidth / 2;
        let nearest = 0;
        let distance = Number.POSITIVE_INFINITY;
        cards.forEach((card, i) => {
          const cardCenter = card.offsetLeft - container.offsetLeft + card.offsetWidth / 2;
          const currentDistance = Math.abs(center - cardCenter);
          if (currentDistance < distance) { distance = currentDistance; nearest = i; }
        });
        setActiveSegment(nearest);
      }} className="school-segments-grid mt-12" aria-label="Carrossel de segmentos escolares">
        {[
          { title: "Educação Infantil", image: "/imagens/Menino%20sorridente%20no%20brinquedo%20azul.webp", href: "/ensino#segmento-infantil", kind: "blue" },
          { title: "Anos Iniciais", image: "/imagens/Sorriso%20na%20sala%20de%20aula.webp", href: "/ensino#segmento-iniciais", kind: "blue" },
          { title: "Anos Finais", image: "/imagens/Aluno%20sorridente%20apontando%20no%20corredor%20escolar.webp", href: "/ensino#segmento-finais", kind: "blue" },
          { title: "Ensino Integral", image: "/imagens/Retrato%20escolar%20infantil%20com%20uniforme%20G.I.webp", href: "/ensino-integral", kind: "yellow" },
        ].map((segment, index) => (
          <article className={`school-segment-card school-segment-card--${segment.kind}`} key={segment.title}>
            <img src={segment.image} alt={segment.title} loading="lazy" />
            <div className="school-segment-card__shade" />
            <span className="school-segment-card__number">0{index + 1}</span>
            <div className="school-segment-card__content">
              <span className="school-segment-card__eyebrow">INSTITUTO EDUCACIONAL G.I.</span>
              <h3>{segment.title}</h3>
              <a href={segment.href} className={`school-segment-card__button school-segment-card__button--${segment.kind}`}>
                Saiba mais <ArrowRight size={17} />
              </a>
            </div>
          </article>
        ))}
      </div>
      <div className="school-segments-dots mt-5" role="group" aria-label="Selecionar segmento">
        {["Educação Infantil", "Anos Iniciais", "Anos Finais", "Ensino Integral"].map((name, i) => (
          <button key={name} type="button" onClick={() => {
            const container = segmentCarouselRef.current;
            const card = container?.children[i] as HTMLElement | undefined;
            if (container && card) container.scrollTo({ left: card.offsetLeft - container.offsetLeft, behavior: "smooth" });
            setActiveSegment(i);
          }} className={`school-segments-dot ${activeSegment === i ? "is-active" : ""}`} aria-label={`Ir para ${name}`} aria-current={activeSegment === i ? "true" : undefined} />
        ))}
      </div>
    </section>

    <section className="school-structure-section section-wrap py-20 lg:py-24" aria-labelledby="school-structure-title">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mobile-section-icon" aria-hidden="true"><Building2 size={26} strokeWidth={1.9}/></div>
        <p className="eyebrow">NOSSA ESTRUTURA</p>
        <h2 id="school-structure-title" className="section-title">Um ambiente preparado para <span className="title-highlight">aprender e crescer.</span></h2>
        <p className="mt-5 leading-8 text-muted-foreground">Cada espaço do Instituto Educacional G.I. é pensado para acolher, estimular descobertas e proporcionar experiências que fazem parte da jornada de aprendizagem. Conheça nossas salas climatizadas, o parquinho e a quadra esportiva.</p>
      </div>
      <div className="structure-carousel mt-12" aria-label="Galeria da estrutura da escola">
        <div className="structure-carousel__track">
          {[
            { src: "/imagens/IMG_4025.webp", alt: "Quadra esportiva do Instituto Educacional G.I.", title: "Quadra Esportiva" },
            { src: "/imagens/IMG_4024.webp", alt: "Sala climatizada do Instituto Educacional G.I.", title: "Salas climatizadas" },
            { src: "/imagens/IMG_4023.webp", alt: "Parquinho do Instituto Educacional G.I.", title: "Parquinho" },
          ].map((slide) => <figure className="structure-carousel__slide" key={slide.src}>
            <img src={slide.src} alt={slide.alt} loading="lazy" decoding="async" />
            <figcaption>{slide.title}</figcaption>
          </figure>)}
          {[
            { src: "/imagens/IMG_4025.webp", title: "Quadra Esportiva" },
            { src: "/imagens/IMG_4024.webp", title: "Salas climatizadas" },
            { src: "/imagens/IMG_4023.webp", title: "Parquinho" },
          ].map((slide) => <figure className="structure-carousel__slide" key={`duplicate-${slide.src}`} aria-hidden="true">
            <img src={slide.src} alt="" loading="lazy" decoding="async" />
            <figcaption>{slide.title}</figcaption>
          </figure>)}
        </div>
      </div>
    </section>

    <HistoryTestimonials />

    <section className="faq-section section-wrap py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto max-w-2xl text-center">
          <div className="faq-heading-icon" aria-hidden="true"><CircleHelp size={27} strokeWidth={1.8}/></div>
          <p className="eyebrow">DÚVIDAS FREQUENTES</p>
          <h2 className="section-title">Estamos aqui para <span className="title-highlight">ajudar.</span></h2>
          <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base">Encontre respostas para as principais dúvidas sobre o Instituto Educacional G.I.</p>
        </div>
        <div className="faq-list mt-8 grid gap-3 sm:mt-10 sm:gap-4">
          {perguntas.map(([q,a],i)=><details key={q} className="faq-item" open={i===0}>
            <summary className="faq-question flex w-full items-center justify-between gap-4 text-left">
              <span className="faq-question__text">{q}</span>
              <span className="faq-question__icon"><ChevronDown className="faq-chevron transition-transform duration-300" size={19}/></span>
            </summary>
            <div id={`faq-answer-${i}`} className="faq-answer-content"><p>{a}</p></div>
          </details>)}
        </div>
      </div>
    </section>

    <section className="home-final-cta bg-primary py-20 text-white"><div className="section-wrap home-final-cta__content grid items-center gap-8 lg:grid-cols-[1fr_auto]"><div><p className="eyebrow text-accent">VENHA NOS CONHECER</p><h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">O próximo capítulo da história do seu filho começa aqui.</h2><p className="mt-5 max-w-2xl leading-8 text-white/80">Venha conhecer o Instituto Educacional G.I. e descubra um ambiente preparado para ensinar, acolher e acompanhar cada etapa do desenvolvimento dos nossos estudantes.</p></div><a href="tel:+558321825088" className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 font-extrabold text-accent-foreground transition hover:-translate-y-1">Marcar Visita agora <ArrowRight size={18}/></a></div></section>
  </SiteLayout>;
}
