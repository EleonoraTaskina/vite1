import { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contacts } from "./pages/Contacts";
import { Articles } from "./pages/Articles";
import { SingleArticle } from "./pages/SingleArticle";
import { NewArticle } from "./pages/NewArticle";
import { NotFoundPage } from "./pages/NotFoundPage";
import { MainLayout } from "./leyouts/MainLayout";
import { LoginLayout } from "./leyouts/LoginLayout";
import { Login } from "./pages/Login";


export const ArticleCtx = createContext({});

export const App = () => {
  const [articles, setArticles] = useState([]);
  

  useEffect(() => {
    fetch("https://api.slingacademy.com/v1/sample-data/blog-posts")
      .then((data) => data.json())
      .then((data) => {
        setArticles(data.blogs);
    });
  },[]);

  return (
    <>
      <ArticleCtx.Provider value={{articles, setArticles }}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:id" element={<SingleArticle />} />
            <Route path="/new-article" element={<NewArticle />} />
          </Route>
          <Route path="/login" element={<LoginLayout />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ArticleCtx.Provider>
    </>
  );
};
