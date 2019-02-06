import React from 'react';

import Filters from './filters';
import Tags from './tags';

const Sidebar = ({ toggleFilter }) => (
  <div style={styles.sidebar}>
    <Filters toggleFilter={toggleFilter}/>
    <Tags/>
  </div>
);

const styles = {
  sidebar: {
    flex: '0 1 120px',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '20px'
  }
};

export default Sidebar;