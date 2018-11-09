import userReducer from "../../reducers/authReducers/socialAuthReducer";
import { SOCIAL_AUTH, LOGIN } from "../../actions/actionTypes";

describe("socialAuthReducer", () => {
  it("has a default state", () => {
    expect(userReducer(undefined, { type: "unexpected" })).toEqual({
      isLoggedIn: false,
      user: {}
    });
  });
  it("updates state on SOCIAL_AUTH action type", () => {
    expect(
      userReducer(undefined, {
        type: SOCIAL_AUTH,
        payload: { token: "nkfknfldfl" }
      })
    ).toEqual({
      isLoggedIn: false,
      user: { token: "nkfknfldfl" }
    });
  });
  it("updates state LOGIN action type", () => {
    expect(
      userReducer(undefined, {
        type: LOGIN,
        payload: true
      })
    ).toEqual({
      isLoggedIn: true,
      user: {}
    });
  });
});
