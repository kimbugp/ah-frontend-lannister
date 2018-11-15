import React, { Component } from "react";
import ViewAllArticles from "../../views/articles/viewArticles";
import { connect } from "react-redux";
import { retrieveAllArticles } from "../../actions/articleActions/articleAction";
import PropTypes from "prop-types";

export class ViewArticles extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    this.props.dispatch(retrieveAllArticles());
  }
  render() {
    const articles = this.props.allarticles;
    return (
      <div>
        <ViewAllArticles results={articles} />
      </div>
    );
  }
}
ViewArticles.propTypes = {
  dispatch: PropTypes.func.isRequired,
  allarticles: PropTypes.array
};

const mapStateToProps = state => ({
  allarticles: state.articlesReducer.articles
});
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewArticles);
