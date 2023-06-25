import { FunctionComponent } from "react";
import logo from "assets/images/logo.svg";
import { Path } from "static/enums/Path";
import s from "./Header.module.scss";
import { Link } from "react-router-dom";
import useDeviceName from "hooks/useDeviceName";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  const { deviceName } = useDeviceName();

  return (
    <header className={s.header}>
      <nav className={`${s.navigation} flexbox`}>
        <Link to={Path.HOME} className="logo">
          <img src={logo} width="118" alt="logo" />
        </Link>

        {deviceName && <span className={s.name}>Поштомат №{deviceName}</span>}
      </nav>

      <span className={s.borderGradient}></span>
    </header>
  );
};

export default Header;
