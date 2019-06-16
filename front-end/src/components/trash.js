import React, { Component } from "react";
import { connect } from "react-redux";

export class Trash extends Component {
  render() {
    return (
      <div>
        <p>This is the Trash</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trash);
