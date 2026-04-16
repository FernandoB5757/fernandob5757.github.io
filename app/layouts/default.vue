<template>
    <main>
        <a href="#main-content"
            class="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-primary-500 focus:text-white focus:px-4 focus:py-2 focus:rounded"
        >
            {{ $t('accessibility.skip_to_content') }}
        </a>
        <div
            class="fixed top-0 left-0 h-[3px] bg-primary-500 z-50 transition-[width] duration-100"
            :style="{ width: scrollProgress + '%' }"
            role="progressbar"
            :aria-valuenow="Math.round(scrollProgress)"
            aria-valuemin="0"
            aria-valuemax="100"
            :aria-label="'Scroll progress'"
        />
        <AppHeader />
        <div id="main-content">
            <slot />
        </div>
        <ScrollTop />
        <footer>
            <AppFooter />
        </footer>
    </main>
</template>

<script setup>
    import { useWindowScroll, useWindowSize } from '@vueuse/core'

    const img = useImage()
    const { y } = useWindowScroll()
    const { height: windowHeight } = useWindowSize()

    const scrollProgress = computed(() => {
        if (!import.meta.client) return 0
        const docHeight = document.documentElement.scrollHeight - windowHeight.value
        if (docHeight <= 0) return 0
        return Math.min((y.value / docHeight) * 100, 100)
    })

    useHead({
        link: {
            rel: "icon",
            href: img('/images/logo.webp')
        }
    })
</script>
