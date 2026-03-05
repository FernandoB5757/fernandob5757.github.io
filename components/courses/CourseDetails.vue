<template>
  <Dialog
    v-model:visible="localVisible"
    modal
    pt:root:class="p-11 overflow-hidden"
    :style="{ width: '860px' }"
    :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
    :draggable="false"
    :closeOnEscape="false"
  >
    <template #container="{ closeCallback }">
      <div>
        <Button
          iconPos="right"
          @click="closeCallback"
          class="!absolute top-2 right-2 !rounded-full"
          rounded
          severity="secondary"
          variant="outlined"
          role="button"
          :aria-label="$t('accessibility.closemodal')"
        >
          <Icon name="heroicons:x-mark" class="text-lg text-primary" />
        </Button>
      </div>

      <div class="modal-body">
        <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
          <div>
            <span class="modal-platform-label">{{ course.platform }}</span>
            <h3 class="mt-1 text-4xl font-bold leading-snug">
              {{ course.title }}
            </h3>
          </div>
          <div class="shrink-0 text-left sm:text-right">
            <span class="modal-meta-label">{{ $t('courses.year') }}</span>
            <p class="text-2xl font-bold">{{ course.year }}</p>
          </div>
        </div>

        <p class="text-lg leading-8 font-normal">
          {{ course.description }}
        </p>

        <div class="info-section">
          <div class="flex flex-wrap gap-2">
            <Tag
              v-for="skill in course.skills"
              :key="skill"
              :value="skill"
              rounded
              class="bg-primary-500/10 text-primary-600 dark:bg-primary-800/10 dark:text-primary-800"
            />
          </div>
        </div>

        <div class="flex mt-5 justify-end">
          <Button
            v-if="course.certificateUrl"
            :href="course.certificateUrl"
            as="a"
            target="_blank"
            rel="noopener"
            severity="primary"
            variant="text"
            raised
            role="link"
            :aria-label="$t('courses.certificate')"
          >
            {{ $t('courses.certificate') }}
            <Icon name="heroicons:arrow-right-circle" />
          </Button>
        </div>

        <hr class="mb-8 mt-3 border-primary-100 dark:border-black">

        <div class="details-section h-80" v-if="course.long_description">
          <h4 class="text-xl font-bold">{{ $t('courses.skills_learned') }}</h4>
          <p class="section-content mt-5">{{ course.long_description }}</p>
        </div>
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import type { CourseI18n } from '~/types/course'

const props = defineProps<{
  course: CourseI18n
  visible: boolean
}>()

const emit = defineEmits(['update:visible'])

const localVisible = computed({
  get: () => props.visible,
  set: (value) => emit('update:visible', value),
})
</script>

<style scoped>
.modal-body {
  @apply relative p-4 overflow-y-auto;
}

.modal-platform-label {
  @apply text-sm font-semibold text-primary uppercase tracking-wider;
}

.modal-meta-label {
  @apply text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider;
}

.info-section {
  @apply mt-6;
}

.details-section {
  @apply mt-8 overflow-y-auto;
}

.section-content {
  @apply text-gray-700 dark:text-gray-300 whitespace-pre-line;
}
</style>
