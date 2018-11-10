import ACTION_TYPE from "../../actions/actionTypes";

const initialState = {
  count: 0,
  next: null,
  previous: null,
  article: {},
  results: []
};

const articlesReducer = (state = initialState, action) => {
  const Articles = state.results;
  switch (action.type) {
  case ACTION_TYPE.NEW_ARTICLE:
    return {
      ...state,
      article: action.payload
    };
  case ACTION_TYPE.PUBLISH_ARTICLE:
    return {
      ...state,
      results: Articles
    };
  default:
    return state;
  }
};

export default articlesReducer;
