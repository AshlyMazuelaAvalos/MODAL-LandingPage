import type { ContentRepository } from "@/domain/repositories/ContentRepository";
import { acknowledgments, navLinks, project, team } from "./content";

/** Adaptador que implementa el puerto con datos estáticos en memoria. */
export class StaticContentRepository implements ContentRepository {
  getProject() {
    return project;
  }
  getTeam() {
    return [...team];
  }
  getAcknowledgments() {
    return [...acknowledgments];
  }
  getNavLinks() {
    return [...navLinks];
  }
}
