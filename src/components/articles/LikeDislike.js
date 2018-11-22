import React, { Component } from "react";
import { updateLikeDislikeArticle } from "../../actions/articleActions/likeDislikeAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../../assets/articleAssets/likeDislike.css";
import { LIKED, DISLIKED } from "../../utils/localStorageItems";
import { fetchOneArticle } from "../../actions/articleActions/articleAction";

export class Like extends Component {
  state = { liked: "", disliked: "" };
  handleClick = e => {
    e.preventDefault();
    const results = { like: { likes: e.target.id } };
    this.props.updateLikeDislikeArticle(results, this.props.slug);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.hasLiked || LIKED) {
      this.setState({ liked: "clicked", disliked: "" });
    } else if (nextProps.hasDisLiked || DISLIKED) {
      this.setState({ disliked: "clicked", liked: "" });
    }
  }
  componentWillUpdate() {
    this.props.fetchOneArticle(this.props.slug);
  }
  handleRenderingIcons = (id, name, className) => {
    return (
      <i id={id} name={name} className={className} onClick={this.handleClick} />
    );
  };
  render() {
    return (
      <div>
        {this.props.liking}
        {this.handleRenderingIcons(
          "true",
          "like",
          `fas fa-thumbs-up ${this.state.liked}`
        )}
        <br />
        {this.props.disliking}
        {this.handleRenderingIcons(
          "false",
          "dislike",
          `fas fa-thumbs-down ${this.state.disliked}`
        )}
      </div>
    );
  }
}
Like.propTypes = {
  hasLiked: PropTypes.bool,
  hasDisLiked: PropTypes.bool,
  updateLikeDislikeArticle: PropTypes.func,
  slug: PropTypes.string,
  liking: PropTypes.string,
  disliking: PropTypes.disliking,
  fetchOneArticle:PropTypes.func
};
export const mapStateToProps = state => ({
  hasLiked: state.likeDislikeReducer.hasLiked,
  hasDisLiked: state.likeDislikeReducer.hasDisLiked,
  slug: state.articlesReducer.onearticle.slug
});

export default connect(
  mapStateToProps,
  { updateLikeDislikeArticle, fetchOneArticle }
)(Like);
