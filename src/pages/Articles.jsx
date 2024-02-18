import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  const articleLinkClick = (id) => {
    navigate(`/articles/${id}`, {state: {title: articles[id-1].title, content_text: articles[id-1].content_text}});
  }

  useEffect(() => {
    fetch("https://api.slingacademy.com/v1/sample-data/blog-posts")
      .then((data) => data.json())
      .then((data) => {
        setArticles(data.blogs);
      });
    }, []);
    
  return (
    <div className="article-container wrapper">
      <h2>List of articles:</h2>
      <div className="article">
        {articles.map((article) => {
          return (
            <div className="article-card" key={article.id}>
              <div>
                <h3>{article.title}</h3>
                <h4>Theme: {article.category}</h4>
                <p>{article.description}</p>
              </div>
              <div>
                <img src={article.photo_url} alt="" />
              </div>
              <div
                className="link-react"
                onClick={() => articleLinkClick(article.id)}
                id={article.id}
              >
                <div className="read">Go to read:</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
