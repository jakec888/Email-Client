import { SELECT_EMAIL } from '../actions/selectEmail.action'

const initialState = {
  id: null,
  name: '',
  email: '',
  body_html: '',
  body_plain: '',
  subject: '',
  date: ''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_EMAIL:
      return payload
    default:
      return state
  }
}
