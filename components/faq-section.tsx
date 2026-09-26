"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { faqs } from "@/lib/faqs"

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
      </div>
    </section>
  )
}
