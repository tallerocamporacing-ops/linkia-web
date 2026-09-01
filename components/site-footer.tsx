import Image from "next/image"
import { Music2 } from "lucide-react"
import { InstagramIcon } from "@/components/icons/instagram-icon"
import { INSTAGRAM_URL, TIKTOK_URL } from "@/lib/constants"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-navy py-10 dark:border-[#1A3D74] dark:bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-center gap-2.5">
          <Image
            src="/images/linkia-icon.png"
            alt="LINKIA"
            width={24}
            height={24}
            className="size-6"
          />
          <span className="font-heading text-base font-semibold text-white">
            LINKIA
          </span>
          <span className="font-mono text-xs text-silver">
            © {year} · Hecho en Argentina
          </span>
        </div>

        <nav className="flex items-center gap-6 text-sm text-silver">
          <a href="/terminos" className="transition-colors hover:text-white">
            Términos
          </a>
          <a href="/privacidad" className="transition-colors hover:text-white">
            Privacidad
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de LINKIA"
            className="text-silver transition-colors hover:text-white"
          >
            <InstagramIcon className="size-5" />
          </a>
          <a
            href={TIKTOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok de LINKIA"
            className="text-silver transition-colors hover:text-white"
          >
            <Music2 className="size-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
