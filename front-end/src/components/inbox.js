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

export class Inbox extends Component {
  email = ({ id, subject, name, body }) => {
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
        to={`/inbox/${id}`}
        style={{ textDecoration: "none", color: "#000" }}
        onClick={() => this.onSelectEmail(id)}
      >
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
              <span style={avatarStyle} className={"Hello"}>
                {signature.splitLet}
              </span>
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={subject}
            secondary={
              <Fragment>
                <Typography component="span" variant="body2" color="textPrimary">
                  {name}
                </Typography>
                {" — " + body.substring(0, 135) + " ..."}
              </Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
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
  inbox: state.exampleData.sampleData
});

const mapDispatchToProps = {
  selectEmail: selectEmailActions.selectEmail
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inbox);
