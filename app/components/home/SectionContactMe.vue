<template>
    <div class="background-container">
        <div class="background-component">
            <AnimationsInteractiveGridPattern
                :class="'[mask-image:radial-gradient(650px_circle_at_center,white,transparent)]'" :squares="[30, 30]"
                :width="55"
                :height="55"
                squares-class-name="bg:hover:fill-primary-100 hover:fill-primary-500" />
        </div>

        <div class="content-layer">
            <div class="flex flex-col w-full max-w-lg">
                <h2 class="text-4xl md:text-5xl font-semibold font-serif text-center md:text-start my-4 capitalize">
                    {{ $t('contactme.title') }}
                </h2>
                <p class="text-sm text-green-600 dark:text-green-400 font-medium flex items-center gap-1.5 mb-4">
                    <span class="relative flex h-2.5 w-2.5">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    {{ $t('open_to_opportunities') }}
                </p>
                <FloatLabel class="w-full mt-4">
                    <Textarea id="message" v-model="body" rows="10" cols="30" class="resize-none w-full" required />
                    <label for="message">{{ $t('contactme.label') }}:</label>
                </FloatLabel>
                <div class="w-full flex items-center justify-between mt-4">
                    <div class="flex items-center gap-4">
                        <a href="https://github.com/FernandoB5757"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                            :aria-label="$t('accessibility.gotomy') + ' github'"
                        >
                            <Icon name="fa6-brands:github" class="text-xl" />
                        </a>
                        <a href="https://www.linkedin.com/in/jes%C3%BAs-fernando-barajas-galindo-965149285/"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                            :aria-label="$t('accessibility.gotomy') + ' linkedin'"
                        >
                            <Icon name="fa6-brands:linkedin-in" class="text-xl" />
                        </a>
                        <a href="mailto:me@fernandobg.com"
                            class="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                            :aria-label="$t('accessibility.gotomy') + ' email'"
                        >
                            <Icon name="heroicons:envelope" class="text-xl" />
                        </a>
                    </div>
                    <Button type="button" :href="mailto" role="button" :aria-label="$t('accessibility.submitform')"
                        class="text-primary-100 dark:text-white">
                        {{ $t('Send') }}
                    </Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const body = ref(t('contactme.content'))

const mailto = computed(() => {
    const mailto = 'mailto'
    const email = 'me@fernandobg.com'
    const subject = t('contactme.emailsubject')

    return `${mailto}:${email}?` + encodeURI(`subject=${subject}&body=${body.value}`)
})

</script>

<style lang="scss" scoped>
.background-container {
    @apply relative min-h-[650px] md:min-h-[700px] my-10;
}

.background-component {
    @apply absolute z-0 top-0 left-0 w-full h-full;
}

.content-layer {
    @apply absolute z-10 inset-0 flex items-center justify-center px-5 md:justify-start md:pl-[15%] lg:pl-[25%];
}
</style>
