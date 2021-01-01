import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import FilterContext from '../context/FilterContext'

import './tags.css'

const Tags = ({ children }) => {
  return (
    <FilterContext.Consumer>
      {({ state, filterByTag }) => {
        return (
          <StaticQuery
            query={graphql`
              query {
                allMarkdownRemark {
                  group(field: frontmatter___tags) {
                    fieldValue
                    totalCount
                  }
                }
              }
            `}
            render={({ allMarkdownRemark: { group } }) => (
              <div className="tags-container">
                <h2>Tags</h2>
                <div className="tags">
                  {group.map(({ fieldValue, totalCount }, index) => (
                    <div
                      className={`tag ${
                        state.tag === fieldValue ? 'selected' : ''
                      }`}
                      key={index}
                      onClick={() => filterByTag(fieldValue)}
                    >
                      <span># {fieldValue}</span> <span>({totalCount})</span>
                    </div>
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

export default Tags
