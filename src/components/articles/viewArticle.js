import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchOneArticle } from "../../actions/articleActions/articleAction";
import ViewOneArticle from "../../views/articles/viewArticle";

export class ViewArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const slug = this.props.match.params.slug;
    this.props.dispatch(fetchOneArticle(slug));
  }

  render() {
    const results = this.props.article.onearticle;
    return (
      <div>
        <ViewOneArticle article={results} />
      </div>
    );
  }
}
ViewArticle.propTypes = {
  match: PropTypes.object,
  params: PropTypes.object,
  slug: PropTypes.string,
  results: PropTypes.array,
  article:PropTypes.object,
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
