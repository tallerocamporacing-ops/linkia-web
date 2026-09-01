import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { WHATSAPP_URL } from "@/lib/constants"

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 pt-14 pb-16 sm:px-6 md:grid-cols-2 md:items-center md:pt-20 md:pb-24 lg:px-8">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-3 py-1 font-mono text-xs font-medium text-brand">
            Gestión para talleres mecánicos
          </span>

          <h1 className="max-w-lg font-heading text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl dark:text-foreground">
            Tu taller, conectado de punta a punta
          </h1>

          <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
            Órdenes de trabajo, agenda, presupuestos y WhatsApp en un solo
            sistema. Menos papeles, más control, clientes más contentos.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-electric px-6 py-3.5 text-base font-semibold text-white shadow-[0_10px_30px_rgba(0,163,255,0.35)] transition-transform hover:scale-[1.02] hover:bg-brand"
            >
              Probá LINKIA 14 días gratis
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="size-4 shrink-0 text-electric" aria-hidden="true" />
              Sin tarjeta, sin compromiso
            </div>
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
