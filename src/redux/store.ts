import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import deviceReducer from "./device/device-reducer";
import cellReducer from "./cell/cell-reducer";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const devicePersistConfig = {
  key: "device",
  storage,
};

const cellPersistConfig = {
  key: "cell",
  storage,
};

export const store = configureStore({
  reducer: {
    device: persistReducer(devicePersistConfig, deviceReducer),
    cell: persistReducer(cellPersistConfig, cellReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
