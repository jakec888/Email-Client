import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "green"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#3f51b5"
      },
      "&:hover fieldset": {
        borderColor: "#fff"
      },
      "&.Mui-focused fieldset": {
        borderColor: "green"
      }
    }
  }
})(TextField);

export class ComposeEmail extends Component {
  render() {
    return (
      <Paper
        style={{
          width: "85%",
          minHeight: "300px",
          height: "auto",
          margin: "auto",
          padding: "15px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <CssTextField
          label="To"
          placeholder="example@gmail.com"
          variant="outlined"
          id="custom-css-outlined-input"
          style={{ margin: "8px 0 8px 0" }}
          fullWidth
        />
        <CssTextField
          label="Subject"
          placeholder="Hi There!"
          variant="outlined"
          id="custom-css-outlined-input"
          style={{ margin: "8px 0 8px 0" }}
          fullWidth
        />
        <CssTextField
          label="Message"
          placeholder="Hello "
          variant="outlined"
          id="custom-css-outlined-input"
          style={{ margin: "8px 0 8px 0" }}
          rows="13"
          multiline
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "flex-start"
          }}
        >
          <Button
            variant="outlined"
            color="primary"
            style={{
              margin: "0px 5px",
              color: "#3f51b5",
              borderColor: "#3f51b5"
            }}
          >
            Send
            <SendOutlinedIcon style={{ margin: "0px 3px" }} />
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            style={{ margin: "0px 5px", color: "red", borderColor: "red" }}
          >
            Delete
            <DeleteOutlinedIcon style={{ margin: "0px 3px" }} />
          </Button>
        </div>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComposeEmail);
