import type {
  Acknowledgment,
  NavLink,
  ProjectInfo,
  TeamMember,
} from "../models";

/**
 * Puerto (contrato) que la capa de dominio exige a la infraestructura.
 * Las capas externas dependen de esta interfaz, nunca de la implementación.
 */
export interface ContentRepository {
  getProject(): ProjectInfo;
  getTeam(): TeamMember[];
  getAcknowledgments(): Acknowledgment[];
  getNavLinks(): NavLink[];
}
