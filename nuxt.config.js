module.exports = {
  head: {
    title: 'PopCorns',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Rent movies online' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: ['@/assets/scss/bootstrap.scss'],

  loading: { color: '#fff' },
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/font-awesome',
    ['@nuxtjs/bootstrap-vue', { css: false }]
  ],
  apollo: {
    networkInterfaces: {
      default: '~/apollo/network-interfaces/default.js'
    }
  },
  build: {
    vendor: [],
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
