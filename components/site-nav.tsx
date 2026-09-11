"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, LogIn, Menu, X } from "lucide-react"
import { CHECKOUT_URL, LOGIN_URL } from "@/lib/constants"
import { ThemeToggle } from "@/components/theme-toggle"

const navLinks = [
  { label: "Video", href: "#tour" },
  { label: "Funciones", href: "#funciones" },
  { label: "Marketing", href: "#marketing" },
  { label: "Precio", href: "#precio" },
  { label: "FAQ", href: "#faq" },
]

export function SiteNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleAnchorClick(
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    event.preventDefault()
    setIsMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center">
          <span className="flex items-center rounded-xl bg-white px-2.5 py-1.5 shadow-sm">
            <Image
              src="/images/linkia-logo-full.png"
              alt="LINKIA - tu taller, conectado"
              width={220}
              height={155}
              priority
              className="h-11 w-auto object-contain"
            />
          </span>
        </a>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-8 md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => handleAnchorClick(event, link.href)}
              className="font-heading text-[15px] font-semibold text-navy transition-colors hover:text-brand hover:underline hover:underline-offset-4 dark:text-foreground dark:hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <a
            href={LOGIN_URL}
            className="hidden items-center gap-2 rounded-full border border-navy/25 px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white sm:inline-flex dark:border-border dark:text-foreground dark:hover:bg-foreground dark:hover:text-background"
          >
            <LogIn className="size-4" aria-hidden="true" />
            Iniciar sesión
          </a>

          <a
            href={CHECKOUT_URL}
            className="inline-flex items-center gap-2 rounded-full bg-electric px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-105 hover:bg-brand sm:px-5"
          >
            <span className="hidden sm:inline">Suscribirme</span>
            <span className="sm:hidden">Empezar</span>
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            className="inline-flex size-10 items-center justify-center rounded-full text-navy transition-colors hover:bg-muted md:hidden dark:text-foreground"
          >
            {isMenuOpen ? (
              <X className="size-6" aria-hidden="true" />
            ) : (
              <Menu className="size-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          aria-label="Navegación móvil"
          className="flex flex-col gap-1 border-t border-border/80 bg-background px-4 py-4 md:hidden"
        >
          <a
            href={LOGIN_URL}
            onClick={() => setIsMenuOpen(false)}
            className="mb-1 flex items-center gap-2 rounded-lg bg-navy px-3 py-4 font-heading text-lg font-semibold text-white transition-colors hover:bg-brand dark:bg-foreground dark:text-background"
          >
            <LogIn className="size-5" aria-hidden="true" />
            Iniciar sesión
          </a>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => handleAnchorClick(event, link.href)}
              className="rounded-lg px-3 py-4 font-heading text-lg font-semibold text-navy transition-colors hover:bg-muted hover:text-brand dark:text-foreground dark:hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
