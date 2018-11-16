import React, { Component } from "react";
import ReactStars from "react-stars";
import { rateArticle } from "../../actions/articleActions/ratingAction";
import { connect } from "react-redux";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "../../assets/articleAssets/rating.scss";

let rate;
export class Rating extends Component {
  state = {
    popoverOpen: false,
  };
  handleRating = newRating => {
    rate = newRating;
  };
  toggle = () => {
    this.setState({ popoverOpen: true });
  };
 
  handleSubmit = () => {
    if (this.props.error.length>0){
      toast.error(this.props.error, {
        autoClose: 3500,
        hideProgressBar: true
      });
      this.setState({ popoverOpen: false });
    }
    else if (rate == null) {
      toast.warn("you have not rated", {
        autoClose: 3500,
        hideProgressBar: true
      });
    } else {
      const rating = { rate: { rating: rate } };
      toast.success("your rate has been added", {
        autoClose: 3500,
        hideProgressBar: true
      });
      this.props.rateArticle(rating,this.props.slug);
      this.setState({ popoverOpen: false });
    }
  };

  handleRenderingStars = () => {
    return (
      <div className="rate">
        <p id="Popover1" className="rate-text" onClick={this.toggle}>
          rate article
        </p>
        <Popover
          placement="right"
          isOpen={this.state.popoverOpen}
          target="Popover1"
          toggle={this.toggle}
        >
          <PopoverHeader >rate</PopoverHeader>
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
            </Button>
          </PopoverBody>
        </Popover>
      </div>
    );
  };
  render() {
    return (
      <div>
        {this.props.hasRated ? null : this.handleRenderingStars()}
      </div>
    );
  }
}
Rating.propTypes = {
  hasRated: PropTypes.bool,
  rateArticle: PropTypes.func,
  slug:PropTypes.string,
  error:PropTypes.string
};
const mapStateToProps = state => ({
  hasRated: state.rateReducer.hasRated,
  error: state.rateReducer.error,
  slug:state.articlesReducer.onearticle.slug
});
export default connect(
  mapStateToProps,
  { rateArticle }
)(Rating);
