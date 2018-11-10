import { PASSWORD_RESET } from "../../actions/actionTypes";

export default function passwordResetReducer(state = {}, action) {
  switch (action.type) {
  case PASSWORD_RESET:
    return {
      ...state,
      user: action.payload
    };
  default:
    return state;
  }
}
