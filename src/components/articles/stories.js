import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import StoriesView from "../../views/articles/userStories";
import {
  getPublishedArticles,
  getDraftArticles,
  deleteOneArticle,
  publishNewArticleAction
} from "../../actions/articleActions/articleAction";

class Stories extends Component {
  state = {};

  componentWillUpdate(nextProps) {
    if (
      nextProps.deleted.length > this.props.deleted.length ||
      nextProps.publish.message === "article published succesfully"
    ) {
      this.props.dispatch(getPublishedArticles());
      this.props.dispatch(getDraftArticles());
    }
  }

  componentDidMount() {
    this.props.dispatch(getPublishedArticles());
    this.props.dispatch(getDraftArticles());
  }

  handlePublishArticle = slug => {
    this.props.dispatch(publishNewArticleAction(slug));
  };

  handleDelete = slug => {
    this.props.dispatch(deleteOneArticle(slug));
  };

  render() {
    const drafted = this.props.drafted;
    const published = this.props.published;
    return (
      <div>
        <StoriesView
          drafted={drafted}
          published={published}
          handleDelete={this.handleDelete}
          handlePublishArticle={this.handlePublishArticle}
        />
      </div>
    );
  }
}
Stories.propTypes = {
  dispatch: PropTypes.func.isRequired,
  published: PropTypes.object,
  drafted: PropTypes.object,
  deleted: PropTypes.object,
  length: PropTypes.func,
  publish: PropTypes.object
};
const mapStateToProps = state => ({
  published: state.articlesReducer.published,
  drafted: state.articlesReducer.drafted,
  deleted: state.articlesReducer.deleted,
  publish: state.articlesReducer.publish
});
const mapDispatchToProps = dispatch => ({ dispatch });

export { Stories as StoriesTest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stories);
