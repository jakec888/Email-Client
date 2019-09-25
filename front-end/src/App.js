import React, { Component } from 'react'

import Layout from './containers/Layout'
import MyRouter from './Router'
import Root from './Root'

import './App.css'

export class App extends Component {
  render () {
    return (
      <Root>
        <Layout currentMenu={this.props.currentMenu} changeMenu={this.props.changeMenu}>
          <MyRouter />
        </Layout>
      </Root>
    )
  }
}

export default App
