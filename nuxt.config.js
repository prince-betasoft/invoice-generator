import colors from "vuetify/es5/util/colors";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  telemetry: false,
  target: "server",
  ssr: true,
  // serverMiddleware: ["~/server-middleware/logger"],
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - Invoice Builder",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        hid: "description",
        content: "Invoice Builder",
      },
    ],
    link: [{ rel: "icon", href: "/invoice-logo.svg" }],
    script: [
      {
        type: "text/javascript",
        src:
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyDtglyu-Rpd79oIKATLCn3XqA-2F49Kcj0&libraries=places",
      },
    ],
  },
  router: {
    middleware: [],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/admin-style.css", "@/assets/css/style.css"],

  plugins: [
    { src: "~/plugins/firebase.js", mode: "client" },
    { src: "~/plugins/fireauth.js", mode: "client" },
    { src: "~/plugins/dashboard-plugins.js", mode: "client" },
    { src: "~/plugins/vuelidate.js", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
    "@nuxtjs/dotenv",
    "@nuxtjs/axios",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "vue-sweetalert2/nuxt", "@nuxtjs/pwa"],
  dotenv: {
    path: "./env",
    systemvars: true,
    filename: (() => {
      let env = "";
      switch (process.env.NUXT_ENV_APP) {
        case "prod":
          env = ".env.prod";
          break;
        case "dev":
          env = ".env.dev";
          break;
        default:
          env = ".env.dev";
      }
      return env;
    })(),
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: false,
  },
};
