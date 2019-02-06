import React from 'react';

import Layout from '../components/layout';
import Router from '../components/router';
import SEO from '../components/seo';
import Sidebar from '../components/sidebar';
import FilterContext from '../context/FilterContext';

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: {
        English: true,
        한글: true
      }
    };

    this.toggleFilter = (field, value) => {
      this.setState(state => {
        const newFilter = {
          ...state.filter,
          [field]: value,
        };
        return {
          ...state,
          filter: newFilter,
        };
      });
    }
  }

  render() {
    return (
      <FilterContext.Provider value={this.state}>
        <Layout>
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          <div style={styles.mainContainer}>
            <div style={styles.router}>
              <Router />
            </div>
            <Sidebar toggleFilter={this.toggleFilter} />
          </div>
        </Layout>
      </FilterContext.Provider>
    );
  }
}

const styles = {
  mainContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  router: {
    flex: 1,
  }
};
