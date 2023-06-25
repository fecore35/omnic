import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import { Path } from "static/enums/Path";
import s from "./Menu.module.scss";

interface NavigationProps {}

const Navigation: FunctionComponent<NavigationProps> = () => {
  return (
    <ul className={s.menu}>
      <li>
        <NavLink
          to={Path.INSTRUCTIONS}
          className={({ isActive }) =>
            isActive ? `${s.link} ${s.active}` : s.link
          }
        >
          Інструкція
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
