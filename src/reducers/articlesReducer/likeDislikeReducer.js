import ACTION_TYPE from "../../actions/actionTypes";

const initialState = {
  hasLiked: false,
  hasDisLiked: false,
};

export default function likeDislikeReducer(state = initialState, action) {
  switch (action.type) {
  case ACTION_TYPE.LIKE:
    return {
      ...state,
      hasLiked: action.payload
    };
  case ACTION_TYPE.DISLIKE:
    return {
      ...state,
      hasDisLiked: action.payload
    };
  
  default:
    return state;
  }
}
