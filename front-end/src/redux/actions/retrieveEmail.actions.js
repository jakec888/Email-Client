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
      console.log("Getting Emails");
      const profile = getState().Profile;
      console.log(folder);
      console.log(profile);
      return axios
        .get("http://127.0.0.1:8000/get-emails", {
          params: {
            RequestedFolder: folder,
            email: profile.email,
            password: profile.password,
            imap_server: profile.imap_server,
            imap_port: profile.imap_port
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
          email: Profile.email,
          password: Profile.password,
          smtp_server: Profile.smtp_server,
          smtp_port: Profile.smtp_port,
          fromAddress: Profile.email,
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
