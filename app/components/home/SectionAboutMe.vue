<template>
    <div class="flex flex-col md:flex-row items-center container px-2 lg:px-0 mx-auto gap-x-4">
      <div class="flex flex-col items-center w-full md:w-1/2">
        <div
            class="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background "
        >
            <span class="pointer-events-none text-center font-semibold leading-none">
                <Icon
                    name="gis:earth-america"
                    class="text-9xl text-primary-900"
                />
            </span>

            <AnimationsOrbit v-for="technology in back"
                class="size-[30px] items-center justify-center border-none bg-transparent"
                :duration="technology.duration"
                :delay="technology.delay"
                :radius="technology.radius"
                :direction="technology.direction"
            >
                <NuxtImg :src="technology.icon"
                    :alt="'Image of ' +  technology.slug"
                    class="w-10 h-10"
                    width="40"
                    height="40"
                    loading="lazy"
                    fetch-priority="low"
                />
            </AnimationsOrbit>

        </div>
      </div>
      <AnimationsBlurReveal
            :delay="0.2"
            :duration="0.75"
            class="flex flex-col w-full md:w-2/3 p-5 md:p-0"
        >
            <h2 class="text-4xl md:text-5xl my-2 font-serif font-semibold">
                {{  $t('aboutme') }}
            </h2>
            <div class="text-sm md:text-xl my-2 whitespace-pre-line">
                {{  $t('aboutme_content') }}
                <blockquote class="p-4 my-4 border-s-4 border-primary-300 dark:border-primary-900">
                    <p class="text-xl italic font-medium leading-relaxed ">
                        "{{  $t('dont_be_a_coder') }}"
                    </p>
                </blockquote>
            </div>

            <div class="my-4">
                <h3 class="text-lg md:text-xl font-semibold font-serif mb-3">
                    {{ $t('aboutme_values_title') }}
                </h3>
                <div class="flex flex-wrap gap-2">
                    <span
                        v-for="valueKey in ['solutions', 'learning', 'leadership', 'quality']"
                        :key="valueKey"
                        class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium
                               bg-primary-500/10 text-primary-700 dark:text-primary-400"
                    >
                        <Icon name="heroicons:check-badge" class="text-base" />
                        {{ $t(`aboutme_values.${valueKey}`) }}
                    </span>
                </div>
            </div>

            <SocialLinks size="lg" class="mt-4" />
        </AnimationsBlurReveal>
    </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, hydrateOnIdle } from 'vue'
import { ORBIT_DIRECTION ,type OrbitTechnology} from "@@/shared/types/orbit";

const { isDark } = useTheme()

const AnimationsOrbit = defineAsyncComponent({
  loader: () => import('@/components/animations/Orbit.vue'),
  hydrate: hydrateOnIdle()
})

  let backTechnologies: Array<OrbitTechnology> = [
    //back
    {
        slug : 'php',
        duration : 135,
        delay: 10,
        radius: 100,
        direction : ORBIT_DIRECTION.CounterClockwise
    },
    {
        slug : 'laravel',
        duration : 135,
        delay: 50,
        radius: 100,
        direction : ORBIT_DIRECTION.Clockwise
    },

    {
        slug : 'postgresql',
        duration : 135,
        delay: 100,
        radius: 100,
        direction : ORBIT_DIRECTION.Clockwise
    },

    {
        slug : 'mysql',
        duration : 135,
        delay: 300,
        radius: 100,
        direction : ORBIT_DIRECTION.CounterClockwise
    },

    {
        slug : 'c++',
        duration : 135,
        delay: 90,
        radius: 100,
        direction : ORBIT_DIRECTION.CounterClockwise
    },



    //DEV OPs

    {
        slug : 'linux',
        duration : 125,
        delay: 10,
        radius: 130,
        direction : ORBIT_DIRECTION.Clockwise
    },

    {
        slug : 'nginx',
        duration : 125,
        delay: 20,
        radius: 130,
        direction : ORBIT_DIRECTION.CounterClockwise
    },

    {
        slug : 'apache',
        duration : 125,
        delay: 30,
        radius: 130,
        direction : ORBIT_DIRECTION.Clockwise,
    },

    {
        slug : 'cpanel',
        duration : 125,
        delay: 40,
        radius: 130,
        direction : ORBIT_DIRECTION.CounterClockwise
    },

    //GIT
    {
        slug : 'git',
        duration : 100,
        delay: 10,
        radius: 160,
        direction : ORBIT_DIRECTION.Clockwise
    },

    {
        slug : 'github',
        duration : 100,
        delay: 20,
        radius: 160,
        direction : ORBIT_DIRECTION.Clockwise
    },

    {
        slug : 'jira',
        duration : 100,
        delay: 30,
        radius: 160,
        direction : ORBIT_DIRECTION.CounterClockwise
    },

    {
        slug : 'gitlab',
        duration : 100,
        delay: 40,
        radius: 160,
        direction : ORBIT_DIRECTION.CounterClockwise
    },

    {
        slug : 'bitbucket',
        duration : 100,
        delay: 50,
        radius: 160,
        direction : ORBIT_DIRECTION.Clockwise
    },

    //FRONT
    {
        slug : 'javascript',
        duration : 75,
        delay: 10,
        radius: 190,
        direction : ORBIT_DIRECTION.CounterClockwise
    },

    {
        slug : 'typescript',
        duration : 75,
        delay: 20,
        radius: 190,
        direction : ORBIT_DIRECTION.Clockwise
    },
    {
        slug : 'html5',
        duration : 75,
        delay: 30,
        radius: 190,
        direction : ORBIT_DIRECTION.CounterClockwise
    },

    {
        slug : 'css',
        duration : 75,
        delay: 40,
        radius: 190,
        direction : ORBIT_DIRECTION.Clockwise
    },

    {
        slug : 'vue.js',
        duration : 75,
        delay: 50,
        radius: 190,
        direction : ORBIT_DIRECTION.CounterClockwise
    },

    {
        slug : 'filament',
        duration : 75,
        delay: 60,
        radius: 190,
        direction : ORBIT_DIRECTION.Clockwise
    },

    {
        slug : 'alpine.js',
        duration : 75,
        delay: 80,
        radius: 190,
        direction : ORBIT_DIRECTION.CounterClockwise
    },

    {
        slug : 'nuxt',
        duration : 75,
        delay: 90,
        radius: 190,
        direction : ORBIT_DIRECTION.Clockwise
    },

    {
        slug : 'tailwindcss',
        duration : 75,
        delay: 100,
        radius: 190,
        direction : ORBIT_DIRECTION.CounterClockwise
    },

    {
        slug : 'bootstrap',
        duration : 75,
        delay: 10,
        radius: 190,
        direction : ORBIT_DIRECTION.Clockwise
    },

    {
        slug : 'npm',
        duration : 75,
        delay: 70,
        radius: 190,
        direction : ORBIT_DIRECTION.CounterClockwise
    },

    {
        slug : 'vite',
        duration : 75,
        delay: 80,
        radius: 190,
        direction : ORBIT_DIRECTION.Clockwise
    },
  ];

  const back = computed(() => backTechnologies.map(function (item: OrbitTechnology) {
    const color = isDark.value ? '60a5fa' : '1e40af'
    return { ...item, icon: `https://cdn.simpleicons.org/${item.slug}/${color}` }
  }));

</script>
