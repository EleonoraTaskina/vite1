import { useLocation, useNavigate } from "react-router-dom";

export const SingleArticle = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const singleArticle = () => {
    navigate("/articles");
  };

  return (
    <div className="one-article wrapper">
      <h3 onClick={singleArticle} style={{ cursor: "pointer", color: "black" }}>
        {"<"} Back 
      </h3>
      <h1>{location.state.title}</h1>
      <p>{location.state.content_text}</p>
      <h3 onClick={singleArticle} style={{ cursor: "pointer", color: "black" }}>
        {"<"} Back 
      </h3>
    </div>
  );
};
