import { facebookAuth, googleAuth } from "../../actions/authActions/socialAuth";
import { BASEURL } from "../../actions/authActions";
import { simpleAction } from "../../actions/simpleAction";
import { configureMock } from "../login.test";

const response_data = {
  user: {
    token: "retyuisdfgh"
  }
};

describe("socialAuth actions", () => {
  let store;
  let mock;
  beforeEach(() => {
    ({ mock, store } = configureMock(mock, store));
  });
  const helperMethod = (url, action) => {
    mock.onPost(BASEURL + url).reply(200, response_data);
    action(response_data)(store.dispatch);
    expect(store.getActions()).toEqual([]);
  };

  it("the facebookAuth action should be able to return a user ", () => {
    helperMethod("facebook/", facebookAuth);
  });
  it("should able to return a user", () => {
    helperMethod("google/", googleAuth);
  });
  it("the googleAuth action should be sent an email", async () => {
    simpleAction()(store.dispatch);
    expect(store.getActions()).toEqual([
      { type: "SIMPLE_ACTION", payload: "result_of_simple_action" }
    ]);
  });
});
