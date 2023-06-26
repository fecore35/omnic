import { createSlice } from "@reduxjs/toolkit";
import { fetchCellsList } from "./cell-operations";

interface CellParams {
  width: number;
  height: number;
  depth: number;
  label: string;
}

interface Cell {
  type: string;
  has_empty: boolean;
  params: CellParams;
}

interface CellsList {
  cell_types: Cell[] | null;
  current: Cell | null;
  isLoading: boolean;
  error: any;
}

const initialState: CellsList = {
  cell_types: null,
  current: null,
  isLoading: false,
  error: "",
};

export const cellReducer = createSlice({
  name: "cell",
  initialState,
  reducers: {
    setCurrentCell: (state, action) => {
      return { ...state, current: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCellsList.pending, (state, { payload }) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(fetchCellsList.fulfilled, (state, { payload }) => {
      return {
        ...state,
        cell_types: payload.cell_types,
        isLoading: false,
      };
    });
    builder.addCase(fetchCellsList.rejected, (state, { payload }) => {
      return { ...state, isLoading: false, error: payload };
    });
  },
});

export const {} = cellReducer.actions;
export default cellReducer.reducer;
