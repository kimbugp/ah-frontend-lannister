import articlesReducer from "../../reducers/articlesReducer/articleReducer.js";
import ACTION_TYPES from "../../actions/actionTypes.js";
import { Reducer } from "redux-testkit";

const initialState = {
  count: 0,
  next: null,
  previous: null,
  article: {},
  results: []
};

describe("create article reducers", () => {
  it("should return the initial state", () => {
    expect(articlesReducer({}, {})).toEqual({});
  });

  it("should handle GET_POST_START", () => {
    const startAction = {
      type: ACTION_TYPES.NEW_ARTICLE
    };
    expect(articlesReducer({}, startAction)).toEqual({});
  });

  it("should handle PUBLISH_START", () => {
    const startAction = {
      type: ACTION_TYPES.PUBLISH_ARTICLE
    };
    expect(articlesReducer({}, startAction)).toEqual({});
  });

  it("should not affect state", () => {
    Reducer(articlesReducer)
      .expect({ type: "NOT_EXISTING" })
      .toReturnState(initialState);
  });
});
