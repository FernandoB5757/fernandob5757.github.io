<template>
    <div class="flex items-center" :class="sizeConfig.gap">
        <a href="https://github.com/FernandoB5757"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
            :aria-label="$t('accessibility.gotomy') + ' GitHub'"
        >
            <Icon name="fa6-brands:github" :class="sizeConfig.icon" />
        </a>
        <a href="https://www.linkedin.com/in/jes%C3%BAs-fernando-barajas-galindo-965149285/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
            :aria-label="$t('accessibility.gotomy') + ' LinkedIn'"
        >
            <Icon name="fa6-brands:linkedin-in" :class="sizeConfig.icon" />
        </a>
        <a href="mailto:me@fernandobg.com"
            class="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
            :aria-label="$t('accessibility.gotomy') + ' email'"
        >
            <Icon name="heroicons:envelope" :class="sizeConfig.icon" />
        </a>
    </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
    size?: 'sm' | 'md' | 'lg'
}>(), {
    size: 'md'
})

const sizes = {
    sm: { icon: 'text-lg', gap: 'gap-3' },
    md: { icon: 'text-xl', gap: 'gap-4' },
    lg: { icon: 'text-2xl', gap: 'gap-5' },
} as const

const sizeConfig = computed(() => sizes[props.size])
</script>
