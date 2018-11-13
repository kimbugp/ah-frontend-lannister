import React, { Fragment } from "react";
import CommentForm from "../../views/commentsViews/form";
import {
  createComment,
  createThread
} from "../../actions/commentActions/commentActions";
import { connect } from "react-redux";

export class NewComment extends React.Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = { comment: "", display: "none", comments: "" };
  }
  getInput = value => {
    this.setState({ comment: value });
  };
  saveComment = event => {
    event.preventDefault();
    this.setState({ display: "none", height: "1cm", comment: "" });
    if (event.target.id) {
      let data = {
        body: { comment: { body: this.state.comment } },
        id: event.target.id
      };
      this.props.createThread(this.props.slug, data);
    } else {
      this.props.createComment(this.props.slug, {
        comment: { body: this.state.comment }
      });
    }
  };
  onClick = () => {
    this.setState({ height: "4cm", display: "block" });
  };
  render() {
    const attrib = {
      comment: this.state.comment,
      handleChange: this.getInput,
      handleSubmit: this.saveComment,
      btnValue: this.props.value,
      height: this.state.height,
      onClick: this.onClick,
      btnstate: this.state.display,
      holder: this.props.holder,
      id: this.props.id
    };
    return (
      <Fragment>
        <CommentForm {...attrib} />
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  comments: state.commentReducer,
  slug: state.articlesReducer.onearticle.slug
});
export default connect(
  mapStateToProps,
  { createComment, createThread }
)(NewComment);
