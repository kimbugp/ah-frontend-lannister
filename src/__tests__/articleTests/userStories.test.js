import React from "react";
import { shallow, mount } from "enzyme";
import ViewStories from "../../views/articles/userStories";
import { StoriesTest } from "../../components/articles/stories";

describe("ProductHeader Component", () => {
  let component, node, cardnode, viewComponent;

  beforeEach(() => {
    viewComponent = mount(<ViewStories published={[{ body: "" }]} />);
    component = shallow(<ViewStories />);
    node = component.find("Nav");
    cardnode = component.find("CardBody");
  });
  it("has an Nav tag", () => {
    expect(node).toBeTruthy();
    expect(component).toBeTruthy();
    expect(node.length).toEqual(1);
  });

  it("has a conatiner class", () => {
    expect(node.hasClass("container")).toBeTruthy();
  });

  it("it has a card Body", () => {
    expect(cardnode).toBeTruthy();
    expect(cardnode.length).toEqual(2);
  });

  it("it has a card Link", () => {
    let cardlink = viewComponent.find("CardLink#wertf");

    const mySpy = jest.spyOn(viewComponent.instance(), "deleteArticle");
    cardlink.simulate("click");
    expect(mySpy).toHaveBeenCalledTimes(1);

    expect(cardlink.length).toEqual(1);
  });

  it("it has props", () => {
    let dispatch = jest.fn();
    let props = {
      dispatch,
      deleted: [],
      publish:{},
      length:jest.fn(),
      drafted:[],
      published:[]
    };
    let storyComponent = shallow(<StoriesTest {...props} />);
    storyComponent.setProps({...props});
  });
});
