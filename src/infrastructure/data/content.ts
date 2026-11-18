import anidLogo from "@/assets/icons/LOGOS MINCIENCIA + ANID 2026_PLUMA-BLANCO.svg";
import universidadValparaisoLogo from "@/assets/Images/uv_logo_alta_rgba_blanco-2023.png";
import reneImage from "@/assets/Images/team/Rene.jpeg";
import diegoImage from "@/assets/Images/team/Diego.jpeg";
import sheylaImage from "@/assets/Images/team/Sheyla.jpeg";
import carlosImage from "@/assets/Images/team/Carlos.jpeg";
import raidelImage from "@/assets/Images/team/Raidel.jpeg";
import salvadorImage from "@/assets/Images/team/Salvador.png";
import ashlyImage from "@/assets/Images/team/Ashly.jpeg";
import natanielImage from "@/assets/Images/team/Nataniel.jpeg";
import type {
  Acknowledgment,
  NavLink,
  ProjectInfo,
  TeamMember,
} from "@/domain/models";

// Contenido de ejemplo (placeholder): reemplázalo por tus datos reales o por una API.

export const navLinks: NavLink[] = [
  { label: "Proyecto", href: "#proyecto" },
  { label: "Equipo", href: "#equipo" },
  { label: "Agradecimientos", href: "#agradecimientos" },
];

export const project: ProjectInfo = {
  name: "MODAL 4SE",
  badge: "Fondecyt iniciación 11251489",
  headline: "Model-Driven",
  headlineHighlight: "Agents Lab",
  description:
    "Somos un grupo de investigación de la Universidad de Valparaíso dedicado a la ingeniería de software dirigida por modelos (MDD) y la integración de inteligencia artificial generativa.",
  primaryCtaLabel: "Comenzamos",
  secondaryCtaLabel: "Conoce al equipo",
  sectionBadge: "El proyecto",
  sectionTitle: "Model-Driven Development of Strategically Aligned ",
  sectionHighlight: "Microservice-Based Applications",
  sectionDescription:
    "Conectamos la estrategia de negocio con el desarrollo low-code para que pequeñas y medianas organizaciones de software (SMSO) escalen prototipos sin perder calidad arquitectónica.",
  features: [
    {
      id: "microservicios",
      title: "Modelado de Procesos Estratégicos",
      description:
        "Diseñamos un método para modelar procesos de negocio alineados con la estrategia y estructura del equipo, incorporando desde el inicio información crítica para la escalabilidad y mantenibilidad de los microservicios.",
      icon: "layout-grid",
    },
    {
      id: "dominio",
      title: "Derivación de Modelos de Dominio",
      description:
        "Creamos técnicas de transformación modelo-a-modelo para derivar modelos de dominio de microservicios desde procesos de negocio sin comprometer la arquitectura",
      icon: "file-box",
    },
    {
      id: "lowcode",
      title: "Desarrollo Low-Code Modular",
      description:
        "Implementamos un método low-code que usa los modelos de dominio de microservicios como bloques de construcción reutilizables, reduciendo la codificación y complejidad.",
      icon: "layout-panel-top",
    },
    {
      id: "escalabilidad",
      title: "Escalabilidad en Entornos Reales",
      description:
        "Articulamos todo el flujo desde la estrategia hasta el código para que las SMSO transformen prototipos low-code en productos completos y sostenibles.",
      icon: "scaling",
    },
  ],
};

export const team: TeamMember[] = [
  {
    id: "rene",
    name: "René Noël",
    image: reneImage,
    role: "Investigador Principal (PI)",
    bio: "Lidera el proyecto FONDECYT 11251489, dirigiendo el diseño y validación de métodos dirigidos por modelos para microservicios y low-code.",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/rnoel1/",
        icon: "linkedin",
      },
      { label: "Correo", url: "mailto:rene.noel@uv.cl", icon: "mail" },
    ],
  },
  {
    id: "diego",
    name: "Diego Gatica Pizarro",
    image: diegoImage,
    role: "Estudiante de Doctorado",
    bio: "Sistematiza la toma de decisiones arquitectónicas y trade-offs de calidad mediante metamodelos y agentes de IA.",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/diego-gatica/",
        icon: "linkedin",
      },
    ],
  },
  {
    id: "sheyla",
    name: "Sheyla Torres",
    image: sheylaImage,
    role: "Estudiante de Doctorado",
    bio: "Diseña métodos situacionales por ensamblaje para integrar agentes LLM y equipos humanos bajo un mismo flujo de trabajo.",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/ing-sheyla-torres-ricart/",
        icon: "linkedin",
      },
    ],
  },
  {
    id: "carlos",
    name: "Carlos Escobedo",
    image: carlosImage,
    role: "Ayudante de Investigación",
    bio: "Desarrolla plugins en Camunda Modeler para derivar modelos de dominio UML/DDD de forma determinista desde procesos de negocio.",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/carlos-alexis-escobedo-rom%C3%A1n-3b8150252/",
        icon: "linkedin",
      },
    ],
  },
  {
    id: "raidel",
    name: "Raidel Rodríguez",
    image: raidelImage,
    role: "Estudiante de Doctorado",
    bio: "Construye sistemas multiagente con memoria semántica y procedural para asistir el rediseño estratégico de procesos en PyMEs.",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/raidel-rodriguezperez/",
        icon: "linkedin",
      },
    ],
  },
  {
    id: "salvador",
    name: "Salvador Gallardo",
    image: salvadorImage,
    role: "Ayudante de Investigación",
    bio: "Orquesta agentes especializados anclados en modelos UML como fuente de verdad para generar código verificable y trazable.",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/salvador-gallardo-ortega-08650b2bb/",
        icon: "linkedin",
      },
    ],
  },
  {
    id: "ashly",
    name: "Ashly Mazuela",
    image: ashlyImage,
    role: "Ayudante de Investigación",
    bio: "Adapta prácticas ágiles con protocolos éticos de trazabilidad para integrar el uso responsable de IA generativa en equipos de desarrollo.",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/ashlymazuela/",
        icon: "linkedin",
      },
    ],
  },
  {
    id: "nataniel",
    name: "Nataniel Palacios",
    image: natanielImage,
    role: "Estudiante de Pregrado",
    bio: "Diseña un marco multinivel (CIM → PIM → PSM) para integrar y gobernar agentes de IA en proyectos de software de forma trazable e independiente de la plataforma.",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/nataniel-palacios-b42530304/",
        icon: "linkedin",
      },
    ],
  },
];

export const acknowledgments: Acknowledgment[] = [
  {
    id: "a1",
    name: "Universidad de Valparaíso",
    description:
      "Por el respaldo institucional y el espacio de formación académica.",
    image: universidadValparaisoLogo,
  },
  {
    id: "a2",
    name: "ANID - FONDECYT Iniciación 11251489",
    description:
      "Por el financiamiento público que impulsa esta investigación.",
    image: anidLogo,
  },
  {
    id: "a3",
    name: "OMILAB & Plataforma ADOxx",
    description:
      "Por la cooperación tecnológica y soporte abierto para herramientas de modelado.",
  },
  {
    id: "a4",
    name: "Empresas Colaboradoras",
    description:
      "Por participar activamente en la validación empírica en entornos reales.",
  },
];
