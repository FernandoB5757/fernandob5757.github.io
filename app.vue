<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const head = useLocaleHead({
  seo: true,
  dir: true,
  lang: true,
  key: 'id',
})

useHead(() => ({
  htmlAttrs: {
    lang: head.value.htmlAttrs?.lang || locale.value,
    dir: head.value.htmlAttrs?.dir || 'ltr',
  },
  link: [...(head.value.link || [])],
  meta: [...(head.value.meta || [])],
}))

useServerSeoMeta({
  charset: 'utf-8',
  author: 'Fernando Barajas',
  robots: 'index, follow',
  ogType: 'website',
  ogSiteName: 'Fernando Barajas | Software Engineer Portfolio',
  twitterCard: 'summary_large_image',
  twitterCreator: '@fernandobarajas',
})
</script>