<template>
  <div class="py-16 relative ml-auto mr-auto flex">
    <div class="flex relative w-full p-3 content-center flex-wrap">
      <div class="relative w-full">

        <div class="text-center" id="courses-header">
          <AnimationsBlurReveal
            :delay="0.2"
            :duration="0.75"
            class="p-8"
          >
            <span class="text-primary block uppercase text-sm font-medium tracking-widest leading-4">
              {{ $t('courses.sub_header') }}
            </span>
            <h2 class="text-6xl font-bold leading-tight mt-4 mb-0">
              {{ $t('courses.header') }}
            </h2>
          </AnimationsBlurReveal>
        </div>

        <div id="courses-list" class="w-full relative">
          <div v-if="courses.length > 0" class="flex">
            <CoursesCourseList :courses="courses" />
          </div>
          <div v-else class="flex justify-center py-16">
            <p class="text-gray-500 dark:text-gray-400 text-xl">
              {{ $t('courses.empty') }}
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCourses } from '~/composables/useCourses'
import CoursesCourseList from './CourseList.vue'

const { courses } = useCourses()
</script>
