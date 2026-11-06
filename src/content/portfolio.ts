export type Link = {
  label: string;
  href: string;
};

export type Profile = {
  fullName: string;
  displayName: string;
  role: string;
  location: string;
  yearsOfExperience: number;
  mainStack: string;
  summary: string;
  email: string;
  linkedin: Link;
  github: Link;
};

export type CaseStudy = {
  slug: string;
  title: string;
  context: string;
  contribution: string[];
  technologies: string[];
  /** Optional verified result. Rendered only when set. */
  outcome?: string;
};

/** Technology icon identifiers, mapped to brand marks in TechIcon. */
export type TechIconId =
  | "nestjs"
  | "typescript"
  | "laravel"
  | "vuedotjs"
  | "openjdk";

export type Project = {
  name: string;
  description: string;
  technologies: string[];
  repositoryUrl: string;
  /** Optional live demo. Rendered only when set. */
  demoUrl?: string;
  /** Up to two main-technology icons shown next to the title. */
  icons?: [TechIconId] | [TechIconId, TechIconId];
};

export type StackGroup = {
  category: string;
  items: string[];
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  note: string;
  duties: string[];
};

export type Education = {
  degree: string;
  institution: string;
  year: string;
  /** Optional monochrome institution mark (public path). Rendered only when set. */
  logo?: string;
};

export const profile: Profile = {
  fullName: "Nicolás Víctor González Tardón",
  displayName: "Nicolás González",
  role: "Desarrollador Fullstack",
  location: "Concepción, Chile",
  yearsOfExperience: 6,
  mainStack: "Laravel + React",
  summary:
    "Llevo 6 años construyendo sistemas CRM/ERP e integraciones de APIs, trabajando tanto en backend como en frontend.",
  email: "nicolas.gonzalez.tardon@gmail.com",
  linkedin: {
    label: "linkedin.com/in/nicolas-gonzalez-tardon",
    href: "https://www.linkedin.com/in/nicolas-gonzalez-tardon",
  },
  github: {
    label: "github.com/nvgonzal",
    href: "https://github.com/nvgonzal",
  },
};

/** URL of a phone-free CV PDF. The CV button stays hidden while this is null. */
export const cvUrl: string | null = null;

export const caseStudies: CaseStudy[] = [
  {
    slug: "crm-erp",
    title: "Agendamiento de tareas técnicas y provisión de servicios en un CRM/ERP",
    context:
      "Un CRM/ERP corporativo concentra buena parte de la operación diaria de una empresa. Agendar tareas técnicas define quién atiende cada trabajo y cuándo; la provisión es el paso que deja un servicio listo para usarse.",
    contribution: [
      "Desarrollé y mejoré el CRM/ERP corporativo.",
      "Trabajé en sus módulos de agendamiento de tareas técnicas y de provisión de servicios.",
    ],
    technologies: ["Laravel", "React"],
  },
  {
    slug: "dte-sii",
    title: "Emisión de documentos tributarios electrónicos con las APIs del SII",
    context:
      "Un DTE (Documento Tributario Electrónico) es la versión digital de documentos como facturas y boletas. En Chile, un sistema emisor debe comunicarse con el Servicio de Impuestos Internos (SII) para operar con ellos.",
    contribution: [
      "Implementé las APIs del SII en un sistema de emisión de DTE.",
    ],
    technologies: ["APIs del SII"],
  },
  {
    slug: "telefonia",
    title: "Integración con un proveedor de telefonía fija y móvil",
    context:
      "Cuando un proveedor externo presta servicios de telefonía, sus APIs son el punto de unión entre su plataforma y los sistemas internos de la empresa.",
    contribution: [
      "Integré las APIs de un proveedor de servicios de telefonía fija y móvil.",
    ],
    technologies: ["APIs de proveedor de telefonía"],
  },
  {
    slug: "gitlab-ci-cd",
    title: "Pipelines de CI/CD",
    context:
      "Las pipelines de integración y despliegue continuo automatizan los pasos que llevan un cambio desde el repositorio hasta su publicación.",
    contribution: [
      "Implementé y mejoré pipelines para automatizar la integración y el despliegue.",
    ],
    technologies: ["GitLab CI/CD"],
  },
];

export const projects: Project[] = [
  {
    name: "api-notificador-nest",
    description:
      "Proyecto de aprendizaje de Nest.js: una API de notificaciones con autenticación JWT, arquitectura orientada a eventos y colas de trabajo para enviar correos transaccionales fuera del request. Incluye documentación Swagger y pruebas unitarias con Jest.",
    technologies: ["Nest.js", "TypeScript", "MySQL", "Redis", "BullMQ"],
    repositoryUrl: "https://github.com/nvgonzal/api-notificador-nest",
    icons: ["nestjs", "typescript"],
  },
  {
    name: "atlas-mundial-web",
    description:
      "Explorador de información de países hecho con Laravel y Vue, que consume la API externa REST Countries. Es un ejemplo práctico de integración por capas: cliente HTTP dedicado, servicio, DTOs y excepciones propias.",
    technologies: ["Laravel", "Vue", "MySQL", "PHPUnit"],
    repositoryUrl: "https://github.com/nvgonzal/atlas-mundial-web",
    icons: ["laravel", "vuedotjs"],
  },
  {
    name: "tarea2-redes-ubb-2017-01",
    description:
      "Proyecto académico del curso de Comunicación de Datos y Redes de la Universidad del Bío-Bío (2017): una aplicación cliente-servidor de transmisión de video. El control viaja por TCP y los frames de imagen por UDP con DatagramSocket; el servidor atiende a cada cliente en su propio hilo y registra la actividad con un logger de terminal propio.",
    technologies: ["Java", "Sockets TCP/UDP", "Multithreading", "Swing"],
    repositoryUrl: "https://github.com/nvgonzal/tarea2-redes-ubb-2017-01",
    icons: ["openjdk"],
  },
  {
    name: "proyecto-ia-2016-01-ubb",
    description:
      "Proyecto académico del curso de Inteligencia Artificial de la Universidad del Bío-Bío (2016): un juego de laberinto donde un adversario controlado por IA persigue al jugador usando búsqueda en profundidad (DFS) sobre el espacio de estados. Interfaz en Swing con menú, configuración y música de fondo.",
    technologies: ["Java", "Swing", "Algoritmos de búsqueda", "Ant"],
    repositoryUrl: "https://github.com/nvgonzal/proyecto-ia-2016-01-ubb",
    icons: ["openjdk"],
  },
];

export const stackGroups: StackGroup[] = [
  {
    category: "Backend",
    items: [
      "PHP",
      "Python",
      "Java",
      "TypeScript",
      "Laravel",
      "Flask",
      "Nest.js",
      "PHPUnit",
      "Jest",
    ],
  },
  {
    category: "Frontend",
    items: ["JavaScript", "TypeScript", "React", "Angular", "Ionic", "Next.js"],
  },
  {
    category: "Datos",
    items: [
      "PostgreSQL",
      "MySQL",
      "Redis",
      "SQLAlchemy",
      "Pandas",
      "Google Colaboratory",
    ],
  },
  {
    category: "DevOps y nube",
    items: ["Git", "Docker", "GitLab CI/CD", "AWS (EC2, S3, RDS)"],
  },
  {
    category: "Integraciones",
    items: [
      "REST",
      "SOAP",
      "Swagger",
      "RabbitMQ",
      "OpenStreetMaps",
      "OpenRouteService",
    ],
  },
];

export const experience: Experience[] = [
  {
    role: "Desarrollador de Software Fullstack",
    company: "Mundo Pacífico / Holdco Networks",
    period: "Agosto 2020 – actualidad",
    location: "Concepción",
    note: "Entre noviembre de 2023 y septiembre de 2025 el área pasó a Holdco Networks, del mismo grupo corporativo, con las mismas funciones.",
    duties: [
      "Diseño, desarrollo y mantenimiento de backend en Laravel y frontend en React.",
      "Documentación técnica.",
      "Aplicaciones móviles en Ionic con Angular y TypeScript.",
      "Uso de Claude Code como apoyo en desarrollo, refactorización y documentación.",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "Ingeniero de Ejecución en Computación e Informática",
    institution: "Universidad del Bío-Bío",
    year: "2019",
    logo: "/logos/ubb-escudo.png",
  },
];

export const spokenLanguages: string[] = [
  "Español nativo",
  "Inglés: lectura técnica",
];

export const navigation: Link[] = [
  { label: "Casos", href: "#casos" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Stack", href: "#stack" },
  { label: "Trayectoria", href: "#trayectoria" },
  { label: "Contacto", href: "#contacto" },
];
