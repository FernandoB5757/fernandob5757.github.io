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
                <div class="flex flex-col sm:flex-row gap-3 mt-2">
                    <FloatLabel class="w-full">
                        <InputText id="contact-name" v-model="name" class="w-full" />
                        <label for="contact-name">{{ $t('contactme.name') }}</label>
                    </FloatLabel>
                    <FloatLabel class="w-full">
                        <InputText id="contact-email" v-model="email" type="email" class="w-full" />
                        <label for="contact-email">{{ $t('contactme.email') }}</label>
                    </FloatLabel>
                </div>
                <FloatLabel class="w-full mt-8">
                    <Textarea id="message" v-model="body" rows="8" cols="30" class="resize-none w-full" required />
                    <label for="message">{{ $t('contactme.label') }}:</label>
                </FloatLabel>
                <p v-if="showValidation" class="text-sm text-red-500 mt-2">
                    {{ $t('contactme.validation_required') }}
                </p>
                <div class="w-full flex items-center justify-between mt-4">
                    <SocialLinks />
                    <Button as="a" :href="isValid ? mailto : undefined" role="button"
                        :aria-label="$t('accessibility.submitform')"
                        class="text-primary-100 dark:text-white"
                        @click="handleSend">
                        <Icon name="heroicons:paper-airplane" class="mr-1" />
                        {{ $t('Send') }}
                    </Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const name = ref('')
const email = ref('')
const body = ref(t('contactme.content'))
const showValidation = ref(false)

const isValid = computed(() => name.value.trim() !== '' && email.value.trim() !== '' && body.value.trim() !== '')

const mailto = computed(() => {
    const target = 'mailto'
    const toEmail = 'me@fernandobg.com'
    const subject = t('contactme.emailsubject')
    const fullBody = `${body.value}\n\n---\n${name.value}\n${email.value}`

    return `${target}:${toEmail}?` + encodeURI(`subject=${subject}&body=${fullBody}`)
})

function handleSend(e: Event) {
    if (!isValid.value) {
        e.preventDefault()
        showValidation.value = true
    }
}
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
