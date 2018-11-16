import React from "react";
import CommentsList from "./viewComment";
import CommentInput from "./newComment";

const Comments = () => (
  <div className="commentsContainer">
    <h2>Comments</h2>
    <CommentInput  value={"Comment"} holder={"Enter your comment here..."}/>
    <CommentsList />
  </div>
);

export default Comments;
