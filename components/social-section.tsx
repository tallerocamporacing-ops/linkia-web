import { Music2 } from "lucide-react"
import { InstagramIcon } from "@/components/icons/instagram-icon"
import { INSTAGRAM_URL, TIKTOK_URL } from "@/lib/constants"
import { Reveal } from "@/components/reveal"

export function SocialSection() {
  return (
    <section className="bg-card py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl dark:text-foreground">
            Seguinos en redes
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-col gap-5 sm:flex-row">
          <Reveal delay={0} className="flex-1">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-xl bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] px-6 py-5 text-lg font-semibold text-white shadow-lg transition-transform hover:scale-105"
            >
              <InstagramIcon className="size-6" />
              @linkia.app
            </a>
          </Reveal>

          <Reveal delay={100} className="flex-1">
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-xl bg-[#010101] px-6 py-5 text-lg font-semibold text-white shadow-lg transition-transform hover:scale-105"
            >
              <Music2 className="size-6" aria-hidden="true" />
              @linkia.app
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
