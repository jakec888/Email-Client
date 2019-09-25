export const SELECT_MENU = 'SELECT_MENU'

export const selectMenu = (menuItem) => (dispatch) => {
  dispatch({
    type: SELECT_MENU,
    payload: menuItem
  })
}

// const selectMenuActions = {
//   SELECT_MENU: 'SELECT_MENU',
//   selectMenu: (menuItem) => {
//     return (dispatch) => {
//       dispatch({
//         type: selectMenuActions.SELECT_MENU,
//         payload: menuItem
//       });
//     };
//   }
// };

// export default selectMenuActions;
