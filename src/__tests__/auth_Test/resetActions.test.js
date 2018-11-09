import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import InvokeReset, {
  newPasswordRequest
} from "../../actions/authActions.js/passswordResetAction";
import { simpleAction } from "../../actions/simpleAction";
import { SIMPLE_ACTION } from "../../actions/actionTypes";

import axios from "axios";
import { BASE_URL } from "../../appUrls/Urls";

const data = {
  user: {
    email: "admin@admin.com",
    url: "https://ah-backend-lannister-staging.herokuapp.com/reset_confirm/"
  }
};
const responseData = {
  user: {
    message: "a reset link has been sent to your email admin@admin.com"
  }
};
const REQUEST_RESET_URL =`${BASE_URL}/api/users/password_reset`;
const CHANGE_PASSWORD_URL =`${BASE_URL}/api/users/password_reset/change/`;
let store;
let mock;
describe("password reset action", () => {
  beforeEach(() => {
    configureMock();
  });

  it("should be sent an email", async () => {
    testAction("post", REQUEST_RESET_URL, 200);
  });
  it("error action is dispatched", async () => {
    testAction("post", REQUEST_RESET_URL, 404);
  });
});

describe("password update actions ", () => {
  beforeEach(() => {
    configureMock();
  });

  it("password is change request is succesful", async () => {
    testAction("put", CHANGE_PASSWORD_URL, 200);
  });
  it("error action is dispatched", async () => {
    testAction("put", CHANGE_PASSWORD_URL, 404);
  });
  it("test simple action", async () => {
    const payload = {
      result: "jhklljlkjol"
    };

    simpleAction({ type: SIMPLE_ACTION, payload })(store.dispatch);
    expect(store.getActions()).toEqual([
      {
        payload: "result_of_simple_action",
        type: "SIMPLE_ACTION"
      }
    ]);
  });
});
function testAction(method, url, status) {
  if (method === "post") {
    mock.onPost(url).reply(status, responseData);
    InvokeReset(data)(store.dispatch);
  } else {
    mock.onPut(url).reply(status, responseData);
    newPasswordRequest(data)(store.dispatch);
  }
  expect(store.getActions()).toEqual([]);
}
function configureMock() {
  mock = new MockAdapter(axios);
  const mockStore = configureMockStore();
  store = mockStore({});
}
