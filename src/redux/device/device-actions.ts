import { createAction } from "@reduxjs/toolkit";
import { DeviceActions } from "redux/actions";

export const setDeviceUID = createAction<string | undefined>(DeviceActions.UID);
