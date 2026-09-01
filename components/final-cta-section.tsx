import { MessageCircle } from "lucide-react"
import { WHATSAPP_URL } from "@/lib/constants"
import { Reveal } from "@/components/reveal"

export function FinalCtaSection() {
  return (
    <section className="bg-navy py-20 sm:py-24 dark:bg-card">
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Empezá a ordenar tu taller hoy
        </h2>
        <p className="max-w-xl text-lg leading-relaxed text-silver">
          Contanos cómo trabaja tu taller y te mostramos cómo LINKIA se
          adapta, sin vueltas.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-whatsapp px-8 py-4 text-lg font-semibold text-white shadow-[0_10px_30px_rgba(37,211,102,0.35)] transition-transform hover:scale-105"
        >
          <MessageCircle className="size-5" aria-hidden="true" />
          Hablar por WhatsApp
        </a>
      </Reveal>
    </section>
  )
}
