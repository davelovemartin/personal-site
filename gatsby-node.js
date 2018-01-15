const path = require(`path`)
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      query PostBuildQuery {
        allContentfulPost {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors)
      }
      result.data.allContentfulPost.edges.map(({ node }) => {
        console.log(node.slug)
        createPage({
          path: '/blog/' + node.slug,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            slug: node.slug,
            id: node.id + 'articleTextNode >>> MarkdownRemark'
          }
        })
      })
      resolve()
    })
  })
}
