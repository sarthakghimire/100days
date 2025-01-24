import React from "react";
import "./News.css";
import Article from "./Article";

const News = () => {
  return (
    <div className="news-and-notices">
      <h2 id="news">News and Notices</h2>
      <div className="articles">
        <Article
          image="https://forumfedblog.org/wp-content/uploads/2022/08/nepali-flag-ballot-box-isolated-white-background-3d-rendering-scaled-2560x1280.jpg"
          title="Registrations Open for Local Election 2084"
        />
        <Article
          image="https://forumfedblog.org/wp-content/uploads/2022/08/nepali-flag-ballot-box-isolated-white-background-3d-rendering-scaled-2560x1280.jpg"
          title="Commission to remain closed this Thursday"
        />
        <Article
          image="https://forumfedblog.org/wp-content/uploads/2022/08/nepali-flag-ballot-box-isolated-white-background-3d-rendering-scaled-2560x1280.jpg"
          title="Chief Election Commissioner flies to Dubai."
        />
        <Article
          image="https://forumfedblog.org/wp-content/uploads/2022/08/nepali-flag-ballot-box-isolated-white-background-3d-rendering-scaled-2560x1280.jpg"
          title="Training conducted to employees from American Election Experts"
        />
        <Article
          image="https://forumfedblog.org/wp-content/uploads/2022/08/nepali-flag-ballot-box-isolated-white-background-3d-rendering-scaled-2560x1280.jpg"
          title="Notice regarding E-voter Card Registration"
        />
        <Article
          image="https://forumfedblog.org/wp-content/uploads/2022/08/nepali-flag-ballot-box-isolated-white-background-3d-rendering-scaled-2560x1280.jpg"
          title="British Ambassador visits Election Commission Nepal"
        />
      </div>
    </div>
  );
};

export default News;
