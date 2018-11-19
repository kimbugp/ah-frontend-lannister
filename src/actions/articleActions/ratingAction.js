import axios from "axios";
import ACTION_TYPE from "../actionTypes";
import { BASE_URL } from "../../appUrls";
import { headers } from "../../utils/myHeaders";

export const dispatchError = payload=>({
  type:ACTION_TYPE.ERROR,
  payload
});
export const dispatchHasRated = payload=>({
  type:ACTION_TYPE.RATE_ARTICLE,
  payload
});
export const rateArticle = (data, slug) => async dispatch => {
  await axios
    .post(BASE_URL + `/api/articles/${slug}/rating/`, data, headers())
    .then(res => {
      if (res.data.rates.msg) {
        dispatch(dispatchError(res.data.rates.msg ));
      }
      if (res.data.rate.article === slug) {
        dispatch(dispatchHasRated(true));
        localStorage.setItem("hasRated", true);
      } else {
        localStorage.setItem("hasRated", false);
      }
    })
    .catch(error => {
      return error.response;
    });
};
