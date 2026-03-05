<template>
  <div>
    <section class="limit-elements">
      <CoursesSectionCourses />
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const title = 'JFBG | ' + t('courses.nav')
const description = t('courses.seo_description')

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
})
</script>

<style scoped>
.limit-elements {
  @apply max-w-[1320px] ml-auto mr-auto;
}
</style>
