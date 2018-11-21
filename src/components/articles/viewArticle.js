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

export class ViewArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      share: {
        email: ""
      }
    };
  }

  componentDidMount() {
    const slug = this.props.match.params.slug;
    this.props.dispatch(fetchOneArticle(slug));
    this.props.dispatch(getComments(slug));
    checkStatus(slug);
  }

  handleEmailValue = event => {
    this.setState({
      share: {
        email: event.target.value
      }
    });
  };

  handleShare = () => {
    this.props.dispatch(shareArticle(this.state,this.props.match.params.slug));
  };

  render() {
    const results = this.props.article.onearticle;
    return (
      <div>
        <ViewOneArticle article={results} handleEmail ={this.handleEmailValue} emailShare={this.handleShare} />
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
