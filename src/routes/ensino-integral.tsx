import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import {
  Clock3, CalendarDays, BookOpen, Users, HeartHandshake, Apple, Sparkles,
  Gamepad2, Palette, Music2, BookMarked, Popcorn, Bath,
  Utensils, Sun, GraduationCap, CheckCircle2, Footprints,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/ensino-integral")({
  head: () => pageHead("/ensino-integral", {
    title: "Ensino Integral | Instituto Educacional G.I.",
    description: "Conheça a rotina do Ensino Integral do Instituto Educacional G.I., com acolhimento, aprendizagem, brincadeiras, alimentação e atividades especiais.",
    keywords: "Ensino Integral, rotina escolar, Educação Infantil, Anos Iniciais, Instituto Educacional G.I.",
  }),
  component: EnsinoIntegral,
});

const rotina = [
  { time: "07h15 às 07h30", title: "Chegada e acolhimento", text: "Recepção das crianças em um ambiente acolhedor e seguro.", icon: HeartHandshake },
  { time: "07h30 às 08h40", title: "Desenvolvimento e atividades escolares", text: "Momento dedicado às atividades escolares e às tarefas de casa.", icon: BookOpen },
  { time: "08h40 às 09h10", title: "Lanche da manhã", text: "Pausa para alimentação e renovação das energias.", icon: Apple },
  { time: "09h10 às 10h00", title: "Recreação", text: "Tempo para brincar, interagir e aproveitar atividades recreativas.", icon: Gamepad2 },
  { time: "10h00 às 10h45", title: "Atividade especial", text: "Uma proposta diferente a cada dia da semana.", icon: Sparkles },
  { time: "10h45 às 11h30", title: "Banho e cuidados pessoais", text: "Momento de higiene e cuidado antes do almoço.", icon: Bath },
  { time: "11h30 às 13h00", title: "Almoço, higiene e repouso", text: "Almoço, escovação dos dentes e período de repouso.", icon: Utensils },
  { time: "13h00", title: "Acolhida para as aulas da tarde", text: "Organização e acolhida para o início das aulas regulares.", icon: Sun },
  { time: "13h00 às 17h00", title: "Período de aulas", text: "Continuidade da jornada escolar no turno da tarde.", icon: GraduationCap },
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
      <section className="page-hero school-page-hero">
        <picture>
          <source media="(max-width: 767px)" srcSet="/imagens/Menino-sorridente-no-escorregador-vermelho-_1_.webp" />
          <img className="school-page-hero__image" src="/imagens/Menino-sorridente-no-escorregador-vermelho.webp" alt="" aria-hidden="true" fetchPriority="high" style={{ objectPosition: "center 38%" }} />
        </picture>
        <div className="school-page-hero__overlay" aria-hidden="true" />
        <div className="relative z-[2] mx-auto max-w-7xl px-5 pt-36 pb-16 lg:px-8 lg:pt-44 lg:pb-20">
          <p className="mb-4 text-xs font-extrabold tracking-[.22em] text-accent">ENSINO INTEGRAL</p>
          <h1 className="max-w-4xl font-display text-4xl font-bold leading-tight text-white md:text-6xl">Um dia inteiro de <span className="text-accent">aprendizagem e descobertas.</span></h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90">Uma rotina planejada para unir acolhimento, atividades escolares, brincadeiras, cuidados e experiências especiais ao longo do dia.</p>
        </div>
      </section>

      <section className="section-wrap section-decor-wrap grid items-center gap-10 py-16 lg:grid-cols-2 lg:gap-14 lg:py-24">
        <div>
          <p className="eyebrow">UMA JORNADA COMPLETA</p>
          <h2 className="section-title mt-3">Mais tempo para <span className="title-highlight">aprender e crescer.</span></h2>
        <figure className="integral-feature-image relative lg:hidden h-[430px] overflow-hidden rounded-[2rem] bg-soft shadow-xl sm:h-[520px] lg:h-[620px]">
          <picture className="absolute inset-0 block h-full w-full">
            <source
              media="(min-width: 768px)"
              srcSet="/imagens/Menina%20monta%20palavras%20no%20ch%C3%A3o%20%E5%B9%BF%E7%9B%8A.webp"
            />
            <img
              src="/imagens/Menina%20monta%20palavras%20no%20ch%C3%A3o%20%E5%B9%BF%E7%9B%8A.webp"
              alt="Menina montando palavras no chão durante uma atividade escolar"
              className="integral-feature-image__photo absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: "center 30%" }}
              loading="lazy"
            />
          </picture>
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 via-primary/45 to-transparent px-5 pb-5 pt-16 text-white sm:px-7 sm:pb-7">
            <p className="font-display text-xl font-bold sm:text-2xl">Um dia inteiro de aprendizagem e descobertas.</p>
            <p className="mt-1 text-sm text-white/85">Experiências que fazem parte de cada dia no Ensino Integral.</p>
          </figcaption>
        </figure>
          <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
            O Ensino Integral do Instituto Educacional G.I. é destinado às crianças da <strong className="font-semibold text-primary">Educação Infantil e dos Anos Iniciais</strong>. Ao longo do dia, os estudantes participam de uma rotina que combina atividades escolares, momentos de convivência, recreação, alimentação, higiene e repouso.
          </p>
          <p className="mt-4 leading-8 text-muted-foreground">
            A proposta é oferecer um dia organizado e acolhedor, no qual cada momento tem seu espaço: aprender, brincar, cuidar de si e compartilhar experiências. A rotina combina momentos de aprendizagem, convivência e cuidado para acompanhar as crianças ao longo de todo o dia.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-soft px-4 py-2 text-sm font-semibold text-primary"><Clock3 size={16}/> 07h15 às 17h00</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-soft px-4 py-2 text-sm font-semibold text-primary"><Users size={16}/> Educação Infantil e Anos Iniciais</span>
          </div>
        </div>
        <figure className="integral-feature-image relative hidden lg:block h-[360px] overflow-hidden rounded-[2rem] bg-soft shadow-xl sm:h-[440px] lg:h-[500px]">
          <picture className="absolute inset-0 block h-full w-full">
            <source
              media="(min-width: 768px)"
              srcSet="/imagens/Menina%20monta%20palavras%20no%20ch%C3%A3o%20%E5%B9%BF%E7%9B%8A.webp"
            />
            <img
              src="/imagens/Menina%20monta%20palavras%20no%20ch%C3%A3o%20%E5%B9%BF%E7%9B%8A.webp"
              alt="Menina montando palavras no chão durante uma atividade escolar"
              className="integral-feature-image__photo absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: "center 30%" }}
              loading="lazy"
            />
          </picture>
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 via-primary/45 to-transparent px-5 pb-5 pt-16 text-white sm:px-7 sm:pb-7">
            <p className="font-display text-xl font-bold sm:text-2xl">Um dia inteiro de aprendizagem e descobertas.</p>
            <p className="mt-1 text-sm text-white/85">Experiências que fazem parte de cada dia no Ensino Integral.</p>
          </figcaption>
        </figure>
      </section>

      <section className="bg-soft section-decor-wrap py-16 lg:py-24">
        <div className="section-wrap">
          <div className="mx-auto max-w-3xl text-center">
            <span className="routine-section-icon" aria-hidden="true"><Clock3 size={27}/></span>
            <p className="eyebrow">NOSSO DIA A DIA</p>
            <h2 className="section-title">Como funciona a <span className="title-highlight">rotina?</span></h2>
            <p className="mt-5 leading-7 text-muted-foreground sm:leading-8">Da chegada ao início das aulas da tarde, cada etapa tem um horário e um propósito na jornada das crianças.</p>
          </div>
          <div className="routine-timeline mx-auto mt-10 max-w-4xl sm:mt-14">
            {rotina.map(({time,title,text,icon:Icon},index)=>(
              <article key={title} className="routine-card group">
                <span className="routine-card__node" aria-hidden="true"/>
                <span className="routine-card__progress" aria-hidden="true"/>
                <div className="routine-card__time"><span className="routine-card__number">{String(index+1).padStart(2,"0")}</span><Clock3 size={15}/>{time}</div>
                <span className="routine-card__icon"><Icon size={23}/></span>
                <div className="routine-card__content"><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="routine-section-icon" aria-hidden="true"><CalendarDays size={27}/></span>
          <p className="eyebrow">UM MOMENTO ESPECIAL A CADA DIA</p>
          <h2 className="section-title">Atividades que deixam a semana <span className="title-highlight">mais divertida.</span></h2>
          <p className="mt-5 leading-7 text-muted-foreground sm:leading-8">Além dos momentos que fazem parte da rotina diária, cada dia da semana conta com uma atividade especial.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-5">
          {atividades.map(({day,title,text,icon:Icon},index)=>(
            <article key={day} className="activity-card feature-card flex h-full flex-col rounded-3xl p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <span className="activity-card__icon mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-soft text-primary"><Icon size={24}/></span>
              <p className="text-xs font-extrabold uppercase tracking-wider text-primary/60">{day}</p>
              <h3 className="mt-2 font-display text-lg font-bold text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
              <span className="mt-auto pt-5 text-xs font-bold text-primary/55">Atividade especial {index+1}</span>
            </article>
          ))}
        </div>
      </section>

    </SiteLayout>
  );
}
