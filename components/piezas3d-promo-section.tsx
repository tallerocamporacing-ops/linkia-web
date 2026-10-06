import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Printer } from "lucide-react"
import { Reveal } from "@/components/reveal"

// Servicio complementario en la home: piezas impresas en 3D a medida para talleres.
export function Piezas3dPromoSection() {
  return (
    <section id="piezas-3d" className="bg-muted/40 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid items-center gap-8 overflow-hidden rounded-3xl border border-border bg-[#0b1630] p-6 text-white sm:p-10 md:grid-cols-[360px_1fr]">
            <Link href="/piezas-3d" className="order-2 mx-auto w-full max-w-sm md:order-1 md:max-w-none">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl transition-transform hover:scale-[1.02]">
                <Image
                  src="/images/piezas-3d-hero.webp"
                  alt="Piezas impresas en 3D en nylon con fibra de carbono: bridas, rampas y soportes para talleres"
                  width={1122}
                  height={1402}
                  className="h-auto w-full"
                />
              </div>
            </Link>
            <div className="order-1 md:order-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 font-mono text-xs font-medium">
                <Printer className="size-3.5" aria-hidden="true" />
                Impresión 3D para talleres
              </span>
              <h2 className="mt-4 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                ¿No conseguís esa pieza? La hacemos a medida.
              </h2>
              <p className="mt-3 max-w-xl leading-relaxed text-white/80">
                Bridas para mariposas, soportes para rampas y sensores, adaptadores, plantillas y
                útiles de taller, diseñados e impresos en{" "}
                <strong className="text-white">nylon reforzado con fibra de carbono</strong>. Nos
                mandás fotos, medidas o un plano y te cotizamos sin compromiso.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/piezas-3d"
                  className="inline-flex items-center gap-2 rounded-full bg-electric px-5 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-white hover:text-navy"
                >
                  Ver cómo funciona
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <span className="text-sm text-white/70">Retiro en Monte Grande o envío a todo el país</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
