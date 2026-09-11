import {
  BarChart3,
  ClipboardList,
  Kanban,
  Users,
  FileSignature,
  Camera,
  FileText,
  CalendarCheck,
  Package,
  Building2,
  Wallet,
  ListChecks,
  Bell,
  BookOpenCheck,
} from "lucide-react"
import { Reveal } from "@/components/reveal"

const features = [
  {
    icon: BarChart3,
    color: "text-sky-500 bg-sky-500/10",
    title: "Panel con la plata que te queda",
    description:
      "Contador de OTs abiertas, en trabajo y listas para entregar. Facturación bruta, deuda a proveedores, facturación anual y — lo más importante — la utilidad: la plata que te queda en el bolsillo después de pagar los repuestos.",
  },
  {
    icon: ClipboardList,
    color: "text-blue-500 bg-blue-500/10",
    title: "Órdenes de trabajo digitales",
    description:
      "Cargás cliente, vehículo, fecha, kilómetro, combustible con el que ingresó, motivo y mecánico asignado. Con un click exportás el PDF listo para el cliente, con el logo de tu taller.",
  },
  {
    icon: Kanban,
    color: "text-violet-500 bg-violet-500/10",
    title: "Kanban con semáforo de demora",
    description:
      "Vista gráfica del taller: Recibido → Diagnóstico → Presupuestado → Aprobado → En reparación → Listo. Arrastrás las tarjetas de columna a columna. Verde hasta las 6hs, amarillo, naranja y rojo si pasa las 12hs — sabés al toque con qué auto te estás clavando.",
  },
  {
    icon: Users,
    color: "text-emerald-500 bg-emerald-500/10",
    title: "Portal para tu cliente",
    description:
      "Cada cliente recibe un link único donde ve la historia clínica de su auto y todos los presupuestos. Puede aprobar o cancelar desde el celular. Si aprueba, la orden se mueve sola a 'Aprobado' en tu Kanban.",
  },
  {
    icon: FileSignature,
    color: "text-orange-500 bg-orange-500/10",
    title: "Firma digital + anexo legal",
    description:
      "El cliente firma con el dedo en tu pantalla al ingresar y al retirar el vehículo. Queda un anexo legal firmado que sale en la segunda hoja del PDF. Te cubrís sin imprimir nada.",
  },
  {
    icon: Camera,
    color: "text-pink-500 bg-pink-500/10",
    title: "Recepción con fotos del auto",
    description:
      "Foto de frente, laterales, trasero y tablero al ingreso. Marcás si vino con rayones o golpes y agregás observaciones. El cliente ve todo eso en su portal — no aparecen reclamos raros después.",
  },
  {
    icon: FileText,
    color: "text-teal-500 bg-teal-500/10",
    title: "Presupuestos que se vinculan solos",
    description:
      "Te piden un presupuesto por WhatsApp sin que el auto esté en el taller. Lo armás y guardás. Cuando el auto llega, lo vinculás a la orden con un click y todos los renglones se copian solos.",
  },
  {
    icon: CalendarCheck,
    color: "text-indigo-500 bg-indigo-500/10",
    title: "Turnos con Google Calendar",
    description:
      "Generás un link de reservas online. Tu cliente elige día, hora y motivo desde su celular. El turno aparece en tu turnera y se sincroniza con Google Calendar sin cargar nada dos veces.",
  },
  {
    icon: Package,
    color: "text-amber-500 bg-amber-500/10",
    title: "Repuestos con ubicación y stock",
    description:
      "Cada repuesto con su categoría y dónde está guardado (Bandeja C4, Cajón F2, etc). Stock con semáforo de bajo stock, precio de compra y venta, margen de ganancia calculado solo. Ves total en stock, valor a costo y valor a venta de todo tu inventario.",
  },
  {
    icon: Building2,
    color: "text-rose-500 bg-rose-500/10",
    title: "Proveedores con cuenta corriente",
    description:
      "Cargás cada casa de repuestos con su alias de Mercado Pago. Registrás movimientos Debe o Haber (compra o pago) con número de remito, medio de pago y notas. La deuda con cada proveedor se actualiza sola — sabés siempre a quién le debés y cuánto.",
  },
  {
    icon: Wallet,
    color: "text-green-500 bg-green-500/10",
    title: "Finanzas por vehículo",
    description:
      "Al cerrar la OT cargás el costo de repuestos y el sistema calcula solo la utilidad (lo facturado menos lo gastado). Sumás tus gastos fijos como alquiler del galpón y ves la ganancia real mes a mes.",
  },
  {
    icon: Bell,
    color: "text-red-500 bg-red-500/10",
    title: "Recordatorios automáticos",
    description:
      "Cargás VTV, próximo service y última distribución de cada vehículo. El sistema te avisa cuando se vencen — vos salís a buscar al cliente antes de que se acuerde solo. Trabajás de forma proactiva.",
  },
  {
    icon: ListChecks,
    color: "text-cyan-500 bg-cyan-500/10",
    title: "Tareas para no olvidarte de nada",
    description:
      "Anotás lo que tenés pendiente (facturar municipalidad, revisar tren delantero, llamar al proveedor) con prioridad Alta / Normal / Baja y semáforo. Cuando lo hacés, un click y se archiva. Si querés reabrirla, la sacás de nuevo.",
  },
  {
    icon: BookOpenCheck,
    color: "text-slate-500 bg-slate-500/10",
    title: "Procedimientos paso a paso",
    description:
      "PDF con el paso a paso del proceso: cargar cliente, cargar vehículo, abrir orden, presupuestar, cobrar. Para que cualquier persona nueva en el taller sepa cómo trabajar desde el primer día.",
  },
]

export function FeaturesSection() {
  return (
    <section id="funciones" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl dark:text-foreground">
              14 herramientas pensadas para el día a día del taller
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Todo esto viene incluido en el mismo precio. Sin módulos que se
              venden aparte (excepto Marketing, que lo explicamos más abajo).
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Reveal key={feature.title} delay={index * 40}>
                <div className="group flex h-full flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-electric/40 hover:shadow-lg">
                  <div className={`flex size-12 items-center justify-center rounded-lg ${feature.color}`}>
                    <Icon className="size-6" aria-hidden="true" />
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
