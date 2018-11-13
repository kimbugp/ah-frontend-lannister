import passwordResetReducer from "../../reducers/authReducers/passwordResetReducer";
import {
  PASSWORD_RESET,
  SIMPLE_ACTION
} from "../../actions/actionTypes";
import expect from "expect";

import simple from "../../reducers/simpleReducer";

describe("reset reducers", () => {
  it("should handle password reset", () => {
    expect(passwordResetReducer({}, resetAction(PASSWORD_RESET))).toEqual({});
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
