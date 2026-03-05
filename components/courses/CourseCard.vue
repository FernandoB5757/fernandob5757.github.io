<template>
  <article>
    <div class="course-card group" @click="isOpen = true">
      <div class="course-header">
        <span class="course-platform">{{ course.platform }}</span>
        <span class="course-year">{{ course.year }}</span>
      </div>

      <div class="course-content">
        <div class="course-title">
          {{ course.title }}
        </div>
        <p class="course-description">
          {{ course.description }}
        </p>
      </div>

      <div class="flex flex-row flex-wrap gap-1 mt-auto pt-3">
        <Tag
          v-for="skill in displayedSkills"
          :key="skill"
          :value="skill"
          rounded
          class="bg-primary-500/10 text-primary-600 dark:bg-primary-800/10 dark:text-primary-800"
        />
      </div>
    </div>

    <LazyCoursesCourseDetails
      :course="course"
      v-model:visible="isOpen"
      hydrate-on-visible
    />
  </article>
</template>

<script setup lang="ts">
import type { CourseI18n } from '~/types/course'

const props = defineProps<{
  course: CourseI18n
}>()

const isOpen = ref(false)
const displayedSkills = computed(() => props.course.skills.slice(0, 4))
</script>

<style lang="scss" scoped>
.course-card {
  @apply p-7 max-w-sm h-56 border relative cursor-pointer
    flex flex-col
    rounded-lg shadow-lg
    bg-white hover:bg-primary-100 border-primary-200
    dark:bg-surface-900 dark:border-surface-700 dark:hover:bg-surface-950
    transition ease-in-out duration-300
    overflow-hidden;
}

.course-header {
  @apply flex justify-between items-center mb-3;
}

.course-platform {
  @apply text-sm font-semibold text-primary uppercase tracking-wider;
}

.course-year {
  @apply text-sm font-medium text-gray-500 dark:text-gray-400;
}

.course-content {
  @apply flex-1;
}

.course-title {
  @apply mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white;
}

.course-description {
  @apply text-sm text-gray-600 dark:text-gray-400 line-clamp-2;
}
</style>
