import { configureStore, combineReducers } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice/dataSlice";
import cartSlice from "./cartSlice/cartSlice";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({
  dataSlice,
  cartSlice,
});

const persistConfig = {
  key: "voltmart",
  storage:storage.default || storage,
  whitelist: ["cartSlice"], 
};

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);