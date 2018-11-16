import ACTION_TYPE from "../../actions/actionTypes";
import rateReducer from "../../reducers/articlesReducer/rateReducer";

describe("rateAuthReducer", () => {
  it("has a default state", () => {
    expect(rateReducer(undefined, { type: "unexpected" })).toEqual({
      hasRated: false,
      error:""
    });
  });
  it("updates state on RATE_ARTICLE action type", () => {
    expect(
      rateReducer(undefined, {
        type: ACTION_TYPE.RATE_ARTICLE,
        payload: true
      })
    ).toEqual({
      hasRated: true,
      error:""
    });
  });
  it("updates state on ERRO action type", () => {
    expect(
      rateReducer(undefined, {
        type: ACTION_TYPE.ERROR,
        payload: "article"
      })
    ).toEqual({
      hasRated: false,
      error:"article"
    });
  });
});
