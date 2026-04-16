<template>
    <div class="min-h-[60vh] flex flex-col items-center justify-center px-5 text-center">
        <h1 class="text-8xl font-bold text-primary font-serif">404</h1>
        <h2 class="text-2xl md:text-3xl font-semibold mt-4 font-serif">
            {{ $t('error.not_found') }}
        </h2>
        <p class="text-gray-500 dark:text-gray-400 mt-3 max-w-md">
            {{ $t('error.not_found_description') }}
        </p>
        <Button
            as="router-link"
            :to="localePath('index')"
            severity="primary"
            raised
            class="mt-8 font-semibold"
        >
            <Icon name="heroicons:home" class="mr-1" />
            {{ $t('error.go_home') }}
        </Button>
    </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

useSeoMeta({
    title: '404 - ' + 'Fernando Barajas',
    robots: 'noindex, nofollow',
})
</script>
