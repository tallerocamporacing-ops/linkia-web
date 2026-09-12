import { CheckCircle2, ChevronRight, Inbox, Search, FileText, ThumbsUp, Wrench, PackageCheck } from "lucide-react"
import { Reveal } from "@/components/reveal"

const stages = [
  { label: "Recibido", color: "bg-slate-500", desc: "El auto entra al taller", icon: Inbox },
  { label: "En diagnóstico", color: "bg-amber-500", desc: "Ves qué tiene", icon: Search },
  { label: "Presupuestado", color: "bg-orange-500", desc: "Le mandás el precio", icon: FileText },
  { label: "Aprobado", color: "bg-blue-500", desc: "El cliente aprueba desde su celular", icon: ThumbsUp },
  { label: "En reparación", color: "bg-violet-500", desc: "Estás trabajando", icon: Wrench },
  { label: "Listo", color: "bg-emerald-500", desc: "Se lo entregás", icon: PackageCheck },
]

export function WorkflowSection() {
  return (
    <section id="flujo" className="bg-muted/40 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-3 py-1 font-mono text-xs font-medium text-brand">
              Flujo del taller
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl dark:text-foreground">
              Cada auto sigue el mismo flujo, siempre
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Sabés en qué etapa está cada vehículo, quién está trabajando en él
              y cuánto lleva. Nunca más un auto que se te olvidó.
            </p>
          </Reveal>
        </div>

        {/* Desktop: flujo horizontal con flechas */}
        <Reveal delay={200}>
          <div className="mt-12 hidden lg:flex lg:items-stretch lg:gap-2">
            {stages.map((s, i) => {
              const Icon = s.icon
              return (
                <div key={s.label} className="flex items-center gap-2">
                  <div className="group relative flex w-40 flex-col items-center rounded-2xl border border-border bg-card p-4 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                    <div className={`flex size-12 items-center justify-center rounded-full ${s.color} text-white shadow-md`}>
                      <Icon className="size-6" aria-hidden="true" />
                    </div>
                    <div className="mt-3 font-heading text-sm font-bold text-navy dark:text-foreground">
                      {s.label}
                    </div>
                    <div className="mt-1 text-xs leading-tight text-muted-foreground">
                      {s.desc}
                    </div>
                    <div className={`mt-3 flex size-6 items-center justify-center rounded-full text-xs font-bold text-white ${s.color}`}>
                      {i + 1}
                    </div>
                  </div>
                  {i < stages.length - 1 && (
                    <ChevronRight className="size-5 shrink-0 text-muted-foreground/50" aria-hidden="true" />
                  )}
                </div>
              )
            })}
          </div>
        </Reveal>

        {/* Mobile / tablet: grid */}
        <Reveal delay={200}>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:hidden">
            {stages.map((s, i) => {
              const Icon = s.icon
              return (
                <div key={s.label} className="flex flex-col items-center rounded-xl border border-border bg-card p-5 text-center">
                  <div className={`flex size-11 items-center justify-center rounded-full ${s.color} text-white`}>
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <div className="mt-3 font-heading text-sm font-semibold text-navy dark:text-foreground">
                    <span className="mr-1 text-xs opacity-60">{i + 1}.</span>{s.label}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {s.desc}
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-electric/30 bg-electric/5 p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-electric text-white">
                <CheckCircle2 className="size-6" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-lg font-semibold text-navy dark:text-foreground">
                  Semáforo automático de demora
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Cada tarjeta del Kanban se pinta sola según el tiempo que
                  lleva en la etapa — sabés al toque con qué auto te estás
                  clavando.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    <span className="size-2 rounded-full bg-emerald-500" /> Verde · hasta 6hs
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-600 dark:text-amber-400">
                    <span className="size-2 rounded-full bg-amber-500" /> Amarillo · 6hs
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-600 dark:text-orange-400">
                    <span className="size-2 rounded-full bg-orange-500" /> Naranja · 8hs
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-600 dark:text-red-400">
                    <span className="size-2 rounded-full bg-red-500" /> Rojo · +12hs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
