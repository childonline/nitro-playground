import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  // https://nuxt.com/docs/api/nuxt-config#build
  build: {
    transpile: ['vuetify'],
  },

  // https://nuxt.com/docs/api/nuxt-config#compatibilitydate
  compatibilityDate: '2024-11-01',

  // https://nuxt.com/docs/api/nuxt-config#devtools
  devtools: { enabled: true },

  // https://nuxt.com/docs/api/nuxt-config#modules
  modules: [
    '@nuxt/eslint',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins?.push(vuetify({ autoImport: true }))
      })
    },
  ],

  // https://nuxt.com/docs/api/nuxt-config#nitro
  nitro: {
    experimental: {
      database: true,
      tasks: true,
      websocket: true,
    },
  },

  // https://nuxt.com/docs/api/nuxt-config#vite
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
