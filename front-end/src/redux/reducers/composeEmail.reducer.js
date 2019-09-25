// import composeEmailActions from '../actions/composeEmail.action';

import {
  COMPOSE_TO, COMPOSE_SUBJECT, COMPOSE_MESSAGE, TRASH_MESSAGE, SEND_MESSAGE, ERROR_SEND_MESSAGE
} from '../actions/composeEmail.action'

const initialState = {
  to: '',
  subject: '',
  message: ''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case COMPOSE_TO:
      return { ...state, to: payload.to }
    case COMPOSE_SUBJECT:
      return { ...state, subject: payload.subject }
    case COMPOSE_MESSAGE:
      return { ...state, message: payload.message }
    case TRASH_MESSAGE:
      return {
        ...state,
        to: payload.to,
        subject: payload.subject,
        message: payload.message
      }
    case SEND_MESSAGE:
      return {
        to: payload.message,
        subject: payload.subject,
        message: payload.message
      }
    case ERROR_SEND_MESSAGE:
      return { ...state }
    default:
      return state
  }
}
