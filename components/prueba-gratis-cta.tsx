"use client"

import { useEffect, useRef, useState } from "react"
import { Gift, X, Loader2, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

type Props = { className?: string; label?: string }

export function PruebaGratisCTA({ className, label = "Probá gratis 7 días" }: Props) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-lg border border-electric/40 bg-white/70 dark:bg-white/5 px-6 py-3.5 text-base font-semibold text-navy dark:text-foreground shadow-sm transition-transform hover:scale-[1.02] hover:bg-electric/10",
          className,
        )}
      >
        <Gift className="size-5 text-electric" aria-hidden="true" />
        {label}
      </button>
      {open && <PruebaGratisModal onClose={() => setOpen(false)} />}
    </>
  )
}

function PruebaGratisModal({ onClose }: { onClose: () => void }) {
  const [nombre, setNombre] = useState("")
  const [taller, setTaller] = useState("")
  const [email, setEmail] = useState("")
  const [celular, setCelular] = useState("")
  const [web, setWeb] = useState("") // honeypot invisible
  const [sending, setSending] = useState(false)
  const [ok, setOk] = useState(false)
  const [err, setErr] = useState<string | null>(null)
  const firstRef = useRef<HTMLInputElement>(null)
  // Timestamp de apertura del modal: el backend descarta submits que llegan en <2s (bots).
  const openedAtRef = useRef<number>(Date.now())

  useEffect(() => {
    openedAtRef.current = Date.now()
    firstRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [onClose])

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (sending) return
    setErr(null)
    setSending(true)
    try {
      const r = await fetch("/api/prueba-gratuita", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "omit",
        body: JSON.stringify({
          nombre: nombre.slice(0, 80),
          taller: taller.slice(0, 100),
          email: email.slice(0, 120),
          celular: celular.slice(0, 40),
          web,
          form_open_ts: openedAtRef.current,
        }),
      })
      const j = await r.json().catch(() => ({}))
      if (!r.ok || !j.ok) {
        if (j.error === "validacion") setErr("Revisá los datos y volvé a intentar.")
        else if (j.error === "rate_limit") setErr(j.msg || "Demasiados intentos. Esperá un minuto.")
        else setErr("No se pudo enviar. Escribinos por WhatsApp: +54 9 11 3029-3345")
        setSending(false)
        return
      }
      setOk(true)
    } catch {
      setErr("Sin conexión. Escribinos por WhatsApp: +54 9 11 3029-3345")
    } finally {
      setSending(false)
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pgrat-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-2xl sm:p-8">
        <div className="mb-5 flex items-start justify-between">
          <div>
            <div className="mb-1 inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-brand">
              <Gift className="size-3" aria-hidden="true" /> Prueba gratuita
            </div>
            <h2 id="pgrat-title" className="font-heading text-2xl font-bold text-navy dark:text-foreground">
              Empezá gratis con LINKIA
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Dejanos tus datos y te creamos la cuenta. En pocas horas te llegan los accesos por email.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="rounded-lg p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>

        {ok ? (
          <div className="flex flex-col items-center gap-3 py-6 text-center">
            <CheckCircle2 className="size-12 text-emerald-500" aria-hidden="true" />
            <h3 className="font-heading text-xl font-bold text-navy dark:text-foreground">¡Listo! Recibimos tu pedido</h3>
            <p className="text-sm text-muted-foreground">
              Te mandamos un email de confirmación a <b>{email}</b>. En las próximas horas te llegan los
              datos de acceso (usuario, contraseña y link).
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-3 inline-flex items-center justify-center rounded-lg bg-electric px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand"
            >
              Cerrar
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="flex flex-col gap-3">
            <Field label="Tu nombre" required>
              <input
                ref={firstRef}
                type="text"
                required
                autoComplete="name"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className={inputCls}
                placeholder="Juan Pérez"
              />
            </Field>
            <Field label="Nombre del taller" required>
              <input
                type="text"
                required
                value={taller}
                onChange={(e) => setTaller(e.target.value)}
                className={inputCls}
                placeholder="Taller Pérez"
              />
            </Field>
            <Field label="Email del taller" required>
              <input
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputCls}
                placeholder="taller@email.com"
              />
              <p className="mt-1 text-xs text-muted-foreground">Ahí te vamos a mandar los datos de acceso.</p>
            </Field>
            <Field label="Celular (WhatsApp)" required>
              <input
                type="tel"
                required
                inputMode="tel"
                autoComplete="tel"
                value={celular}
                onChange={(e) => setCelular(e.target.value)}
                className={inputCls}
                placeholder="+54 9 11 1234-5678"
              />
            </Field>

            {/* Honeypot: invisible field to catch bots. Real users leave it empty. */}
            <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}>
              <label>Sitio web</label>
              <input type="text" tabIndex={-1} autoComplete="off" value={web} onChange={(e) => setWeb(e.target.value)} />
            </div>

            {err && (
              <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-700 dark:text-red-300">
                {err}
              </div>
            )}

            <button
              type="submit"
              disabled={sending}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-electric px-5 py-3 text-base font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] hover:bg-brand disabled:cursor-not-allowed disabled:opacity-60"
            >
              {sending ? (
                <>
                  <Loader2 className="size-4 animate-spin" aria-hidden="true" /> Enviando…
                </>
              ) : (
                <>Quiero mi prueba gratis</>
              )}
            </button>
            <p className="text-center text-[11px] leading-relaxed text-muted-foreground">
              Al enviar aceptás nuestras{" "}
              <a href="/legal/privacidad" className="underline underline-offset-2 hover:text-foreground">
                políticas de privacidad
              </a>
              . No hay tarjeta requerida.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}

const inputCls =
  "w-full rounded-lg border border-border bg-background px-3 py-2.5 text-base text-foreground outline-none transition-colors focus:border-electric focus:ring-2 focus:ring-electric/30"

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm font-medium text-foreground">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      {children}
    </label>
  )
}
