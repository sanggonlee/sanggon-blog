import React from 'react';
import { Link } from 'gatsby';

import { renderHtml } from '../utils/dom';

import './post.css';

const kebabCase = (text) => {
  return text.toLowerCase().replace(' ', '-');
}

export default ({ node }) => {
  const { title, date, tags } = node.frontmatter;
  return (
    <>
      <div className="post-container">
        <h2>{ title }</h2>
        <h3>{ date }</h3>
        <div className="content" dangerouslySetInnerHTML={renderHtml(node.html)}></div>
        <div>...</div>
        <div className="tags">
          Tags:
          {
            (tags || []).map((tag, index) =>
              <span className="tag" key={index}>
                #{tag}
              </span>
            )
          }
        </div>
        <Link className="see-full" to={kebabCase(title)}>
          See in full page
        </Link>
      </div>
    </>
  )
};
