import articlesReducer from "../../reducers/articlesReducer/articleReducer.js";
import ACTION_TYPES from "../../actions/actionTypes.js";

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
});
