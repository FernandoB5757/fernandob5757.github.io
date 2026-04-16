<template>
    <div
      ref="container"
      :class="props.class"
    >
      <div
        v-for="(child, index) in children"
        :key="index"
        class="blur-reveal-item"
        :style="{
          '--blur-duration': props.duration + 's',
          '--blur-delay': (props.delay * Number(index)) + 's',
          '--blur-amount': props.blur,
          '--blur-y-offset': props.yOffset + 'px',
        }"
        :class="{ 'blur-reveal-visible': isVisible }"
      >
        <component :is="child" />
      </div>
    </div>
  </template>

  <script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount, watchEffect, useSlots } from "vue";

  interface Props {
    duration?: number;
    delay?: number;
    blur?: string;
    yOffset?: number;
    class?: string;
  }

  const props = withDefaults(defineProps<Props>(), {
    duration: 1,
    delay: 2,
    blur: "20px",
    yOffset: 20,
  });

  const container = ref<HTMLElement | null>(null);
  const isVisible = ref(false);
  let observer: IntersectionObserver | null = null;
  const slots = useSlots();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const children = ref<any>([]);

  onMounted(() => {
    watchEffect(() => {
      children.value = slots.default ? slots.default() : [];
    });

    if (container.value) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry!.isIntersecting) {
            isVisible.value = true;
            observer?.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(container.value);
    }
  });

  onBeforeUnmount(() => {
    observer?.disconnect();
  });
  </script>

  <style scoped>
  .blur-reveal-item {
    opacity: 0;
    filter: blur(var(--blur-amount));
    transform: translateY(var(--blur-y-offset));
    transition:
      opacity var(--blur-duration) ease-in-out var(--blur-delay),
      filter var(--blur-duration) ease-in-out var(--blur-delay),
      transform var(--blur-duration) ease-in-out var(--blur-delay);
  }

  .blur-reveal-item.blur-reveal-visible {
    opacity: 1;
    filter: blur(0px);
    transform: translateY(0);
  }
  </style>
