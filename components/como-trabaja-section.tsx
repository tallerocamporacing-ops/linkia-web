import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { PruebaGratisCTA } from "@/components/prueba-gratis-cta"

// Sección "storytelling visual" con los 3 hero-banners de features core.
// Reemplaza al viejo WorkflowSection: las imágenes venden lo mismo con mucho más impacto.
// Orden narrativo: ordenás el día → el sistema te avisa antes → cuidás al cliente.

const banners = [
  {
    src: "/images/linkia-ordena-tu-dia.webp",
    width: 2000,
    height: 750,
    alt: "LINKIA ordena tu día: kanban con semáforo de demora, agenda del día con ocupación 87% y detalle de la orden de trabajo del Fiat Cronos AD 049 XE",
  },
  {
    src: "/images/linkia-avisa-antes.webp",
    width: 1672,
    height: 941,
    alt: "LINKIA te avisa antes: alertas de próximos vencimientos de VTV, service y distribución con panel de clientes contactados",
  },
  {
    src: "/images/linkia-cuida-clientes.webp",
    width: 1672,
    height: 941,
    alt: "LINKIA cuida a tus clientes: QR en la orden de trabajo, portal del cliente con historial y planilla de servicio firmada digitalmente",
  },
]

export function ComoTrabajaSection() {
  return (
    <section id="como-trabaja" className="bg-muted/40 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-3 py-1 font-mono text-xs font-medium text-brand">
              Así trabaja LINKIA por vos
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl dark:text-foreground">
              Tu taller ordenado, sin planillas ni cuadernos
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Ves el trabajo del día de un vistazo, tenés a mano los próximos vencimientos
              y le entregás a cada cliente un portal propio con todo su historial.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col gap-12 sm:gap-16">
          {banners.map((b, i) => (
            <Reveal key={b.src} delay={100 + i * 60}>
              {/* Full-bleed en mobile (rompe el padding del contenedor), redondeado en desktop */}
              <div className="-mx-4 overflow-hidden bg-black sm:-mx-6 sm:rounded-2xl sm:shadow-2xl lg:mx-0 lg:rounded-3xl">
                <Image
                  src={b.src}
                  alt={b.alt}
                  width={b.width}
                  height={b.height}
                  sizes="(min-width: 1024px) 1152px, 100vw"
                  className="h-auto w-full"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div className="mt-14 flex flex-col items-center gap-3">
            <PruebaGratisCTA label="Probá LINKIA gratis 7 días" />
            <p className="text-sm text-muted-foreground">Sin tarjeta requerida · Te damos los accesos por email</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
