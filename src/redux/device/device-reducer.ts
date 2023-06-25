import { createSlice } from "@reduxjs/toolkit";
import { fetchDeviceInformation } from "./device-operations";

interface Device {
  device_uid: string;
  name: string | undefined;
  has_empty: boolean;
  isLoading: boolean;
  error: any;
}

const initialState: Device = {
  device_uid: "",
  name: "",
  has_empty: true,
  isLoading: false,
  error: "",
};

export const deviceReducer = createSlice({
  name: "device",
  initialState,
  reducers: {
    setDeviceUID: (state, action) => {
      return { ...state, device_uid: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDeviceInformation.pending, (state, { payload }) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(fetchDeviceInformation.fulfilled, (state, { payload }) => {
      return {
        ...state,
        name: payload.name,
        has_empty: payload.has_empty,
        isLoading: false,
      };
    });
    builder.addCase(fetchDeviceInformation.rejected, (state, { payload }) => {
      return { ...state, isLoading: false, error: payload };
    });
  },
});

export const { setDeviceUID } = deviceReducer.actions;
export default deviceReducer.reducer;
