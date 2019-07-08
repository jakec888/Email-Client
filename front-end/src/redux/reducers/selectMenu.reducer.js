import selectMenuActions from '../actions/selectMenu.action';

const initialState = {
  menu: 'Inbox'
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case selectMenuActions.SELECT_MENU:
      return { menu: payload };
    default:
      return state;
  }
};
