import { AppState } from "redux/store";

export const getDeviceUID = (state: AppState) => state.device.device_uid;
export const getDeviceName = (state: AppState) => state.device.name;
