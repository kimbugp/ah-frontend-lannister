import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import axios from "axios";
import { rateArticle } from "../../actions/articleActions/ratingAction";
import { BASE_URL } from "../../appUrls/";
import { headers } from "../../utils/myHeaders";

const response_data = {
  rates: {
    results: 3
  }
};

describe("rating Actions", () => {
  let store;
  let mock;
  beforeEach(() => {
    mock = new MockAdapter(axios);
    const mockStore = configureMockStore();
    store = mockStore({});
  });
  const helperMethod = (url, action ) => {
    mock.onPost(BASE_URL + url ,headers()).reply(200, response_data);
    action(response_data)(store.dispatch);
    expect(store.getActions()).toEqual([]);
  };

  it("returns rates when suceessful ", () => {
    helperMethod("`/api/articles/prossy/rating/`", rateArticle);
  });
});
