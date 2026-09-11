import { MessageCircle, Sparkles, Instagram, Facebook } from "lucide-react"
import { WHATSAPP_URL } from "@/lib/constants"
import { Reveal } from "@/components/reveal"

const canales = [
  { icon: MessageCircle, label: "WhatsApp", color: "text-emerald-500" },
  { icon: Instagram, label: "Instagram", color: "text-pink-500" },
  { icon: Facebook, label: "Facebook", color: "text-blue-500" },
]

const puntos = [
  "Todos los leads de tus campañas caen en un solo CRM",
  "Ves de qué canal (IG, WA, FB, Google) viene cada uno",
  "Estadística de conversión por canal para saber qué campaña rinde",
  "Nunca más un mensaje sin responder ni un lead perdido",
  "Se conecta con las campañas publicitarias que ya tenés activas",
]

export function MarketingModuleSection() {
  return (
    <section id="marketing" className="bg-navy py-20 text-white sm:py-24 dark:bg-card">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-electric/40 bg-electric/10 px-3 py-1 font-mono text-xs font-medium text-electric">
              <Sparkles className="size-3.5" aria-hidden="true" />
              Módulo aparte · Opcional
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Módulo de Marketing y Leads
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-4 text-lg leading-relaxed text-silver">
              Si tenés campañas publicitarias activas (Meta Ads, Google Ads,
              Instagram), este módulo centraliza todos tus leads en un solo
              lugar y te muestra por dónde te está entrando el trabajo.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
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
            <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium">
              <span className="text-orange-400">G</span> Google
            </div>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {puntos.map((p) => (
              <div
                key={p}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <div className="mt-1 size-2 shrink-0 rounded-full bg-electric" />
                <span className="text-sm leading-relaxed text-silver">{p}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-10 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
                <Sparkles className="size-6" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-lg font-semibold text-white">
                  Importante: no viene incluido en los $54.000/mes
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-silver">
                  Este módulo se cobra aparte porque hay que configurarlo a
                  medida para cada taller (conectar tus cuentas de Meta,
                  Google, WhatsApp Business). El precio depende de las
                  integraciones que necesites.
                </p>
                <p className="mt-3 text-sm text-silver/80">
                  <b>Si te interesa</b>, escribinos por WhatsApp y te mandamos
                  un video explicativo del módulo + presupuesto ajustado a tu
                  caso.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-whatsapp px-5 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  Consultar por el módulo de Marketing
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
