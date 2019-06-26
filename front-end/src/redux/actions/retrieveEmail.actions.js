import axios from "axios";

const retrieveEmailActions = {
  GET_EMAILS: "GET_EMAILS",
  SEND_EMAIL: "SEND_EMAIL",
  LOADING_EMAIL: "LOADING_EMAIL",
  loadingEmail: status => {
    return dispatch => {
      dispatch({
        type: retrieveEmailActions.LOADING_EMAIL,
        payload: status
      });
    };
  },
  retrieveEmails: folder => {
    return (dispatch, getState) => {
      const Profile = getState().Profile;
      return axios
        .get("http://127.0.0.1:8000/get-emails", {
          params: {
            RequestedFolder: folder,
            email: Profile.EMAIL,
            password: Profile.PASSWORD,
            imap_server: Profile.IMAP_SERVER,
            imap_port: Profile.IMAP_PORT
          }
        })
        .then(result => {
          dispatch({
            type: retrieveEmailActions.GET_EMAILS,
            payload: result.data.emails
          });
        })
        .catch(err => {
          dispatch({
            type: retrieveEmailActions.GET_EMAILS,
            payload: `Error: ${err}`
          });
        });
    };
  },
  sendEmailTest: email => {
    console.log(email);
    return (dispatch, getState) => {
      const Profile = getState().Profile;
      axios
        .post("http://127.0.0.1:8000/smtp", {
          email: Profile.EMAIL,
          password: Profile.PASSWORD,
          smtp_server: Profile.SMTP_SERVER,
          smtp_port: Profile.SMTP_PORT,
          fromAddress: Profile.EMAIL,
          name: Profile.NAME,
          toAddress: email.toAddress,
          subject: email.subject,
          bodyPLAIN: email.bodyPLAIN,
          bodyHTML: email.bodyHTML
        })
        .then(result => {
          console.log(result);
          dispatch({
            type: retrieveEmailActions.SEND_EMAIL,
            payload: result.data
          });
        })
        .catch(err => {
          console.log("Error");
          console.log(err);
          dispatch({
            type: retrieveEmailActions.SEND_EMAIL,
            payload: err
          });
        });
    };
  }
};

export default retrieveEmailActions;
