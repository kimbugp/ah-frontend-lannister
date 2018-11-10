import { PASSWORD_RESET ,NEW_PASSWORD,USER_NOT_FOUND } from "../../actions/actionTypes";

export default function passwordResetReducer(state = {}, action) { 
  switch (action.type) {
  case PASSWORD_RESET:
    return {
      ...state,
      user: action.payload
    };
  case NEW_PASSWORD:
    return {
      ...state,
      user: action.payload
    };
  case USER_NOT_FOUND:
    return {
      ...state,
      user: action.payload
    };
  default:
    return state;
  }
}
