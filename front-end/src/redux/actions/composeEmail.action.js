const composeEmailActions = {
  COMPOSE_TO: "COMPOSE_TO",
  COMPOSE_SUBJECT: "COMPOSE_SUBJECT",
  COMPOSE_MESSAGE: "COMPOSE_MESSAGE",
  TRASH_MESSAGE: "TRASH_MESSAGE",
  SEND_MESSAGE: "SEND_MESSAGE",
  updateTo: toAddress => {
    return dispatch => {
      dispatch({
        type: composeEmailActions.COMPOSE_TO,
        payload: { to: toAddress }
      });
    };
  },
  updateSubject: subject => {
    return (dispatch, getState) => {
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
      console.log(`SEND EMAIL`);
      const email = getState().ComposeEmail;
      console.log(email);
      dispatch({
        type: composeEmailActions.SEND_MESSAGE,
        payload: {
          to: "",
          subject: "",
          message: ""
        }
      });
    };
  }
};

export default composeEmailActions;
