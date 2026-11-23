import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import {
  Clock3, BookOpen, Users, Sparkles, HeartHandshake, Apple,
  Gamepad2, Palette, Music2, BookMarked, Popcorn, Bath,
  Utensils, Sun, GraduationCap, CheckCircle2, Footprints,
} from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";

export const Route = createFileRoute("/ensino-integral")({
  head: () => pageHead("/ensino-integral", {
    title: "Ensino Integral | Instituto Educacional G.I.",
    description: "Conheça a rotina do Ensino Integral do Instituto Educacional G.I., com acolhimento, aprendizagem, brincadeiras, alimentação e atividades especiais.",
    keywords: "Ensino Integral, rotina escolar, Educação Infantil, Anos Iniciais, Instituto Educacional G.I.",
  }),
  component: EnsinoIntegral,
});

const rotina = [
  { time: "07h15 às 07h30", title: "Chegada e acolhimento", text: "Recepção das crianças em um ambiente acolhedor e seguro.", icon: HeartHandshake, color: "blue" },
  { time: "07h30 às 08h40", title: "Desenvolvimento e atividades escolares", text: "Momento dedicado às atividades escolares e às tarefas de casa.", icon: BookOpen, color: "yellow" },
  { time: "08h40 às 09h10", title: "Lanche da manhã", text: "Pausa para alimentação e renovação das energias.", icon: Apple, color: "yellow" },
  { time: "09h10 às 10h00", title: "Recreação", text: "Tempo para brincar, interagir e aproveitar atividades recreativas.", icon: Gamepad2, color: "green" },
  { time: "10h00 às 10h45", title: "Atividade especial", text: "Uma proposta diferente a cada dia da semana.", icon: Sparkles, color: "purple" },
  { time: "10h45 às 11h30", title: "Banho e cuidados pessoais", text: "Momento de higiene e cuidado antes do almoço.", icon: Bath, color: "blue" },
  { time: "11h30 às 13h00", title: "Almoço, higiene e repouso", text: "Almoço, escovação dos dentes e período de repouso.", icon: Utensils, color: "green" },
  { time: "13h00", title: "Acolhida para as aulas da tarde", text: "Organização e acolhida para o início das aulas regulares.", icon: Sun, color: "yellow" },
  { time: "13h00 às 17h00", title: "Período de aulas", text: "Continuidade da jornada escolar no turno da tarde.", icon: GraduationCap, color: "blue" },
];

const atividades = [
  { day: "Segunda-feira", title: "Psicomotricidade", text: "Movimento, coordenação e exploração corporal.", icon: Footprints },
  { day: "Terça-feira", title: "Desenhos e brinquedos", text: "Criatividade, expressão e brincadeiras.", icon: Palette },
  { day: "Quarta-feira", title: "Musicalização", text: "Ritmo, sons e experiências musicais.", icon: Music2 },
  { day: "Quinta-feira", title: "Leitura no parquinho", text: "Histórias e imaginação em um ambiente descontraído.", icon: BookMarked },
  { day: "Sexta-feira", title: "Cineminha com pipoca", text: "Um momento coletivo de entretenimento.", icon: Popcorn },
];

function EnsinoIntegral() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="ENSINO INTEGRAL"
        title={<>Um dia cheio de cuidado, <span className="text-accent">aprendizagem e descobertas.</span></>}
        intro="Uma rotina planejada para unir acolhimento, atividades escolares, brincadeiras, cuidados e experiências especiais ao longo do dia."
      />

      <section className="section-wrap section-decor-wrap grid items-center gap-10 py-16 lg:grid-cols-2 lg:gap-14 lg:py-24">
        <div>
          <p className="eyebrow">UMA JORNADA COMPLETA</p>
          <h2 className="section-title mt-3">Mais tempo para <span className="title-highlight">aprender e crescer.</span></h2>
          <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
            O Ensino Integral do Instituto Educacional G.I. é destinado às crianças da <strong className="font-semibold text-primary">Educação Infantil e dos Anos Iniciais</strong>. Ao longo do dia, os estudantes participam de uma rotina que combina atividades escolares, momentos de convivência, recreação, alimentação, higiene e repouso.
          </p>
          <p className="mt-4 leading-8 text-muted-foreground">
            A proposta é oferecer um dia organizado e acolhedor, no qual cada momento tem seu espaço: aprender, brincar, cuidar de si e compartilhar experiências.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-soft px-4 py-2 text-sm font-semibold text-primary"><Clock3 size={16}/> 07h15 às 17h00</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-soft px-4 py-2 text-sm font-semibold text-primary"><Users size={16}/> Educação Infantil e Anos Iniciais</span>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[2rem] bg-primary p-6 text-white shadow-xl sm:p-9">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/20 blur-2xl"/>
          <div className="relative">
            <span className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-primary"><Sparkles size={28}/></span>
            <p className="text-sm font-bold uppercase tracking-[.16em] text-accent">No tempo integral, seu filho tem</p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {[
                ["Acolhimento e segurança", HeartHandshake],
                ["Aprendizagem significativa", BookOpen],
                ["Brincadeiras e interação", Gamepad2],
                ["Alimentação e cuidados", Apple],
                ["Desenvolvimento integral", Sparkles],
              ].map(([label, Icon]) => {
                const ItemIcon = Icon as typeof HeartHandshake;
                return <div key={label as string} className="flex items-center gap-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-accent"><ItemIcon size={21}/></span><span className="text-sm font-semibold leading-5">{label as string}</span></div>;
              })}
            </div>
            <p className="mt-8 border-t border-white/15 pt-5 font-display text-xl font-bold italic text-white sm:text-2xl">Aprender, brincar e crescer juntos!</p>
          </div>
        </div>
      </section>

      <section className="bg-soft section-decor-wrap py-16 lg:py-24">
        <div className="section-wrap">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">NOSSO DIA A DIA</p>
            <h2 className="section-title">Como funciona a <span className="title-highlight">rotina?</span></h2>
            <p className="mt-5 leading-7 text-muted-foreground sm:leading-8">Da chegada ao início das aulas da tarde, cada etapa tem um horário e um propósito na jornada das crianças.</p>
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:mt-14 sm:gap-4">
            {rotina.map(({time,title,text,icon:Icon},index)=>(
              <article key={title} className="group grid gap-3 rounded-2xl border border-primary/10 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md sm:grid-cols-[150px_52px_1fr] sm:items-center sm:gap-5 sm:p-5">
                <div className="flex items-center gap-2 text-sm font-extrabold tabular-nums text-primary sm:block"><Clock3 size={15} className="sm:hidden"/>{time}</div>
                <span className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-soft text-primary sm:flex"><Icon size={23}/></span>
                <div className="flex items-start gap-3 sm:block">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-soft text-primary sm:hidden"><Icon size={19}/></span>
                  <div><h3 className="font-display text-base font-bold text-primary sm:text-lg">{title}</h3><p className="mt-1 text-sm leading-6 text-muted-foreground sm:text-base">{text}</p></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">UM MOMENTO ESPECIAL A CADA DIA</p>
          <h2 className="section-title">Atividades que deixam a semana <span className="title-highlight">mais divertida.</span></h2>
          <p className="mt-5 leading-7 text-muted-foreground sm:leading-8">Além dos momentos que fazem parte da rotina diária, cada dia da semana conta com uma atividade especial.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-5">
          {atividades.map(({day,title,text,icon:Icon},index)=>(
            <article key={day} className="feature-card flex h-full flex-col rounded-3xl p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-soft text-primary"><Icon size={24}/></span>
              <p className="text-xs font-extrabold uppercase tracking-wider text-primary/60">{day}</p>
              <h3 className="mt-2 font-display text-lg font-bold text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
              <span className="mt-auto pt-5 text-xs font-bold text-primary/55">Atividade especial {index+1}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-primary py-14 text-white sm:py-20">
        <div className="section-wrap grid items-center gap-6 lg:grid-cols-[1fr_auto]">
          <div><p className="eyebrow text-accent">INSTITUTO EDUCACIONAL G.I.</p><h2 className="font-display text-2xl font-bold leading-tight sm:text-3xl">Um dia de experiências, cuidado e novas descobertas.</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">No Ensino Integral, a rotina combina momentos de aprendizagem, convivência e cuidado para acompanhar as crianças ao longo do dia.</p></div>
          <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4"><CheckCircle2 className="shrink-0 text-accent" size={27}/><span className="text-sm font-semibold">Aprender, brincar e crescer juntos!</span></div>
        </div>
      </section>
    </SiteLayout>
  );
}
