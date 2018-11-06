import { combineReducers } from "redux";
import simpleReducer from "./simpleReducer";
import userReducer from "../reducers/authReducers/socialAuthReducer";
import passwordResetReducer from "./authReducers/passwordResetReducer";

export default combineReducers({
  simpleReducer,
  userReducer,
  passwordResetReducer
});
