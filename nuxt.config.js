export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'SaaS Network Ireland',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Are you an Irish SaaS business providing a self-service sign-up and looking to share or receive knowledge and advice for faster scaling and more success? Join us!' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'google-site-verification', content: "V-1HkHGMQT-5ic9iipscFXuC5dLogjirFBbtIM8sRxI" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: './static/images/favicon.png' },
      { rel: "canonical", href: "https://www.saasnetwork.ie" },
      { rel: "stylesheet", href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/contentful'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
}
