import axios from "axios";

const retrieveEmailActions = {
  GET_EMAILS: "GET_EMAILS",
  retrieveEmails: folder => {
    console.log(folder);
    return dispatch => {
      return axios
        .get("http://127.0.0.1:8000/get-emails", {
          params: {
            RequestedFolder: "Inbox"
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
  }
};

export default retrieveEmailActions;
