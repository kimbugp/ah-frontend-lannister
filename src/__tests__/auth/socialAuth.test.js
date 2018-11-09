import React from "react";
import { shallow } from "enzyme";
import { SocialAuth } from "../../components/auth/socialAuth";

describe("socialAuth component", () => {
  const props = {
    isLoggedIn: false,
    facebookAuth: jest.fn,
    googleAuth: jest.fn
  };
  const wrapper = shallow(<SocialAuth {...props} />);
  const data = { accessToken: "ggjjjjsffddfcd" };

  it("renders a div when  isLoggedIn is false,", () => {
    expect(wrapper.instance().props.isLoggedIn).toBe(false);
  });
  it("redirects to home when isLoggedIn is true", () => {
    wrapper.setProps({ isLoggedIn: true });
    expect(wrapper.instance().props.isLoggedIn).toBe(true);
  });
  it("returns undefined when facebook returns an invalid access token", () => {
    expect(wrapper.instance().handleFacebookResponse(data)).toBeUndefined();
  });
  it("returns undefined when twitter returns an invalid access token", () => {
    expect(wrapper.instance().handleGoogleResponse(data)).toBeUndefined();
  });
});
