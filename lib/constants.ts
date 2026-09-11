// Contactos (WhatsApp solo para dudas puntuales — no es el CTA principal)
export const WHATSAPP_URL =
  "https://wa.me/5491130293345?text=Hola%20LINKIA%2C%20tengo%20una%20duda%20antes%20de%20suscribirme"

export const INSTAGRAM_URL = "https://instagram.com/linkia.app"
export const TIKTOK_URL = "https://tiktok.com/@linkia.app"

// Login del sistema (lo sirve el worker en linkia.com.ar/login).
export const LOGIN_URL = "https://linkia.com.ar/login"

// Precio de la suscripción. USD es referencia; MP cobra en ARS.
// Cambiar acá + git push actualiza landing entera. MP notifica a suscriptores
// activos con 10 días de anticipación si sube el precio (lo hace el worker).
export const PRICE_ARS = 54000
export const PRICE_USD = 35
export const PRICE_ARS_LABEL = "$54.000"

// Checkout de Mercado Pago. El worker en /api/mp/checkout crea el preapproval
// (suscripción mensual) y hace 302 al init_point de MP.
// Hasta cargar credenciales, devuelve un aviso amistoso.
export const CHECKOUT_URL = "https://linkia.com.ar/api/mp/checkout"
