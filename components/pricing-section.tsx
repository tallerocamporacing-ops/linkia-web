import { ArrowRight, Check, ShieldCheck } from "lucide-react"
import { CHECKOUT_URL, PRICE_ARS_LABEL, PRICE_USD } from "@/lib/constants"
import { Reveal } from "@/components/reveal"

const includes = [
  "Órdenes de trabajo ilimitadas",
  "Clientes y vehículos ilimitados",
  "Agenda con recordatorios por WhatsApp",
  "Portal del cliente con foto y firma digital",
  "Presupuestos y facturación",
  "Reportes de facturación y rentabilidad",
  "Backup diario automático",
  "Actualizaciones sin costo",
  "Soporte por WhatsApp de lunes a sábado",
]

export function PricingSection() {
  return (
    <section id="precio" className="bg-muted/40 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl dark:text-foreground">
              Un precio, todo incluido
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Sin planes confusos ni cargos por usuario. Un solo precio con
              todo lo que tu taller necesita.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200} className="mx-auto mt-12 max-w-lg">
          <div className="overflow-hidden rounded-2xl border-2 border-electric bg-card shadow-2xl">
            <div className="bg-gradient-to-br from-electric to-brand px-8 py-6 text-center text-white">
              <p className="font-mono text-sm font-medium uppercase tracking-wide">
                Plan único
              </p>
              <div className="mt-2 flex items-baseline justify-center gap-2">
                <span className="font-heading text-5xl font-bold">
                  {PRICE_ARS_LABEL}
                </span>
                <span className="text-lg font-medium opacity-90">/mes</span>
              </div>
              <p className="mt-1 text-sm opacity-80">
                Equivale a US${PRICE_USD}/mes · IVA incluido
              </p>
            </div>

            <div className="flex flex-col gap-3 p-8">
              {includes.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check
                    className="mt-0.5 size-5 shrink-0 text-electric"
                    aria-hidden="true"
                  />
                  <span className="text-base text-navy dark:text-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-border bg-muted/30 p-8">
              <a
                href={CHECKOUT_URL}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-electric px-6 py-4 text-lg font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] hover:bg-brand"
              >
                Suscribirme ahora
                <ArrowRight className="size-5" aria-hidden="true" />
              </a>
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <ShieldCheck className="size-4 text-electric" aria-hidden="true" />
                Pago con Mercado Pago · Cancelás cuando quieras · Reembolso 7 días
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
