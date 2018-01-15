require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Dave Martin`,
    description: `Highly innovative digital creative and driven idealist`,
    twitter: `@justan0therdave`,
    siteUrl: `https://www.justan0therdave.online`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-smartypants`,
          `gatsby-remark-prismjs`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-lodash`,
      options: {
        disabledFeatures: [`shorthands`, `cloning`, `currying`, `caching`, `collections`, `guards`, `metadata`, `deburring`, `unicode`, `memoizing`, `coercions`, `flattening`, `paths`, `placeholders`]
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || '',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dave Martin`,
        short_name: `Dave Martin`,
        start_url: `/`,
        background_color: `#1d1b3f`,
        theme_color: `#FFCC00`,
        display: `minimal-ui`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-36478003-10"
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    }
  ]
}
