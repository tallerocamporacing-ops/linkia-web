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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="size-7"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.404.13-.343.244-.744.244-1.116 0-.058 0-.114-.014-.171-.1-.244-2.264-1.317-2.506-1.317ZM15.984 4a11.62 11.62 0 0 0-9.984 17.706L4 28l6.435-1.87A11.616 11.616 0 0 0 27.6 15.984c0-3.1-1.207-6.014-3.4-8.206A11.529 11.529 0 0 0 15.984 4Zm0 21.24a9.612 9.612 0 0 1-4.904-1.343l-.35-.208-3.65 1.058 1.076-3.559-.229-.373a9.616 9.616 0 0 1 7.057-14.564c2.578 0 5.006 1.005 6.828 2.828a9.611 9.611 0 0 1 2.83 6.813c0 5.31-4.328 9.634-9.634 9.634Z" />
      </svg>
    </a>
  )
}
