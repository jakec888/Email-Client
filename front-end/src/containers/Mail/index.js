import React, { Component } from 'react';

import Layout from '../Layout';
import MyRouter from '../../Router';

export default class Mail extends Component {
  render() {
    return (
      <Layout currentMenu={this.props.currentMenu} changeMenu={this.props.changeMenu}>
        <MyRouter />
      </Layout>
    );
  }
}
