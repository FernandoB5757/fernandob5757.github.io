<template>
    <div>
        <section id="welcome-home">
            <HomeSectionHome />
        </section>
        
        <section id="about-me" class="limit-elements">
            <LazyHomeSectionAboutMe hydrate-on-visible />
        </section>

        <section id="my-portfolio" class="limit-elements">
            <LazyHomeSectionPortfolio hydrate-on-visible />
        </section>

        <section id="my-resume" class="limit-elements">
            <LazyHomeSectionResume hydrate-on-visible />
        </section>

        <section id="contact-with-me" class="limit-elements">
            <LazyHomeSectionContactMe hydrate-on-visible />
        </section>
    </div>
</template>
<script setup lang="ts">
const { t, locale } = useI18n()
const img = useImage()
const config = useRuntimeConfig()
const baseUrl = config.public.appUrl || 'https://fernandobg.com'

const title = 'Fernando Barajas | ' + t('portfolio') + ' - Software Engineer'
const description = t('seo.description')
const keywords = t('seo.keywords')
const ogImageUrl = baseUrl + `/images/og-image-${locale.value}-2.png`
const canonicalUrl = baseUrl + (locale.value === 'es' ? '/' : '/en')

useSeoMeta({
  title,
  description,
  keywords,
  ogTitle: title,
  ogDescription: description,
  ogImage: ogImageUrl,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageType: 'image/png',
  ogImageAlt: 'Fernando Barajas - Software Engineer & Full Stack Developer',
  ogUrl: canonicalUrl,
  ogLocale: locale.value === 'es' ? 'es_MX' : 'en_US',
  ogLocaleAlternate: locale.value === 'es' ? 'en_US' : 'es_MX',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: ogImageUrl,
  twitterImageAlt: 'Fernando Barajas - Software Engineer & Full Stack Developer',
})

useHead({
  link: [
    { rel: 'canonical', href: canonicalUrl },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Jesús Fernando Barajas Galindo',
        alternateName: 'Fernando Barajas',
        url: baseUrl,
        image: ogImageUrl,
        jobTitle: 'Software Engineer',
        description: description,
        knowsAbout: ['PHP', 'Laravel', 'JavaScript', 'TypeScript', 'Vue.js', 'Nuxt', 'Web Development'],
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: 'Universidad de Guadalajara - CUCEI',
        },
        worksFor: {
          '@type': 'Organization',
          name: 'Netcommerce',
        },
        sameAs: [
          'https://github.com/FernandoB5757',
          'https://www.linkedin.com/in/jes%C3%BAs-fernando-barajas-galindo-965149285/',
        ],
      }),
    },
  ],
})
</script>

<style scoped>

.limit-elements{
    @apply max-w-[1320px] ml-auto mr-auto;
}

</style>