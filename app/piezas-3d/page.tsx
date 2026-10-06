import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Box,
  Camera,
  Check,
  Cog,
  Droplets,
  Layers,
  MessageCircle,
  Printer,
  Ruler,
  Thermometer,
  Wrench,
} from "lucide-react"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/reveal"
import { WhatsAppFloatButton } from "@/components/whatsapp-float-button"
import {
  PIEZAS_WHATSAPP_URL,
  PROPIEDADES_NOTA,
  faqs3d,
  pasos3d,
  propiedades3d,
  queMandar,
  servicios3d,
} from "@/lib/piezas3d"

const SITE = "https://www.linkia.com.ar"
const PAGE_URL = `${SITE}/piezas-3d`
const OG = `${SITE}/images/piezas-3d-hero.webp`

export const metadata: Metadata = {
  title: "Piezas 3D a medida para talleres | Nylon con fibra de carbono | LINKIA",
  description:
    "Diseño e impresión 3D de piezas a medida para talleres mecánicos: bridas para mariposas, soportes para rampas de inyección y sensores, adaptadores, plantillas y útiles. Nylon reforzado con fibra de carbono. Mandanos fotos o plano y te cotizamos sin compromiso. Envíos a todo el país.",
  keywords: [
    "impresión 3d piezas automotriz",
    "piezas 3d a medida taller mecánico",
    "brida mariposa impresa 3d",
    "soporte rampa inyección 3d",
    "nylon fibra de carbono impresión 3d",
    "adaptador admisión a medida",
    "impresión 3d buenos aires talleres",
    "linkia piezas 3d",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: PAGE_URL,
    siteName: "LINKIA",
    title: "Piezas 3D a medida para talleres · LINKIA",
    description:
      "¿No conseguís esa pieza? La diseñamos y la imprimimos en nylon con fibra de carbono. Bridas, soportes, adaptadores y útiles de taller. Cotización sin compromiso.",
    images: [{ url: OG, width: 1122, height: 1402, alt: "Piezas impresas en 3D para talleres" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Piezas 3D a medida para talleres · LINKIA",
    description:
      "Bridas, soportes, adaptadores y útiles de taller impresos en nylon con fibra de carbono. Mandanos fotos o plano y te cotizamos.",
    images: [OG],
  },
}

const iconosServicio = [Box, Wrench, Cog]
const iconosPropiedad = [Layers, Ruler, Thermometer, Droplets]

export default function Piezas3dPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Piezas 3D a medida para talleres",
        serviceType: "Diseño e impresión 3D de piezas a medida",
        description:
          "Diseño e impresión 3D de piezas a medida para talleres mecánicos en nylon reforzado con fibra de carbono: bridas para mariposas, soportes para rampas de inyección y sensores, adaptadores, plantillas y útiles de taller.",
        url: PAGE_URL,
        image: OG,
        provider: { "@id": `${SITE}/#organization` },
        areaServed: { "@type": "Country", name: "Argentina" },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: PIEZAS_WHATSAPP_URL,
          availableLanguage: "es",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs3d.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: SITE },
          { "@type": "ListItem", position: 2, name: "Piezas 3D a medida", item: PAGE_URL },
        ],
      },
    ],
  }

  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteNav />
      <main className="flex-1">
        {/* ============ HERO ============ */}
        <section id="piezas-hero" className="relative overflow-hidden bg-background">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_70%_20%,rgba(0,163,255,0.14),transparent)]" />
          <div className="mx-auto grid max-w-6xl gap-12 px-4 pt-12 pb-16 sm:px-6 md:grid-cols-[1.15fr_1fr] md:items-center md:pt-16 md:pb-24 lg:px-8">
            <div className="flex flex-col gap-6">
              <nav aria-label="Migas de pan" className="font-mono text-xs text-muted-foreground">
                <Link href="/" className="hover:text-brand">Inicio</Link>
                <span className="mx-2">/</span>
                <span>Piezas 3D a medida</span>
              </nav>
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-3 py-1 font-mono text-xs font-medium text-brand">
                <Printer className="size-3.5" aria-hidden="true" />
                Diseño e impresión 3D para talleres
              </span>
              <h1 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-navy sm:text-5xl dark:text-foreground">
                ¿No conseguís esa pieza?{" "}
                <span className="text-brand">La hacemos a medida.</span>
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                Bridas para mariposas, soportes para rampas de inyección y sensores, adaptadores,
                plantillas y útiles de taller. Diseñados para tu caso e impresos en{" "}
                <strong className="text-foreground">nylon reforzado con fibra de carbono</strong>.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={PIEZAS_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105"
                >
                  <MessageCircle className="size-5" aria-hidden="true" />
                  Pedí tu cotización por WhatsApp
                </a>
                <a href="#como-funciona" className="text-sm font-semibold text-navy underline-offset-4 hover:underline dark:text-foreground">
                  Cómo funciona
                </a>
              </div>
              <p className="font-mono text-xs text-muted-foreground">
                Cotización sin compromiso · Retiro en Monte Grande o envío a todo el país
              </p>
            </div>
            <Reveal>
              <div className="mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-border bg-black shadow-2xl md:max-w-none">
                <Image
                  src="/images/piezas-3d-hero.webp"
                  alt="Bridas, rampa de inyección y adaptadores impresos en 3D en nylon con fibra de carbono sobre la mesa de un taller"
                  width={1122}
                  height={1402}
                  priority
                  className="h-auto w-full"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ QUÉ HACEMOS ============ */}
        <section id="que-hacemos" className="border-t border-border bg-muted/40 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl dark:text-foreground">
                Qué piezas hacemos
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Pensado para el día a día del taller: lo que no se consigue, lo que viene roto y no
                se vende suelto, o lo que directamente no existe.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {servicios3d.map((s, i) => {
                const Icon = iconosServicio[i] ?? Box
                return (
                  <Reveal key={s.titulo}>
                    <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm">
                      <div className="flex size-11 items-center justify-center rounded-xl bg-electric/10 text-brand">
                        <Icon className="size-6" aria-hidden="true" />
                      </div>
                      <h3 className="mt-4 font-heading text-xl font-bold text-navy dark:text-foreground">{s.titulo}</h3>
                      <p className="mt-1 text-muted-foreground">{s.desc}</p>
                      <ul className="mt-4 space-y-2">
                        {s.ejemplos.map((e) => (
                          <li key={e} className="flex items-start gap-2 text-sm">
                            <Check className="mt-0.5 size-4 shrink-0 text-emerald-500" aria-hidden="true" />
                            <span>{e}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* ============ MATERIAL ============ */}
        <section id="material" className="bg-background py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-[1fr_1fr] lg:px-8">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-border bg-black shadow-xl">
                <Image
                  src="/images/piezas-3d-detalle.webp"
                  alt="Detalle de piezas impresas en nylon con fibra de carbono: brida, rampa con soportes y plantilla de taller"
                  width={1122}
                  height={1402}
                  className="h-auto w-full"
                />
              </div>
            </Reveal>
            <Reveal>
              <span className="font-mono text-xs font-medium uppercase tracking-wider text-brand">Material</span>
              <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl dark:text-foreground">
                Nylon reforzado con fibra de carbono
              </h2>
              <p className="mt-3 text-muted-foreground">
                Es el material que usamos por defecto para piezas funcionales. Según la pieza y el
                uso, evaluamos otras opciones y te lo indicamos en la cotización.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {propiedades3d.map((p, i) => {
                  const Icon = iconosPropiedad[i] ?? Layers
                  return (
                    <div key={p.titulo} className="rounded-2xl border border-border bg-card p-4">
                      <div className="flex items-center gap-2 text-brand">
                        <Icon className="size-5" aria-hidden="true" />
                        <span className="font-heading text-sm font-bold text-navy dark:text-foreground">
                          {p.titulo}
                          {p.nota ? "*" : ""}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                    </div>
                  )
                })}
              </div>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">* {PROPIEDADES_NOTA}</p>
            </Reveal>
          </div>
        </section>

        {/* ============ CÓMO FUNCIONA ============ */}
        <section id="como-funciona" className="border-t border-border bg-muted/40 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl dark:text-foreground">
                Cómo funciona
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">Tres pasos, todo por WhatsApp.</p>
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {pasos3d.map((p, i) => (
                <Reveal key={p.t}>
                  <div className="h-full rounded-2xl border border-border bg-card p-6">
                    <div className="flex size-10 items-center justify-center rounded-full bg-navy font-heading text-lg font-bold text-white dark:bg-electric">
                      {i + 1}
                    </div>
                    <h3 className="mt-4 font-heading text-lg font-bold text-navy dark:text-foreground">{p.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="mt-10 grid gap-6 rounded-3xl border border-border bg-card p-6 sm:p-8 md:grid-cols-[auto_1fr] md:items-start">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-electric/10 text-brand">
                  <Camera className="size-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy dark:text-foreground">
                    Qué mandarnos para cotizar más rápido
                  </h3>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {queMandar.map((q) => (
                      <li key={q} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 size-4 shrink-0 text-emerald-500" aria-hidden="true" />
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={PIEZAS_WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:scale-105"
                  >
                    <MessageCircle className="size-4" aria-hidden="true" />
                    Mandar fotos y medidas por WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section id="faq" className="bg-background py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl dark:text-foreground">
                Preguntas frecuentes
              </h2>
            </Reveal>
            <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card">
              {faqs3d.map((f) => (
                <details key={f.q} className="group p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base font-semibold text-navy dark:text-foreground">
                    {f.q}
                    <ArrowRight className="size-4 shrink-0 transition-transform group-open:rotate-90" aria-hidden="true" />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CTA FINAL ============ */}
        <section className="border-t border-border bg-navy py-16 text-white sm:py-20 dark:bg-card">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                Mandanos tu idea, plano o muestra
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-white/80">
                Te respondemos si se puede hacer, con precio y plazo estimado. Sin compromiso.
              </p>
              <a
                href={PIEZAS_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-whatsapp px-7 py-4 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105"
              >
                <MessageCircle className="size-5" aria-hidden="true" />
                Pedí tu cotización
              </a>
              <p className="mt-6 text-sm text-white/60">
                ¿Buscás el sistema de gestión para tu taller?{" "}
                <Link href="/" className="font-semibold text-white underline-offset-4 hover:underline">
                  Conocé LINKIA
                </Link>
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFloatButton href={PIEZAS_WHATSAPP_URL} />
    </div>
  )
}
