// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      title: "Website Title",
      titleTemplate: "%s | Sub Title 1 | Sub Title 2",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "keywords", content: process.env.NUXT_PUBLIC_META_KEYWORDS },
        { property: "og:type", content: "website" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
        {
          key: "canonical",
          rel: "canonical",
          href: process.env.NUXT_PUBLIC_SITE_URL,
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Inter:100,300,400,500,700,900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://api.fontshare.com/v2/css?f[]=satoshi@1,900,700,500,301,701,300,501,401,901,400,2&display=swap",
        },
      ],
      style: [],
      script: [],
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },

  runtimeConfig: {
    apiUrl: process.env.NUXT_PUBLIC_API_URL,
    apiSecret: process.env.NUXT_PUBLIC_API_SECRET,
    authSecret: process.env.NUXT_PUBLIC_AUTH_SECRET,

    google: {
      clientId: "client-id",
      clientSecret: "client-secret",
    },

    public: {
      appName: process.env.NUXT_PUBLIC_APP_NAME,
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
      cdnUrl: process.env.NUXT_PUBLIC_CDN_URL,
      apiUrl: process.env.NUXT_PUBLIC_API_URL,
      googleMapKey: process.env.NUXT_PUBLIC_GOOGLE_MAP_KEY,
      stripeKey: process.env.NUXT_PUBLIC_STRIPE_KEY,
      workflow: process.env.NUXT_PUBLIC_WORKFLOW,
    },
  },

  nitro: {
    // preset: process.env.NITRO_PRESET || "node-cluster",
    storage: {
      cache: {
        driver: "redis",
        url: process.env.NUXT_PUBLIC_REDIS_URL,
      },
      redis: {
        driver: "redis",
        url: process.env.NUXT_PUBLIC_REDIS_URL,
      },
    },
    devStorage: {
      cache: {
        driver: "fs",
        base: "./data/cache",
      },
      redis: {
        driver: "fs",
        base: "./data/db",
      },
    },
    routeRules: {
      "/server/**": {
        proxy: `${process.env.NUXT_PUBLIC_API_URL}/**`,
      },
    },
    devProxy: {
      "/dev": {
        target: `${process.env.NUXT_PUBLIC_API_URL}`,
        changeOrigin: true,
      },
    },
  },

  // devServer: {
  //   https: {
  //     key: "./localhost-key.pem",
  //     cert: "./localhost.pem",
  //   },
  // },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
    "@nuxtjs/google-fonts",
  ],

  css: ["@/assets/css/main.css", "@/assets/css/tailwind.css"],

  googleFonts: {
    display: "swap",
    families: {
      Roboto: true,
      Neuton: true,
    },
  },

  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },

  colorMode: {
    classSuffix: "",
    // preference: "system",
    // fallback: "light",
    // classPrefix: "",
    // classSuffix: '-mode',
    // hid: "nuxt-color-mode-script",
    // globalName: "__NUXT_COLOR_MODE__",
    // componentName: "ColorScheme",
    // storageKey: "nuxt-color-mode",
  },
});
