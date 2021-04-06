/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

const kebabCase = text => {
  return text.toLowerCase().replace(' ', '-')
}

exports.createPages = (({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('src/components/post-page.js');
  const reviewsTemplate = path.resolve('src/components/reviews.js');
  return graphql(
    `
      {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                title
                date
                categories
                tags
              }
              html
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const { title, date, categories, tags } = node.frontmatter
      const path = kebabCase(node.frontmatter.title)
      createPage({
        path,
        component: path.includes('reviews') ? reviewsTemplate : blogPostTemplate,
        context: {
          pathSlug: path,
          id: node.id,
          title,
          date,
          categories,
          tags,
          html: node.html,
        },
      })
    })
  })
});
