const selectMenuActions = {
  SELECT_MENU: 'SELECT_MENU',
  selectMenu: (menuItem) => {
    return (dispatch) => {
      dispatch({
        type: selectMenuActions.SELECT_MENU,
        payload: menuItem
      });
    };
  }
};

export default selectMenuActions;
