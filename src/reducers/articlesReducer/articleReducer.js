import ACTION_TYPE from "../../actions/actionTypes";

const initialState = {
  count: 0,
  next: null,
  previous: null,
  article: {},
  articles:[],
  results: [],
  onearticle:{read_time:"00:00:00"}
};

const articlesReducer = (state = initialState, action) => {
  const Articles = state.results;
  switch (action.type) {
  case ACTION_TYPE.NEW_ARTICLE:
    return {
      ...state,
      article: action.payload,
    };
  case ACTION_TYPE.PUBLISH_ARTICLE:
    return {
      ...state,
      results: Articles
    };
  case ACTION_TYPE.VIEW_ARTICLES:
    return {
      ...state,
      articles: action.payload
    };
  case ACTION_TYPE.VIEW_ONE_ARTICLE:
    return {
      ...state,
      onearticle:action.payload
    };
  default:
    return state;
  }
};

export default articlesReducer;
