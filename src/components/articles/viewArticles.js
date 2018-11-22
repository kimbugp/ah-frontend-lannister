import React, { Component } from "react";
import ViewAllArticles from "../../views/articles/viewArticles";
import { connect } from "react-redux";
import { retrieveAllArticles } from "../../actions/articleActions/articleAction";
import PropTypes from "prop-types";
import { API_URLS } from "../../appUrls";
import { Alert } from "reactstrap";

export class ViewArticles extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleScroll();
  }
  handleScroll() {
    window.onscroll = () => {
      const page = this.props.page;
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        this.props.dispatch(retrieveAllArticles(page));
      }
    };
  }
  componentWillMount() {
    this.props.dispatch(retrieveAllArticles(API_URLS.FETCH_CREATE_ARTICLES));
  }

  render() {
    const articles = this.props.allarticles;
    const End = () => (
      <div className="text-center">
        <Alert color="danger" className="end-view">End of Articles</Alert>
      </div>
    );
    return (
      <div>
        <ViewAllArticles results={articles} />
        {this.props.page === null && this.props.prev ? <End /> : null}
      </div>
    );
  }
}
ViewArticles.propTypes = {
  dispatch: PropTypes.func.isRequired,
  allarticles: PropTypes.array,
  page: PropTypes.string,
  prev: PropTypes.string
};

const mapStateToProps = state => ({
  allarticles: state.articlesReducer.articles,
  page: state.articlesReducer.next,
  prev: state.articlesReducer.previous
});
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewArticles);
