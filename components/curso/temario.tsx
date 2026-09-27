"use client"

import { useState } from "react"
import { ChevronDown, Clock, PlayCircle } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { modulos } from "@/lib/curso"

export function Temario() {
  const [openIndex, setOpenIndex] = useState<number | null>(5) // módulo 6 (osciloscopio) abierto

  return (
    <div className="mt-10 flex flex-col gap-3">
      {modulos.map((m, index) => {
        const isOpen = openIndex === index
        const estrella = m.n === 6
        return (
          <Reveal key={m.n} delay={index * 30}>
            <div
              className={`overflow-hidden rounded-xl border bg-card ${
                estrella ? "border-electric shadow-[0_0_0_3px_rgba(0,163,255,0.12)]" : "border-border"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-4 px-4 py-4 text-left transition-colors hover:bg-muted/40 sm:px-5"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-navy font-mono text-sm font-bold text-white dark:bg-electric dark:text-navy">
                  {String(m.n).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-center gap-2">
                    <span className="font-heading text-base font-semibold text-navy sm:text-lg dark:text-foreground">
                      {m.titulo}
                    </span>
                    {estrella && (
                      <span className="rounded-full bg-electric/15 px-2 py-0.5 font-mono text-[11px] font-semibold text-brand">
                        Módulo estrella
                      </span>
                    )}
                  </span>
                  <span className="mt-0.5 flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                    <Clock className="size-3.5" aria-hidden="true" />
                    {m.minutos} min · video + PDF
                  </span>
                </span>
                <ChevronDown
                  className={`size-5 shrink-0 text-muted-foreground transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
              {isOpen && (
                <div className="border-t border-border px-4 py-4 sm:px-5 sm:pl-[4.75rem]">
                  <p className="text-sm leading-relaxed text-foreground/85">{m.resumen}</p>
                  <ul className="mt-3 flex flex-col gap-2">
                    {m.temas.map((t) => (
                      <li key={t} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <PlayCircle className="mt-0.5 size-4 shrink-0 text-electric" aria-hidden="true" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Reveal>
        )
      })}
    </div>
  )
}
