module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: "%s - Nuxt.js",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Meta description" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    modules: [
      "@nuxtjs/pwa",
      "bootstrap-vue/nuxt",
      // Or if you have custom bootstrap CSS...
      ["bootstrap-vue/nuxt", { css: false }],

      // Simple usage
      "@nuxtjs/bootstrap-vue",

      // With options
      ["@nuxtjs/bootstrap-vue", { css: false }],
      "@nuxtjs/font-awesome",
      // Simple usage
      "nuxt-netlify-cms",

      // With options
      ["nuxt-netlify-cms", { adminPath: "secure" }]
    ],
    // You can optionally use global options instead of inline form
    netlifyCms: {
      adminPath: "secure"
    }
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    }
  }
}
