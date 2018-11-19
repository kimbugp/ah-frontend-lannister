import ACTION_TYPE from "../../actions/actionTypes";
import likeDislikeReducer from "../../reducers/articlesReducer/likeDislikeReducer";

describe("likeDislikeReducer", () => {
  it("has a default state", () => {
    expect(likeDislikeReducer(undefined, { type: "unexpected" })).toEqual({
      hasLiked: false,
      hasDisLiked: false,
    });
  });
  it("updates state on LIKE action type", () => {
    expect(
      likeDislikeReducer(undefined, {
        type: ACTION_TYPE.LIKE,
        payload: true
      })
    ).toEqual({
      hasLiked: true,
      hasDisLiked: false,
    });
  });
  it("updates state DISLIKE action type", () => {
    expect(
      likeDislikeReducer(undefined, {
        type: ACTION_TYPE.DISLIKE,
        payload: true
      })
    ).toEqual({
      hasLiked: false,
      hasDisLiked: true,
    });
  });
});
