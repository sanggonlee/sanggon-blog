/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

const kebabCase = (text) => {
  return text.toLowerCase().replace(' ', '-');
};

// You can delete this file if you're not using it
exports.createPages = (({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('src/components/post-page.js');
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
      throw result.errors;
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const { title, date, categories, tags } = node.frontmatter;
      const path = kebabCase(node.frontmatter.title);
      createPage({
        path,
        component: blogPostTemplate,
        context: {
          pathSlug: path,
          id: node.id,
          title,
          date,
          categories,
          tags,
          html: node.html
        }
      });
    })
  });
});
