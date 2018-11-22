import React from "react";
import {shallow } from "enzyme";
import CommentsCard ,{ViewCard, Selected}from "../../views/commentsViews/commentsCard";
import CommentsForm from "../../views/commentsViews/form";

const commentProps = {
  id: 1,
  section: null,
  body: "fjkfjkfd",
  author: {
    username: "amoswells",
    bio: "This is the final test",
    image:
      "https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1",
    following: false
  },
  replies: [],
  created_at: "2018-11-14T18:32:28.548917+03:00",
  updated_at: "2018-11-14T18:32:28.548971+03:00",
  likes_count: 0
};
const attrib = {
  comment: "",
  btnValue: "Comment"
};
describe("new comments", () => {
  let card;
  beforeEach(() => {
    card = shallow(<CommentsForm {...attrib} />);
  });
  it("renders a new comment form ", () => {
    card;
  });
});
it("comments card should render ", () => {
  let card = shallow(<CommentsCard {...commentProps} />);
  card.contains(<div className="comment-profile" />);

});
it("comments card renders ", () => {
  let card = shallow(<ViewCard {...commentProps} />);
  card.contains(<div className="comment-profile" />);
  
});
it("comments card with selected section renders ", () => {
  const selectedProps = {
  
    section:{article_section:"yui"},
   
  };
  let card = shallow(<Selected {...selectedProps} />);
  card.contains(<div className="selected-box"/>);
});
