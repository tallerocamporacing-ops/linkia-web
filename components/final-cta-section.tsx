import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react"
import { CHECKOUT_URL, PRICE_ARS_LABEL, WHATSAPP_URL } from "@/lib/constants"
import { Reveal } from "@/components/reveal"

export function FinalCtaSection() {
  return (
    <section className="bg-navy py-20 sm:py-24 dark:bg-card">
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Empezá a ordenar tu taller hoy
        </h2>
        <p className="max-w-xl text-lg leading-relaxed text-silver">
          Suscribite por {PRICE_ARS_LABEL}/mes y en menos de 24hs tenés el
          sistema andando con tus datos cargados.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <a
            href={CHECKOUT_URL}
            className="inline-flex items-center gap-2 rounded-lg bg-electric px-8 py-4 text-lg font-semibold text-white shadow-[0_10px_30px_rgba(0,163,255,0.35)] transition-transform hover:scale-105"
          >
            Suscribirme ahora
            <ArrowRight className="size-5" aria-hidden="true" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            <MessageCircle className="size-5" aria-hidden="true" />
            Tengo una duda
          </a>
        </div>
        <div className="flex items-center gap-2 text-sm text-silver/80">
          <ShieldCheck className="size-4 text-electric" aria-hidden="true" />
          Pago con Mercado Pago · Reembolso 7 días · Sin permanencia
        </div>
      </Reveal>
    </section>
  )
}
