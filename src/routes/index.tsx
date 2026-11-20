import { canonicalLink } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, HeartHandshake, Lightbulb, Users, Palette, Brain, HandHeart, ChevronDown, Star, ChevronLeft, ChevronRight, Send, Target, Eye } from "lucide-react";
import { useRef, useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { ScrollReveal } from "@/components/ScrollReveal";

export const Route = createFileRoute("/")({
  head: () => ({ links: canonicalLink("/"), meta: [
    { title: "Instituto Educacional G.I. | Educação Infantil e Anos Iniciais" },
    { name: "description", content: "Conheça o Instituto Educacional G.I. Uma escola comprometida com o acolhimento, a aprendizagem e o desenvolvimento integral dos estudantes." },
    { name: "keywords", content: "Instituto Educacional G.I., Educação Infantil, Anos Iniciais, escola, educação de qualidade, matrículas escolares" },
    { property: "og:title", content: "Instituto Educacional G.I. | Educação que transforma vidas" },
    { property: "og:description", content: "Educação que acolhe, ensina e transforma vidas." },
    { property: "og:type", content: "website" }
  ] }),
  component: Index,
});

const destaques = [
  { icon: HeartHandshake, title: "Acolhimento e respeito", text: "Um ambiente que valoriza cada estudante em sua individualidade." },
  { icon: BookOpen, title: "Aprendizagem significativa", text: "Experiências que despertam a curiosidade e constroem conhecimento." },
  { icon: Users, title: "Parceria com as famílias", text: "Diálogo e colaboração na trajetória de desenvolvimento dos alunos." },
  { icon: Lightbulb, title: "Desenvolvimento integral", text: "Conhecimentos, habilidades, criatividade e formação humana." },
];
const vivencias = [
  { title: "Projetos pedagógicos", text: "Investigações, descobertas e atividades que aproximam o conhecimento da vida.", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85" },
  { title: "Arte e cultura", text: "Experiências que valorizam a expressão, a imaginação e a criatividade.", image: "https://images.unsplash.com/photo-1560785496-3c9d27877182?auto=format&fit=crop&w=900&q=85" },
  { title: "Convivência e cidadania", text: "Momentos coletivos que fortalecem vínculos, respeito e cooperação.", image: "https://images.unsplash.com/photo-1472162314594-eba3c3d2b7e3?auto=format&fit=crop&w=900&q=85" },
  { title: "Leitura e imaginação", text: "Histórias que despertam a curiosidade e ampliam o repertório das crianças.", image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=85" },
  { title: "Descobertas e experiências", text: "Explorar, experimentar e aprender com o mundo ao redor.", image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85" },
  { title: "Criatividade em ação", text: "Atividades que valorizam a expressão, a imaginação e novas ideias.", image: "https://images.unsplash.com/photo-1560785496-3c9d27877182?auto=format&fit=crop&w=900&q=85" },
];
const perguntas = [
  ["Quais etapas de ensino são oferecidas?", "O Instituto Educacional G.I. atende à Educação Infantil e aos Anos Iniciais do Ensino Fundamental."],
  ["Como funciona o processo de matrícula?", "Entre em contato com a escola pelo formulário desta página para receber orientações sobre o processo de matrícula."],
  ["Quais documentos são necessários?", "A relação de documentos é informada pela equipe da escola durante o atendimento à família."],
  ["Como conhecer a estrutura da escola?", "Entre em contato para conversar com a equipe e consultar a possibilidade de agendar uma visita."],
  ["Como funciona a proposta pedagógica?", "Nossa comunicação institucional valoriza o acolhimento, a aprendizagem significativa e o desenvolvimento integral dos estudantes."],
  ["Como entrar em contato com a instituição?", "Acesse a página Contato e envie seus dados para solicitar informações à equipe do Instituto Educacional G.I."],
];

function Index() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeExperience, setActiveExperience] = useState(0);
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
      <div className="hero-overlay"/>
      <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-5 py-24 lg:min-h-[710px] lg:px-8">
        <div className="max-w-3xl hero-copy">
          <span className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold tracking-widest text-white backdrop-blur">Educação Infantil aos Anos Iniciais</span>
          <h1 className="mt-7 font-display text-5xl font-bold leading-[1.08] text-white md:text-7xl">Educação que acolhe, ensina e <span className="text-accent">transforma vidas.</span></h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/90 md:text-xl">Um ambiente de aprendizagem, descobertas e desenvolvimento, onde cada estudante é valorizado em sua individualidade e preparado para construir seu futuro.</p>
          <div className="mt-9 flex flex-wrap gap-4"><Link to="/sobre" className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 font-extrabold text-accent-foreground shadow-xl transition hover:-translate-y-1">Conheça nossa escola <ArrowRight size={18}/></Link><Link to="/contato" className="rounded-full border border-white/70 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-primary">Informações sobre matrículas</Link></div>
        </div>
      </div>
      <span className="absolute bottom-6 right-6 z-10 rounded-full bg-black/35 px-3 py-1 text-[10px] font-medium text-white/85">Imagem ilustrativa</span><div className="hero-bottom"/>
    </section>

    <section className="section-wrap grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
      <div className="relative"><img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1100&q=85" alt="Estudantes em atividade de aprendizagem — imagem ilustrativa" className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-xl"/><div className="absolute -bottom-5 -right-3 rounded-2xl bg-accent px-6 py-5 font-display text-lg font-bold text-accent-foreground shadow-lg sm:-right-5">Aprender para a vida</div></div>
      <div><p className="eyebrow">NOSSA ESSÊNCIA</p><h2 className="section-title">Educação que acredita no potencial de cada criança.</h2><p className="mt-6 text-lg leading-8 text-muted-foreground">O Instituto Educacional G.I. é uma instituição comprometida com uma educação de qualidade, pautada no acolhimento, no respeito às individualidades e no desenvolvimento integral dos estudantes.</p><p className="mt-4 leading-8 text-muted-foreground">Acreditamos que educar vai além da transmissão de conhecimentos. É proporcionar experiências, despertar potencialidades, fortalecer valores e contribuir para a formação de pessoas preparadas para os desafios da vida.</p><Link to="/sobre" className="link-arrow mt-7">Conheça nossa escola <ArrowRight size={18}/></Link></div>
    </section>

    <section className="bg-soft section-decor-wrap py-20 lg:py-24"><div className="section-wrap relative"><Star className="section-spark section-spark--left" size={48} fill="currentColor" aria-hidden="true"/><div className="section-plane section-plane--move" aria-hidden="true"><span className="plane-trail"/><Send size={30}/><span className="plane-arrow">›</span></div><div className="mx-auto max-w-2xl text-center"><p className="eyebrow">O QUE NOS MOVE</p><h2 className="section-title">Uma escola que cresce junto com cada estudante.</h2><p className="mt-4 leading-7 text-muted-foreground">Uma experiência educativa construída com cuidado, intencionalidade e compromisso.</p></div><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{destaques.map(({icon:Icon,title,text},i)=><ScrollReveal key={title} delay={i*100}><article className="feature-card feature-card--glow h-full"><span className="icon-bubble feature-icon"><Icon size={25}/></span><h3 className="mt-5 font-display text-xl font-bold text-primary">{title}</h3><p className="mt-3 leading-7 text-muted-foreground">{text}</p><span className="feature-card__spark" aria-hidden="true"><Star size={14}/></span></article></ScrollReveal>)}</div></div></section>

    <section className="section-wrap section-decor-wrap py-20 lg:py-24"><div className="relative"><div className="flex flex-wrap items-end justify-between gap-6"><div className="max-w-2xl"><p className="eyebrow">APRENDER FAZENDO</p><h2 className="section-title">Vivências que ensinam e momentos que ficam.</h2><p className="mt-4 leading-7 text-muted-foreground">Projetos, experiências e atividades que tornam a aprendizagem significativa, estimulam a criatividade e fortalecem os vínculos entre os estudantes.</p></div><div className="flex items-center gap-4"><Link to="/vivencias" className="link-arrow">Ver nossas vivências <ArrowRight size={18}/></Link><div className="hidden gap-2 sm:flex"><button type="button" onClick={()=>moveCarousel("prev")} aria-label="Ver vivências anteriores" className="carousel-arrow"><ChevronLeft size={20}/></button><button type="button" onClick={()=>moveCarousel("next")} aria-label="Ver próximas vivências" className="carousel-arrow"><ChevronRight size={20}/></button></div></div></div><div ref={carouselRef} onScroll={handleExperienceScroll} className="experience-carousel mt-10" aria-label="Carrossel de vivências escolares">{vivencias.map((v,i)=><article key={v.title} className="experience-card"><img className="experience-card__background" src={v.image} alt={v.title+" — imagem ilustrativa"} loading="lazy"/><div className="experience-card__shade"/><span className="experience-card__number">0{i+1}</span><div className="experience-card__content"><h3 className="font-display text-xl font-bold text-white">{v.title}</h3><p className="mt-2 leading-6 text-white/90">{v.text}</p></div></article>)}</div><div className="experience-dots mt-5" role="group" aria-label="Selecionar vivência">{vivencias.map((v,i)=><button key={v.title} type="button" onClick={()=>goToExperience(i)} className={`experience-dot ${activeExperience===i?"is-active":""}`} aria-label={`Ir para ${v.title}`} aria-current={activeExperience===i?"true":undefined}/>)}</div></div></section>

    <section className="mission-vision-section section-decor-wrap py-20 lg:py-24"><div className="section-wrap relative"><div className="mx-auto max-w-3xl text-center"><p className="eyebrow mission-eyebrow">NOSSA IDENTIDADE</p><h2 className="mission-title">Missão e visão que orientam nosso caminho.</h2><p className="mission-intro">Os princípios que inspiram nossas escolhas e nosso compromisso com a educação.</p></div><div className="mission-vision-grid mt-12 grid gap-6 lg:grid-cols-2"><article className="mission-vision-card"><span className="mission-vision-icon"><Target size={32}/></span><h3 className="mt-5 font-display text-2xl font-bold">Nossa missão</h3><p className="mt-4 leading-8">Promover uma educação de qualidade, oferecendo um ambiente acolhedor e estimulante que favoreça o desenvolvimento integral dos estudantes, valorizando o conhecimento, a formação humana e o respeito às individualidades.</p></article><article className="mission-vision-card"><span className="mission-vision-icon"><Eye size={32}/></span><h3 className="mt-5 font-display text-2xl font-bold">Nossa visão</h3><p className="mt-4 leading-8">Ser reconhecida como uma instituição de ensino comprometida com a excelência educacional, a inovação nas práticas pedagógicas e a formação de cidadãos conscientes, autônomos e preparados para transformar a sociedade.</p></article></div><div className="section-plane section-plane--mission" aria-hidden="true"><span className="plane-trail"/><Send size={30}/><span className="plane-arrow">›</span></div></div></section>

    <section className="section-wrap section-decor-wrap grid items-center gap-10 py-20 lg:grid-cols-2 lg:py-24"><div className="overflow-hidden rounded-[2rem]"><img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85" alt="Ambiente de aprendizagem escolar" loading="lazy" className="aspect-[5/4] w-full object-cover"/></div><div><p className="eyebrow">NOSSA ESTRUTURA</p><h2 className="section-title">Ambientes preparados para grandes descobertas.</h2><p className="mt-5 leading-8 text-muted-foreground">Cada espaço da escola faz parte da experiência de aprendizagem. Valorizamos ambientes que favoreçam a convivência, a criatividade, a participação e o desenvolvimento dos estudantes.</p><p className="mt-3 text-sm leading-7 text-muted-foreground">As imagens desta prévia são ilustrativas e serão substituídas por fotografias reais da instituição.</p><Link to="/estrutura" className="link-arrow mt-6">Conheça nossa estrutura <ArrowRight size={18}/></Link></div></section>

    <section className="bg-soft py-20"><div className="section-wrap"><div className="mx-auto max-w-2xl text-center"><p className="eyebrow">NOSSA COMUNIDADE</p><h2 className="section-title">A confiança de quem faz parte da nossa história.</h2><p className="mt-4 leading-7 text-muted-foreground">A parceria entre escola e família fortalece a trajetória de aprendizagem.</p></div><div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-dashed border-primary/30 bg-white p-9 text-center"><span className="icon-bubble"><Star size={25} fill="currentColor"/></span><h3 className="mt-5 font-display text-xl font-bold text-primary">Este espaço será preenchido com depoimentos reais.</h3><p className="mt-3 leading-7 text-muted-foreground">Em breve, compartilharemos experiências de pais e responsáveis que fazem parte da comunidade do Instituto Educacional G.I.</p></div></div></section>

    <section className="section-wrap py-20 lg:py-24"><div className="mx-auto max-w-3xl"><div className="text-center"><p className="eyebrow">DÚVIDAS FREQUENTES</p><h2 className="section-title">Estamos aqui para ajudar.</h2></div><div className="mt-10 divide-y divide-border border-y border-border">{perguntas.map(([q,a],i)=><div key={q} className="py-5"><button className="flex w-full items-center justify-between gap-4 text-left font-semibold text-primary" aria-expanded={faqOpen===i} onClick={()=>setFaqOpen(faqOpen===i?null:i)}><span>{q}</span><ChevronDown className={`shrink-0 transition-transform ${faqOpen===i?"rotate-180":""}`}/></button>{faqOpen===i&&<p className="max-w-2xl pt-4 leading-7 text-muted-foreground">{a}</p>}</div>)}</div></div></section>

    <section className="bg-primary py-20 text-white"><div className="section-wrap grid items-center gap-8 lg:grid-cols-[1fr_auto]"><div><p className="eyebrow text-accent">VENHA NOS CONHECER</p><h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">O próximo capítulo da história do seu filho começa aqui.</h2><p className="mt-5 max-w-2xl leading-8 text-white/80">Venha conhecer o Instituto Educacional G.I. e descubra um ambiente preparado para ensinar, acolher e acompanhar cada etapa do desenvolvimento dos nossos estudantes.</p></div><Link to="/contato" className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 font-extrabold text-accent-foreground transition hover:-translate-y-1">Quero conhecer a escola <ArrowRight size={18}/></Link></div></section>
  </SiteLayout>;
}
