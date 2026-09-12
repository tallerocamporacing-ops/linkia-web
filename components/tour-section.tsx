import { Reveal } from "@/components/reveal"

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
              Un recorrido rápido por el sistema con datos de ejemplo para que veas
              todas las funciones sin exponer información sensible de clientes reales.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200} className="mt-10">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-navy shadow-2xl">
            <video
              src="https://linkia.com.ar/assets/videos/tour.mp4?v=2"
              controls
              playsInline
              preload="metadata"
              className="h-auto w-full"
            >
              <track kind="captions" />
              Tu navegador no soporta video HTML5.
            </video>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
