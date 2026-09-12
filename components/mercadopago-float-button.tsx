import { Handshake } from "lucide-react"
import { CHECKOUT_URL } from "@/lib/constants"

/**
 * Botón flotante de Mercado Pago (al lado del de WhatsApp).
 * Uso el icono Handshake que representa el "apretón de manos" del isotipo real de MP,
 * sobre el color cyan característico de la marca (#00B1EA).
 */
export function MercadoPagoFloatButton() {
  return (
    <a
      href={CHECKOUT_URL}
      aria-label="Suscribirme con Mercado Pago"
      title="Suscribirme con Mercado Pago"
      className="fixed bottom-5 right-24 z-50 flex size-14 items-center justify-center rounded-full bg-[#00B1EA] shadow-[0_8px_24px_rgba(0,177,234,0.5)] transition-transform hover:scale-110 sm:bottom-6 sm:right-28"
    >
      <Handshake className="size-8 text-white" strokeWidth={2} aria-hidden="true" />
    </a>
  )
}
