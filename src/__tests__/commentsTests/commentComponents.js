import React from "react";
import { CommentsView } from "../../components/comments/viewComment";
import { mount, shallow } from "enzyme";
import { NewComment } from "../../components/comments/newComment";
import Commments from "../../components/comments/commentsComponent";

describe("All components", () => {
  let component;
  let getComments = jest.fn();
  let map = jest.fn();
  let deleteComment = jest.fn();
  const props = {
    getComments,
    deleteComment,
    comments: {
      results: { map },
      thread: { length: 1 },
      length: 1,
      comment: { length: 1 }
    }
  };

  beforeEach(() => {
    component = mount(<CommentsView {...props} />);
  });
  it("all the comments render", () => {
    component;
  });
  it("deletes comments on click", () => {
    component.instance().handleClick({ target: { id: 2 } });
  });
  it("check compnent rerenders on change", () => {
    component.instance().componentWillUpdate({
      comments: {
        results: { length: 1, comment: { length: 1 } },
        thread: { length: 1 },
        comment: { length: 1 }
      }
    });
  });
});
describe("New comment", () => {
  let component;
  let createComment = jest.fn();
  let createThread = jest.fn();

  let props = { createComment, createThread };

  beforeEach(() => {
    component = shallow(<NewComment {...props} />);
  });
  it("all the comments render", () => {
    component;
  });
  it("is saved", () => {
    let preventDefault = jest.fn();
    component.instance().saveComment({ preventDefault, target: { id: "" } });
  });
  it("adds a thread", () => {
    let preventDefault = jest.fn();
    component.instance().saveComment({ preventDefault, target: { id: 5 } });
  });
  it("input is saved", () => {
    component.instance().getInput();
  });
  it("box increases length on click ", () => {
    component.instance().onClick();
  });
});

it("box increases length on click ", () => {
  let component = shallow(<Commments />);
  component;
});
