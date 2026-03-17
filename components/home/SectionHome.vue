<template>
    <div class="background-container">
        <div class="content-layer top-16 md:top-20 px-1 md:px-5 xl:px-20 2xl:px-36 3xl:px-44">
            <div class="flex flex-col md:flex-row-reverse justify-center">
                <div class="w-full md:w-1/3 xl:w-1/2 2xl:w-4/12" id="me-welcome-image">
                    <div class="p-3 flex items-center justify-center relative">
                        <div class="w-60 h-52 md:w-72 md:h-64 lg:w-96 lg:h-80 absolute z-0 image-shadow">
                            <div class="w-full h-full bg-white/20 dark:bg-black/20
                            rounded
                            shadow-2xl dark:shadow-primary-50/50 shadow-primary-500/50 "></div>
                        </div>
                        <Image src="/images/me-xl.webp"  :pt:preview-mask:class="'lw-full bg-transparent'">
                            <template #image>
                                <NuxtImg src="/images/me-md.webp" 
                                    preload
                                    format="webp"
                                    width="400"
                                    height="400"
                                    alt="Fernando Barajas" 
                                    class="rounded w-60 h-60 md:w-72 md:h-72 lg:w-96 lg:h-96"
                                />
                            </template>
                            <template #original="slotProps">
                                <NuxtImg src="/images/me-xl.webp" 
                                    format="webp"
                                    width="800"
                                    height="800"
                                    alt="Fernando Barajas" 
                                    loading="lazy"
                                />
                            </template>
                        </Image>
                    </div>
                </div>

                <div class="w-full md:w-2/3 xl:w-1/2 2xl:w-8/12 p-3 overflow-x-clip overflow-y-auto" id="me-welcome-letters">
                    <div class="align-content-center align-items-center">
                        <div class="w-full h-full relative mt-5">
                            <AnimationsBlurReveal
                                :delay="0.1"
                                :duration="0.5"
                                class="relative mt-5"
                            >
                                <div class="mb-6">
                                    <p class="text-md font-semibold uppercase mb-5 font-serif">
                                        {{ $t('homewelcome') }}
                                    </p>
                                    <h1 class="text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl font-bold font-serif">
                                        {{ $t('hi_welcome') }} <span class="text-primary">Fernando Barajas</span>
                                        <br>
                                        <span> {{ $t('a_welcome') }} </span>
                                        <LazyAnimationsFlipWords
                                            :words="[
                                                $t('Software Engineer'),
                                                $t('PHP Developer'),
                                                $t('Web Developer'),
                                                $t('Full Stack Developer')
                                            ]"
                                            :duration="3000"
                                            class="!text-primary w-full"
                                            hydrate-on-idle
                                        />
                                    </h1>
                                </div>
                            </AnimationsBlurReveal>
                        </div>
                    </div>
                    <section class="pt-14 lg:pt-20 xl:pt-28 w-full relative">
                        <div class="flex flex-row items-center gap-x-3 sm:gap-x-0">
                            <div class="w-1/2">
                                <span class="text-sm tracking-wide uppercase">
                                    {{ $t('findme') }}
                                </span> 
                                <div class="flex flex-row gap-1 sm:gap-3 uppercase">
                                    <LazyAnimationsCardSpotlight
                                        v-for="(socialLink, key) in socialLinks"
                                        :key="key"
                                        class="cursor-pointer flex-col items-center justify-center whitespace-nowrap shadow-2xl w-14 h-14 "
                                        :gradient-color="isDark ? '#363636' : '#C9C9C9'"
                                        :gradient-size="200"
                                        :gradient-opacity="0.8"
                                        hydrate-on-idle
                                    >
                                        <a :href="socialLink.link"
                                            target="_blank" 
                                            rel="noreferrer noopener" 
                                            :aria-label="socialLink.ariaLabel"
                                            class="flex items-center justify-center"
                                        >
                                            <Icon :name="socialLink.icon" 
                                                class="dark:text-surface-400 text-surface-500 hover:text-primary text-4xl" 
                                            />
                                        </a>
                                    </LazyAnimationsCardSpotlight>
                                </div>
                            </div>
                            <div class="w-1/2">
                                <span class="text-sm tracking-wide uppercase">
                                    {{ $t('bestskills') }}
                                </span>
                                <div class="flex flex-row gap-1 sm:gap-3">
                                    <LazyAnimationsCardSpotlight
                                        v-for="(skills, key) in bestSkills"
                                        :key="key"
                                        class="cursor-pointer flex-col items-center justify-center whitespace-nowrap shadow-2xl w-14 h-14 "
                                        :gradient-color="isDark ? '#363636' : '#C9C9C9'"
                                        slot-class="flex items-center justify-center"
                                        :gradient-size="200"
                                        :gradient-opacity="0.8"
                                        hydrate-on-idle
                                    >
                                        <Icon :name="skills.icon" 
                                            class="dark:text-surface-400 text-surface-500 hover:text-primary text-4xl" 
                                        />
                                    </LazyAnimationsCardSpotlight>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
    
    <LazyAnimationsWavyBackground 
        :colors="[
            '#bfcdfe',
            '#93abfd',
            '#6083fa',
            '#3b66f6',
            '#2552eb',
            '#1d48d8'
        ]"       
        canvaClass="absolute inset-0 h-[1000px] md:h-[800px]"
        :waveOpacity="0.2"
        hydrate-on-idle
    />
</template>

<script setup lang="ts">    
import { useTheme } from '~/composables/useTheme'
import { socialLinks,bestSkills } from "@/stores/homeStore";

const { isDark } = useTheme();

</script>

<style lang="scss" scoped>
.image-shadow {
    bottom: 12px;
}

.background-container {
    @apply relative h-[890px] md:h-[800px];
}

.content-layer {
    @apply absolute z-10 h-[900px] md:h-[700px] w-full;
}
</style>