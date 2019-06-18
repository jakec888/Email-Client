const selectEmailActions = {
  SELECT_EMAIL: "SELECT_EMAIL",
  selectEmail: emailId => {
    return (dispatch, getState) => {
      const selectedEmail = getState().exampleData.sampleData.filter(
        email => email.id === emailId
      )[0];
      dispatch({
        type: selectEmailActions.SELECT_EMAIL,
        payload: selectedEmail
      });
    };
  }
};

export default selectEmailActions;
