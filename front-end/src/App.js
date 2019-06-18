import React from "react";
import { connect } from "react-redux";

import Mail from "./containers/mail";

import "./App.css";

function App() {
  return (
    <div>
      <Mail />
    </div>
  );
}

// export default App;

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

// import React, { Component } from 'react'
// import { connect } from 'react-redux'

// import Mail from "./containers/mail";

// import "./App.css";

// export default App;

// export class App extends Component {
//   render() {
//     return (
//       <div>
//         <Mail />
//       </div>
//     )
//   }
// }

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)
