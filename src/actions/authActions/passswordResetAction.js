import { PASSWORD_RESET} from "../actionTypes";
import axios from "axios";
import { BASE_URL } from "../../appUrls/index";

const InvokeReset = data => dispatch => {
  axios
    .post(`${BASE_URL}/api/users/password_reset`, data)
    .then(res => {
      dispatch({
        type: PASSWORD_RESET,
        payload: res
      });
    })
    .catch(error => {
      dispatch({
        type: PASSWORD_RESET,
        payload: error.response
      });
    });
};

export const newPasswordRequest = (data, token) => dispatch => {
  axios
    .put(`${BASE_URL}/api/users/password_reset/change/`, data, {
      headers: { Authorization: `token ${token}` }
    })
    .then(res => {
      const resetPassword = {
        type: PASSWORD_RESET,
        payload: res.status
      };
      dispatch(resetPassword);
    })
    .catch(error => {
      dispatch({
        type: PASSWORD_RESET,
        payload: error.response
      });
    });
};
export default InvokeReset;
