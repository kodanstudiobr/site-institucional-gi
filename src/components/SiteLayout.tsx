import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X, Instagram, Phone, MapPin, ArrowUpRight } from "lucide-react";

const links = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Nossa escola" },
  { to: "/ensino", label: "Ensino" },
  { to: "/estrutura", label: "Estrutura" },
  { to: "/vivencias", label: "Vivências" },
  { to: "/noticias", label: "Notícias" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteLayout({ children, transparentHeader = false }: { children: ReactNode; transparentHeader?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!transparentHeader) return;
    const updateScroll = () => setScrolled(window.scrollY > 36);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, [transparentHeader]);

  const headerClass = transparentHeader
    ? `site-header site-header--overlay fixed inset-x-0 top-0 z-50 ${scrolled ? "is-scrolled" : ""}`
    : "site-header sticky top-0 z-50";

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className={headerClass}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-3 lg:px-8">
          <Link to="/" className="flex shrink-0 items-center gap-3" onClick={() => setMenuOpen(false)}>
            <img src="/logo-gi.svg" alt="Logotipo provisório do Instituto Educacional G.I." className="h-14 w-14 rounded-xl object-cover shadow-sm" />
            <span className="header-brand hidden font-display text-base font-bold leading-tight sm:block">Instituto Educacional<br/><span>G.I.</span></span>
          </Link>
          <nav className="hidden items-center gap-4 2xl:flex" aria-label="Navegação principal">
            {links.map((l) => <Link key={l.to} to={l.to} className="nav-link" activeProps={{ className: "nav-link nav-link-active" }} activeOptions={{ exact: true }}>{l.label}</Link>)}
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/contato" className="header-cta hidden rounded-full bg-primary px-5 py-3 text-sm font-extrabold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md md:inline-flex">Matrículas</Link>
            <button className="header-menu rounded-xl border border-border p-2 text-primary 2xl:hidden" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
          </div>
        </div>
        {menuOpen && <nav className="border-t border-border bg-white px-5 py-4 shadow-lg 2xl:hidden" aria-label="Menu móvel">{links.map(l => <Link key={l.to} to={l.to} onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-3 font-semibold text-primary hover:bg-secondary">{l.label}</Link>)}<Link to="/contato" onClick={() => setMenuOpen(false)} className="mt-2 block rounded-full bg-primary px-4 py-3 text-center font-bold text-white">Matrículas e informações</Link></nav>}
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 lg:px-8">
          <div><div className="flex items-center gap-3"><img src="/logo-gi.svg" alt="" className="h-14 w-14 rounded-xl"/><span className="font-display text-xl font-bold">Instituto Educacional G.I.</span></div><p className="mt-4 max-w-sm text-sm leading-7 text-white/80">Educação que acolhe, ensina e transforma vidas. Uma jornada de descobertas, conhecimento e desenvolvimento.</p></div>
          <div><h2 className="font-display text-lg font-bold text-accent">Navegue</h2><div className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/85">{links.map(l=><Link key={l.to} to={l.to} className="hover:text-accent">{l.label}</Link>)}</div></div>
          <div><h2 className="font-display text-lg font-bold text-accent">Fale com a escola</h2><p className="mt-4 flex items-center gap-2 text-sm text-white/85"><Phone size={16}/> Telefone e WhatsApp: em atualização</p><p className="mt-3 flex items-center gap-2 text-sm text-white/85"><MapPin size={16}/> Endereço: em atualização</p><p className="mt-3 flex items-center gap-2 text-sm text-white/85"><Instagram size={16}/> Instagram: em atualização</p><Link to="/contato" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline">Entre em contato <ArrowUpRight size={15}/></Link></div>
        </div>
        <div className="border-t border-white/15 px-5 py-4 text-center text-xs text-white/65">© {new Date().getFullYear()} Instituto Educacional G.I. — Todos os direitos reservados.</div>
      </footer>
    </div>
  );
}

export function PageHeader({ title, intro, eyebrow = "INSTITUTO EDUCACIONAL G.I." }: { title: string; intro: string; eyebrow?: string }) {
  return <section className="page-hero"><div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20"><p className="mb-4 text-xs font-extrabold tracking-[.22em] text-accent">{eyebrow}</p><h1 className="max-w-4xl font-display text-4xl font-bold leading-tight text-white md:text-6xl">{title}</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">{intro}</p></div></section>;
}
