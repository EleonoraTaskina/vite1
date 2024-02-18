import { headerLinkData } from "../constants/headerLinkData";
import { LinkNav } from "./LinkNav";

export const Header = () => {
  return (
      <nav className="header-nav">
        {headerLinkData.map((isActiv) => {
          return <LinkNav key={isActiv.name} name={isActiv.name} href={isActiv.href} />;
        })}
      </nav>
  );
};
