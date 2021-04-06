/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
const React = require('react')
const Main = require('./src/pages/main').default;

exports.wrapPageElement = ({ element, props }) => {
  if (props.path.includes('reviews')) {
    return (
      <Main {...props}>
        {element}
      </Main>
    )
  }

  return element
}
