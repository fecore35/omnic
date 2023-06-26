import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { ICell } from "redux/cell/cell-reducer";
import Section from "components/Section/Section";
import Title from "components/Title/Title";
import CellItem from "components/CellItem/CellItem";
import { Path } from "static/enums/Path";
import s from "./CellsList.module.scss";

interface CellsListProps {
  items: any;
  current: any;
}

const CellsList: FunctionComponent<CellsListProps> = ({ items, current }) => {
  return (
    <Section className={s.cellsList}>
      <>
        <Title type="h2">Оберіть розмір посилки</Title>

        <div className={s.cells}>
          <ul className={s.list}>
            {items && items.length > 0
              ? items.map((item: ICell) => (
                  <CellItem key={item.type} cell={item} current={current} />
                ))
              : void 0}
          </ul>
        </div>

        <div className={s.footer}>
          <Link
            to={Path.SHOP}
            className={`${s.btn} ${!current ? s.disabled : s.btnGreen}`}
          >
            ПІДТВЕРДИТИ
          </Link>
          <Link to={Path.PACKAGE} className={s.btn}>
            НАЗАД
          </Link>
        </div>
      </>
    </Section>
  );
};

export default CellsList;
