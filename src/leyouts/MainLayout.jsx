import { Header } from "../conponents/Header";
import { Footer } from "../conponents/Footer";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <header>
        <div className="header-nav">
          <Header />
        </div>
      </header>
      <main className="out">{<Outlet />}</main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};