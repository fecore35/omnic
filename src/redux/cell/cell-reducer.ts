import { createSlice } from "@reduxjs/toolkit";
import { fetchCellsList } from "./cell-operations";

interface ICellParams {
  width: number;
  height: number;
  depth: number;
  label: string;
}

export interface ICell {
  type: string;
  has_empty: boolean;
  params: ICellParams;
}

interface ICellsList {
  cell_types: ICell[] | null;
  current: ICell | null;
  isLoading: boolean;
  error: any;
}

const initialState: ICellsList = {
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
