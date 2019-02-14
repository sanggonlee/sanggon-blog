import React from 'react';

import Filters from './filters';
import Tags from './tags';

import './sidebar.css';

const Sidebar = ({ toggleFilter }) => (
  <div className="sidebar">
    <Filters toggleFilter={toggleFilter}/>
    <Tags/>
    <hr/>
  </div>
);

export default Sidebar;