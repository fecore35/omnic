import { FunctionComponent } from "react";
import logo from "assets/images/logo.svg";
import { Path } from "static/enums/Path";
import s from "./Header.module.scss";
import { Link } from "react-router-dom";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <header className={s.header}>
      <nav className="site-navigation flexbox">
        <Link to={Path.HOME} className="logo">
          <img src={logo} width="118" alt="logo" />
        </Link>
      </nav>

      <span className={s.borderGradient}></span>
    </header>
  );
};

export default Header;
