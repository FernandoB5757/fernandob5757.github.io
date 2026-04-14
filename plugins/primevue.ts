import { defineNuxtPlugin } from '#app'
import PrimeVue from 'primevue/config'
import Theme from '../themes/default'

// Componentes (solo los que se usan)
import Button from 'primevue/button'
import Avatar from 'primevue/avatar'
import Textarea from 'primevue/textarea'
import Tag from 'primevue/tag'
import PrimeImage from 'primevue/image'
import FloatLabel from 'primevue/floatlabel'
import Drawer from 'primevue/drawer'
import Dialog from 'primevue/dialog'
import ScrollTop from 'primevue/scrolltop'

// Directivas
import Ripple from 'primevue/ripple'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, {
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
  })

  nuxtApp.vueApp.component('Button', Button)
  nuxtApp.vueApp.component('Avatar', Avatar)
  nuxtApp.vueApp.component('Textarea', Textarea)
  nuxtApp.vueApp.component('Tag', Tag)
  nuxtApp.vueApp.component('Image', PrimeImage)
  nuxtApp.vueApp.component('FloatLabel', FloatLabel)
  nuxtApp.vueApp.component('Drawer', Drawer)
  nuxtApp.vueApp.component('Dialog', Dialog)
  nuxtApp.vueApp.component('ScrollTop', ScrollTop)

  nuxtApp.vueApp.directive('ripple', Ripple)
})
