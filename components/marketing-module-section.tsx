import Image from "next/image"
import { ArrowUpRight, Megaphone, Instagram, Facebook, MessageCircle, Camera, TrendingUp, Handshake } from "lucide-react"
import { Reveal } from "@/components/reveal"

const CONDIMENTO_URL = "https://condimentomkt.com"

const canales = [
  { icon: Instagram, label: "Instagram", color: "text-pink-500" },
  { icon: MessageCircle, label: "WhatsApp", color: "text-emerald-500" },
  { icon: Facebook, label: "Facebook", color: "text-blue-500" },
  { icon: Camera, label: "Contenido audiovisual", color: "text-orange-500" },
]

const beneficios = [
  {
    icon: Megaphone,
    title: "Manejo de redes y campañas",
    desc: "Instagram, Facebook, Google Ads. Publicidad segmentada para que más autos entren a tu taller.",
  },
  {
    icon: Camera,
    title: "Contenido audiovisual",
    desc: "Reels, fotos y videos profesionales del taller para que tu marca se vea seria y confiable.",
  },
  {
    icon: TrendingUp,
    title: "Estrategia de crecimiento",
    desc: "Analizan qué canales te rinden más y ajustan la campaña para que cada peso invertido vuelva multiplicado.",
  },
]

export function MarketingModuleSection() {
  return (
    <section id="marketing" className="bg-navy py-20 text-white sm:py-24 dark:bg-card">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/40 bg-orange-400/10 px-3 py-1 font-mono text-xs font-medium text-orange-300">
              <Handshake className="size-3.5" aria-hidden="true" />
              Servicio aliado · Se contrata aparte
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              ¿Querés que entre más trabajo al taller?
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-4 text-lg leading-relaxed text-silver">
              LINKIA te ordena por dentro. Para conseguir más clientes por
              afuera trabajamos con <b className="text-white">Condimento</b>,
              agencia de marketing digital especializada en pymes
              argentinas.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {canales.map((c) => {
              const Icon = c.icon
              return (
                <div
                  key={c.label}
                  className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium"
                >
                  <Icon className={`size-4 ${c.color}`} aria-hidden="true" />
                  {c.label}
                </div>
              )
            })}
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {beneficios.map((b) => {
              const Icon = b.icon
              return (
                <div
                  key={b.title}
                  className="flex flex-col gap-3 rounded-xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex size-10 items-center justify-center rounded-lg bg-orange-500/20 text-orange-400">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-white">
                    {b.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-silver">
                    {b.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-orange-500/10 via-white/5 to-transparent p-6 sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-4">
                  <div className="relative size-16 shrink-0 overflow-hidden rounded-2xl shadow-lg ring-1 ring-white/10">
                    <Image
                      src="/partners/condimento-icon.png"
                      alt="Logo de Condimento"
                      width={326}
                      height={326}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-heading text-2xl font-bold text-white">
                      Condimento
                    </div>
                    <div className="text-sm text-silver">
                      Marketing 360° para pymes · +8 años potenciando negocios argentinos
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-silver/90">
                  Ellos manejan tus redes, tu publicidad y tu contenido para
                  que más personas te conozcan, te elijan y vuelvan a
                  comprarte. Pedís tu reunión sin cargo y arman un plan a
                  medida.
                </p>
                <p className="mt-3 text-xs text-silver/70">
                  ⚠️ Este servicio se cotiza y contrata directamente con
                  Condimento — no viene incluido en los $54.000/mes de LINKIA.
                </p>
              </div>
              <a
                href={CONDIMENTO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-orange-500 px-6 py-4 text-base font-semibold text-white shadow-[0_10px_30px_rgba(249,115,22,0.35)] transition-transform hover:scale-105 hover:bg-orange-600"
              >
                Ver Condimento
                <ArrowUpRight className="size-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
