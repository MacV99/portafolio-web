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
    "projects.title.a": "Pro",
    "projects.title.b": "yectos",
    "projects.view": "Ver proyecto",
    "projects.soon": "Próximamente",
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
    "projects.title.a": "Pro",
    "projects.title.b": "jects",
    "projects.view": "View Project",
    "projects.soon": "Coming soon",
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

// ---- Contenido: Proyectos ----
export const projects: Record<Lang, {
  nombre: string;
  descripcion: string;
  url: string;
}[]> = {
  es: [
    {
      nombre: "STAURANT",
      descripcion:
        "Plataforma social gastronómica diseñada para calificar plato por plato y ofrecer recomendaciones culinarias personalizadas.",
      url: "https://staurant.netlify.app/",
    },
    {
      nombre: "CERTIYÁ",
      descripcion:
        "Sistema de certificación digital automatizado que elimina el procesamiento manual mediante generación web instantánea.",
      url: "https://maciainteli.com/certificados/",
    },
    {
      nombre: "Sistema de Reportes de Mantenimiento",
      descripcion:
        "Herramienta de documentación técnica que automatiza reportes de servicio y registra el historial de mantenimiento de equipos.",
      url: "",
    },
    {
      nombre: "Sistema de Gestión de Clientes",
      descripcion:
        "Portal de autoservicio para clientes enfocado en reducir tiempos de respuesta mediante acceso automatizado a la información.",
      url: "",
    },
  ],
  en: [
    {
      nombre: "STAURANT",
      descripcion:
        "A gastronomic social platform designed for granular dish-by-dish rating and personalized culinary recommendations.",
      url: "https://staurant.netlify.app/",
    },
    {
      nombre: "CERTIYÁ",
      descripcion:
        "An automated digital certification system that eliminates manual processing through instant web-based generation.",
      url: "https://maciainteli.com/certificados/",
    },
    {
      nombre: "Maintenance Reporting System",
      descripcion:
        "A technical documentation tool designed to automate service reports and track equipment maintenance history.",
      url: "",
    },
    {
      nombre: "Customer Management System",
      descripcion:
        "A self-service customer portal focused on reducing response times through automated information access.",
      url: "",
    },
  ],
};

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
