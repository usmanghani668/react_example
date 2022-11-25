import { configureStore } from "@reduxjs/toolkit";
import exampleReducers from "./slices/example";

export const store = configureStore({
  reducer: {
    example: exampleReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
