import { projects } from '~/data/projects'
import type {  ProjectI18n } from '@@/shared/types/project'

export const useProjects = () => {
  const { t } = useI18n()

  const mainProjects = computed(() : ProjectI18n[] => {
    return projects.filter(
      project => project.simple === undefined || project.simple === false
    ).map(project => ({
      ...project,
      title: t(`projects.${project.id}.title`),
      description: t(`projects.${project.id}.description`),
      long_description: t(`projects.${project.id}.long_description`),
      contribution: t(`projects.${project.id}.contribution`),
      thumbnail: `/images/projects/${project.id}_thumb.webp`
    }))
  })

  const minorContributions = computed(() : ProjectI18n[] => {
    return projects.filter(
      project => project.simple
    ).map(project => ({
      ...project,
      title: t(`projects.${project.id}.title`),
      description: t(`projects.${project.id}.description`),
    }))
  })

  const getProjectById = (id: string) => {
    return projects.find(project => project.id === id)
  }

  const filterByTechnology = (techId: string) => {
    return projects.filter(project => project.technologies.includes(techId))
  }

  return {
    projects: mainProjects,
    minorContributions,
    getProjectById,
    filterByTechnology
  }
}
