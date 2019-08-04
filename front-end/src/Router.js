import React, { Component } from 'react';

import { connect } from 'react-redux';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Credentials from './components/credentials';
import Inbox from './components/inbox';
import Sent from './components/sent';
import AllMail from './components/all';
import Trash from './components/trash';
import View from './components/view';
import ComposeEmail from './components/compose';

class MyRouter extends Component {
  render() {
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
    );
  }
}

const mapStateToProps = (state) => ({
  validCredentials: state.Profile.validCredentials
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyRouter);
