import ACTION_TYPE from "../../actions/actionTypes";

const initialState = {
  hasRated: false, 
  error:""
};

export default function rateReducer(state = initialState, action) {
  switch (action.type) {
  case ACTION_TYPE.RATE_ARTICLE:
    return {
      ...state,
      hasRated: action.payload
    };
  case ACTION_TYPE.ERROR:
    return {
      ...state,
      error: action.payload
    };
  default:
    return state;
  }
}
