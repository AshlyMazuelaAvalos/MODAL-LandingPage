import type { ContentRepository } from '@/domain/repositories/ContentRepository'

export const getProjectInfo = (repository: ContentRepository) => repository.getProject()
