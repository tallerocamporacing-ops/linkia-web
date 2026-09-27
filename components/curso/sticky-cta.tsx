"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import { CURSO_CHECKOUT_URL, CURSO_PRICE_LABEL, BONUS_MESES } from "@/lib/curso"

// Barra fija inferior en mobile: aparece cuando el hero ya salió de pantalla.
export function StickyCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById("curso-hero")
    if (!hero) return
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 },
    )
    obs.observe(hero)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 py-3 backdrop-blur-md transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-md items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="font-heading text-lg font-bold leading-none text-navy dark:text-foreground">
            {CURSO_PRICE_LABEL}
          </p>
          <p className="mt-1 truncate font-mono text-[11px] text-muted-foreground">
            + {BONUS_MESES} meses de LINKIA gratis
          </p>
        </div>
        <a
          href={CURSO_CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-electric px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-brand"
        >
          Quiero el curso
          <ArrowRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  )
}
