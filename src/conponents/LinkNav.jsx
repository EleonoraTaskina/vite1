import { NavLink } from "react-router-dom";

export const LinkNav = ({ name, href }) => {
  return (
    <NavLink className={(active) => {
      return active.isActive ? "link-nav active border" : "link-nav";
    }} to={href}>
      {name}
    </NavLink>
  );
};
