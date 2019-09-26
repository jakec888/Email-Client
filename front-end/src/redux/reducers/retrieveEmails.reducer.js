import { GET_EMAILS, SEND_EMAIL, LOADING_EMAIL, GET_EMAILS_SUCCESS } from '../actions/retrieveEmail.actions'

const initialState = {
  emails: [],
  loading: true
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_EMAILS:
      return { ...state, emails: payload }
    case GET_EMAILS_SUCCESS:
      return { ...state, emails: payload.emails, loading: payload.loading }
    case SEND_EMAIL:
      return { ...state, sent: payload }
    case LOADING_EMAIL:
      return { ...state, loading: payload }
    default:
      return state
  }
}
