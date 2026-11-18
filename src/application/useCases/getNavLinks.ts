import type { ContentRepository } from '@/domain/repositories/ContentRepository'

export const getNavLinks = (repository: ContentRepository) => repository.getNavLinks()
