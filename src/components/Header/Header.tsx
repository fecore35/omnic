import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Path } from "static/enums/Path";
import useDeviceName from "hooks/useDeviceName";
import Menu from "components/Menu/Menu";
import logo from "assets/images/logo.svg";
import s from "./Header.module.scss";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  const { deviceName } = useDeviceName();

  return (
    <header className={s.header}>
      <nav className={`${s.navigation} flexbox`}>
        <Link to={Path.HOME} className={s.logo}>
          <img src={logo} width="118" alt="logo" />
        </Link>

        <Menu />

        {deviceName && <span className={s.name}>Поштомат №{deviceName}</span>}
      </nav>

      <span className={s.borderGradient}></span>
    </header>
  );
};

export default Header;
