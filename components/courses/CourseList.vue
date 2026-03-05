<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center w-full">
    <CoursesCourseCard
      v-for="course in courses"
      :key="course.id"
      :course="course"
    />
  </div>
</template>

<script setup lang="ts">
import type { CourseI18n } from '~/types/course'

defineProps<{
  courses: CourseI18n[]
}>()
</script>
