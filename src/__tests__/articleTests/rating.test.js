import React from "react";
import { shallow } from "enzyme";
import { Rating } from "../../components/articles/rating";

describe("rating  component", () => {
  const props = {
    hasRated: false,
    rateArticle: jest.fn
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
});
