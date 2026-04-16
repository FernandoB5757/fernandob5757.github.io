<template>
  <div
    ref="timelineContainerRef"
    class="w-full font-sans xl:px-10"
  >
    <!-- <div class="mx-auto max-w-7xl px-4 py-20 xl:px-10 xl:px-8">
      <h2 class="mb-4 max-w-4xl text-xl text-black xl:text-4xl dark:text-white">
        {{ title }}
      </h2>
      <p class="max-w-sm text-sm text-neutral-700 xl:text-base dark:text-neutral-300">
        {{ description }}
      </p>
    </div> -->

    <div ref="timelineRef"
      class="relative z-0 mx-auto max-w-7xl py-20"
    >
      <div v-for="(item, index) in items"
        :key="item.id"
        class="relative z-10 mb-12 flex w-11/12 xl:w-full mx-5 xl:mx-0 group"
      >
          <div :class="[
                'w-full xl:w-1/2',
                  index % 2 === 0 ? 'order-1 xl:pr-8 xl:text-right' : 'xl:pl-8 xl:text-left order-2'
              ]"
          >
              <div class="card">
                <NuxtPicture
                  :src="item.image.src"
                  format="webp"
                  :img-attrs="{
                      alt: `image of ${item.image.alt}`,
                      class: 'h-24 w-auto bg-surface-300 dark:bg-transparent rounded p-2 ' + (index % 2 === 0 ? 'xl:ml-auto' : 'xl:mr-auto'),
                      height: item.image?.height ?? 150,
                      width: item.image?.width ?? 150,
                      loading: 'lazy'
                    }"
                />
                <div class="heading">
                  <div class="title">
                      {{ item.title }}
                  </div>
                  <span v-if="item.role" class="block text-sm font-medium text-primary-600 dark:text-primary-400 mb-1">
                      {{ item.role }}
                  </span>
                  <span class="block text-sm">
                      {{ item.date.start }}
                  </span>
                </div>
                <p class="description">
                    {{ item.description }}
                </p>
              </div>
          </div>
          <div class="absolute left-1/2 top-6 -translate-x-1/2 transform xl:relative xl:left-0 xl:top-0 xl:w-1/2 xl:translate-x-0"
              :class="index % 2 === 0 ? 'xl:order-2' : 'xl:order-1'"
          >
          </div>
          <div class="brightness-100 group-hover:brightness-150 absolute w-full top-1/2 flex justify-start xl:justify-center  ml-[-26px] xl:ml-0 z-10">
            <div class="h-4 w-4 rounded-full bg-primary-500 shadow-blue-neon"></div>
          </div>
      </div>

      <div :style="{
              height: computedHeight + 'px',
            }"
        class="absolute w-full top-0 flex justify-start xl:justify-center"
      >
          <div class="x-0 relative w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] dark:via-neutral-700"
          >
            <Motion
              as="div"
              :style="{
                height: heightTransform,
                opacity: opacityTransform,
              }"
              class="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t
              from-blue-400 dark:from-blue-200 from-10% via-blue-200 dark:via-blue-950 via-30% to-transparent"
            >
            </Motion>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
import { Motion, useScroll, useTransform } from "motion-v";
import type { HTMLAttributes } from "vue";
import type {  ExperienceI18n } from '@@/shared/types/index'

interface Props {
  containerClass?: HTMLAttributes["class"];
  class?: HTMLAttributes["class"];
  items: ExperienceI18n[];
  title?: string;
  description?: string;
  height?: number;
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
  height: 0
});

const timelineContainerRef = ref<HTMLElement | null>(null);
const timelineRef = ref<HTMLElement | null>(null);
const computedHeight = ref(props.height || 2000);

onMounted(() => {
  if (timelineRef.value) {
    computedHeight.value = props.height || timelineRef.value.scrollHeight
  }
})

const { scrollYProgress } = useScroll({
  target: timelineRef,
  offset: ["start 10%", "end 50%"],
});

const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
const heightTransform = useTransform(scrollYProgress, [0, 1], [0, computedHeight.value + 200]);
</script>

<style lang="scss" scoped>
.title{
  font-size: 24px;
  line-height: 39px;
  margin-bottom: 7px;
  font-weight: 600;
}
.heading{
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  @apply border-primary border-solid
}
.description{
    font-size: 18px;
    line-height: 28px;
    @apply whitespace-pre-line;
}
.card{
  @apply rounded-xl mt-4 mb-8 py-4 px-4 transition duration-700 border
    bg-white group-hover:bg-primary-100
    dark:border-gray-800 dark:group-hover:border-gray-500
    dark:bg-transparent dark:group-hover:bg-gray-900
   ;
}


/*
 group-hover:bg-primary-300
    group-hover:scale-100
    border border-primary-200 group-hover:border-primary-500
 */
</style>
