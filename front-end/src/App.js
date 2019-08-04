import React, { Component } from 'react';
import { connect } from 'react-redux';

import Mail from './containers/Mail';

import selectMenuActions from './redux/actions/selectMenu.action';

import './App.css';

export class App extends Component {
  render() {
    return (
      <div>
        <Mail />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentMenu: state.SelectedMenu.menu,
  validCredentials: state.Profile.validCredentials
});

const mapDispatchToProps = {
  changeMenu: selectMenuActions.selectMenu
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
