import { MessageCircle } from "lucide-react"
import { WHATSAPP_URL } from "@/lib/constants"

export function WhatsAppFloatButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center rounded-full bg-whatsapp p-4 text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)] transition-transform hover:scale-110 sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="size-7" strokeWidth={2.25} aria-hidden="true" />
    </a>
  )
}
