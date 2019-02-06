import React from "react";
import { graphql, StaticQuery } from "gatsby";

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
        <div style={styles.tagsContainer}>
          <h2>Tags</h2>
          <div>
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

const styles = {
  tagsContainer: {
    padding: '20px 10px'
  }
};

export default Tags;