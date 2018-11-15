import React from "react";
import { shallow } from "enzyme";
import { ViewArticles } from "../../components/articles/viewArticles";
import AllArticles from "../../views/articles/viewArticles";
import ViewAnArticle from "../../views/articles/viewArticle";
import SideBar from "../../views/articles/sideBar";
import { ViewArticle } from "../../components/articles/viewArticle";
it("article component returns a div", () => {
  let map = jest.fn();
  let results = {
    map
  };
  let component = shallow(<AllArticles results={results} />);
  component;
});

it("article component returns a div", () => {
  const article = [
    {
      read_time: ""
    }
  ];
  let component = shallow(<ViewAnArticle article={article} />);
  component;
});

it("article component returns a div", () => {
  const article = {
    read_time: ""
  };
  const data = {
    likes: 1
  };
  let component = shallow(<SideBar article={article} data={data} />);
  component;
});

it("viewing articles", () => {
  let dispatch = jest.fn();
  let props = { dispatch };
  let component = shallow(<ViewArticles {...props} />);
  component;
  component.instance().componentWillMount();
});

it("viewing article", () => {
  let dispatch = jest.fn();
  let props = {
    article: { onearticle: {} },
    match: { params: { slug: "" } },
    dispatch
  };
  let component = shallow(<ViewArticle {...props} />);
  component;
});

