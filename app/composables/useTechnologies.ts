import { technologies } from '~/data/technologies'
import type { Technology, TechnologyCategory } from '@@/shared/types/technology'

export const useTechnologies = () => {

  const getTechnologyById = (id: string): Technology | undefined => {
    return technologies.find(tech => tech.id === id)
  }

  const getTechnologiesByCategory = (category: TechnologyCategory): Technology[] => {
    return technologies.filter(tech => tech.category === category)
  }

  const getAllCategories = (): TechnologyCategory[] => {
    return [...new Set(technologies.map(tech => tech.category))] as TechnologyCategory[]
  }

  const searchTechnologies = (query: string): Technology[] => {
    const lowerQuery = query.toLowerCase()
    return technologies.filter(
      tech =>
        tech.name.toLowerCase().includes(lowerQuery) ||
        tech.slug.toLowerCase().includes(lowerQuery)
    )
  }

  return {
    technologies,
    getTechnologyById,
    getTechnologiesByCategory,
    getAllCategories,
    searchTechnologies
  }
}
