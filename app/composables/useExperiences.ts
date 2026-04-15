import { experiences } from '~/data/experiences'
import type {  ExperienceI18n } from '@@/shared/types/index'

export const useExperiences = () => {
  const { t } = useI18n()

  const experiencesWithI18n = computed(() : ExperienceI18n[] => {
      return experiences.map(experience => ({
        ...experience,
        title: experience.title ?? t(`experiences.${experience.id}.title`),
        role: t(`experiences.${experience.id}.role`),
        description: t(`experiences.${experience.id}.description`),
      }))
      .sort((a, b) =>  a.order - b.order)
  })

  const getProjectById = (id: string) => {
    return experiencesWithI18n.value.find(project => project.id === id)
  }

  return {
    experiences: experiencesWithI18n,
    getProjectById,
  }
}
