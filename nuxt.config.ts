// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "route", mode: "out-in", appear: true},
  },
  runtimeConfig: {
    public: {
      CAR_API_URL: process.env.CAR_API_URL,
      USER_API_URL: process.env.USER_API_URL,
      USER_API_URL_LOGIN: process.env.USER_API_URL_LOGIN,
    },
  },
  modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt", '@vueuse/nuxt'],
  css: ["@/assets/css/main.css"],
  // ssr: false
});
