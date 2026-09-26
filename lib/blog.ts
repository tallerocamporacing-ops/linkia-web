// Artículos del blog. Contenido estático: se renderiza en build (output: export).
// Cada post apunta a una keyword long-tail de intención comercial.

export type Block =
  | { type: "h2"; text: string }
  | { type: "p"; html: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string }

export type Post = {
  slug: string
  title: string
  description: string
  keywords: string[]
  date: string
  readMinutes: number
  category: string
  blocks: Block[]
}

export const posts: Post[] = [
  {
    slug: "software-para-taller-mecanico-como-elegir",
    title: "Cómo elegir un software para tu taller mecánico en Argentina (guía 2026)",
    description:
      "Qué tiene que tener un software de gestión para taller mecánico: órdenes de trabajo, presupuestos, portal del cliente, turnos y repuestos. Checklist para no equivocarte.",
    keywords: ["software para taller mecánico", "sistema gestión taller", "programa para taller mecánico argentina"],
    date: "2026-09-25",
    readMinutes: 6,
    category: "Guías",
    blocks: [
      {
        type: "p",
        html: "Si llegaste acá es porque el cuaderno, el Excel o el grupo de WhatsApp del taller ya no dan más. Presupuestos que se pierden, autos que nadie sabe en qué estado están, clientes que llaman diez veces preguntando &ldquo;¿ya está mi auto?&rdquo;. Un <strong>software para taller mecánico</strong> resuelve eso, pero no todos sirven para un taller argentino de 2 a 15 personas. Esta guía te da un checklist concreto.",
      },
      { type: "h2", text: "1. Que esté pensado para un taller, no para una fábrica" },
      {
        type: "p",
        html: "Muchos sistemas de gestión son ERPs genéricos adaptados a la fuerza. Se nota en la primera pantalla: mil menús, campos que nunca vas a usar y una curva de aprendizaje de semanas. Buscá un sistema donde el centro sea la <strong>orden de trabajo</strong> y el flujo real del taller: entra el auto, se diagnostica, se presupuesta, el cliente aprueba, se repara, se entrega.",
      },
      { type: "h2", text: "2. Portal del cliente: que el cliente se autoatienda" },
      {
        type: "p",
        html: "El mayor ladrón de tiempo en un taller son las llamadas de seguimiento. Un buen sistema le da a cada cliente un <strong>link propio</strong> donde ve el estado de su auto, los presupuestos pendientes y el historial completo. Si además puede <strong>aprobar el presupuesto desde el celular</strong>, te ahorrás el ida y vuelta de fotos por WhatsApp.",
      },
      { type: "h2", text: "3. Presupuestos que se aprueban rápido" },
      {
        type: "p",
        html: "Un presupuesto escrito a mano en una hoja no genera confianza. Necesitás un PDF prolijo con el logo del taller, ítems separados entre repuestos y mano de obra, y la posibilidad de <strong>firma digital</strong> para dejar constancia de la aprobación. Leé más en <a href='/blog/como-cobrar-mas-taller-mecanico'>cómo cobrar más sin subir los precios</a>.",
      },
      { type: "h2", text: "4. Tablero visual (kanban) con semáforo de demora" },
      {
        type: "p",
        html: "Ver todas las OTs en columnas por estado te dice en dos segundos qué auto lleva demasiado tiempo parado. Un <strong>semáforo por antigüedad</strong> (verde, amarillo, rojo) evita que un auto quede olvidado en el fondo del taller.",
      },
      { type: "h2", text: "5. Recordatorios automáticos de VTV y service" },
      {
        type: "p",
        html: "Esto es lo que convierte a un cliente de una vez en un cliente de por vida. El sistema tiene que cruzar el kilometraje y las fechas de cada auto y <strong>avisar solo</strong> cuando toca el service, la distribución o la VTV. Te lo explicamos en detalle en <a href='/blog/recordatorios-vtv-service-fidelizar-clientes'>recordatorios de VTV y service</a>.",
      },
      { type: "h2", text: "6. Repuestos y proveedores conectados a la OT" },
      {
        type: "p",
        html: "Cargar un repuesto en la orden tiene que descontarlo del stock automáticamente. Si no, el inventario es ficción a la semana. Mirá <a href='/blog/control-de-stock-repuestos-taller'>control de stock de repuestos</a>.",
      },
      { type: "h2", text: "7. Sin instalación, desde el celular" },
      {
        type: "p",
        html: "El mecánico está abajo del auto con las manos sucias. Si el sistema solo funciona en la PC de la oficina, no se va a usar. Tiene que andar en el celular, sin instalar nada, con la información sincronizada al instante.",
      },
      { type: "h2", text: "8. Precio claro y sin permanencia" },
      {
        type: "p",
        html: "Desconfiá de los &ldquo;pedí una cotización&rdquo;. Un software para talleres chicos y medianos tiene que tener un precio publicado en pesos, facturación mensual y la libertad de irte cuando quieras. Y si ofrece reembolso los primeros días, mejor: es señal de que confían en el producto.",
      },
      { type: "h2", text: "Checklist rápido antes de contratar" },
      {
        type: "ul",
        items: [
          "¿Funciona 100% en el navegador del celular?",
          "¿El cliente tiene su propio portal para ver y aprobar presupuestos?",
          "¿Las OTs se ven en un kanban con alerta de demora?",
          "¿Avisa solo cuando toca service, distribución o VTV?",
          "¿Descuenta stock al cargar repuestos en una OT?",
          "¿Precio publicado, en pesos, sin permanencia?",
          "¿Te migran los clientes del Excel sin cargo?",
        ],
      },
      {
        type: "p",
        html: "LINKIA cumple los siete puntos. Está hecho en Argentina por un taller para talleres, cuesta <a href='/#precio'>$54.000 por mes</a> y podés ver <a href='/#funciones'>todas las funciones acá</a>.",
      },
    ],
  },
  {
    slug: "orden-de-trabajo-digital-vs-papel",
    title: "Orden de trabajo digital vs. cuaderno: qué cambia de verdad en tu taller",
    description:
      "Comparación honesta entre la orden de trabajo en papel y la orden de trabajo digital: tiempos, errores, cobros y reclamos. Con ejemplos de un taller real.",
    keywords: ["orden de trabajo taller mecánico", "orden de trabajo digital", "modelo orden de trabajo taller"],
    date: "2026-09-25",
    readMinutes: 5,
    category: "Operación",
    blocks: [
      {
        type: "p",
        html: "La <strong>orden de trabajo</strong> es el documento más importante del taller: dice qué auto entró, qué pidió el cliente, qué se hizo, qué se cobró y quién lo hizo. Cuando vive en un talonario o en un cuaderno, cada uno de esos datos puede perderse. Veamos qué cambia cuando pasa a ser digital.",
      },
      { type: "h2", text: "El ingreso del vehículo" },
      {
        type: "p",
        html: "<strong>Papel:</strong> patente, nombre, teléfono y &ldquo;hace un ruido&rdquo;. Nadie anota el kilometraje, el nivel de nafta ni el estado de la carrocería.<br/><strong>Digital:</strong> el cliente ya existe en el sistema, se elige el auto, se carga el km de ingreso, se sacan fotos del estado y el cliente firma en el celular. Ese registro te salva de un reclamo por un rayón que ya estaba.",
      },
      { type: "h2", text: "El seguimiento" },
      {
        type: "p",
        html: "<strong>Papel:</strong> &ldquo;¿el Gol blanco en qué está?&rdquo; y alguien va a mirar. El cliente llama, nadie sabe, se promete llamar y no se llama.<br/><strong>Digital:</strong> la OT está en una columna del kanban con un color que dice cuánto hace que está ahí. El cliente entra a su portal y lo ve solo. Cero llamadas.",
      },
      { type: "h2", text: "El presupuesto y la aprobación" },
      {
        type: "p",
        html: "<strong>Papel:</strong> se pasa un número por teléfono, el cliente dice &ldquo;dale&rdquo; y después discute el total.<br/><strong>Digital:</strong> el presupuesto sale en PDF con logo, ítems y total, el cliente lo aprueba desde su portal y queda registrado con fecha, hora y firma. Cuando aprueba, la OT avanza sola en el tablero.",
      },
      { type: "h2", text: "El historial" },
      {
        type: "p",
        html: "Acá está la diferencia que se paga sola. Con papel, el historial del auto es lo que se acuerda el mecánico. Con OT digital, cada vehículo tiene su ficha: todas las órdenes, qué se cambió, a qué km, cuánto se cobró. Y sobre esa ficha se construyen los <a href='/blog/recordatorios-vtv-service-fidelizar-clientes'>recordatorios automáticos</a> que traen al cliente de vuelta.",
      },
      { type: "h2", text: "La ganancia real" },
      {
        type: "p",
        html: "En papel se sabe cuánto se cobró, pero rara vez cuánto salieron los repuestos de esa OT. Digital, cada orden registra el costo de repuestos y muestra la ganancia real por trabajo. Es la única forma de saber qué trabajos conviene hacer y cuáles no.",
      },
      { type: "h2", text: "¿Y el tiempo de carga?" },
      {
        type: "p",
        html: "Es la objeción clásica: &ldquo;me va a llevar más tiempo cargarlo&rdquo;. La realidad es al revés cuando el sistema está bien diseñado: cliente y auto se cargan una sola vez, los repuestos se autocompletan, y la OT se crea en menos de un minuto desde el celular. Ese minuto te ahorra las diez llamadas de después.",
      },
      {
        type: "quote",
        text: "Una OT digital no es un formulario más: es la memoria del taller. Lo que no está en la OT, no existe cuando hay que cobrarlo o defenderlo.",
      },
      {
        type: "p",
        html: "Si querés ver cómo es una orden de trabajo digital en la práctica, mirá el <a href='/#tour'>video de LINKIA</a> o leé la <a href='/blog/software-para-taller-mecanico-como-elegir'>guía para elegir un software para tu taller</a>.",
      },
    ],
  },
  {
    slug: "recordatorios-vtv-service-fidelizar-clientes",
    title: "Recordatorios de VTV y service: cómo hacer que los clientes vuelvan solos",
    description:
      "Los talleres que avisan cuando toca el service, la distribución o la VTV facturan más y sin publicidad. Cómo automatizarlo con kilometraje y fechas.",
    keywords: ["recordatorio VTV", "recordatorio service taller", "fidelizar clientes taller mecánico"],
    date: "2026-09-25",
    readMinutes: 5,
    category: "Clientes",
    blocks: [
      {
        type: "p",
        html: "Conseguir un cliente nuevo cuesta plata: publicidad, descuentos, tiempo. Hacer que uno que ya vino <strong>vuelva</strong> cuesta casi nada, si tenés la información y alguien que avise. El problema es que en la mayoría de los talleres ese &ldquo;alguien&rdquo; no existe. Los recordatorios automáticos son ese alguien.",
      },
      { type: "h2", text: "Qué hay que recordar y cada cuánto" },
      {
        type: "ul",
        items: [
          "<strong>Service de aceite y filtro:</strong> cada 10.000 km o un año, lo que llegue primero.",
          "<strong>Correa/cadena de distribución:</strong> cada 50.000 km o 5 años (según fabricante).",
          "<strong>Service de caja automática:</strong> cada 70.000 km o 5 años.",
          "<strong>VTV:</strong> un mes antes del vencimiento, para que el cliente llegue con margen.",
        ],
      },
      { type: "h2", text: "Por qué no funciona hacerlo a mano" },
      {
        type: "p",
        html: "Porque depende de que alguien revise una planilla todos los lunes, y en el taller los lunes hay autos. A la tercera semana nadie lo hace más. La única forma de que sea consistente es que el sistema <strong>cruce los datos solo</strong>.",
      },
      { type: "h2", text: "Cómo funciona un recordatorio automático bien hecho" },
      {
        type: "p",
        html: "Cada vez que un auto entra al taller se registra el <strong>kilometraje de ingreso</strong>. El sistema busca en el historial cuándo se hizo por última vez cada trabajo (service, distribución, caja) y a cuántos km. Si el auto entró con 153.000 km y la distribución se hizo a los 100.000, salta la alerta: <em>&ldquo;Distribución vencida, tocaba a los 150.000&rdquo;</em>. Lo mismo con las fechas de VTV.",
      },
      {
        type: "p",
        html: "Con eso pasan tres cosas a la vez: el operador ve una notificación en pantalla para ofrecer el trabajo mientras el auto todavía está ahí, el cliente recibe un <strong>email automático</strong> con los datos del taller, y en talleres con WhatsApp Business integrado, también un mensaje. Cuando alguien avisó, lo marca con un tilde y la alerta deja de molestar.",
      },
      { type: "h2", text: "El detalle que hace la diferencia: la fuente de los datos" },
      {
        type: "p",
        html: "El recordatorio es tan bueno como el historial. Si las órdenes de trabajo no tienen el km de ingreso ni el detalle de lo que se hizo, no hay qué cruzar. Por eso conviene empezar por tener <a href='/blog/orden-de-trabajo-digital-vs-papel'>órdenes de trabajo digitales</a> bien cargadas: cada OT que hoy cargás bien es un cliente que vuelve en un año.",
      },
      { type: "h2", text: "Números para pensar" },
      {
        type: "p",
        html: "Un taller con 300 clientes activos que logra que solo el 20% vuelva por un service que de otra forma habría hecho en otro lado, son 60 trabajos por año que no costaron un peso de publicidad. Con un ticket promedio de service, la cuenta se hace sola.",
      },
      {
        type: "p",
        html: "En LINKIA los recordatorios de service, distribución, caja automática y VTV vienen incluidos y se activan solos con el historial de cada auto. Mirá <a href='/#funciones'>cómo funciona</a> o leé cuánto <a href='/#precio'>cuesta</a>.",
      },
    ],
  },
  {
    slug: "como-cobrar-mas-taller-mecanico",
    title: "Cómo cobrar más en tu taller sin subir los precios: presupuestos que se aprueban",
    description:
      "El presupuesto es donde se gana o se pierde plata en un taller mecánico. Cómo presentarlo, qué incluir y cómo lograr que el cliente lo apruebe rápido.",
    keywords: ["presupuesto taller mecánico", "cómo hacer un presupuesto mecánico", "cobrar más taller mecánico"],
    date: "2026-09-25",
    readMinutes: 5,
    category: "Ventas",
    blocks: [
      {
        type: "p",
        html: "La mayoría de los talleres no pierde plata porque cobra barato. La pierde porque <strong>no cobra todo lo que hizo</strong>, porque el cliente rechaza presupuestos que estaban bien, o porque nunca ofreció el trabajo adicional que el auto necesitaba. Las tres cosas se arreglan con el presupuesto.",
      },
      { type: "h2", text: "1. Separá repuestos de mano de obra" },
      {
        type: "p",
        html: "Un número global genera desconfianza. Un presupuesto con ítems (&ldquo;Kit distribución&rdquo;, &ldquo;Bomba de agua&rdquo;, &ldquo;Mano de obra distribución&rdquo;) explica el precio solo. El cliente entiende qué está pagando y discute menos.",
      },
      { type: "h2", text: "2. Presentalo prolijo, con tu logo" },
      {
        type: "p",
        html: "Un PDF con el logo del taller, la dirección y el detalle de ítems vale más que el mismo número dicho por teléfono. Parece superficial; no lo es. El cliente está decidiendo si confía en vos con su auto, y la prolijidad es la primera señal que ve.",
      },
      { type: "h2", text: "3. Mandalo por donde el cliente lo puede aprobar" },
      {
        type: "p",
        html: "Si lo mandás como foto por WhatsApp, la aprobación es un &ldquo;dale&rdquo; que después se olvida. Si el cliente lo recibe en un <strong>portal propio</strong> donde toca &ldquo;Aprobar&rdquo;, queda registrado con fecha y hora, y vos podés arrancar con tranquilidad.",
      },
      { type: "h2", text: "4. Ofrecé el trabajo que el auto necesita, no solo el que pidió" },
      {
        type: "p",
        html: "Acá está la plata que la mayoría deja en la mesa. El auto entró por frenos, pero tiene la distribución vencida. Si no lo ofrecés, otro lo va a hacer. Un sistema que te <a href='/blog/recordatorios-vtv-service-fidelizar-clientes'>avisa solo qué le toca al auto</a> mientras está en el taller convierte cada ingreso en dos presupuestos en lugar de uno.",
      },
      { type: "h2", text: "5. Hacé seguimiento a los presupuestos pendientes" },
      {
        type: "p",
        html: "Un presupuesto sin respuesta no es un no. Es un cliente ocupado. Tener una lista de presupuestos <em>Pendientes de seguimiento</em> con fecha para volver a contactar recupera trabajos que ya dabas por perdidos.",
      },
      { type: "h2", text: "6. Registrá la seña y el costo real" },
      {
        type: "p",
        html: "Anotar la seña en el presupuesto evita discusiones al entregar. Y cargar el costo de los repuestos te dice la <strong>ganancia real</strong> de cada trabajo, para saber qué presupuestar con más margen la próxima vez.",
      },
      {
        type: "quote",
        text: "El taller que presupuesta bien no es el que cobra más caro: es el que cobra todo, lo cobra rápido y ofrece lo que el auto necesita.",
      },
      {
        type: "p",
        html: "LINKIA genera presupuestos en PDF con tu logo, los publica en el portal del cliente para que los apruebe desde el celular y te avisa qué otros trabajos le tocan al auto. Todo por <a href='/#precio'>$54.000 por mes</a>.",
      },
    ],
  },
  {
    slug: "control-de-stock-repuestos-taller",
    title: "Control de stock de repuestos en el taller: dejá de perder plata en piezas que no cobrás",
    description:
      "Cómo llevar el inventario de repuestos de un taller mecánico sin volverse loco: qué controlar, cómo descontar del stock desde la orden de trabajo y cómo cobrar todo.",
    keywords: ["control de stock repuestos", "inventario taller mecánico", "gestión de repuestos taller"],
    date: "2026-09-25",
    readMinutes: 4,
    category: "Operación",
    blocks: [
      {
        type: "p",
        html: "En casi todos los talleres pasa lo mismo: hay un estante con repuestos, nadie sabe exactamente qué hay, y cada tanto aparece una pieza que se usó en un auto y nunca se cobró. Ese repuesto no cobrado es plata que salió de tu bolsillo. El <strong>control de stock</strong> no es burocracia: es dejar de regalar piezas.",
      },
      { type: "h2", text: "Qué conviene tener en stock (y qué no)" },
      {
        type: "p",
        html: "No hace falta inventariar todo. Conviene controlar lo que <strong>rota</strong>: filtros, aceites, pastillas, lámparas, bujías, correas comunes. Lo que se compra para un trabajo puntual entra y sale en la misma OT. La regla: si lo compraste dos veces este mes, va al catálogo.",
      },
      { type: "h2", text: "El error clásico: inventario aparte de la orden de trabajo" },
      {
        type: "p",
        html: "Una planilla de stock que se actualiza &ldquo;después&rdquo; no se actualiza nunca. El único momento en que el repuesto sale realmente del estante es cuando se usa en un auto. Por eso el stock tiene que <strong>descontarse desde la OT</strong>, no desde otro lado.",
      },
      { type: "h2", text: "Cómo funciona bien" },
      {
        type: "ul",
        items: [
          "Tenés un catálogo de repuestos con nombre, cantidad y precio.",
          "Al cargar un ítem en la orden de trabajo, el sistema te sugiere el repuesto del catálogo (autocompleta mientras escribís).",
          "Cuando la OT se entrega, el sistema descuenta la cantidad usada del stock, sin que nadie tenga que acordarse.",
          "Si el stock queda bajo, lo ves en el listado y reponés a tiempo.",
        ],
      },
      { type: "h2", text: "Proveedores en el mismo lugar" },
      {
        type: "p",
        html: "Tener los proveedores cargados con teléfono y qué le comprás a cada uno acelera la reposición y evita comprar más caro por apuro. Si además registrás el costo de compra, cada OT te muestra la <strong>ganancia real</strong>: precio cobrado menos repuestos.",
      },
      { type: "h2", text: "Cuánto se pierde sin control" },
      {
        type: "p",
        html: "Un filtro de aceite que no se cobra por semana parece nada. Son 50 filtros al año. Sumale un juego de pastillas cada tanto, aceite que &ldquo;sobraba&rdquo;, lámparas. En un taller chico son varios cientos de miles de pesos al año que se fueron en repuestos que nadie facturó.",
      },
      {
        type: "p",
        html: "En LINKIA el catálogo de repuestos, el autocompletado en la OT y el descuento automático de stock al entregar vienen incluidos. Mirá la <a href='/blog/software-para-taller-mecanico-como-elegir'>guía para elegir software de taller</a> o <a href='/#funciones'>todas las funciones</a>.",
      },
    ],
  },
]

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug)
}
