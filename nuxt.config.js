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
        href:
          'https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css',
        rel: 'stylesheet'
      },
      {
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        rel: 'stylesheet'
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
  css: ['@/assets/toast.styl', '@/assets/fonts.styl', '@/assets/main.styl'],
  extractCSS: true,
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.(css|vue|styl)$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
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
    '@nuxtjs/dotenv',
    '@nuxtjs/toast'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  toast: {
    fullWidth: false,
    position: 'top-center',
    duration: 2000,
    action: {
      text: 'close',
      onClick: (e, toastObject) => {
        toastObject.goAway(0)
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    // Add exception
    transpile: ['vee-validate/dist/rules'],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.forEach((rule) => {
        if (String(rule.test) === String(/\.(png|jpe?g|gif|svg|webp)$/)) {
          // add a second loader when loading images
          rule.use.push({
            loader: 'image-webpack-loader',
            options: {
              svgo: {
                plugins: [
                  // use these settings for internet explorer for proper scalable SVGs
                  // https://css-tricks.com/scale-svg/
                  { removeViewBox: false },
                  { removeDimensions: true }
                ]
              }
            }
          })
        }
      })
    }
  }
}
