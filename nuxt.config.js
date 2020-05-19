export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Jakmall | Belanja online lebih murah',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/jakmall.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap'
      },
      {
        href:
          'https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css',
        rel: 'stylesheet'
      },
      {
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        rel: 'stylesheet'
      }
    ],
    script: [
      {
        src:
          'https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/main.styl'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/mixins/currency', '~/plugins/vee-validate'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    // Add exception
    transpile: ['vee-validate/dist/rules'],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
