export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  server: {
    host: '0.0.0.0', // default: localhost,
    port: '3468'
  },
  head: {
    title: 'Kajax',
    htmlAttrs: {
      lang: 'pl'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/fonts/montserrat.css',
    '~/assets/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  serverMiddleware: [
    '~/headers.js'
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/markdownit',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-lazy-load'
  ],
  robots: {
    UserAgent: '*',
    Sitemap: 'https://kajakinakaszubach.pl/sitemap.xml'
  },
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.BACKEND_URL || "https://kajaxadmin.haba.usermd.net/graphql" ,
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  loading: {
    color: 'blue',
    height: '5px'
  },
  sitemap: {
    hostname: process.env.BASE_URL,
    routes:[
      '/road/WDA-1',
      '/road/ZBRZYCA-2',
      '/road/Słupia-3',

    ]
  },
}
