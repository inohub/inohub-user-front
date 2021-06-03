// import i18n from "./config/i18n";

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'InoHub',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Global CSS
  */
  css: [],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~/plugins/axios',
    {src: "~/plugins/defaultPlugin", mode: "client"},
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // [
    //   'nuxt-i18n',
    //   {
    //     locales: [
    //       {
    //         code: 'ru',
    //         name: 'Russian'
    //       },
    //       {
    //         code: 'kz',
    //         name: 'Kazakh'
    //       },
    //       {
    //         code: 'en',
    //         name: 'English'
    //       }
    //     ],
    //     defaultLocale: 'ru',
    //     vueI18n: i18n,
    //     strategy: 'prefix_except_default',
    //   }
    // ]
    '@nuxtjs/google-analytics'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',

  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  build: {},
  router: {
    linkActiveClass: 'active_link',
    linkExactActiveClass: 'exact_active_link',
  },
  googleAnalytics: {
    id: 'G-KBR0DKYHL2'
  },
}
