import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import selectEmailActions from "../redux/actions/selectEmail.action";

import moment from "moment";

export class AllMail extends Component {
  email = ({ id, subject, name, body, date }) => {
    const emailDate = new Date(date);

    // moment().format('ll');   // Jun 17, 2019
    const calendar = moment(emailDate).format("ll");

    // moment(z).format('LT');  // 8:38 PM
    const time = moment(emailDate).format("LT");

    // moment().startOf('hour').fromNow(); // 36 minutes ago
    const when = moment(emailDate)
      .startOf("hour")
      .fromNow();

    const avatarStyle = {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#3f51b5",
      fontSize: "16px",
      fontWeight: 300,
      color: "#fff",
      letterSpacing: "1px"
    };
    const signature = {
      splitLet: name
        .match(/\b(\w)/g)
        .join("")
        .split("", 2)
    };
    return (
      <Link
        key={id}
        to={`/all/${id}`}
        style={{ textDecoration: "none", color: "#000" }}
        onClick={() => this.onSelectEmail(id)}
      >
        <Divider variant="middle" />
        <ListItem
          style={{
            display: "flex",
            fleDirection: "row",
            height: "100%",
            justifyContent: "center",
            aligItems: "center"
          }}
        >
          <ListItemAvatar>
            <Avatar alt="Remy Sharp">
              <span style={avatarStyle}>{signature.splitLet}</span>
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={subject}
            secondary={
              <Fragment>
                <Typography component="span" variant="body2" color="textPrimary">
                  {name}
                </Typography>
                <Typography component="span" variant="body2" color="textPrimary">
                  {" — " + body.substring(0, 100) + "..."}
                </Typography>
              </Fragment>
            }
          />
          <ListItemText
            secondary={`${calendar} at ${time} (${when})`}
            style={{ textAlign: "right" }}
          />
        </ListItem>
        <Divider variant="middle" />
      </Link>
    );
  };

  onSelectEmail = emailId => {
    this.props.selectEmail(emailId);
  };

  render() {
    return (
      <Paper style={{ width: "85%", margin: "auto" }}>
        <List>
          {this.props.inbox
            ? this.props.inbox.map(email => this.email(email))
            : "No Email"}
        </List>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  inbox: state.ExampleData.sampleData
});

const mapDispatchToProps = {
  selectEmail: selectEmailActions.selectEmail
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllMail);
