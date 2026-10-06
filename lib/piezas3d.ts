// Fuente única de verdad del servicio de PIEZAS 3D A MEDIDA para talleres.
// Consumido por app/piezas-3d/page.tsx (render + JSON-LD Service/FAQ) y la home.

export const PIEZAS_WHATSAPP_URL =
  "https://wa.me/5491130293345?text=Hola%20LINKIA%2C%20quiero%20cotizar%20una%20pieza%20impresa%20en%203D.%20Te%20mando%20fotos%20y%20medidas%3A"

export type Servicio3D = { titulo: string; desc: string; ejemplos: string[] }

export const servicios3d: Servicio3D[] = [
  {
    titulo: "Adaptar",
    desc: "Piezas que unen lo que de fábrica no encaja.",
    ejemplos: ["Bridas para mariposas", "Adaptadores de admisión", "Acoples y reducciones"],
  },
  {
    titulo: "Fijar",
    desc: "Soportes a medida para montar componentes donde los necesitás.",
    ejemplos: ["Soportes para rampas de inyección", "Bases para sensores", "Soportes de accesorios"],
  },
  {
    titulo: "Desarrollar",
    desc: "Lo que no existe en el mercado, diseñado desde cero.",
    ejemplos: ["Prototipos funcionales", "Plantillas de montaje", "Útiles y herramientas de taller"],
  },
]

export type Propiedad3D = { titulo: string; desc: string; nota?: boolean }

export const propiedades3d: Propiedad3D[] = [
  { titulo: "Alta rigidez", desc: "El refuerzo de fibra de carbono da piezas firmes para uso funcional." },
  { titulo: "Estabilidad dimensional", desc: "Ayuda a conservar la geometría y las medidas en el tiempo." },
  { titulo: "Resistencia térmica", desc: "Para aplicaciones técnicas evaluadas caso por caso.", nota: true },
  { titulo: "Aceites y grasas", desc: "Buena resistencia del material al ambiente de taller.", nota: true },
]

export const PROPIEDADES_NOTA =
  "Las prestaciones dependen del filamento, el diseño de la pieza y las condiciones de uso. Cada pedido se analiza antes de cotizar y te decimos con claridad si se puede hacer o no."

export type Paso3D = { t: string; d: string }

export const pasos3d: Paso3D[] = [
  {
    t: "Nos mandás la idea",
    d: "Por WhatsApp: fotos de la pieza original o del lugar donde va, medidas aproximadas, un croquis o un plano si lo tenés. No hace falta saber diseñar.",
  },
  {
    t: "La analizamos y cotizamos",
    d: "Revisamos si es viable en impresión 3D, qué material conviene y te pasamos precio y plazo estimado. Sin compromiso.",
  },
  {
    t: "La fabricamos y te la enviamos",
    d: "Diseñamos, imprimimos y controlamos la pieza. Retiro en nuestro taller en Monte Grande o envío a todo el país.",
  },
]

export const queMandar = [
  "Fotos de la pieza original (aunque esté rota) con una regla o calibre al lado",
  "Fotos del lugar donde va montada",
  "Medidas principales: largo, ancho, diámetros, espesores, distancia entre agujeros",
  "Para qué se usa y qué esfuerzo o temperatura tiene que soportar",
  "Cantidad que necesitás",
  "Si lo tenés: plano, croquis a mano o archivo 3D (STL, STEP)",
]

export type Faq3D = { q: string; a: string }

export const faqs3d: Faq3D[] = [
  {
    q: "¿Qué materiales usan?",
    a: "El material habitual es nylon reforzado con fibra de carbono, que da piezas rígidas y estables. Según la pieza y el uso evaluamos otras opciones. Te lo indicamos en la cotización.",
  },
  {
    q: "¿Sirve para piezas de motor o que levantan temperatura?",
    a: "Depende de la zona y del esfuerzo. Para soportes, bridas de admisión, adaptadores y útiles suele funcionar muy bien. Para zonas de alta temperatura o piezas de seguridad lo evaluamos caso por caso, y si no es adecuado te lo decimos antes de cotizar.",
  },
  {
    q: "¿Necesito tener un plano?",
    a: "No. Con fotos de la pieza original o del lugar donde va, más las medidas principales, alcanza para arrancar. Del diseño nos encargamos nosotros. Si tenés un plano o un archivo 3D, mejor todavía.",
  },
  {
    q: "¿Cuánto cuesta y cuánto tarda?",
    a: "Varía según el tamaño, la complejidad y la cantidad. Por eso trabajamos con cotización: nos mandás la información, la analizamos y te pasamos precio y plazo estimado sin compromiso.",
  },
  {
    q: "¿Hacen envíos?",
    a: "Sí. Podés retirar en nuestro taller en Monte Grande (Buenos Aires) o te la enviamos por correo a todo el país.",
  },
  {
    q: "¿Tengo que ser cliente de LINKIA?",
    a: "No. El servicio es para cualquier taller o particular. Si ya usás LINKIA, escribinos por el mismo WhatsApp de siempre.",
  },
]
