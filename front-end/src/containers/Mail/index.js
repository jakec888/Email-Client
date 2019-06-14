import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";

import MailBucket from "../../components/mail/mailBucket";
import MailList from "../../components/mail/mailList";
import MailView from "../../components/mail/mailView";

export default class Mail extends Component {
  render() {
    return (
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <MailBucket />
        </Grid>
        <Grid item xs={2}>
          <MailList />
        </Grid>
        <Grid item xs={8}>
          <MailView />
        </Grid>
      </Grid>
    );
  }
}
