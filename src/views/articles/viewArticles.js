import React from "react";
import NavBar from "../../components/navigation/navBar";
import "../../assets/articleAssets/demo2.scss";
import PropTypes from "prop-types";
import placeholder from "../../assets/img/placeholder.jpg";

const dateFormat = require("dateformat");
const ViewAllArticles = ({ results }) => {
  const showArticles = results.map(article => (
    <ArticleCard {...article} key={article.slug} />
  ));

  return (
    <div>
      <NavBar />
      <div className="pic-container">{showArticles}</div>
    </div>
  );
};
ViewAllArticles.propTypes = {
  results: PropTypes.array,
  scroll: PropTypes.func
};
export default ViewAllArticles;

export const ArticleCard = article => (
  <div className="article-column">
    <a href={`/view-article/${article.slug}`} rel="bookmark">
      <img
        id="article_img"
        src={article.image ? article.image : placeholder}
        alt=""
      />
    </a>
    <div className="entry-info">
      <br />
      <header className="entry-header">
        <h3 className="entry-title">
          <a href={`/view-article/${article.slug}`} rel="bookmark">
            {article.title}
          </a>{" "}
        </h3>
      </header>
      <div className="entry-meta">
        <h5 className="entry-description">
          <span>{article.description}</span>
          <br />
        </h5>
        <a className="categories" href="/">
          {article.category_title}
        </a>
        <br />
        <time className="entry-date">
          {dateFormat(article.created_at, "mmmm d, yyyy")}
        </time>
        <br />
      </div>
      <br />
    </div>
  </div>
);
