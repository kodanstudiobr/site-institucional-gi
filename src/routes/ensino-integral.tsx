import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { Clock3, BookOpen, Users, Sparkles } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";

export const Route = createFileRoute("/ensino-integral")({
  head: () => pageHead("/ensino-integral", {
    title: "Ensino Integral | Instituto Educacional G.I.",
    description: "Conheça a proposta de Ensino Integral do Instituto Educacional G.I. e sua dinâmica.",
    keywords: "Ensino Integral, rotina escolar, aprendizagem, Instituto Educacional G.I.",
  }),
  component: EnsinoIntegral,
});

const eixos = [
  {
    icon: Clock3,
    title: "Organização da rotina",
    text: "Espaço reservado para apresentar como o tempo e os momentos do dia são organizados.",
  },
  {
    icon: BookOpen,
    title: "Experiências de aprendizagem",
    text: "Espaço para detalhar as atividades, propostas pedagógicas e experiências oferecidas.",
  },
  {
    icon: Users,
    title: "Convivência e acompanhamento",
    text: "Espaço para explicar como acontecem a convivência, o cuidado e o acompanhamento dos estudantes.",
  },
];

function EnsinoIntegral() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="ENSINO INTEGRAL"
        title={<>Ensino Integral: aprender em <span className="text-accent">todos os momentos.</span></>}
        intro="Um espaço para conhecer a proposta de Ensino Integral do Instituto Educacional G.I., sua organização e a dinâmica das experiências ao longo do dia."
      />

      <section className="section-wrap section-decor-wrap grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="eyebrow">ENSINO INTEGRAL</p>
          <h2 className="section-title mt-3">Uma jornada de <span className="title-highlight">aprendizagem</span> que vai além da sala de aula.</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Esta página será dedicada a apresentar como funciona o Ensino Integral na escola, explicando sua proposta, a organização da rotina e as experiências que fazem parte dessa jornada.
          </p>
          <p className="mt-4 leading-8 text-muted-foreground">
            O conteúdo detalhado será atualizado posteriormente, com as informações específicas da dinâmica adotada pelo Instituto Educacional G.I.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-[2rem] bg-soft p-8 md:p-12">
          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-accent/50 blur-2xl" />
          <div className="relative flex aspect-[4/3] flex-col items-center justify-center rounded-[1.5rem] border border-primary/10 bg-white text-center shadow-sm">
            <span className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-primary">
              <Sparkles size={32} />
            </span>
            <p className="font-display text-2xl font-bold text-primary">Aprender, conviver e descobrir.</p>
            <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">Imagem e conteúdo institucional serão adicionados nesta área.</p>
          </div>
        </div>
      </section>

      <section className="bg-soft section-decor-wrap py-20 lg:py-24">
        <div className="section-wrap">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">A DINÂMICA DO ENSINO INTEGRAL</p>
            <h2 className="section-title">Como essa jornada <span className="title-highlight">acontece?</span></h2>
            <p className="mt-5 leading-8 text-muted-foreground">
              Esta seção será preenchida com a explicação da rotina e dos momentos que compõem o Ensino Integral na instituição.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {eixos.map(({ icon: Icon, title, text }) => (
              <article key={title} className="feature-card h-full">
                <span className="icon-bubble feature-icon"><Icon size={25} /></span>
                <h3 className="mt-5 font-display text-xl font-bold text-primary">{title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{text}</p>
                <span className="mt-6 inline-flex rounded-full bg-accent/60 px-3 py-1 text-xs font-bold text-primary">Conteúdo a complementar</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap py-20 lg:py-24">
        <div className="mx-auto max-w-3xl rounded-3xl border border-primary/10 bg-white p-8 text-center shadow-sm md:p-12">
          <p className="eyebrow">EM CONSTRUÇÃO</p>
          <h2 className="mt-3 font-display text-2xl font-bold text-primary md:text-3xl">Mais detalhes sobre o Ensino Integral em breve.</h2>
          <p className="mt-4 leading-8 text-muted-foreground">
            A estrutura da página já está preparada. Os textos, horários, atividades e demais informações serão inseridos depois, conforme o conteúdo institucional for definido.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
