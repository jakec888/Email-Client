import React, { Component } from "react";
import "./App.css";

import { connect } from "react-redux";

import Mail from "./containers/Mail";

import { sampleAction } from "./store/actions/sampleAction";

class App extends Component {
  sampleAction = event => {
    this.props.sampleAction();
  };

  render() {
    return (
      <div className="Main">
        <Mail />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  sampleAction: () => dispatch(sampleAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
