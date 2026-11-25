import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

const SITE_URL = (import.meta.env["VITE_SITE_URL"]?.trim() || "https://institutogi.vercel.app").replace(/\\/+$/, "");

const organizationSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["School", "EducationalOrganization"],
      "@id": `${SITE_URL}/#school`,
      name: "Instituto Educacional G.I.",
      alternateName: "Instituto G.I.",
      description: "Educação que acolhe, ensina e transforma vidas. Educação Infantil, Ensino Fundamental e Ensino Integral em João Pessoa, Paraíba.",
      url: SITE_URL,
      logo: `${SITE_URL}/logo-gi.svg`,
      image: `${SITE_URL}/imagens/Fachada%20Escolar%20Azul%20e%20Amarela.webp`,
      telephone: "+55-83-2182-5088",
      email: "institutoeducacionalgi@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Avenida Floriano Peixoto, 230 - Jaguaribe",
        addressLocality: "João Pessoa",
        addressRegion: "PB",
        addressCountry: "BR"
      },
      areaServed: {
        "@type": "City",
        name: "João Pessoa"
      },
      sameAs: [
        "https://www.instagram.com/institutoeducacionalgi/"
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+55-83-99420-0019",
          contactType: "Atendimento ao público",
          email: "institutoeducacionalgi@gmail.com",
          availableLanguage: "Portuguese"
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Instituto Educacional G.I.",
      inLanguage: "pt-BR",
      publisher: {
        "@id": `${SITE_URL}/#school`
      }
    }
  ]
});

function NotFoundComponent() {
  return <div className="flex min-h-screen items-center justify-center bg-background px-4"><div className="max-w-md text-center"><h1 className="text-7xl font-bold text-primary">404</h1><h2 className="mt-4 text-xl font-semibold text-primary">Página não encontrada</h2><p className="mt-2 text-sm text-muted-foreground">A página que você procura não existe ou foi movida.</p><div className="mt-6"><Link to="/" className="inline-flex items-center rounded-full bg-primary px-5 py-3 text-sm font-bold text-white">Voltar ao início</Link></div></div></div>;
}
function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error); const router=useRouter();
  useEffect(()=>{reportLovableError(error,{boundary:"tanstack_root_error_component"});},[error]);
  return <div className="flex min-h-screen items-center justify-center bg-background px-4"><div className="max-w-md text-center"><h1 className="text-xl font-semibold text-primary">Não foi possível carregar esta página.</h1><p className="mt-2 text-sm text-muted-foreground">Tente novamente ou volte para a página inicial.</p><div className="mt-6 flex justify-center gap-2"><button onClick={()=>{router.invalidate();reset();}} className="rounded-full bg-primary px-5 py-2 text-sm font-bold text-white">Tentar novamente</button><a href="/" className="rounded-full border px-5 py-2 text-sm font-bold text-primary">Início</a></div></div></div>;
}
export const Route=createRootRouteWithContext<{queryClient:QueryClient}>()({
  head:()=>({meta:[{charSet:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{title:"Instituto Educacional G.I. | Educação que acolhe e transforma"},{name:"description",content:"Conheça o Instituto Educacional G.I., sua proposta educativa, Educação Infantil e Anos Iniciais."},{name:"theme-color",content:"#012969"},{property:"og:type",content:"website"},{property:"og:site_name",content:"Instituto Educacional G.I."},{name:"twitter:card",content:"summary_large_image"}],links:[{rel:"stylesheet",href:appCss},{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Dancing+Script:wght@400;500;600;700&display=swap"},{rel:"icon",href:"/favicon.svg",type:"image/svg+xml"}]}),
  shellComponent:RootShell,component:RootComponent,notFoundComponent:NotFoundComponent,errorComponent:ErrorComponent,
});
function RootShell({children}:{children:ReactNode}){return <html lang="pt-BR"><head><script dangerouslySetInnerHTML={{ __html: `document.documentElement.classList.add("gi-first-visit");` }}/><HeadContent/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: organizationSchema }}/></head><body>{children}<Scripts/></body></html>;}
function RootComponent(){const {queryClient}=Route.useRouteContext();return <QueryClientProvider client={queryClient}><Outlet/></QueryClientProvider>;}
