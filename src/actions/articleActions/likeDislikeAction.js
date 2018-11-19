import axios from "axios";
import ACTION_TYPE from "../actionTypes";
import { BASE_URL } from "../../appUrls/";
import { headers } from "../../utils/myHeaders";

let user;
const dispatchLike = payload => ({
  type: ACTION_TYPE.LIKE,
  payload
});
const dispatchDislike = payload => ({
  type: ACTION_TYPE.DISLIKE,
  payload
});
const storeToLocalStorage = (like, dislike) => {
  localStorage.setItem("hasLiked", like);
  localStorage.setItem("hasDisLiked", dislike);
};
export const dispatchData = (data, dispatch) => {
  if (data === true) {
    dispatch(dispatchLike(true));
    dispatch(dispatchDislike(false));
    storeToLocalStorage(true,false);
  } else if (data === false) {
    dispatch(dispatchDislike(true));
    dispatch(dispatchLike(false));
    storeToLocalStorage(false,true);
  }
};

export const updateLikeDislikeArticle = (data, slug) => dispatch => {
  axios
    .put(BASE_URL + `/api/articles/${slug}/dislike/`, data, headers())
    .then(res => {
      dispatchData(res.data.like.likes, dispatch);
    })
    .catch(error => {
      if (
        error.response.data.likes.detail ===
        "You do not have permission to perform this action."
      ) {
        axios
          .post(BASE_URL + `/api/articles/${slug}/like/`, data, headers())
          .then(res => {
            dispatchData(res.data.like.likes, dispatch);
          });
      }
    });
};
export const checkStatus = slug => {
  axios.get(BASE_URL + "/api/user/", headers()).then(res => {
    user = res.data.user.username;
  });
  axios.get(BASE_URL + `/api/articles/${slug}/like/`, headers()).then(res => {
    let results = res.data.likes.results;

    results.forEach(function(entry) {
      if (
        entry.liked_by === user &&
        entry.article === slug &&
        entry.likes === true
      ) {
        storeToLocalStorage(true, false);
      } else if (
        entry.liked_by === user &&
        entry.article === slug &&
        entry.likes === false
      ) {
        storeToLocalStorage(false, true);
      }
    });
  });
};
