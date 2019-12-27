import React from 'react'

import Layout from '../components/layout'
import Router from '../components/router'
import SEO from '../components/seo'
import Sidebar from '../components/sidebar'
import FilterContext from '../context/FilterContext'

import './index.css'

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      filter: {
        English: true,
        한글: true,
      },
      tag: null,
    }

    this.toggleFilter = (field, value) => {
      this.setState(state => {
        const newFilter = {
          ...state.filter,
          [field]: value,
        }
        return {
          ...state,
          filter: newFilter,
        }
      })
    }

    this.filterByTag = tag => {
      this.setState(state => ({
        ...state,
        tag: state.tag === tag ? null : tag,
      }))
    }
  }

  render() {
    return (
      <FilterContext.Provider
        value={{
          state: this.state,
          toggleFilter: this.toggleFilter,
          filterByTag: this.filterByTag,
        }}
      >
        <Layout>
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          <div className="main-container">
            <div className="router">
              <Router />
            </div>
            <Sidebar />
          </div>
        </Layout>
      </FilterContext.Provider>
    )
  }
}
