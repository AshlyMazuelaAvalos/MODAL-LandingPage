import type { ContentRepository } from '@/domain/repositories/ContentRepository'

export const getTeamMembers = (repository: ContentRepository) => repository.getTeam()
