import React from 'react';

import { renderHtml } from '../utils/dom';

const Reviews = ({ pathContext }) => {
  const { html } = pathContext;
  return (
    <div className="content" dangerouslySetInnerHTML={ renderHtml(html) }></div>
  )
}

export default Reviews;