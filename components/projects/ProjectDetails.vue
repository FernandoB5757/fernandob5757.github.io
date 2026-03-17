<template>
  <Dialog
    v-model:visible="localVisible"
    modal
    pt:root:class="p-11 overflow-hidden"
    :style="{ width: '1230px' }"
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
              <Icon name="heroicons:x-mark" class="text-lg text-primary"/>
          </Button>
      </div>
      <div class="modal-body">
        <div class="flex flex-col lg:flex-row gap-8">

          <div class="w-full lg:w-1/2">

            <Image :alt="project.image.alt" preview>
                <template #image>
                    <NuxtImg :src="project.image.src" 
                      format="webp"
                      class="details-image"
                      loading="lazy"
                      fetch-priority="low"  
                    />
                </template>
                 <template #preview="slotProps">
                    <NuxtImg :src="project.image.src" 
                        format="webp"
                        :img-attrs="{
                                style: slotProps.style, 
                                width: 1280, 
                                height: 720, 
                                loading: 'lazy',
                                'fetch-priority': 'low'
                            }" 
                      />
                  </template>
            </Image>
          </div>

          <div class="w-full lg:w-1/2">
            <h3 class="mb-5 text-4xl font-bold leading-snug">
              {{ project.title }}
            </h3>

            <p class="text-lg leading-8 font-normal">
              {{ project.description }}
            </p>

            <div class="info-list">
              <ul>
                <li>
                  <strong>
                    {{ t('dates.start') }} :
                  </strong>
                  <span>
                    {{ formatDate(project.date.start) }} 
                  </span>
                </li>

                <li>
                  <strong>
                    {{ t('dates.end') }} :
                  </strong>
                  <span>
                    {{ project.date.isCurrent ? t('dates.present') : (project.date.end ? formatDate(project.date.end) : '' ) }}
                  </span>
                </li>
              </ul>
            </div>

            <div class="details-section">
              <div class="flex flex-wrap gap-2 mt-2">
                  <Tag v-for="techId in project.technologies" 
                      :key="techId"
                      :value="techId"
                      rounded
                      class="bg-primary-500/10 text-primary-600 dar:bg-primary-800/10 dark:text-primary-800"
                  ></Tag>

              </div>
            </div>

            <div class="flex mt-5 justify-end">
              <Button
                v-if="project.url"
                :href="project.url" 
                as="a"
                target="_blank" 
                rel="noopener noreferrer"
                severity="primary" 
                variant="text"
                raised
                role="link"
                :aria-label="$t('accessibility.viewproject')"
              >
                {{ t('view project') }} <Icon name="heroicons:arrow-right-circle" />
              </Button>

              <Button
                v-else
                rel="noopener"
                severity="primary" 
                variant="text"
                raised
                role="contentinfo"
                :aria-label="$t('accessibility.viewproject')"
              >
                {{ t('Coming soon') }}
              </Button>
              
            </div>
            
          </div>

        </div>

        <hr class="mb-8 mt-3 border-primary-100 dark:border-black">

        <div class="details-section h-80">
          <h4 class="text-xl font-bold">{{ t('description') }}</h4>
          <br>
          <p class="section-content">
            {{ project.long_description }}
          </p>
          <br>
          <h4 class="text-xl font-bold">{{ t('contribution') }}</h4>
          <p class="section-content mt-5">
              {{ project.contribution }}
          </p>
           <div class="flex flex-wrap gap-2 mt-5">
                <Tag v-for="keyword in project.meta?.keywords" 
                    :key="keyword"
                    :value="keyword"
                    rounded
                    class="bg-cyan-500/10 text-cyan-600 dar:bg-cyan-800/10 dark:text-cyan-800 hover:bg-cyan-500/5"
                ></Tag>
          </div>
        </div>     

      </div>

  </template>
  </Dialog>
</template>

<script setup lang="ts">
import type { ProjectI18n } from '~/types/project'

const props = defineProps<{
  project: ProjectI18n
  visible: boolean
}>()

const emit = defineEmits(['update:visible'])

const { locale,t } = useI18n()
// const { getTechnologyById } = useTechnologies()

const localVisible = computed({
  get: () => props.visible,
  set: (value) => emit('update:visible', value)
})

const formatDate = (dateString: string) => {

  let localeDate = locale.value == 'es' ? 'es-MX' : 'en-US';
  return new Date(dateString)
    .toLocaleDateString(localeDate, {
      year: 'numeric',
      month: 'long'
    })
}
</script>

<style scoped>

.p-image{
  @apply w-full h-full;
}

.modal-body{
  @apply relative p-4 overflow-y-auto lg:overflow-y-hidden;

}
.info-list {
  @apply mt-6;
}

.info-list ul {
  @apply flex list-none flex-col;
}

.info-list li{
    @apply flex basis-1/2;
}

.info-list strong{
  @apply font-semibold pr-2 mr-2;
}

.project-details {
  @apply space-y-6;
}

.details-image {
  @apply object-fill rounded-lg;
}

.details-meta {
  @apply text-gray-600 dark:text-gray-300;
}

.details-section {
  @apply mt-8 overflow-y-auto;
}

.section-title {
  @apply font-semibold text-lg;
}

.section-content {
  @apply text-gray-700 dark:text-gray-300 whitespace-pre-line;
}

</style>
