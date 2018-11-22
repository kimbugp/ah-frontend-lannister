import React from "react";
import { shallow } from "enzyme";
import { Like} from "../../components/articles/LikeDislike";

describe("Likedislike component", () => {
  const handleClick = jest.fn();
  const preventDefault = jest.fn();
  
  const props = {
    fetchOneArticle:jest.fn,
    hasLiked: false,
    hasDisLiked: false,
    updateLikeDislikeArticle: jest.fn,
    slug: "travel",
    preventDefault
  };
  let event = {
    target: {},
    preventDefault
  };
  const wrapper = shallow(<Like {...props} handleClick={handleClick} />);
  
  it("renders a div when  hasLiked is true,", () => {
    wrapper.setProps({ hasLiked: true });
    expect(wrapper.instance().props.hasLiked).toBe(true);
  });
  it("renders a div when  has disliked is true,", () => {
    wrapper.setProps({ hasDisLiked: true });
    wrapper.update();
    expect(wrapper.instance().props.hasDisLiked).toBe(true);
  });
  it("sets state when clicked", () => {
    wrapper.instance().handleClick(event);
    expect(handleClick()).toBeUndefined();
  });
});

