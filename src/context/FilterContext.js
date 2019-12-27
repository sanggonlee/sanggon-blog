import React from 'react'

const FilterContext = React.createContext({
  state: {},
  toggleFilter: () => {},
  filterByTag: () => {},
})

export default FilterContext
