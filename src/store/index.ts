import { configureStore } from "@reduxjs/toolkit";

import firstReducer from "./firstSlice";

export const store = configureStore({
  reducer: {
    first: firstReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
