import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BookOpen,
  Check,
  Clock,
  Gift,
  Layers,
  MessageCircle,
  MonitorPlay,
  ShieldCheck,
  Sparkles,
  Wrench,
  X,
  Zap,
} from "lucide-react"
import { SiteNav } from "@/components/site-nav"
import { InstagramIcon } from "@/components/icons/instagram-icon"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/reveal"
import { Temario } from "@/components/curso/temario"
import { CursoFaq } from "@/components/curso/curso-faq"
import { StickyCta } from "@/components/curso/sticky-cta"
import { WhatsAppFloatButton } from "@/components/whatsapp-float-button"
import { PRICE_ARS_LABEL } from "@/lib/constants"
import {
  BONUS_MESES,
  BONUS_VALOR_LABEL,
  CURSO_CHECKOUT_URL,
  CURSO_CUOTAS,
  CURSO_CUOTA_LABEL,
  CURSO_DUDAS_URL,
  CURSO_HORAS_LABEL,
  CURSO_INSTAGRAM_URL,
  CURSO_MINUTOS,
  CURSO_PRICE_ARS,
  CURSO_PRICE_LABEL,
  CURSO_WHATSAPP_URL,
  VALOR_TOTAL_LABEL,
  cursoFaqs,
  modulos,
} from "@/lib/curso"

const SITE = "https://www.linkia.com.ar"
const PAGE_URL = `${SITE}/curso`
const OG = `${SITE}/images/og-curso.png`

export const metadata: Metadata = {
  title:
    "Curso de Diagnóstico Automotriz online para mecánicos | 5 h + 3 meses de LINKIA gratis",
  description:
    "Curso online de diagnóstico automotriz para mecánicos: multímetro, scanner, osciloscopio, diésel common rail, inmovilizadores y ECU. 11 módulos en video grabados en un taller real. Comprando el curso tenés 3 meses de LINKIA bonificados. Pago en cuotas y garantía de 7 días.",
  keywords: [
    "curso diagnóstico automotriz",
    "curso diagnóstico automotriz online",
    "curso de electrónica automotriz",
    "curso osciloscopio automotriz",
    "curso scanner automotriz",
    "curso inyección electrónica",
    "curso diagnóstico diesel common rail",
    "curso inmovilizadores",
    "curso reparación ECU",
    "curso para mecánicos argentina",
    "capacitación mecánica automotriz",
    "ocampo racing curso",
    "linkia curso",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: PAGE_URL,
    siteName: "LINKIA",
    title: "Curso de Diagnóstico Automotriz + 3 meses de LINKIA gratis",
    description:
      "11 módulos, 5 horas de video grabadas en un taller real: multímetro, scanner, osciloscopio, diésel, inmovilizadores y ECU. Con la compra, 3 meses de LINKIA sin cargo.",
    images: [{ url: OG, width: 1200, height: 630, alt: "Curso de Diagnóstico Automotriz Ocampo Racing + LINKIA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Curso de Diagnóstico Automotriz + 3 meses de LINKIA gratis",
    description:
      "De mecánico a especialista en diagnóstico electrónico. 5 horas de video en un taller real + 3 meses de LINKIA bonificados.",
    images: [OG],
  },
}

const stats = [
  { icon: Clock, numero: CURSO_HORAS_LABEL, label: "de video", sub: `${CURSO_MINUTOS} min editados`, color: "text-electric" },
  { icon: Layers, numero: "11", label: "módulos", sub: "video + PDF cada uno", color: "text-emerald-500" },
  { icon: Gift, numero: `${BONUS_MESES} meses`, label: "de LINKIA gratis", sub: `ahorrás ${BONUS_VALOR_LABEL}`, color: "text-amber-500" },
  { icon: ShieldCheck, numero: "7 días", label: "de garantía", sub: "reembolso total", color: "text-violet-500" },
]

const dolores = [
  {
    antes: "Cambiás la pieza que “seguro es” y la falla sigue.",
    despues: "Medís, confirmás y recién ahí cambiás. Cobrás el diagnóstico.",
  },
  {
    antes: "El scanner tira un código y no sabés si es causa o consecuencia.",
    despues: "Leés datos en vivo y señales en el osciloscopio: ves lo que el código no dice.",
  },
  {
    antes: "Los autos con electrónica “rara” se los derivás a otro.",
    despues: "Diésel, inmovilizadores y ECU pasan a ser trabajos que tomás vos.",
  },
]

const incluye = [
  `${CURSO_HORAS_LABEL} de video en 11 módulos, grabados en el taller sobre autos reales`,
  "Un PDF de material por módulo para tener al lado del banco",
  "Acceso online desde celular o PC, a tu ritmo, sin vencimiento",
  "Casos reales: Peugeot 408 THP, Ford motor Sigma, VW Suran, common rail",
  "Módulo de inteligencia artificial aplicada al taller",
  `${BONUS_MESES} meses de LINKIA con todas las funciones, sin cargo`,
]

const paraQuien = [
  "Mecánicos que trabajan en un taller y quieren tomar trabajos de electrónica",
  "Dueños de taller que quieren dejar de derivar diagnósticos",
  "Técnicos que tienen scanner y multímetro pero sienten que no les sacan el jugo",
  "Quien quiere empezar con osciloscopio y no sabe por dónde",
]

const noEs = [
  "Para quien busca aprender mecánica desde cero (arrancamos desde el taller)",
  "Un curso teórico de facultad: acá se mide, se prueba y se resuelve",
]

const pasosBonus = [
  { t: "Comprás el curso", d: "Pagás en Hotmart en 1 pago o hasta 3 cuotas. Entrás al curso al instante." },
  { t: "Nos mandás el comprobante", d: "Por WhatsApp o email. Con el mismo mail que usaste en Hotmart." },
  { t: "Activamos tu LINKIA", d: `En menos de 24 h hábiles tenés tu cuenta con ${BONUS_MESES} meses bonificados y te ayudamos a cargar tus datos.` },
]

export default function CursoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "@id": `${PAGE_URL}#course`,
        name: "Curso Profesional de Diagnóstico Automotriz",
        description:
          "Curso online de diagnóstico automotriz para mecánicos: electricidad aplicada, multímetro, scanner, osciloscopio, diésel common rail, inmovilizadores, ECU e inteligencia artificial en el taller. 11 módulos en video grabados en un taller real.",
        url: PAGE_URL,
        image: OG,
        inLanguage: "es-AR",
        courseCode: "OR-DIAG",
        educationalLevel: "Intermediate",
        teaches: modulos.map((m) => m.titulo),
        timeRequired: `PT${CURSO_MINUTOS}M`,
        provider: { "@id": `${SITE}/#organization` },
        publisher: { "@id": `${SITE}/#organization` },
        instructor: { "@id": `${PAGE_URL}#instructor` },
        syllabusSections: modulos.map((m) => ({
          "@type": "Syllabus",
          position: m.n,
          name: m.titulo,
          description: m.resumen,
          timeRequired: `PT${m.minutos}M`,
        })),
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "Online",
          courseWorkload: `PT${CURSO_MINUTOS}M`,
          instructor: { "@id": `${PAGE_URL}#instructor` },
        },
        offers: {
          "@type": "Offer",
          url: CURSO_CHECKOUT_URL,
          price: String(CURSO_PRICE_ARS),
          priceCurrency: "ARS",
          category: "Paid",
          availability: "https://schema.org/InStock",
          hasMerchantReturnPolicy: {
            "@type": "MerchantReturnPolicy",
            returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
            merchantReturnDays: 7,
            refundType: "https://schema.org/FullRefund",
          },
        },
      },
      {
        "@type": "Person",
        "@id": `${PAGE_URL}#instructor`,
        name: "Agustín Ocampo",
        jobTitle: "Mecánico especialista en diagnóstico electrónico",
        worksFor: { "@type": "Organization", name: "Ocampo Racing", sameAs: CURSO_INSTAGRAM_URL },
        sameAs: [CURSO_INSTAGRAM_URL],
      },
      {
        "@type": "FAQPage",
        mainEntity: cursoFaqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: SITE },
          { "@type": "ListItem", position: 2, name: "Curso de Diagnóstico Automotriz", item: PAGE_URL },
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
      <main className="flex-1 pb-20 md:pb-0">
        {/* ============ HERO ============ */}
        <section id="curso-hero" className="relative overflow-hidden bg-background">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_70%_20%,rgba(0,163,255,0.14),transparent)]" />
          <div className="mx-auto grid max-w-6xl gap-12 px-4 pt-12 pb-16 sm:px-6 md:grid-cols-[1.15fr_0.85fr] md:items-center md:pt-16 md:pb-24 lg:px-8">
            <div className="flex flex-col gap-6">
              <nav aria-label="Migas de pan" className="font-mono text-xs text-muted-foreground">
                <Link href="/" className="hover:text-brand">Inicio</Link>
                <span className="mx-2">/</span>
                <span>Curso</span>
              </nav>

              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 font-mono text-xs font-medium text-red-600 dark:text-red-400">
                <Wrench className="size-3.5" aria-hidden="true" />
                Curso online · Ocampo Racing × LINKIA
              </span>

              <h1 className="max-w-xl font-heading text-4xl font-bold leading-[1.1] tracking-tight text-navy sm:text-5xl dark:text-foreground">
                De mecánico a{" "}
                <span className="bg-gradient-to-r from-electric to-brand bg-clip-text text-transparent">
                  especialista en diagnóstico
                </span>{" "}
                electrónico
              </h1>

              <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
                Multímetro, scanner, osciloscopio, diésel, inmovilizadores y ECU explicados
                sobre autos reales, en un taller real. {CURSO_HORAS_LABEL} de video para dejar de
                cambiar piezas a ciegas y empezar a cobrar el diagnóstico.
              </p>

              <ul className="grid gap-2 text-sm text-navy sm:grid-cols-2 dark:text-foreground">
                {[
                  "11 módulos en video + PDF por módulo",
                  "Casos reales grabados en el taller",
                  "Online, a tu ritmo, sin vencimiento",
                  `${BONUS_MESES} meses de LINKIA incluidos`,
                ].map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <Check className="size-4 shrink-0 text-electric" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-2 rounded-xl border border-electric/30 bg-electric/5 p-4">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-heading text-4xl font-bold text-navy dark:text-foreground">
                    {CURSO_PRICE_LABEL}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    o {CURSO_CUOTAS} cuotas de {CURSO_CUOTA_LABEL}
                  </span>
                </div>
                <p className="flex items-center gap-2 text-sm font-semibold text-brand">
                  <Gift className="size-4" aria-hidden="true" />
                  Incluye {BONUS_MESES} meses de LINKIA sin cargo (ahorrás {BONUS_VALOR_LABEL})
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={CURSO_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-electric px-6 py-3.5 text-base font-semibold text-white shadow-[0_10px_30px_rgba(0,163,255,0.35)] transition-transform hover:scale-[1.02] hover:bg-brand"
                >
                  Quiero el curso
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
                <a
                  href="#temario"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3.5 text-base font-semibold text-navy transition-colors hover:bg-muted dark:text-foreground"
                >
                  <BookOpen className="size-5" aria-hidden="true" />
                  Ver el temario
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="size-4 shrink-0 text-electric" aria-hidden="true" />
                  Pago seguro en Hotmart
                </span>
                <span>· Garantía de 7 días</span>
                <span>· Acceso inmediato</span>
              </div>
            </div>

            <Reveal delay={150} className="relative mx-auto w-full max-w-sm md:max-w-none">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-red-500/20 via-electric/15 to-transparent blur-2xl" />
              <div className="overflow-hidden rounded-2xl border border-border bg-black shadow-2xl">
                <Image
                  src="/images/curso-or-linkia.webp"
                  alt="Curso Profesional de Diagnóstico Automotriz de Ocampo Racing: diagnóstico, osciloscopio, scanner y casos reales, con LINKIA para profesionalizar tu taller"
                  width={1024}
                  height={1536}
                  priority
                  className="h-auto w-full"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ STATS ============ */}
        <section className="border-y border-border/60 bg-gradient-to-br from-electric/5 via-background to-cobalt/5 py-12 sm:py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
              {stats.map((s, i) => {
                const Icon = s.icon
                return (
                  <Reveal key={s.label} delay={i * 80}>
                    <div className="text-center">
                      <div className={`mx-auto flex size-12 items-center justify-center rounded-2xl bg-card shadow-sm ${s.color}`}>
                        <Icon className="size-6" aria-hidden="true" />
                      </div>
                      <div className={`mt-3 font-heading text-3xl font-extrabold sm:text-4xl ${s.color}`}>
                        {s.numero}
                      </div>
                      <div className="mt-1 font-heading text-sm font-semibold text-navy dark:text-foreground">
                        {s.label}
                      </div>
                      <div className="mt-0.5 text-xs text-muted-foreground">{s.sub}</div>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* ============ DOLOR → RESULTADO ============ */}
        <section className="bg-background py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <Reveal>
                <h2 className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl dark:text-foreground">
                  ¿Te pasa esto en el taller?
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  El problema no es la herramienta. Es el método. Esto es lo que cambia
                  cuando aprendés a diagnosticar como un especialista.
                </p>
              </Reveal>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {dolores.map((d, i) => (
                <Reveal key={d.antes} delay={i * 90}>
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                        <X className="size-3.5" aria-hidden="true" />
                      </span>
                      <p className="text-sm leading-relaxed text-muted-foreground line-through decoration-red-500/40">
                        {d.antes}
                      </p>
                    </div>
                    <div className="my-4 h-px bg-border" />
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                        <Check className="size-3.5" aria-hidden="true" />
                      </span>
                      <p className="font-heading text-base font-semibold text-navy dark:text-foreground">
                        {d.despues}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ BONUS LINKIA ============ */}
        <section id="bonus" className="bg-navy py-20 text-white sm:py-24 dark:bg-card">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-electric/40 bg-electric/15 px-3 py-1 font-mono text-xs font-medium text-electric">
                  <Gift className="size-3.5" aria-hidden="true" />
                  Bonus exclusivo por comprar desde acá
                </span>
                <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                  Aprendés a diagnosticar y{" "}
                  <span className="text-electric">ordenás tu taller</span> en el mismo
                  movimiento
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-silver">
                  Con la compra del curso te damos <strong className="text-white">{BONUS_MESES} meses
                  de LINKIA</strong>, el software de gestión para talleres mecánicos, con todas
                  las funciones y sin cargo. Órdenes de trabajo digitales, presupuestos con
                  firma, portal del cliente, turnos, repuestos y recordatorios de VTV y service.
                </p>
                <ul className="mt-6 flex flex-col gap-3 text-sm">
                  {[
                    `Valor real del bonus: ${BONUS_VALOR_LABEL} (${BONUS_MESES} × ${PRICE_ARS_LABEL})`,
                    "Todas las funciones, usuarios ilimitados, sin tarjeta",
                    "Te ayudamos a cargar clientes y vehículos el primer día",
                    "Al terminar decidís si seguís. Sin permanencia ni cobro automático",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <BadgeCheck className="mt-0.5 size-5 shrink-0 text-electric" aria-hidden="true" />
                      <span className="text-white/90">{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#funciones"
                  className="mt-6 inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-electric hover:underline hover:underline-offset-4"
                >
                  Ver todo lo que hace LINKIA
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Reveal>

              <Reveal delay={120}>
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl">
                  <Image
                    src="/images/linkia-banner-ia.webp"
                    alt="LINKIA, el sistema de gestión para talleres mecánicos con inteligencia artificial: órdenes de trabajo, presupuestos, finanzas, kanban, turnos e historial del auto"
                    width={1536}
                    height={1024}
                    className="h-auto w-full"
                  />
                </div>
                <ol className="mt-6 grid gap-3 sm:grid-cols-3">
                  {pasosBonus.map((p, i) => (
                    <li key={p.t} className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <span className="font-mono text-xs font-bold text-electric">PASO {i + 1}</span>
                      <p className="mt-1 font-heading text-sm font-semibold">{p.t}</p>
                      <p className="mt-1 text-xs leading-relaxed text-silver">{p.d}</p>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ TEMARIO ============ */}
        <section id="temario" className="scroll-mt-20 bg-background py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-3 py-1 font-mono text-xs font-medium text-brand">
                  <MonitorPlay className="size-3.5" aria-hidden="true" />
                  11 módulos · {CURSO_HORAS_LABEL} · video + PDF
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl dark:text-foreground">
                  Temario completo
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Va de la base eléctrica al osciloscopio, la ECU y la inteligencia
                  artificial. Cada módulo termina con algo que podés aplicar mañana en el taller.
                </p>
              </Reveal>
            </div>
            <Temario />
          </div>
        </section>

        {/* ============ INSTRUCTOR ============ */}
        <section className="bg-muted/40 py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="grid items-center gap-8 overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-10 md:grid-cols-[260px_1fr]">
                <div className="mx-auto w-full max-w-[260px]">
                  <div className="overflow-hidden rounded-2xl border border-border bg-black">
                    <Image
                      src="/images/ocampo-racing-logo.jpg"
                      alt="Ocampo Racing, taller de diagnóstico electrónico automotriz"
                      width={1024}
                      height={1024}
                      className="h-auto w-full"
                    />
                  </div>
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-brand">
                    Tu instructor
                  </span>
                  <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-navy dark:text-foreground">
                    Agustín Ocampo
                  </h2>
                  <p className="mt-1 font-heading text-base font-semibold text-muted-foreground">
                    Mecánico especialista en diagnóstico electrónico · Ocampo Racing · Creador de LINKIA
                  </p>
                  <p className="mt-4 leading-relaxed text-foreground/85">
                    Todo lo que ves en el curso está grabado en Ocampo Racing, sobre autos de
                    clientes reales: un Peugeot 408 THP con falla de sensor de fase, un Ford con
                    motor Sigma con problemas de sincronismo, una VW Suran medida por
                    compresión relativa. Nada de simuladores ni pizarrón.
                  </p>
                  <p className="mt-3 leading-relaxed text-foreground/85">
                    Además de diagnosticar, Agustín creó LINKIA para resolver el otro problema
                    del taller: el desorden. Por eso el curso viene con {BONUS_MESES} meses del
                    sistema: aprender a diagnosticar mejor y cobrar mejor van juntos.
                  </p>
                  <a
                    href={CURSO_INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-navy transition-colors hover:bg-muted dark:text-foreground"
                  >
                    <InstagramIcon className="size-4" />
                    @ocampo.racing
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ PARA QUIÉN ============ */}
        <section className="bg-background py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2">
              <Reveal>
                <div className="h-full rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 sm:p-8">
                  <h2 className="flex items-center gap-2 font-heading text-2xl font-bold text-navy dark:text-foreground">
                    <Check className="size-6 text-emerald-600" aria-hidden="true" />
                    Este curso es para vos si…
                  </h2>
                  <ul className="mt-5 flex flex-col gap-3">
                    {paraQuien.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-foreground/85">
                        <Check className="mt-1 size-4 shrink-0 text-emerald-600" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 sm:p-8">
                  <h2 className="flex items-center gap-2 font-heading text-2xl font-bold text-navy dark:text-foreground">
                    <X className="size-6 text-red-500" aria-hidden="true" />
                    No es para vos si…
                  </h2>
                  <ul className="mt-5 flex flex-col gap-3">
                    {noEs.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-muted-foreground">
                        <X className="mt-1 size-4 shrink-0 text-red-500" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 rounded-xl bg-muted/60 p-4 text-sm text-muted-foreground">
                    <Sparkles className="mb-1 size-4 text-brand" aria-hidden="true" />
                    ¿No estás seguro? Escribinos por WhatsApp y te decimos con honestidad si te
                    sirve o no.
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ PRECIO ============ */}
        <section id="precio-curso" className="scroll-mt-20 bg-muted/40 py-20 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <Reveal>
                <h2 className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl dark:text-foreground">
                  Un pago. Dos herramientas para tu taller.
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  El curso se paga con el primer diagnóstico que cobrás en lugar de regalar.
                </p>
              </Reveal>
            </div>

            <Reveal delay={200} className="mx-auto mt-12 max-w-lg">
              <div className="overflow-hidden rounded-2xl border-2 border-electric bg-card shadow-2xl">
                <div className="bg-gradient-to-br from-electric to-brand px-8 py-6 text-center text-white">
                  <p className="font-mono text-sm font-medium uppercase tracking-wide">
                    Curso + {BONUS_MESES} meses de LINKIA
                  </p>
                  <div className="mt-3 flex flex-col items-center gap-1">
                    <span className="text-sm opacity-80">
                      Valor total <span className="line-through">{VALOR_TOTAL_LABEL}</span>
                    </span>
                    <span className="font-heading text-5xl font-bold">{CURSO_PRICE_LABEL}</span>
                    <span className="text-sm font-medium opacity-90">
                      o {CURSO_CUOTAS} cuotas de {CURSO_CUOTA_LABEL} con tarjeta
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-3 p-8">
                  {incluye.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check className="mt-0.5 size-5 shrink-0 text-electric" aria-hidden="true" />
                      <span className="text-base text-navy dark:text-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border bg-muted/30 p-8">
                  <a
                    href={CURSO_CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-electric px-6 py-4 text-lg font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] hover:bg-brand"
                  >
                    Comprar el curso ahora
                    <ArrowRight className="size-5" aria-hidden="true" />
                  </a>
                  <div className="mt-4 flex flex-col items-center gap-1 text-center text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <ShieldCheck className="size-4 text-electric" aria-hidden="true" />
                      Pago seguro en Hotmart · Tarjeta de crédito o débito
                    </span>
                    <span>Garantía de 7 días: si no te sirve, te devolvemos el 100%</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="mx-auto mt-8 flex max-w-lg items-start gap-4 rounded-2xl border border-border bg-card p-5">
                <Award className="size-8 shrink-0 text-amber-500" aria-hidden="true" />
                <div>
                  <p className="font-heading text-base font-semibold text-navy dark:text-foreground">
                    Garantía sin letra chica
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Mirá el curso 7 días. Si sentís que no te suma, pedís el reembolso desde tu
                    cuenta de Hotmart y listo. El riesgo lo corremos nosotros.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section id="faq-curso" className="bg-background py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Reveal>
                <h2 className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl dark:text-foreground">
                  Preguntas frecuentes
                </h2>
              </Reveal>
            </div>
            <CursoFaq />
          </div>
        </section>

        {/* ============ CTA FINAL ============ */}
        <section className="bg-navy py-20 sm:py-24 dark:bg-card">
          <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
            <Zap className="size-10 text-electric" aria-hidden="true" />
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              El próximo auto que entre con una falla eléctrica lo diagnosticás vos
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-silver">
              {CURSO_HORAS_LABEL} de video, 11 módulos, casos reales y {BONUS_MESES} meses de LINKIA
              para ordenar el taller. Empezás hoy mismo.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <a
                href={CURSO_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-electric px-8 py-4 text-lg font-semibold text-white shadow-[0_10px_30px_rgba(0,163,255,0.35)] transition-transform hover:scale-105"
              >
                Quiero el curso por {CURSO_PRICE_LABEL}
                <ArrowRight className="size-5" aria-hidden="true" />
              </a>
              <a
                href={CURSO_DUDAS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                <MessageCircle className="size-5" aria-hidden="true" />
                Tengo una duda
              </a>
            </div>
            <p className="text-sm text-silver/80">
              ¿Ya lo compraste?{" "}
              <a
                href={CURSO_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-electric underline underline-offset-4"
              >
                Activá tus {BONUS_MESES} meses de LINKIA acá
              </a>
            </p>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFloatButton href={CURSO_DUDAS_URL} className="bottom-24 md:bottom-6" />
      <StickyCta />
    </div>
  )
}
