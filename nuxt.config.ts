// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Portfolio by Sarus',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'เว็บไซต์สำหรับรวบรวามผลงานของ Sarus' }
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  plugins: [
    { src: '~/plugins/aos.js', ssr: false }
  ],
  css: [
    '~/assets/global.scss',
    'aos/dist/aos.css',
    '@mdi/font/css/materialdesignicons.min.css' 
  ],
  modules: [
    '@nuxt/ui',
    'nuxt-icon',
    'nuxt-aos',
    'nuxt-mdi',
    '@nuxtjs/tailwindcss'
  ],
  aos: {
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
  },
  tailwindcss: {
    cssPath: '~/assets/tailwind.css',
    configPath: 'tailwind.config.js',
  }
})