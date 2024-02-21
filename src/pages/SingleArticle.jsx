import { useLocation, useNavigate } from "react-router-dom";

export const SingleArticle = () => {
  const navigate = useNavigate();
  const {state} = useLocation();

  const toArticles = () => {
    navigate("/articles");
  };

  return (
    <div className="one-article">
      <h3 onClick={toArticles} style={{ cursor: "pointer", color: "black" }}>
        {"<<"} Back 
      </h3>
      <h1>{state.title}</h1>
      <p>{state.content_text}</p>
      <h3 onClick={toArticles} style={{ cursor: "pointer", color: "black" }}>
        {"<<"} Back 
      </h3>
    </div>
  );
};
