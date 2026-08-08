// Diccionario central i18n. ES por defecto, EN opcional.
export const languages = {
  es: "Español",
  en: "English",
} as const;

export const defaultLang = "es";
export type Lang = keyof typeof languages;

// ---- Strings de UI ----
export const ui = {
  es: {
    "meta.title": "Inicio | MacV",
    "meta.description":
      "Miguel Angel Cuellar Velandia (MacV) — Ingeniero de Software especializado en Astro, Python, JavaScript y desarrollo web.",
    "nav.langLabel": "Idioma",
    "hero.cv": "Descargar CV",
    "hero.cvHref": "/docs/CV-Miguel_Cuellar(English).pdf",
    "about.title.a": "Sobre ",
    "about.title.b": "mí",
    "about.text":
      "Ingeniero de Software egresado de la Universidad Surcolombiana con sólidos conocimientos en Astro, Python, JavaScript, HTML y CSS. Orientado a la resolución de problemas, con fuerte compromiso con el aprendizaje continuo y la actualización en nuevas tecnologías. Adaptable y con habilidad para el trabajo en equipo en entornos ágiles, enfocado en entregar soluciones eficientes a tiempo y en el crecimiento profesional constante dentro del sector tecnológico.",
    "cases.title.a": "Casos de ",
    "cases.title.b": "éxito",
    "cases.view": "Ver caso",
    "cases.soon": "Próximamente",
    "cases.back": "Volver",
    "cases.client": "Cliente",
    "cases.stack": "Stack",
    "cases.work": "Lo que hicimos",
    "cases.result": "Resultado",
    "cases.visit": "Visitar sitio",
    "experience.title.a": "EXP",
    "experience.title.b": "ERIENCIA",
    "experience.details": "Detalles",
    "education.title.a": "EDU",
    "education.title.b": "CACIÓN",
  },
  en: {
    "meta.title": "Home | MacV",
    "meta.description":
      "Miguel Angel Cuellar Velandia (MacV) — Software Engineer specialized in Astro, Python, JavaScript and web development.",
    "nav.langLabel": "Language",
    "hero.cv": "Download CV",
    "hero.cvHref": "/docs/CV-Miguel_Cuellar(English).pdf",
    "about.title.a": "About ",
    "about.title.b": "me",
    "about.text":
      "Software Engineer graduate from Universidad Surcolombiana with solid knowledge in Astro, Python, JavaScript, HTML, and CSS. Problem-solving oriented with a strong commitment to continuous learning and staying current with new technologies. Highly adaptable team player skilled in agile environments, focused on delivering efficient solutions on time and dedicated to constant professional growth within the technology sector.",
    "cases.title.a": "Success ",
    "cases.title.b": "stories",
    "cases.view": "View case",
    "cases.soon": "Coming soon",
    "cases.back": "Back",
    "cases.client": "Client",
    "cases.stack": "Stack",
    "cases.work": "What we did",
    "cases.result": "Result",
    "cases.visit": "Visit site",
    "experience.title.a": "EXP",
    "experience.title.b": "ERIENCE",
    "experience.details": "Details",
    "education.title.a": "EDU",
    "education.title.b": "CATION",
  },
} as const;

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)["es"]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

// URL con prefijo de idioma (es = sin prefijo)
export function localizedPath(path: string, lang: Lang): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return lang === defaultLang ? clean : `/${lang}${clean}`;
}

// ---- Contenido: Casos de éxito ----
// Un caso = un cliente/empresa. `trabajos` lista sub-trabajos SEPARADOS a mostrar
// (solo tiene sentido con varias cosas, ej. Friosystem). Con una sola cosa deja
// `trabajos: []`: la descripción basta y no se renderiza la sección "Lo que hicimos".
export type CaseTrabajo = {
  titulo: string;
  detalle: string;
  resultado?: string; // impacto medible (opcional)
};

export type CaseStudy = {
  slug: string; // url interna: /casos/<slug>
  nombre: string;
  tagline: string; // frase gancho corta
  cliente: string;
  resumen: string; // versión corta para la card (qué ES la empresa)
  descripcion: string; // qué ES el proyecto (versión larga, página detalle)
  stack: string[]; // chips de tecnología
  trabajos: CaseTrabajo[];
  urlPrincipal?: string; // enlace destacado del caso (sitio en vivo)
};

export const caseStudies: Record<Lang, CaseStudy[]> = {
  es: [
    {
      slug: "staurant",
      nombre: "STAURANT",
      tagline: "Plataforma social gastronómica",
      cliente: "Proyecto propio",
      resumen:
        "Plataforma social gastronómica que reinventa las reseñas: se valora plato por plato, no el restaurante entero.",
      descripcion:
        "Plataforma social gastronómica que reinventa las reseñas: en lugar de calificar el restaurante completo, permite valorar plato por plato de forma individual. Ese enfoque granular genera datos más precisos que alimentan recomendaciones culinarias personalizadas para cada usuario.",
      stack: ["Astro", "JavaScript", "CSS"], // TODO: confirmar stack real
      urlPrincipal: "https://staurant.netlify.app/",
      trabajos: [
        {
          titulo: "Diseño de identidad visual y UI",
          detalle:
            "Definición de la identidad visual y diseño de la interfaz completa: una experiencia limpia y moderna pensada para descubrir y valorar platos con facilidad.",
          resultado: "",
        },
        {
          titulo: "App web responsive (móvil y escritorio)",
          detalle:
            "Desarrollo de la aplicación web adaptable a cualquier dispositivo, con una experiencia fluida tanto en móvil como en escritorio.",
          resultado: "",
        },
        {
          titulo: "Sistema de reseñas plato por plato",
          detalle:
            "Núcleo de la plataforma: en lugar de calificar el restaurante completo, permite valorar cada plato de forma individual, generando datos más precisos.",
          resultado: "",
        },
        {
          titulo: "Motor de recomendaciones personalizadas",
          detalle:
            "Sistema que aprovecha las valoraciones granulares para alimentar recomendaciones culinarias personalizadas para cada usuario.",
          resultado: "",
        },
      ],
    },
    {
      slug: "friosystem",
      nombre: "AC Friosystem S.A.S",
      tagline: "Ecosistema web para una empresa de climatización",
      cliente: "AC Friosystem S.A.S",
      resumen:
        "Empresa huilense con más de 13 años en aire acondicionado, ventilación mecánica y refrigeración para los sectores doméstico, comercial, industrial y hospitalario.",
      descripcion:
        "AC Friosystem S.A.S es una empresa huilense con más de 13 años de experiencia, especializada en diseño, consultoría, suministro, instalación y mantenimiento de sistemas de aire acondicionado, ventilación mecánica y refrigeración. Con un equipo de ingenieros y técnicos HVAC certificados, desarrolla proyectos integrales para los sectores doméstico, comercial, industrial y hospitalario, con altos estándares técnicos y enfoque en ahorro energético. Su lema lo resume: «Ingeniería que enfría, eficiencia que perdura».",
      stack: ["Astro", "JavaScript", "CSS"], // TODO: ¿backend de reportes/tienda? (Supabase, Sheets…)
      urlPrincipal: "https://friosystem.com/",
      trabajos: [
        {
          titulo: "Sitio web corporativo",
          detalle:
            "Diseño y desarrollo del sitio institucional en Astro: portafolio de servicios, galería de proyectos (VRF, Chiller, hospitalario, comercial), marcas y clientes de referencia, misión/visión, feed de Instagram y contacto directo por WhatsApp.",
          resultado: "",
        },
        {
          titulo: "Sistema de reportes automatizados",
          detalle:
            "Herramienta interna para que los técnicos generen reportes de servicio automatizados desde campo, digitalizando la documentación técnica y dejando registro del trabajo realizado.",
          resultado: "",
        },
        {
          titulo: "Portal de trazabilidad para clientes",
          detalle:
            "Sistema donde cada cliente consulta la trazabilidad de lo que se ha hecho para él: historial de mantenimientos y servicios centralizado en un solo lugar.",
          resultado: "",
        },
        {
          titulo: "Tienda con carrito por WhatsApp",
          detalle:
            "Catálogo de equipos filtrable por marca y tipo (Inverter, tradicional, portátil, línea LG…), con ofertas y un carrito que consolida el pedido y lo envía directo por WhatsApp para cerrar la venta.",
          resultado: "",
        },
      ],
    },
    {
      slug: "boliglobos",
      nombre: "Boliglobos Latino",
      tagline: "Plataforma integral para una marca de globología",
      cliente: "Boliglobos Latino",
      resumen:
        "Marca colombiana referente en globología —el arte de decorar con globos— en Latinoamérica: fabrica herramientas y forma nuevos decoradores.",
      descripcion:
        "Boliglobos Latino es una empresa colombiana referente en globología —el arte de la decoración con globos— en Latinoamérica. Fabrica herramientas especializadas para el trabajo con globos y forma a nuevos decoradores con cursos de nivel básico, intermedio y avanzado, respaldada por una comunidad amplia y activa en redes sociales.",
      stack: ["Odoo", "Python", "JavaScript", "IA"], // TODO: confirmar stack real (¿modelo/servicio del chatbot?)
      urlPrincipal: "https://boligloboslatino.com/",
      trabajos: [
        {
          titulo: "Sitio web corporativo",
          detalle:
            "Desarrollo del sitio web de la marca sobre Odoo, centralizando su presencia digital y su ecosistema de tienda, cursos y certificados.",
          resultado: "",
        },
        {
          titulo: "Tienda online (e-commerce)",
          detalle:
            "Implementación de la tienda para vender herramientas y productos de globología, integrada al catálogo y al proceso de compra.",
          resultado: "",
        },
        {
          titulo: "Sistema de cursos e-learning",
          detalle:
            "Plataforma de formación online con Odoo para impartir los cursos de globología (básico, intermedio y avanzado) y gestionar el acceso a los contenidos.",
          resultado: "",
        },
        {
          titulo: "Certificados automatizados",
          detalle:
            "Sistema web a medida que genera y entrega los certificados de los cursos al instante, eliminando el procesamiento manual de documentos.",
          resultado: "",
        },
        {
          titulo: "Chatbot con inteligencia artificial",
          detalle:
            "Chatbot con IA para automatizar la atención al cliente, resolver dudas frecuentes y agilizar la comunicación con los usuarios.",
          resultado: "",
        },
      ],
    },
    {
      slug: "jdt",
      nombre: "JDT Capacitaciones",
      tagline: "Plataforma integral para una escuela de artes arqui-decorativas",
      cliente: "JDT Capacitaciones",
      resumen:
        "Escuela colombiana que forma emprendedores en artes y oficios arqui-decorativos, con cursos para aprender y emprender.",
      descripcion:
        "JDT Capacitaciones es una escuela colombiana enfocada en formar emprendedores en artes y oficios arqui-decorativos: capacita a quienes quieren aprender y emprender construyendo y decorando espacios con comodidad, brillo y color. Su visión es consolidar para 2028 una comunidad de al menos un millón de arqui-decoradores.",
      stack: ["Odoo", "Python", "JavaScript", "IA"], // TODO: confirmar stack real (¿modelo/servicio del chatbot?)
      urlPrincipal: "https://www.jdtcapacitaciones.co/",
      trabajos: [
        {
          titulo: "Sitio web corporativo",
          detalle:
            "Desarrollo del sitio web de la escuela sobre Odoo, centralizando su presencia digital y su ecosistema de tienda, cursos y certificados.",
          resultado: "",
        },
        {
          titulo: "Tienda online (e-commerce)",
          detalle:
            "Implementación de la tienda para vender productos y materiales arqui-decorativos, integrada al catálogo y al proceso de compra.",
          resultado: "",
        },
        {
          titulo: "Sistema de cursos e-learning",
          detalle:
            "Plataforma de formación online con Odoo para impartir los cursos de artes y oficios arqui-decorativos y gestionar el acceso a los contenidos.",
          resultado: "",
        },
        {
          titulo: "Certificados automatizados",
          detalle:
            "Sistema web a medida que genera y entrega los certificados de los cursos al instante, eliminando el procesamiento manual de documentos.",
          resultado: "",
        },
        {
          titulo: "Chatbot con inteligencia artificial",
          detalle:
            "Chatbot con IA para automatizar la atención al cliente, resolver dudas frecuentes y agilizar la comunicación con los usuarios.",
          resultado: "",
        },
      ],
    },
    {
      slug: "lacavalacteos",
      nombre: "La Cava Lácteos",
      tagline: "Chatbot con IA multicanal y panel unificado de pedidos",
      cliente: "La Cava Lácteos",
      resumen:
        "Marca colombiana de lácteos artesanales —quesos, yogures y derivados hechos a mano— que vende directo al cliente por WhatsApp y redes sociales.",
      descripcion:
        "La Cava es una marca colombiana de lácteos artesanales: elabora quesos, yogures y otros derivados de la leche de forma artesanal y los vende directo al cliente por WhatsApp e Instagram. Su fuerte es el trato cercano y un producto fresco y hecho a mano, con un catálogo digital que el propio negocio mantiene al día.",
      stack: ["Python", "FastAPI", "IA (Groq/Llama)", "Meta API", "Supabase", "PWA"],
      urlPrincipal: "https://lacavalacteos.com/",
      trabajos: [
        {
          titulo: "Chatbot con IA para gestionar pedidos",
          detalle:
            "Asistente con IA que atiende a los clientes, resuelve dudas del catálogo y toma el pedido de principio a fin: cuando el pedido queda confirmado, el bot lo registra automáticamente con nombre, dirección, pago y total.",
          resultado: "",
        },
        {
          titulo: "Integración en WhatsApp, Instagram y Messenger",
          detalle:
            "La misma IA conectada a los tres canales de Meta —WhatsApp, Instagram DM y Facebook Messenger— sobre un solo webhook, para que el negocio atienda por donde le escriba cada cliente sin duplicar trabajo.",
          resultado: "",
        },
        {
          titulo: "Panel unificado (PWA) de los 3 canales",
          detalle:
            "Panel instalable como app (PWA) que junta los tres canales en una sola bandeja: muestra las conversaciones de WhatsApp, Instagram y Messenger en un mismo lugar y permite responder a mano o dejar que la IA conteste.",
          resultado: "",
        },
        {
          titulo: "Gestión de pedidos desde el panel",
          detalle:
            "Pantalla de pedidos donde llegan en tiempo real los que cierra la IA, con aviso de nuevos y cambio de estado (nuevo, despachado, cancelado). Los datos persisten en Supabase para no perder el historial.",
          resultado: "",
        },
        {
          titulo: "Comprensión de notas de voz",
          detalle:
            "El chatbot transcribe las notas de voz que envían los clientes y las entiende como si fueran texto, para que puedan pedir hablando sin tener que escribir.",
          resultado: "",
        },
      ],
    },
    {
      slug: "macv-wear",
      nombre: "MacV Wear",
      tagline: "Marca de ropa: tienda online, inventario y ventas en un solo panel",
      cliente: "Proyecto propio",
      resumen:
        "Marca propia de ropa masculina enfocada en bóxers de alta calidad (94% algodón), con venta directa online.",
      descripcion:
        "MacV Wear es una marca propia de ropa masculina centrada en prendas básicas bien hechas —sobre todo bóxers de alta calidad (94% algodón / 6% elastómero, costuras reforzadas)— con la promesa de que «lo que ves es lo que recibes». Vende directo al cliente por su tienda online y apuesta por un catálogo simple y honesto: menos productos, pero buenos.",
      stack: ["Astro", "JavaScript", "CSS", "Apps Script", "Google Sheets", "PWA"],
      urlPrincipal: "https://macv-wear.netlify.app/",
      trabajos: [
        {
          titulo: "Sitio web y tienda online",
          detalle:
            "Diseño y desarrollo de la tienda en Astro: catálogo, página de producto, carrito y cierre de compra, con una identidad visual limpia y enfocada en el producto.",
          resultado: "",
        },
        {
          titulo: "Panel de inventario y ventas",
          detalle:
            "Panel privado del dueño que centraliza el negocio: registra ventas (descontando stock), agrega productos y pedidos, corrige inventario y muestra KPIs de ventas. Backend en Google Apps Script sobre Google Sheets, para que el dueño edite todo sin base de datos.",
          resultado: "",
        },
        {
          titulo: "Panel instalable (PWA)",
          detalle:
            "El panel de administración es instalable como app en el celular (PWA), con service worker propio que solo afecta al panel y deja la tienda pública intacta.",
          resultado: "",
        },
        {
          titulo: "Chatbot con IA multicanal",
          detalle:
            "Chatbot con IA para atender y vender por WhatsApp, Instagram y Messenger, con la atención automática y la toma de pedidos unificadas junto al panel de ventas e inventario en un solo lugar.",
          resultado: "",
        },
      ],
    },
    {
      slug: "hccompany",
      nombre: "HC Company S.A.S",
      tagline: "Sitio web para una empresa de mantenimiento de equipos de laboratorio",
      cliente: "HC Company S.A.S",
      resumen:
        "Empresa caleña especializada en mantenimiento de equipos de laboratorio en Colombia: preventivo, correctivo, predictivo, automatización y calificación IQ/OQ/PQ.",
      descripcion:
        "HC Company S.A.S es una empresa de Cali (Colombia) especializada en el mantenimiento de equipos de laboratorio a nivel nacional. Ofrece mantenimiento preventivo, correctivo y predictivo, además de automatización, restauración y adaptación de equipos, calificación IQ/OQ/PQ y asesoría técnica, respaldada por experiencia, conocimiento y un equipo humano y técnico propio. Su promesa lo resume: «¡Alargamos la vida útil de sus equipos!».",
      stack: ["Astro", "JavaScript", "CSS"],
      urlPrincipal: "https://hccompanysas.com/",
      trabajos: [
        {
          titulo: "Sitio web corporativo",
          detalle:
            "Diseño y desarrollo del sitio institucional en Astro: portafolio de servicios (mantenimiento preventivo, correctivo y predictivo, automatización, calificación IQ/OQ/PQ y asesoría), presentación de la empresa y contacto directo por WhatsApp.",
          resultado: "",
        },
        {
          titulo: "Sistema de reportes automatizados",
          detalle:
            "Herramienta interna para que los técnicos generen reportes de servicio automatizados desde campo, digitalizando la documentación técnica de cada mantenimiento y dejando registro del trabajo realizado.",
          resultado: "",
        },
        {
          titulo: "Portal de trazabilidad para clientes",
          detalle:
            "Sistema donde cada cliente consulta la trazabilidad de sus equipos: historial de mantenimientos, calificaciones y servicios centralizado en un solo lugar.",
          resultado: "",
        },
      ],
    },
    {
      slug: "tasas-liquidaciones",
      nombre: "Tasas y Liquidaciones",
      tagline: "App jurídico-financiera para abogados: tasas de usura y liquidaciones pensionales",
      cliente: "Proyecto propio",
      resumen:
        "App web jurídico-financiera para abogados en Colombia: consulta tasas SFC (usura e IBC) y liquida intereses y diferencias de mesadas pensionales. Se vende por suscripción.",
      descripcion:
        "«Tasas y Liquidaciones» es una aplicación web jurídico-financiera para Colombia, pensada para abogados y que se vende por suscripción. Reúne dos herramientas en una: la consulta del Interés Bancario Corriente y la Tasa de Usura por modalidad de crédito, mes y año —con gráfica histórica y calculadoras de mora e IPC—, y la liquidación de mesadas pensionales, que indexa por IPC las diferencias hasta la ejecutoria de la sentencia y liquida los intereses moratorios mes a mes (Art. 141 Ley 100 de 1993), con soporte del tramo DTF para condenas contra el Estado (Art. 192 CPACA). Trabaja con datos oficiales (DANE, SFC, Banco de la República) y exporta los resultados a PDF y Word.",
      stack: ["JavaScript", "Tailwind CSS", "Chart.js", "jsPDF"],
      urlPrincipal: "https://usura.vercel.app/",
      trabajos: [
        {
          titulo: "Consulta de tasas SFC (usura e IBC)",
          detalle:
            "Módulo que consulta el Interés Bancario Corriente y la Tasa de Usura por modalidad, mes y año, con datos oficiales en vivo de la SFC, trazabilidad de la resolución vigente, gráfica histórica y calculadoras de mora y de actualización por IPC.",
          resultado: "",
        },
        {
          titulo: "Motor de liquidación pensional",
          detalle:
            "Reproduce las tablas de un dictamen pericial: indexa por IPC las diferencias de mesada hasta la ejecutoria y liquida los intereses moratorios con la Tasa de Usura mes a mes (Art. 141 Ley 100 de 1993). Contempla reajuste anual, aporte a salud por tramo y abonos parciales.",
          resultado: "Validado al peso contra dictámenes reales.",
        },
        {
          titulo: "Tramo DTF para condenas contra el Estado",
          detalle:
            "Soporte del Art. 192 CPACA: en condenas contra entidades estatales intercala la DTF del Banco de la República durante el plazo posterior a la ejecutoria, con clasificación día a día antes de que arranque la mora.",
          resultado: "",
        },
        {
          titulo: "Exportación a PDF/Word y acceso por suscripción",
          detalle:
            "Exportación profesional de tablas y resultados a PDF y Word para anexar al proceso, y una puerta de acceso por usuario para ofrecer la herramienta a los abogados bajo suscripción.",
          resultado: "",
        },
      ],
    },
  ],
  en: [
    {
      slug: "staurant",
      nombre: "STAURANT",
      tagline: "Gastronomic social platform",
      cliente: "Personal project",
      resumen:
        "A gastronomic social platform that reinvents reviews: you rate each dish individually, not the whole restaurant.",
      descripcion:
        "A gastronomic social platform that reinvents reviews: instead of rating the whole restaurant, it lets users rate each dish individually. That granular approach produces more precise data, which powers personalized culinary recommendations for every user.",
      stack: ["Astro", "JavaScript", "CSS"], // TODO
      urlPrincipal: "https://staurant.netlify.app/",
      trabajos: [
        {
          titulo: "Visual identity & UI design",
          detalle:
            "Definition of the visual identity and design of the full interface: a clean, modern experience built to discover and rate dishes with ease.",
          resultado: "",
        },
        {
          titulo: "Responsive web app (mobile & desktop)",
          detalle:
            "Development of a web application that adapts to any device, with a smooth experience on both mobile and desktop.",
          resultado: "",
        },
        {
          titulo: "Dish-by-dish review system",
          detalle:
            "The core of the platform: instead of rating the whole restaurant, it lets users rate each dish individually, producing more precise data.",
          resultado: "",
        },
        {
          titulo: "Personalized recommendation engine",
          detalle:
            "A system that leverages the granular ratings to power personalized culinary recommendations for every user.",
          resultado: "",
        },
      ],
    },
    {
      slug: "friosystem",
      nombre: "AC Friosystem S.A.S",
      tagline: "A full web ecosystem for an HVAC company",
      cliente: "AC Friosystem S.A.S",
      resumen:
        "A company from Huila (Colombia) with over 13 years in air conditioning, mechanical ventilation and refrigeration for the residential, commercial, industrial and hospital sectors.",
      descripcion:
        "AC Friosystem S.A.S is a company from Huila (Colombia) with over 13 years of experience, specialized in the design, consulting, supply, installation and maintenance of air conditioning, mechanical ventilation and refrigeration systems. With a team of certified HVAC engineers and technicians, it delivers integral projects for the residential, commercial, industrial and hospital sectors, with high technical standards and a focus on energy savings. Its motto sums it up: “Engineering that cools, efficiency that lasts.”",
      stack: ["Astro", "JavaScript", "CSS"], // TODO: reports/store backend? (Supabase, Sheets…)
      urlPrincipal: "https://friosystem.com/",
      trabajos: [
        {
          titulo: "Corporate website",
          detalle:
            "Design and development of the institutional site in Astro: service portfolio, project gallery (VRF, Chiller, hospital, commercial), brands and reference clients, mission/vision, Instagram feed and direct WhatsApp contact.",
          resultado: "",
        },
        {
          titulo: "Automated reporting system",
          detalle:
            "Internal tool for technicians to generate automated service reports from the field, digitizing technical documentation and keeping a record of the work done.",
          resultado: "",
        },
        {
          titulo: "Client traceability portal",
          detalle:
            "A system where each client can track everything that has been done for them: maintenance and service history centralized in one place.",
          resultado: "",
        },
        {
          titulo: "Store with WhatsApp cart",
          detalle:
            "Equipment catalog filterable by brand and type (Inverter, traditional, portable, LG line…), with deals and a cart that consolidates the order and sends it straight to WhatsApp to close the sale.",
          resultado: "",
        },
      ],
    },
    {
      slug: "boliglobos",
      nombre: "Boliglobos Latino",
      tagline: "An all-in-one platform for a balloon-art brand",
      cliente: "Boliglobos Latino",
      resumen:
        "A Colombian company and leading name in balloon art (“globología”) across Latin America: it manufactures specialized tools and trains new decorators.",
      descripcion:
        "Boliglobos Latino is a Colombian company and a leading name in balloon art (“globología”) across Latin America. It manufactures specialized tools for balloon work and trains new decorators through basic, intermediate and advanced courses, backed by a large and active social-media community.",
      stack: ["Odoo", "Python", "JavaScript", "AI"], // TODO: confirm real stack (chatbot model/service?)
      urlPrincipal: "https://boligloboslatino.com/",
      trabajos: [
        {
          titulo: "Corporate website",
          detalle:
            "Development of the brand's website on Odoo, centralizing its digital presence and its store, courses and certificates ecosystem.",
          resultado: "",
        },
        {
          titulo: "Online store (e-commerce)",
          detalle:
            "Implementation of the store to sell balloon-art tools and products, integrated with the catalog and checkout process.",
          resultado: "",
        },
        {
          titulo: "E-learning course system",
          detalle:
            "Online training platform on Odoo to deliver the balloon-art courses (basic, intermediate and advanced) and manage access to the content.",
          resultado: "",
        },
        {
          titulo: "Automated certificates",
          detalle:
            "Custom web system that generates and delivers course certificates instantly, removing manual document processing.",
          resultado: "",
        },
        {
          titulo: "AI-powered chatbot",
          detalle:
            "An AI chatbot to automate customer support, answer frequent questions and speed up communication with users.",
          resultado: "",
        },
      ],
    },
    {
      slug: "jdt",
      nombre: "JDT Capacitaciones",
      tagline: "An all-in-one platform for an arqui-decorative arts school",
      cliente: "JDT Capacitaciones",
      resumen:
        "A Colombian school that trains entrepreneurs in arqui-decorative arts and crafts, with courses to learn and start a business.",
      descripcion:
        "JDT Capacitaciones is a Colombian school focused on training entrepreneurs in arqui-decorative arts and crafts: it teaches those who want to learn and start a business building and decorating spaces with comfort, shine and color. Its vision is to build, by 2028, a community of at least one million arqui-decorators.",
      stack: ["Odoo", "Python", "JavaScript", "AI"], // TODO: confirm real stack (chatbot model/service?)
      urlPrincipal: "https://www.jdtcapacitaciones.co/",
      trabajos: [
        {
          titulo: "Corporate website",
          detalle:
            "Development of the school's website on Odoo, centralizing its digital presence and its store, courses and certificates ecosystem.",
          resultado: "",
        },
        {
          titulo: "Online store (e-commerce)",
          detalle:
            "Implementation of the store to sell arqui-decorative products and materials, integrated with the catalog and checkout process.",
          resultado: "",
        },
        {
          titulo: "E-learning course system",
          detalle:
            "Online training platform on Odoo to deliver the arqui-decorative arts and crafts courses and manage access to the content.",
          resultado: "",
        },
        {
          titulo: "Automated certificates",
          detalle:
            "Custom web system that generates and delivers course certificates instantly, removing manual document processing.",
          resultado: "",
        },
        {
          titulo: "AI-powered chatbot",
          detalle:
            "An AI chatbot to automate customer support, answer frequent questions and speed up communication with users.",
          resultado: "",
        },
      ],
    },
    {
      slug: "lacavalacteos",
      nombre: "La Cava Lácteos",
      tagline: "Multichannel AI chatbot with a unified orders panel",
      cliente: "La Cava Lácteos",
      resumen:
        "A Colombian artisanal dairy brand —handmade cheeses, yogurts and dairy products— that sells directly to customers over WhatsApp and social media.",
      descripcion:
        "La Cava is a Colombian artisanal dairy brand: it makes cheeses, yogurts and other dairy products by hand and sells them directly to customers over WhatsApp and Instagram. Its strength is close, personal service and a fresh, handmade product, backed by a digital catalog the business keeps up to date itself.",
      stack: ["Python", "FastAPI", "AI (Groq/Llama)", "Meta API", "Supabase", "PWA"],
      urlPrincipal: "https://lacavalacteos.com/",
      trabajos: [
        {
          titulo: "AI chatbot to handle orders",
          detalle:
            "An AI assistant that serves customers, answers catalog questions and takes the order from start to finish: once the order is confirmed, the bot automatically registers it with name, address, payment and total.",
          resultado: "",
        },
        {
          titulo: "WhatsApp, Instagram & Messenger integration",
          detalle:
            "The same AI connected to all three Meta channels —WhatsApp, Instagram DM and Facebook Messenger— on a single webhook, so the business can reply wherever each customer writes without duplicating work.",
          resultado: "",
        },
        {
          titulo: "Unified panel (PWA) for the 3 channels",
          detalle:
            "An installable app (PWA) that brings the three channels into a single inbox: it shows WhatsApp, Instagram and Messenger conversations in one place and lets you reply by hand or let the AI answer.",
          resultado: "",
        },
        {
          titulo: "Order management from the panel",
          detalle:
            "An orders screen where the ones closed by the AI arrive in real time, with new-order alerts and status changes (new, dispatched, cancelled). Data is persisted in Supabase so the history is never lost.",
          resultado: "",
        },
        {
          titulo: "Voice-note understanding",
          detalle:
            "The chatbot transcribes the voice notes customers send and understands them as if they were text, so they can order by speaking instead of typing.",
          resultado: "",
        },
      ],
    },
    {
      slug: "macv-wear",
      nombre: "MacV Wear",
      tagline: "A clothing brand: online store, inventory and sales in one panel",
      cliente: "Personal project",
      resumen:
        "An own menswear brand focused on high-quality boxers (94% cotton), sold directly online.",
      descripcion:
        "MacV Wear is an own menswear brand focused on well-made essentials —above all high-quality boxers (94% cotton / 6% elastomer, reinforced seams)— with the promise that “what you see is what you get.” It sells directly to customers through its online store and bets on a simple, honest catalog: fewer products, but good ones.",
      stack: ["Astro", "JavaScript", "CSS", "Apps Script", "Google Sheets", "PWA"],
      urlPrincipal: "https://macv-wear.netlify.app/",
      trabajos: [
        {
          titulo: "Website & online store",
          detalle:
            "Design and development of the store in Astro: catalog, product page, cart and checkout, with a clean, product-focused visual identity.",
          resultado: "",
        },
        {
          titulo: "Inventory & sales panel",
          detalle:
            "A private owner panel that centralizes the business: it records sales (deducting stock), adds products and restocks, corrects inventory and shows sales KPIs. Backend on Google Apps Script over Google Sheets, so the owner edits everything without a database.",
          resultado: "",
        },
        {
          titulo: "Installable panel (PWA)",
          detalle:
            "The admin panel is installable as an app on mobile (PWA), with its own service worker that only affects the panel and leaves the public store untouched.",
          resultado: "",
        },
        {
          titulo: "Multichannel AI chatbot",
          detalle:
            "An AI chatbot to serve and sell over WhatsApp, Instagram and Messenger, with automated support and order-taking unified alongside the sales and inventory panel in a single place.",
          resultado: "",
        },
      ],
    },
    {
      slug: "hccompany",
      nombre: "HC Company S.A.S",
      tagline: "A website for a laboratory-equipment maintenance company",
      cliente: "HC Company S.A.S",
      resumen:
        "A company from Cali (Colombia) specialized in laboratory-equipment maintenance: preventive, corrective, predictive, automation and IQ/OQ/PQ qualification.",
      descripcion:
        "HC Company S.A.S is a company from Cali (Colombia) specialized in laboratory-equipment maintenance nationwide. It offers preventive, corrective and predictive maintenance, as well as equipment automation, restoration and adaptation, IQ/OQ/PQ qualification and technical advisory, backed by experience, know-how and its own technical and human team. Its promise sums it up: “We extend the useful life of your equipment!”",
      stack: ["Astro", "JavaScript", "CSS"],
      urlPrincipal: "https://hccompanysas.com/",
      trabajos: [
        {
          titulo: "Corporate website",
          detalle:
            "Design and development of the institutional site in Astro: service portfolio (preventive, corrective and predictive maintenance, automation, IQ/OQ/PQ qualification and advisory), company presentation and direct WhatsApp contact.",
          resultado: "",
        },
        {
          titulo: "Automated reporting system",
          detalle:
            "Internal tool for technicians to generate automated service reports from the field, digitizing the technical documentation of each maintenance and keeping a record of the work done.",
          resultado: "",
        },
        {
          titulo: "Client traceability portal",
          detalle:
            "A system where each client can track their equipment: maintenance history, qualifications and services centralized in one place.",
          resultado: "",
        },
      ],
    },
    {
      slug: "tasas-liquidaciones",
      nombre: "Tasas y Liquidaciones",
      tagline: "A legal-financial app for lawyers: usury rates and pension liquidations",
      cliente: "Personal project",
      resumen:
        "A legal-financial web app for lawyers in Colombia: it looks up SFC rates (usury and IBC) and liquidates interest and pension-payment differences. Sold by subscription.",
      descripcion:
        "“Tasas y Liquidaciones” is a legal-financial web app for Colombia, built for lawyers and sold by subscription. It brings two tools together: looking up the Interés Bancario Corriente and the Tasa de Usura by credit modality, month and year —with a history chart and moratory/IPC calculators— and pension-payment liquidation, which indexes payment differences by IPC up to the judgment's enforceability and liquidates moratory interest month by month (Art. 141 Ley 100 de 1993), with support for the DTF window in judgments against the State (Art. 192 CPACA). It works with official data (DANE, SFC, Banco de la República) and exports results to PDF and Word.",
      stack: ["JavaScript", "Tailwind CSS", "Chart.js", "jsPDF"],
      urlPrincipal: "https://usura.vercel.app/",
      trabajos: [
        {
          titulo: "SFC rate lookup (usury & IBC)",
          detalle:
            "A module that looks up the Interés Bancario Corriente and the Tasa de Usura by modality, month and year, with live official SFC data, traceability of the ruling in force, a history chart and moratory / IPC-update calculators.",
          resultado: "",
        },
        {
          titulo: "Pension liquidation engine",
          detalle:
            "It reproduces the tables of an expert court report: it indexes pension-payment differences by IPC up to the enforceability date and liquidates moratory interest with the Tasa de Usura month by month (Art. 141 Ley 100 de 1993). It handles annual adjustment, health contribution by bracket and partial payments.",
          resultado: "Validated to the peso against real court reports.",
        },
        {
          titulo: "DTF window for judgments against the State",
          detalle:
            "Support for Art. 192 CPACA: in judgments against state entities it interleaves the Banco de la República DTF during the window after enforceability, classified day by day before moratory interest begins.",
          resultado: "",
        },
        {
          titulo: "PDF/Word export and subscription access",
          detalle:
            "Professional export of tables and results to PDF and Word to attach to the case file, and a per-user access gate to offer the tool to lawyers under subscription.",
          resultado: "",
        },
      ],
    },
  ],
};

export function getCaseStudies(lang: Lang): CaseStudy[] {
  return caseStudies[lang];
}

export function getCaseStudy(lang: Lang, slug: string): CaseStudy | undefined {
  return caseStudies[lang].find((c) => c.slug === slug);
}

// ---- Contenido: Experiencia ----
export const experience: Record<Lang, {
  company: string;
  position: string;
  summary: string;
  highlights: string[];
}[]> = {
  es: [
    {
      company: "Boliglobos Latino",
      position: "Desarrollador Frontend",
      summary:
        "Líder de soluciones tecnológicas a cargo de la arquitectura digital y la automatización de procesos para optimizar las operaciones y ventas de la empresa.",
      highlights: [
        "Diseñé y desarrollé el sitio web corporativo y la plataforma de E-commerce, centralizando la presencia digital de la marca",
        "Implementé y administré la plataforma de E-learning con Odoo, agilizando la capacitación digital y el acceso a contenidos",
        "Desarrollé un sistema de certificados digitales a medida integrado al sitio web, automatizando la generación y entrega de documentos",
        "Lideré la implementación de Escala (CRM) para flujos de comunicación y automatización de WhatsApp, mejorando la eficiencia de la atención al cliente",
        "Integré el ecosistema Odoo para unificar la gestión de ventas, aprendizaje y administración web",
      ],
    },
    {
      company: "Alcaldía de Neiva",
      position: "Webmaster",
      summary:
        "Ascendí de Practicante a Ingeniero de Software de tiempo completo en el área de Webmaster, liderando la modernización de portales institucionales y la optimización de interfaces de usuario.",
      highlights: [
        "Lideré la modernización de la arquitectura CSS de los portales web de las Secretarías, mejorando la Experiencia de Usuario (UX) y la adaptabilidad móvil.",
        "Gestioné el mantenimiento y la actualización de contenido crítico del sitio institucional siguiendo los estándares de Gobierno Digital.",
      ],
    },
    {
      company: "KODLAND",
      position: "Instructor de Programación (LUA / Roblox Studio)",
      summary:
        "Instructor técnico a cargo de enseñar fundamentos de programación y desarrollo de videojuegos a niños, fomentando el pensamiento lógico y la creatividad técnica.",
      highlights: [
        "Impartí clases interactivas de programación con LUA y Roblox Studio, simplificando conceptos complejos para estudiantes de 8 a 12 años.",
        "Diseñé y supervisé proyectos de desarrollo de videojuegos, guiando a los estudiantes en la implementación de scripts, mecánicas y diseño de entornos",
        "Promoví el desarrollo de habilidades de resolución de problemas y lógica algorítmica con metodologías de aprendizaje basado en proyectos",
        "Gestioné grupos de estudiantes en un entorno virtual, garantizando el cumplimiento de los objetivos pedagógicos con altos niveles de participación",
      ],
    },
  ],
  en: [
    {
      company: "Boliglobos Latino",
      position: "Frontend Developer",
      summary:
        "Technology solutions lead in charge of digital architecture and process automation to optimize company operations and sales.",
      highlights: [
        "Designed and developed the corporate website and E-commerce platform, centralizing the brand's digital presence",
        "Implemented and managed the E-learning platform using Odoo, streamlining digital training and content access",
        "Developed a custom digital certificate system integrated into the website, automating document generation and delivery",
        "Led the implementation of Escala (CRM) for communication workflows and WhatsApp automation, improving customer service efficiency",
        "Integrated the Odoo ecosystem to provide unified management for sales, learning, and web administration",
      ],
    },
    {
      company: "Alcaldía de Neiva",
      position: "Webmaster",
      summary:
        "Progressed from Intern to full-time Software Engineer within the Webmaster department, leading the modernization of institutional portals and user interface optimization.",
      highlights: [
        "Led the modernization of the CSS architecture for the Secretary's web portals, enhancing User Experience (UX) and mobile responsiveness.",
        "Managed the maintenance and updates of critical content on the institutional website following Digital Government standards.",
      ],
    },
    {
      company: "KODLAND",
      position: "Programming Instructor (LUA / Roblox Studio)",
      summary:
        "Technical instructor responsible for teaching programming fundamentals and game development to children, fostering logical thinking and technical creativity.",
      highlights: [
        "Delivered interactive programming lessons using LUA and Roblox Studio, simplifying complex coding concepts for students aged 8 to 12.",
        "Designed and supervised game development projects, guiding students through script implementation, mechanics, and environment design",
        "Promoted the development of problem-solving skills and algorithmic logic using project-based learning methodologies",
        "Managed student groups in a virtual environment, ensuring pedagogical goals were met while maintaining high engagement levels",
      ],
    },
  ],
};

// ---- Contenido: Educación ----
export const education: Record<Lang, {
  institution: string;
  degree: string;
  date: string;
  href: string;
}[]> = {
  es: [
    {
      institution: "UNIVERSIDAD SURCOLOMBIANA",
      degree: "Ingeniería de Software",
      date: "2019 - 2024",
      href: "/docs/DIPLOMA ING SOFTWARE.pdf",
    },
    {
      institution: "FreeCodeCamp",
      degree: "DISEÑO WEB RESPONSIVO",
      date: "Junio 2023",
      href: "/docs/Certificado-responsive-web-design.pdf",
    },
    {
      institution: "Matlab Onramp",
      degree: "MATLAB",
      date: "Julio 2021",
      href: "/docs/mathlab_certificate.pdf",
    },
  ],
  en: [
    {
      institution: "UNIVERSIDAD SURCOLOMBIANA",
      degree: "Software Engineer",
      date: "2019 - 2024",
      href: "/docs/DIPLOMA ING SOFTWARE.pdf",
    },
    {
      institution: "FreeCodeCamp",
      degree: "RESPONSIVE WEB DESIGN",
      date: "June 2023",
      href: "/docs/Certificado-responsive-web-design.pdf",
    },
    {
      institution: "Matlab Onramp",
      degree: "MATLAB",
      date: "July 2021",
      href: "/docs/mathlab_certificate.pdf",
    },
  ],
};
