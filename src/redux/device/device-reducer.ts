import { createSlice } from "@reduxjs/toolkit";

interface Device {
  device_uid: string;
  name: string;
}

const initialState: Device = { device_uid: "", name: "" };

export const deviceReducer = createSlice({
  name: "device",
  initialState,
  reducers: {
    setDeviceUID: (state, action) => {
      return { ...state, device_uid: action.payload };
    },
    setDeviceName: (state, action) => {
      return { ...state, name: action.payload };
    },
  },
});

export const { setDeviceUID, setDeviceName } = deviceReducer.actions;
export default deviceReducer.reducer;
