import { useRef, useContext } from "react";
import { ArticleCtx } from "../App";
import { useNavigate } from "react-router-dom";


export const NewArticle = () => {
  const navigate = useNavigate();

  const { articles, setArticles } = useContext(ArticleCtx);
  const title = useRef(undefined);
  const description = useRef(undefined);
  const category = useRef(undefined);

  const createArticleManager = () => {
    const newArticle = {
      title: title.current.value,
      description: description.current.value,
      content_text: description.current.value,
      category: category.current.value,
      photo_url: `https://api.slingacademy.com/public/sample-blog-posts/${
        articles.length + 1 
      }.png`,
      id: articles.length + 1,
    }; 
    setArticles((prev) => [...prev, newArticle]);
    navigate(`/articles/${articles.length + 1}`,{
      state: {
        title: title.current.value, 
        content_text: description.current.value,
    },
   });
  };

  return (
    <div className="new-article">
      <h1>New Article</h1>
        <input ref={title} type="text" name="title" placeholder="Title" />
        <input ref={category} type="text" name="category" placeholder="Category" />
        <textarea ref={description} type="text" name="text" placeholder="Your Text here.." />
        <button onClick={createArticleManager}>Create New Article</button>
    </div>
  );
};
