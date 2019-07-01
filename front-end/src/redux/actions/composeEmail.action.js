// import axios from "axios";
import API from "../../api/email";

const composeEmailActions = {
  COMPOSE_TO: "COMPOSE_TO",
  COMPOSE_SUBJECT: "COMPOSE_SUBJECT",
  COMPOSE_MESSAGE: "COMPOSE_MESSAGE",
  TRASH_MESSAGE: "TRASH_MESSAGE",
  SEND_MESSAGE: "SEND_MESSAGE",
  ERROR_SEND_MESSAGE: "ERROR_SEND_MESSAGE",
  updateTo: toAddress => {
    return dispatch => {
      dispatch({
        type: composeEmailActions.COMPOSE_TO,
        payload: { to: toAddress }
      });
    };
  },
  updateSubject: subject => {
    return dispatch => {
      dispatch({
        type: composeEmailActions.COMPOSE_SUBJECT,
        payload: { subject }
      });
    };
  },
  updateMessage: message => {
    return dispatch => {
      dispatch({
        type: composeEmailActions.COMPOSE_MESSAGE,
        payload: { message }
      });
    };
  },
  trashMessage: () => {
    return dispatch => {
      dispatch({
        type: composeEmailActions.TRASH_MESSAGE,
        payload: {
          to: "",
          subject: "",
          message: ""
        }
      });
    };
  },
  sendMessage: () => {
    return (dispatch, getState) => {
      const profile = getState().Profile;
      const email = getState().ComposeEmail;
      API.post("/send-email", {
        email: profile.email,
        password: profile.password,
        smtp_server: profile.smtp_server,
        smtp_port: profile.smtp_port,
        fromAddress: profile.email,
        name: profile.name,
        toAddress: email.to,
        subject: email.subject,
        bodyPLAIN: email.message
      })
        .then(result => {
          dispatch({
            type: composeEmailActions.SEND_MESSAGE,
            payload: {
              to: "",
              subject: "",
              message: "",
              error: ""
            }
          });
          alert("Email Successfully Sent");
        })
        .catch(err => {
          dispatch({
            type: composeEmailActions.SEND_MESSAGE,
            payload: {
              to: email.to,
              subject: email.subject,
              message: email.message
            }
          });
          alert("Email Was Not Send");
        });
    };
  }
};

export default composeEmailActions;
