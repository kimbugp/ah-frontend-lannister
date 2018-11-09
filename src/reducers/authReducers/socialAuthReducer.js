import { SOCIAL_AUTH, LOGIN} from "../../actions/actionTypes";

const initialState = {
  user:{},
  isLoggedIn:false
};
  
export default function userReducer(state = initialState, action) {
  switch (action.type) {
  case SOCIAL_AUTH:
    return {
      ...state,
      user: action.payload
    };
  case LOGIN:
    return {
      ...state,
      isLoggedIn:action.payload
    };
  default:
    return state;
  }
}
