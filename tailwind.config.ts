import type { Config } from 'tailwindcss'
import animate from "tailwindcss-animate"
import { setupInspiraUI } from "@inspira-ui/plugins"

export default <Partial<Config>>{
  darkMode: ['selector', '.dark-mode'],
  plugins: [require('tailwindcss-primeui'),animate,setupInspiraUI],
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./app/pages/**/*.{js,vue,ts}",
    "./app/layouts/**/*.{js,vue,ts}",
    "./app/plugins/**/*.{js,vue,ts}",
    "./themes/**/*.{js,vue,ts}",
    "./nuxt.config.{js,vue,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        awesome: ['Rubik Glitch'],
        sans: ["Poppins"],
        serif: ["Montserrat"]
      },
      colors: {
        'red-plug': {
          '50': 'rgb(var(--color-red-plug-50))',
          '100': 'rgb(var(--color-red-plug-100))',
          '200': 'rgb(var(--color-red-plug-200))',
          '300': 'rgb(var(--color-red-plug-300))',
          '400': 'rgb(var(--color-red-plug-400))',
          '500': 'rgb(var(--color-red-plug-500))',
          '600': 'rgb(var(--color-red-plug-600))',
          '700': 'rgb(var(--color-red-plug-700))',
          '800': 'rgb(var(--color-red-plug-800))',
          '900': 'rgb(var(--color-red-plug-900))',
          '950': 'rgb(var(--color-red-plug-950))',
        }
      },
      boxShadow: {
        'blue-neon': `
          0 0 5px rgb(var(--color-blue-300)),
          0 0 10px rgb(var(--color-blue-400)),
          0 0 15px rgb(var(--color-blue-500)),
          0 0 20px rgb(var(--color-blue-600))
        `,
        'blue-neon-sm': `
          0 0 2px rgb(var(--color-blue-400)),
          0 0 5px rgb(var(--color-blue-500))
        `
      },
      screens: {
        '3xl': '1920px',
        // => @media (min-width: 1px) { ... }
      }
    }
  }
}
