import userActions from '../actions/user.actions';

const initialState = {
  validCredentials: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case userActions.UPDATE_NAME:
      return { ...state, name: payload.name };
    case userActions.UPDATE_EMAIL:
      return { ...state, email: payload.email };
    case userActions.UPDATE_PASSWORD:
      return { ...state, password: payload.password };
    case userActions.UPDATE_IMAP_SERVER:
      return { ...state, imap_server: payload.imap_server };
    case userActions.UPDATE_IMAP_PORT:
      return { ...state, imap_port: payload.imap_port };
    case userActions.UPDATE_SMTP_SERVER:
      return { ...state, smtp_server: payload.smtp_server };
    case userActions.UPDATE_SMTP_PORT:
      return { ...state, smtp_port: payload.smtp_port };
    case userActions.AUTHENTICATE:
      return { ...state, validCredentials: payload.validCredentials };
    case userActions.UNAUTHENTICATE:
      return { ...state, validCredentials: payload.validCredentials };
    default:
      return state;
  }
};
