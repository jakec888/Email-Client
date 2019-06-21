import axios from "axios";

const retrieveEmailActions = {
  GET_EMAILS: "GET_EMAILS",
  SEND_EMAIL: "SEND_EMAIL",
  retrieveEmails: folder => {
    return (dispatch, getState) => {
      const ProfileConfig = getState().ProfileConfig;
      return axios
        .get("http://127.0.0.1:8000/get-emails", {
          params: {
            RequestedFolder: folder,
            email: ProfileConfig.EMAIL,
            password: ProfileConfig.PASSWORD,
            imap_server: ProfileConfig.IMAP_SERVER,
            imap_port: ProfileConfig.IMAP_PORT
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
      const ProfileConfig = getState().ProfileConfig;
      axios
        .post("http://127.0.0.1:8000/smtp", {
          email: ProfileConfig.EMAIL,
          password: ProfileConfig.PASSWORD,
          smtp_server: ProfileConfig.SMTP_SERVER,
          smtp_port: ProfileConfig.SMTP_PORT,
          fromAddress: ProfileConfig.EMAIL,
          name: ProfileConfig.NAME,
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
