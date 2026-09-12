import { Handshake } from "lucide-react"
import { CHECKOUT_URL } from "@/lib/constants"

/**
 * Botón flotante de Mercado Pago: círculo blanco exterior + círculo cyan interior
 * con el handshake blanco (isotipo de MP). Va al lado del botón de WhatsApp.
 */
export function MercadoPagoFloatButton() {
  return (
    <a
      href={CHECKOUT_URL}
      aria-label="Suscribirme con Mercado Pago"
      title="Suscribirme con Mercado Pago"
      className="fixed bottom-5 right-24 z-50 flex size-14 items-center justify-center rounded-full bg-white p-1 shadow-[0_8px_24px_rgba(0,177,234,0.5)] transition-transform hover:scale-110 sm:bottom-6 sm:right-28"
    >
      <span className="flex size-full items-center justify-center rounded-full bg-[#00B1EA]">
        <Handshake className="size-7 text-white" strokeWidth={2.2} aria-hidden="true" />
      </span>
    </a>
  )
}
