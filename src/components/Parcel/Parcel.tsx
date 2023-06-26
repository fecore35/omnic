import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Path } from "static/enums/Path";
import Section from "components/Section/Section";
import Title from "components/Title/Title";
import s from "./Parcel.module.scss";
import image from "assets/images/packed/parcel-min.png";

interface ParcelProps {}

const Parcel: FunctionComponent<ParcelProps> = () => {
  return (
    <Section className={s.packed}>
      <>
        <Title type="h3">Відправлення має бути надійно упаковане</Title>

        <div className={s.info}>
          <picture className={s.image}>
            <img src={image} width="148" height="144" alt="" />
          </picture>

          <ol className={s.list}>
            <li>
              Упакуйте товар у коробку чи пакет. На упаковці <br />
              не повинно бути сторонніх наклейок та етикеток;
            </li>
            <li>
              Заклейте упаковку скотчем, щоб не було доступу <br />
              до вкладених предметів;
            </li>
          </ol>
        </div>

        <div className={s.footer}>
          <Link to={Path.CELLS_SIZE} className={`${s.btn} ${s.btnBlue}`}>
            Я ДОБРЕ УПАКОВАВ
          </Link>
          <Link to={Path.HOME} className={s.btn}>
            НАЗАД
          </Link>
        </div>
      </>
    </Section>
  );
};

export default Parcel;
