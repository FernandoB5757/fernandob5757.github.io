<template>
  <ClientOnly>
      <div
        :class="[
          'group relative flex size-full overflow-hidden rounded-xl borde bg-neutral-900 text-white',
          $props.class,
        ]"
        @mousemove="handleMouseMove"
        @mouseleave="handleMouseLeave"
      >
        <div :class="cn('relative z-10', props?.slotClass)">
          <slot></slot>
        </div>
        <div
          class="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          :style="{
            background: backgroundStyle,
            opacity: gradientOpacity,
          }"
            role="presentation"
            aria-hidden="true"
        ></div>
      </div>
      
      <template #fallback>
        <slot></slot>
      </template>

  </ClientOnly>
</template>
  
  <script setup lang="ts">
  import { ref, computed, type HTMLAttributes } from "vue";
  import { cn } from "@/lib/utils";
  
  const props = withDefaults(
    defineProps<{
      class: HTMLAttributes["class"];
      slotClass?: HTMLAttributes["class"];
      gradientSize: number;
      gradientColor: string;
      gradientOpacity: number;
    }>(),
    {
      class: "",
      slotClass: "",
      gradientSize: 200,
      gradientColor: "#262626",
      gradientOpacity: 0.8,
    },
  );
  
  const mouseX = ref(-200 * 10);
  const mouseY = ref(-200 * 10);
  
  function handleMouseMove(e: MouseEvent) {
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    mouseX.value = e.clientX - rect.left;
    mouseY.value = e.clientY - rect.top;
  }
  
  function handleMouseLeave() {
    mouseX.value = -200 * 10;
    mouseY.value = -200 * 10;
  }
  
  const backgroundStyle = computed(() => {
    return `radial-gradient(
      circle at ${mouseX.value}px ${mouseY.value}px,
      ${props.gradientColor} 0%,
      rgba(0, 0, 0, 0) 70%
    )`;
  });
  </script>