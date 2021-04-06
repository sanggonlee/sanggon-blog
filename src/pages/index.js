import React from 'react'

import Main from './main';
import Router from '../components/router'

export default class IndexPage extends React.Component {
  render() {
    return (
      <Main {...this.props}>
        <Router />
      </Main>
    )
  }
}
