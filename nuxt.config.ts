// https://nuxt.com/docs/api/configuration/nuxt-config
import Theme from './themes/default'
declare const process: { env: Record<string, string | undefined> }

export default defineNuxtConfig({
  compatibilityDate: '2025-07-14',
  devtools: { enabled: true },
  ssr: true,
  typescript: {
    typeCheck: true,
    strict: true
  },
  extends: [
    // ['github:red-plug/layers-nutrix', { auth: process.env.GITHUB_TOKEN }]
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@nuxtjs/i18n',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxtjs/sitemap',
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        class: 'scroll-smooth',
      },
    },
  },
  site: {
    url: process.env.APP_URL || 'https://fernandobg.com',
    name: 'Fernando Barajas | Software Engineer Portfolio',
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: [
      { code: 'es', language: 'es-MX', file: 'es.json' },
      { code: 'en', language: 'en-US', file: 'en.json' }
    ],
    defaultLocale: 'es',
    strategy: 'prefix_except_default',
    baseUrl: process.env.APP_URL || 'https://fernandobg.com',
  },
  primevue: {
    autoImport: false,
    components: {
      include: [
        'Button',
        'Avatar',
        'Textarea',
        'Tag',
        'Image',
        'Floatlabel',
        'Drawer',
        'Forms',
        'Dialog',
        'ScrollTop'
      ]
    },
    directives: {
      include: [
        'Button',
        'Avatar',
        'Textarea',
        'Tag',
        'Image',
        'Floatlabel',
        'Drawer',
        'Forms',
        'Dialog',
        'ScrollTop'
      ]
    },
    options: {
      theme: {
        preset: Theme,
        options: {
          darkModeSelector: '.dark-mode',
          cssLayer: {
            name: 'primevue',
            order: 'tailwind-base, primevue, tailwind-utilities'
          }
        }
      },
      ripple: true,
    },
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
  colorMode: {
    classSuffix: '-mode',
  },
  image: {
    format: ['webp'],
    provider: 'ipx',
  },
  runtimeConfig: {
    serverToken: process.env.SERVER_TOKEN,
    public: {
      apiBase: process.env.API_URL,
      appUrl: process.env.APP_URL || 'https://fernandobg.com',
    }
  },
  nitro: {
    prerender: {
      failOnError: false,
      routes: [
        '/_ipx/w_320&f_webp/images/me-md.webp',
        '/_ipx/w_640&f_webp/images/me-md.webp',
        '/_ipx/w_768&f_webp/images/me-md.webp',
        '/_ipx/w_1024&f_webp/images/me-md.webp',
        '/_ipx/w_1280&f_webp/images/me-md.webp',
        '/_ipx/w_1536&f_webp/images/me-md.webp',
        '/_ipx/w_2048&f_webp/images/me-md.webp',
        '/_ipx/w_2560&f_webp/images/me-md.webp',
        '/_ipx/w_3072&f_webp/images/me-md.webp',

        '/_ipx/f_webp&s_64x64/images/me-sm.webp',
        '/_ipx/f_webp&s_128x128/images/me-sm.webp',

        '/_ipx/f_webp&s_128x128/images/me-sm.webp',

        '/_ipx/w_320&f_webp/images/me-md.webp',
        '/_ipx/w_640&f_webp/images/me-md.webp',
        '/_ipx/w_768&f_webp/images/me-md.webp',
        '/_ipx/w_1024&f_webp/images/me-md.webp',
        '/_ipx/w_1280&f_webp/images/me-md.webp',
        '/_ipx/w_1536&f_webp/images/me-md.webp',
        '/_ipx/w_2048&f_webp/images/me-md.webp',
        '/_ipx/w_2560&f_webp/images/me-md.webp',
        '/_ipx/w_3072&f_webp/images/me-md.webp',


        '/_ipx/f_webp/images/projects/ekar.webp',
        '/_ipx/f_webp/images/projects/ekar.webp',

        '/_ipx/f_webp/images/projects/jb_refacciones.webp',
        '/_ipx/f_webp/images/projects/jb_refacciones.webp',

        '/_ipx/f_webp/images/projects/mimo.webp',
        '/_ipx/f_webp/images/projects/mimo.webp',

        '/_ipx/f_webp/images/projects/solarudg.webp',
        '/_ipx/f_webp/images/projects/solarudg.webp',

        '/_ipx/f_webp/images/projects/tubin.webp',
        '/_ipx/f_webp/images/projects/tubin.webp'

      ]
    }
  },
})
