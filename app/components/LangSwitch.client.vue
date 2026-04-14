<template>
    <Button type="button" 
        severity="secondary" 
        @click="changeLang" 
        size="large"
        variant="text" 
        rounded
        class="hover:bg-inherit active:bg-inherit focus:bg-inherit"
        :aria-label="$t('changelang')"
    >
        <template #icon>
            <Icon :name="localeIcon" class="text-xl" />
        </template>
    </Button>
</template>
<script setup lang="ts">
const { locale, setLocale } = useI18n()

const localeIcon = computed(() => locale.value == 'es' ? 'circle-flags:mx' :  'circle-flags:us-um')

const changeLang = () => {
  setLocale(locale.value == 'en' ? 'es' : 'en')
}
</script>