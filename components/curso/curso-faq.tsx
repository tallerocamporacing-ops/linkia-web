"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { cursoFaqs } from "@/lib/curso"

export function CursoFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(3) // "¿Cómo funcionan los 3 meses?" abierta

  return (
    <div className="mt-10 flex flex-col gap-3">
      {cursoFaqs.map((faq, index) => {
        const isOpen = openIndex === index
        return (
          <Reveal key={faq.q} delay={index * 40}>
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
  )
}
