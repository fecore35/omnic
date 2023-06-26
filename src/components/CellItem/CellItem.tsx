import { FunctionComponent } from "react";
import { ICell } from "redux/cell/cell-reducer";
import { findCellTitleBySize, normalizeSize } from "utils/NormalizeCell";
import s from "./CellItem.module.scss";

interface CellItemProps {
  cell: ICell;
  current?: ICell | null;
}

const CellItem: FunctionComponent<CellItemProps> = ({ cell }) => {
  const { type, params } = cell;
  const title = findCellTitleBySize(type).toLowerCase();

  return (
    <li className={s.cell}>
      <div className={`${s.image} image--${s.title}`}>
        <img src={`./images/cell/cell-${title}.svg`} alt={type} />
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