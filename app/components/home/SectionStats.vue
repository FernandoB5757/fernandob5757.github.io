<template>
  <section class="py-16 relative">
    <div class="container mx-auto px-5">
      <h2 class="sr-only">{{ $t('stats.title') ?? 'Stats' }}</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        <div
          v-for="stat in stats"
          :key="stat.key"
          class="flex flex-col items-center text-center"
        >
          <div class="flex items-center gap-1">
            <Icon :name="stat.icon" class="text-primary text-2xl md:text-3xl" />
            <span
              ref="counterRefs"
              class="text-4xl md:text-5xl font-bold font-serif text-primary"
            >
              {{ stat.prefix }}{{ animatedValues[stat.key] ?? 0 }}{{ stat.suffix }}
            </span>
          </div>
          <span class="text-sm md:text-base mt-2 uppercase tracking-wide text-gray-600 dark:text-gray-400">
            {{ $t(`stats.${stat.key}`) }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'

const sectionRef = ref<HTMLElement | null>(null)
const hasAnimated = ref(false)
const animatedValues = reactive<Record<string, number>>({
  years: 0,
  projects: 0,
  technologies: 0,
  companies: 0,
})

const stats = [
  { key: 'years', value: 4, suffix: '+', prefix: '', icon: 'heroicons:calendar-days' },
  { key: 'projects', value: 5, suffix: '+', prefix: '', icon: 'heroicons:rocket-launch' },
  { key: 'technologies', value: 20, suffix: '+', prefix: '', icon: 'heroicons:code-bracket' },
  { key: 'companies', value: 3, suffix: '+', prefix: '', icon: 'heroicons:building-office-2' },
]

const prefersReducedMotion = () =>
  import.meta.client && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const animateCounters = () => {
  if (hasAnimated.value) return
  hasAnimated.value = true

  if (prefersReducedMotion()) {
    stats.forEach(stat => { animatedValues[stat.key] = stat.value })
    return
  }

  stats.forEach((stat) => {
    const duration = 1500
    const start = performance.now()

    const step = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      animatedValues[stat.key] = Math.floor(progress * stat.value)
      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        animatedValues[stat.key] = stat.value
      }
    }
    requestAnimationFrame(step)
  })
}

onMounted(() => {
  const target = document.getElementById('stats-section')
  if (target) {
    sectionRef.value = target
    useIntersectionObserver(sectionRef, ([entry]) => {
      if (entry?.isIntersecting) {
        animateCounters()
      }
    }, { threshold: 0.3 })
  }
})
</script>
