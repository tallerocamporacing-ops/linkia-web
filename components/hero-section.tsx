import Image from "next/image"
import { ArrowRight, ShieldCheck, PlayCircle } from "lucide-react"
import { CHECKOUT_URL, PRICE_ARS_LABEL, PRICE_USD } from "@/lib/constants"

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 pt-14 pb-16 sm:px-6 md:grid-cols-2 md:items-center md:pt-20 md:pb-24 lg:px-8">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-3 py-1 font-mono text-xs font-medium text-brand">
            Software de gestión para talleres mecánicos
          </span>

          <h1 className="max-w-lg font-heading text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl dark:text-foreground">
            Tu taller, ordenado y cobrando más
          </h1>

          <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
            Órdenes de trabajo, agenda, presupuestos, WhatsApp y portal para el cliente.
            Todo en un solo sistema. Sin planillas, sin cuadernos, sin perder trabajos.
          </p>

          <div className="flex flex-col gap-3 rounded-xl border border-electric/30 bg-electric/5 p-4">
            <div className="flex items-baseline gap-3">
              <span className="font-heading text-4xl font-bold text-navy dark:text-foreground">
                {PRICE_ARS_LABEL}
              </span>
              <span className="text-base font-medium text-muted-foreground">/mes</span>
              <span className="text-sm text-muted-foreground line-through">
                US${PRICE_USD}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Sin permanencia. Cancelás cuando quieras. Reembolso 7 días.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={CHECKOUT_URL}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-electric px-6 py-3.5 text-base font-semibold text-white shadow-[0_10px_30px_rgba(0,163,255,0.35)] transition-transform hover:scale-[1.02] hover:bg-brand"
            >
              Suscribirme ahora
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#tour"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3.5 text-base font-semibold text-navy transition-colors hover:bg-muted dark:text-foreground"
            >
              <PlayCircle className="size-5" aria-hidden="true" />
              Ver cómo funciona
            </a>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="size-4 shrink-0 text-electric" aria-hidden="true" />
            Pago seguro con Mercado Pago · Tarjeta o débito
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md md:max-w-none">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-electric/20 via-cobalt/10 to-transparent blur-2xl" />
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
            <Image
              src="/images/dashboard-mockup.png"
              alt="Panel de LINKIA mostrando las órdenes de trabajo del día con patente, modelo y estado de cada vehículo"
              width={1200}
              height={880}
              priority
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
