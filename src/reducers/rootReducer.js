import { combineReducers } from "redux";
import simpleReducer from "./simpleReducer";
import userReducer from "../reducers/authReducers/socialAuthReducer";

export default combineReducers({
  simpleReducer,
  userReducer
});
