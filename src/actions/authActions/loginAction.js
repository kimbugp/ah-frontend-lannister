import { EMAIL_LOGIN } from "../actionTypes";
import axios from "axios";
import {LOGIN_URL } from "../../appUrls/index";

const LoginAction = data => dispatch => {
  axios
    .post(LOGIN_URL, data)
    .then(res => {
      dispatch({
        type: EMAIL_LOGIN,
        payload: res.data,
      });
    })
    .catch(error => {
      dispatch({
        type: EMAIL_LOGIN,
        payload: error.response
      });
    });
};
export default LoginAction;
