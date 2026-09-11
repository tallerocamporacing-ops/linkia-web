import { CheckCircle2 } from "lucide-react"
import { Reveal } from "@/components/reveal"

const stages = [
  { label: "Recibido", color: "bg-slate-500", desc: "El auto entra al taller" },
  { label: "En diagnóstico", color: "bg-amber-500", desc: "Ves qué tiene" },
  { label: "Presupuestado", color: "bg-orange-500", desc: "Mandás el precio al cliente" },
  { label: "Aprobado", color: "bg-blue-500", desc: "El cliente aprueba desde su celular" },
  { label: "En reparación", color: "bg-violet-500", desc: "Estás trabajando" },
  { label: "Listo", color: "bg-emerald-500", desc: "Se lo entregás" },
]

export function WorkflowSection() {
  return (
    <section id="flujo" className="bg-muted/40 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl dark:text-foreground">
              Cada auto sigue el mismo flujo, siempre
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Sabés en qué etapa está cada vehículo, quién está trabajando en él
              y cuánto lleva. Nunca más un auto que se te olvidó.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {stages.map((s, i) => (
              <div key={s.label} className="relative flex flex-col items-center rounded-xl border border-border bg-card p-5 text-center">
                <div className={`flex size-10 items-center justify-center rounded-full ${s.color} text-sm font-bold text-white`}>
                  {i + 1}
                </div>
                <div className="mt-3 font-heading text-sm font-semibold text-navy dark:text-foreground">
                  {s.label}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {s.desc}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 rounded-2xl border border-electric/30 bg-electric/5 p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-electric text-white">
                <CheckCircle2 className="size-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-navy dark:text-foreground">
                  Semáforo automático de demora
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Cada tarjeta del Kanban se pinta sola según el tiempo que
                  lleva en la etapa: <b className="text-emerald-600">verde</b> hasta las 6hs,
                  <b className="text-amber-600"> amarillo</b> a las 6hs,
                  <b className="text-orange-600"> naranja</b> a las 8hs y
                  <b className="text-red-600"> rojo</b> si pasa las 12hs. Sabés al toque
                  con qué auto te estás clavando.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
