import React from "react";
import NavBar from "../../components/navigation/navBar";
import SideBarAction from "./sideBar";
import "../../assets/articleAssets/demo2.scss";
import PropTypes from "prop-types";
import { roundofftime } from "./roundOffTime";

const dateFormat = require("dateformat");
const ViewOneArticle = ({ article, emailShare, handleEmail }) => {
  const roundUp = roundofftime(article);
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          <SideBarAction
            data={article}
            readtime={roundUp}
            emailShare={emailShare}
            handleEmail = {handleEmail}
          />
          <div className="col-md-9 col-xs-12 ">
            <center>
              <div className="center">
                <h1 className="posttitle">{article.title} </h1>
                <h4>
                  {article.description} {"  "}
                  <br />
                  <a className="categories" href="/">
                    {article.category_title}
                  </a>
                  {"    "}
                  <a className="readtime" href="#comments">
                    {dateFormat(roundUp, "M")} min read
                  </a>
                  {"    "}
                  <span className="readtime"> By {article.author} </span>
                  <span className="readtime">
                    On {dateFormat(article.created_at, "d mmm")}
                  </span>
                </h4>
                <h3>
                  <img
                    className="featured-image img-fluid"
                    id="article_image"
                    src={article.image}
                    alt=""
                  />
                </h3>
              </div>
            </center>
            <div className="article-post">
              <div dangerouslySetInnerHTML={{ __html: article.body }} />
            </div>
            <div className="entry-meta">
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
  article: PropTypes.object,
  emailShare: PropTypes.func,
  handleEmail : PropTypes.func
};

export default ViewOneArticle;
