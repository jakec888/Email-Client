import axios from "axios";

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
      console.log(profile);
      console.log(email);
      axios
        .post("http://127.0.0.1:8000/send-email", {
          email: profile.EMAIL,
          password: profile.PASSWORD,
          smtp_server: profile.SMTP_SERVER,
          smtp_port: profile.SMTP_PORT,
          fromAddress: profile.EMAIL,
          name: profile.NAME,
          toAddress: email.toAddress,
          subject: email.subject,
          bodyPLAIN: email.bodyPLAIN,
          bodyHTML: email.bodyHTML
        })
        .then(result => {
          console.log(result);
          dispatch({
            type: composeEmailActions.SEND_EMAIL,
            payload: result.data
          });
        })
        .catch(err => {
          console.log("Error");
          console.log(err);
          dispatch({
            type: composeEmailActions.SEND_EMAIL,
            payload: err
          });
        });
    };
  }
  // sendMessage: () => {
  //   return (dispatch, getState) => {
  //     console.log(`SEND EMAIL`);
  //     const email = getState().ComposeEmail;
  //     console.log(email);

  //     axios
  //       .post("http://127.0.0.1:8000/send-email", {
  //         toAddress: email.to
  //         // fromAddress: email.,
  //         // name: email.,
  //         // subject: email.subject,
  //         // bodyPLAIN: email.,
  //         // bodyHTML: email.,
  //       })
  //       .then(result => {
  //         dispatch({
  //           type: composeEmailActions.SEND_MESSAGE,
  //           payload: {
  //             to: "",
  //             subject: "",
  //             message: ""
  //           }
  //         });
  //       })
  //       .catch(err => {
  //         console.log("Error");
  //         console.log(err);
  //         alert(err);
  //         dispatch({
  //           type: composeEmailActions.SEND_MESSAGE
  //         });
  //       });
  //   };
  // }
};

export default composeEmailActions;
