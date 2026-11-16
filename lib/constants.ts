// Contactos (WhatsApp solo para dudas puntuales — no es el CTA principal)
export const WHATSAPP_URL =
  "https://wa.me/5491130293345?text=Hola%20LINKIA%2C%20tengo%20una%20duda%20antes%20de%20suscribirme"

export const INSTAGRAM_URL = "https://instagram.com/linkia.app"
export const TIKTOK_URL = "https://tiktok.com/@linkia.app"

// Login del sistema (lo sirve el worker en linkia.com.ar/login).
export const LOGIN_URL = "https://linkia.com.ar/login"

// Precio de la suscripción. USD es referencia; MP cobra en ARS.
// 16-nov-2026: el precio NO se muestra en la landing (se vende también en
// España a otro valor). Las constantes quedan para el checkout/worker.
export const PRICE_ARS = 54000
export const PRICE_USD = 35
export const PRICE_ARS_LABEL = "$54.000"
// Texto que reemplaza al precio en la landing.
export const PRICE_CTA_LABEL = "Pedir precio por WhatsApp"
export const WHATSAPP_PRECIO_URL =
  "https://wa.me/5491130293345?text=Hola%20LINKIA%2C%20quiero%20saber%20el%20precio%20para%20mi%20taller"

// Checkout de Mercado Pago. El worker en /api/mp/checkout crea el preapproval
// (suscripción mensual) y hace 302 al init_point de MP.
// Hasta cargar credenciales, devuelve un aviso amistoso.
export const CHECKOUT_URL = "https://linkia.com.ar/api/mp/checkout"
