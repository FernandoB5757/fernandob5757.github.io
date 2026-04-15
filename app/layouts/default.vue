<template>
    <main>
        <AppHeader />
        <slot />
        <ScrollTop />
        <footer>
            <AppFooter />
        </footer>
    </main>
</template>

<script setup>
    const img = useImage()

    useHead({
        link: {
            rel: "icon",
            href: img('/images/logo.webp')
        }
    })
</script>
