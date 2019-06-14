import React, { Component } from "react";
// import { connect } from "react-redux";

import { Provider } from "react-redux";
import store from "./store/store";

import MainRoutes from "./router";
import history from "./store/history";

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainRoutes history={history} />
      </Provider>
    );
  }
}

// const mapStateToProps = state => ({});

// const mapDispatchToProps = {};

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);

export default App;
