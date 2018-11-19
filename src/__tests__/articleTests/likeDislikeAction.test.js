import { configureMock } from "../auth/login.test";
import { BASE_URL } from "../../appUrls/";
import {
  updateLikeDislikeArticle,
  dispatchData,
  checkStatus
} from "../../actions/articleActions/likeDislikeAction";

const response_data = {
  likes: {},
  user: {}
};
let slug = "sport";
describe("likeDislike actions", () => {
  let store;
  let mock;
  beforeEach(() => {
    ({ mock, store } = configureMock(mock, store));
  });
  const helperMethod = (url, action) => {
    mock.onPut(BASE_URL + url).reply(200, response_data);
    action(response_data)(store.dispatch);
    expect(store.getActions()).toEqual([]);
  };
  it("the updateLikeDislikeArticle action should be able to return a response ", () => {
    helperMethod("/api/articles/bitcoin/dislike/", updateLikeDislikeArticle);
  });
  it("calls dispatchData ", () => {
    dispatchData("true", store.dispatch);
    expect(store.getActions()).toEqual([]);
  });
  it("checkstus doesnot dispatch to store", () => {
    mock.onGet(BASE_URL + "/api/user/").reply(200, response_data.user);
    checkStatus(slug);
    expect(store.getActions()).toEqual([]);
  });
  it("checkstus doesnot dispatch to store", () => {
    mock
      .onGet(BASE_URL + `/api/articles/${slug}/like/`)
      .reply(200, response_data);
    checkStatus(slug);
    expect(store.getActions()).toEqual([]);
  });
});
