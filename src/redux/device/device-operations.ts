import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import * as api from "services/omnic-api";

export const fetchDeviceInformation = createAsyncThunk(
  "device/fetchInformation",
  async () => {
    try {
      const { data } = await api.fetchDevice();

      return data;
    } catch (e: unknown) {
      const error = e as AxiosError;
      return error.message;
    }
  }
);
