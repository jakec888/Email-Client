import axios from "axios";
// import { convertToRaw } from "draft-js";
// import draftToHtml from "draftjs-to-html";

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
      const profile = getState().ProfileConfig;
      const email = getState().ComposeEmail;

      axios
        .post("http://127.0.0.1:8000/send-email", {
          email: profile.EMAIL,
          password: profile.PASSWORD,
          smtp_server: profile.SMTP_SERVER,
          smtp_port: profile.SMTP_PORT,
          fromAddress: profile.EMAIL,
          name: profile.NAME,
          toAddress: email.to,
          subject: email.subject,
          bodyPLAIN: email.message
          // bodyHTML: draftToHtml(convertToRaw(email.message.getCurrentContent()))
        })
        .then(result => {
          console.log(result);
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
          console.log("Error");
          console.log(err);
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
