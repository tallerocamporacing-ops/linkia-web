"use client"

import { useEffect, useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"
import { Reveal } from "@/components/reveal"

const reels = [
  { src: "/reels/reel-1.mp4", poster: "/reels/reel-1.jpg" },
  { src: "/reels/reel-2.mp4", poster: "/reels/reel-2.jpg" },
  { src: "/reels/reel-3.mp4", poster: "/reels/reel-3.jpg" },
]

export function ReelsSection() {
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([])
  const [unmutedIndex, setUnmutedIndex] = useState<number | null>(null)

  // Carga diferida: los videos (muted/loop) arrancan a reproducirse SOLO cuando la sección
  // entra en pantalla, y se pausan al salir. Antes se forzaba play() en el mount, lo que
  // descargaba los 3 videos apenas cargaba la home aunque el visitante no bajara hasta acá.
  // Con preload="none" + poster, no se descarga nada hasta que se ven.
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const v = entry.target as HTMLVideoElement
          if (entry.isIntersecting) {
            const p = v.play()
            if (p && typeof p.catch === "function") p.catch(() => {})
          } else {
            v.pause()
          }
        })
      },
      { threshold: 0.25 },
    )
    videoRefs.current.forEach((v) => {
      if (v) obs.observe(v)
    })
    return () => obs.disconnect()
  }, [])

  function toggleMute(index: number) {
    const isCurrentlyUnmuted = unmutedIndex === index

    reels.forEach((_, i) => {
      const video = videoRefs.current[i]
      if (!video) return
      video.muted = !(i === index && !isCurrentlyUnmuted)
    })

    setUnmutedIndex(isCurrentlyUnmuted ? null : index)
  }

  return (
    <section id="ejemplos" className="bg-muted/40 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl dark:text-foreground">
              Mirá LINKIA en acción
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Talleres reales usando LINKIA en el día a día.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 flex gap-5 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0">
          {reels.map((reel, index) => {
            const isUnmuted = unmutedIndex === index
            return (
              <Reveal key={reel.src} delay={index * 100} className="shrink-0 sm:shrink">
                <div className="group relative aspect-9/16 w-64 overflow-hidden rounded-2xl border border-border bg-navy shadow-lg transition-transform duration-300 hover:scale-[1.02] sm:w-full dark:bg-card dark:shadow-[0_10px_30px_-10px_rgba(0,163,255,0.25)]">
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el
                    }}
                    src={reel.src}
                    poster={reel.poster}
                    muted
                    loop
                    playsInline
                    preload="none"
                    className="h-full w-full object-cover"
                  >
                    <track kind="captions" />
                  </video>

                  <button
                    type="button"
                    onClick={() => toggleMute(index)}
                    aria-label={
                      isUnmuted ? "Silenciar video" : "Activar sonido del video"
                    }
                    aria-pressed={isUnmuted}
                    className="absolute bottom-3 right-3 flex size-9 items-center justify-center rounded-full bg-navy/70 text-white backdrop-blur-sm transition-transform hover:scale-110"
                  >
                    {isUnmuted ? (
                      <Volume2 className="size-4" aria-hidden="true" />
                    ) : (
                      <VolumeX className="size-4" aria-hidden="true" />
                    )}
                  </button>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
