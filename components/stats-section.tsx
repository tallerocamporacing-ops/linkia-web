import { Infinity, Clock, ShieldCheck, Wrench } from "lucide-react"
import { Reveal } from "@/components/reveal"

const stats = [
  {
    icon: Wrench,
    numero: "14",
    label: "herramientas incluidas",
    sub: "todo en un solo lugar",
    color: "text-electric",
  },
  {
    icon: Infinity,
    numero: "∞",
    label: "OTs, clientes y vehículos",
    sub: "sin límite de uso",
    color: "text-emerald-500",
  },
  {
    icon: Clock,
    numero: "24h",
    label: "activación desde el pago",
    sub: "listo para usar el mismo día",
    color: "text-amber-500",
  },
  {
    icon: ShieldCheck,
    numero: "100%",
    label: "tus datos son tuyos",
    sub: "backup diario automático",
    color: "text-violet-500",
  },
]

export function StatsSection() {
  return (
    <section className="border-y border-border/60 bg-gradient-to-br from-electric/5 via-background to-cobalt/5 py-14 sm:py-16">
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
                  <div className={`mt-3 font-heading text-4xl font-extrabold sm:text-5xl ${s.color}`}>
                    {s.numero}
                  </div>
                  <div className="mt-1 font-heading text-sm font-semibold text-navy dark:text-foreground">
                    {s.label}
                  </div>
                  <div className="mt-0.5 text-xs text-muted-foreground">
                    {s.sub}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
