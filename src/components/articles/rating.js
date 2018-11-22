import React, { Component } from "react";
import ReactStars from "react-stars";
import { rateArticle } from "../../actions/articleActions/ratingAction";
import { connect } from "react-redux";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "../../assets/articleAssets/rating.scss";
import { fetchOneArticle } from "../../actions/articleActions/articleAction";

let rate = null;
const toastMsg = (msgType, msg) => {
  msgType(msg, {
    autoClose: 3500,
    hideProgressBar: true
  });
};
export class Rating extends Component {
  state = {
    popoverOpen: false,
  };
  handleRating = newRating => {
    rate = newRating;
  };
  toggle = () => {
    this.setState({ popoverOpen: !this.state.popoverOpen });
  };
  handleCancel = () => {
    this.setState({ popoverOpen: false });
  };

  handleSubmit = () => {
    if (rate === null) {
      toastMsg(toast.warn, "you have not rated");
    } else {
      const rating = { rate: { rating: rate } };
      this.props.rateArticle(rating, this.props.slug);
      this.setState({ popoverOpen: false });
    }
  };
  componentWillUpdate() {
    this.props.fetchOneArticle(this.props.slug);
  }
  handleRenderingStars = () => {
    return (
      <div className="rate">
        {this.props.rating}
        <div data-md-tooltip="rate this article">
          <i className="fas fa-star" id="Popover1" onClick={this.toggle} />
        </div>
        <Popover
          placement="right"
          isOpen={this.state.popoverOpen}
          target="Popover1"
          toggle={this.toggle}
        >
          <PopoverHeader>Rate</PopoverHeader>
          <PopoverBody>
            <ReactStars
              count={5}
              half={false}
              onChange={this.handleRating}
              size={24}
              className="rate-color"
              color2={false}
            />
            <Button className="submit-color" onClick={this.handleSubmit}>
              submit
            </Button>{" "}
            {""}
            <Button className="submit-color" onClick={this.handleCancel}>
              Cancel
            </Button>
          </PopoverBody>
        </Popover>
      </div>
    );
  };
  render() {
    return (
      <div>{this.props.hasRated ? null : this.handleRenderingStars()}</div>
    );
  }
}
Rating.propTypes = {
  hasRated: PropTypes.bool,
  rateArticle: PropTypes.func,
  slug: PropTypes.string,
  error: PropTypes.string,
  rating: PropTypes.string,
  fetchOneArticle: PropTypes.func
};
const mapStateToProps = state => ({
  hasRated: state.rateReducer.hasRated,
  error: state.rateReducer.error,
  slug: state.articlesReducer.onearticle.slug
});
export default connect(
  mapStateToProps,
  { rateArticle, fetchOneArticle }
)(Rating);
