import type { ContentRepository } from '@/domain/repositories/ContentRepository'

export const getAcknowledgments = (repository: ContentRepository) =>
  repository.getAcknowledgments()
