// import selectMenuActions from '../actions/selectMenu.action'
import { SELECT_MENU } from '../actions/selectMenu.action'

const initialState = {
  menu: 'Inbox'
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_MENU:
      return { menu: payload }
    default:
      return state
  }
}
