import React from 'react';

const FilterContext = React.createContext({
  filter: {},
  toggleFilter: () => {}
});

export default FilterContext;
