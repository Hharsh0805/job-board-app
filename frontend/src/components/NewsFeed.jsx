import React from 'react';

const NewsFeed = ({ news }) => {
  return (
    <div className="news-feed">
      {news.map((article) => (
        <div key={article.id} className="news-item">
          <h3>{article.title}</h3>
          <p>{article.summary}</p>
          <a href="#" className="read-more">Read More</a>
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;

