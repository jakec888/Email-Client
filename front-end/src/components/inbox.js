import React, { Component } from "react";
import { connect } from "react-redux";

export class Inbox extends Component {
  render() {
    return (
      <div>
        <p>This is the Inbox</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inbox);
