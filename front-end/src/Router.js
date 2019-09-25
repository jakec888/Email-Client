import React, { Component } from 'react'

import { connect } from 'react-redux'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Credentials from './components/Credentials'
import Inbox from './components/Inbox'
import Sent from './components/Sent'
import AllMail from './components/All'
import Trash from './components/Trash'
import View from './components/View'
import ComposeEmail from './components/Compose'

class MyRouter extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            component={Credentials}
            validCredentials={this.props.validCredentials}
          />
          <Route exact path="/inbox" component={Inbox} />
          <Route path="/inbox/:id" component={View} />
          <Route exact path="/sent" component={Sent} />
          <Route path="/sent/:id" component={View} />
          <Route exact path="/all-mail" component={AllMail} />
          <Route path="/all-mail/:id" component={View} />
          <Route exact path="/trash" component={Trash} />
          <Route path="/trash/:id" component={View} />
          <Route exact path="/compose" component={ComposeEmail} />
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = (state) => ({
  validCredentials: state.Profile.validCredentials
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyRouter)
