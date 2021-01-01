import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Checkbox from '@material-ui/core/Checkbox'

import FilterContext from '../context/FilterContext'

import './filters.css'

const Filters = ({ children, toggleFilter }) => {
  return (
    <FilterContext.Consumer>
      {({ state, toggleFilter }) => (
        <StaticQuery
          query={graphql`
            query {
              allMarkdownRemark {
                group(field: frontmatter___categories) {
                  fieldValue
                  totalCount
                }
              }
            }
          `}
          render={({ allMarkdownRemark: { group } }) => (
            <div className="filters-container">
              <h2>Languages</h2>
              <div>
                {group.map(({ fieldValue }, index) => (
                  <div key={index}>
                    <Checkbox
                      checked={state.filter[fieldValue]}
                      onChange={evt =>
                        toggleFilter(fieldValue, evt.target.checked)
                      }
                      value={fieldValue}
                      color="primary"
                    />
                    <span style={{ marginRight: 'auto' }}>{fieldValue}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        />
      )}
    </FilterContext.Consumer>
  )
}

export default Filters
