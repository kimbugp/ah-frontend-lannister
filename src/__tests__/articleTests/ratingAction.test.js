import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import axios from "axios";
import {
  rateArticle,
  dispatchError,
} from "../../actions/articleActions/ratingAction";
import { BASE_URL } from "../../appUrls/";
import ACTION_TYPE from "../../actions/actionTypes";

const response_data = {
  rate: {
    rated_by: "kleya",
    date_created: "2018-11-19T00:13:46.283647+03:00",
    rating: 3,
    article: "sport",
  },
  rates:{
    msg:"dfg"
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
  it("returns rates when suceessful ", async () => {
    mock
      .onPost(BASE_URL + "/api/articles/sport/rating/")
      .reply(201, response_data);
    rateArticle({},"sport")(store.dispatch);
    expect(store.getActions()).toEqual([]);
  });
  it("dispatches the correct data", () => {
    const payload = "msg";
    const expectedAction = {
      type: ACTION_TYPE.ERROR,
      payload
    };
    expect(dispatchError(payload)).toEqual(expectedAction);
  });
});
