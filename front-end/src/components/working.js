import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

export class Working extends Component {
  render() {
    console.log(this.props);
    console.log(this.props.authenticated);
    return (
      <div>
        {this.props.authenticated ? (
          <Redirect to="/" authenticated={this.props.authenticated} />
        ) : (
          <Redirect to="/profile" />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.Profile.authenticated
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Working);
