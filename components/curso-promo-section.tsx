import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Gift, GraduationCap } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { BONUS_MESES, CURSO_HORAS_LABEL, CURSO_PRICE_LABEL } from "@/lib/curso"

// Venta cruzada en la home: el curso de diagnóstico trae 3 meses de LINKIA.
export function CursoPromoSection() {
  return (
    <section id="curso" className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid items-center gap-8 overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-navy via-[#0a2456] to-brand p-6 text-white sm:p-10 md:grid-cols-[1fr_280px]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 font-mono text-xs font-medium">
                <GraduationCap className="size-3.5" aria-hidden="true" />
                Curso de Diagnóstico Automotriz · Ocampo Racing
              </span>
              <h2 className="mt-4 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                ¿Querés diagnosticar mejor, además de gestionar mejor?
              </h2>
              <p className="mt-3 max-w-xl leading-relaxed text-white/80">
                {CURSO_HORAS_LABEL} de video grabadas en un taller real: multímetro, scanner,
                osciloscopio, diésel, inmovilizadores y ECU. Y con la compra del curso te
                regalamos{" "}
                <strong className="text-white">{BONUS_MESES} meses de LINKIA</strong> con todas
                las funciones.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/curso"
                  className="inline-flex items-center gap-2 rounded-full bg-electric px-5 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-white hover:text-navy"
                >
                  Ver el curso · {CURSO_PRICE_LABEL}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <span className="flex items-center gap-2 text-sm text-white/80">
                  <Gift className="size-4 text-electric" aria-hidden="true" />
                  Incluye {BONUS_MESES} meses de LINKIA gratis
                </span>
              </div>
            </div>
            <Link href="/curso" className="mx-auto w-full max-w-[280px] md:max-w-none">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl transition-transform hover:scale-[1.02]">
                <Image
                  src="/images/curso-or-linkia.webp"
                  alt="Curso Profesional de Diagnóstico Automotriz de Ocampo Racing con LINKIA"
                  width={1024}
                  height={1536}
                  className="h-auto w-full"
                />
              </div>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
