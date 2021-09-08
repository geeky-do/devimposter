module.exports = {
  siteMetadata: {
    siteUrl: "https://devimposter.tech",
    title: "Dev Imposter",
    description: "This is Robin"    
  },
  plugins: [
    // {
    //   resolve: `gatsby-plugin-posthog-analytics`,
    //   options: {
    //     // Specify the API key for your Posthog Project (required)
    //     apiKey: "phc_zWD1LIARPT1eaRy0M5cU4ssQ19ZYgvwhXkdUK6PdZSr",
    //     // Specify the app host if self-hosting (optional, default: https://app.posthog.com)
    //     appHost: "https://app.posthog.com",
    //     // Puts tracking script in the head instead of the body (optional, default: true)
    //     head: true,
    //     // Enable posthog analytics tracking during development (optional, default: false)
    //     isEnabledDevMode: true
    //   },
    // },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/src/blogs/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "templates",
        path: "./src/templates/",
      },
      __key: "templates",
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-transformer-remark`,
  ],
};
