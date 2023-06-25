import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import deviceReducer from "./device/device-reducer";
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

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const todosPersistConfig = {
  key: "device",
  storage,
};

export const store = configureStore({
  reducer: {
    device: persistReducer(todosPersistConfig, deviceReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
