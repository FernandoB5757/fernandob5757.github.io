<template>
    <main>
        <div
            class="fixed top-0 left-0 h-[3px] bg-primary-500 z-50 transition-[width] duration-100"
            :style="{ width: scrollProgress + '%' }"
        />
        <AppHeader />
        <slot />
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
