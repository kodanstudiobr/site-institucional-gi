import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, HeartHandshake, Lightbulb, Users, Star, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Instituto Educacional G.I. | Educação que transforma vidas" }, { name: "description", content: "Conheça o Instituto Educacional G.I., sua proposta pedagógica, Educação Infantil e Anos Iniciais. Entre em contato e saiba mais sobre matrículas." }, { property: "og:title", content: "Instituto Educacional G.I." }, { property: "og:description", content: "Educação que acolhe, ensina e transforma vidas." }] }),
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
  { title: "Arte e cultura", text: "Espaço para expressão, imaginação, sensibilidade e novas formas de aprender.", image: "https://images.unsplash.com/photo-1560785496-3c9d27877182?auto=format&fit=crop&w=900&q=85" },
  { title: "Convivência e cidadania", text: "Momentos coletivos que fortalecem vínculos, respeito e cooperação.", image: "https://images.unsplash.com/photo-1472162314594-eba3c3d2b7e3?auto=format&fit=crop&w=900&q=85" },
];

function Index() {
  return <SiteLayout>
    <section className="hero-home">
      <div className="hero-overlay"/>
      <div className="relative mx-auto flex min-h-[610px] max-w-7xl items-center px-5 py-24 lg:min-h-[690px] lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold tracking-widest text-white backdrop-blur"><Sparkles size={14} className="text-accent"/> INSTITUTO EDUCACIONAL G.I.</span>
          <h1 className="mt-7 font-display text-5xl font-bold leading-[1.08] text-white md:text-7xl">Educação que acolhe, ensina e <span className="text-accent">transforma vidas.</span></h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/90 md:text-xl">Um ambiente de aprendizagem, descobertas e desenvolvimento, onde cada estudante é valorizado em sua individualidade e preparado para construir seu futuro.</p>
          <div className="mt-9 flex flex-wrap gap-4"><Link to="/sobre" className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 font-extrabold text-accent-foreground shadow-xl transition hover:-translate-y-1">Conheça nossa escola <ArrowRight size={18}/></Link><Link to="/contato" className="rounded-full border border-white/70 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-primary">Informações sobre matrículas</Link></div>
        </div>
      </div>
      <div className="hero-bottom"/>
    </section>
    <section className="section-wrap grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
      <div className="relative"><img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1100&q=85" alt="Estudantes em atividade de aprendizagem" className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-xl"/><div className="absolute -bottom-5 -right-3 rounded-2xl bg-accent px-6 py-5 font-display text-lg font-bold text-accent-foreground shadow-lg sm:-right-5">Aprender para a vida</div></div>
      <div><p className="eyebrow">NOSSA ESSÊNCIA</p><h2 className="section-title">Educação que acredita no potencial de cada criança.</h2><p className="mt-6 text-lg leading-8 text-muted-foreground">O Instituto Educacional G.I. é uma instituição comprometida com uma educação de qualidade, pautada no acolhimento, no respeito às individualidades e no desenvolvimento integral dos estudantes.</p><p className="mt-4 leading-8 text-muted-foreground">Acreditamos que educar vai além da transmissão de conhecimentos. É proporcionar experiências, despertar potencialidades, fortalecer valores e contribuir para a formação de pessoas preparadas para os desafios da vida.</p><Link to="/sobre" className="link-arrow mt-7">Conheça nossa história <ArrowRight size={18}/></Link></div>
    </section>
    <section className="bg-soft py-20 lg:py-24"><div className="section-wrap"><div className="mx-auto max-w-2xl text-center"><p className="eyebrow">O QUE NOS MOVE</p><h2 className="section-title">Uma escola que cresce junto com cada estudante.</h2><p className="mt-4 leading-7 text-muted-foreground">Uma experiência educativa construída com cuidado, intencionalidade e compromisso.</p></div><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{destaques.map(({icon:Icon,title,text})=><article key={title} className="feature-card"><span className="icon-bubble"><Icon size={25}/></span><h3 className="mt-5 font-display text-xl font-bold text-primary">{title}</h3><p className="mt-3 leading-7 text-muted-foreground">{text}</p></article>)}</div></div></section>
    <section className="section-wrap py-20 lg:py-24"><div className="flex flex-wrap items-end justify-between gap-6"><div className="max-w-2xl"><p className="eyebrow">APRENDER FAZENDO</p><h2 className="section-title">Vivências que ensinam e momentos que ficam.</h2><p className="mt-4 leading-7 text-muted-foreground">Projetos, experiências e atividades que tornam a aprendizagem significativa.</p></div><Link to="/vivencias" className="link-arrow">Ver nossas vivências <ArrowRight size={18}/></Link></div><div className="mt-10 grid gap-6 md:grid-cols-3">{vivencias.map(v=><article key={v.title} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"><img src={v.image} alt="" className="h-56 w-full object-cover"/><div className="p-6"><h3 className="font-display text-xl font-bold text-primary">{v.title}</h3><p className="mt-3 leading-7 text-muted-foreground">{v.text}</p></div></article>)}</div></section>
    <section className="bg-primary py-20 text-white"><div className="section-wrap grid items-center gap-8 lg:grid-cols-[1fr_auto]"><div><p className="eyebrow text-accent">VENHA NOS CONHECER</p><h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">O próximo capítulo da história do seu filho começa aqui.</h2><p className="mt-5 max-w-2xl leading-8 text-white/80">Entre em contato com nossa equipe e descubra uma escola preparada para acolher, ensinar e acompanhar cada etapa do desenvolvimento.</p></div><Link to="/contato" className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 font-extrabold text-accent-foreground">Fale sobre matrículas <ArrowRight size={18}/></Link></div></section>
  </SiteLayout>;
}
