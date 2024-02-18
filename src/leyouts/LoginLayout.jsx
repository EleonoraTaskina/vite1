import { Footer } from "../conponents/Footer";
import { Link, Outlet } from "react-router-dom";

export const LoginLayout = () => {
  return (
    <>
      <header style={{color: "white"}}>
        <div className="header-inner">{<Outlet />}</div>
      </header>
      <main><Link to="/"><h2> Back </h2></Link></main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};