import { AppState } from "redux/store";

export const getCellsList = (state: AppState) => state.cell.cell_types;
export const getCurrentCell = (state: AppState) => state.cell.current;
