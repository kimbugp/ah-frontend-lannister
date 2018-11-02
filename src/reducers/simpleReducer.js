import { SIMPLE_ACTION } from "../actions/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
  case SIMPLE_ACTION:
    return {
      result: action.payload
    };
  default:
    return state;
  }
};
