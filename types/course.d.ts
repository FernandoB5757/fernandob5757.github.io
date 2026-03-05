export interface Course {
  id: string
  platform: string
  year: number
  certificateUrl?: string
  skills: string[]
}

export interface CourseI18n extends Course {
  title: string
  description: string
  long_description?: string
}
