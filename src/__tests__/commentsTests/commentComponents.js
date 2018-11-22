import React from "react";
import { CommentsView } from "../../components/comments/viewComment";
import { mount, shallow } from "enzyme";
import { NewComment } from "../../components/comments/newComment";
import Comments from "../../components/comments/commentsComponent";

describe("All components", () => {
  let component;
  let getComments = jest.fn();
  let map = jest.fn();
  let deleteComment = jest.fn();
  let likeComment =jest.fn();
  let unlikeComment =jest.fn();
  const props = {
    getComments,
    deleteComment,
    likeComment,
    unlikeComment,
    comments: {
      results: { map },
      thread: { length: 1 },
      length: 1,
      comment: { length: 1 },
      like:{length:1}
    }
  };

  beforeEach(() => {
    component = mount(<CommentsView {...props} />);
  });
  it("all the comments render", () => {
    expect(component.length).toEqual(1);
  });
  it("deletes comments on click", () => {
    component.instance().handleClick({ target: { id: 2 } });
    expect(deleteComment).toBeCalled();
  });
  it("check compnent rerenders on change", () => {
    component.instance().componentWillUpdate({
      comments: {
        results: { length: 1, comment: { length: 1 } },
        thread: { length: 1 },
        comment: { length: 1 },
        like:{length:1}
      }
    });
    expect(component.prop(props.comments)).toEqual();
  });
  it("component receives props ", () => {
    component.setProps({ comments: { results: { map }, thread: "" } });
    expect(component.exists()).toEqual(true);
  });
  it("adds a like", () => {
    let preventDefault = jest.fn();
    component.instance().handleLike({ preventDefault, target: { id: 5 } });
    expect(component.exists()).toBeDefined();
  });
  it("adds a unlike", () => {
    let preventDefault = jest.fn();
    component.instance().handleUnlike({ preventDefault, target: { id: 5 } });
    expect(component.exists()).toBeDefined();
  });
});
describe("New comment", () => {
  let component;
  let createComment = jest.fn();
  let createThread = jest.fn();
  let likeComment =jest.fn();

  let props = { createComment, createThread , likeComment};

  beforeEach(() => {
    component = shallow(<NewComment {...props} />);
  });
  it("all the comments render", () => {
    expect(component.exists()).toEqual(true);
  });
  it("is saved", () => {
    let preventDefault = jest.fn();
    component.instance().saveComment({ preventDefault, target: { id: "" } });
  });
  it("adds a thread", () => {
    let preventDefault = jest.fn();
    component.instance().saveComment({ preventDefault, target: { id: 5 } });
    expect(component.exists()).toBeDefined();
  });
  it("input is saved", () => {
    component.instance().getInput();
    expect(component.length).toEqual(1);
  });
  it("box increases length on click ", () => {
    component.instance().onClick();
    expect(component.exists()).toEqual(true);
  });
  
});
it("box increases length on click ", () => {
  let component = shallow(<Comments />);
  expect(component.exists()).toEqual(true);
});
