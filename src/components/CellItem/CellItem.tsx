import { FunctionComponent, useEffect } from "react";
import { ICell, setCurrentCell } from "redux/cell/cell-reducer";
import { findCellTitleBySize, normalizeSize } from "utils/NormalizeCell";
import s from "./CellItem.module.scss";
import { importAll } from "utils/Images";
import { useAppDispatch } from "redux/hooks";

interface CellItemProps {
  cell: ICell;
  current?: ICell | null;
}

const images = importAll(
  require.context("assets/images/cell", false, /\.(png|jpe?g|svg)$/)
);

const CellItem: FunctionComponent<CellItemProps> = ({ cell, current }) => {
  const { type, params } = cell;
  const title = findCellTitleBySize(type).toLowerCase();
  const dispatch = useAppDispatch();
  const isCurrent = cell.type === current?.type;

  const handlerCurrent = () => {
    if (isCurrent) {
      dispatch(setCurrentCell(null));
      return;
    }

    dispatch(setCurrentCell(cell));
  };

  useEffect(() => {
    return () => {
      dispatch(setCurrentCell(null));
    };
  }, [dispatch]);

  return (
    <li className={`${s.cell} cell--${title} `} data-has_empty={cell.has_empty}>
      <button
        className={`${s.btn} ${!cell.has_empty ? s.disabled : ""} ${
          isCurrent ? s.active : ""
        } `}
        type="button"
        disabled={!cell.has_empty}
        onClick={handlerCurrent}
      >
        <div className={`${s.image} image--${title}`}>
          <img src={images[`cell-${title}.svg`]} alt={type} />
        </div>
        <div>
          <h3 className={s.title}>{title}</h3>
          <p className={s.size}>
            {normalizeSize(params.width)}x{normalizeSize(params.height)} см
          </p>
        </div>
      </button>
    </li>
  );
};

export default CellItem;
