import ACTION_TYPE from "../../actions/actionTypes";

const initialState = {
  count: 0,
  next: null,
  previous: null,
  article: {},
  articles: [],
  results: [],
  onearticle: { read_time: "00:00:00" },
  published: [],
  drafted: [],
  deleted:[],
  publish:{}
};

const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
  case ACTION_TYPE.NEW_ARTICLE:
    return {
      ...state,
      article: action.payload
    };
  case ACTION_TYPE.PUBLISH_ARTICLE:
    return {
      ...state,
      publish: action.payload
    };
  case ACTION_TYPE.VIEW_ARTICLES:
    return {
      ...state,
      articles: state.articles.concat(action.payload.results),
      next: action.payload.next,
      previous:action.payload.previous
    };
  case ACTION_TYPE.VIEW_ONE_ARTICLE:
    return {
      ...state,
      onearticle: action.payload
    };
  case ACTION_TYPE.PUBLISHED_ARTICLES:
    return {
      ...state,
      published: action.payload.results
    };
  case ACTION_TYPE.DRAFTED_ARTICLES:
    return {
      ...state,
      drafted: action.payload.results
    };
  case ACTION_TYPE.DELETE_ONE_ARTICLE:
    return {
      ...state,
      deleted: state.deleted.concat(action.payload)
    };
  default:
    return state;
  }
};

export default articlesReducer;
