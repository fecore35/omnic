import CellsList from "components/CellsList/CellsList";
import { FunctionComponent, useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchCellsList } from "redux/cell/cell-operations";
import { getCellsList, getCurrentCell } from "redux/cell/cell-selectors";
import { useAppDispatch } from "redux/hooks";

interface CellsSizeProps {}

const CellsSizePage: FunctionComponent<CellsSizeProps> = () => {
  const dispatch = useAppDispatch();
  const cellsList = useSelector(getCellsList);
  const currentCell = useSelector(getCurrentCell);

  useEffect(() => {
    dispatch(fetchCellsList());
  }, [dispatch]);

  return <CellsList items={cellsList} current={currentCell} />;
};

export default CellsSizePage;
