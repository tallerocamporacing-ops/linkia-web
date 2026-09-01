"use client"

import { useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"
import { Reveal } from "@/components/reveal"

const reels = [
  { src: "/reels/reel-1.mp4", poster: "/images/reel-poster-1.png" },
  { src: "/reels/reel-2.mp4", poster: "/images/reel-poster-2.png" },
  { src: "/reels/reel-3.mp4", poster: "/images/reel-poster-3.png" },
]

export function ReelsSection() {
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([])
  const [unmutedIndex, setUnmutedIndex] = useState<number | null>(null)

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
              <Reveal key={reel.poster} delay={index * 100} className="shrink-0 sm:shrink">
                <div className="group relative aspect-9/16 w-64 overflow-hidden rounded-2xl border border-border bg-navy shadow-lg transition-transform duration-300 hover:scale-[1.02] sm:w-full dark:bg-card dark:shadow-[0_10px_30px_-10px_rgba(0,163,255,0.25)]">
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el
                    }}
                    src={reel.src}
                    poster={reel.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
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
