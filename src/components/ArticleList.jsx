import React from 'react';
import ArticleCard from './ArticleCard';
import './ArticleList.css';

const ArticleList = ({ articles }) => {
  return (
    <div className="article-list">
      {articles.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
