import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

import userActions from "../redux/actions/user.actions";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#3f51b5"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#3f51b5"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#95a2e6"
      },
      "&:hover fieldset": {
        borderColor: "#fff"
      },
      "&.Mui-focused fieldset": {
        borderColor: "#95a2e6"
      }
    }
  }
})(TextField);

export class User extends Component {
  onSubmitUserData = event => {
    event.preventDefault();
    this.props.authenticateUser();
    this.props.history.push("/inbox");
  };

  onChangeName = event => {
    this.props.updateName(event.target.value);
  };

  onChangeEmail = event => {
    this.props.updateEmail(event.target.value);
  };

  onChangePassword = event => {
    this.props.updatePassword(event.target.value);
  };

  onChangeIMAPServer = event => {
    this.props.updateIMAPServer(event.target.value);
  };

  onChangeIMAPPort = event => {
    this.props.updateIMAPPort(event.target.value);
  };

  onChangeSMTPServer = event => {
    this.props.updateSMTPServer(event.target.value);
  };

  onChangeSMTPPort = event => {
    this.props.updateSMTPPort(event.target.value);
  };

  render() {
    return (
      <Paper
        style={{
          width: "85%",
          minHeight: "300px",
          height: "auto",
          margin: "auto",
          padding: "15px"
        }}
      >
        <form
          onSubmit={this.onSubmitUserData}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          <CssTextField
            label="Name"
            placeholder="John Doe"
            variant="outlined"
            style={{ margin: "8px 0 8px 0" }}
            onChange={this.onChangeName}
            value={this.props.currentName}
            name="name"
            fullWidth
          />
          <CssTextField
            label="Email"
            type="email"
            placeholder="john_doe@gmail.com"
            variant="outlined"
            style={{ margin: "8px 0 8px 0" }}
            onChange={this.onChangeEmail}
            value={this.props.currentEmail}
            name="email"
            fullWidth
          />
          <CssTextField
            label="Password"
            type="password"
            placeholder="Password Here!"
            variant="outlined"
            style={{ margin: "8px 0 8px 0" }}
            onChange={this.onChangePassword}
            value={this.props.currentPassword}
            name="password"
            fullWidth
          />
          <CssTextField
            label="IMAP Server"
            placeholder="imap.gmail.com"
            variant="outlined"
            style={{ margin: "8px 0 8px 0" }}
            onChange={this.onChangeIMAPServer}
            value={this.props.currentIMAPServer}
            name="imap_server"
            fullWidth
          />
          <CssTextField
            label="IMAP Port"
            placeholder="993"
            variant="outlined"
            style={{ margin: "8px 0 8px 0" }}
            onChange={this.onChangeIMAPPort}
            value={this.props.currentIMAPPort}
            name="imap_port"
            fullWidth
          />
          <CssTextField
            label="SMTP Server"
            placeholder="smtp.gmail.com"
            variant="outlined"
            style={{ margin: "8px 0 8px 0" }}
            onChange={this.onChangeSMTPServer}
            value={this.props.currentSMTPServer}
            name="smtp_server"
            fullWidth
          />
          <CssTextField
            label="SMTP Port"
            placeholder="465"
            variant="outlined"
            style={{ margin: "8px 0 8px 0" }}
            onChange={this.onChangeSMTPPort}
            value={this.props.currentSMTPPort}
            name="smtp_port"
            fullWidth
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              justifyContent: "flex-start"
            }}
          >
            <Button
              type="submit"
              value="Submit"
              variant="outlined"
              color="primary"
              style={{
                margin: "0px 5px",
                color: "#3f51b5",
                borderColor: "#3f51b5"
              }}
            >
              Submit
              <SendOutlinedIcon style={{ margin: "0px 3px" }} />
            </Button>
          </div>
        </form>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  name: state.Profile.name,
  email: state.Profile.email,
  password: state.Profile.password,
  imap_server: state.Profile.imap_server,
  imap_port: state.Profile.imap_port,
  smtp_server: state.Profile.smtp_server,
  smtp_port: state.Profile.smtp_port,
  validCredentials: state.Profile.validCredentials
});

const mapDispatchToProps = {
  updateName: userActions.updateName,
  updateEmail: userActions.updateEmail,
  updatePassword: userActions.updatePassword,
  updateIMAPServer: userActions.updateIMAPServer,
  updateIMAPPort: userActions.updateIMAPPort,
  updateSMTPServer: userActions.updateSMTPServer,
  updateSMTPPort: userActions.updateSMTPPort,
  authenticateUser: userActions.authenticateUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
