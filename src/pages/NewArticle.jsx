import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { addNewArticle } from '../store/slices/articles'


export const NewArticle = () => {
  const articles = useSelector((state) => state.articlesStore.articles);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const title = useRef(undefined);
  const description = useRef(undefined);
  const category = useRef(undefined);

  const createArticleManager = () => {
    const NewArticle = {
      title: title.current.value,
      description: description.current.value,
      content_text: description.current.value,
      category: category.current.value,
      photo_url: `https://api.slingacademy.com/public/sample-blog-posts/${
        articles.length + 1 
      }.png`,
      id: articles.length + 1,
    }; 
    dispatch(addNewArticle(NewArticle));
   
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
