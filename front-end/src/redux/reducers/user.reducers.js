import { UPDATE_NAME, UPDATE_EMAIL, UPDATE_PASSWORD, UPDATE_IMAP_SERVER, UPDATE_IMAP_PORT, UPDATE_SMTP_SERVER, UPDATE_SMTP_PORT, AUTHENTICATE, UNAUTHENTICATE } from '../actions/user.actions'

const initialState = {
  validCredentials: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_NAME:
      return { ...state, name: payload.name }
    case UPDATE_EMAIL:
      return { ...state, email: payload.email }
    case UPDATE_PASSWORD:
      return { ...state, password: payload.password }
    case UPDATE_IMAP_SERVER:
      return { ...state, imap_server: payload.imap_server }
    case UPDATE_IMAP_PORT:
      return { ...state, imap_port: payload.imap_port }
    case UPDATE_SMTP_SERVER:
      return { ...state, smtp_server: payload.smtp_server }
    case UPDATE_SMTP_PORT:
      return { ...state, smtp_port: payload.smtp_port }
    case AUTHENTICATE:
      return { ...state, validCredentials: payload.validCredentials }
    case UNAUTHENTICATE:
      return { ...state, validCredentials: payload.validCredentials }
    default:
      return state
  }
}
