<template>
  <article>
    <div class="project-card group">
        <div class="project-picture">
          <NuxtImg
            :src="project.thumbnail"
            format="webp"
            width="400"
            height="210"
            sizes="sm:280px md:300px lg:350px"
            quality="75"
            :alt="project.image.alt"
            class="group-hover:scale-110 transition ease-in-out delay-150 duration-300 rounded-lg"
            loading="lazy"
            @click="isOpen = true"
          />
        </div>

        <div class="project-content">
          <div class="project-title" @click="isOpen = true">
            {{ project.title }}
          </div>
          <p>
            {{ project.description }}
          </p>
      </div>
      <div class="flex flex-row flex-wrap gap-1 mt-2">
        <Tag v-for="techId in technologies"
              :key="techId"
              :value="techId"
              rounded
              class="bg-primary-500/10 text-primary-600 dar:bg-primary-800/10 dark:text-primary-800"
          ></Tag>
      </div>
    </div>

    <LazyProjectsProjectDetails
      :project="project"
      v-model:visible="isOpen"
      hydrate-on-visible
    />

  </article>
</template>

<script setup lang="ts">
import type { ProjectI18n } from '@@/shared/types/project'

const props = defineProps<{
  project: ProjectI18n
}>()

const isOpen = ref(false)
const technologies = computed(
  () => props.project.technologies.slice(0,4)
)

</script>

<style lang="scss" scoped>

.project-card {
  @apply p-7 max-w-sm h-96 border relative
    rounded-lg shadow-lg
  bg-white hover:bg-primary-100 border-primary-200
    dark:bg-surface-900 dark:border-surface-700 dark:hover:bg-surface-950
    transition ease-in-out duration-300
    overflow-hidden;
}

.project-picture {
  @apply max-h-40 w-full overflow-hidden rounded-lg cursor-pointer;
}

.project-content {
  @apply mt-5 cursor-pointer;
}

.project-title {
  @apply mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white;
}
</style>
