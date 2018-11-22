import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  fetchOneArticle,
  shareArticle
} from "../../actions/articleActions/articleAction";
import ViewOneArticle from "../../views/articles/viewArticle";
import Comments from "../comments/commentsComponent";
import getComments from "../../actions/commentActions/commentActions";
import { checkStatus } from "../../actions/articleActions/likeDislikeAction";
import { Popover, PopoverHeader, PopoverBody } from "reactstrap";
import CommentInput from "../comments/newComment";

export let text;
export let startOfText;
export let endOfText;

export class ViewArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      share: {
        email: ""
      },
      popoverOpen: false,
      bottom: null,
      height: null,
      left: null,
      right: null,
      top: null,
      button: "buttonComment",
      comment: "commentBox",
      popOverBody: "popOverBody",
      popOver: ""
    };
  }
  componentDidMount() {
    const slug = this.props.match.params.slug;
    this.props.dispatch(fetchOneArticle(slug));
    this.props.dispatch(getComments(slug));
    checkStatus(slug);
  }
  toggle = () => {
    this.setState({ popoverOpen: !this.state.popoverOpen });
  };
  handleSelected = () => {
    text = window.getSelection().toString();
    let article = this.props.article.onearticle.body;
    startOfText = article.search(text);
    endOfText = startOfText + text.length;
    let position = window
      .getSelection()
      .getRangeAt(0)
      .getBoundingClientRect();

    if (text.length > 0) {
      this.setState({
        popoverOpen: true,
        bottom: position.bottom,
        height: position.height,
        left: position.left,
        right: position.right,
        top: position.top,
        button: "buttonComment",
        comment: "commentBox",
        popOverBody: "popOverBody",
        popOver: ""
      });
    }
  };

  handleEmailValue = event => {
    this.setState({
      share: {
        email: event.target.value
      }
    });
  };

  handleShare = () => {
    this.props.dispatch(shareArticle(this.state, this.props.match.params.slug));
  };
  handleClick = () => {
    this.setState({
      comment: "commentBoxVisible",
      button: "commentBox",
      popOverBody: "",
      popOver: "commentsContainer comment-box"
    });
  };
  render() {
    const results = this.props.article.onearticle;
    const style = {
      position: "fixed",
      bottom: this.state.bottom,
      height: this.state.height,
      left: this.state.left,
      right: this.state.right,
      top: this.state.top
    };

    return (
      <div>
        <ViewOneArticle
          article={results}
          handleEmail={this.handleEmailValue}
          emailShare={this.handleShare}
          selected={this.handleSelected}
        />
        <p
          className={this.state.className}
          id="Popover2"
          toggle={this.toggle}
          style={style}
        >
          {" "}
        </p>
        <Popover
          className={this.state.popOver}
          placement="bottom"
          isOpen={this.state.popoverOpen}
          target="Popover2"
          toggle={this.toggle}
        >
          <PopoverHeader>Comment</PopoverHeader>
          <PopoverBody className={this.state.popOverBody}>
            <button className={this.state.button} onClick={this.handleClick}>
              comment
            </button>
            <div className={this.state.comment}>
              <CommentInput
                value={"Comment"}
                holder={"Enter your comment here..."}
              />
            </div>
          </PopoverBody>
        </Popover>
        <Comments />
      </div>
    );
  }
}
ViewArticle.propTypes = {
  match: PropTypes.object,
  params: PropTypes.object,
  slug: PropTypes.string,
  results: PropTypes.array,
  article: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};
const mapDispatchToProps = dispatch => ({ dispatch });
const mapStateToProps = state => ({
  article: state.articlesReducer
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewArticle);
