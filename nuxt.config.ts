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
  css: [
    '~/assets/global.css'
  ]
  //modules: ["@nuxt/ui"]
})