import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import * as api from "services/omnic-api";

export const fetchCellsList = createAsyncThunk("cell/fetchCells", async () => {
  try {
    const { data } = await api.fetchCells();

    return data;
  } catch (e: unknown) {
    const error = e as AxiosError;
    return error.message;
  }
});
