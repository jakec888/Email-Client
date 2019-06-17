import { SELECT_EMAIL } from "../actions/selectEmail";

const initialState = {
  id: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_EMAIL:
      return { id: payload };
    default:
      return state;
  }
};
