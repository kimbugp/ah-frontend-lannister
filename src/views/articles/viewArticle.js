import React from "react";
import NavBar from "../../components/navigation/navBar";
import SideBarAction from "./sideBar";
import "../../assets/articleAssets/demo2.scss";
import PropTypes from "prop-types";
import { roundofftime } from "./roundOffTime";

const dateFormat = require("dateformat");
const ViewOneArticle = ({ article }) => {
  const roundUp = roundofftime(article);
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          <SideBarAction data={article} readtime={roundUp}/>
          <div className="col-md-8 col-md-offset-2 col-xs-12">
            <div className="mainheading">
              <h1 className="posttitle">{article.title}</h1>
              <h3>{article.description}</h3>
              <h3>
                <img
                  className="featured-image img-fluid"
                  id="article_image"
                  src={article.image}
                  alt=""
                />
              </h3>
            </div>
            <div className="article-post">
              <div dangerouslySetInnerHTML={{ __html: article.body }} />
            </div>
            <div className="entry-meta">
              <h5 className="entry-author">
                <span>Created By {article.author} </span>
                <time className="entry-date">
                  on {dateFormat(article.created_at, "d/mmm/yyyy")}
                </time>
              </h5>

              <div className="after-post-tags">
                <ul className="tags" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
ViewOneArticle.propTypes = {
  article: PropTypes.object
};

export default ViewOneArticle;

