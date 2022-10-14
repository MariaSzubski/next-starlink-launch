const path = require("path")

/* eslint-disable */
module.exports = {
  siteMetadata: {
    author: `Maria Szubski <hello@mariaszubski.com>`,
    description: `Tracking the progress of the Starlink constellation`,
    siteUrl: "https://tourmaline-starburst-6fc080.netlify.app",
    title: `Next Starlink Launch`,
  },
  trailingSlash: "never",
  plugins: [
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        fieldName: "space",
        typeName: "SXAPI",
        url: "https://api.spacex.land/graphql/",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        anonymize: true,
        defer: true,
        head: true,
        pageTransitionDelay: 0,
        respectDNT: true,
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        env: {
          "branch-deploy": {
            host: null,
            policy: [{ disallow: ["/"], userAgent: "*" }],
            sitemap: null,
          },
          "deploy-preview": {
            host: null,
            policy: [{ disallow: ["/"], userAgent: "*" }],
            sitemap: null,
          },
          production: {
            policy: [{ userAgent: "*" }],
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        background_color: `#1D2226`,
        display: `minimal-ui`,
        icon: `src/assets/favicon.png`,
        name: `Next Starlink Launch`,
        short_name: `Next Starlink Launch`,
        start_url: `/`,
        theme_color: `#161528`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        additionalData: `@use 'mixins' as *;`,
        cssLoaderOptions: {
          modules: {
            localIdentName: "[local]-[hash:base64:3]",
          },
        },
        sassOptions: {
          includePaths: [path.join(__dirname, "src/styles")],
        },
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Bai Jamjuree",
              variants: ["300", "400", "600"],
            },
            {
              family: "Exo",
              variants: ["600", "700", "800", "800i"],
            },
          ],
        },
        useMinify: true,
        usePreconnect: true,
        usePreload: true,
      },
    },
  ],
}
/* eslint-enable */
