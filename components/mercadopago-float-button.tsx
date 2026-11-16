import { Handshake } from "lucide-react"
import { WHATSAPP_PRECIO_URL } from "@/lib/constants"

/**
 * Botón flotante "quiero suscribirme": círculo blanco exterior + círculo cyan interior
 * con el handshake blanco. Va al lado del botón de WhatsApp.
 * 16-nov-2026: ya no va al checkout de Mercado Pago (mostraba el precio); pide el precio por WhatsApp.
 */
export function MercadoPagoFloatButton() {
  return (
    <a
      href={WHATSAPP_PRECIO_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Quiero suscribirme"
      title="Quiero suscribirme"
      className="fixed bottom-5 right-24 z-50 flex size-14 items-center justify-center rounded-full bg-white p-1 shadow-[0_8px_24px_rgba(0,177,234,0.5)] transition-transform hover:scale-110 sm:bottom-6 sm:right-28"
    >
      <span className="flex size-full items-center justify-center rounded-full bg-[#00B1EA]">
        <Handshake className="size-7 text-white" strokeWidth={2.2} aria-hidden="true" />
      </span>
    </a>
  )
}
