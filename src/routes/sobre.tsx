import { canonicalLink } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, HeartHandshake } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";

export const Route = createFileRoute("/sobre")({
  head: () => ({ links: canonicalLink("/sobre"), meta: [{ title: "Nossa escola | Instituto Educacional G.I." }, { name: "description", content: "Conheça a apresentação, missão, visão e valores do Instituto Educacional G.I." }] }),
  component: Sobre,
});

const pillars = [
  { icon: Target, title: "Nossa missão", text: "Promover uma educação de qualidade, oferecendo um ambiente acolhedor e estimulante que favoreça o desenvolvimento integral dos estudantes, valorizando o conhecimento, a formação humana e o respeito às individualidades." },
  { icon: Eye, title: "Nossa visão", text: "Ser reconhecida como uma instituição de ensino comprometida com a excelência educacional, a inovação nas práticas pedagógicas e a formação de cidadãos conscientes, autônomos e preparados para transformar a sociedade." },
];

function Sobre() {
  return <SiteLayout>
    <PageHeader title="Uma escola que acredita no potencial de cada estudante." intro="Conheça a identidade, os princípios e o compromisso educativo do Instituto Educacional G.I."/>
    <section id="apresentacao" className="section-wrap grid items-center gap-12 py-20 lg:grid-cols-2"><img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1100&q=85" alt="Professor acompanhando estudantes em atividade escolar" className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-lg"/><div><p className="eyebrow">APRESENTAÇÃO</p><h2 className="section-title">Educação que acolhe, transforma e prepara para o futuro.</h2><p className="mt-6 text-lg leading-8 text-muted-foreground">O Instituto Educacional G.I. acredita que a educação é um processo construído diariamente, por meio do conhecimento, do respeito, do acolhimento e das experiências vividas no ambiente escolar.</p><p className="mt-4 leading-8 text-muted-foreground">Nossa proposta é oferecer uma educação que valorize cada estudante, incentive suas potencialidades e contribua para a construção de uma trajetória de aprendizagem significativa.</p></div></section>
    <section className="bg-soft py-20"><div className="section-wrap"><div className="mx-auto max-w-2xl text-center"><p className="eyebrow">NOSSA IDENTIDADE</p><h2 className="section-title">Princípios que orientam nossa caminhada.</h2></div><div className="mt-12 grid gap-6 lg:grid-cols-2">{pillars.map(({icon:Icon,title,text})=><article key={title} className="rounded-3xl border border-border bg-white p-8 shadow-sm md:p-10"><span className="icon-bubble"><Icon size={27}/></span><h3 className="mt-6 font-display text-2xl font-bold text-primary">{title}</h3><p className="mt-4 text-base leading-8 text-muted-foreground">{text}</p></article>)}</div><article className="mt-6 rounded-3xl bg-primary p-8 text-white md:p-10"><span className="inline-flex rounded-full bg-accent p-3 text-accent-foreground"><HeartHandshake size={27}/></span><h3 className="mt-6 font-display text-2xl font-bold text-accent">Nossos valores</h3><p className="mt-4 max-w-4xl leading-8 text-white/85">Respeito e valorização das individualidades; ética e responsabilidade; acolhimento e empatia; compromisso com a aprendizagem; inclusão e equidade; cooperação e cidadania; valorização da família e da comunidade.</p></article></div></section>
  </SiteLayout>;
}
