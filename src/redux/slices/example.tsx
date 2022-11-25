import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ExampleState {
  value: number;
  incrementAmount: number;
  user: string;
}

const initialState: ExampleState = {
  value: 0,
  incrementAmount: 1,
  user: "",
};

export const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += state.incrementAmount;
    },
    decrement: (state) => {
      state.value -= state.incrementAmount;
    },
    setUser: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
    },
    changeIncrementAmount: (state, action: PayloadAction<number>) => {
      state.incrementAmount = action.payload;
    },
  },
});

export const { increment, decrement, changeIncrementAmount, setUser } =
  exampleSlice.actions;

export default exampleSlice.reducer;
