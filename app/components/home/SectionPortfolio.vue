<template>
    <div class="py-16 relative ml-auto mr-auto flex">
        <div class="flex relative w-full p-3 content-center flex-wrap ">
            <div class="relative w-full">
                <div class="text-center" id="my-portfolio-header">
                    <AnimationsBlurReveal
                        :delay="0.2"
                        :duration="0.75"
                        class="p-8"
                    >
                        <span class="text-primary block uppercase text-sm font-medium tracking-widest leading-4">
                            {{  $t('projects.sub_header') }}
                        </span>
                        <h2 class="text-6xl font-bold leading-tight  mt-4 mb-0">
                            {{  $t('projects.header') }}
                        </h2>
                    </AnimationsBlurReveal>
                </div>

                <div id="my-portfolio-projects" class="w-full relative">
                    <div class="flex">
                        <ProjectList :projects="projects" />
                    </div>
                </div>

                <!-- <div id="my-contributions-projects" class="w-full relative">
                    <ClientOnly>
                        <AnimatedTestimonials :testimonials="minorContributions" />
                    </ClientOnly>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// import AnimatedTestimonials from '../animations/AnimatedTestimonials.vue';
import { useProjects } from '~/composables/useProjects';
import ProjectList from '../projects/ProjectList.vue';

const { projects } = useProjects()

</script>