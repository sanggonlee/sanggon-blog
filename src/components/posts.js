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
                  limit: 100
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
            render={({ allMarkdownRemark: { edges, totalCount } }) => {
              const posts = edges
                .filter(edge =>
                  doesContain(state.filter, edge.node.frontmatter.categories)
                )
                .filter(
                  edge =>
                    state.tag === null ||
                    edge.node.frontmatter.tags.includes(state.tag)
                )
              return (
                <div>
                  <h4>
                    {posts.length} posts ({totalCount} total)
                  </h4>
                  <div>
                    {posts.map(({ node }, index) => (
                      <Post key={index} node={node} />
                    ))}
                  </div>
                </div>
              )
            }}
          />
        )
      }}
    </FilterContext.Consumer>
  )
}

export default Posts
