import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { connect } from "react-redux";

import { sampleAction } from "./store/actions/sampleAction";

class App extends Component {
  sampleAction = event => {
    this.props.sampleAction();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={this.sampleAction}>Test redux action</button>
          <pre>{JSON.stringify(this.props)}</pre>
        </header>
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
