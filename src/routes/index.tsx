import { pageHead } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, HeartHandshake, Lightbulb, Users, Palette, Brain, HandHeart, ChevronDown, Star, ChevronLeft, ChevronRight, Target, Eye, Quote, UserRound, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => pageHead("/", {
    title: "Instituto Educacional G.I. | Educação Infantil e Anos Iniciais",
    description: "Conheça o Instituto Educacional G.I. Uma escola comprometida com o acolhimento, a aprendizagem e o desenvolvimento integral dos estudantes.",
    keywords: "Instituto Educacional G.I., Educação Infantil, Anos Iniciais, escola, educação de qualidade, matrículas escolares",
  }),
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
  { title: "Festividades e Eventos", text: "Celebrações, apresentações e momentos especiais que aproximam toda a comunidade escolar.", image: "/imagens/Dança Caipira no Ginásio Escolar.webp", images: ["/imagens/Dança Caipira no Ginásio Escolar.webp", "/imagens/Crianças em Fantasias diante da Bandeira Brasileira.webp", "/imagens/Dia da Meia Maluca Colorido (1).webp", "/imagens/Jovens Apresentam Mostra Cultural.webp", "/imagens/Assembleia Escolar no Ginásio.webp", "/imagens/Menina com máscara de fantasia colorida.webp"] },
];
const perguntas = [
  ["Quais etapas de ensino são oferecidas?", "O Instituto Educacional G.I. atende à Educação Infantil e aos Anos Iniciais do Ensino Fundamental."],
  ["Como funciona o processo de matrícula?", "Entre em contato com a escola pelo formulário desta página para receber orientações sobre o processo de matrícula."],
  ["Quais documentos são necessários?", "A relação de documentos é informada pela equipe da escola durante o atendimento à família."],
  ["Como conhecer a escola?", "Entre em contato com a equipe para conversar e consultar a possibilidade de agendar uma visita."],
  ["Como funciona a proposta pedagógica?", "Nossa comunicação institucional valoriza o acolhimento, a aprendizagem significativa e o desenvolvimento integral dos estudantes."],
  ["Como entrar em contato com a instituição?", "Acesse a página Contato e envie seus dados para solicitar informações à equipe do Instituto Educacional G.I."],
];

function AnimatedNumber({ value }: { value: number }) {
  const numberRef = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const element = numberRef.current;
    if (!element) return;

    let frame = 0;
    let started = false;
    let observer: IntersectionObserver | undefined;

    const animate = () => {
      if (started) return;
      started = true;
      const duration = 1800;
      const startTime = performance.now();

      const tick = (now: number) => {
        const progress = Math.min(1, (now - startTime) / duration);
        const easedProgress = 1 - Math.pow(1 - progress, 4);
        setDisplayValue(Math.round(value * easedProgress));
        if (progress < 1) {
          frame = window.requestAnimationFrame(tick);
        } else {
          setDisplayValue(value);
        }
      };

      frame = window.requestAnimationFrame(tick);
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayValue(value);
      return;
    }

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          animate();
          observer?.disconnect();
        }
      }, { threshold: 0.45 });
      observer.observe(element);
    } else {
      animate();
    }

    return () => {
      observer?.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [value]);

  return <span ref={numberRef} className="history-counter__number" aria-label={String(value)}>{displayValue}</span>;
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

const palavrasDaAprendizagem = ["É crescer.", "É aprender.", "É criar.", "É vivenciar."];

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

  return <section ref={sectionRef} className="learning-words-section" aria-label="É perguntar, crescer, criar, compartilhar e viver">
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
  const cardImages = item.images.length > 0 ? item.images : [item.image];

  useEffect(() => {
    if (cardImages.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let intervalId: number | undefined;
    const staggerDelay = index * 650;
    const startTimeout = window.setTimeout(() => {
      setActiveImageIndex((current) => (current + 1) % cardImages.length);
      intervalId = window.setInterval(() => {
        setActiveImageIndex((current) => (current + 1) % cardImages.length);
      }, 4000);
    }, staggerDelay);

    return () => {
      window.clearTimeout(startTimeout);
      if (intervalId !== undefined) window.clearInterval(intervalId);
    };
  }, [cardImages.length, index]);

  const focusFace = item.title === "Arte e cultura" || item.title === "Criatividade em ação";

  return (
    <div className="experience-card" aria-label={item.title}>
      {cardImages.map((image, imageIndex) => (
        <img
          key={image}
          className={`experience-card__background experience-card__background--slideshow ${imageIndex === activeImageIndex ? "is-active" : ""} ${focusFace ? "experience-card__background--face-focus" : ""}`}
          src={image}
          alt=""
          loading={imageIndex === 0 ? "eager" : "lazy"}
          aria-hidden="true"
        />
      ))}
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
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const heroTimer = window.setInterval(() => {
      setActiveHeroSlide((current) => (current + 1) % heroSlides.length);
    }, 6000);
    return () => window.clearInterval(heroTimer);
  }, []);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeExperience, setActiveExperience] = useState(0);
  const segmentCarouselRef = useRef<HTMLDivElement>(null);
  const [activeSegment, setActiveSegment] = useState(0);
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
            <img src={slide.desktop} alt="" loading="eager" decoding="async" />
          </picture>
        ))}
      </div>
      <div className="hero-overlay"/>
      <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-5 pt-36 pb-24 lg:min-h-[710px] lg:px-8 lg:pt-44 lg:pb-24">
        <div className="max-w-3xl hero-copy">
          <span className="hero-kicker">Educação Infantil aos Anos Finais</span>
          <h1 className="hero-heading mt-7 font-display text-[2.25rem] font-bold leading-[1.08] text-white md:text-7xl">Educação que acolhe, ensina e <span className="text-accent">transforma vidas.</span></h1>
          <p className="mt-7 hidden max-w-2xl text-lg leading-8 text-white/90 md:block md:text-xl">Um ambiente de aprendizagem, descobertas e desenvolvimento, onde cada estudante é valorizado em sua individualidade e preparado para construir seu futuro.</p>
          <div className="mt-9 flex flex-wrap gap-4"><Link to="/sobre" className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 font-extrabold text-accent-foreground shadow-xl transition hover:-translate-y-1">Conheça nossa escola <ArrowRight size={18}/></Link><Link to="/contato" className="rounded-full border border-white/70 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-primary">Informações sobre matrículas</Link></div>
        </div>
      </div>
      <div className="hero-bottom"/>
    </section>

    <section className="section-wrap section-decor-wrap grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
      <div className="relative"><img src="/imagens/Menina%20sorridente%20no%20escorregador%20roxo.webp" alt="Menina sorridente no escorregador roxo" className="essence-image w-full rounded-[2rem] object-cover shadow-xl"/><div className="absolute -bottom-5 -right-3 rounded-2xl bg-accent px-6 py-5 font-display text-lg font-bold text-accent-foreground shadow-lg sm:-right-5">Aprender para a vida</div></div>
      <div><p className="eyebrow">NOSSA ESSÊNCIA</p><h2 className="section-title">Educação que acredita no potencial de cada criança.</h2><p className="mt-6 text-lg leading-8 text-muted-foreground">O Instituto Educacional G.I. é uma instituição comprometida com uma educação de qualidade, pautada no acolhimento, no respeito às individualidades e no desenvolvimento integral dos estudantes.</p><p className="mt-4 leading-8 text-muted-foreground">Acreditamos que educar vai além da transmissão de conhecimentos. É proporcionar experiências, despertar potencialidades, fortalecer valores e contribuir para a formação de pessoas preparadas para os desafios da vida.</p><Link to="/sobre" className="link-arrow mt-7">Conheça nossa escola <ArrowRight size={18}/></Link></div>
    </section>

    <section className="bg-soft section-decor-wrap py-20 lg:py-24"><div className="section-wrap relative"><div className="mx-auto max-w-2xl text-center"><Star className="section-spark section-spark--move-heading" size={42} fill="currentColor" aria-hidden="true"/><p className="eyebrow">O QUE NOS MOVE</p><h2 className="section-title">Uma escola que cresce junto com cada estudante.</h2><p className="mt-4 leading-7 text-muted-foreground">Uma experiência educativa construída com cuidado, intencionalidade e compromisso.</p></div><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{destaques.map(({icon:Icon,title,text},i)=><div key={title}><article className="feature-card feature-card--glow h-full"><span className="icon-bubble feature-icon"><Icon size={25}/></span><h3 className="mt-5 font-display text-xl font-bold text-primary">{title}</h3><p className="mt-3 leading-7 text-muted-foreground">{text}</p><span className="feature-card__spark" aria-hidden="true"><Star size={14}/></span></article></div>)}</div></div></section>

    <ExperienceWords />

    <section className="section-wrap section-decor-wrap py-20 lg:py-24"><div className="relative"><Star className="section-spark section-spark--learning" size={46} fill="currentColor" aria-hidden="true"/><div className="flex flex-wrap items-end justify-between gap-6"><div className="max-w-2xl"><p className="eyebrow">APRENDER FAZENDO</p><h2 className="section-title">Vivenciar momentos que ensinam e ficam na memória.</h2><p className="mt-4 leading-7 text-muted-foreground">Projetos, experiências e atividades que tornam a aprendizagem significativa, estimulam a criatividade e fortalecem os vínculos entre os estudantes.</p></div><div className="flex items-center gap-4"><Link to="/vivencias" className="link-arrow">Ver nossas vivências <ArrowRight size={18}/></Link><div className="hidden gap-2 sm:flex"><button type="button" onClick={()=>moveCarousel("prev")} aria-label="Ver vivências anteriores" className="carousel-arrow"><ChevronLeft size={20}/></button><button type="button" onClick={()=>moveCarousel("next")} aria-label="Ver próximas vivências" className="carousel-arrow"><ChevronRight size={20}/></button></div></div></div><div ref={carouselRef} onScroll={handleExperienceScroll} className="experience-carousel mt-10" aria-label="Carrossel de vivências escolares">{vivencias.map((v,i)=><ExperienceCard key={v.title} item={v} index={i}/>)}</div><div className="experience-dots mt-5" role="group" aria-label="Selecionar vivência">{vivencias.map((v,i)=><button key={v.title} type="button" onClick={()=>goToExperience(i)} className={`experience-dot ${activeExperience===i?"is-active":""}`} aria-label={`Ir para ${v.title}`} aria-current={activeExperience===i?"true":undefined}/>)}</div></div></section>



    <section className="mission-vision-section section-decor-wrap py-20 lg:py-24"><div className="section-wrap relative"><div className="mx-auto max-w-3xl text-center"><p className="eyebrow mission-eyebrow">NOSSA IDENTIDADE</p><h2 className="mission-title">Missão e visão que orientam nosso caminho.</h2><p className="mission-intro">Os princípios que inspiram nossas escolhas e nosso compromisso com a educação.</p></div><div className="mission-vision-grid mt-12 grid gap-6 lg:grid-cols-2"><article className="mission-paper-card mission-vision-card"><span className="mission-vision-icon"><Target size={32}/></span><h3 className="mt-5 font-display text-2xl font-bold">Nossa missão</h3><p className="mt-4 leading-8">Promover uma educação de qualidade, oferecendo um ambiente acolhedor e estimulante que favoreça o desenvolvimento integral dos estudantes, valorizando o conhecimento, a formação humana e o respeito às individualidades.</p></article><article className="mission-paper-card mission-vision-card"><span className="mission-vision-icon"><Eye size={32}/></span><h3 className="mt-5 font-display text-2xl font-bold">Nossa visão</h3><p className="mt-4 leading-8">Ser reconhecida como uma instituição de ensino comprometida com a excelência educacional, a inovação nas práticas pedagógicas e a formação de cidadãos conscientes, autônomos e preparados para transformar a sociedade.</p></article></div></div></section>

    <section className="school-segments-section section-wrap section-decor-wrap py-20 lg:py-24" aria-labelledby="school-segments-title">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">NOSSOS SEGMENTOS</p>
        <h2 id="school-segments-title" className="section-title">Uma jornada de aprendizagem para cada etapa.</h2>
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
          { title: "Anos Finais", image: "/imagens/IMG_3939.webp", href: "/ensino#segmento-finais", kind: "blue" },
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
        <p className="eyebrow">NOSSA ESTRUTURA</p>
        <h2 id="school-structure-title" className="section-title">Um ambiente preparado para aprender e crescer.</h2>
        <p className="mt-5 leading-8 text-muted-foreground">Cada espaço do Instituto Educacional G.I. é pensado para acolher, estimular descobertas e proporcionar experiências que fazem parte da jornada de aprendizagem. Em breve, este espaço apresentará registros dos ambientes da nossa escola.</p>
      </div>
      <div className="structure-carousel mt-12" aria-label="Galeria ilustrativa dos ambientes da escola">
        <div className="structure-carousel__track">
          {[
            { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85", alt: "Ambiente escolar com estudantes em atividade", title: "Espaços de aprendizagem" },
            { src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=85", alt: "Sala de aula organizada", title: "Salas acolhedoras" },
            { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=85", alt: "Ambiente educativo infantil", title: "Ambientes de descoberta" },
            { src: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=85", alt: "Espaço de aprendizagem escolar", title: "Aprender em cada espaço" },
          ].map((slide) => <figure className="structure-carousel__slide" key={slide.src}>
            <img src={slide.src} alt={slide.alt} loading="lazy" />
            <figcaption>{slide.title}</figcaption>
          </figure>)}
          {[
            { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85", alt: "Ambiente escolar com estudantes em atividade", title: "Espaços de aprendizagem" },
            { src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=85", alt: "Sala de aula organizada", title: "Salas acolhedoras" },
            { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=85", alt: "Ambiente educativo infantil", title: "Ambientes de descoberta" },
            { src: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=85", alt: "Espaço de aprendizagem escolar", title: "Aprender em cada espaço" },
          ].map((slide) => <figure className="structure-carousel__slide" key={`duplicate-${slide.src}`} aria-hidden="true">
            <img src={slide.src} alt="" loading="lazy" />
            <figcaption>{slide.title}</figcaption>
          </figure>)}
        </div>
      </div>
      <p className="mt-5 text-center text-xs text-muted-foreground">Imagens ilustrativas — serão substituídas por fotografias reais da estrutura da escola.</p>
    </section>

    <section className="history-highlight section-decor-wrap py-20 lg:py-24"><div className="section-wrap relative text-center"><p className="history-highlight__eyebrow">UMA HISTÓRIA QUE CONTINUA CRESCENDO</p><div className="history-counter mt-4"><span className="history-counter__plus" aria-hidden="true">+</span><AnimatedNumber value={26}/><span className="history-counter__suffix"> anos</span></div><p className="history-highlight__caption">de dedicação à educação, ao acolhimento e à construção de futuros.</p><div className="history-community mt-14"><p className="history-community__eyebrow">QUEM VIVE SABE E FAZ PARTE</p><p className="history-community__copy">Cada história, cada conquista e cada lembrança fazem parte da nossa comunidade.</p><div className="testimonials-grid mt-10 grid gap-5 text-left md:grid-cols-2 xl:grid-cols-3">{["Família da Educação Infantil","Família dos Anos Iniciais","Família G.I."].map((label,i)=><div key={label}><article className="testimonial-card h-full"><div className="testimonial-card__top"><span className="testimonial-card__quote"><Quote size={23}/></span><span className="testimonial-card__stars" aria-label="Espaço visual para avaliação"><Star/><Star/><Star/><Star/><Star/></span></div><p className="testimonial-card__placeholder">“Aqui será inserido o depoimento real de uma família, contando sua experiência com o Instituto Educacional G.I.”</p><div className="testimonial-card__person"><span className="testimonial-card__avatar"><UserRound size={23}/></span><span><strong>{label}</strong><small>Nome do responsável será adicionado</small></span><Sparkles className="testimonial-card__spark" size={19}/></div></article></div>)}</div></div><Star className="section-spark section-spark--history" size={58} fill="currentColor" aria-hidden="true"/></div></section>

    <section className="section-wrap py-20 lg:py-24"><div className="mx-auto max-w-3xl"><div className="text-center"><p className="eyebrow">DÚVIDAS FREQUENTES</p><h2 className="section-title">Estamos aqui para ajudar.</h2></div><div className="mt-10 divide-y divide-border border-y border-border">{perguntas.map(([q,a],i)=><div key={q} className="py-5"><button className="flex w-full items-center justify-between gap-4 text-left font-semibold text-primary" aria-expanded={faqOpen===i} onClick={()=>setFaqOpen(faqOpen===i?null:i)}><span>{q}</span><ChevronDown className={`shrink-0 transition-transform ${faqOpen===i?"rotate-180":""}`}/></button>{faqOpen===i&&<p className="max-w-2xl pt-4 leading-7 text-muted-foreground">{a}</p>}</div>)}</div></div></section>

    <section className="bg-primary py-20 text-white"><div className="section-wrap grid items-center gap-8 lg:grid-cols-[1fr_auto]"><div><p className="eyebrow text-accent">VENHA NOS CONHECER</p><h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">O próximo capítulo da história do seu filho começa aqui.</h2><p className="mt-5 max-w-2xl leading-8 text-white/80">Venha conhecer o Instituto Educacional G.I. e descubra um ambiente preparado para ensinar, acolher e acompanhar cada etapa do desenvolvimento dos nossos estudantes.</p></div><Link to="/contato" className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 font-extrabold text-accent-foreground transition hover:-translate-y-1">Quero conhecer a escola <ArrowRight size={18}/></Link></div></section>
  </SiteLayout>;
}
