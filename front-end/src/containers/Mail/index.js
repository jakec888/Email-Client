import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export class Mail extends Component {
  render() {
    return (
      <div>
        <h1>This is the Mail</h1>
        <Link to="/compose">
          <button>Compose</button>
        </Link>
        <Link to="/list">
          <button>List</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mail);
