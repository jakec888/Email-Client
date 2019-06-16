import React, { Component } from "react";
import { connect } from "react-redux";

export class AllMail extends Component {
  render() {
    return (
      <div>
        <p>This is the AllMail</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllMail);
