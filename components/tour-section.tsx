import { PlayCircle } from "lucide-react"
import { Reveal } from "@/components/reveal"

// Cuando esté el video de tour real: reemplazar el placeholder por un <iframe>
// de YouTube unlisted con ?rel=0&modestbranding=1, o self-hosted en R2.
export function TourSection() {
  return (
    <section id="tour" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl dark:text-foreground">
              Mirá LINKIA funcionando en un taller real
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Un recorrido de 6 minutos por el sistema completo, con datos reales
              del taller Ocampo Racing.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200} className="mt-10">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-navy shadow-2xl">
            {/* PLACEHOLDER — reemplazar por iframe cuando esté el video */}
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-navy via-cobalt to-brand">
              <div className="flex flex-col items-center gap-4 text-white">
                <PlayCircle className="size-20 opacity-80" aria-hidden="true" />
                <p className="font-heading text-lg font-semibold">
                  Video-tour próximamente
                </p>
                <p className="max-w-sm text-center text-sm text-white/70">
                  Mientras tanto, mirá los ejemplos reales más abajo o suscribite
                  y probá el sistema con reembolso de 7 días.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
