import React, { Component } from "react";
import { connect } from "react-redux";

import Mail from "./containers/mail";

import selectMenuActions from "./redux/actions/selectMenu.action";

import "./App.css";

export class App extends Component {
  render() {
    return (
      <div>
        <Mail currentMenu={this.props.currentMenu} changeMenu={this.props.changeMenu} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
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
