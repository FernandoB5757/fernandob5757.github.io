import { courses } from '~/data/courses'
import type { CourseI18n } from '~/types/course'

export const useCourses = () => {
  const { t } = useI18n()

  const coursesWithI18n = computed((): CourseI18n[] => {
    return courses.map(course => ({
      ...course,
      title: t(`courses.${course.id}.title`),
      description: t(`courses.${course.id}.description`),
      long_description: t(`courses.${course.id}.long_description`),
    }))
  })

  return {
    courses: coursesWithI18n,
  }
}
