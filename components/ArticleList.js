import React from "react";
import articleStyles from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem";

export default function ArticleList({ articles }) {
  return (
    <div className={articleStyles.grid}>
      {articleStyles.map((article, index) => {
        <ArticleItem article={article} key={index} />;
      })}
    </div>
  );
}
