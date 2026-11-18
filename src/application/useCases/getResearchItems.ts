import type { ResearchCategory, ResearchItem } from '@/domain/models'
import type { ContentRepository } from '@/domain/repositories/ContentRepository'

/** Devuelve las investigaciones, opcionalmente filtradas por categoría y ordenadas por año descendente. */
export const getResearchItems = (
  repository: ContentRepository,
  category: ResearchCategory | null = null,
): ResearchItem[] =>
  repository
    .getResearch()
    .filter((item) => category === null || item.category === category)
    .sort((a, b) => b.year - a.year)

/** Categorías únicas presentes en los datos, en orden de aparición. */
export const getResearchCategories = (repository: ContentRepository): ResearchCategory[] => [
  ...new Set(repository.getResearch().map((item) => item.category)),
]
