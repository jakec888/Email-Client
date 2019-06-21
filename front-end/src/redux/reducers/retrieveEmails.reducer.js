import retrieveEmailActions from "../actions/retrieveEmail.actions";

const initialState = {
  inboxEmails: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case retrieveEmailActions.GET_EMAILS:
      return { inboxEmails: payload };
    default:
      return state;
  }
};
