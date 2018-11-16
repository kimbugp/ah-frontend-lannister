import React from "react";
import PropTypes from "prop-types";
import {share, facebook} from "../../assets/articleAssets/svgIcons";
import Rating from "../../components/articles/rating";

const dateFormat = require("dateformat");

const SideBarAction = ({ data ,readtime}) => {
  return (
    <div className="containers col-md-3 col-xs-12">
      <div className="share">
        <p className="categories">Share</p>
        <ul>
          <li>
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
          </li>
          <li>
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
          </li>
        </ul>
        <Rating/>
        <div className="sep" />
        <p className="categories">Status</p>
        <ul>
          <li>
            Likes :{" "}
            <a href="#comments">
              {data.likes}
              <br />
            </a>
          </li>
          <li>
            Rating :{" "}
            <a href="#comments">
              {data.average_rating}
              <br />
            </a>
          </li>
          <li>
            ReadTime :{" "}
            <a href="#comments">
              {dateFormat(readtime, "M")} min read
              <br />
            </a>
          </li>
          <li>
            Dislikes :{" "}
            <a href="#comments">
              {data.dislikes}
              <br />
            </a>
          </li>
          <li>
            Favorited times :{" "}
            <a href="#comments">
              {data.favorites_count}
              <br />
            </a>
          </li>
          <li>
            <div>
              Category :{" "}
              <a className="categories" href="/">
                {data.category_title}
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

SideBarAction.propTypes = {
  data: PropTypes.object,
  readtime:PropTypes.string.isRequired
};
export default SideBarAction;
