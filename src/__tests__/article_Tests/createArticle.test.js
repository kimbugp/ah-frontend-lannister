import React from "react";
import { shallow } from "enzyme";
import createArticle from "../../components/articles/createArticle";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  createNewArticleAction,
  publishNewArticleAction
} from "../../actions/articleActions/articleAction";
import { API_URLS, BASE_URL } from "../../appUrls";

const store = configureMockStore([thunk])({});

test("check createNewArticleAction", () => {
  const createData = {
    article: {
      title: "Driverless cars in coldcesdc",
      description: "How to mandddage office and home stress",
      body: "By taking a cold milk shake and sleeping",
      tags: [],
      category: "5"
    }
  };
  fetchMock.post(API_URLS.FETCH_CREATE_ARTICLES, createData);

  const apiResults = store.dispatch(createNewArticleAction({})).then(() => {
    const actions = store.getActions();
    expect(actions.length).toBe(1); 
  });

  fetchMock.restore();
  return apiResults;
});

test("check publishNewArticleAction", () => {
  const slug = "look";

  fetchMock.put(BASE_URL + `/api/articles/${slug}/publish/`,slug);

  const apiResults = store.dispatch(publishNewArticleAction(slug)).then(() => {
    const actions = store.getActions();
    expect(actions.length).toBe(1); 
  });

  fetchMock.restore();
  return apiResults;
});

describe("CreateArticle", () => {
  it("should render my article component", () => {
    shallow(<createArticle />);
  });
});
