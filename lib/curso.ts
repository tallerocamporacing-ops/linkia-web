// Fuente única de verdad del CURSO de Diagnóstico Automotriz (Ocampo Racing),
// vendido desde LINKIA con venta cruzada: 3 meses de LINKIA bonificados.
// Consumido por app/curso/page.tsx (render + JSON-LD Course/FAQ) y la home.

import { PRICE_ARS } from "@/lib/constants"

// Checkout de Hotmart (producto 8033342, oferta 9la1nl3t). `sck` = tracking de origen.
export const CURSO_CHECKOUT_URL =
  "https://pay.hotmart.com/S106546048W?off=9la1nl3t&sck=linkia_landing_curso"

export const CURSO_WHATSAPP_URL =
  "https://wa.me/5491130293345?text=Hola%20LINKIA%2C%20compr%C3%A9%20el%20curso%20de%20Diagn%C3%B3stico%20Automotriz%20y%20quiero%20activar%20mis%203%20meses%20bonificados"

export const CURSO_DUDAS_URL =
  "https://wa.me/5491130293345?text=Hola%20LINKIA%2C%20tengo%20una%20duda%20sobre%20el%20curso%20de%20Diagn%C3%B3stico%20Automotriz"

export const CURSO_INSTAGRAM_URL = "https://instagram.com/ocampo.racing"

// Precio Hotmart (ARS). Cuotas = Pago Inteligente de Hotmart (con recargo).
export const CURSO_PRICE_ARS = 320000
export const CURSO_PRICE_LABEL = "$320.000"
export const CURSO_CUOTAS = 3
export const CURSO_CUOTA_LABEL = "$114.835"

// Bonus: 3 meses de LINKIA sin cargo (valor = 3 × suscripción mensual).
export const BONUS_MESES = 3
export const BONUS_VALOR_ARS = PRICE_ARS * BONUS_MESES
export const BONUS_VALOR_LABEL = "$" + BONUS_VALOR_ARS.toLocaleString("es-AR")
export const VALOR_TOTAL_LABEL =
  "$" + (CURSO_PRICE_ARS + BONUS_VALOR_ARS).toLocaleString("es-AR")

// Duración real de los 11 módulos editados: 306,9 min.
export const CURSO_MINUTOS = 307
export const CURSO_HORAS_LABEL = "5 horas"

export type Modulo = {
  n: number
  titulo: string
  minutos: number
  resumen: string
  temas: string[]
}

export const modulos: Modulo[] = [
  {
    n: 1,
    titulo: "El pensamiento del especialista",
    minutos: 23,
    resumen:
      "Cómo razona un diagnosticador antes de tocar una herramienta. El método para dejar de cambiar piezas a prueba y error.",
    temas: [
      "Del síntoma a la causa: el orden correcto de las preguntas",
      "Por qué el 80% de las fallas se resuelven sin desarmar",
      "Cómo cobrar el diagnóstico como un servicio, no como un favor",
    ],
  },
  {
    n: 2,
    titulo: "Electricidad aplicada al diagnóstico",
    minutos: 49,
    resumen:
      "La base eléctrica que todo mecánico necesita para entender lo que mide: tensión, corriente, resistencia y caídas de tensión en el auto real.",
    temas: [
      "Ley de Ohm explicada sobre circuitos del vehículo",
      "Masas, alimentaciones y caídas de tensión: dónde se esconden las fallas",
      "Lectura de diagramas eléctricos sin volverse loco",
    ],
  },
  {
    n: 3,
    titulo: "Multímetro profesional",
    minutos: 48,
    resumen:
      "Sacale el jugo a la herramienta que ya tenés. Mediciones que te dicen exactamente qué está fallando.",
    temas: [
      "Medir con el circuito bajo carga (no en vacío)",
      "Diagnóstico de sensores y actuadores con multímetro",
      "Pruebas de bobinas, inyectores, relés y cableado",
    ],
  },
  {
    n: 4,
    titulo: "Scanner: hardware y comunicación",
    minutos: 17,
    resumen:
      "Qué hay detrás del conector OBD: protocolos, redes y cómo elegir el scanner correcto para tu taller.",
    temas: [
      "Protocolos OBD-II y redes CAN explicados simple",
      "Scanner genérico vs. multimarca vs. original: cuándo conviene cada uno",
      "Cómo saber si el problema es del auto o de la comunicación",
    ],
  },
  {
    n: 5,
    titulo: "Scanner: diagnóstico avanzado",
    minutos: 35,
    resumen:
      "Más allá de borrar códigos: datos en vivo, pruebas de actuadores y ejemplos reales del día a día del taller.",
    temas: [
      "Interpretar datos en vivo y encontrar el valor que no cierra",
      "Fuel trims, sondas lambda y adaptaciones",
      "Casos de diagnóstico reales resueltos con scanner",
    ],
  },
  {
    n: 6,
    titulo: "El osciloscopio: el lenguaje del auto",
    minutos: 37,
    resumen:
      "El módulo estrella. Aprendé a leer señales y a ver lo que el scanner no muestra. Con casos grabados sobre autos reales.",
    temas: [
      "Anatomía del osciloscopio y cómo configurarlo sin miedo",
      "Sincronismo cigüeñal / árbol de levas (caso Fiat Sigma)",
      "Falla de sensor CMP en un Peugeot 408 THP",
      "Inductancia de bobinas y compresión relativa (VW Suran)",
      "Medición de la red CAN con osciloscopio",
    ],
  },
  {
    n: 7,
    titulo: "Diagnóstico diésel esencial",
    minutos: 30,
    resumen:
      "Common rail sin misterios: alta presión, inyectores, sensores y un ejemplo de diagnóstico real en el taller.",
    temas: [
      "Sistema common rail: cómo funciona y dónde falla",
      "Pruebas de retorno de inyectores y presión de riel",
      "Caso real de diagnóstico diésel grabado en el taller",
    ],
  },
  {
    n: 8,
    titulo: "Diagnóstico por sistema",
    minutos: 20,
    resumen:
      "Un método ordenado para atacar cada sistema del auto: encendido, inyección, carga, arranque y confort.",
    temas: [
      "Árbol de decisión por sistema",
      "Fallas intermitentes: cómo cazarlas",
      "Cuándo parar de diagnosticar y cotizar la reparación",
    ],
  },
  {
    n: 9,
    titulo: "Inmovilizadores",
    minutos: 13,
    resumen:
      "Qué hace el inmovilizador, cómo se diagnostica y qué trabajos podés tomar en el taller sin depender de terceros.",
    temas: [
      "Transponder, antena y unidad: cómo se comunican",
      "Síntomas típicos de falla de inmovilizador",
      "Qué herramientas necesitás para programar llaves",
    ],
  },
  {
    n: 10,
    titulo: "Diagnóstico de ECU",
    minutos: 14,
    resumen:
      "Cuándo la culpa es de la computadora (y cuándo no). Pruebas para confirmarlo antes de mandarla a reparar.",
    temas: [
      "Alimentaciones, masas y señales de la ECU",
      "Cómo descartar el cableado antes de condenar la unidad",
      "Fallas típicas de ECU y qué se puede reparar",
    ],
  },
  {
    n: 11,
    titulo: "El mecánico potenciado por IA",
    minutos: 21,
    resumen:
      "Cómo usar inteligencia artificial en el taller para diagnosticar más rápido, buscar información técnica y atender mejor a tus clientes.",
    temas: [
      "Prompts que funcionan para consultas técnicas",
      "Interpretar diagramas, códigos y boletines con IA",
      "Cómo LINKIA usa IA para gestionar el taller",
    ],
  },
]

export type CursoFaq = { q: string; a: string }

export const cursoFaqs: CursoFaq[] = [
  {
    q: "¿Para quién es este curso?",
    a: "Para mecánicos que ya trabajan en un taller y quieren dejar de cambiar piezas a prueba y error. No hace falta saber electrónica previa: el módulo 2 arranca desde la base eléctrica y de ahí se avanza hasta osciloscopio, diésel, inmovilizadores y ECU.",
  },
  {
    q: "¿Cuánto dura y cómo se cursa?",
    a: "Son 11 módulos en video (alrededor de 5 horas en total) más un PDF de material por módulo. Se cursa 100% online, a tu ritmo, desde el celular o la computadora, en la plataforma Hotmart. Podés volver a ver cada clase las veces que quieras.",
  },
  {
    q: "¿Qué herramientas necesito?",
    a: "Con un multímetro y un scanner genérico ya podés aplicar la mayor parte del curso. Para el módulo de osciloscopio te mostramos opciones accesibles para taller; no hace falta comprar nada antes de empezar.",
  },
  {
    q: "¿Cómo funcionan los 3 meses bonificados de LINKIA?",
    a: "Después de comprar el curso nos mandás el comprobante de Hotmart por WhatsApp o email. En menos de 24 horas hábiles te creamos tu cuenta de LINKIA y marcamos tu taller con el plan Curso: 3 meses sin cargo, con todas las funciones. Al terminar el período decidís si seguís pagando la suscripción mensual normal ($54.000). No hay permanencia ni cobro automático.",
  },
  {
    q: "¿Y si ya soy cliente de LINKIA?",
    a: "También aplica: te bonificamos los próximos 3 meses de suscripción. Escribinos con tu comprobante y lo cargamos en tu cuenta.",
  },
  {
    q: "¿Puedo pagar en cuotas?",
    a: "Sí. Hotmart permite pagar en hasta 3 cuotas con tarjeta de crédito (Pago Inteligente, con un pequeño recargo) o en un pago único. El pago se procesa de forma segura en Hotmart; nosotros no vemos los datos de tu tarjeta.",
  },
  {
    q: "¿Tiene garantía?",
    a: "Sí. Hotmart ofrece 7 días de garantía: si el curso no es lo que esperabas, pedís el reembolso desde tu cuenta y te devuelven el 100% del dinero, sin preguntas.",
  },
  {
    q: "¿Quién dicta el curso?",
    a: "Agustín Ocampo, mecánico especialista en diagnóstico electrónico, dueño del taller Ocampo Racing (Buenos Aires) y creador de LINKIA. Todo lo que ves en el curso está grabado en el taller, sobre autos reales de clientes.",
  },
]
