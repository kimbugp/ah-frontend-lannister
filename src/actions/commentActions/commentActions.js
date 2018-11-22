import { COMMENTS } from "../actionTypes";
import axios from "axios";
import { BASE_URL } from "../../appUrls/index";
import { toast } from "react-toastify";

const getComments = slug => dispatch => {
  axios
    .get(`${BASE_URL}/api/articles/${slug}/comments/`, headers())
    .then(res => {
      dispatch({
        type: COMMENTS.GET_COMMENTS,
        payload: res.data.comments
      });
    })
    .catch(error => {
      dispatch({
        type: "ERROR",
        payload: error.response
      });
    });
};

export const createComment = (slug, data) => dispatch => {
  axios
    .post(`${BASE_URL}/api/articles/${slug}/comments/`, data, headers())
    .then(res => {
      dispatch({
        type: COMMENTS.POST_COMMENT,
        payload: res.data
      });
    });
};
export default getComments;

function headers() {
  const token = localStorage.getItem("token");
  return {
    headers: { Authorization: `token ${token}` }
  };
}

export const deleteComment = (slug, id) => dispatch => {
  axios
    .delete(`${BASE_URL}/api/articles/${slug}/comments/${id}`, headers())
    .then(res => {
      dispatch({
        type: COMMENTS.DELETE_COMMENT,
        payload: res.data.comments
      });
    });
};

export const createThread = (slug, data) => dispatch => {
  axios
    .post(
      `${BASE_URL}/api/articles/${slug}/comments/${data.id}/thread`,
      data.body,
      headers()
    )
    .then(res => {
      dispatch({
        type: COMMENTS.CREATE_THREAD,
        payload: res.data.thread
      });
    });
};

export const likeComment = (slug, id) => dispatch => {
  axios
    .post(`${BASE_URL}/api/articles/${slug}/comments/${id}/like`,{}, headers())
    .then(res => {
      dispatch(dispatchLike(res.data.payload));
    }).catch(error =>{
      toast.error(error.response.data.comments.message, {
        autoClose: 3500,
        hideProgressBar: true
      });
    });
   
};
export const unlikeComment = (slug, id) => dispatch => {
  axios
    .delete(`${BASE_URL}/api/articles/${slug}/comments/${id}/unlike`, headers())
    .then(res => {
      dispatch(dispatchLike(res.data.payload));
    }).catch(error =>{
      toast.error(error.response.data.comments.message, {
        autoClose: 3500,
        hideProgressBar: true
      });});};
const dispatchLike = payload => ({
  type: COMMENTS.LIKE_COMMENT,
  payload
});
