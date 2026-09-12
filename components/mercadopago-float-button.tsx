import { CHECKOUT_URL } from "@/lib/constants"

export function MercadoPagoFloatButton() {
  return (
    <a
      href={CHECKOUT_URL}
      aria-label="Suscribirme con Mercado Pago"
      className="fixed bottom-5 right-24 z-50 flex items-center justify-center rounded-full bg-[#009EE3] p-4 text-white shadow-[0_8px_24px_rgba(0,158,227,0.45)] transition-transform hover:scale-110 sm:bottom-6 sm:right-28"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="size-7"
        fill="none"
        aria-hidden="true"
      >
        {/* Handshake estilizado de Mercado Pago */}
        <path
          d="M16 4C9.4 4 4 9.4 4 16s5.4 12 12 12 12-5.4 12-12S22.6 4 16 4zm-4.7 15.8c-1.4 0-2.6-.5-3.5-1.3l1.3-1.3c.6.5 1.3.8 2.2.8 1.2 0 2.1-.6 2.5-1.5.2-.5.1-1-.2-1.4l-3.3-3.5c-.5-.6-.6-1.4-.3-2.1.4-.9 1.3-1.5 2.5-1.5.8 0 1.5.3 2.1.7l-1.3 1.3c-.2-.2-.5-.3-.8-.3-.5 0-.9.3-.9.7 0 .2.1.4.2.5l3.3 3.5c.7.7.9 1.7.6 2.6-.6 1.6-2.2 2.8-4.4 2.8zm11.9-3.9c-.4.9-1.3 1.5-2.5 1.5-.8 0-1.5-.3-2.1-.7l1.3-1.3c.2.2.5.3.8.3.5 0 .9-.3.9-.7 0-.2-.1-.4-.2-.5l-3.3-3.5c-.7-.7-.9-1.7-.6-2.6.6-1.6 2.2-2.8 4.4-2.8 1.4 0 2.6.5 3.5 1.3l-1.3 1.3c-.6-.5-1.3-.8-2.2-.8-1.2 0-2.1.6-2.5 1.5-.2.5-.1 1 .2 1.4l3.3 3.5c.5.6.6 1.4.3 2.1z"
          fill="currentColor"
        />
      </svg>
    </a>
  )
}
