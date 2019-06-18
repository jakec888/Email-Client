const selectMenuActions = {
  SELECT_MENU: "SELECT_MENU",
  selectMenu: menuItem => {
    return (dispatch, getState) => {
      console.log(menuItem);

      dispatch({
        type: selectMenuActions.SELECT_MENU,
        payload: menuItem
      });
    };
  }
};

export default selectMenuActions;
