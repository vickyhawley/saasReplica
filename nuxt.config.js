export default {
  publicRuntimeConfig: {


  },
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
  
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/contentful'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  buildModules: ['nuxt-graphql-request'],

  graphql: {
    /**
     * An Object of your GraphQL clients
     */
    clients: {
      default: {
        /**
         * The client endpoint url
         */
        endpoint: 'https://graphql.contentful.com/content/v1/spaces/gxppcva787ir',
         /* Per-client options overrides
         * See: https://github.com/prisma-labs/graphql-request#passing-more-options-to-fetch
         */
        options: {
          headers: {
            authorization: 'Bearer d-_lvsXnr9ZF7ivw5a7bXjsQGM6dqEezIOeIrRVCH5A',
            'Content-Type': 'application/json',
          }
        },
      },
      secondClient: {
        // ...client config
      },
      // ...your other clients
    },

    /**
     * Options
     * See: https://github.com/prisma-labs/graphql-request#passing-more-options-to-fetch
     */
    options: {
      method: 'get', // Default to `POST`
    },

    /**
     * Optional
     * default: true (this includes cross-fetch/polyfill before creating the graphql client)
     */
    useFetchPolyfill: true,

    /**
     * Optional
     * default: false (this includes graphql-tag for node_modules folder)
     */
    includeNodeModules: true,
  },
}
