import React, { Component } from 'react'

import Layout from './containers/Layout'
import MyRouter from './Router'

import { Provider } from 'react-redux'
import store from './redux/store'

import './App.css'

export class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Layout currentMenu={this.props.currentMenu} changeMenu={this.props.changeMenu}>
          <MyRouter />
        </Layout>
      </Provider>
    )
  }
}

export default App
