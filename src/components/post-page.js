import React from 'react';
import { DiscussionEmbed } from 'disqus-react';

import { renderHtml } from '../utils/dom';

import './post-page.css';

const PostPage = ({ pathContext }) => {
  const { id, title, date, html, tags } = pathContext;
  return (
    <div className="post-page">
      <div className="title">
        { title }
      </div>
      <div className="date">
        { date }
      </div>
      <div className="content" dangerouslySetInnerHTML={ renderHtml(html) }></div>
      {
        (tags || []).map((tag, index) =>
          <span className="tag" key={index}>
            #{tag}
          </span>
        )
      }
      <div className="comments">
        <DiscussionEmbed
          shortname="Sang-gon"
          config={{
            identifier: id,
            title
          }}/>
      </div>
    </div>
  )
};

export default PostPage;