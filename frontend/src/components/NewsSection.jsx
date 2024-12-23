import React from 'react';

const NewsSection = () => {
  const news = [
    { id: 1, title: "10 Tips for a Successful Job Interview", summary: "Learn how to ace your next job interview with these expert tips." },
    { id: 2, title: "The Future of Remote Work", summary: "Discover how remote work is shaping the future of employment." },
    { id: 3, title: "Top Skills Employers Are Looking For in 2023", summary: "Stay ahead of the curve by developing these in-demand skills." }
  ];

  return (
    <section className="news-section">
      <h2>Latest News and Articles</h2>
      <div className="news-grid">
        {news.map((article) => (
          <div key={article.id} className="news-item">
            <h3>{article.title}</h3>
            <p>{article.summary}</p>
            <a href="#" className="read-more">Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;

