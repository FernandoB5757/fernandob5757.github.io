<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center w-full">
    <ProjectsProjectCard
      v-for="(project, index) in projects"
      :key="project.id"
      :project="project"
      :class="index === 0 ? 'sm:col-span-2 md:col-span-1' : ''"
      :style="{ animationDelay: `${index * 100}ms` }"
      class="animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
    />
  </div>
</template>

<script setup lang="ts">
import type { ProjectI18n } from '@@/shared/types/project'

const props = defineProps<{
  projects: ProjectI18n[]
  itemsPerRow?: number
}>()

</script>
