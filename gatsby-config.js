module.exports = {
  siteMetadata: {
    title: `Next Starlink Launch`,
    description: `Tracking the progress of the Starlink constellation`,
    author: `Maria Szubski <hello@mariaszubski.com>`,
  },
  trailingSlash: "never",
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-offline",
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-catch-links`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        commonmark: true,
        plugins: [],
      },
    },
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
        typeName: "SXAPI",
        fieldName: "space",
        url: "https://api.spacex.land/graphql/",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        head: true,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
        defer: true,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        env: {
          production: {
            policy: [{ userAgent: "*" }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Next Starlink Launch`,
        short_name: `Next Starlink Launch`,
        start_url: `/`,
        background_color: `#1D2226`,
        theme_color: `#161528`,
        display: `minimal-ui`,
        icon: `src/assets/favicon.png`,
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
        usePreload: true,
        usePreconnect: true,
      },
    },
  ],
}
