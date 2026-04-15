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
            <div class="flex flex-col w-full">
                <h2 class="text-4xl md:text-5xl font-semibold font-serif text-center md:text-start my-4 capitalize">
                    {{ $t('contactme.title') }}
                </h2>
                <FloatLabel class="w-full mt-8">
                    <Textarea id="message" v-model="body" rows="10" cols="30" class="resize-none w-full" required />
                    <label for="message">{{ $t('contactme.label') }}:</label>
                </FloatLabel>
                <div class="w-full flex justify-end mt-2">
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
    @apply relative h-[700px] my-10;
}

.background-component {
    @apply absolute z-0 top-0 left-0 w-full h-full;
}

.content-layer {
    @apply absolute z-10 top-32 md:top-28 xl:top-32 left-5 sm:left-28 lg:left-1/4 px-5 sm:px-0;
}
</style>
