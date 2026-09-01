import {
  ClipboardList,
  CalendarClock,
  Receipt,
  Users,
  BarChart3,
  MessageSquare,
} from "lucide-react"
import { Reveal } from "@/components/reveal"

const features = [
  {
    icon: ClipboardList,
    title: "Órdenes de trabajo digitales",
    description:
      "Creá y cerrá OTs desde el celular, con foto del vehículo y firma del cliente incluidas.",
  },
  {
    icon: CalendarClock,
    title: "Agenda con recordatorios automáticos",
    description:
      "Turnos organizados y avisos por WhatsApp para que nadie se olvide de pasar por el taller.",
  },
  {
    icon: Receipt,
    title: "Presupuestos y facturación en 2 clics",
    description:
      "Armá presupuestos claros y facturá al toque, sin planillas ni cuentas a mano.",
  },
  {
    icon: Users,
    title: "CRM de clientes y vehículos",
    description:
      "Historial completo de cada cliente y cada auto: qué se hizo, cuándo y con qué repuestos.",
  },
  {
    icon: BarChart3,
    title: "Reportes claros",
    description:
      "Facturación, mecánico más rentable y mix de trabajos, todo en números fáciles de leer.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp integrado",
    description:
      "El chat con el cliente queda pegado a su ficha, sin cambiar de app ni perder el hilo.",
  },
]

export function FeaturesSection() {
  return (
    <section id="funciones" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl dark:text-foreground">
              Todo lo que tu taller necesita, en un solo lugar
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              LINKIA reemplaza las planillas, los cuadernos y los mensajes
              sueltos por un sistema pensado para el día a día del taller.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Reveal key={feature.title} delay={index * 100}>
                <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-electric/40">
                  <div className="flex size-11 items-center justify-center rounded-lg bg-electric/10 text-electric">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-navy dark:text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
