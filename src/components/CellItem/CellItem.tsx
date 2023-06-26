import { FunctionComponent } from "react";
import { ICell } from "redux/cell/cell-reducer";
import { findCellTitleBySize, normalizeSize } from "utils/NormalizeCell";
import s from "./CellItem.module.scss";
import { importAll } from "utils/Images";

interface CellItemProps {
  cell: ICell;
  current?: ICell | null;
}

const images = importAll(
  require.context("assets/images/cell", false, /\.(png|jpe?g|svg)$/)
);

const CellItem: FunctionComponent<CellItemProps> = ({ cell }) => {
  const { type, params } = cell;
  const title = findCellTitleBySize(type).toLowerCase();

  return (
    <li className={`${s.cell} cell--${title}`}>
      <div className={`${s.image} image--${title}`}>
        <img src={images[`cell-${title}.svg`]} alt={type} />
      </div>
      <div>
        <h3 className={s.title}>{title}</h3>
        <p className={s.size}>
          {normalizeSize(params.width)}x{normalizeSize(params.height)} см
        </p>
      </div>
    </li>
  );
};

export default CellItem;
