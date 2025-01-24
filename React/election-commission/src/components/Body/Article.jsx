import React from "react";
import "./Article.css";

const Article = ({ image, title }) => {
  return (
    <>
      <div className="newsArticle">
        <img
          src={image}
          style={{ height: "100px", width: "auto", borderRadius: "5px" }}
        />
        <h4>
          <a href="#">{title}</a>
        </h4>
      </div>
    </>
  );
};

export default Article;
