import React from "react";
import PropTypes from "prop-types";
import {
  share,
  facebook,
  favorite
} from "../../assets/articleAssets/svgIcons";
import Rating from "../../components/articles/rating";
import Like from "../../components/articles/LikeDislike";

const SideBarAction = ({ data }) => {
  return (
    <div className="sideBar col-md-2 col-xs-12">
      <div className="share">
        <p className="categories">Share</p>
        <a target="_blank" href="/">
          <svg
            className="svgIcon-use"
            width="29"
            height="29"
            viewBox="0 0 29 29"
          >
            <path d={share} />
          </svg>
        </a>
        <br />
        <a target="_blank" href="/">
          <svg
            className="svgIcon-use"
            width="29"
            height="29"
            viewBox="0 0 29 29"
          >
            <path d={facebook} />
          </svg>
        </a>
        <div className="sep" />
        <p className="categories">Status</p>
        <Like disliking={data.dislikes} liking={data.likes} />
        <Rating rating={data.average_rating} />
        <br />
        <a href="#comments">{data.favorites_count}</a>{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path fill="none" d="M24 24H0V0h24v24z" />
          <path d={favorite} />
        </svg>
        <br />
      </div>
    </div>
  );
};

SideBarAction.propTypes = {
  data: PropTypes.object,
  readtime: PropTypes.string.isRequired
};
export default SideBarAction;
