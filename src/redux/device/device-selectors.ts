import { AppState } from "redux/store";

export const getDeviceUID = (state: AppState) => state.device.device_uid;
