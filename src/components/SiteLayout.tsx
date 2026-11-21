import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Menu, X, Instagram, Phone, MapPin, ArrowUpRight, Mail } from "lucide-react";
import { institutionalConfig } from "@/data/institutional";

const links = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Nossa escola" },
  { to: "/ensino", label: "Ensino" },
  { to: "/estrutura", label: "Estrutura" },
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

    const candidates = Array.from(main.querySelectorAll<HTMLElement>(
      "section .section-wrap > *, section .section-wrap article, section .integral-cards .integral-card, .page-hero .mx-auto > *"
    )).filter((element) => !element.closest(".learning-words-section"));

    // Evita animar um contêiner inteiro e, ao mesmo tempo, seus próprios cards.
    const targets = candidates.filter((element) => {
      const isContainerOfCards = element.querySelector("article") !== null && !element.matches("article");
      return !isContainerOfCards;
    });

    targets.forEach((element, index) => {
      element.setAttribute("data-scroll-reveal", "");
      element.classList.remove("is-visible");
      element.style.setProperty("--reveal-delay", `${(index % 5) * 100}ms`);
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
    }, { threshold: 0.08, rootMargin: "0px 0px -35px 0px" });

    targets.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
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
          <Link to="/" className={`flex shrink-0 items-center justify-start transition-all duration-300 ${compactHeader ? "h-16 w-20 sm:h-16 sm:w-20 2xl:h-24 2xl:w-24" : "h-28 w-32 sm:h-[4.5rem] sm:w-24 2xl:h-36 2xl:w-36"}`} onClick={() => { setMenuOpen(false); window.setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50); }}>
            <img src="/imagens/logo-gi.svg" alt="Instituto Educacional G.I." className={`object-contain transition-all duration-300 ${compactHeader ? "h-16 w-16 sm:h-16 sm:w-16 2xl:h-24 2xl:w-24" : "h-28 w-28 sm:h-[4.5rem] sm:w-[4.5rem] 2xl:h-36 2xl:w-36"}`} />
          </Link>
          <nav className="hidden items-center gap-4 2xl:flex" aria-label="Navegação principal">
            {links.map(({ to, label }) => <Link key={to} to={to} className="nav-link" activeProps={{ className: "nav-link nav-link-active" }} activeOptions={{ exact: true }}>{label}</Link>)}
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/contato" className="header-cta hidden rounded-full bg-accent px-5 py-3 text-sm font-extrabold text-accent-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-md md:inline-flex">Matrículas</Link>
            <button className="header-menu rounded-xl border border-border p-2 text-primary 2xl:hidden" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
          </div>
        </div>
        <nav className={`mobile-menu-panel 2xl:hidden ${menuOpen ? "is-open" : ""}`} aria-label="Menu móvel" aria-hidden={!menuOpen}>{links.map(l => <Link key={l.to} to={l.to} onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-3 font-semibold text-primary hover:bg-secondary">{l.label}</Link>)}<Link to="/contato" onClick={() => setMenuOpen(false)} className="mt-2 block rounded-full bg-accent px-4 py-3 text-center font-bold text-accent-foreground">Faça sua matrícula</Link></nav>
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

export function PageHeader({ title, intro, eyebrow = "INSTITUTO EDUCACIONAL G.I." }: { title: string; intro: string; eyebrow?: string }) {
  return <section className="page-hero"><div className="mx-auto max-w-7xl px-5 pt-36 pb-16 lg:px-8 lg:pt-44 lg:pb-20"><p className="mb-4 text-xs font-extrabold tracking-[.22em] text-accent">{eyebrow}</p><h1 className="max-w-4xl font-display text-4xl font-bold leading-tight text-white md:text-6xl">{title}</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">{intro}</p></div></section>;
}
