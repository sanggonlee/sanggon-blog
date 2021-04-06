import React from 'react';
import { Link } from "gatsby"

import Filters from './filters';
import Tags from './tags';

import './sidebar.css';

const Sidebar = ({ toggleFilter }) => (
  <div className="sidebar">
    <Filters toggleFilter={toggleFilter}/>
    <div className="reviews-container">
      <h2>Reviews</h2>
      <div>
        <div className="review-menu">
          <Link to="/book-reviews">
            Book reviews
          </Link>
        </div>
        <div className="review-menu">
          <Link to="/movie-reviews">
            Movie reviews
          </Link>
        </div>
        <div className="review-menu">
          <Link to="/restaurant-reviews">
            Restaurant reviews
          </Link>
        </div>
      </div>
    </div>
    <Tags/>
    <hr/>
  </div>
);

export default Sidebar;