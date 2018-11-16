import {COMMENTS} from "../../actions/actionTypes";

const initialState = {
  count: 0,
  next: null,
  previous: null,
  results: [],
  thread:[],
  comment:[]
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
  case COMMENTS.GET_COMMENTS:
    return {
      ...state,
      results: action.payload.results,
      count:action.payload.count,
      next:action.payload.next,

    };
  case COMMENTS.POST_COMMENT:
    return {
      ...state,
      results: state.results.concat(action.payload.comment)
    };
  case COMMENTS.CREATE_THREAD:
    return {
      ...state,
      thread: state.thread.concat(action.payload)
    };
  case COMMENTS.DELETE_COMMENT:
    return {
      ...state,
      comment: state.comment.concat(action.payload)
    };
  default:
    return state;
  }
};

export default commentReducer;
