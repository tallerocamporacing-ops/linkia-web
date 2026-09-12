import { CHECKOUT_URL } from "@/lib/constants"

/**
 * Botón flotante de Mercado Pago (al lado del de WhatsApp).
 * Diseño: el isotipo oficial (elipse cyan + handshake azul marino) sobre un círculo blanco
 * para que se vea recortado y limpio en el fondo dark de la landing.
 */
export function MercadoPagoFloatButton() {
  return (
    <a
      href={CHECKOUT_URL}
      aria-label="Suscribirme con Mercado Pago"
      title="Suscribirme con Mercado Pago"
      className="fixed bottom-5 right-24 z-50 flex size-14 items-center justify-center rounded-full bg-white shadow-[0_8px_24px_rgba(0,177,234,0.5)] transition-transform hover:scale-110 sm:bottom-6 sm:right-28"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 80"
        className="h-9 w-auto"
        aria-hidden="true"
      >
        {/* Elipse cyan característica del logo (con leve degradado inferior azul) */}
        <defs>
          <linearGradient id="mp-oval" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00B1EA" />
            <stop offset="70%" stopColor="#00B1EA" />
            <stop offset="100%" stopColor="#0033A0" />
          </linearGradient>
        </defs>
        <ellipse cx="50" cy="40" rx="46" ry="34" fill="url(#mp-oval)" />

        {/* Handshake azul marino: dos manos entrelazadas en horizontal */}
        {/* Mano izquierda */}
        <path
          d="M18 40c2-4 8-8 14-8 3 0 6 1 8 3l4 3c1 1 2 1 3 0l3-2c1-1 3-1 4 0l7 6c2 2 2 5 0 7l-3 3c-1 1-3 1-4 0l-6-5-3 2c-2 2-5 2-7 0l-6-5c-3-2-7-2-10-1l-4 2-2-1 2-4z"
          fill="#0033A0"
        />
        {/* Mano derecha con dedo pulgar */}
        <path
          d="M82 40c-2-4-8-7-14-6-3 0-5 1-7 3l-2 2c-1 1-1 2 0 3l8 7c1 1 3 1 4 0l3-2c1-1 3-1 4 0l3 3c1 1 3 1 4-1l2-3c1-2 0-4-1-5l-4-1z"
          fill="#0033A0"
        />
        {/* Puntito blanco (highlight característico) */}
        <circle cx="42" cy="52" r="2" fill="#FFFFFF" />
      </svg>
    </a>
  )
}
