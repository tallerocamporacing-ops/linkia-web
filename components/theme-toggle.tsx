"use client"

import { useLayoutEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useLayoutEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"))
    setMounted(true)
  }, [])

  function toggleTheme() {
    const next = !document.documentElement.classList.contains("dark")
    document.documentElement.classList.toggle("dark", next)
    try {
      localStorage.setItem("linkia-theme", next ? "dark" : "light")
    } catch {}
    setIsDark(next)
  }

  const showMoon = !(mounted && isDark)

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={showMoon ? "Cambiar a modo oscuro" : "Cambiar a modo claro"}
      className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-transparent text-navy transition-colors hover:bg-muted dark:text-foreground"
    >
      <span className="relative flex size-5 items-center justify-center">
        <Sun
          className={`absolute size-5 transition-all duration-300 ${
            showMoon
              ? "-rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          }`}
          aria-hidden="true"
        />
        <Moon
          className={`absolute size-5 transition-all duration-300 ${
            showMoon
              ? "rotate-0 scale-100 opacity-100"
              : "rotate-90 scale-0 opacity-0"
          }`}
          aria-hidden="true"
        />
      </span>
    </button>
  )
}
