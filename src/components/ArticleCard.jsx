import React from 'react';
import './ArticleCard.css';

const ArticleCard = ({ article }) => {
  return (
    <div className="article-card">
      <img src={article.imageUrl} alt={article.title} className="article-image" />
      <div className="article-content">
        <h2 className="article-title">{article.title}</h2>
        <p className="article-source">{article.source}</p>
        <p className="article-summary">{article.summary}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="article-link">Read More</a>
      </div>
    </div>
  );
};

export default ArticleCard;
