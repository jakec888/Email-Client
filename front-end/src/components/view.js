import React, { Component } from "react";
import { connect } from "react-redux";

export class View extends Component {
  render() {
    return (
      <div>
        <p>Email View</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedEmail: state.selectedEmail
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
