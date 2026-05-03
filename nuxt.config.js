export default {
  ssr: true,
  
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'moveto.studio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Experience Express and Restorative Pilates with Move to Pilates in Kalamunda.' },
      { name: 'format-detection', content: 'telephone=no' },
      
      // Open Graph
      { hid: 'og:title', property: 'og:title', content: 'Express and Restorative Pilates - Kalamunda - Move to Pilates' },
      { hid: 'og:description', property: 'og:description', content: 'Experience Express and Restorative Pilates with Move to Pilates in Kalamunda.' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://movetopilates.com.au' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'movetopilates.com.au' },
      
      // Twitter
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Express and Restorative Pilates - Kalamunda - Move to Pilates' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Experience Express and Restorative Pilates with Move to Pilates in Kalamunda.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/global.scss' 
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['@nuxtjs/google-gtag', { 
      id: 'G-L8VVNMN7LB'
    }],
    '@nuxtjs/netlify-files',
    '@nuxtjs/gtm'
  ],

  gtm: {
    id: 'GTM-56TSGCWF'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  
  
}
