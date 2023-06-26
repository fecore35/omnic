import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "redux/hooks";
import { fetchCellsList } from "redux/cell/cell-operations";
import { getCellsList, getCurrentCell } from "redux/cell/cell-selectors";

const useCellsList = () => {
  const cellsList = useSelector(getCellsList);
  const currentCell = useSelector(getCurrentCell);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCellsList());
  }, [dispatch]);

  return { cellsList, currentCell };
};

export default useCellsList;
