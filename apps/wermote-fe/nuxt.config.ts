// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  modules: ['nuxt-icons'],
  devtools: { enabled: true },
  experimental: {
    viewTransition: true
  },
})
