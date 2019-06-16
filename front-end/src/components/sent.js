import React, { Component } from "react";
import { connect } from "react-redux";

export class Sent extends Component {
  render() {
    return (
      <div>
        <p>This is the Sent</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sent);
