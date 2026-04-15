export type TechnologyCategory =
  | 'language'
  | 'framework'
  | 'library'
  | 'database'
  | 'tool'
  | 'platform'
  | 'devops'
  | 'version-control'

export interface Technology {
  id: string
  name: string
  slug: string
  icon: string
  category: TechnologyCategory
  subcategory?: string
}