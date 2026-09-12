import { CHECKOUT_URL } from "@/lib/constants"

export function MercadoPagoFloatButton() {
  return (
    <a
      href={CHECKOUT_URL}
      aria-label="Suscribirme con Mercado Pago"
      title="Suscribirme con Mercado Pago"
      className="fixed bottom-5 right-24 z-50 flex items-center justify-center rounded-full bg-[#00B1EA] p-3 shadow-[0_8px_24px_rgba(0,177,234,0.5)] transition-transform hover:scale-110 sm:bottom-6 sm:right-28"
    >
      {/* Isotipo de Mercado Pago: handshake horizontal blanco, envuelto por curva superior */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 44"
        className="h-9 w-auto"
        fill="none"
        aria-hidden="true"
      >
        {/* Curva superior que envuelve — evoca el "abrazo" que rodea el handshake en el isotipo real */}
        <path
          d="M4 22C4 12 14 4 32 4s28 8 28 18"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        {/* Handshake horizontal — dos manos entrelazadas en el centro */}
        <path
          d="M12 26h10l4-4 6 6 6-6 4 4h10c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2H42l-6-6-4 4-4-4-6 6H12c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2Z"
          fill="#FFFFFF"
        />
        {/* Punto característico central (el "ojo" del handshake) */}
        <circle cx="32" cy="30" r="2" fill="#FFD500" />
      </svg>
    </a>
  )
}
