import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { Menu, X, Instagram, Phone, MapPin, ArrowUpRight, Mail } from "lucide-react";
import { institutionalConfig } from "@/data/institutional";

const links = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Nossa escola" },
  { to: "/ensino", label: "Ensino" },
  { to: "/vivencias", label: "Vivências" },
  { to: "/ensino-integral", label: "Ensino Integral" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteLayout({ children, transparentHeader = false }: { children: ReactNode; transparentHeader?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    const main = document.querySelector(".site-main");
    if (!main) return;

    const horizontalCarousels = ".experience-carousel, .school-segments-grid, .structure-carousel";
    const candidates = Array.from(main.querySelectorAll<HTMLElement>(
      [
        "section > div",
        "section > article",
        "section > figure",
        "section > header",
        "section > div > *",
        "section .section-wrap > *",
        "section article",
        "section figure",
        "section [class*='-card']",
        "section .feature-card",
        "section .mission-paper-card",
        "section .mission-vision-card",
        "section .testimonial-card",
        "section .integral-card",
        "section .experience-card",
        "section .bilingual-segment-note",
        "section .gallery-button",
        ".page-hero__content",
        ".school-page-hero > .relative",
      ].join(", ")
    )).filter((element) =>
      !element.closest(".learning-words-section") &&
      !element.closest(horizontalCarousels) &&
      !element.matches(horizontalCarousels)
    );

    // Revela blocos e cards em todos os formatos de seção, sem animar
    // simultaneamente um contêiner e seus descendentes.
    const cardSelector = [
      "article", "figure", "[class*='-card']", ".feature-card",
      ".mission-paper-card", ".mission-vision-card", ".testimonial-card",
      ".integral-card", ".experience-card", ".bilingual-segment-note",
      ".gallery-button",
    ].join(", ");
    const eligibleCandidates = candidates.filter((element) => {
      const containsCards = element.querySelector(cardSelector) !== null;
      const isCard = element.matches(cardSelector);
      return !containsCards || isCard;
    });
    // Mantém somente o nível mais externo de cada bloco elegível.
    // Assim, um mesmo conteúdo nunca recebe dois reveals em elementos aninhados.
    const targets = eligibleCandidates.filter((element) =>
      !eligibleCandidates.some((other) => other !== element && other.contains(element))
    );

    const sectionIndexes = new Map<Element, number>();
    targets.forEach((element) => {
      const section = element.closest("section") ?? main;
      const index = sectionIndexes.get(section) ?? 0;
      sectionIndexes.set(section, index + 1);
      element.setAttribute("data-scroll-reveal", "");
      element.classList.remove("is-visible");
      element.style.setProperty("--reveal-delay", `${(index % 4) * 95}ms`);
    });

    if (!("IntersectionObserver" in window)) {
      targets.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -7% 0px" });

    targets.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);

  // A navegação começa sempre no topo. O banner mantém seu fundo institucional
  // visível enquanto a imagem é carregada, sem ocultar toda a página.
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 36);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, [pathname]);

  // O mesmo header transparente no topo e branco após a rolagem em todas as rotas.
  const compactHeader = scrolled || menuOpen;
  const headerClass = `site-header site-header--overlay fixed inset-x-0 top-0 z-50 ${compactHeader ? "is-scrolled" : ""} ${menuOpen ? "is-menu-open" : ""}`;

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className={headerClass}>
        <div className={`mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 transition-all duration-300 lg:px-8 ${compactHeader ? "py-1.5" : "py-3"}`}>
          <Link to="/" className={`flex shrink-0 items-center justify-start transition-all duration-300 ${compactHeader ? "h-16 w-20 sm:h-16 sm:w-20 2xl:h-24 2xl:w-24" : "h-32 w-36 sm:h-24 sm:w-28 2xl:h-40 2xl:w-40"}`} onClick={(event) => { setMenuOpen(false); if (pathname === "/") { event.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); } }}>
            <img src="/imagens/logo-gi.svg" alt="Instituto Educacional G.I." className={`object-contain transition-all duration-300 ${compactHeader ? "h-16 w-16 sm:h-16 sm:w-16 2xl:h-24 2xl:w-24" : "h-32 w-32 sm:h-24 sm:w-24 2xl:h-40 2xl:w-40"}`} />
          </Link>
          <nav className="hidden items-center gap-4 2xl:flex" aria-label="Navegação principal">
            {links.map(({ to, label }) => <Link key={to} to={to} onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "auto" })} className="nav-link" activeProps={{ className: "nav-link nav-link-active" }} activeOptions={{ exact: true }}>{label}</Link>)}
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/contato" className="header-cta hidden rounded-full bg-accent px-5 py-3 text-sm font-extrabold text-accent-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-md md:inline-flex">Faça sua matrícula</Link>
            <button className="header-menu rounded-xl border border-border p-2 text-primary 2xl:hidden" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
          </div>
        </div>
        <nav className={`mobile-menu-panel 2xl:hidden ${menuOpen ? "is-open" : ""}`} aria-label="Menu móvel" aria-hidden={!menuOpen}>{links.map(l => <Link key={l.to} to={l.to} onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, left: 0, behavior: "auto" }); }} className="block rounded-lg px-3 py-3 font-semibold text-primary hover:bg-secondary">{l.label}</Link>)}<Link to="/contato" onClick={() => setMenuOpen(false)} className="mt-2 block rounded-full bg-accent px-4 py-3 text-center font-bold text-accent-foreground">Faça sua matrícula</Link></nav>
      </header>
      <main key={pathname} className="site-main page-transition-enter flex-1">{children}</main>
      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 lg:px-8">
          <div><div className="flex items-center gap-3"><img src="/imagens/logo-gi.svg" alt="Logotipo do Instituto Educacional G.I." className="h-14 w-14 object-contain"/><span className="font-display text-xl font-bold">Instituto Educacional G.I.</span></div><p className="mt-4 max-w-sm text-sm leading-7 text-white/80">Educação que acolhe, ensina e transforma vidas. Uma jornada de descobertas, conhecimento e desenvolvimento.</p></div>
          <div><h2 className="font-display text-lg font-bold text-accent">Navegue</h2><div className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/85">{links.map(l=><Link key={l.to} to={l.to} className="hover:text-accent">{l.label}</Link>)}</div></div>
          <div><h2 className="font-display text-lg font-bold text-accent">Fale com a escola</h2><p className="mt-4 flex items-center gap-2 text-sm text-white/85"><Phone size={16}/> {institutionalConfig.phone || "Telefone e WhatsApp: em atualização"}</p><p className="mt-3 flex items-center gap-2 text-sm text-white/85"><MapPin size={16}/> {institutionalConfig.address || "Endereço: em atualização"}</p><p className="mt-3 flex items-center gap-2 text-sm text-white/85"><Mail size={16}/> {institutionalConfig.email || "E-mail: em atualização"}</p><p className="mt-3 flex items-center gap-2 text-sm text-white/85"><Instagram size={16}/> {institutionalConfig.instagram || "Instagram: em atualização"}</p><Link to="/contato" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline">Entre em contato <ArrowUpRight size={15}/></Link></div>
        </div>
        <div className="border-t border-white/15 px-5 py-4 text-center text-xs text-white/65">© {new Date().getFullYear()} Instituto Educacional G.I. — Todos os direitos reservados.</div>
      </footer>
    </div>
  );
}

export function PageHeader({ title, intro, eyebrow = "INSTITUTO EDUCACIONAL G.I.", className = "" }: { title: ReactNode; intro: string; eyebrow?: string; className?: string }) {
  return <section className={`page-hero ${className}`}><div className="page-hero__content mx-auto max-w-7xl px-5 pt-36 pb-16 lg:px-8 lg:pt-44 lg:pb-20"><p className="mb-4 text-xs font-extrabold tracking-[.22em] text-accent">{eyebrow}</p><h1 className="max-w-4xl font-display text-4xl font-bold leading-tight text-white md:text-6xl">{title}</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">{intro}</p></div><span className="absolute bottom-4 right-5 z-10 rounded-full bg-black/35 px-3 py-1 text-[10px] font-medium text-white/85">Imagem ilustrativa</span></section>;
}
