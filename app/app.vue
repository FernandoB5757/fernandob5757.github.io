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
})

useHead(() => ({
  htmlAttrs: {
    lang: head.value.htmlAttrs?.lang || locale.value,
    dir: (head.value.htmlAttrs?.dir || 'ltr') as 'ltr' | 'rtl' | 'auto',
  },
  link: [...(head.value.link || [])] as any[],
  meta: [...(head.value.meta || [])] as any[],
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
