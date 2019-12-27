import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import Post from './post'
import FilterContext from '../context/FilterContext'
import { doesContain } from '../utils/general'

const Posts = ({ children }) => {
  return (
    <FilterContext.Consumer>
      {({ state }) => {
        return (
          <StaticQuery
            query={graphql`
              query {
                allMarkdownRemark(
                  limit: 10
                  sort: { fields: [frontmatter___date], order: DESC }
                ) {
                  totalCount
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
            `}
            render={({ allMarkdownRemark: { edges, totalCount } }) => (
              <div>
                <h4>{totalCount} Posts</h4>
                <div>
                  {edges
                    .filter(edge =>
                      doesContain(
                        state.filter,
                        edge.node.frontmatter.categories
                      )
                    )
                    .filter(
                      edge =>
                        state.tag === null ||
                        edge.node.frontmatter.tags.includes(state.tag)
                    )
                    .map(({ node }, index) => (
                      <Post key={index} node={node} />
                    ))}
                </div>
              </div>
            )}
          />
        )
      }}
    </FilterContext.Consumer>
  )
}

export default Posts
