export interface ProjectFeature {
  id: string;
  title: string;
  description: string;
  /** Clave de icono; la capa de presentación decide cómo renderizarla. */
  icon: string;
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectInfo {
  name: string;
  badge: string;
  headline: string;
  headlineHighlight: string;
  description: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  sectionBadge: string;
  sectionTitle: string;
  sectionHighlight: string;
  sectionDescription: string;
  features: ProjectFeature[];
}
