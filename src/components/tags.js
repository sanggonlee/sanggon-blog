import React from "react";
import { graphql, StaticQuery } from "gatsby";

import './tags.css';

const Tags = ({ children }) => {
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
      render={({
        allMarkdownRemark: {
          group
        }
      }) => (
        <div className="tags-container">
          <h2>Tags</h2>
          <div className="tags">
            {
              group.map(({ fieldValue, totalCount }, index) => 
                <div key={index}>
                  <span>#{ fieldValue }</span> <span>({ totalCount })</span>
                </div>
              )
            }
          </div>
        </div>
      )}
    />
  )
}

export default Tags;