import axios from "axios";

const retrieveEmailActions = {
  GET_EMAILS: "GET_EMAILS",
  SEND_EMAIL: "SEND_EMAIL",
  retrieveEmails: folder => {
    console.log(folder);
    return (dispatch, getState) => {
      const ProfileConfig = getState().ProfileConfig;
      console.log(ProfileConfig);
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
          console.log(result.data);
          dispatch({
            type: retrieveEmailActions.GET_EMAILS,
            payload: result.data.emails
          });
        })
        .catch(err => {
          console.log("Error");
          console.log(err);
          dispatch({
            type: retrieveEmailActions.GET_EMAILS,
            payload: "Error"
          });
        });
    };
  },
  sendEmailTest: email => {
    console.log(email);
    return (dispatch, getState) => {
      axios
        .post("http://127.0.0.1:8000/smtp", {
          toAddress: email.toAddress,
          fromAddress: email.fromAddress,
          name: email.name,
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
