import React from "react";
import { shallow } from "enzyme";
import { ViewArticles } from "../../components/articles/viewArticles";
import AllArticles from "../../views/articles/viewArticles";
import ViewAnArticle from "../../views/articles/viewArticle";
import SideBar from "../../views/articles/sideBar";
import EmailModal from "../../views/articles/emailModal";
import { ViewArticle } from "../../components/articles/viewArticle";

it("article component returns a div", () => {
  let map = jest.fn();
  let results = {
    map
  };
  let component = shallow(<AllArticles results={results} />);
  expect(component.containsMatchingElement(<div />)).toBeTruthy();
});

it("article component returns one article data", () => {
  const dateFormat = require("dateformat");
  const emailShare = jest.fn();
  const article = {
    read_time: "00:00:00",
    dateFormat,
    emailShare
  };
  let component = shallow(<ViewAnArticle article={article} />);
  var node = component.find(".container");
  expect(node.length).toEqual(1);
});

it("view article component returns a div", () => {
  const article = {
    read_time: ""
  };
  const data = {
    likes: 1
  };
  let component = shallow(<SideBar article={article} data={data} />);
  var node = component.find("p");
  expect(node.length).toEqual(6);
});

it("viewing articles", () => {
  let dispatch = jest.fn();
  let props = { dispatch };
  let component = shallow(<ViewArticles {...props} />);
  component.instance().componentWillMount();
});

it("viewing an article", () => {
  let dispatch = jest.fn();
  let props = {
    article: { onearticle: {} },
    match: { params: { slug: "" } },
    dispatch
  };
  let component = shallow(<ViewArticle {...props} />);
  expect(component).toBeTruthy();
});

it("email share component", () => {
  let dispatch = jest.fn();
  let handleEmail = jest.fn();
  let props = {
    dispatch,
    handleEmail
  };
  let component = shallow(<EmailModal {...props} />);
  var node = component.find("a");
  expect(node.length).toEqual(1);
});
