import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import getComments, {
  createComment,
  deleteComment,
  createThread
} from "../../actions/commentActions/commentActions";
import axios from "axios";
import { BASE_URL } from "../../appUrls/index";
import commentReducer from "../../reducers/commentReducer/commentReducer";
import {COMMENTS} from "../../actions/actionTypes";
const comment = {
  comment: {
    body: "His namdgjjnfgd gndfgn"
  }
};
let store;
let mock;
const COMMENTS_URL = `${BASE_URL}/api/articles/slug/comments/`;
const THREAD = `${BASE_URL}/api/articles/slug/comments/2/thread`;
describe("Comments", () => {
  beforeEach(() => {
    configureMock();
  });

  it("are created", async () => {
    testAction("post", COMMENTS_URL, 201);
  });
  it("are returned", async () => {
    testAction("get", COMMENTS_URL, 200);
  });
  it("are deleted", async () => {
    testAction("delete", `${COMMENTS_URL}2`, 200);
  });
  it("failed to get comments", async () => {
    testAction("get", `${COMMENTS_URL}`, 400);
  });
  it("creates replies to threads", async () => {
    testAction("thread", `${THREAD}`, 201);
  });
});
describe("Comment Reducer", () => {
  const initialState = {
    count: 0,
    next: null,
    previous: null,
    results: [],
    thread: [],
    comment: []
  };
  it("returns comments data", () => {
    expect(commentReducer(initialState, { type: COMMENTS.GET_COMMENTS, payload: {} }));
  });
  it("returns data on creating a comment", () => {
    expect(commentReducer(initialState, { type: COMMENTS.POST_COMMENT, payload: {} }));
  });
  it("returns data on deleting comment", () => {
    expect(commentReducer(initialState, {type: COMMENTS.DELETE_COMMENT,payload: {}}));
  });
  it("creates a thread", () => {
    expect(commentReducer(initialState, { type: COMMENTS.CREATE_THREAD, payload: {} }));
  });
});
function testAction(method, url, status) {
  if (method === "post") {
    mock.onPost(url).reply(status, comment);
    createComment("slug", comment)(store.dispatch);
  } else if (method === "get") {
    mock.onGet(url).reply(status, comment);
    getComments("slug")(store.dispatch);
  } else if (method === "delete") {
    mock.onDelete(url).reply(status, comment);
    deleteComment("slug", 2)(store.dispatch);
  } else if (method === "thread") {
    let data = { body: {}, id: 2 };
    mock.onPost(url).reply(status, comment);
    createThread("slug", data)(store.dispatch);
  }
  expect(store.getActions()).toEqual([]);
}
function configureMock() {
  mock = new MockAdapter(axios);
  const mockStore = configureMockStore();
  store = mockStore({});
}
