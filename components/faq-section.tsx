"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Reveal } from "@/components/reveal"

const faqs = [
  {
    q: "¿Necesito instalar algo?",
    a: "No. LINKIA funciona 100% en el navegador (celular, tablet o PC). No hace falta descargar nada ni tener un servidor propio.",
  },
  {
    q: "¿Qué pasa si no me gusta?",
    a: "Tenés 7 días de reembolso completo sin preguntas. Escribís por WhatsApp y te devolvemos la plata a la misma tarjeta.",
  },
  {
    q: "¿Puedo cancelar en cualquier momento?",
    a: "Sí, en cualquier momento y sin permanencia. La cancelación es inmediata desde tu cuenta de Mercado Pago o pidiéndolo por WhatsApp.",
  },
  {
    q: "¿Cuánto tarda la activación después del pago?",
    a: "Menos de 24 horas hábiles. Recibís un mail con tu usuario, contraseña y un link al sistema. Si pagás en horario laboral, en la mayoría de los casos entrás el mismo día.",
  },
  {
    q: "¿Puedo tener varios usuarios en el taller?",
    a: "Sí, sumás mecánicos, administrativos y encargados sin costo extra. Cada uno con su propio usuario.",
  },
  {
    q: "¿Cómo sube mi taller los datos que ya tiene en Excel o cuaderno?",
    a: "Nosotros importamos tu lista de clientes y vehículos por vos sin cargo. Solo mandás el Excel por WhatsApp y en 24 horas está cargado.",
  },
  {
    q: "¿Mis datos están seguros?",
    a: "Sí. LINKIA corre sobre Cloudflare (misma infraestructura que usan bancos y gobiernos). Backup automático diario, conexión encriptada, cada taller ve solo sus datos.",
  },
  {
    q: "¿Puedo facturar electrónicamente desde LINKIA?",
    a: "La integración con AFIP está en desarrollo. Por ahora armás el presupuesto en LINKIA y facturás con tu sistema habitual. Cuando esté lista, la sumamos sin cargo adicional.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Reveal>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl dark:text-foreground">
              Preguntas frecuentes
            </h2>
          </Reveal>
        </div>

        <div className="mt-10 flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <Reveal key={faq.q} delay={index * 50}>
                <div className="overflow-hidden rounded-xl border border-border bg-card">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-muted/40"
                  >
                    <span className="font-heading text-base font-semibold text-navy dark:text-foreground">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`size-5 shrink-0 text-muted-foreground transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-border px-5 py-4 text-sm leading-relaxed text-muted-foreground">
                      {faq.a}
                    </div>
                  )}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
