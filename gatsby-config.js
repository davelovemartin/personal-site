module.exports = {
  siteMetadata: {
    title: `Dave Martin`,
    description: `Highly innovative digital creative and driven idealist`,
    googleSiteVerification: ``,
    fbAppId: ``,
    twitter: `@justan0therdave`,
    url: `justan0therdave.github.io`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-smartypants`
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
        spaceId: `lxr91lh2a5zw`,
        accessToken: `bced456d310144321e4c525c39a5213de96ee3900d6d516d8a6281e01c4703b8`
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Playfair+Display:400i,700i|Raleway:300`
        ]
      }
    }
  ]
}
