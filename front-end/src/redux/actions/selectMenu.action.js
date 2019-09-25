export const SELECT_MENU = 'SELECT_MENU'

export const selectMenu = (menuItem) => (dispatch) => {
  dispatch({
    type: SELECT_MENU,
    payload: menuItem
  })
}
