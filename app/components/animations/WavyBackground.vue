<template>
  <div :class="cn('w-full', props.containerClass)">
      <div :class="cn('z-0',canvaClass)">
        <canvas
          id="canvas"
          ref="canvasRef"
          :style="{ filter: isSafari ? `blur(${props.blur}px)` : undefined }"
        ></canvas>
      </div>
      <div :class="cn('w-full relative z-10', props.class)">
        <slot />
      </div>
  </div>
</template>

<script setup lang="ts">
import { createNoise3D } from "simplex-noise";
import { cn } from "@/lib/utils";
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import { templateRef } from "@vueuse/core";
import { useTheme }  from "@/composables/useTheme";

  interface WavyBackgroundProps {
    class?: string;
    containerClass?: string;
    canvaClass?: string
    height?: number;
    colors?: string[];
    waveWidth?: number;
    backgroundFill?: string;
    backgroundFillDark?: string;
    blur?: number;
    speed?: "slow" | "fast";
    waveOpacity?: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  }

  const props = withDefaults(defineProps<WavyBackgroundProps>(), {
    colors: () => ["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"],
    waveWidth: 50,
    backgroundFill: "white",
    backgroundFillDark: "black",
    blur: 10,
    speed: "fast",
    waveOpacity: 0.5,
  });

  const noise = createNoise3D();

  // Declare variables with null
  let w: number,
    h: number,
    nt = 0,
    ctx: CanvasRenderingContext2D | null = null;
  let animationId: number;
  let lastFrameTime = 0;
  const targetFPS = 30;
  const frameDuration = 1000 / targetFPS;
  let isPageVisible = true;
  let isInViewport = true;
  let observer: IntersectionObserver | null = null;

  const canvasRef = templateRef<HTMLCanvasElement | null>("canvasRef");

  const { isDark } = useTheme();

  function getSpeed(): number {
    return props.speed === "slow" ? 0.001 : 0.002;
  }

  const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function init() {
    const canvas = canvasRef.value;
    if (canvas) {
      ctx = canvas.getContext("2d");
      if (ctx) {
        const parent = canvasRef.value.parentElement;
        if (parent) {
          w = ctx.canvas.width = parent.clientWidth;
          h = ctx.canvas.height = props.height ? props.height : parent.clientHeight;
        }

        ctx.filter = `blur(${props.blur}px)`;

        const handleResize = () => {
          if (parent) {
            w = ctx!.canvas.width = parent.clientWidth;
            h = ctx!.canvas.height = parent.clientHeight;
          }
          ctx!.filter = `blur(${props.blur}px)`;
        };
        window.addEventListener('resize', handleResize, { passive: true });

        observer = new IntersectionObserver(
          ([entry]) => { isInViewport = entry!.isIntersecting; },
          { threshold: 0 }
        );
        observer.observe(canvas);

        document.addEventListener('visibilitychange', () => {
          isPageVisible = !document.hidden;
        });

        if (prefersReducedMotion()) {
          // Render a single static frame
          ctx.fillStyle = canvaBackgroundFill.value!;
          ctx.globalAlpha = props.waveOpacity!;
          ctx.fillRect(0, 0, w, h);
          drawWave(3);
          return;
        }

        render(0);
      }
    }
  }

  function drawWave(n: number) {
    nt += getSpeed();
    for (let i = 0; i < n; i++) {
      ctx!.beginPath();
      ctx!.lineWidth = props.waveWidth!;
      ctx!.strokeStyle = props.colors[i % props.colors!.length] ?? '';
      for (let x = 0; x < w; x += 8) {
        const y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx!.lineTo(x, y + h * 0.5);
      }
      ctx!.stroke();
      ctx!.closePath();
    }
  }

  const canvaBackgroundFill = computed(() => isDark.value ? props.backgroundFillDark : props.backgroundFill);

  function render(timestamp: number) {
    animationId = requestAnimationFrame(render);

    if (!isPageVisible || !isInViewport) return;

    const elapsed = timestamp - lastFrameTime;
    if (elapsed < frameDuration) return;
    lastFrameTime = timestamp - (elapsed % frameDuration);

    if (ctx) {
      ctx.fillStyle = canvaBackgroundFill.value!;
      ctx.globalAlpha = props.waveOpacity!;
      ctx.fillRect(0, 0, w, h);
      drawWave(3);
    }
  }

  onBeforeUnmount(() => {
    cancelAnimationFrame(animationId);
    observer?.disconnect();
  });

  const isSafari = ref(false);
  onMounted(() => {
    isSafari.value =
      typeof window !== "undefined" &&
      navigator.userAgent.includes("Safari") &&
      !navigator.userAgent.includes("Chrome");

    init();
  });

</script>
