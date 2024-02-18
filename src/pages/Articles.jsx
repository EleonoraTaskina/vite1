import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { ArticleCtx } from '../App';

export const Articles = () => {
  const { articles } = useContext(ArticleCtx);

  const navigate = useNavigate();

  const articleLinkClick = (id) => {
    navigate(`/articles/${id}`, { 
      state: {
        title: articles[ id-1 ].title, 
        content_text: articles[ id-1 ].content_text,
      },
    });
  };
    
  return (
    <div className="article-container">
      <h2>List of articles:</h2>
      <div className="article">
        {articles?.map((articles) => {
          return (
            <div className="article-card" key={articles.id}>
              <div>
                <h3>{articles.title}</h3>
                <h4>Theme: {articles.category}</h4>
                <p>{articles.description}</p>
              </div>
              <div>
                <img src={articles.photo_url} alt="" />
              </div>
              <div
                className="link-card"
                onClick={() => articleLinkClick(articles.id)}
                id={articles.id}
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
