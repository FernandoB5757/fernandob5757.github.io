<template>
  <section class="py-16 relative container mx-auto">
    <header id="my-portfolio-header" class="text-center mb-12">
      <BlurReveal :delay="0.2" :duration="0.75" class="p-8">
        <span class="text-primary block uppercase text-sm font-medium tracking-widest leading-4">
          {{ $t('experiences.sub_header') }}
        </span>
        <h2 class="text-5xl md:text-6xl font-bold leading-tight mt-4">
          {{ $t('experiences.header') }}
        </h2>
      </BlurReveal>
    </header>

    <div class="relative w-full h-fit">
      <LazyAnimationsTimeLine
        :items="experiences"
        :height="2500"
        hydrate-on-visible
      />
    </div>
  </section>
</template>

<script setup lang="ts">
// import { defineAsyncComponent, hydrateOnVisible } from 'vue'

import BlurReveal from '../animations/BlurReveal.vue';
import { useExperiences } from '~/composables/useExperiences';

// const Timeline = defineAsyncComponent({
//   loader: () => import('../animations/TimeLine.vue'),
//   hydrate: hydrateOnVisible()
// })

const { experiences } = useExperiences();
</script>

<style scoped>
@media (max-width: 767px) {
  .timeline-item::before {
    content: '';
    @apply absolute left-[-8px] top-6 h-full w-0.5 bg-neutral-200 dark:bg-neutral-800;
  }
}
</style>