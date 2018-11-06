import passwordResetReducer from "../../reducers/authReducers/passwordResetReducer";
import {
  NEW_PASSWORD,
  PASSWORD_RESET,
  USER_NOT_FOUND,
  SIMPLE_ACTION
} from "../../actions/actionTypes";
import expect from "expect";

import simple from "../../reducers/simpleReducer";

describe("reset reducers", () => {
  it("should return the initial state", () => {
    expect(passwordResetReducer({}, {})).toEqual({});
  });
  it("should handle new password", () => {
    expect(passwordResetReducer({}, resetAction(NEW_PASSWORD))).toEqual({});
  });
  it("should handle password reset", () => {
    expect(passwordResetReducer({}, resetAction(PASSWORD_RESET))).toEqual({});
  });
  it("should handle user not found", () => {
    expect(passwordResetReducer({}, resetAction(USER_NOT_FOUND))).toEqual({});
  });
});

describe("simple reducer ", () => {
  it("should return its state", () => {
    expect(simple({}, resetAction(SIMPLE_ACTION))).toEqual({});
  });
});

function resetAction(action) {
  return {
    type: action
  };
}
