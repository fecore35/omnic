import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Path } from "static/enums/Path";
import s from "./Scope.module.scss";
import imageFirst from "assets/images/home/hero-1.min.jpeg";
import imageSecond from "assets/images/home/hero-2-min.jpeg";

interface ScopeProps {}

interface ItemProps {
  title: string;
  to: string;
  image: string;
}

const Item: FunctionComponent<ItemProps> = ({ title, to, image }) => {
  return (
    <li className={s.item}>
      <Link to={to} className={s.link}>
        <picture>
          <img src={image} width="436" height="310" alt={title} />
        </picture>

        <span className={s.title}>{title}</span>
      </Link>
    </li>
  );
};

const Scope: FunctionComponent<ScopeProps> = () => {
  return (
    <ul className={s.scope}>
      <Item
        title="Надіслати посилку через поштомат"
        to={Path.PACKAGE}
        image={imageFirst}
      />
      <Item
        title="Повернення до інтернет магазину"
        to={Path.SHOP}
        image={imageSecond}
      />
    </ul>
  );
};

export default Scope;
