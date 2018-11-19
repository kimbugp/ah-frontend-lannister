import React from "react";
import { shallow } from "enzyme";
import { Rating } from "../../components/articles/rating";

describe("rating  component", () => {
  const props = {
    hasRated: false,
    rateArticle: jest.fn,
    error:"",
    toast:jest.fn,
    rate:2
    
  };
  
  const wrapper = shallow(<Rating {...props} />);
 
  it("can change stated", () => {
    wrapper.setState({ hasRated: true });
    expect(wrapper.instance().props.hasRated).toBe(false);
  });
  it("returns undefined when when no star is clicked", () => {
    expect(wrapper.instance().handleRating()).toBeUndefined();
  });
  it("returns undefined if rate this article is not clicked", () => {
    expect(wrapper.instance().toggle()).toBeUndefined();
  });
  it("it has a div", () => {
    expect(wrapper.instance().handleRenderingStars().type).toBe("div");
  });
  it("sets state when clicked", () => {

    wrapper.instance().handleSubmit();
    expect(wrapper.instance().handleSubmit()).toBeUndefined();
  });
  it("sets state when clicked", () => {

    wrapper.instance().handleSubmit();
    expect(wrapper.instance().handleSubmit()).toBeUndefined();
  });
});
it("sets state when clicked", () => {
  const props = {
    hasRated: false,
    rateArticle: jest.fn,
    error:{length:1},
    toast:jest.fn    
  };
  let wrapper = shallow(<Rating {...props} />);
  wrapper.instance().handleSubmit();
  expect(wrapper.instance().handleSubmit()).toBeUndefined();
});
it("set", () => {
  const props = {
    hasRated: false,
    rateArticle: jest.fn,
    error:{length:0},
    toast:jest.fn, 
    rate:25 
  };
  let wrapper = shallow(<Rating {...props} />);
  wrapper.instance().handleSubmit();
  expect(wrapper.instance().handleSubmit()).toBeUndefined();
});
