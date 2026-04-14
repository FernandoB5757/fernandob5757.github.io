
import { Technology } from "./technology"
import { Image } from "./index"

export interface Project {
  id: string
  image: Image
  url?: string
  technologies: Technology['id'][]
  simple?: boolean
  date: {
    start: string
    end?: string
    isCurrent?: boolean
  }
  // SEO Metadata
  meta?: {
    keywords?: string[]
  }
}

export interface ProjectI18n extends Project{
  title: string
  description: string
  long_description?: string
  contribution?: string,
  thumbnail?: string
}